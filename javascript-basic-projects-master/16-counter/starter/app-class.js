// helper functions:
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    console.log(element);
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Counter {
  constructor(element, value) {
    //   console.log(element, value);
    this.counter = element;
    this.resetBtn = element.querySelector(".reset");
    this.decreaseBtn = element.querySelector(".decrease");
    this.increaseBtn = element.querySelector(".increase");
    this.value = value;
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    // bind the functions correctly
    // Here, this points to the instance of Counter
    // But in addEventListener, any function called has its this point to the button. The context is by default the button
    this.reset = this.reset.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    this.resetBtn.addEventListener("click", this.reset);
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
