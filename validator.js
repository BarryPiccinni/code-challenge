'use strict';

function isValidPassword(password) {
  // Have more than 8 characters
  if (password.length <= 8) {
    return false
  }

  // Contains a capital letter
  if (!/[A-Z]/.test(password)) {
    return false
  }

  // Contains a lowercase
  if (!/[a-z]/.test(password)) {
    return false
  }

  // Contains a number
  if (!/[0-9]/.test(password)) {
    return false
  }

  // Contains an underscore
  if (!/_/.test(password)) {
    return false
  }

  return true
}

function passwordRegex(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*_).{9,}$/
  return passwordRegex.test(password)
}

module.exports = { isValidPassword, passwordRegex}