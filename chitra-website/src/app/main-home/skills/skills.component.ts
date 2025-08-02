import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  activeSection: string = 'techstack';
  certificates = [
    { src: 'assets/cer1.jpeg', alt: 'Certificate 1', name: 'Ambition HackFest Social Impact Winner' },
    { src: 'assets/cer2.jpeg', alt: 'Certificate 3', name: '1st Position in Aadim Hackathon' },
    { src: 'assets/cer4.png', alt: 'Certificate 4', name: 'AI and Emerging Technology' }
  ];

  @ViewChildren('contentArea') contentAreas!: QueryList<ElementRef>;

  setSection(section: string) {
    if (this.activeSection !== section) {
      this.activeSection = section;
      setTimeout(() => this.animateSectionChange(), 0);
    }
  }

  ngAfterViewInit() {
    this.setupScrollAnimations();
    this.animateInitialSection();
  }

  private setupScrollAnimations() {
    gsap.fromTo('.portfolio-header', 
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-header',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    );

    gsap.fromTo('.nav-bar button', 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.nav-bar',
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      }
    );
  }

  private animateInitialSection() {
    const initialSection = this.contentAreas.find(ca => ca.nativeElement.getAttribute('ng-reflect-ng-if') === this.activeSection);
    if (initialSection) {
      this.animateGridItems(initialSection.nativeElement.querySelectorAll('.grid-item'));
    }
  }

  private animateSectionChange() {
    const currentSection = this.contentAreas.find(ca => ca.nativeElement.classList.contains('active'));
    const newSection = this.contentAreas.find(ca => ca.nativeElement.getAttribute('ng-reflect-ng-if') === this.activeSection);

    if (currentSection && newSection) {
      gsap.to(currentSection.nativeElement.querySelectorAll('.grid-item'), {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          currentSection.nativeElement.classList.remove('active');
          newSection.nativeElement.classList.add('active');
          this.animateGridItems(newSection.nativeElement.querySelectorAll('.grid-item'));
        }
      });
    } else if (newSection) {
      newSection.nativeElement.classList.add('active');
      this.animateGridItems(newSection.nativeElement.querySelectorAll('.grid-item'));
    }
  }

  private animateGridItems(gridItems: NodeListOf<Element>) {
    gsap.fromTo(gridItems, 
      { opacity: 0, y: 50, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.3)'
      }
    );

    const techStackItems = Array.from(gridItems).filter(item => item.classList.contains('tech-stack'));
    if (techStackItems.length > 0) {
      gsap.fromTo(techStackItems,
        { rotation: -10, opacity: 0 },
        {
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 0.2
        }
      );
    }
  }
}