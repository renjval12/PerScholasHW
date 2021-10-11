package oopConceptsPackage;

public class Student extends Person {

	static String schoolName = "Per Scholas";
	int year;
	double grade1, grade2, grade3;

	Student(String name, String gender, int age, int year, double grade1, double grade2,
			double grade3) {
		super(name, gender, age);
		this.year = year;
		this.grade1 = grade1;
		this.grade2 = grade2;
		this.grade3 = grade3;
	}

	double calculateAverage() {
		double sum = this.grade1 + this.grade2 + this.grade3;
		return sum / 3;

	}

	void display() {
		System.out.println("=====================");
		System.out.println("School Name: " + schoolName);
		System.out.println("Name: " + this.name);
		System.out.println("Gender: " + this.gender);
		System.out.println("Age: " + this.age);
		System.out.println("School Year: " + this.year);
		System.out.println("School Average Grade: " + calculateAverage());
		System.out.println("=====================");
		System.out.println();

	}
}
