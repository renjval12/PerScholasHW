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

//	function result() {
//	    if (num1 === 6) {
//	        return 'see ya later, gator'
//	    }
//	    else if (num1 === 1 || num1 === 2 || num1 === 3 || num1 === 4) {
//	        var num2 = Number(prompt('Type in a number: '))
//	        var num3 = Number(prompt('Type in a number: '))
//	    }
//	    else if (num1 === 5) {
//	        var num2 = Number(prompt('Type in a number: '))
//	        var num3 = Number(prompt('Type in a number: '))
//	        var num4 = Number(prompt('Type in a number: '))
//	        var num5 = Number(prompt('Type in a number: '))
//	        var num6 = Number(prompt('Type in a number: '))
//	    }
//	    else {
//	        return 'invalid entry'
//	    }
//	    switch (num1) {
//	        case 1:
//	            function add() {
//	                return num2 + num3
//	            }
//	            return `${num2} + ${num3} = ${add()}`
//	            break;
//	        case 2:
//	            function subtract() {
//	                return num2 - num3
//	            }
//	            return `${num2} - ${num3} = ${subtract()}`
//	            break;
//	        case 3:
//	            function multiply() {
//	                return num2 * num3
//	            }
//	            return `${num2} * ${num3} = ${multiply()}`
//	            break;
//	        case 4:
//	            function divide() {
//	                return num2 / num3
//	            }
//	            return `${num2} / ${num3} = ${divide()}`
//	            break;
//	        case 5:
//	            function average() {
//	                let sum = num2 + num3 + num4 + num5 + num6
//	                return  sum / 5
//	            }
//	            return `the average of ${num2}, ${num3}, ${num4}, ${num5}, and ${num6} = ${average()}`
//	            break;
//	        default:
//	            return 'invalid entry'
//	            break
//	    }	

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
