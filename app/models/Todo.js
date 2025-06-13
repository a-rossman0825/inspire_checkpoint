

export class Todo {
  constructor(data) {

    this.id = data.id;
    this.description = data.description;
    this.completed = data.completed;
  }

  get todoListHTMLTemplate() {
    return `
      <div class="text-start d-flex justify-content-around align-content-center">
        <div class="col-1 form-check">
          <input class="form-check-input" type="checkbox" value="${this.completed}" onclick="" id="completed"/>
        </div>
        <p class="col-9 small text-light">${this.description}</p>
        <p class="col-1 text-start"><i class="fs-5 mdi mdi-trash-can text-light" onclick=""></i></p>
      </div>
    `
  }
}