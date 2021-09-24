/**
 * Imagine we have a number called targetSum and an array of numbers.
 * We want to found out that it is possible to generate targetSum using numbers from the array.
 *
 * - Question
 *   Write a function that takes the targetSum and an array of numbers as arguments.
 *   The function should return a boolean indicating wether or not it is possible
 *   to generate targetSum using numbers from the array.
 */

export function canGenerateTargetSum (targetSum, numbers) {
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (const num of numbers) {
    if (canGenerateTargetSum(targetSum - num, numbers)) {
      return true
    }
  }

  return false
}

export function canGenerateTargetSumWithMemo (targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (const num of numbers) {
    if (canGenerateTargetSumWithMemo(targetSum - num, numbers, memo)) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}
