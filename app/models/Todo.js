import { AppState } from "../AppState.js";


export class Todo {
  constructor(data) {

    this.id = data.id;
    this.description = data.description;
    this.completed = data.completed || false;
  }

  get todoListHTMLTemp() {
    return `
      <div class="text-start d-flex justify-content-around align-content-center">
        <div class="col-1 form-check">
          <input class="form-check-input" type="checkbox" value="" onchange="app.todosController.changeBoolean('${this.id}')" ${this.completed ? 'checked' : ''}/>
        </div>
        <p class="col-9 small text-light ${this.completed ? 'text-decoration-line-through' : ''}">${this.description}</p>
        <p class="col-1 text-start" onclick="app.todosController.confirmTodoDelete('${this.id}')"><i class="fs-5 mdi mdi-trash-can text-light"></i></p>
      </div>
    `
  }

}