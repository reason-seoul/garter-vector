// Generated by ReScript, PLEASE EDIT WITH CARE


function pushl_aux(tree, x) {
  if (typeof tree === "number") {
    return {
            TAG: /* Single */0,
            _0: x
          };
  }
  if (tree.TAG === /* Single */0) {
    return {
            TAG: /* Deep */1,
            _0: {
              TAG: /* One */0,
              _0: x
            },
            _1: /* Empty */0,
            _2: {
              TAG: /* One */0,
              _0: tree._0
            }
          };
  }
  var sf = tree._2;
  var m = tree._1;
  var pr = tree._0;
  switch (pr.TAG | 0) {
    case /* One */0 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Two */1,
                  _0: x,
                  _1: pr._0
                },
                _1: m,
                _2: sf
              };
    case /* Two */1 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Three */2,
                  _0: x,
                  _1: pr._0,
                  _2: pr._1
                },
                _1: m,
                _2: sf
              };
    case /* Three */2 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Four */3,
                  _0: x,
                  _1: pr._0,
                  _2: pr._1,
                  _3: pr._2
                },
                _1: m,
                _2: sf
              };
    case /* Four */3 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Two */1,
                  _0: x,
                  _1: pr._0
                },
                _1: pushl_aux(m, /* Node3 */{
                      _0: pr._1,
                      _1: pr._2,
                      _2: pr._3
                    }),
                _2: sf
              };
    
  }
}

function pushl(tree, x) {
  if (typeof tree === "number") {
    return {
            TAG: /* Single */0,
            _0: x
          };
  }
  if (tree.TAG === /* Single */0) {
    return {
            TAG: /* Deep */1,
            _0: {
              TAG: /* One */0,
              _0: x
            },
            _1: /* Empty */0,
            _2: {
              TAG: /* One */0,
              _0: tree._0
            }
          };
  }
  var sf = tree._2;
  var m = tree._1;
  var pr = tree._0;
  switch (pr.TAG | 0) {
    case /* One */0 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Two */1,
                  _0: x,
                  _1: pr._0
                },
                _1: m,
                _2: sf
              };
    case /* Two */1 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Three */2,
                  _0: x,
                  _1: pr._0,
                  _2: pr._1
                },
                _1: m,
                _2: sf
              };
    case /* Three */2 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Four */3,
                  _0: x,
                  _1: pr._0,
                  _2: pr._1,
                  _3: pr._2
                },
                _1: m,
                _2: sf
              };
    case /* Four */3 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Two */1,
                  _0: x,
                  _1: pr._0
                },
                _1: pushl_aux(m, /* Node3 */{
                      _0: pr._1,
                      _1: pr._2,
                      _2: pr._3
                    }),
                _2: sf
              };
    
  }
}

function pushr_aux(tree, x) {
  if (typeof tree === "number") {
    return {
            TAG: /* Single */0,
            _0: x
          };
  }
  if (tree.TAG === /* Single */0) {
    return {
            TAG: /* Deep */1,
            _0: {
              TAG: /* One */0,
              _0: x
            },
            _1: /* Empty */0,
            _2: {
              TAG: /* One */0,
              _0: tree._0
            }
          };
  }
  var sf = tree._2;
  var m = tree._1;
  var pr = tree._0;
  switch (sf.TAG | 0) {
    case /* One */0 :
        return {
                TAG: /* Deep */1,
                _0: pr,
                _1: m,
                _2: {
                  TAG: /* Two */1,
                  _0: sf._0,
                  _1: x
                }
              };
    case /* Two */1 :
        return {
                TAG: /* Deep */1,
                _0: pr,
                _1: m,
                _2: {
                  TAG: /* Three */2,
                  _0: sf._0,
                  _1: sf._1,
                  _2: x
                }
              };
    case /* Three */2 :
        return {
                TAG: /* Deep */1,
                _0: pr,
                _1: m,
                _2: {
                  TAG: /* Four */3,
                  _0: sf._0,
                  _1: sf._1,
                  _2: sf._2,
                  _3: x
                }
              };
    case /* Four */3 :
        return {
                TAG: /* Deep */1,
                _0: pr,
                _1: pushr_aux(m, /* Node3 */{
                      _0: sf._0,
                      _1: sf._1,
                      _2: sf._2
                    }),
                _2: {
                  TAG: /* Two */1,
                  _0: sf._3,
                  _1: x
                }
              };
    
  }
}

