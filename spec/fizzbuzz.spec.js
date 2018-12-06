describe("FizzBuzz", () => {
  it("should return 1 when given 1", () => {
    expect(fizzBuzz(1)).toBe(1);
  });
  it("should return 2 when given 2", () => {
    expect(fizzBuzz(2)).toBe(2);
  });
  it("should return fizz when given 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });
  it("should return 4 when given 4", () => {
    expect(fizzBuzz(4)).toBe(4);
  });
  it("should return buzz when given 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });
  it("should return fizz when given 6", () => {
    expect(fizzBuzz(6)).toBe("fizz");
  });
  it("should return 7 when given 7", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
  it("should return fizz when given 9", () => {
    expect(fizzBuzz(9)).toBe("fizz");
  });
  it("should return buzz when given 10", () => {
    expect(fizzBuzz(10)).toBe("buzz");
  });
  it("should return fizzbuzz when given 15", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
  it("should return fizzbuzz when given 30", () => {
    expect(fizzBuzz(30)).toBe("fizzbuzz");
  });
});