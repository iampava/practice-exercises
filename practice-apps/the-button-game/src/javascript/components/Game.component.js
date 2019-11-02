import AppConfig from "../App.config.js";

function GameComponent(parent) {
    let wrapperEl = document.createElement("div");
    wrapperEl.classList.add("game-area");

    let buttonEl = document.createElement("button");
    buttonEl.setAttribute("disabled", "true");
    buttonEl.innerText = "Click me!";

    wrapperEl.appendChild(buttonEl);
    parent.appendChild(wrapperEl);

    buttonEl.addEventListener("click", (event) => {
        window.postMessage({
            type: AppConfig.EVENTS.ON_CLICK,
            payload: null
        });
    });

    handleIncomingEvents();

    function handleIncomingEvents() {
        window.addEventListener("message", (event) => {
            switch (event.data.type) {
                case AppConfig.EVENTS.ON_PLAY:
                    buttonEl.removeAttribute("disabled");
                    break;
                case AppConfig.EVENTS.ON_PAUSE:
                case AppConfig.EVENTS.GAME_OVER:
                    buttonEl.setAttribute("disabled", "true");
                    break;
                case AppConfig.EVENTS.ON_CLICK:
                    buttonEl.style.left = `${Math.random() * 90}%`;
                    buttonEl.style.top = `${Math.random() * 90}%`;
                    break;
                default:
                    break;
            }
        });
    }
}

export default GameComponent;