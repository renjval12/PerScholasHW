package oopConceptsPackage;

public class Employee extends Person {
	static String company = "Tesla";
	String occupation;
	int empId;
	long empSalary;

	Employee(String name, String gender, int age, String occupation, int empId, long empSalary) {
		super(name, gender, age);
		this.occupation = occupation;
		this.empId = empId;
		this.empSalary = empSalary;
	}

	void display() {
		System.out.println();
		System.out.println("=====================");
		System.out.println("Company Name: " + company);
		System.out.println("Name: " + this.name);
		System.out.println("Gender: " + this.gender);
		System.out.println("Age: " + this.age);
		System.out.println("Occupation: " + this.occupation);
		System.out.println("Employee ID: " + this.empId);
		System.out.println("Salary: " + this.empSalary);
		System.out.println("=====================");
		System.out.println();

	}

}
