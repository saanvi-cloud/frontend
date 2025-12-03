import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo-service';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
  imports: [
    FormsModule,   // <-- Needed for ngModel
    CommonModule   // <-- Needed for *ngFor, *ngIf
  ]
})
export class TodoComponent {
  newTask: string = '';
  tasks: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.todoService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  addTask() {
    if (!this.newTask.trim()) return;

    this.todoService.addTask({ title: this.newTask }).subscribe(() => {
      this.newTask = '';
      this.loadTasks();
    });
  }

  updateTask(task: any) {
    this.todoService.updateTask(task.id, task).subscribe(() => {
      this.loadTasks();
    });
  }

  deleteTask(id: number) {
    this.todoService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
