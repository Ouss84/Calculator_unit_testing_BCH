"use strict";

const { sum } = require("../calcLibrary");

describe("test sum with integers one by one", () => {
  test("test 1+1=2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  test("test 2+3=5", () => {
    expect(sum(2, 3)).toBe(5);
  });
  test("test -2+-4=-6", () => {
    expect(sum(-2, -4)).toBe(-6);
  });
  test("test -2+4=-2", () => {
    expect(sum(-2, 4)).toBe(2);
  });
});

describe("test sum with integers using test.each", () => {
  const testValue = [
    //a  b   expected
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
  ];
  test.each(testValue)("sum(%p,%p)=%p", (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
  });
});

describe("test sum with floats using test.each", () => {
  const testValues = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [-3, 2.5, -0.5],
    [-2.5, -2.5, -5],
    [-2.5, 2.5, 0],
    [2.4, -2.5, -0.1],
  ];
  test.each(testValues)("sum(%s,%s)=%s", (a, b, expected) => {
    expect(sum(a, b)).toBeCloseTo(expected);
  });
});

describe("test sum missing parameters throw an exception", () => {
  test("sum() throws an exception 'parameter missing'", () => {
    expect(() => sum()).toThrow("parameter missing");
  });
  const testValues = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];
  test.each(testValues)("sum(%s) throws an exception: %s", (a, expected) => {
    expect(() => sum(a)).toThrow(expected);
  });
  const testValuesV2 = [[null], [1], ["a"], [""]];
  test.each(testValuesV2)(
    "sum(%s) throws an exception: 'parameter missing'",
    (a) => {
      expect(() => sum(a)).toThrow("parameter missing");
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
    "sum(%s,%s) throws an exception: only numbers allowed",
    (a, b) => {
      expect(() => sum(a, b)).toThrow("only numbers allowed");
    }
  );
  // same test but using a function naming
  const testFunction = test.each(testValues);
  testFunction(
    "sum(%s,%s) throws an exception: only numbers allowed",
    (a, b) => {
      expect(() => sum(a, b)).toThrow("only numbers allowed");
    }
  );
});
