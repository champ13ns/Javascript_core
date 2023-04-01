import java.util.*;

class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String or = "codeforces";
        int t = scn.nextInt();
        while ((t--) > 0) {
            String ch = scn.nextLine();
            if (or.contains(ch))
                System.out.println("YES");
            else
                System.out.println("NO");
        }

    }
}