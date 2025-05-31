import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-address-step',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
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
