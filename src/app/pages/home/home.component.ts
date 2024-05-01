import { Component } from '@angular/core';
import { CommonModule, JsonPipe, NgForOf, NgIf} from "@angular/common";
import { signal } from "@angular/core";
import { TaskModel } from "./../../models/task.model";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    NgIf,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  protected signalTasks = signal<TaskModel[]> ([
    { id: Date.now(), title: 'Instalar Angular CLI', completed: false },
    { id: Date.now(), title: 'Crear Proyecto', completed: true },
    { id: Date.now(), title: 'Crear Componente', completed: false },
    { id: Date.now(), title: 'Crear Servicio', completed: false }
  ]);

  protected signalNewTaskInput = signal('');

  protected processNewTask(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    if (newTask.trim() == '') return;
    this.addNewTask(newTask);
    this.signalNewTaskInput.set('');
  }

  private addNewTask(newTaskTitle: string) {
    if (newTaskTitle.trim() == '') return;
    const newTaskObject : TaskModel = {
      id: Date.now(),
      title : newTaskTitle,
      completed: false
    }
    this.signalTasks.update((tasks) => [ newTaskObject , ...tasks ]);

  }

  protected updateTask(indexToUpdate: number) {
    this.signalTasks.update(
        (tasks) => tasks.map(
                      (task, currentIndex) =>
                        currentIndex === indexToUpdate ? { ...task, completed: !task.completed } : task
                  )
    );
  }

  protected deleteTask(indexToDelete: number) {
    this.signalTasks.update(
      (tasks) => tasks.filter(
                    (_, currentIndex) => currentIndex !== indexToDelete)
    );
  }

  protected newTaskControl = new FormControl(
    '',
    {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-Z0-9\s]+$/)
      ]
    }
  );

  protected addNewTaskControl() {
    if (this.newTaskControl.invalid) return;
    this.addNewTask(this.newTaskControl.value);
    this.newTaskControl.reset();
  }

}
