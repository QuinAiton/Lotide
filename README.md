# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @quinaiton/lotide`

**Require it:**

`const _ = require('@quinaiton/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  *`function1 (head)`: returns first item of array. 

  *`function2 (tail)`: returns seperate array containing all items after the first item.

  *`function3 (middle)`:returns middle item in array. If Array is even it returns the middle two items. 

  *`function4 (assertArrayEqual)`:checks if two arrays are equal.  

  *`function5 (assertEqual)`: checks if two items are equal.

  *`function6 (assertObjectEqual)`:checks if two objects are equal.

  *`function7 (countLetters)`:takes in a sentence (as a string) and
   then returns a count of each of the letters in that sentence.

  *`function8 (countOnly)`: take i an array and an object. It will return an object containing counts of everything that the input object listed.

  *`function9 (eqArrays)`: takes in two arrays and returns true or false, based on a perfect match.

  *`function10 (eqObjects)`:  take in two objects and returns true or false, based on a perfect match.

  *`function11 (findKey)`:  takes in an object and a callback. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.

  *`function12 (findKeyByValue)`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it will return undefined.

  *`function13 (flatten)`: Given an array with other arrays inside, it can flatten it into a single-level array.

  *`function14 (letterPositions)`: will return all the indices (zero-based positions) in the string where each character is found.
  *`function15 (map)`: takes in an array and a call back function and preforms the callback function on each element in the aray.

  *`function16 (takeUntil)`: will return a "slice of the array with elements taken from the beginning untill a truthy value is found.
  *`function17 (without)`: 
}