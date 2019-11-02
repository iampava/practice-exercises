(function setupHowToIIFE() {
    let howToEl = document.querySelector(".how-to");

    howToEl.addEventListener("click", (e) => {
        let target = e.target;
        if (target.tagName === "BUTTON" && target.dataset.next) {
            e.target.remove();
            
            howToEl.children[target.dataset.next].style.display = "block";
            setTimeout(() => {
                howToEl.children[target.dataset.next].classList.add("visible");
            }, 0);
            window.scrollBy(0, window.innerHeight);
        }
    });
}());