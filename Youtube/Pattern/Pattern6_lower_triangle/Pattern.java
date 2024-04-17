package Youtube.Pattern.Pattern6_lower_triangle;

public class Pattern {
    void buildPattern_1(int r) {
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

    public static void main(String[] args) {
        Pattern pattern = new Pattern();
        System.out.println("----------Pattern 1 - Star Triangle --------");
        pattern.buildPattern_1(6);
    }
}
