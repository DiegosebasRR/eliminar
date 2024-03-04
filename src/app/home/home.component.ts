import { Component } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoListItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