function pushr(tree, x) {
  if (typeof tree === "number") {
    return {
            TAG: /* Single */0,
            _0: x
          };
  }
  if (tree.TAG === /* Single */0) {
    return {
            TAG: /* Deep */1,
            _0: {
              TAG: /* One */0,
              _0: x
            },
            _1: /* Empty */0,
            _2: {
              TAG: /* One */0,
              _0: tree._0
            }
          };
  }
  var sf = tree._2;
  var m = tree._1;
  var pr = tree._0;
  switch (sf.TAG | 0) {
    case /* One */0 :
        return {
                TAG: /* Deep */1,
                _0: pr,
                _1: m,
                _2: {
                  TAG: /* Two */1,
                  _0: sf._0,
                  _1: x
                }
              };
    case /* Two */1 :
        return {
                TAG: /* Deep */1,
                _0: pr,
                _1: m,
                _2: {
                  TAG: /* Three */2,
                  _0: sf._0,
                  _1: sf._1,
                  _2: x
                }
              };
    case /* Three */2 :
        return {
                TAG: /* Deep */1,
                _0: pr,
                _1: m,
                _2: {
                  TAG: /* Four */3,
                  _0: sf._0,
                  _1: sf._1,
                  _2: sf._2,
                  _3: x
                }
              };
    case /* Four */3 :
        return {
                TAG: /* Deep */1,
                _0: pr,
                _1: pushr_aux(m, /* Node3 */{
                      _0: sf._0,
                      _1: sf._1,
                      _2: sf._2
                    }),
                _2: {
                  TAG: /* Two */1,
                  _0: sf._3,
                  _1: x
                }
              };
    
  }
}

function head(digit) {
  return digit._0;
}

function tail(digit) {
  switch (digit.TAG | 0) {
    case /* One */0 :
        return /* [] */0;
    case /* Two */1 :
        return {
                hd: digit._1,
                tl: /* [] */0
              };
    case /* Three */2 :
        return {
                hd: digit._1,
                tl: {
                  hd: digit._2,
                  tl: /* [] */0
                }
              };
    case /* Four */3 :
        return {
                hd: digit._1,
                tl: {
                  hd: digit._2,
                  tl: {
                    hd: digit._3,
                    tl: /* [] */0
                  }
                }
              };
    
  }
}

function last(digit) {
  switch (digit.TAG | 0) {
    case /* One */0 :
        return digit._0;
    case /* Two */1 :
        return digit._1;
    case /* Three */2 :
        return digit._2;
    case /* Four */3 :
        return digit._3;
    
  }
}

function init(digit) {
  switch (digit.TAG | 0) {
    case /* One */0 :
        return /* [] */0;
    case /* Two */1 :
        return {
                hd: digit._0,
                tl: /* [] */0
              };
    case /* Three */2 :
        return {
                hd: digit._0,
                tl: {
                  hd: digit._1,
                  tl: /* [] */0
                }
              };
    case /* Four */3 :
        return {
                hd: digit._0,
                tl: {
                  hd: digit._1,
                  tl: {
                    hd: digit._2,
                    tl: /* [] */0
                  }
                }
              };
    
  }
}

function toDigit(l) {
  if (l) {
    var match = l.tl;
    var a = l.hd;
    if (!match) {
      return {
              TAG: /* One */0,
              _0: a
            };
    }
    var match$1 = match.tl;
    var b = match.hd;
    if (!match$1) {
      return {
              TAG: /* Two */1,
              _0: a,
              _1: b
            };
    }
    var match$2 = match$1.tl;
    var c = match$1.hd;
    if (!match$2) {
      return {
              TAG: /* Three */2,
              _0: a,
              _1: b,
              _2: c
            };
    }
    if (match$2.tl) {
      throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "FingerTree.res",
              103,
              9
            ],
            Error: new Error()
          };
    }
    return {
            TAG: /* Four */3,
            _0: a,
            _1: b,
            _2: c,
            _3: match$2.hd
          };
  }
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "FingerTree.res",
          103,
          9
        ],
        Error: new Error()
      };
}

function toDigitNode(n) {
  return {
          TAG: /* Three */2,
          _0: n._0,
          _1: n._1,
          _2: n._2
        };
}

