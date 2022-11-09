'reach 0.1'

const [ isOutcome, DRAW, R_WINS, K_WINS] = makeEnum(3);
const [ fingers, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ guess, zero, one, two, three, four, five, six, seven, eight, nine, ten ] = makeEnum(11);

// function to determine winner
const getWinner = function(fingersK,fingersR, guessK, guessR) {
    const total = fingersK + fingersR;
    const k_won = (guessK == total ? true: false);
    const r_won = (guessR == total ? true: false);
    if (k_won && !r_won) {
        return K_WINS;
    } else if (r_won && !k_won) {
        return R_WINS;
    } else {
        return DRAW
    }
}

// player functions
const Player = {
    ...hasRandom,
    getFingers: Fun([], UInt),
    getGuess: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    const Karen = Participant('Karen', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    });
    const Richard = Participant('Richard', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();
    const informTimeout = () => {
        each([Karen, Richard], () => {
            interact.informTimeout();
        });
    };
    Karen.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    })
    // publish wager and deadline
    Karen.publish(wager, deadline)
        .pay(wager)
    commit()
    // accept wager
    Richard.only(() => {
        interact.acceptWager(wager);
    });
    Richard.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Karen, informTimeout));
    var [outcome] = [DRAW];
    invariant(balance() == 2 * wager && isOutcome(outcome));
    while (outcome == DRAW) {
        commit();
        // get fingers and guess
        Karen.only(() => {
            const _fingersKaren = interact.getFingers();
            const _guessKaren = interact.getGuess();
            const [_commitKaren, _saltKaren] = makeCommitment(interact, _fingersKaren);
            const [_commitGuessKaren, _saltGuessKaren] = makeCommitment(interact, _guessKaren);

            const commitKaren = declassify(_commitKaren);
            const commitGuessKaren = declassify(_commitGuessKaren);
        });
        Karen.publish(commitKaren, commitGuessKaren)
            .timeout(relativeTime(deadline), () =>closeTo(Richard, informTimeout));
        commit();

        unknowable(Richard, Karen(_fingersKaren, _saltKaren));
        // get fingers and guess
        Richard.only(() => {
            const fingersRichard = declassify(interact.getFingers());
            const guessRichard = declassify(interact.getGuess());
        });
        Richard.publish(fingersRichard, guessRichard)
            .timeout(relativeTime(deadline), () => closeTo(Karen, informTimeout));
        commit();

        Karen.only(() => {
            const saltKaren = declassify(_saltKaren);
            const saltGuessKaren = declassify(_saltGuessKaren);
            const fingersKaren = declassify(_fingersKaren);
            const guessKaren = declassify(_guessKaren);
        });
        Karen.publish(saltKaren, saltGuessKaren, fingersKaren, guessKaren)
            .timeout(relativeTime(deadline), () => closeTo(Richard, informTimeout));

        checkCommitment(commitKaren, saltKaren, fingersKaren);
        checkCommitment(commitGuessKaren, saltGuessKaren, guessKaren)
        // get winner
        outcome = getWinner(fingersKaren, fingersRichard, guessKaren, guessRichard);
        continue;
    };
    // assert that someone wins in the end
    assert(outcome == K_WINS || outcome == R_WINS);
    // transfer wager to winner
    transfer(2 * wager).to(outcome == K_WINS ? Karen : Richard);
    commit();

    each([Karen, Richard], () => {
        interact.seeOutcome(outcome);
    });
}); 