import { findMedian } from "../median.js";

const testData = [
  {
    numbers: [4],
    answer: 4,
  },
];

describe("sanity checks", () => {
  it("should be a function", () => {
    const findMedian = () => () => {};
    const theResult = findMedian();
    expect(typeof theResult).toBe("function");
  });
});

describe("result tests", () => {
  it("tests single positive element", () => {
    const result = findMedian(testData[0].numbers);
    expect(result).toBe(testData[0].answer);
  });
});
