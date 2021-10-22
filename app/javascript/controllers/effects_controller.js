import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="effects"
export default class extends Controller {
  connect() {
  }

  flash(obj){
    console.log(obj);
  }

  resize(arg1,arg2,arg3,arg4){
    console.log(arg1,arg2,arg3,arg4);
  }
}
