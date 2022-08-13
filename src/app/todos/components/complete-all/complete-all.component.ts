import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TodosService } from '@app/todos/services/todos.service';
import { Store } from '@ngrx/store';
import { ITodo } from '../../interfaces';
import { allAreCompleted, allTodos } from '../../state/todo.selectors';
import { markAllCompleted } from '../../state/todo.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-complete-all',
  styleUrls: [
    './complete-all.component.scss',
  ],
  templateUrl: './complete-all.component.html',
})
export class CompleteAllComponent {
  public multipleTodosExist$: Observable<ITodo[]> = this.store.select(allTodos);
  public allTodosAreSelected$: Observable<boolean> = this.store.select(allAreCompleted);

  constructor (
    private store: Store
  ) {}

  toggleCompleteAll(): void {
    this.store.dispatch(markAllCompleted());
  }

}
