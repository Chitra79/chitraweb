import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  cvUrl: string;

  constructor(private sanitizer: DomSanitizer) {
    // Set the CV URL with Angular's DomSanitizer
    this.cvUrl = 'assets/Cv.pdf'; // Direct URL to the PDF
  }
}
