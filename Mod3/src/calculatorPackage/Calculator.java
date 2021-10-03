package calculatorPackage;

import java.util.Scanner;

public class Calculator {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in); // opens input stream for user input
		System.out.println("Type in a number: "); // prompt to the user to enter a number
		int num1 = scan.nextInt(); // variable holds the user input number
		System.out.println("Type in a number: "); // prompt to the user to enter a number
		int num2 = scan.nextInt();
		
		System.out.println(add(num1, num2));
//		Scanner scan = new Scanner(System.in); // opens input stream for user input
//		System.out.println("Type in a word: "); // prompt to the user to enter a number
//		String palText = scan.next(); // variable holds the user input number
//		palindrome(palText.toUpperCase()); // run armstrong(n) function
		scan.close(); // closes input stream
	}

	static int add(int x, int y) {
		return x + y;
	}

	static int subtract(int x, int y) {
		return x - y;

	}

	static int multiple(int x, int y) {
		return x * y;

	}

	static int divide(int x, int y) {
		return x / y;

	}

}