function toTree(d) {
  switch (d.TAG | 0) {
    case /* One */0 :
        return {
                TAG: /* Single */0,
                _0: d._0
              };
    case /* Two */1 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* One */0,
                  _0: d._0
                },
                _1: /* Empty */0,
                _2: {
                  TAG: /* One */0,
                  _0: d._1
                }
              };
    case /* Three */2 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Two */1,
                  _0: d._0,
                  _1: d._1
                },
                _1: /* Empty */0,
                _2: {
                  TAG: /* One */0,
                  _0: d._2
                }
              };
    case /* Four */3 :
        return {
                TAG: /* Deep */1,
                _0: {
                  TAG: /* Two */1,
                  _0: d._0,
                  _1: d._1
                },
                _1: /* Empty */0,
                _2: {
                  TAG: /* Two */1,
                  _0: d._2,
                  _1: d._3
                }
              };
    
  }
}

function viewl_aux(tree) {
  if (typeof tree === "number") {
    return /* Nil */0;
  }
  if (tree.TAG === /* Single */0) {
    return /* Cons */{
            _0: tree._0,
            _1: /* Empty */0
          };
  }
  var a = tree._0;
  if (a.TAG !== /* One */0) {
    return /* Cons */{
            _0: a._0,
            _1: {
              TAG: /* Deep */1,
              _0: toDigit(tail(a)),
              _1: tree._1,
              _2: tree._2
            }
          };
  }
  var sf = tree._2;
  var match = viewl_aux(tree._1);
  var v = match ? ({
        TAG: /* Deep */1,
        _0: toDigitNode(match._0),
        _1: match._1,
        _2: sf
      }) : toTree(sf);
  return /* Cons */{
          _0: a._0,
          _1: v
        };
}

function viewl(tree) {
  if (typeof tree === "number") {
    return /* Nil */0;
  }
  if (tree.TAG === /* Single */0) {
    return /* Cons */{
            _0: tree._0,
            _1: /* Empty */0
          };
  }
  var a = tree._0;
  if (a.TAG !== /* One */0) {
    return /* Cons */{
            _0: a._0,
            _1: {
              TAG: /* Deep */1,
              _0: toDigit(tail(a)),
              _1: tree._1,
              _2: tree._2
            }
          };
  }
  var sf = tree._2;
  var match = viewl_aux(tree._1);
  var v = match ? ({
        TAG: /* Deep */1,
        _0: toDigitNode(match._0),
        _1: match._1,
        _2: sf
      }) : toTree(sf);
  return /* Cons */{
          _0: a._0,
          _1: v
        };
}

function viewr_aux(tree) {
  if (typeof tree === "number") {
    return /* Nil */0;
  }
  if (tree.TAG === /* Single */0) {
    return /* Cons */{
            _0: tree._0,
            _1: /* Empty */0
          };
  }
  var a = tree._2;
  var m = tree._1;
  var pr = tree._0;
  if (a.TAG !== /* One */0) {
    return /* Cons */{
            _0: last(a),
            _1: {
              TAG: /* Deep */1,
              _0: pr,
              _1: m,
              _2: toDigit(init(a))
            }
          };
  }
  var match = viewr_aux(m);
  var v = match ? ({
        TAG: /* Deep */1,
        _0: pr,
        _1: match._1,
        _2: toDigitNode(match._0)
      }) : toTree(pr);
  return /* Cons */{
          _0: a._0,
          _1: v
        };
}

function viewr(tree) {
  if (typeof tree === "number") {
    return /* Nil */0;
  }
  if (tree.TAG === /* Single */0) {
    return /* Cons */{
            _0: tree._0,
            _1: /* Empty */0
          };
  }
  var a = tree._2;
  var m = tree._1;
  var pr = tree._0;
  if (a.TAG !== /* One */0) {
    return /* Cons */{
            _0: last(a),
            _1: {
              TAG: /* Deep */1,
              _0: pr,
              _1: m,
              _2: toDigit(init(a))
            }
          };
  }
  var match = viewr_aux(m);
  var v = match ? ({
        TAG: /* Deep */1,
        _0: pr,
        _1: match._1,
        _2: toDigitNode(match._0)
      }) : toTree(pr);
  return /* Cons */{
          _0: a._0,
          _1: v
        };
}

export {
  pushl_aux ,
  pushl ,
  pushr_aux ,
  pushr ,
  head ,
  tail ,
  last ,
  init ,
  toDigit ,
  toDigitNode ,
  toTree ,
  viewl_aux ,
  viewl ,
  viewr_aux ,
  viewr ,
}
/* No side effect */
