'use strict';

const test = require('node:test');
const assert = require('node:assert');

const { isValidPassword, passwordRegex } = require('./validator');

test('Should return true if a password is valid', () => {
    assert.strictEqual(isValidPassword("Password123_"), true);
    assert.strictEqual(passwordRegex("Password123_"), true);
});

test('Should have more than 8 characters', () => {
    assert.strictEqual(isValidPassword("Pw1_"), false);
    assert.strictEqual(passwordRegex("Pw1_"), false);
});

test('Should contain a capital letter', () => {
    assert.strictEqual(isValidPassword("password123_"), false);
    assert.strictEqual(passwordRegex("password123_"), false);
});

test('Should contain a lowercase letter', () => {
    assert.strictEqual(isValidPassword("PASSWORD123_"), false);
    assert.strictEqual(passwordRegex("PASSWORD123_"), false);
});

test('Should contain a number', () => {
    assert.strictEqual(isValidPassword("Password_"), false);
    assert.strictEqual(passwordRegex("Password_"), false);
});

test('Should contain an underscore', () => {
    assert.strictEqual(isValidPassword("Password123"), false);
    assert.strictEqual(passwordRegex("Password123"), false);
});
