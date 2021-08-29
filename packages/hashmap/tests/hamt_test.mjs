// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Hamt from "../src/impl/Hamt.mjs";
import * as Caml_obj from "@rescript/std/lib/es6/caml_obj.js";
import * as Belt_List from "@rescript/std/lib/es6/belt_List.js";
import * as Belt_Array from "@rescript/std/lib/es6/belt_Array.js";
import * as Belt_Option from "@rescript/std/lib/es6/belt_Option.js";

function testHasher(k) {
  switch (k) {
    case "Sir Bedevere" :
        return 250;
    case "Sir Lancelot" :
        return 146;
    case "Sir Robin" :
        return 13;
    default:
      return 0;
  }
}

var toBinString = (function (n) {
  return "0b" + n.toString(2).padStart(8, '0');
});

function bitPositions(bits) {
  var f = function (_bits, _idx) {
    while(true) {
      var idx = _idx;
      var bits = _bits;
      if (bits === 0) {
        return /* [] */0;
      }
      if ((bits & 1) === 1) {
        return {
                hd: idx,
                tl: f((bits >>> 1), idx + 1 | 0)
              };
      }
      _idx = idx + 1 | 0;
      _bits = (bits >>> 1);
      continue ;
    };
  };
  return Belt_List.toArray(f(bits, 0));
}

function log(root) {
  var p = function (root, depth) {
    var log = function (s) {
      console.log("\t".repeat(depth) + s);
      
    };
    log("Bitmap: " + toBinString(root.bitmap));
    return Belt_Array.forEach(Belt_Array.zip(bitPositions(root.bitmap), root.data), (function (param) {
                  var v = param[1];
                  var idx = param[0];
                  switch (v.TAG | 0) {
                    case /* BitmapIndexed */0 :
                        log("[" + idx + "] SubTrie:");
                        return p(v._0, depth + 1 | 0);
                    case /* MapEntry */1 :
                        var match = v._0;
                        return log("[" + idx + "] MapEntry: " + match[0] + " => " + match[1]);
                    case /* HashCollision */2 :
                        return log("[" + idx + "] HashCollision: " + v._0.entries);
                    
                  }
                }));
  };
  return p(root, 0);
}

var m_data = [
  {
    TAG: /* MapEntry */1,
    _0: [
      "Sir Robin",
      10
    ]
  },
  {
    TAG: /* MapEntry */1,
    _0: [
      "Sir Bedevere",
      20
    ]
  }
];

var m = {
  bitmap: 6,
  data: m_data
};

function get(m, k) {
  return Hamt.BitmapIndexed.find(m, 0, testHasher(k), k);
}

function set(m, k, v) {
  return Hamt.BitmapIndexed.assoc(m, 0, testHasher, testHasher(k), k, v);
}

function remove(m, k) {
  return Hamt.BitmapIndexed.dissoc(m, 0, testHasher(k), k);
}

if (!Caml_obj.caml_equal(get(m, "Sir Robin"), 10)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "hamt_test.res",
          68,
          0
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal(get(m, "Sir Bedevere"), 20)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "hamt_test.res",
          69,
          0
        ],
        Error: new Error()
      };
}

if (get(m, "Sir Lancelot") !== undefined) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "hamt_test.res",
          70,
          0
        ],
        Error: new Error()
      };
}

var t2 = set(m, "Sir Lancelot", 30);

var m2_data = [
  {
    TAG: /* MapEntry */1,
    _0: [
      "Sir Robin",
      10
    ]
  },
  {
    TAG: /* BitmapIndexed */0,
    _0: {
      bitmap: 5,
      data: [
        {
          TAG: /* MapEntry */1,
          _0: [
            "Sir Lancelot",
            30
          ]
        },
        {
          TAG: /* MapEntry */1,
          _0: [
            "Sir Bedevere",
            20
          ]
        }
      ]
    }
  }
];

var m2 = {
  bitmap: 6,
  data: m2_data
};

if (!Caml_obj.caml_equal(t2, m2)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "hamt_test.res",
          85,
          0
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal(get(m2, "Sir Robin"), 10)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "hamt_test.res",
          86,
          0
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal(get(m2, "Sir Bedevere"), 20)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "hamt_test.res",
          87,
          0
        ],
        Error: new Error()
      };
}

if (!Caml_obj.caml_equal(get(m2, "Sir Lancelot"), 30)) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "hamt_test.res",
          88,
          0
        ],
        Error: new Error()
      };
}

Belt_Option.forEach(remove(m2, "Sir Robin"), log);

Belt_Option.forEach(Belt_Option.flatMap(remove(m2, "Sir Lancelot"), (function (__x) {
            return remove(__x, "Sir Bedevere");
          })), log);

export {
  testHasher ,
  toBinString ,
  bitPositions ,
  log ,
  m ,
  get ,
  set ,
  remove ,
  t2 ,
  m2 ,
  
}
/*  Not a pure module */
