import {
  employees,
  groupByDepartment,
  averageSalary,
  experienced,
  raiseSalary,
} from "./employees.js";

const groups = groupByDepartment(employees);
const seniorIds = new Set(experienced(employees).map(({ id }) => id));
const updated = employees.map((e) =>
  seniorIds.has(e.id) ? raiseSalary([e])[0] : e
);

console.log("===== RAPORT FINAL =====");
console.log(`Salariu mediu inițial: ${averageSalary(employees).toFixed(2)}`);
console.log(`Salariu mediu după majorare: ${averageSalary(updated).toFixed(2)}\n`);

for (const [department, list] of Object.entries(groups)) {
  console.log(`${department} (${list.length} angajați, medie ${averageSalary(list).toFixed(2)}):`);
  list.forEach(({ name, experience }) => console.log(`  - ${name}, ${experience} ani`));
}

console.log("\nAngajați cu experiență > 3 ani (salariu +10%):");
updated
  .filter(({ id }) => seniorIds.has(id))
  .forEach(({ name, department, salary }) =>
    console.log(`  ${name} (${department}): ${salary.toFixed(2)}`)
  );
