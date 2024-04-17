package Youtube.Pattern.Pattern4_DEC_INC;

public class Pattern {
    void buildPattern(int rowCount) {
        // Decreasing pattern of star
        for (int i = rowCount; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
        // Increasing pattern of star
        for (int i = 0; i < rowCount; i++) {
            for (int j = 0; j < i + 1; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    public static void main(String[] args) {
        Pattern pattern = new Pattern();
        pattern.buildPattern(5);
    }
}
