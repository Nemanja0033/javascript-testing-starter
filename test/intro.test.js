import { describe, test, it, expect} from "vitest"
import { max } from "../src/intro"

describe('max', () => {
    it('function max should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    })
})