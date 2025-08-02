import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  public currentIndex: number = 0;

  experiences = [
    {
      title: 'Frontend Intern',
      company: 'Aadim Innovation',
      type: 'Internship 1+years',
      period: 'Dec 2023 - Present',
      location: 'Kathmandu, Nepal',
      tasks: [
        'Built and optimized Angular-based web interfaces for production applications',
        'Implemented JWT authentication and authorization systems',
        'Designed database schemas and optimized queries for better performance',
        'Collaborated on real-world solutions for internal and student projects',
        'Integrated third-party APIs and services',
        'Ensured cross-browser compatibility and performance',
        'Led frontend code reviews for best practices',
        'Built responsive user interfaces using Angular',
        'Worked closely with backend teams to integrate APIs'
      ],
      expertise: [
        'Expert in Angular Development: Specializing in dynamic, component-driven applications',
        'Integrated complex APIs and optimized performance for enterprise-level applications',
        'Routing & Lazy Loading: Optimized load times using Angular routing and lazy loading techniques',
        'Forms & Validation: Developed dynamic forms with custom validations and real-time state management'
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'Aadim Innovation',
      type: 'Part-Time',
      period: '2023 - Present',
      location: 'Kathmandu, Nepal',
      tasks: [
        'Created intuitive web/mobile designs in Figma',
        'Conducted user research and prototyping',
        'Collaborated with developers for seamless implementation',
        'Enhanced UX with feedback-driven improvements'
      ],
    }
  ];

  additionalExperiences = [
    {
      title: 'Freelance Developer',
      description: 'Part of a 4-member development team (Brogrammers) working on various client projects',
      period: '2023 - Present',
      tasks: [
        'Delivered full-stack applications using Spring Boot and Angular',
        'Implemented real-time features using WebSocket',
        'Worked with cross-functional teams on project delivery'
      ]
    },
    {
      title: 'Academic Projects',
      description: 'Extensive project work during BCA program',
      period: '2021 - Present',
      tasks: [
        'Built multiple full-stack applications',
        'Explored various backend technologies and frameworks',
        'Participated in hackathons and competitive programming'
      ]
    }
  ];

  ngAfterViewInit(): void {
    this.setupNavigation();

    // Section title animation
    gsap.fromTo('.section-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

    // Carousel cards animation
    gsap.fromTo('.carousel-slide',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.carousel-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

    // Additional cards animation
    gsap.fromTo('.additional-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.additional-experience',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
  }

  setupNavigation(): void {
    const prevButton = document.querySelector('.carousel-prev') as HTMLButtonElement;
    const nextButton = document.querySelector('.carousel-next') as HTMLButtonElement;
    const carouselElement = this.carousel.nativeElement;

    prevButton.addEventListener('click', () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        const slideWidth = carouselElement.offsetWidth;
        carouselElement.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
      }
    });

    nextButton.addEventListener('click', () => {
      if (this.currentIndex < this.experiences.length - 1) {
        this.currentIndex++;
        const slideWidth = carouselElement.offsetWidth;
        carouselElement.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
      }
    });
  }
}
