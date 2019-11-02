/** A small game I created from the boredom of having no Internet!!! */
(function noInternetGameIife(canvasId) {
    const EXPLOSIONS_INFO = {
        SIZE_INCREMENT: 2,
        MAX_SIZE: 200,
        NEW_INTERVAL: 75,
        MIN_INTERVAL: 15,
        INITIAL_SIZE: 5,
        COLOR_LIST: ['blue', 'green', 'yellow', 'black', 'grey', 'silver', 'orange', 'violet']
    };
    const PLAYER_INFO = {
        MOVE_SPEED: 25,
        SIZE: 20
    };
    const MOVEMENT = {
        '37': {
            x: -1,
            y: 0
        },
        '38': {
            x: 0,
            y: -1
        },
        '39': {
            x: 1,
            y: 0
        },
        '40': {
            x: 0,
            y: 1
        }
    };
    const SCORE = {
        INTERVAL: 20,
        INCREMENT: 123
    };

    let canvas = document.getElementById(canvasId);
    let ctx = canvas.getContext('2d');
    let frameCount = -1;
    let score = 0;
    let keyboardEvents = [];
    let explosionsList = [];

    let rect = {
        x: 250,
        y: 250,
        width: PLAYER_INFO.SIZE,
        height: PLAYER_INFO.SIZE
    };

    //Draw player
    fillRect(rect, ctx);

    frame();
    document.addEventListener('keydown', onKeyDown);

    /** UTILITY FUNCTIONS */
    function frame() {
        //Check for Game Over
        if (isGameOver(rect, explosionsList, canvas)) {
            document.removeEventListener('keydown', onKeyDown);
            alert('Game over!!!');
            return;
        }

        //Increase the interval the longer you play
        frameCount++;
        if (frameCount > 1000) {
            EXPLOSIONS_INFO.NEW_INTERVAL -= (frameCount % 1000) / 10;
            if (EXPLOSIONS_INFO.NEW_INTERVAL < EXPLOSIONS_INFO.MIN_INTERVAL) {
                EXPLOSIONS_INFO.NEW_INTERVAL = EXPLOSIONS_INFO.MIN_INTERVAL;
            }
        }
        //Handle existing explosions
        let tempExplosionList = [];
        explosionsList.forEach(explosion => {
            if (explosion.width < EXPLOSIONS_INFO.MAX_SIZE) {
                if (frameCount - explosion.createdFrame < 150) {
                    if (frameCount % 20 === 0) {
                        growExplosion(explosion, ctx);
                    }
                } else {
                    growExplosion(explosion, ctx);
                }
                tempExplosionList.push(explosion);
            } else {
                strokeRect(explosion, ctx, 'white');
            }
        });
        explosionsList = tempExplosionList;

        //Do we add a new explosion?
        if (frameCount % EXPLOSIONS_INFO.NEW_INTERVAL === 0) {
            let explosionRect = Object.assign(
                {},
                getRandomCoordinates(canvas.width, canvas.height),
                {
                    width: EXPLOSIONS_INFO.INITIAL_SIZE,
                    height: EXPLOSIONS_INFO.INITIAL_SIZE
                },
                { color: getExplosionColor() },
                { createdFrame: frameCount }
            );
            strokeRect(explosionRect, ctx, explosionRect.color);
            explosionsList.push(explosionRect);
        }

        //Handle player move
        let moveDirection = keyboardEvents.shift();
        if (moveDirection) {
            moveRect(rect, ctx, moveDirection);
        }

        //Update Score
        if (frameCount % SCORE.INTERVAL === 0) {
            score += SCORE.INCREMENT;
            strokeText(score, ctx);
        }
        window.requestAnimationFrame(frame);
    }

    function onKeyDown(e) {
        if (37 <= e.keyCode && e.keyCode <= 40) {
            //arrow keyws
            keyboardEvents.push(e.keyCode);
        }
    }
    function moveRect(rect, ctx, moveDirection) {
        fillRect(rect, ctx, 'white');
        rect.x += PLAYER_INFO.MOVE_SPEED * MOVEMENT[moveDirection].x;
        rect.y += PLAYER_INFO.MOVE_SPEED * MOVEMENT[moveDirection].y;
        fillRect(rect, ctx);
    }

    function growExplosion(rect, ctx, increment = EXPLOSIONS_INFO.SIZE_INCREMENT) {
        strokeRect(rect, ctx, 'white');
        rect.x -= increment / 2;
        rect.y -= increment / 2;
        rect.width += increment;
        rect.height += increment;
        strokeRect(rect, ctx, rect.color);
    }

    function isGameOver(player, explosions, canvas) {
        //Is the player outside of bounding-range
        if (player.x < 0 || player.x > canvas.width || player.y < 0 || player.y > canvas.height) {
            return true;
        }

        //Is the player hit by an explosion?
        return explosionsList.some(explosion => {
            if (explosions.width < player.width) {
                return checkRectsOverlap(explosion, player);
            } else {
                return checkRectsOverlap(player, explosion);
            }
        });
    }

    function getRandomCoordinates(maxWidth, maxHeight) {
        return {
            x: Math.floor(Math.random() * maxWidth),
            y: Math.floor(Math.random() * maxHeight)
        };
    }

    function getExplosionColor() {
        return EXPLOSIONS_INFO.COLOR_LIST[Math.floor(Math.random() * EXPLOSIONS_INFO.COLOR_LIST.length)];
    }

    function checkRectsOverlap(smallRect, bigRect) {
        return (
            checkPointInsideRect({ x: smallRect.x, y: smallRect.y }, bigRect) ||
            checkPointInsideRect({ x: smallRect.x + smallRect.width, y: smallRect.y }, bigRect) ||
            checkPointInsideRect({ x: smallRect.x, y: smallRect.y + smallRect.height }, bigRect) ||
            checkPointInsideRect({ x: smallRect.x + smallRect.width, y: smallRect.y + smallRect.height }, bigRect)
        );
    }

    function checkPointInsideRect(point, rect) {
        //Point: {x, y}
        if (
            point.x >= rect.x &&
            point.x <= rect.x + rect.width &&
            point.y >= rect.y &&
            point.y <= rect.y + rect.height
        ) {
            return true;
        }
        return false;
    }

    function strokeRect(rect, ctx, color = 'red') {
        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = color;
        ctx.rect(rect.x, rect.y, rect.width, rect.height);
        ctx.stroke();
    }

    function fillRect(rect, ctx, color = 'red') {
        ctx.beginPath();
        ctx.lineWidth = '6';
        ctx.fillStyle = color;
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        ctx.stroke();
    }
    function strokeText(text, ctx, color = 'black') {
        ctx.beginPath();
        ctx.lineWidth = '16';
        ctx.font = '50px sans-serif';
        ctx.fillStyle = 'white';
        ctx.fillRect(ctx.canvas.width - 120, 0, 120, 60);
        ctx.fillStyle = color;
        ctx.fillText(score.toString(), ctx.canvas.width - 120, 60);

        ctx.stroke();
    }
})('offline-game');
