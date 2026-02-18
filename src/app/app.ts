import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTask: string='';
  newStatus: string='todo';
  tasks: any[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({
        taskname : this.newTask,
        status: this.newStatus
      });
      this.newTask = '';
      this.newStatus = 'todo';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
