package oopConceptsPackage;

import java.time.*;
import java.util.*;

public interface PersonInterface {
	static final String ORGANIZATION = "Per Scholas";
    Year thisYear = Year.now();

	static double calculate(int age) {
		int birthYear = thisYear - age;
		return birthYear;
	}
	
	
}
