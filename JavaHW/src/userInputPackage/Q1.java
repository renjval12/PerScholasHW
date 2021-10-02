package userInputPackage;

import java.util.Scanner;

public class Q1 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in); // opens input stream for user input
		System.out.println("Type in a number: "); // prompt to the user to enter a number
		int fibNum = scan.nextInt(); // variable holds the user input number
		fibonacci(fibNum); // run armstrong(n) function
		scan.close(); // closes input stream
	}

	public static void fibonacci(int n) {
		int num1 = 0;
		int num2 = 1;
		for (int i = 0; i <= n; i++) {
			System.out.print(num1 + ", ");
			int num3 = num1 + num2;
			num1 = num2;
			num2 = num3;
		}
	}

}
