import { Identity } from './Auth/Identity.js';
import { Todo } from './models/Todo.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  
  // NOTE base vars 
  /** @type {Identity} */
  identity = null;

  completedTodo = null;

  greetingIndex = 0;

  temp = 0;

  hours = 0;
  minutes = 0;

  // NOTE base Arrs/models 
  /** @type {Todo[]} */
  todos = [];

  greetingsArr = ['Bonjour', 'Hola', 'GutenTag', 'Ciao', 'Hey There', 'Ni Hao', 'Konnichiwa', 'Marhaban'];



  // NOTE settings vars 
  tempSet = 'c';

  clockSet = 'standard';



}

export const AppState = createObservableProxy(new ObservableAppState())