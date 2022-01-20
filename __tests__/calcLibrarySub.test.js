"use strict";
const { substract } = require("../calcLibrary");

describe("test subtract with integers using test.each", () => {
  const testValue = [
    //a  b   expected
    [1, 0, 1],
    [0, 1, -1],
    [6, 5, 1],
    [2, 6, -4],
    [-4, -6, 2],
    [-3, 2, -5],
    [4, -2, 6],
  ];
  test.each(testValue)("substract(%p,%p)=%p", (a, b, expected) => {
    expect(substract(a, b)).toBe(expected);
  });
});

describe("test sum with floats using test.each", () => {
  const testValues = [
    [10, 11.5, -1.5],
    [-2.5, 3, -5.5],
    [2.5, 2.5, 0],
    [2.4, -2.5, 4.9],
  ];
  test.each(testValues)("substract(%s,%s)=%s", (a, b, expected) => {
    expect(substract(a, b)).toBeCloseTo(expected);
  });
});

describe("test sub missing parameters throw an exception", () => {
  test("substract() throws an exception 'parameter missing'", () => {
    expect(() => substract()).toThrow("parameter missing");
  });
  const testValues = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];
  test.each(testValues)(
    "substract(%s) throws an exception: %s",
    (a, expected) => {
      expect(() => substract(a)).toThrow(expected);
    }
  );
});

describe("test Parameters are not numbers", () => {
  const testValues = [
    ["a", 1],
    [1, "a"],
    ["a", "b"],
    ["", ""],
    ["1", "2"],
  ];
  test.each(testValues)(
    "substract(%s,%s) throws an exception: only numbers allowed",
    (a, b) => {
      expect(() => substract(a, b)).toThrow("only numbers allowed");
    }
  );
});
