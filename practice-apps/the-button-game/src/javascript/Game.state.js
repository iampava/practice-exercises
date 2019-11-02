import AppConfig from "./App.config.js";

(function GameState() {
    let clicks = 0;
    let timeLeft = AppConfig.TOTAL_TIME;
    let intervalId;

    window.addEventListener("message", (event) => {
        switch (event.data.type) {
            case AppConfig.EVENTS.ON_CLICK:
                clicks++;
                broadcastState();

                if(clicks === AppConfig.NR_OF_CLICKS) {
                    clearInterval(intervalId);
                    alert("Heeey, you won!");

                    window.postMessage({
                        type: AppConfig.EVENTS.GAME_OVER,
                        payload: null
                    });
                }
                break;
            case AppConfig.EVENTS.ON_PLAY:
                intervalId = setInterval(() => {
                    timeLeft--;
                    broadcastState();

                    if (timeLeft === 0) {
                        window.postMessage({
                            type: AppConfig.EVENTS.GAME_OVER,
                            payload: null
                        });
                        clearInterval(intervalId);

                        alert("You lost!");
                    }
                }, 1000);
                break;
            case AppConfig.EVENTS.ON_PAUSE:
                clearInterval(intervalId);
                break;
            default:
                break;
        }
    });

    function broadcastState() {
        window.postMessage({
            type: AppConfig.EVENTS.STATE_CHANGED,
            payload: {
                clicks,
                timeLeft
            }
        });
    }
}())