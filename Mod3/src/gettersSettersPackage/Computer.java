package gettersSettersPackage;

public class Computer {

	private String name;
	private int year;
	private int cost;

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getYear() {
		return year;
	}


	public void setYear(int year) {
		this.year = year;
	}


	public double getCost() {
		return cost;
	}


	public void setCost(int cost) {
		this.cost = cost;
	}


	
	public void display() {
		System.out.println();
		System.out.println("=======================================");
		System.out.println("Computer Name: " + this.name);
		System.out.println("Year: " + this.year);
		System.out.println("Cost: " + this.cost);
		System.out.println("=======================================");
		System.out.println();

	}
}
