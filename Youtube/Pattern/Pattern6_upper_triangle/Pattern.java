package Youtube.Pattern.Pattern6_upper_triangle;

public class Pattern {
    void buildPattern_1(int r) {
        for (int i = 0; i < r; i++) {
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
        System.out.println("----------Pattern 1 - Star Triangle --------");
        pattern.buildPattern_1(6);
    }
}
