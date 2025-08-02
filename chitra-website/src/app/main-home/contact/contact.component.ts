import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('void => *', [animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))])
    ]),
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('300ms ease-out', style({ opacity: 1 }))])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contactForm: any;
  submitted = false;
  formSuccess = false;
  formError = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.formSuccess = false;
    this.formError = false;

    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('name', this.contactForm.value.name);
      formData.append('email', this.contactForm.value.email);
      formData.append('message', this.contactForm.value.message);

      fetch('https://formspree.io/f/mjkoonep', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            this.formSuccess = true;
            this.contactForm.reset();
            this.submitted = false;
            setTimeout(() => {
              this.formSuccess = false;
            }, 3000);
          } else {
            this.formError = true;
          }
        })
        .catch(() => {
          this.formError = true;
        });
    }
  }
}
