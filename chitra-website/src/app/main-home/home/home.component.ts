import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import anime from 'animejs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.animateElements();
  }

  animateElements() {
    // Intro Text Animation
    anime({
      targets: '.intro-text',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: 800
    });

    // Subtitle Animation
    anime({
      targets: '.subtitle',
      keyframes: [
        { translateY: -10, opacity: 0 },
        { translateY: 0, opacity: 1 }
      ],
      easing: 'easeOutElastic',
      duration: 1000,
      delay: 1200
    });

    // Social Icons Animation
    anime({
      targets: '.social-icons a',
      scale: [0.5, 1],
      opacity: [0, 1],
      easing: 'easeOutElastic',
      duration: 1500,
      delay: anime.stagger(300) // Staggered delay for each icon
    });

    // Social Icons Hover Effect
    document.querySelectorAll('.social-icons a').forEach(icon => {
      icon.addEventListener('mouseover', () => {
        anime({
          targets: icon,
          scale: 1.2,
        
          color: '#007bff',
          easing: 'easeInOutQuad',
          duration: 500
        });
      });

      icon.addEventListener('mouseout', () => {
        anime({
          targets: icon,
          scale: 1,
          rotate: '0turn',
          color: '#e99f00',
          easing: 'easeInOutQuad',
          duration: 500
        });
      });
    });
  }
}
