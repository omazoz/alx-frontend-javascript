export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  return {
    * [Symbol.iterator]() {
      for (const employee of allEmployees) {
        yield employee;
      }
    },
  };
}
