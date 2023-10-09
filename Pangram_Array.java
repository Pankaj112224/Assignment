package Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Pangram_Array {

    public static void main(String[] args) {
        // Task 1: Create an array and shuffle it
        List<Integer> array = new ArrayList<>();
        for (int i = 1; i <= 7; i++) {
            array.add(i);
        }
        
        Collections.shuffle(array);
        System.out.println("Shuffled Array: " + array);

        // Task 2: Convert a Roman Number to an integer
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman Number: ");
        String romanInput = scanner.nextLine();
        int integerValue = convertRomanToInteger(romanInput);
        System.out.println("Integer Value: " + integerValue);

        // Task 3: Check if the input is a pangram
        System.out.print("Enter a sentence to check for pangram: ");
        String sentence = scanner.nextLine();
        boolean isPangram = checkForPangram(sentence);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    // Function to convert Roman numeral to an integer
    public static int convertRomanToInteger(String roman) {
        // Define Roman numeral to integer conversion logic here
        // You can use a similar approach as in the previous Java example.
        // Implement the conversion logic in this function.
        return 0; // Placeholder value, replace with actual conversion logic
    }

    // Function to check if the input is a pangram
    public static boolean checkForPangram(String input) {
        // Implement the pangram checking logic here
        // You can use a similar approach as in the previous Java example.
        // Implement the pangram checking logic in this function.
        return false; // Placeholder value, replace with actual pangram checking logic
    }
}



