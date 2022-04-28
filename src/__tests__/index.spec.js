import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  it('Make a string toLowerCase', () => {
    const string = 'I LOVE YOU';
    const lowerCaseString = changeStringCase(string, 'lowercase');
    expect(lowerCaseString).toEqual('i love you');
  });
  it('Make a string toUpperCase', () => {
    const string = 'i love you';
    const lowerCaseString = changeStringCase(string, 'uppercase');
    expect(lowerCaseString).toEqual('I LOVE YOU');
  });

  it('Check default', () => {
    const string = 'I love you';
    const defaultString = changeStringCase(string);
    expect(defaultString).toEqual('I love you');
  });
});

describe('sumOfArray()', () => {
  it('check reducer only with numbers', () => {
    const array = [1, 2, 3, 4];
    expect(sumOfArray(array)).toEqual(10);
  });
  it('check reducer with numbers and other symbols', () => {
    const arrayWithSymbols = [1, 2, 3, 4, 'f'];
    expect(sumOfArray(arrayWithSymbols)).toEqual(10);
  });
});

describe('divisibleBy()', () => {
  it('Returns a number divided by num without a remainder', () => {
    const arrayNum = [1, 2, 3, 4, 5, 6];
    const resultOfDivisibleBy = divisibleBy(arrayNum, 2);
    expect(resultOfDivisibleBy).toEqual([2, 4, 6]);
  });
});

describe('addDotsToString()', () => {
  it('Return string with dots based by string.length specified by number', () => {
    const stringNeedDot = 'I need testing this dat string';
    const resultAddDotsToString = addDotsToString(stringNeedDot, 4);
    expect(resultAddDotsToString).toEqual('I...');
  });
  it('Return string if string.length < length', () => {
    const shortString = 'A';
    const resultAddDotsToShortString = addDotsToString(shortString, 256);
    expect(resultAddDotsToShortString).toEqual(shortString);
  });
});

describe('objectEntries()', () => {
  it('Return array of keys and values of object', () => {
    const objExample = {
      a: 'radiant',
      b: 50,
    };
    const resultObjectEntries = objectEntries(objExample);
    expect(resultObjectEntries).toEqual([
      ['a', 'radiant'],
      ['b', 50],
    ]);
  });
});
