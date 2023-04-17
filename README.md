# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @krissantos101/lotide`

**Require it:**

`const _ = require('@krissantos101/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(...) : function called assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
* assertEqual(...) : function called assertEqual compare two values it takes in and print out a message telling us if they match or not.
* assertObjectsEqual(...) : function called assertObjectsEqual take in two objects and console.log an appropriate message to the console
* countLetters(...) : function called countLetters take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* countOnly(...) : function countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* eqArrays(...) :  function called eqArrays which takes in two arrays and returns true or false, based on a perfect match.
* eqObjects(...) : function called eqObjects which will take in two objects and returns true or false, based on a perfect match.
* findKey(...) :  function called findKey which takes in an object and a callback. It scan the object and return the first key for which the callback returns a truthy value.
* findKeyByValue(...) : function called findKeyByValue which takes in an object and a value. It scan the object and return the first key which contains the given value.
* flatten(...) : function called flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* head(...) : function called head which returns the first item in the array.
* letterPositions(...) :  function called letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
* map(...) : function called map will return a new array based on the results of the callback function.
* middle(...) : function called middle which will take in an array and return the middle-most element(s) of the given array.
* tail(...) : function called tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
* takeUntil(...) : function called takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
* without(...) : function called without which will return a subset of a given array, removing unwanted elements.