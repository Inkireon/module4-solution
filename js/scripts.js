/**
 * script.js
 * 
 * Module 4 Assignment - Main Script
 * 
 * Loops over an array of names.
 * For each name:
 *   - If it starts with 'J' or 'j' → prints "Goodbye <name>" to the console
 *   - Otherwise → prints "Hello <name>" to the console
 * 
 * Uses the nameHelper and messageMaker IIFE libraries.
 */

(function (window) {
  'use strict';

  // Array of names to greet
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim"
  ];

  // Loop through names and log a message for each
  for (var i = 0; i < names.length; i++) {
    var message = window.messageMaker.getMessage(names[i]);
    console.log(message);
  }

})(window);