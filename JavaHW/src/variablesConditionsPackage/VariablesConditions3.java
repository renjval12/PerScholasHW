package variablesConditionsPackage;

public class VariablesConditions3 {

	public static void main(String[] args) {
		int num = 7;
		if (num % 2 != 0) {
			System.out.println("Cool");
		} else if (num % 2 == 0 && num >= 2 && num <= 5) {
			System.out.println("Not Cool");
		} else if (num % 2 == 0 && num >= 6 && num <= 20) {
			System.out.println("Cool");
		} else if (num % 2 == 0 && num > 20) {
			System.out.println("Not Cool");
		}
		
	}

}
