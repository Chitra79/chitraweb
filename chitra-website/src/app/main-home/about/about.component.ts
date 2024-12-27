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
    // 3D text animation with longer duration and slower start
    gsap.from('.about-content h1', {
      opacity: 0,
      scale: 0.8,
      rotate3d: [1, 1, 0, 30], // Rotate in 3D space
      x: -300, // Start from the left
      z: -200, // Initial depth
      duration: 6, // Extended duration for slower animation
      ease: 'power4.out',
      delay: 1, // Slight delay to start after page load
      scrollTrigger: {
        trigger: '.about-content h1',
        start: 'top 80%',
        end: 'top 60%',
        scrub: 3, // Slower scrub effect
        markers: false,
      },
    });

    // 3D Paragraph Animation (rotate and depth) with extended time
    gsap.from('.about-content p', {
      opacity: 0,
      scale: 0.9,
      rotate3d: [1, 1, 0, 20],
      x: -200,
      y: 100,
      z: -150,
      duration: 6, // Longer duration for smoother entry
      ease: 'power4.out',
      stagger: 0.3,
      delay: 1.5, // Delay for smooth sequential animations
      scrollTrigger: {
        trigger: '.about-content p',
        start: 'top 80%',
        end: 'top 60%',
        scrub: 3, // Slower scrub effect
        markers: false,
      },
    });

    // Image with Parallax and 3D depth (slide in from the right with rotation) with extended time
    gsap.from('.about-image .image-wrapper', {
      opacity: 0,
      scale: 0.5, // Start smaller for a popping effect
      rotateX: 45, // Rotate along the X-axis for a 3D perspective
      z: -500, // Depth value (popping from further away)
      duration: 7, // Extended time for the image animation
      ease: 'power4.out',
      delay: 2, // Delay to sync with the content
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 85%',
        end: 'top 60%',
        scrub: 3, // Slower scrub effect
        markers: false,
      },
    });
  }    
}
