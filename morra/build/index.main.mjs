// Automatically generated with Reach 0.1.12 (1f18a9f3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f18a9f3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Karen(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Karen expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Karen expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v283 = stdlib.protect(ctc0, interact.deadline, 'for Karen\'s interact field deadline');
  const v284 = stdlib.protect(ctc0, interact.wager, 'for Karen\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v284, v283],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v284, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v288, v289], secs: v291, time: v290, didSend: v31, from: v287 } = txn1;
      
      sim_r.txns.push({
        amt: v288,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v300 = stdlib.safeAdd(v290, v289);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v288, v289], secs: v291, time: v290, didSend: v31, from: v287 } = txn1;
  ;
  const v300 = stdlib.safeAdd(v290, v289);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v300],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v287, v288, v289, v300],
      evt_cnt: 0,
      funcNum: 2,
      lct: v290,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v472, time: v471, didSend: v249, from: v470 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v287,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v472, time: v471, didSend: v249, from: v470 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:43:35:application',
      fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:59:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Karen'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v306, time: v305, didSend: v40, from: v304 } = txn2;
    const v308 = stdlib.add(v288, v288);
    ;
    let v309 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v310 = v305;
    let v317 = v308;
    
    let txn3 = txn2;
    while (await (async () => {
      const v325 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v325;})()) {
      const v332 = stdlib.safeAdd(v310, v289);
      const v336 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:66:54:application',
        fs: ['at ./index.rsh:65:19:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
        msg: 'getFingers',
        who: 'Karen'
        });
      const v337 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:67:50:application',
        fs: ['at ./index.rsh:65:19:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
        msg: 'getGuess',
        who: 'Karen'
        });
      const v338 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:68:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:65:19:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
        msg: 'random',
        who: 'Karen'
        });
      const v339 = stdlib.digest([ctc0, ctc0], [v338, v336]);
      const v341 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:69:72:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:65:19:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
        msg: 'random',
        who: 'Karen'
        });
      const v342 = stdlib.digest([ctc0, ctc0], [v341, v337]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v287, v288, v289, v304, v317, v332, v339, v342],
        evt_cnt: 2,
        funcNum: 4,
        lct: v310,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:74:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v345, v346], secs: v348, time: v347, didSend: v72, from: v344 } = txn4;
          
          ;
          const v356 = stdlib.safeAdd(v347, v289);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v332],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v287, v288, v289, v304, v317, v332],
          evt_cnt: 0,
          funcNum: 5,
          lct: v310,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v438, time: v437, didSend: v202, from: v436 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v304,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v438, time: v437, didSend: v202, from: v436 } = txn5;
        ;
        const v439 = stdlib.addressEq(v287, v436);
        const v440 = stdlib.addressEq(v304, v436);
        const v441 = v439 ? true : v440;
        stdlib.assert(v441, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:75:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Karen'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:43:35:application',
          fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:75:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Karen'
          });
        
        return;
        
        }
      else {
        const {data: [v345, v346], secs: v348, time: v347, didSend: v72, from: v344 } = txn4;
        ;
        const v349 = stdlib.addressEq(v287, v344);
        stdlib.assert(v349, {
          at: './index.rsh:74:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Karen'
          });
        const v356 = stdlib.safeAdd(v347, v289);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v356],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v287, v288, v289, v304, v317, v345, v346, v356],
            evt_cnt: 0,
            funcNum: 7,
            lct: v347,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v420, time: v419, didSend: v168, from: v418 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v287,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v420, time: v419, didSend: v168, from: v418 } = txn6;
          ;
          const v421 = stdlib.addressEq(v287, v418);
          const v422 = stdlib.addressEq(v304, v418);
          const v423 = v421 ? true : v422;
          stdlib.assert(v423, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:85:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Karen'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:43:35:application',
            fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:85:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Karen'
            });
          
          return;
          
          }
        else {
          const {data: [v363, v364], secs: v366, time: v365, didSend: v84, from: v362 } = txn5;
          ;
          const v367 = stdlib.addressEq(v304, v362);
          stdlib.assert(v367, {
            at: './index.rsh:84:17:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Karen'
            });
          const v374 = stdlib.safeAdd(v365, v289);
          const txn6 = await (ctc.sendrecv({
            args: [v287, v288, v289, v304, v317, v345, v346, v363, v364, v374, v338, v341, v336, v337],
            evt_cnt: 4,
            funcNum: 8,
            lct: v365,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:94:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v379, v380, v381, v382], secs: v384, time: v383, didSend: v96, from: v378 } = txn6;
              
              ;
              const v391 = stdlib.safeAdd(v381, v363);
              const v392 = stdlib.eq(v382, v391);
              const v394 = stdlib.eq(v364, v391);
              const v396 = v394 ? false : true;
              const v397 = v392 ? v396 : false;
              const v398 = v392 ? false : true;
              const v399 = v394 ? v398 : false;
              const v485 = v399 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              const v390 = v397 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v485;
              const cv309 = v390;
              const cv310 = v383;
              const cv317 = v317;
              
              await (async () => {
                const v309 = cv309;
                const v310 = cv310;
                const v317 = cv317;
                
                if (await (async () => {
                  const v325 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  
                  return v325;})()) {
                  const v332 = stdlib.safeAdd(v310, v289);
                  sim_r.isHalt = false;
                  }
                else {
                  const v454 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v457 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '2'), v288);
                  const v459 = v454 ? v287 : v304;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v459,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v374],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v287, v288, v289, v304, v317, v345, v346, v363, v364, v374],
              evt_cnt: 0,
              funcNum: 9,
              lct: v365,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v402, time: v401, didSend: v134, from: v400 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v304,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v402, time: v401, didSend: v134, from: v400 } = txn7;
            ;
            const v403 = stdlib.addressEq(v287, v400);
            const v404 = stdlib.addressEq(v304, v400);
            const v405 = v403 ? true : v404;
            stdlib.assert(v405, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:95:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Karen'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:43:35:application',
              fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:95:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Karen'
              });
            
            return;
            
            }
          else {
            const {data: [v379, v380, v381, v382], secs: v384, time: v383, didSend: v96, from: v378 } = txn6;
            ;
            const v385 = stdlib.addressEq(v287, v378);
            stdlib.assert(v385, {
              at: './index.rsh:94:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Karen'
              });
            const v386 = stdlib.digest([ctc0, ctc0], [v379, v381]);
            const v387 = stdlib.digestEq(v345, v386);
            stdlib.assert(v387, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:97:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Karen'
              });
            const v388 = stdlib.digest([ctc0, ctc0], [v380, v382]);
            const v389 = stdlib.digestEq(v346, v388);
            stdlib.assert(v389, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:98:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Karen'
              });
            const v391 = stdlib.safeAdd(v381, v363);
            const v392 = stdlib.eq(v382, v391);
            const v394 = stdlib.eq(v364, v391);
            const v396 = v394 ? false : true;
            const v397 = v392 ? v396 : false;
            const v398 = v392 ? false : true;
            const v399 = v394 ? v398 : false;
            const v485 = v399 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            const v390 = v397 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v485;
            const cv309 = v390;
            const cv310 = v383;
            const cv317 = v317;
            
            v309 = cv309;
            v310 = cv310;
            v317 = cv317;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v454 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v457 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '2'), v288);
    const v459 = v454 ? v287 : v304;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v309), {
      at: './index.rsh:110:28:application',
      fs: ['at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Karen'
      });
    
    return;
    }
  
  
  
  };
