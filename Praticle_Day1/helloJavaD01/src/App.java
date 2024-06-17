import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

public class App {

    public static long sumOfSubstrings(String number) {
        long result = 0;
        long mod = 1000000007;
        long multiplier = 1;
        long currentSum = 0;

        for (int i = number.length() - 1; i >= 0; i--) {
            currentSum = (currentSum + Character.getNumericValue(number.charAt(i)) * multiplier) % mod;
            result = (result + currentSum) % mod;
            multiplier = (multiplier * 10 + 1) % mod;
        }

        return result;
    }

    public static int totalNQueens(int n) {
        List<List<String>> solutions = new ArrayList<>();
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }
        solveNQueens(board, 0, solutions);
        return solutions.size();
    }

    private static void solveNQueens(char[][] board, int row, List<List<String>> solutions) {
        if (row == board.length) {
            addSolution(board, solutions);
            return;
        }

        for (int col = 0; col < board.length; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                solveNQueens(board, row + 1, solutions);
                board[row][col] = '.';
            }
        }
    }

    private static boolean isValid(char[][] board, int row, int col) {
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q')
                return false;
            int diff = row - i;
            if (col - diff >= 0 && board[i][col - diff] == 'Q')
                return false;
            if (col + diff < board.length && board[i][col + diff] == 'Q')
                return false;
        }
        return true;
    }

    private static void addSolution(char[][] board, List<List<String>> solutions) {
        List<String> solution = new ArrayList<>();
        for (char[] row : board) {
            solution.add(new String(row));
        }
        solutions.add(solution);
    }

    public static int sumOfNumbers(String str) {
        int sum = 0;
        StringBuilder currentNumber = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (Character.isDigit(ch)) {
                currentNumber.append(ch);
            } else {
                if (currentNumber.length() > 0) {
                    sum += Integer.parseInt(currentNumber.toString());
                    currentNumber.setLength(0);
                }
            }
        }
        // Xử lý trường hợp chuỗi kết thúc bằng một chuỗi số
        if (currentNumber.length() > 0) {
            sum += Integer.parseInt(currentNumber.toString());
        }
        return sum;
    }

    public static int maxDistanceWithAbsoluteDiffK(int[] arr, int n, int k) {
        int maxDist = -1;
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            if (hashMap.containsKey(arr[i] - k)) {
                maxDist = Math.max(maxDist, i - hashMap.get(arr[i] - k));
            }
            if (hashMap.containsKey(arr[i] + k)) {
                maxDist = Math.max(maxDist, i - hashMap.get(arr[i] + k));
            }

            hashMap.putIfAbsent(arr[i], i);
        }

        return maxDist;
    }

    public static void main(String[] args) throws Exception {

    }
}
