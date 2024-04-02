// Example Unit Test

describe("Maths - Addition", () => {
  it("tests one plus one", () => {
    const result = 1 + 2;
    expect(result).toBe(3);
  });

  it("tests adding big numbers", () => {
    const result = 99999999 + 12341234;
    expect(result).toBe(112341233);
  });
});
