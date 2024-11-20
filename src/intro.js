// Lesson: Writing your first tests
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function factorial(n) {
  if(n === 0) return 1;
  if(n === 1) return 1;
  if(n === 2) return 2 * 1;
  if(n === 3) return 3 * 2 * 1;
}
