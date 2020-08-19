import { findMedian } from "../median.js";

const testData = [
  {
    label: "single item array",
    numbers: [4],
    answer: 4,
  },
  {
    label: "three item array",
    numbers: [1, 2, 3],
    answer: 2,
  },
];

describe("result tests", () => {
  testData.map((data) => {
    it(`tests: ${data.label}`, () => {
      const result = findMedian(data.numbers);
      expect(result).toBe(data.answer);
    });
  });
});
