import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormInputComponent } from '../form-input/form-input.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-address-step',
  imports: [
    ReactiveFormsModule,
    FormInputComponent,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './address-step.component.html',
  styleUrl: './address-step.component.css',
})
export class AddressStepComponent {
  addresses = input.required<FormArray>();
  add = output<void>();
  remove = output<number>();

  getAddressGroup(i: number) {
    return this.addresses().controls[i] as FormGroup;
  }
}
