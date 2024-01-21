// -*- coding: utf-8, tab-width: 2 -*-

const EX = {

  usuallyUselessInTrace(s) {
    const m = (/^\w+ \(node:internal\/process\/task_queues:/.exec(s)
      || false);
    return m;
  },

  notUsuallyUselessInTrace(s) { return !EX.usuallyUselessInTrace(s); },

  trace(cut) {
    let t = String((new Error('')).stack);
    t = t.split(/\n\s*(?:at\s+|)/);
    t = t.filter(EX.notUsuallyUselessInTrace);
    t = t.slice(2 + (+cut || 0));
    return t;
  },

};

export default EX;
