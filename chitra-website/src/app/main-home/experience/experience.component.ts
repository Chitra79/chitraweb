import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements AfterViewInit {
  experiences = [
    {
      title: 'Frontend Developer',
      type: 'Full-Time',
      period: '2023 - Present',
      tasks: [
        'Built responsive user interfaces using Angular.',
        'Worked closely with backend teams to integrate APIs.',
        'Ensured cross-browser compatibility and performance.',
        'Led frontend code reviews for best practices.',
      ],
    },
    {
      title: 'UI/UX Designer',
      type: 'Part-Time',
      period: '2023 - Present',
      tasks: [
        'Created intuitive web/mobile designs in Figma.',
        'Conducted user research and prototyping.',
        'Collaborated with developers for seamless implementation.',
        'Enhanced UX with feedback-driven improvements.',
      ],
    },
    {
      title: 'Angular Developer',
      type: 'Full-Time',
      period: '2023 - Present',
      tasks: [
        'Expert in Angular Development: Specializing in dynamic, component-driven applications.',
        'Integrated complex APIs and optimized performance for enterprise-level applications.',
        'Routing & Lazy Loading: Optimized load times using Angular routing and lazy loading techniques.',
        'Forms & Validation: Developed dynamic forms with custom validations and real-time state management.',
      ],
    },
    {
      title: 'Video Editor',
      type: 'Part-Time',
      period: '2023 - Present',
      tasks: [
        'Edited engaging video content for social media and YouTube using CapCut.',
        'Enhanced visual storytelling through transitions, effects, and soundtracks.',
        'Collaborated with content creators to ensure alignment with brand vision.',
        'Managed post-production tasks, including color grading and audio adjustments.',
        'Optimized video content for different social media platforms for better engagement.',
        'Maintained high-quality standards and ensured timely delivery of projects.',
      ],
    },
    {
      title: 'Diploma in Computer',
      type: 'Full-Time',
      period: '2021 - 2023',
      tasks: [
        'Studied Computer Science fundamentals and programming languages.',
        'Developed a strong foundation in software development and problem-solving.',
        'Participated in coding competitions and workshops to enhance technical skills.',
        'Collaborated with peers on group projects to improve teamwork and communication skills.',
      ],
    },
    {
      title: 'Bachelors Degree of B.C.A',
      period: '2021  Present',
      tasks:[
        'Studied Computer Science and Information Technology.',
        'Developed a strong foundation in programming languages, data structures, and algorithms.',
        'Participated in various projects and competitions to enhance technical skills.',
        'Collaborated with peers on group projects to improve teamwork and communication skills.'

      ]

    }
     
  ];

  ngAfterViewInit(): void {
    this.initializeAnimations();

    // Adding hover effects for enhanced 3D animation
    const cards = document.querySelectorAll('.card');

    cards.forEach((card: Element) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card as HTMLElement, {
          scale: 1.05,
          rotationY: 10, // Apply gentle rotation along Y-axis
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card as HTMLElement, {
          scale: 1,
          rotationY: 0, // Reset rotation
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });
  }

  initializeAnimations(): void {
    // Enhanced section title animation with smooth entrance
    gsap.from('.section-title', {
      y: 150,
      opacity: 0,
      scale: 0.9,
      rotate3d: [1, 1, 0, 20], // More subtle 3D rotation effect
      duration: 2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 85%', 
        end: 'top 10%',
        toggleActions: 'play none reverse none', 
        
        onEnterBack: () => gsap.to('.section-title', { opacity: 1, y: 0, scale: 1 }),
      }
    });

    // Section description animation with smooth depth and rotation
    gsap.from('.section-description', {
      y: 150,
      opacity: 0,
      scale: 0.9,
      rotate3d: [1, 1, 0, 15], 
      duration: 2.2,
      delay: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.section-description',
        start: 'top 85%',
        end: 'top 10%',
        toggleActions: 'play none reverse none',
        
        onEnterBack: () => gsap.to('.section-description', { opacity: 1, y: 0, scale: 1 }),
      }
    });

    // Image container animation with subtle 3D slide and scaling effect
    gsap.from('.experience-image', {
      scale: 0.8,
      opacity: 0,
      rotate3d: [1, 0, 0, 20], // More subtle rotation along X-axis
      x: 250, 
      z: -200, 
      duration: 2.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.image-container',
        start: 'top 85%',
        end: 'top 10%',
        toggleActions: 'play none reverse none',
        
        onEnterBack: () => gsap.to('.experience-image', { opacity: 1, scale: 1, x: 0 }),
      }
    });

    // Experience cards with staggered 3D depth, rotation, and scale
    gsap.from('.card', {
      opacity: 0,
      y: 70,
      scale: 0.95, 
      rotate3d: [0, 1, 0, 30], 
      z: -150, 
      duration: 2,
      stagger: 0.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.experience-cards',
        start: 'top 80%',
        end: 'top 15%',
        toggleActions: 'play none reverse none',
        
        onEnterBack: () => gsap.to('.card', { opacity: 1, y: 0, scale: 1 }),
      }
    });
  }
}
