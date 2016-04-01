export default class menu {
  constructor (selector){
    this.selector = selector;
  }
  setClick() {
    document.querySelector(this.selector).addEventListener("click", this.showMenu, false);
    document.querySelector("#menu .cose_menu").addEventListener("click", this.hideMenu, false);
  }
  showMenu () {
    document.querySelector("#menu").style.display = "block";
    document.querySelector("#lang").style.display = "block";
  }
  hideMenu() {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#lang").style.display = "none";
  }
}
