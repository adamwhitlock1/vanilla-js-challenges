export const findMedian = (numbers) => {
  let count = numbers.length;

  // make sure the array is sorted in accending order
  numbers.sort(function (a, b) {
    return a - b;
  });

  // modulo to check if even or odd
  if (count % 2 === 0) {
    // split the array and divide
    return (numbers[count / 2 - 1] + numbers[count / 2]) / 2;
  }

  // move to the middle and return
  return numbers[(count - 1) / 2];
};

export const untestedFunction = (word) => {
  console.log(word);
};
