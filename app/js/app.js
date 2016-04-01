//main JS code here
import Menu from "./classes/menu";
import Scroll from "./classes/scroll";

(function() {
  //menu click
  let myMenu = new Menu("#menu_mobile");
  myMenu.setClick();

  //ScrollDown
  let sDown = new Scroll(".flechaScroll");
  sDown.setClickScroll(document.body, ".info", 600);
  //ScrollUp
  let sTop = new Scroll(".top div");
  sTop.setClickScroll(document.body, 0, 600);

})();
