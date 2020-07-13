import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;

  constructor(public fs: AngularFirestore) {
    this.todos = this.fs.collection('todos').valueChanges();
  }

  getTodos() {
    return this.todos;
  }
}
