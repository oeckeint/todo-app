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
  protected disabled = false;
  protected imagen = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

  protected person = {
    name: 'Jesus',
    age: 27,
    avatar : 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  };

  clickHandler() {
    alert('Button clicked');
  }

  changeHandler(event: Event) {
    console.log(event);
  }

  protected keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
