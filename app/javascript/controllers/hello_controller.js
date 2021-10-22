// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output", "slide" ]
  static classes = [ 'supported' ]
  static values = {index: Number}

  //initialize(){
  //  this.index = 0;
  //  this.showCurrentSlide();
  //  console.log(this.indexValue);
  //  console.log(typeof this.indexValue);
  //}


  connect() {
    this.outputTarget.value = 'Hello, Stimulus!'
    console.log(this.outputTarget);
    console.log("connect to the hello controller ");
    if (document.queryCommandSupported('copy')) {
      this.element.classList.add(this.supportedClass)
      //console.log(this.copyClass);
    }

  }

  previous() {
    this.indexValue --;
  }
  next() {
    this.indexValue ++;
  }

  indexValueChanged(){
    this.showCurrentSlide();
  }

  showCurrentSlide(){
    this.slideTargets.forEach((ele, idx) => {
      ele.hidden = idx != this.indexValue;
    });
  }

  get name() {
    return  this.outputTarget.value;
  }

  greet = ()=> console.log(this.name);

  copy() {
    this.outputTarget.select();
    document.execCommand('copy');
  }
}
