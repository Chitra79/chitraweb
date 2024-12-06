import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  footerData: any;

  constructor() {}

  ngOnInit(): void {
    this.setFooterData();
  }

  setFooterData() {
    this.footerData = {
      companyName: 'Chitra',
      description: 'Hello, I am Chitra; The 21-year-old is a frontend developer. I started programming in 2021 and continued to specialize in 2024. These days, along with programming, I study about startups and businesses, and besides all this.',
      products: [
        { name: 'Angular', link: '#!' },
        { name: 'Php', link: '#!' },
        { name: 'TypeScript', link: '#!' },
        { name: 'JavaScript', link: '#!' },
      ],
      usefulLinks: [
        { name: 'Portfolio', link: '' },
        { name: 'GitHub', link: '' },
        { name: 'Blog', link: '' },
        { name: 'Contact', link: '' },
    ],
    
      contact: {
        address: 'Kathmandu, Nepal',
        email: 'chitraprasadacharya550@gmail.com',
        phone: '+9779822523924',
        
      },
      socialMediaLinks: [
        { iconClass: 'fab fa-facebook-f', url: 'https://facebook.com' },
        { iconClass: 'fab fa-twitter', url: 'https://twitter.com' },
        { iconClass: 'fab fa-google', url: 'https://google.com' },
        { iconClass: 'fab fa-instagram', url: 'https://instagram.com' },
        { iconClass: 'fab fa-linkedin', url: 'https://linkedin.com' },
        { iconClass: 'fab fa-github', url: 'https://github.com' },
      ],
     
    };
  }
}
