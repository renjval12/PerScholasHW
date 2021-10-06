package gettersSettersPackage;

import java.util.*;

public class CreateComputer {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.println("Enter computer name:");
		String name = scan.next();
		System.out.println("Enter computer year:");
		int year = scan.nextInt();
		System.out.println("Enter cost:");
		int cost = scan.nextInt();

		Computer c1 = new Computer();

		c1.setName(name);
		c1.setYear(year);
		c1.setCost(cost);

		c1.display();
	}

}
