/**
 * messageMaker.js
 * 
 * An IIFE-based library that creates greeting messages.
 * Uses the nameHelper library (must be loaded before this file).
 * 
 * Exposes the 'messageMaker' object on the global (window) scope.
 */
(function (window) {
  'use strict';

  function MessageMaker() {}

  /**
   * Returns a greeting string.
   * If the name starts with 'J' or 'j', returns "Goodbye <Name>"
   * Otherwise, returns "Hello <Name>"
   * @param {string} name
   * @returns {string}
   */
  MessageMaker.prototype.getMessage = function (name) {
    if (window.nameHelper.isJName(name)) {
      return "Goodbye " + name;
    } else {
      return "Hello " + name;
    }
  };

  // Attach a single instance to the global window object
  window.messageMaker = new MessageMaker();

})(window);