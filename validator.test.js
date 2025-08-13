'use strict';

const { isValidPassword, passwordRegex } = require('./validator');

describe('validator', () =>{
    it('Should return true if a password is valid', () => {
        expect(isValidPassword("Password123_")).toBe(true)
        expect(passwordRegex("Password123_")).toBe(true)
    })

    it('Should have more than 8 characters', () => {
        expect(isValidPassword("Pw1_")).toBe(false)
        expect(passwordRegex("Pw1_")).toBe(false)
    })

    it('Should contain a capital letter', () => {
        expect(isValidPassword("password123_")).toBe(false)
        expect(passwordRegex("password123_")).toBe(false)
    })

    it('Should contain a lowercase letter', () => {
        expect(isValidPassword("PASSWORD123_")).toBe(false)
        expect(passwordRegex("PASSWORD123_")).toBe(false)
    })

    it('Should contain a number', () => {
        expect(isValidPassword("Password_")).toBe(false)
        expect(passwordRegex("Password_")).toBe(false)
    })

    it('Should contain an underscore', () => {
        expect(isValidPassword("Password123")).toBe(false)
        expect(passwordRegex("Password123")).toBe(false)
    })
})