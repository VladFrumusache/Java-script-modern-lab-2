import { calculateAverage, calculateSum } from "./utils.js";
import {
  students,
  formatStudent,
  getAllStudents,
  getTopStudents,
  getClassAverage,
  findStudentById,
  addStudent,
} from "./students.js";

// utils.js
const values = [4, 8, 15, 16, 23, 42];
console.log(`Suma: ${calculateSum(values)}`);
console.log(`Media: ${calculateAverage(values).toFixed(2)}`);

// students.js
console.log("\nToți elevii:");
getAllStudents().forEach((s) => console.log(formatStudent(s)));

console.log("\nElevi cu nota >= 8:");
getTopStudents().forEach((s) => console.log(formatStudent(s)));

console.log(`\nMedia clasei: ${getClassAverage().toFixed(2)}`);

for (const id of [3, 99]) {
  try {
    console.log(`Găsit: ${formatStudent(findStudentById(id))}`);
  } catch (error) {
    console.error(`Eroare: ${error.message}`);
  }
}

const updated = addStudent("Dan", 9);
console.log(`\nDupă adăugare (${updated.length} elevi):`);
updated.forEach((s) => console.log(formatStudent(s)));
