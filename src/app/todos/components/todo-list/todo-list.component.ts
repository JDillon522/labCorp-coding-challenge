import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from '../../interfaces';
import { editingATodo, filteredTodos } from '../../state/todo.selectors';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent {
  public todos$: Observable<ITodo[]> = this.store.select(filteredTodos);
  public editingTodo$: Observable<number> = this.store.select(editingATodo);

  constructor(
    private store: Store
  ) {}
}
