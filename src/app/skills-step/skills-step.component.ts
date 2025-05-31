import { Component, EventEmitter, input, output } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-skills-step',
  imports: [],
  templateUrl: './skills-step.component.html',
  styleUrl: './skills-step.component.css',
})
export class SkillsStepComponent {
  skills = input.required<FormArray>();
  add = output<void>();
  remove = output<number>();
}
