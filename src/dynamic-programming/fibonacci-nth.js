/**
 * The Fibonacci sequence is series of numbers that the next number found by
 * adding up the two numbers before it.
 *
 * Numbers: 1, 1, 2, 3, 5, 8, 13, 21, ...
 *
 * - Question
 *   Write a function `fib(n)` that takes a number as an argument.
 *   The function should return the n-th number of the Fibonacci sequence.
 */

// Fibonacci
export function fibonacciNth (n) {
  if (n <= 2) return 1

  return fibonacciNth(n - 1) + fibonacciNth(n - 2)
}

// Fibonacci with memoization
export function fibonacciNthWithMemo (n, memo = {}) {
  if (n in memo) return memo[n]
  if (n <= 2) return 1n

  memo[n] = fibonacciNthWithMemo(n - 1, memo) + fibonacciNthWithMemo(n - 2, memo)
  return memo[n]
}
