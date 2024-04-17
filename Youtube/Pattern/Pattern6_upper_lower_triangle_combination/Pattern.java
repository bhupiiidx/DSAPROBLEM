package Youtube.Pattern.Pattern6_upper_lower_triangle_combination;

public class Pattern {
    void buildPattern_1(int r) {
        for (int i = 0; i < r - 1; i++) {
            for (int j = 0; j < r - i - 1; j++)
                System.out.print("-");
            for (int j = 0; j < i * 2 + 1; j++)
                System.out.print("*");
            for (int j = 0; j < r - i - 1; j++)
                System.out.print("-");
            System.out.println("");
        }
        for (int i = r; i > 0; i--) {
            for (int j = r - i; j > 0; j--)
                System.out.print("-");
            for (int j = i * 2 - 1; j > 0; j--)
                System.out.print("*");
            for (int j = r - i; j > 0; j--)
                System.out.print("-");
            System.out.println("");
        }
    }

    void buildPattern_2(int r) {
        for (int i = r; i > 0; i--) {
            for (int j = r - i; j > 0; j--)
                System.out.print("-");
            for (int j = i * 2 - 1; j > 0; j--)
                System.out.print("*");
            for (int j = r - i; j > 0; j--)
                System.out.print("-");
            System.out.println("");
        }
        for (int i = 1; i < r; i++) {
            for (int j = 0; j < r - i - 1; j++)
                System.out.print("-");
            for (int j = 0; j < i * 2 + 1; j++)
                System.out.print("*");
            for (int j = 0; j < r - i - 1; j++)
                System.out.print("-");
            System.out.println("");
        }
    }

    public static void main(String[] args) {
        Pattern pattern = new Pattern();
        System.out.println("----------Pattern 1 - Lower-Upper --------");
        pattern.buildPattern_1(6);
        System.out.println("----------Pattern 2 - Upper-Lower --------");
        pattern.buildPattern_2(6);
    }
}
