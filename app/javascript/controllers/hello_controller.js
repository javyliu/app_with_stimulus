import { Controller } from "@hotwired/stimulus"

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
    //console.log(this.outputTarget);
    //console.log("connect to the hello controller ");
    if (document.queryCommandSupported('copy')) {
      this.element.classList.add(this.supportedClass)
    }

  }

  previous = ()=> {
    this.indexValue == 0 ? 0 :  this.indexValue --;
  }

  //previous() {
  //  this.indexValue == 0 ? 0 :  this.indexValue --;
  //}

  next() {
    this.indexValue == (this.slideTargets.length-1) ? 0 : this.indexValue ++;
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


  to() {
    this.dispatch("to", {detail: {content: this.outputTarget.value}});
  }

}
