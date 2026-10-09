import { calculateAverage } from "./utils.js";

export const students = [
  { id: 1, name: "Ana", grade: 9 },
  { id: 2, name: "Ion", grade: 7 },
  { id: 3, name: "Maria", grade: 10 },
  { id: 4, name: "Vasile", grade: 6 },
  { id: 5, name: "Elena", grade: 8 },
];

export const formatStudent = ({ id, name, grade }) =>
  `#${id} ${name} - nota: ${grade}`;

export const getAllStudents = (list = students) => list;

export const getTopStudents = (list = students) =>
  list.filter(({ grade }) => grade >= 8);

export const getClassAverage = (list = students) =>
  calculateAverage(list.map(({ grade }) => grade));

export const findStudentById = (id, list = students) => {
  const student = list.find((s) => s.id === id);
  if (!student) {
    throw new Error(`Elevul cu id-ul ${id} nu există.`);
  }
  return student;
};

export const addStudent = (name, grade, list = students) => {
  const id = list.length ? Math.max(...list.map((s) => s.id)) + 1 : 1;
  return [...list, { id, name, grade }];
};
