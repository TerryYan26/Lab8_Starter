// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Function: isEven(number)
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Function: isPalindrome(word)
  function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  }
  
  // Function: isPrime(number)
  function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  // Function: hasDuplicates(array)
  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }
  
  // Function: isPositive(number)
  function isPositive(number) {
    return number > 0;
  }
  
  // Tests for isEven(number)
  test('isEven should return true for even numbers', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(10)).toBe(true);
  });
  
  test('isEven should return false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(9)).toBe(false);
  });
  
  // Tests for isPalindrome(word)
  test('isPalindrome should return true for palindrome words', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });
  
  test('isPalindrome should return false for non-palindrome words', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });
  
  // Tests for isPrime(number)
  test('isPrime should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(5)).toBe(true);
  });
  
  test('isPrime should return false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
  });
  
  // Tests for hasDuplicates(array)
  test('hasDuplicates should return true for arrays with duplicates', () => {
    expect(hasDuplicates([1, 2, 2, 3])).toBe(true);
    expect(hasDuplicates(['a', 'b', 'a'])).toBe(true);
  });
  
  test('hasDuplicates should return false for arrays without duplicates', () => {
    expect(hasDuplicates([1, 2, 3, 4])).toBe(false);
    expect(hasDuplicates(['a', 'b', 'c'])).toBe(false);
  });
  
  // Tests for isPositive(number)
  test('isPositive should return true for positive numbers', () => {
    expect(isPositive(10)).toBe(true);
    expect(isPositive(0.5)).toBe(true);
  });
  
  test('isPositive should return false for non-positive numbers', () => {
    expect(isPositive(-5)).toBe(false);
    expect(isPositive(0)).toBe(false);
  });
  