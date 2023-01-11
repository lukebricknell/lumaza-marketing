"use strict";

let n = 1;

for (let i = 1; i < 1000; i++) {
  setTimeout(function timer() {
    if (i % 9 == 1) {
      document.querySelector(`#adj9`).style.color = "#FFF";
    }

    console.log(n);
    document.querySelector(`#adj${n}`).style.color = "rgb(255, 102, 102)";

    if (
      n > 1 &&
      document.querySelector(`#adj${n - 1}`).style.color == "rgb(255, 102, 102)"
    ) {
      document.querySelector(`#adj${n - 1}`).style.color = "#FFF";
    }

    if (n == 9) {
      n = 0;
    }

    n++;
  }, i * 999);
}
