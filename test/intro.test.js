import { describe, test, it, expect} from "vitest"
import { factorial, fizzBuzz, max } from "../src/intro"

/*describe('max', () => {
    it('function max should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    })
})

describe('fizzBuzz', () => {
    it('if number are % === 3 && number % === 5 ? should return FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('if number are % === 3 ? should return Fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })
    it('if number are % === 5 ? should return Buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })
})*/

//TDD example 
// First set test logic for upcoming funciton

describe('factorial', () => {
    it('if passed 0 should return 1', () => {
        expect(factorial(0)).toBe(1);
    })
    it('if passed 1 should return 1', () => {
        expect(factorial(1)).toBe(1);
    })
    it('if passed 2 should return 2 x 1', () => {
        expect(factorial(2)).toBe(2);
    })
    it('if passed 3 should return 3 x 2 x 1', () => {
        expect(factorial(3)).toBe(6);
    })
})