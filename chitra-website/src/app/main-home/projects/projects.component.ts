import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Project {
  name: string;
  status: string;
  description: string;
  link?: string;
}

interface ProjectDetail {
  description: string;
  keyFeatures: string[];
  techStack: string[];
}

interface ProjectDetails {
  [key: string]: ProjectDetail;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private selectedProjectSubject = new BehaviorSubject<Project | null>(null);
  selectedProject$ = this.selectedProjectSubject.asObservable();

  projects: Project[] = [
    {
      name: 'CollegeHub Nepal',
      status: 'Live',
      description: 'College Listing and Management Platform',
      link: 'https://collegehubnepal.com/'
    },
    { name: 'Sajilo Yatra', status: 'Production', description: 'Tour and Travel Platform' },
    { name: 'ExamSeat', status: 'Production', description: 'Exam Arrangement System' },
    { name: 'OpenMicHub', status: 'Completed', 'description': 'Artist Collaboration Platform' },
    { name: 'CMS (Content Management System)', status: 'In-Development', description: 'Dynamic School/College Website & Management' }
  ];

  projectDetails: ProjectDetails = {
    'Sajilo Yatra': {
      description: 'Sajilo Yatra is a tour and travel platform built using PHP, HTML, CSS, Bootstrap, and MySQL...',
      keyFeatures: ['Real-time tour booking', 'Custom travel itineraries', 'Customer support chat', 'Payment integration', 'Travel destination guides'],
      techStack: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'MySQL']
    },
    'ExamSeat': {
      description: 'ExamSeat is an exam arrangement system built with Spring Boot, Angular...',
      keyFeatures: ['Automated seat allocation', 'Exam schedule management', 'Student registration system', 'Conflict resolution', 'Real-time updates'],
      techStack: ['Spring Boot', 'Angular', 'PostgreSQL', 'JWT']
    },
    'OpenMicHub': {
      description: 'Built using PHP, MySQL, AJAX, and WebSocket...',
      keyFeatures: ['Live open mic sessions', 'Real-time chat and interaction', 'Virtual coin reward system', 'Artist profile and uploads', 'Audience engagement features', 'Session analytics'],
      techStack: ['PHP', 'MySQL', 'AJAX', 'Socket.IO', 'HTML/CSS/JS']
    },
    'CMS (Content Management System)': {
      description: 'CMS is a full-featured school and content management platform built using Angular and Spring Boot...',
      keyFeatures: ['Institution registration', 'Dynamic website builder', 'Routine and attendance', 'Result publishing', 'User roles', 'Custom theme'],
      techStack: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT']
    },
    'CollegeHub Nepal': {
      description: 'CollegeHub Nepal is a web-based platform built using Spring Boot...',
      keyFeatures: ['College discovery', 'Direct application system', 'Admin panel', 'Superadmin governance', 'Role-based access', 'Request/approval workflow'],
      techStack: ['Angular', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'Admin Dashboard']
    }
  };

  ngOnInit(): void {
    // Set default selected project
    this.selectedProjectSubject.next(this.projects[0]);
  }

  selectProject(project: Project): void {
    // Always update the selected project to show details in main content
    this.selectedProjectSubject.next(project);
  }

  openProjectLink(project: Project): void {
    // Redirect to the project's link if it exists
    if (project.link) {
      window.open(project.link, '_blank');
    }
  }
}