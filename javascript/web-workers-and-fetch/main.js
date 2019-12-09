let myWorker = new Worker("worker.js");
let form = document.querySelector("form");

form.addEventListener("submit", e => {
  if (!form.checkValidity()) {
    return;
  }

  /** Rest of the code */
});
