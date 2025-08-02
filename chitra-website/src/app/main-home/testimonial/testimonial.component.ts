import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  team = [
    {
      name: 'Dhiraj Jirel',
        role: 'Backend Developer',
      image: 'assets/dhiraj.webp',
      social: {
        github: 'https://github.com/deejs2',
        linkedin: 'https://www.linkedin.com/in/dhiraj-j/',
        website: 'https://dhirajjirel.com.np/'
      }
    },
    {
      name: 'Pasang Gelbu Sherpa',
      role: 'Backend Developer',
      image: 'assets/sherpa.webp',
      social: {
        github: 'https://github.com/pasang60',
        linkedin: 'https://www.linkedin.com/in/pasang-gelbu-sherpa-3ba13a281/',
        website: ''
      }
    },
    {
      name: 'Chitra Prasad Acharya',
      role: 'Frontend Developer',
      image: 'assets/logo.png',
      social: {
        github: 'https://gitlab.com/chitraprasadacharya/',
        linkedin: 'https://www.linkedin.com/in/chitraprdacharya/',
        website: 'https://chitraprasadacharya.com.np/'
      }
    },
    {
      name: 'Utsab Dahal',
      role: 'Backend Developer',
      image: 'assets/utsab.png',
      social: {
        github: 'https://github.com/utsabdahal',
        linkedin: 'https://www.linkedin.com/in/utsabdahal/',
        website: 'https://www.dahalutsab.com.np/'
      }
    }
  ];

  ngOnInit(): void {}
}
