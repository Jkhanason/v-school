let employees = [];

function Employee (name, jobTitle, salary, status) {
  this.name = name,
  this.jobTitle = jobTitle,
  this.salary = salary,
  this.status = status || "Full Time"
  this.employeeForm = function () {
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: $${this.salary}/month, Status: ${this.status}`);
  }
}

let worker1 = new Employee('Larry', 'Manager', 10000);
let worker2 = new Employee('Moe', 'Supervisor', 9000);
let worker3 = new Employee('Curly', 'Janitor', 8000, 'Part-Time');

worker1.employeeForm();
worker2.employeeForm();
worker3.employeeForm();

employees.push(worker1, worker2, worker3);

