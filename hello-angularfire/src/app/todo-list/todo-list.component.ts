import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(public todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoListService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todoList = todos;
    });
  }
}
