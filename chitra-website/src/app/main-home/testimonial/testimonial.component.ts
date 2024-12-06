import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[] = [
    { id: 1, name: 'Utsab Dahal', role: 'Client', content: 'Working with this developer was an exceptional experience. Their attention to detail and innovative solutions significantly improved our project.', rating: 5 },
    { id: 2, name: 'Dhiraj Jirel', role: 'Project Manager', content: 'The designs and development work were outstanding. Communication was clear, and deadlines were met without compromise on quality.', rating: 4 },
    { id: 3, name: 'Pasang Gelbu Sherpa', role: 'Team Lead', content: 'An excellent professional who brings creativity and technical skills to the table. Highly recommended for complex and demanding projects.', rating: 5 },
  ];
  

  testimonialForm: FormGroup;
  submissionError: string = '';

  prohibitedWords: string[] = ['badword1', 'badword2', 'inappropriate', 'offensive'];

  constructor(private fb: FormBuilder) {
    this.testimonialForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      role: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      content: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500), this.noProhibitedWords()]],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  ngOnInit(): void {}

  noProhibitedWords() {
    return (control: { value: string }) => {
      if (!control.value) return null;
      const containsProhibitedWord = this.prohibitedWords.some(word => 
        control.value.toLowerCase().includes(word.toLowerCase())
      );
      return containsProhibitedWord ? { prohibitedWord: true } : null;
    };
  }

  onSubmit(): void {
    this.submissionError = '';
    if (this.testimonialForm.valid) {

      if (this.containsProhibitedWords(this.testimonialForm.value)) {
        this.submissionError = 'Your submission contains inappropriate content.';
        return;
      }

      const newTestimonial: Testimonial = {
        id: this.testimonials.length + 1,
        ...this.testimonialForm.value
      };
      this.testimonials.push(newTestimonial);
      this.testimonialForm.reset({ rating: 5 });
    } else {
      this.submissionError = 'Please fill out all fields correctly.';
    }
  }

  containsProhibitedWords(formValue: any): boolean {
    const allText = `${formValue.name} ${formValue.role} ${formValue.content}`.toLowerCase();
    return this.prohibitedWords.some(word => allText.includes(word.toLowerCase()));
  }
}