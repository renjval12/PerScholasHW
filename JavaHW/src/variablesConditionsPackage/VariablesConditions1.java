package variablesConditionsPackage;

public class VariablesConditions1 {
	public static void main(String[] args) {
		//question 1
		int grade = 80;
		if (grade >= 90) {
			System.out.println("A");
		} else if (grade >= 80 && grade < 90 ) {
			System.out.println("B grade");
		} else if (grade >= 70 && grade < 80 ) {
			System.out.println("C grade");
		} else if (grade >= 55 && grade < 70 ) {
			System.out.println("D grade");
		} else if (grade >=0 && grade < 55) {
			System.out.println("F grade");
		} else {
			System.out.println("Invalid grade.");
		}
	}
}


