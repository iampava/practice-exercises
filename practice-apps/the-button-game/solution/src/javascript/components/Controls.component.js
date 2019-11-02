import AppConfig from "../App.config.js";

function ControlsComponent(parent) {
    let cachedEl = {};

    let wrapperEl = document.createElement("div");
    wrapperEl.classList.add("controls");

    wrapperEl.innerHTML = `
        <div class="progress">0/5 clicked</div>
        <div class="controls__button-wrapper">
            <button data-type="play">Play </button>
            <button disabled data-type="pause">Pause </button>
        </div>
        <p class="controls__timer">00:${AppConfig.TOTAL_TIME}</p>
    `;

    parent.appendChild(wrapperEl);

    wrapperEl.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            switch (event.target.dataset.type) {
                case "play":
                    window.postMessage({
                        type: AppConfig.EVENTS.ON_PLAY,
                        payload: null
                    })
                    break;
                case "pause":
                    window.postMessage({
                        type: AppConfig.EVENTS.ON_PAUSE,
                        payload: null
                    })
                    break;
                default:
                    break;
            }
        }
    });

    cacheDomNodes();
    handleIncomingEvents();


    function cacheDomNodes() {
        cachedEl.play = wrapperEl.querySelector("button[data-type='play']");
        cachedEl.pause = wrapperEl.querySelector("button[data-type='pause']");

        cachedEl.progress = wrapperEl.querySelector(".progress");
        cachedEl.timer = wrapperEl.querySelector(".controls__timer");
    }

    function handleIncomingEvents() {
        window.addEventListener("message", (event) => {
            switch (event.data.type) {
                case AppConfig.EVENTS.ON_PLAY:
                    cachedEl.play.setAttribute("disabled", "true");
                    cachedEl.pause.removeAttribute("disabled");
                    break;
                case AppConfig.EVENTS.ON_PAUSE:
                    cachedEl.play.removeAttribute("disabled");
                    cachedEl.pause.setAttribute("disabled", "true");
                    break;
                case AppConfig.EVENTS.GAME_OVER:
                    cachedEl.play.setAttribute("disabled", "true");
                    cachedEl.pause.setAttribute("disabled", "true");
                    break;
                case AppConfig.EVENTS.STATE_CHANGED:
                    cachedEl.progress.style.background = `linear-gradient(to right, var(--green) 0%, var(--green) ${event.data.payload.clicks * 100 / AppConfig.NR_OF_CLICKS }%, #fff ${event.data.payload.clicks * 100 / AppConfig.NR_OF_CLICKS}%, #fff 100%)`;
                    cachedEl.progress.innerText = `${event.data.payload.clicks}/${AppConfig.NR_OF_CLICKS} clicked`
                    cachedEl.timer.innerText = `00:${event.data.payload.timeLeft}`;

                    break;
                default:
                    break;
            }
        });
    }
}

export default ControlsComponent;