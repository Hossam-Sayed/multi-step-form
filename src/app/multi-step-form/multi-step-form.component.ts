import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { AddressStepComponent } from '../address-step/address-step.component';
import { SkillsStepComponent } from '../skills-step/skills-step.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    AddressStepComponent,
    SkillsStepComponent,
  ],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css',
})
export class MultiStepFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      personalInfo: this.fb.group({
        fullName: ['', { validators: Validators.required }],
        email: ['', { validators: [Validators.required, Validators.email] }],
        dob: ['', { validators: Validators.required }],
        phone: ['', { validators: Validators.required }],
      }),
      addresses: this.fb.array([]),
      skills: this.fb.array([]),
    });

    // add one address and skill by default
    this.addAddress();
    this.addSkill();
  }

  get personalInfoGroup(): FormGroup {
    return this.form.get('personalInfo') as FormGroup;
  }

  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        id: Date.now() + Math.random(),
        street: ['', { validators: Validators.required }],
        city: ['', { validators: Validators.required }],
        zip: ['', { validators: Validators.required }],
        country: ['', { validators: Validators.required }],
      })
    );
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  addSkill() {
    this.skills.push(
      this.fb.group({
        name: ['', { validators: Validators.required }],
        years: ['', { validators: Validators.required }],
        level: ['', { validators: Validators.required }],
      })
    );
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
