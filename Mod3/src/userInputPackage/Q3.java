package userInputPackage;

import java.util.Scanner;

public class Q3 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in); // opens input stream for user input
		System.out.println("Type in a word: "); // prompt to the user to enter a number
		String palText = scan.next(); // variable holds the user input number
		palindrome(palText.toUpperCase()); // run armstrong(n) function
		scan.close(); // closes input stream
	}

	public static void palindrome(String n) {
		StringBuffer reverseStr = new StringBuffer(n);
		reverseStr.reverse();
		String reverseStringify = reverseStr.toString();
		if (n.equals(reverseStringify)) {
			System.out.println(n + " is a Palindrome");
		} else {
			System.out.println(n + " is NOT a Palindrome");
		}
	}
}
