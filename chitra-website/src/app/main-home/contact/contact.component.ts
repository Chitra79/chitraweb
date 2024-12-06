import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

  animations: [
    trigger('fadeInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition('void => *', [
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        animate('300ms ease-out', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contactForm: any;
  submitted = false;
  formSuccess = false;

  constructor(private formBuilder: FormBuilder , private router: Router) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.router.navigate(['/page']);
      // Here you would typically handle form submission
      this.formSuccess = true;
      setTimeout(() => {
        this.formSuccess = false;
        this.contactForm.reset();
        this.submitted = false;
      }, 3000);
    }
  }

  // Getter for easy access to form fields
  get f() { return this.contactForm.controls; }
}