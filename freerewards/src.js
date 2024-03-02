/*
 * Name:    iReady Free Rewards
 * Author:  rare1k
 * License: GPL-3.0
*/

function Container() {
    try {
    if (document.querySelector('._NotReady_RewardsOverlay')) {return document.querySelector('._NotReady_RewardsOverlay')}
    } catch {}
    try {
    var gamesBox = document.querySelector('.css-1mcqq32-Layout').parentElement;
    if (gamesBox == null) {alert('Not on Rewards page');return -1;}
    } catch {alert('Not on Rewards page');return -1;}
    gamesBox.innerHTML = `<div class="node_modules--cainc-cauliflower-src-components-layout-___Layout__layout-grid css-1mcqq32-Layout evuck0s0 _NotReady_RewardsOverlay" style="grid-template-columns: 1fr 1fr 1fr; position:absolute;z-index:999999999;">
</div>${gamesBox.innerHTML}`
    gOverlay = document.querySelector("._NotReady_RewardsOverlay");
    console.log(gamesBox, gOverlay)
    return gOverlay
}

function RemovePrice() {
 // Cosmetic
    document.querySelectorAll(".css-9fpcke-Coins.e506b523").forEach(ele => {ele.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0`})
}

function HandleOnClick(gOverlay) {
    if (!gOverlay) {throw new Error("No proper gOverlay was passed.")}
 let begooped = gOverlay.querySelector(".begooped")
   let catStacker = gOverlay.querySelector(".catStacker")
    let pathSpinners = gOverlay.querySelector(".pathSpinners")
    let galaxySprint = gOverlay.querySelector(".galaxySprint")
    let wizardPinball = gOverlay.querySelector(".wizardPinball")
    let digSite = gOverlay.querySelector(".digSite")
    if (!begooped || !catStacker || !pathSpinners || !galaxySprint || !wizardPinball || !digSite) {throw new Error("Game overlays were not initalized.")}
    begooped.addEventListener("click",() => {window.open("https://cdn.i-ready.com/instruction/game-begooped/1.3.x/2/", '_blank');})
    catStacker.addEventListener("click",() => {window.open("https://cdn.i-ready.com/instruction/game-catstacker/1.6.x/2/", '_blank');})
    pathSpinners.addEventListener("click",() => {window.open("https://cdn.i-ready.com/instruction/game-hpr/1.4.x/2/", '_blank');})
    galaxySprint.addEventListener("click",() => {window.open("https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-lanerunner/", '_blank');})
    wizardPinball.addEventListener("click",() => {window.open("https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-bubbles/", '_blank');})
    digSite.addEventListener("click",() => {window.open("https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-minedigger/", '_blank');})
}

gOverlay = Container()
if (gOverlay != -1 ) {
RemovePrice();
let w = document.querySelector("#BeGooped_card").offsetWidth
let h = document.querySelector("#BeGooped_card").offsetHeight
gOverlay.innerHTML = `<div style="cursor:pointer;width:${w}px;height:${h}px" class="itm begooped"></div><div style="cursor:pointer;width:${w}px;height:${h}px" class="itm catStacker"></div><div style="cursor:pointer;width:${w}px;height:${h}px" class="itm pathSpinners"></div><div style="cursor:pointer;width:${w}px;height:${h}px" class="itm galaxySprint"></div><div style="cursor:pointer;width:${w}px;height:${h}px" class="itm wizardPinball"></div><div style="cursor:pointer;width:${w}px;height:${h}px" class="itm digSite"></div><span style="color:white;font-size:20px; padding-left:16px;padding-right:16px; padding-top:6px;padding-bottom:6px;border-radius:99999px;background:rgba(0,0,0,0.75)">Free Rewards: <b style="color:mediumseagreen">ON</b></span>`
HandleOnClick(gOverlay) }
