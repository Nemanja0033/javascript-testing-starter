import { describe, test, it, expect} from "vitest"
import { fizzBuzz, max } from "../src/intro"

describe('max', () => {
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
})