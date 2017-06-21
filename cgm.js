///* W3.JS 1.02 May 2017 by w3schools.com */
"use strict";
var w3 = {};

w3.removeClass = function (sel, name) {
  w3.removeClassElements(w3.getElements(sel), name);
};
w3.removeClassElements = function (elements, name) {
  var i, l = elements.length, arr1, arr2, j;
  for (i = 0; i < l; i++) {
    w3.removeClassElement(elements[i], name);
  }
};
w3.removeClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
};
