
// package Hoisting;
import java.util.*;

class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int x = 0;
            int y = 0;
            int l = scn.nextInt();
            String str = scn.next();
            boolean flag = false;
            for (int i = 0; i < str.length(); i++) {
                if (str.charAt(i) == 'L') {
                    x--;
                } else if (str.charAt(i) == 'U') {
                    y++;
                } else if (str.charAt(i) == 'R') {
                    x++;
                } else if (str.charAt(i) == 'D') {
                    y--;
                }
                if (x == 1 && y == 1) {
                    System.out.println("YES");
                    flag = true;
                    break;
                }

            }
            if (flag == false)
                System.out.println("NO");
        }
    }
}
