
// constructor to create Employee object
console.log("Creating constructor for Employee object...");
function NewEmployee(username, skills, basicSalary) {
  this.username = username;
  this.skills = skills;
  this.basicSalary = basicSalary;
}

// Initialize object with values.
var Employee = new NewEmployee('Shipra Singh', 'HTML,CSS,JS', 500000);

// Display object and properties
console.log("Displaying object properties...");
console.log(Employee);

// This object method displays employee details.
console.log("Creating printdetails function...");
Employee.printdetails=function(){
	console.log(this.username);
	console.log(this.skills);
	console.log(this.basicSalary);
}

// Call the printdetails function to display employee details.
console.log("Calling printdetails function to display employee details...");
console.log(Employee.printdetails());

// This object method updates basic salary by prompting the user for new salary.
console.log("Creating changesalary function to update new employee salary...");
Employee.changesalary=function(){
	var sal=prompt("Enter new employee salary");
	this.basicSalary=sal;
}

// Call the changesalary method to get new salary from user.
console.log("Calling changesalary function. This will prompt you to enter new employee salary...");
console.log(Employee.changesalary());

// Display final employee details using printdetails method. 
console.log("New salary updated. Displaying final employee details...");
console.log(Employee.printdetails());