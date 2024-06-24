import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cloneDeep } from 'lodash';
import moment from 'moment';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm!: FormGroup;
  originalProfileData: any;

  time = moment().format(`D MMMM YYYY [at] h:mm:ss a`);

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['Tamas'],
      lastName: ['Piros'],
      email: ['tamas@cloudinary.com']
    });
    this.originalProfileData = cloneDeep(this.profileForm.value)
  }

  resetForm() {
    this.profileForm.reset(this.originalProfileData)
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Submitting', this.profileForm.value);
      this.originalProfileData = cloneDeep(this.profileForm.value)
    }
  }
}