export async function Richard(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Richard expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Richard expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v288, v289], secs: v291, time: v290, didSend: v31, from: v287 } = txn1;
  ;
  const v300 = stdlib.safeAdd(v290, v289);
  stdlib.protect(ctc1, await interact.acceptWager(v288), {
    at: './index.rsh:56:29:application',
    fs: ['at ./index.rsh:55:17:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)'],
    msg: 'acceptWager',
    who: 'Richard'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v287, v288, v289, v300],
    evt_cnt: 0,
    funcNum: 1,
    lct: v290,
    onlyIf: true,
    out_tys: [],
    pay: [v288, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v306, time: v305, didSend: v40, from: v304 } = txn2;
      
      const v308 = stdlib.add(v288, v288);
      sim_r.txns.push({
        amt: v288,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v309 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v310 = v305;
      const v317 = v308;
      
      if (await (async () => {
        const v325 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v325;})()) {
        const v332 = stdlib.safeAdd(v310, v289);
        sim_r.isHalt = false;
        }
      else {
        const v454 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v457 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '2'), v288);
        const v459 = v454 ? v287 : v304;
        sim_r.txns.push({
          kind: 'from',
          to: v459,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v300],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v287, v288, v289, v300],
      evt_cnt: 0,
      funcNum: 2,
      lct: v290,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v472, time: v471, didSend: v249, from: v470 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v287,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v472, time: v471, didSend: v249, from: v470 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:43:35:application',
      fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:59:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Richard'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v306, time: v305, didSend: v40, from: v304 } = txn2;
    const v308 = stdlib.add(v288, v288);
    ;
    let v309 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v310 = v305;
    let v317 = v308;
    
    let txn3 = txn2;
    while (await (async () => {
      const v325 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v325;})()) {
      const v332 = stdlib.safeAdd(v310, v289);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v332],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v287, v288, v289, v304, v317, v332],
          evt_cnt: 0,
          funcNum: 5,
          lct: v310,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v438, time: v437, didSend: v202, from: v436 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v304,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v438, time: v437, didSend: v202, from: v436 } = txn5;
        ;
        const v439 = stdlib.addressEq(v287, v436);
        const v440 = stdlib.addressEq(v304, v436);
        const v441 = v439 ? true : v440;
        stdlib.assert(v441, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:75:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Richard'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:43:35:application',
          fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:75:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Richard'
          });
        
        return;
        
        }
      else {
        const {data: [v345, v346], secs: v348, time: v347, didSend: v72, from: v344 } = txn4;
        ;
        const v349 = stdlib.addressEq(v287, v344);
        stdlib.assert(v349, {
          at: './index.rsh:74:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Richard'
          });
        const v356 = stdlib.safeAdd(v347, v289);
        const v360 = stdlib.protect(ctc0, await interact.getFingers(), {
          at: './index.rsh:81:66:application',
          fs: ['at ./index.rsh:80:21:application call to [unknown function] (defined at: ./index.rsh:80:25:function exp)'],
          msg: 'getFingers',
          who: 'Richard'
          });
        const v361 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:82:62:application',
          fs: ['at ./index.rsh:80:21:application call to [unknown function] (defined at: ./index.rsh:80:25:function exp)'],
          msg: 'getGuess',
          who: 'Richard'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v287, v288, v289, v304, v317, v345, v346, v356, v360, v361],
          evt_cnt: 2,
          funcNum: 6,
          lct: v347,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:84:17:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v363, v364], secs: v366, time: v365, didSend: v84, from: v362 } = txn5;
            
            ;
            const v374 = stdlib.safeAdd(v365, v289);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v356],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v287, v288, v289, v304, v317, v345, v346, v356],
            evt_cnt: 0,
            funcNum: 7,
            lct: v347,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v420, time: v419, didSend: v168, from: v418 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v287,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v420, time: v419, didSend: v168, from: v418 } = txn6;
          ;
          const v421 = stdlib.addressEq(v287, v418);
          const v422 = stdlib.addressEq(v304, v418);
          const v423 = v421 ? true : v422;
          stdlib.assert(v423, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:85:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Richard'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:43:35:application',
            fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:85:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Richard'
            });
          
          return;
          
          }
        else {
          const {data: [v363, v364], secs: v366, time: v365, didSend: v84, from: v362 } = txn5;
          ;
          const v367 = stdlib.addressEq(v304, v362);
          stdlib.assert(v367, {
            at: './index.rsh:84:17:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Richard'
            });
          const v374 = stdlib.safeAdd(v365, v289);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v374],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v287, v288, v289, v304, v317, v345, v346, v363, v364, v374],
              evt_cnt: 0,
              funcNum: 9,
              lct: v365,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v402, time: v401, didSend: v134, from: v400 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v304,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v402, time: v401, didSend: v134, from: v400 } = txn7;
            ;
            const v403 = stdlib.addressEq(v287, v400);
            const v404 = stdlib.addressEq(v304, v400);
            const v405 = v403 ? true : v404;
            stdlib.assert(v405, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:95:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Richard'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:43:35:application',
              fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:95:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Richard'
              });
            
            return;
            
            }
          else {
            const {data: [v379, v380, v381, v382], secs: v384, time: v383, didSend: v96, from: v378 } = txn6;
            ;
            const v385 = stdlib.addressEq(v287, v378);
            stdlib.assert(v385, {
              at: './index.rsh:94:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Richard'
              });
            const v386 = stdlib.digest([ctc0, ctc0], [v379, v381]);
            const v387 = stdlib.digestEq(v345, v386);
            stdlib.assert(v387, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:97:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Richard'
              });
            const v388 = stdlib.digest([ctc0, ctc0], [v380, v382]);
            const v389 = stdlib.digestEq(v346, v388);
            stdlib.assert(v389, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:98:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Richard'
              });
            const v391 = stdlib.safeAdd(v381, v363);
            const v392 = stdlib.eq(v382, v391);
            const v394 = stdlib.eq(v364, v391);
            const v396 = v394 ? false : true;
            const v397 = v392 ? v396 : false;
            const v398 = v392 ? false : true;
            const v399 = v394 ? v398 : false;
            const v485 = v399 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            const v390 = v397 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v485;
            const cv309 = v390;
            const cv310 = v383;
            const cv317 = v317;
            
            v309 = cv309;
            v310 = cv310;
            v317 = cv317;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v454 = stdlib.eq(v309, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v457 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '2'), v288);
    const v459 = v454 ? v287 : v304;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v309), {
      at: './index.rsh:110:28:application',
      fs: ['at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Richard'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJIAIHKJgBqAFYMCYDAQABAQAiNQAxGEEE+CpkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAoRJIQgMQAF4SSUMQAEfSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQQSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BUlKIls1/iVbNf2BEFs1/IEYWzX7gAR/ojtSNP4WUDT9FlA0/BZQNPsWULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT+FjT8FlABEkQ0A1d4IDT9FjT7FlABEkQ0/DQDIQpbCDX6NPs0+hI1+TQDgaABWzT6EjX4NP80AyEGWzQDIQlbNANXMCAiIzT4NPkUEE0hBzT5NPgUEE0yBjQDJFtCAuxIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC+0mBBgxAAK5IIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEGWzX+IQlbNf1XMCA1/CRbNftXWCA1+ld4IDX5STUFSSJbNfglWzX3gARKIcv8NPgWUDT3FlCwMgY0AyEKWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQU1ATIGNQJCAmJIIQQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB9kkhBwxAAOBJgQQMQACYSCEENAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQlbNf1XMCA1/CRbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULAyBjQDIQxbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQg1ATIGNQJCAWwhBxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyENWw9EsSKyATQDIQZbsggjshA0A1cAILIHs0IBD0kjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBls1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBRzQDVwAgNP80AyEJWzEAIjIGNP9JCEIAX0iBoI0GiAEnIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDT/iAD3MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB+Nf81/jX9Nfw1+zX6Nfk0/SISQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQQ1ATIGNQJCADqxIrIBIQc0+guyCCOyEDT8NPk0/SEHEk2yB7NCAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v289",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v289",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v363",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v364",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v379",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v382",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v363",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v364",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v379",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v382",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001ded38038062001ded8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a70806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461155b565b610197565b6100a16100e836600461157e565b6103fc565b6100a16100fb36600461157e565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a161012336600461157e565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be929190611590565b6100a161015936600461157e565b610941565b6100a161016c3660046115ed565b610ad8565b6100a161017f36600461157e565b610ded565b6100a161019236600461155b565b610f48565b6101a7600760005414601c6111b9565b6101c1813515806101ba57506001548235145b601d6111b9565b6000808055600280546101d3906115ff565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115ff565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611688565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e6111b9565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611734565b60405180910390a16102d23415601a6111b9565b60608201516102ed906001600160a01b03163314601b6111b9565b6102fb4383604001516111df565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611765565b604051602081830303815290604052600290805190602001906103f5929190611414565b5050505050565b61040c60016000541460096111b9565b6104268135158061041f57506001548235145b600a6111b9565b600080805560028054610438906115ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906115ff565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117ec565b90506104dc81606001514310600b6111b9565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611865565b60405180910390a16105268160200151341460086111b9565b61052e611498565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160009052514392019190915251800160208201516040015261058681611232565b505050565b61059b600160005414600d6111b9565b6105b5813515806105ae57506001548235145b600e6111b9565b6000808055600280546105c7906115ff565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906115ff565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117ec565b905061066c8160600151431015600f6111b9565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611865565b60405180910390a16106b13415600c6111b9565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b5060008080556001819055610705906002906114f1565b5050565b61071960056000541460176111b9565b6107338135158061072c57506001548235145b60186111b9565b600080805560028054610745906115ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906115ff565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d691906118a2565b90506107ea8160a0015143101560196111b9565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611865565b60405180910390a161082f341560156111b9565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b60166111b9565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b9906115ff565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906115ff565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b61095160076000541460216111b9565b61096b8135158061096457506001548235145b60226111b9565b60008080556002805461097d906115ff565b80601f01602080910402602001604051908101604052809291908181526020018280546109a9906115ff565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e9190611688565b9050610a228160e0015143101560236111b9565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611865565b60405180910390a1610a673415601f6111b9565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b60206111b9565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae860096000541460286111b9565b610b0281351580610afb57506001548235145b60296111b9565b600080805560028054610b14906115ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610b40906115ff565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba59190611936565b6040805160608101825260008082526020820181905291810191909152909150610bd78261012001514310602a6111b9565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c4a341560246111b9565b8151610c62906001600160a01b0316331460256111b9565b604051610caf90610c89906020808701359160608801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266111b9565b60408051848201356020820152608085013591810191909152610cf5906060016040516020818303038152906040528051906020012060001c8360c001511460276111b9565b610d0a83602001604001358360e001516111df565b808252608084013581146020830152610100830151146040820152610d2d611498565b825181516001600160a01b039182169052602080850151835182015260408086015184519091015260608086015184519316920191909152820151610d73576000610d86565b8160400151610d83576001610d86565b60005b610dbf578160400151610d9a576000610dad565b8160200151610daa576001610dad565b60005b610db8576000610dc2565b6001610dc2565b60025b60208083018051929092528151439101526080840151905160400152610de781611232565b50505050565b610dfd600960005414602d6111b9565b610e1781351580610e1057506001548235145b602e6111b9565b600080805560028054610e29906115ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610e55906115ff565b8015610ea25780601f10610e7757610100808354040283529160200191610ea2565b820191906000526020600020905b815481529060010190602001808311610e8557829003601f168201915b5050505050806020019051810190610eba9190611936565b9050610ecf816101200151431015602f6111b9565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610f00929190611865565b60405180910390a1610f143415602b6111b9565b8051610863906001600160a01b03163314610f3e5760608201516001600160a01b03163314610f41565b60015b602c6111b9565b610f5860056000541460126111b9565b610f7281351580610f6b57506001548235145b60136111b9565b600080805560028054610f84906115ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb0906115ff565b8015610ffd5780601f10610fd257610100808354040283529160200191610ffd565b820191906000526020600020905b815481529060010190602001808311610fe057829003601f168201915b505050505080602001905181019061101591906118a2565b905061102d6040518060200160405280600081525090565b61103e8260a00151431060146111b9565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161106f929190611734565b60405180910390a1611083341560106111b9565b815161109b906001600160a01b0316331460116111b9565b6110a94383604001516111df565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111ec83826119e1565b915081101561122c5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111d6565b92915050565b604080516020810190915260008152602082015151611352576112658260200151602001518360000151604001516111df565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610de7929190611414565b60208201515160021461136a5781516060015161136e565b8151515b6001600160a01b03166108fc61138d60028560000151602001516113b5565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b60008115806113d9575082826113cb81836119f9565b92506113d79083611a18565b145b61122c5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111d6565b828054611420906115ff565b90600052602060002090601f0160209004810192826114425760008555611488565b82601f1061145b57805160ff1916838001178555611488565b82800160010185558215611488579182015b8281111561148857825182559160200191906001019061146d565b5061149492915061152e565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016114ec60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114fd906115ff565b6000825580601f1061150d575050565b601f01602090049060005260206000209081019061152b919061152e565b50565b5b80821115611494576000815560010161152f565b60006060828403121561155557600080fd5b50919050565b60006060828403121561156d57600080fd5b6115778383611543565b9392505050565b60006040828403121561155557600080fd5b82815260006020604081840152835180604085015260005b818110156115c4578581018301518582016060015282016115a8565b818111156115d6576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561155557600080fd5b600181811c9082168061161357607f821691505b6020821081141561155557634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561166657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461168357600080fd5b919050565b600061010080838503121561169c57600080fd5b6040519081019067ffffffffffffffff821181831017156116cd57634e487b7160e01b600052604160045260246000fd5b816040526116da8461166c565b815260208401516020820152604084015160408201526116fc6060850161166c565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161157760208301848035825260208082013590830152604090810135910152565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516117a560608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156117fe57600080fd5b6040516080810181811067ffffffffffffffff8211171561182f57634e487b7160e01b600052604160045260246000fd5b60405261183b8361166c565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461189357600080fd5b80604085015250509392505050565b600060c082840312156118b457600080fd5b60405160c0810181811067ffffffffffffffff821117156118e557634e487b7160e01b600052604160045260246000fd5b6040526118f18361166c565b815260208301516020820152604083015160408201526119136060840161166c565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561194957600080fd5b611951611634565b61195a8361166c565b8152602083015160208201526040830151604082015261197c6060840161166c565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119f4576119f46119cb565b500190565b6000816000190483118215151615611a1357611a136119cb565b500290565b600082611a3557634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212203d846ac4cd796f2fb5c3e7392aab6db80aa6707d0f15e45758de1c5b59bae78464736f6c634300080c0033`,
  BytecodeLen: 7661,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:107:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:63:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:75:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:76:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:85:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:86:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:95:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Karen": Karen,
  "Richard": Richard
  };
export const _APIs = {
  };
