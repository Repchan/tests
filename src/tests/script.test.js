
import{ getMonth } from'../script.js';

describe("tests for getMonth function", () => {
  it("should be Неверное значение", () => expect(getMonth("Hello")).toBe("Неверное значение")),
  it("should be Неверное значение", () => expect(getMonth(-3)).toBe("Неверное значение")),
  it("should be декабрь", () => expect(getMonth(12)).toBe("декабрь")),
  it("should be Неверное значение" , () => expect(getMonth(13)).toBe("Неверное значение")),
  it("should be октябрь" , () => expect(getMonth(10)).toBe("октябрь")),
  it("should be январь", () => expect(getMonth(1)).toBe("январь"))
});