"use strict";

var threshold = 1;
if (window.innerWidth <= 450) {
  threshold = 0.2;
} else if (window.innerWidth <= 912) {
  threshold = 0.5;
}
var sectionValores = document.querySelector('section#valores');
var observersectionValores = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting == true) {
    document.querySelector('section#valores > div:nth-of-type(2) > div:nth-of-type(1)').classList.add('fadeInUp');
    setTimeout(function () {
      document.querySelector('section#valores > div:nth-of-type(2) > div:nth-of-type(3)').classList.add('fadeInUp');
    }, 130);
    setTimeout(function () {
      document.querySelector('section#valores > div:nth-of-type(2) > div:nth-of-type(2)').classList.add('fadeInUp');
    }, 250);
    observersectionValores.unobserve(entries[0].target);
  }
}, {
  threshold: threshold
});
observersectionValores.observe(sectionValores);