import { faker } from "@faker-js/faker";

import { validateInstructor } from "./InstructorValidator";

describe("InstructorValidators", () => {
  test("CT1", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(true);
  });

  test("CT2", () => {
    const SUT = {
      name: "Anton",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(true);
  });

  test("CT3", () => {
    const SUT = {
      name: faker.random.alphaNumeric(200),
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(true);
  });

  test("CT4", () => {
    const SUT = {
      name: "Anto",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(false);
  });

  test("CT5", () => {
    const SUT = {
      name: faker.random.alphaNumeric(201),
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(false);
  });

  test("CT6", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(100),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(true);
  });

  test("CT7", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(5000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(true);
  });

  test("CT8", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(99),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(false);
  });

  test("CT9", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(5001),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(false);
  });

  test("CT10", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(true);
  });

  test("CT11", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silvagmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(false);
  });

  test("CT12", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(true);
  });

  test("CT13", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha123",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(false);
  });

  test("CT14", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "https://imgur.com/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(true);
  });

  test("CT15", () => {
    const SUT = {
      name: "AntonioSilva",
      email: "antonio.silva@gmail.com",
      password: "Senha@12",
      bio: faker.random.alphaNumeric(2000),
      avatar: "htps://imgur/gallery/FttKKMh",
    };

    expect(validateInstructor(SUT)).toBe(false);
  });
});
