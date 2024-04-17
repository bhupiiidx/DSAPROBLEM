package Youtube.Pattern.Pattern3_decreasing;

public class Pattern {
    void buildPattern_1(int rowCount) {
        for (int i = rowCount; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    void buildPattern_2(int rowCount) {
        for (int i = rowCount; i > 0; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println("");
        }
    }

    void buildPattern_3(int rowCount) {
        for (int i = rowCount; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print(i);
            }
            System.out.println("");
        }
    }

    void buildPattern_4(int rowCount) {
        for (int i = rowCount; i > 0; i--) {
            for (int j = 0; j < rowCount - i; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    public static void main(String[] args) {
        Pattern pattern = new Pattern();
        System.out.println("----------Pattern 1 --------");
        pattern.buildPattern_1(6);
        System.out.println("----------Pattern 2 --------");
        pattern.buildPattern_2(6);
        System.out.println("----------Pattern 3 --------");
        pattern.buildPattern_3(6);
        System.out.println("----------Pattern 4 - Reverse --------");
        pattern.buildPattern_4(6);
    }
}
