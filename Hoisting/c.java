
// package Hoisting
import java.util.*;

public class c {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int l = scn.nextInt();
            String str = scn.next();
            int left = 0;
            int right = l - 1;
            while (left <= right) {
                if (str.charAt(left) == '0' && str.charAt(right) == '1') {
                    left++;
                    right--;
                } else if (str.charAt(left) == '1' && str.charAt(right) == '0') {
                    left++;
                    right--;
                } else {
                    break;
                }
            }
            if (left <= right)
                System.out.println((right - left + 1));
            else
                System.out.println(0);
        }
    }
}
