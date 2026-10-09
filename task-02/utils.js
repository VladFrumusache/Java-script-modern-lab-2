export const calculateSum = (numbers) =>
  numbers.reduce((sum, n) => sum + n, 0);

export const calculateAverage = (numbers) =>
  numbers.length === 0 ? 0 : calculateSum(numbers) / numbers.length;
