package LeetCode.LeetCode2206;

class Solution {
    boolean divideArray(int[] nums) {
        int[] tempArr = new int[nums.length / 2];
        int pairCount = nums.length / 2;
        for (int i = 0; i < nums.length - 1; i++) {
            if (binarySearch(tempArr, nums[i])) {
                tempArr = removeElement(tempArr, nums[i]);
                --pairCount;
            } else {
                tempArr[tempArr.length + 1] = nums[i];
            }
        }
        return pairCount == nums.length;
    }

    boolean binarySearch(int[] arr, int val) {
        for (int j = 0; j < arr.length - 1; j++) {
            if (arr[j] == val) {
                return true;
            }
        }
        return false;
    }

    int[] removeElement(int[] tempArr, int val) {
        int def = 0;
        int[] arr = new int[tempArr.length];
        for (int j = 0; j < tempArr.length - 1; j++) {
            if (tempArr[j] != val) {
                arr[def] = tempArr[j];
                ++def;
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        Solution temp = new Solution();
        int[] nums = { 3, 2, 3, 2, 2, 2 };
        boolean divideArrayResult = temp.divideArray(nums);
        System.out.println("divideArrayResult" + divideArrayResult);
    }
}