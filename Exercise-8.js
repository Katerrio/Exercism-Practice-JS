// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name){
    case 'Pure Strawberry Joy':
      return .5;
    case 'Energizer':
      //stacking lets me fall through to the next return
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalWedges = 0;
  let totalLimes = 0;
  while (totalWedges < wedgesNeeded && totalLimes < limes.length) {
    switch (limes[totalLimes]) {
      case 'small':
        totalWedges += 6
        break;
      case 'medium':
        totalWedges += 8
        break;
      case 'large':
        totalWedges += 10
        break;
    }
    totalLimes += 1
  }
  return totalLimes
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let nextOrder = 0
  do {
    timeLeft -= timeToMixJuice(orders[nextOrder])
    nextOrder += 1
  }while (nextOrder < orders.length && 0 < timeLeft);
  return orders.slice(nextOrder);
} 