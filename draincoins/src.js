/*
 * Name:    iReady Coin Drainer
 * Author:  rare1k
 * License: GPL-3.0
*/
var clicked = 0;
document.querySelector(".css-1klf3b1-ButtonWrapper.eakx3700").innerHTML =
  `<button class="btn btn-primary draincoins" style="font-size:12px;position:absolute;background:#2f2f6f;left:75%;top:8px;" >Drain Coins</button>`;

document.querySelector(".draincoins").addEventListener("click", () => {
  if (clicked == 0) {
    document.querySelector(".draincoins").style.background = "darkred";
    document.querySelector(".draincoins").innerText = "Click again...";
    clicked = 1;
  } else if (clicked == 1) {
    document.querySelector(".draincoins").disabled = true;
    document.querySelector(".draincoins").style.background = "red";
    document.querySelector(".draincoins").innerText = "Draining!";
    document.querySelector("#coin-amount").innerText = "0";
    for (let _x00 = 0; _x00 < 128; _x00++) {
      fetch("https://login.i-ready.com/student-reward/student/credits/spend", {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json;charset=UTF-8",
          "dashboard-type": "SD",
          "dashboard-version": "",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
        },
        referrer: "https://login.i-ready.com/student/dashboard/home",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: '{"fieldtripId":"202"}',
        method: "POST",
        mode: "cors",
        credentials: "include",
      });
    }
  }
});
