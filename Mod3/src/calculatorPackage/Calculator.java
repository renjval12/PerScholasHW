package calculatorPackage;

import java.util.Scanner;

public class Calculator {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in); // opens input stream for user input
		System.out.println("Menu");
		System.out.println("1. Add");
		System.out.println("2. Subtract");
		System.out.println("3. Multiply");
		System.out.println("4. Divide");
		System.out.println("5. Exit");
		System.out.println("Type in a number: "); // prompt to the user to enter a number
		int num1 = scan.nextInt();

		if (num1 == 5) {
			System.out.println("see ya later, gator");
		} else if (num1 == 1 || num1 == 2 || num1 == 3 || num1 == 4) {
			System.out.println("Type first number: "); // prompt to the user to enter a number
			int num2 = scan.nextInt(); // variable holds the user input number
			System.out.println("Type second number: "); // prompt to the user to enter a number
			int num3 = scan.nextInt();
			
			switch (num1) {
			case 1:
				System.out.println(num2 + " + " + num3 + " = " + add(num2, num3));
				break;
			case 2:
				System.out.println(num2 + " - " + num3 + " = " + subtract(num2, num3));
				break;
			case 3:
				System.out.println(num2 + " x " + num3 + " = " + multiply(num2, num3));
				break;
			case 4:
				System.out.println(num2 + " / " + num3 + " = " + divide(num2, num3));
				break;
			case 5:
				break;
			default:
				System.out.println("Invalid Entry");
				break;
			}
		} else {
			System.out.println("invalid entry");
		}
		scan.close(); // closes input stream
	}

	static int add(int y, int z) {
		return y + z;
	}

	static int subtract(int y, int z) {
		return y - z;

	}

	static int multiply(int y, int z) {
		return y * z;

	}

	static int divide(int y, int z) {
		return y / z;

	}

}
