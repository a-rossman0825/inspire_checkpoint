import { Identity } from './Auth/Identity.js';
import { Todo } from './models/Todo.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Identity} */
  identity = null;

  /** @type {Todo[]} */
  todos = [];
  completedTodo = null;
}

export const AppState = createObservableProxy(new ObservableAppState())