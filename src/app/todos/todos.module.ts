import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CompleteAllComponent } from './components/complete-all/complete-all.component';
import { TodosListComponent } from './components/todo-list/todo-list.component';
import { TodosService } from './services/todos.service';
import { todosReducer } from './state/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffect } from './state/todo.effects';
import { TodoDb } from './services/db';

const DECLARATIONS = [
  CompleteAllComponent,
  TodosListComponent,
];

@NgModule({
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffect]),
  ],
  providers: [
    TodosService,
    TodoDb
  ],
})
export class TodosModule {}
