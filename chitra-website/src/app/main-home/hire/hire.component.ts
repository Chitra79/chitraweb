import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrl: './hire.component.scss'
})
export class HireComponent {

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink();
      }
    });
  }

  isSticky: boolean = false;
  activeSection: string = '';

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      this.isSticky = scrollTop > 0;
      this.setActiveLink();
    }
  }

  public scrollToAnchoringPosition(elementId: string): void {
    if (this.router.url.endsWith('/')) {
      this.viewportScroller.scrollToAnchor(elementId);
    } else {
      this.router.navigate(['/']);
    }
  }

  setActiveLink() {
    if (isPlatformBrowser(this.platformId)) {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'hire'];
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      let activeSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition + 400) {
          activeSection = section;
        }
      }
      this.activeSection = activeSection;
    }
  }
}
