package oopConceptsPackage;

import java.util.*;

public class Render {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		// user input for Person parent class
		System.out.println("Enter name:");
		String userName = scan.nextLine();

		System.out.println("Enter gender (use words):");
		String userGender = scan.nextLine();

		System.out.println("Enter your age:");
		int userAge = scan.nextInt();
		scan.nextLine();

		// user input for Employee class
		System.out.println("Enter your occupation:");
		String userOccupation = scan.nextLine();

		System.out.println("Enter your employee id:");
		int userEmpId = scan.nextInt();

		System.out.println("Enter your salary:");
		long userSalary = scan.nextLong();

		// user input for Student Class
		System.out.println("Enter your class year (i.e. 9, Freshman in Highschool: ");
		int userClassYear = scan.nextInt();

		// user grades
		System.out.println("Enter your first grade: ");
		int userGrade1 = scan.nextInt();
		System.out.println("Enter your second grade: ");
		int userGrade2 = scan.nextInt();
		System.out.println("Enter your third grade: ");
		int userGrade3 = scan.nextInt();
		scan.close();
		
		// new Employee Class
		Employee emp1 = new Employee(userName, userGender, userAge, userOccupation, userEmpId, userSalary);
		emp1.display();

		// new Student Class
		Student stu1 = new Student(userName, userGender, userAge, userClassYear, userGrade1, userGrade2, userGrade3);
		stu1.display();
		
		// new Person1 class
		
		Person1 p1 = new Person1();

		p1.setName(userName);
		p1.setGender(userGender);
		p1.setAge(userAge);

		p1.display();

	}

}
