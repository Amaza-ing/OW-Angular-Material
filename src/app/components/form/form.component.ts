import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  articleForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    author: new FormControl(''),
  });

  handleSubmit() {
    console.log(this.articleForm.value);

    this.articleForm.reset();
  }
}
