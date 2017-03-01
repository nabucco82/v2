/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// document.addEventListener('DOMContentLoaded', function () {
//   particleground(document.getElementById('particles'), {
//     dotColor: '#5cbdaa',
//     lineColor: '#5cbdaa'
//   });
//   var intro = document.getElementById('intro');
//   intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
// }, false);


/*
// jQuery plugin example:
*/
$(document).ready(function() {
  $('.background').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
/**/