import { gridTraveler, gridTravelerWithMemo } from '../grid-traveler'

describe('Grid Traveler', () => {
  it('should calculate number of ways to travel correctly without memoization', () => {
    expect(gridTraveler(0, 0)).toBe(0)
    expect(gridTraveler(1, 0)).toBe(0)
    expect(gridTraveler(0, 1)).toBe(0)
    expect(gridTraveler(-1, 1)).toBe(0)
    expect(gridTraveler(1, -1)).toBe(0)
    expect(gridTraveler(1, 1)).toBe(1)
    expect(gridTraveler(2, 3)).toBe(3)
    expect(gridTraveler(3, 2)).toBe(3)
    expect(gridTraveler(3, 3)).toBe(6)

    // Next test takes too long
    // expect(gridTraveler(18 , 18)).toBe(2333606220)
  })

  it('should calculate number of ways to travel correctly with memoization', () => {
    expect(gridTravelerWithMemo(0, 0)).toBe(0)
    expect(gridTravelerWithMemo(1, 0)).toBe(0)
    expect(gridTravelerWithMemo(0, 1)).toBe(0)
    expect(gridTravelerWithMemo(-1, 1)).toBe(0)
    expect(gridTravelerWithMemo(1, -1)).toBe(0)
    expect(gridTravelerWithMemo(1, 1)).toBe(1)
    expect(gridTravelerWithMemo(2, 3)).toBe(3)
    expect(gridTravelerWithMemo(3, 2)).toBe(3)
    expect(gridTravelerWithMemo(3, 3)).toBe(6)
    expect(gridTravelerWithMemo(18, 18)).toBe(2333606220)
  })
})
