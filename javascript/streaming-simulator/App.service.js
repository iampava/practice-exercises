export {
    getPermission,
    getVideoDetails
}

function getPermission(force) {
    return new Promise((resolve, reject) => {
        let decision = _yesNo();
        console.info("Getting permissions...");
        setTimeout(() => {
            if (force === true || decision) {
                console.info("Permissions granted!");
                resolve();
            } else {
                console.info("Permissions failed");
                reject({
                    reason: "Permission denied!"
                });
            }
        }, 1000);
    });
}

function getVideoDetails(force) {
    return new Promise((resolve, reject) => {
        let decision = _yesNo();
        console.info("Getting video details...");
        setTimeout(() => {
            if (force === true || decision) {
                console.info("Video details retrieved successfully!");
                resolve({
                    name: "Breaking Bad",
                    id: "breaking-bad",
                    description: "Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show originally aired on the AMC network for five seasons, from January 20, 2008 to September 29, 2013."
                });
            } else {
                console.info("Video details failed!");
                reject({
                    reason: "Network error"
                });

            }
        }, 1000);
    })
}

function _yesNo() {
    return Math.round(Math.random());
}