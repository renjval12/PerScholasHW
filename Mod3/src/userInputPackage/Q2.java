package userInputPackage;

import java.util.Scanner;

public class Q2 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in); // opens input stream for user input
		System.out.println("Type in a number: "); // prompt to the user to enter a number
		int armNum = scan.nextInt(); // variable holds the user input number
		armstrong(armNum); // run armstrong(n) function
		scan.close(); // closes input stream
	}

	public static void armstrong(int n) {

		int digits = n;
		int sumOfDigitsCubed = 0;

		while (digits != 0) {
			int digit = digits % 10;
//			System.out.println(digit);
			digits /= 10;
			int product = digit * digit * digit;
			sumOfDigitsCubed += product;
		}
		System.out.println(sumOfDigitsCubed);
		if (sumOfDigitsCubed == n) {
			System.out.println(n + " is a Armstrong number.");
		} else {
			System.out.println(n + " is NOT a Armstrong number.");
		}
	}
}
