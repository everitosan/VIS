export default class Scroll {
  constructor(element) {
    this.element = element;
  }

  setClickScroll(element, to, duration) {
    this.toElement = element;
    this.duration = duration;
    this.to = to;

    let clickeableElement = document.querySelector(this.element);

    if(clickeableElement!== null) {

      if (typeof this.to  === "string") {
        let toElement = document.querySelector(to);
        if(toElement!== null) {
          this.to = toElement.offsetTop;
        }
        else {
          return false;
        }
      }

      clickeableElement.addEventListener("click", function()  {
        this.tempDuration = this.duration;
        this.scroll();
      }.bind(this), false);
    }
  }

  scroll() {
    setTimeout(this.stepScroll.bind(this), 10);
  }

  stepScroll() {
    let duration = this.tempDuration;
    let to = this.to;
    let element = this.toElement;

    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    this.tempDuration = duration - 10;
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    this.scroll();

  }
}
