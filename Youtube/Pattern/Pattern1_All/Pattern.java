package Youtube.Pattern.Pattern1_All;

public class Pattern {
    void buildPattern(int rowCount, int colCount) {
        for (int i = 0; i < rowCount; i++) {
            for (int j = 0; j < colCount; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    public static void main(String[] args) {
        Pattern pattern = new Pattern();
        pattern.buildPattern(5, 2);
    }
}
