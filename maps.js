///* W3.JS 1.02 May 2017 by w3schools.com */
var w3 = {};

w3.removeClass = function (sel, name) {
  w3.removeClassElements(w3.getElements(sel), name);
};