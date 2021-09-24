import { canGenerateTargetSum, canGenerateTargetSumWithMemo } from '../can-sum'

describe('Can generate targetSum', () => {
  it('should calculate the possibility of generating targetSum correctly without memoization', () => {
    expect(canGenerateTargetSum(7, [2, 4])).toBe(false)
    expect(canGenerateTargetSum(7, [2, 3])).toBe(true)
    expect(canGenerateTargetSum(7, [5, 3, 4, 7])).toBe(true)
    expect(canGenerateTargetSum(8, [2, 3, 5])).toBe(true)

    // Below tests takes too long
    // expect(canGenerateTargetSum(300, [7, 14])).toBe(false)
    // expect(canGenerateTargetSum(315, [7, 14])).toBe(true)
  })

  it('should calculate the possibility of generating targetSum correctly with memoization', () => {
    expect(canGenerateTargetSumWithMemo(7, [2, 4])).toBe(false)
    expect(canGenerateTargetSumWithMemo(7, [2, 3])).toBe(true)
    expect(canGenerateTargetSumWithMemo(7, [5, 3, 4, 7])).toBe(true)
    expect(canGenerateTargetSumWithMemo(8, [2, 3, 5])).toBe(true)
    expect(canGenerateTargetSumWithMemo(300, [7, 14])).toBe(false)
    expect(canGenerateTargetSumWithMemo(315, [7, 14])).toBe(true)
  })
})
