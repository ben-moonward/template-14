// Example Unit Test

describe("Maths - Addition", () => {
    it("tests addition of one and one", () => {
        const result = 1 + 2;
        expect(result).toBe(3);
    });

    it("tests addition of big numbers", () => {
        const result = 99999999 + 12341234;
        expect(result).toBe(112341233);
    });
});
