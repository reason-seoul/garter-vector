// Generated by ReScript, PLEASE EDIT WITH CARE

import * as FingerTree from "./FingerTree.mjs";
import * as Caml_option from "@rescript/std/lib/es6/caml_option.js";

var pushFront = FingerTree.pushl;

var pushBack = FingerTree.pushr;

function popFront(tree) {
  var match = FingerTree.viewl(tree);
  if (match) {
    return match._1;
  } else {
    return /* Empty */0;
  }
}

function popBack(tree) {
  var match = FingerTree.viewr(tree);
  if (match) {
    return match._1;
  } else {
    return /* Empty */0;
  }
}

function peekFront(tree) {
  var match = FingerTree.viewl(tree);
  if (match) {
    return Caml_option.some(match._0);
  }
  
}

function peekBack(tree) {
  var match = FingerTree.viewr(tree);
  if (match) {
    return Caml_option.some(match._0);
  }
  
}

var empty = /* Empty */0;

export {
  empty ,
  pushFront ,
  pushBack ,
  popFront ,
  popBack ,
  peekFront ,
  peekBack ,
}
/* No side effect */
