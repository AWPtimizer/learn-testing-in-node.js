import {describe, expect, it} from '@jest/globals';
import {multiply, sum} from '../index';

describe('Testing sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // below is simpler explanation
  // it('adds 1 + 2 to equal 3', () => {
  //   const finalAnswer = sum(1, 2);
  //   expect(finalAnswer).toBe(3);
  //   // expect(sum(1, 2)).toBe(3);
  // });
});

describe('Testing multiply function', () => {
  it('multiplies 1 and 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });

  // below is simpler explanation
  // it('adds 1 + 2 to equal 3', () => {
  //   const finalAnswer = sum(1, 2);
  //   expect(finalAnswer).toBe(3);
  //   // expect(sum(1, 2)).toBe(3);
  // });
});
