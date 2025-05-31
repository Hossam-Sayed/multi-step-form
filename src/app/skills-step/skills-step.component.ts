import { Component, input, output } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-skills-step',
  imports: [ReactiveFormsModule, MatButtonModule, FormInputComponent],
  templateUrl: './skills-step.component.html',
  styleUrl: './skills-step.component.css',
})
export class SkillsStepComponent {
  skills = input.required<FormArray>();
  add = output<void>();
  remove = output<number>();

  getSkillGroup(i: number) {
    return this.skills().controls[i] as FormGroup;
  }
}
