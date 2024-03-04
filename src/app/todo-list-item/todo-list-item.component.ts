import { Component, inject } from '@angular/core';
import { CalculatorService } from '../Calculator.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent {
  taskTitle = 'pepe';
  isCompleted = false;
  contador = 0;
  favoriteColorControl = new FormControl('');

  UpdateTitles = () => {
    if (this.favoriteColorControl.value !== null) {
      this.taskTitle = this.favoriteColorControl.value;
    }
  };

  transformText() {
    if (this.taskTitle == 'PEPE') {
      this.taskTitle = this.taskTitle.toLowerCase();
    } else {
      this.taskTitle = this.taskTitle.toUpperCase();
    }
  }
  Sumar() {
    this.contador = this.contador + 1;
  }
  Restar() {
    this.contador = this.contador - 1;
  }

  Reset() {
    this.contador = 0;
  }

  ChangeIsCompleted = () => {
    this.isCompleted = !this.isCompleted;
  };

  private calculatorService = inject(CalculatorService);
  total = this.calculatorService.add(10, 10);
}
