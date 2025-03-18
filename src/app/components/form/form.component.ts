import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AsyncPipe } from '@angular/common';
import { map, Observable, of, startWith } from 'rxjs';
import { provideNativeDateAdapter } from '@angular/material/core';

export interface User {
  name: string;
}

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    AsyncPipe,
  ],
  templateUrl: './form.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './form.component.css',
})
export class FormComponent {
  articleForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    content: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required, Validators.email]),
    user: new FormControl(''),
  });

  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions: Observable<User[]> = of([]);

  ngOnInit() {
    this.filteredOptions = this.articleForm.controls['user'].valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  handleSubmit() {
    console.log(this.articleForm.value);

    this.articleForm.reset();
  }
}
