import { Action, createReducer, on, ActionCreator } from '@ngrx/store';
import * as TodoActions from './todo.actions';

import { FILTER_MODES } from './../constants/filter-modes';
import { ITodo } from '../interfaces/ITodo';

export interface ITodosState {
  filterMode?: FILTER_MODES;
  todos?: ITodo[];
}

export const initialState: ITodosState = {
  filterMode: 'All',
  todos: [],
};

export function todosReducer(state: ITodosState, action: Action) {
  return createReducer(
    initialState,
    on(TodoActions.addTodo, addTodo),
    on(TodoActions.removeTodo, removeTodo),
    on(TodoActions.changeFilterMode, changeFilterMode),
    on(TodoActions.clearCompleted, clearCompleted),
  )(state, action);
}

export const filterMode = (state: ITodosState) => state.filterMode;
export const todos = (state: ITodosState) => state.todos;

const addTodo = (existingState: ITodosState, { text }: TodoActions.ITodoActionCreate): ITodosState => {
  return {
    ...existingState,
    todos: [{ text, completed: false }, ...existingState.todos],
  };
}

const removeTodo = (existingState: ITodosState, { index }: TodoActions.ITodoActionIndex): ITodosState => {
  const updatedTodos = [...existingState.todos];
  updatedTodos.splice(index, 1);

  return {
    ...existingState,
    todos: updatedTodos,
  };
}

const changeFilterMode = (existingState: ITodosState, { mode }: TodoActions.ITodoActionFilter): ITodosState => {
  return {
    ...existingState,
    filterMode: mode,
  };
}

const clearCompleted = (existingState: ITodosState): ITodosState => {
  return {
    ...existingState,
    todos: [...existingState.todos.filter(todo => !todo.completed)],
  };
}
