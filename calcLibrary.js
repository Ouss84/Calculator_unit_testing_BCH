"use strict";

const sum = (a, b) => {
  if (a == undefined || b == undefined) {
    throw Error("parameter missing");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("only numbers allowed");
  }
  return a + b;
};

const substract = (a, b) => {
  if (a == undefined || b == undefined) {
    throw Error("parameter missing");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("only numbers allowed");
  }
  return a - b;
};

const divide = (a, b) => {
  return a / b;
};
module.exports = { sum, substract, divide };
