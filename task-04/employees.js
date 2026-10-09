export const employees = [
  { id: 1, name: "Andrei", department: "IT", salary: 2000, experience: 5 },
  { id: 2, name: "Maria", department: "HR", salary: 1500, experience: 2 },
  { id: 3, name: "Ion", department: "IT", salary: 1800, experience: 4 },
  { id: 4, name: "Elena", department: "Finance", salary: 2200, experience: 7 },
  { id: 5, name: "Vlad", department: "IT", salary: 1200, experience: 1 },
  { id: 6, name: "Ana", department: "HR", salary: 1600, experience: 6 },
  { id: 7, name: "Dan", department: "Finance", salary: 1700, experience: 3 },
];

export const filterByDepartment = (list, department) =>
  list.filter((e) => e.department === department);

export const groupByDepartment = (list) =>
  list.reduce(
    (groups, e) => ({
      ...groups,
      [e.department]: [...(groups[e.department] ?? []), e],
    }),
    {}
  );

export const averageSalary = (list) =>
  list.length ? list.reduce((s, { salary }) => s + salary, 0) / list.length : 0;

export const experienced = (list, years = 3) =>
  list.filter(({ experience }) => experience > years);

export const raiseSalary = (list, percent = 10) =>
  list.map((e) => ({ ...e, salary: e.salary * (1 + percent / 100) }));
