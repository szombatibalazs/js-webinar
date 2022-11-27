const calc = require('../calc');
const expect = require('chai').expect;

describe('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator
    it("should have proper value", () => {
        
    });
    describe("add", () => {
        it("should exist", () => {
            const c = calc(10);
            expect(c.add).not.to.be.undefined;
        });
        
        it("should be able to add a number to the current value", () => {
            const c = calc(10);
            const result = c.add(2).v;
            expect(result).to.equal(12);
            
        });
    });

    describe("minus", () => {
        it("should exist", () => {
            const c = calc(42);
            expect(c.minus).not.to.be.undefined;
        });
        
        it("should be able to substract a number from the current value", () => {
            const c = calc (10);
            const result = c.minus(2).v;
            expect(result).to.equal(8);
        });
    });

    describe("sqrt", () => {
        it("should exist", () => {
            const c = calc(42);
            expect(c.sqrt).not.to.be.undefined;
        
        it("should be able to calculate the square root of the current value ", () => {
            const c = calc(25);
            const result = c.sqrt.v
            expect(result).to.equal(5);
        });
        
        it("should handle square root calculation with negative values", () => {
            const c = calc(-25);
            const result = abs(c.sqrt).v
            expect(result).to.equal(5);
        });
    });

    describe("times", () => {
        it("should exist", () => {
            const c = calc(42);
            expect(c.times).not.to.be.undefined;
        });
        
        it("should be able to multiply a number with the current value", () => {
            const c = calc(10);
            const result = c.times(10).v;
            expect(result).to.equal(100);
        });
    });
    
    describe("divide", () => {
        it("should exist", () => {
            const c = calc(42);
            expect(c.divide).not.to.be.undefined;
        });
        
        it("should be able to perform a valid division", () => {
            const c = calc(10);
            const result = c.divide(2).v;
            expect(result).to.equal(5);
        });
        
        it("should handle division by 0", () => {
            // Given
            const c = calc(10);
            // When
            // Then
            expect(() => c.divide(0)).to.throw("Division");
            // expect(c.divide.bind(null, 0)).to.throw();
        });
    });

    describe("modulo", () => {
        it("should exist", () => {
            const c = calc(42);
            expect(c.modulo).not.to.be.undefined;
        });
        
        it("should be able to perform a valid modulo operation", () => {
            const c = calc(8);
            const result = c.modulo(3).v;
            expect(result).to.equal(2);
        });
    });
    
    describe("mix", () => {
        it("should be able to mix multiple calculation operation types", () => {
            const c = calc(10);
            const result = c.add(2).v && c.times(2).v && c.minus(4).v && c.divide(10).v;
            expect(result).to.equal(2);
    
                });
            });
        });
});