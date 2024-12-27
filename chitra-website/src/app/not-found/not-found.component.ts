import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit {
  ngAfterViewInit() {
    // 3D Rotation for Hero Text
    gsap.to('.hero-text', {
      rotationY: 360,
      duration: 6,
      repeat: -1,
      ease: 'power1.inOut',
    });

    // Parallax Scrolling for Sections
    gsap.to('.hero-section', {
      backgroundPositionY: '-50%',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Staggered Fade-In with 3D Effect for Sections
    gsap.from('.section', {
      opacity: 0,
      y: 100,
      z: -200,
      rotateX: 45,
      duration: 1.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.section-container',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });
  }
}
