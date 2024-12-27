import { Component, OnInit, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  heroImage = 'assets/f-bg.png';
  

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gsap.from('.hero .content', {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'power3.out',
    });
  }
}
