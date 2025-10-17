let count = 0;
const counter = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
    count++;
    counter.innerText = count;
});

document.getElementById("decrease").addEventListener("click", () => {
        count--;
        counter.innerText = count;
      });
document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    counter.innerText = count;
});