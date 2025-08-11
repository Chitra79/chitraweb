import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Only animate when scrolling into view - no initial animations
    
    // Title animation - only on scroll
    gsap.fromTo('.about-content h1', 
      {
        opacity: 0,
        x: -50,
        y: 30
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content h1',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    );


    gsap.fromTo('.about-content p', 
      {
        opacity: 0,
        x: -30,
        y: 20
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.about-content p',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    );

    // Button animation - only on scroll
    gsap.fromTo('.button-group a', 
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.button-group',
          start: 'top 85%',
          end: 'top 70%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    );

    // Image animation - only on scroll
    gsap.fromTo('.about-image .image-wrapper', 
      {
        opacity: 0,
        scale: 0.8,
        x: 30
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 85%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    );

    // Stats animation - only on scroll
    gsap.fromTo('.stat-item', 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.stats',
          start: 'top 85%',
          end: 'top 65%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    );
  }
}