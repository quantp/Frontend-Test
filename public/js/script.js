/**
 * @name Site
 * @description Define global variables and functions
 * @version 1.0
 */
document.addEventListener("DOMContentLoaded", function(event) { 
  var Selectors = {
    TOGGLER: '.fe-menu-toggler'
  };
  var ACTIVE_CLASS = 'active';

  document.querySelectorAll(Selectors.TOGGLER).forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      var target = el.getAttribute('data-toggle');
      document.querySelector(target).classList.toggle(ACTIVE_CLASS);
    });
  });
});
