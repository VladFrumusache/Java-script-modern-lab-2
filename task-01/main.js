const grades = [7, 9, 5, 10, 8, 6];

const highGrades = grades.filter((g) => g >= 8);
const average = grades.reduce((sum, g) => sum + g, 0) / grades.length;
const increased = grades.map((g) => Math.min(g + 1, 10));

console.log(`Note >= 8: ${highGrades.join(", ")}`);
console.log(`Media notelor: ${average.toFixed(2)}`);
console.log(`Note majorate cu 1 punct (max 10): ${increased.join(", ")}`);
