/**
 * nameHelper.js
 * 
 * An IIFE-based library that provides name-checking utility.
 * Checks if a given name starts with 'j' or 'J'.
 * 
 * Exposes the 'nameHelper' object on the global (window) scope.
 */
(function (window) {
  'use strict';

  function NameHelper() {}

  /**
   * Returns true if the name starts with 'j' or 'J', false otherwise.
   * @param {string} name
   * @returns {boolean}
   */
  NameHelper.prototype.isJName = function (name) {
    if (typeof name !== 'string' || name.length === 0) {
      return false;
    }
    return name.charAt(0).toLowerCase() === 'j';
  };

  // Attach a single instance to the global window object
  window.nameHelper = new NameHelper();

})(window);