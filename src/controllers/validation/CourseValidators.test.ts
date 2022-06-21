import { faker } from "@faker-js/faker";

import { validateCourse } from "./CourseValidators";

describe("CourseValidators", () => {
  test("CT1", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(true);
  });

  test("CT2", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(false);
  });

  test("CT3", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(true);
  });

  test("CT4", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: faker.random.alphaNumeric(200),
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(true);
  });

  test("CT5", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Caro",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(false);
  });

  test("CT6", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: faker.random.alphaNumeric(201),
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(false);
  });

  test("CT7", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(100),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(true);
  });

  test("CT8", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(5000),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(true);
  });

  test("CT9", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(99),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(false);
  });

  test("CT10", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(5001),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(false);
  });

  test("CT11", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76943",
      duration: 60,
    };

    expect(validateCourse(SUT)).toBe(true);
  });

  test("CT12", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/7636000",
      duration: 36000,
    };

    expect(validateCourse(SUT)).toBe(true);
  });

  test("CT13", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/7691871",
      duration: 59,
    };

    expect(validateCourse(SUT)).toBe(false);
  });

  test("CT14", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76936001",
      duration: 36001,
    };

    expect(validateCourse(SUT)).toBe(false);
  });

  test("CT15", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo.com/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(true);
  });

  test("CT16", () => {
    const SUT = {
      instructor: "123e4567-e89b-12d3-a456-426655440000",
      name: "Curso Card Game Unity",
      description: faker.random.alphaNumeric(2000),
      image: "https://vimeo/76979871",
      duration: 62,
    };

    expect(validateCourse(SUT)).toBe(false);
  });
});
