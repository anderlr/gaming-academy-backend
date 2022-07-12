"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const LectionValidators_1 = require("./LectionValidators");
describe("LectionValidators", () => {
    test("CT1", () => {
        const lection = {};
        // @ts-ignore
        expect((0, LectionValidators_1.validateLection)(lection)).toBe(false);
    });
    test("CT2", () => {
        const SUT = {
            course: "",
            name: "animação 3D Unity",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "https://www.link-válido.com",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT3", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "https://www.link-válido.com",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT4", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: "",
            video: "https://www.link-válido.com",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT5", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT6", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "https://www.link-válido.com",
        };
        // @ts-ignore
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT7", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "AMD",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "https://www.link-válido.com",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT8", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: faker_1.faker.random.alphaNumeric(300),
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "https://www.link-válido.com",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT9", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: "ABC",
            video: "https://www.link-válido.com",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT10", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: faker_1.faker.random.alphaNumeric(6000),
            video: "https://www.link-válido.com",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT11", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "www.link-inválido.com",
            duration: 1878,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT12", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "https://www.link-válido.com",
            duration: 59,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT13", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "https://www.link-válido.com",
            duration: 5000,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(false);
    });
    test("CT14", () => {
        const SUT = {
            course: "123e4567-e89b-12d3-a456-426655440000",
            name: "animação 3D Unity",
            description: faker_1.faker.random.alphaNumeric(2000),
            video: "https://www.link-válido.com",
            duration: 100,
        };
        expect((0, LectionValidators_1.validateLection)(SUT)).toBe(true);
    });
});
