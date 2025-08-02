import { Component, AfterViewInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import anime from 'animejs';

import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.animateElements();
    this.typeText();
  }

  animateElements() {
    if (document.querySelector('.intro-text')) {
      anime({
        targets: '.intro-text',
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 200,
      });
    }

    if (document.querySelector('.subtitle')) {
      anime({
        targets: '.subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 600,
      });
    }

    if (document.querySelectorAll('.social-icons a').length) {
      anime({
        targets: '.social-icons a',
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 800,
        delay: anime.stagger(100, { start: 800 }),
      });
    }

    if (document.querySelectorAll('.buttons .btn').length) {
      anime({
        targets: '.buttons .btn',
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 800,
        delay: anime.stagger(100, { start: 1000 }),
      });
    }
  }
  typeText() {
  const options = {
    strings: [
      'Software <span class="highlight-developer">Developer</span>',
    ],
    typeSpeed: 120,
    backSpeed: 80,
    showCursor: false, // 👈 Hides the blinking cursor line

    onComplete: () => {
      const subOptions = {
        strings: ['BCA <span class="highlight">STUDENT</span>'],
        typeSpeed: 50,
        backSpeed: 30,
        showCursor: false // 👈 Also hide in second line
      };
      new Typed('.typed-subtext', subOptions);
    },
  };

  new Typed('.typed-text', options);
}


}