/**
 * 735 Asteroid Collision
 * We are given an array asteroids of integers representing asterioids in a row.
      For each  asteroid, the absolute value represents its size, and the sign represents
      its direction (positive meaning right, negative meaning left). 
      Each asteroid moves at the same speed. 
 
 *  Find out the  state of  the asteroids after all collisions.  If 2 asteroids meet, 
      the smaller one will explode. IF both are the same size, both will explode.
      Two asteroids moving in the same direction will never meet. 
**/

const asteroidCollision = (asteroids) => {
  const stack = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
        stack.pop();
      }
      if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(asteroid);
      }
      else if (stack[stack.length - 1] === Math.abs(asteroid)) {
        stack.pop();
      }
    }
  }
  return stack;
}

const asteroids = [5, 10, -5];
console.log(asteroidCollision(asteroids));