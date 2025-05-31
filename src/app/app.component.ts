import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiStepFormComponent } from "./multi-step-form/multi-step-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MultiStepFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-step-form';
}
