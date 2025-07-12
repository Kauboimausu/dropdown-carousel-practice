import "./reset.css";
import "./styles.css";
import { makeCollapsable } from "./dropdown";
import { carouselHandler } from "./carousel";


makeCollapsable("dropdown", "expandable-list");
carouselHandler.makeArrows();
carouselHandler.makeCircles();

window.addEventListener("load", () => setInterval(carouselHandler.moveRight, 5000));