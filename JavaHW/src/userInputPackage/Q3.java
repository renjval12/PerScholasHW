package userInputPackage;

import java.util.Scanner;

public class Q3 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in); // opens input stream for user input
		System.out.println("Type in a word: "); // prompt to the user to enter a number
		String palText = scan.next(); // variable holds the user input number
		palindrome(palText); // run armstrong(n) function
		scan.close(); // closes input stream
	}

	public static void palindrome(String n) {
//		System.out.println("Palindrome text: " + n);
		String[] strArr = n.split("");
		for (int i = 0; i < strArr.length; i++) {
			System.out.print("i pos: " + i + " ");
			System.out.println();
//			System.out.print("i val: " + strArr[i] + " ");
//			System.out.println();
			
			for (int j = strArr.length - 1; j >= i; j--) {
				System.out.print("j pos: " + j + " ");
				System.out.println();
//				System.out.print("j val: " + strArr[j] + " ");
//				System.out.println();
			}
		}

	}
}
