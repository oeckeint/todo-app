import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  protected title = 'Home';
  protected tasks = [
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: true },
    { title: 'Task 3', completed: false }
  ];
  protected name = 'Jesus';
  protected age = 27;
}
