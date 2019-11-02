import GameComponent from "./components/Game.component.js";
import ControlsComponent from "./components/Controls.component.js";
import "./Game.state.js";

let mainEl = document.querySelector("main");

ControlsComponent(mainEl);
GameComponent(mainEl)