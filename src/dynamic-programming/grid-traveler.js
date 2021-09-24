/**
 * Say that you are a traveler on a 2D grid.
 * You begin in the top-left corner and your goal is to travel
 * to the bottom-right corner. You may only down or right.
 *
 * - Question
 *   In how many ways can you travel to the goal on a grid
 *   with dimensions of rows * columns?
 */

export function gridTraveler (rows, columns) {
  if (rows === 1 && columns === 1) return 1
  if (rows <= 0 || columns <= 0) return 0

  return gridTraveler(rows - 1, columns) + gridTraveler(rows, columns - 1)
}

export function gridTravelerWithMemo (rows, columns, memo = {}) {
  const key = `${rows},${columns}`

  if (key in memo) return memo[key]
  if (rows === 1 && columns === 1) return 1
  if (rows <= 0 || columns <= 0) return 0

  memo[key] = gridTravelerWithMemo(rows - 1, columns, memo) + gridTravelerWithMemo(rows, columns - 1, memo)
  return memo[key]
}
