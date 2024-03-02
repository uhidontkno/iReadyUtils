(()=>{
function drag(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const lessonBridge={info:{get map(){return{math:{webApiUtilExport:86570,lessonApiExport:59651,connectionExport:72409},"reading-comp":{webApiUtilExport:84579,lessonApiExport:79503,connectionExport:27139},vocab:{webApiUtilExport:65389,lessonApiExport:78276,connectionExport:87793},reading:{webApiUtilExport:84579,lessonApiExport:79503,connectionExport:27139}}},get require(){return lessonBridge.info.context[Object.keys(lessonBridge.info.context).find((e=>e.includes("webpack")))].push([[Symbol()],{},e=>e])},get subject(){try{return html5Iframe.src.split("/")[4]}catch(e){return location.href.split("/")[4]}},get context(){try{return html5Iframe.contentWindow}catch(e){return window}},get connection(){try{let e=lessonBridge.info.map[lessonBridge.info.subject];return lessonBridge.info.require(e.connectionExport).platformConnectionProvider._connection}catch(e){console.log(e),alert("Error: "+e,"red")}},get webApiUtil(){try{let e=lessonBridge.info.map[lessonBridge.info.subject];return lessonBridge.info.require(e.webApiUtilExport)}catch(e){console.log(e),alert("Error: "+e,"red")}},get api(){try{let e=lessonBridge.info.map[lessonBridge.info.subject];return lessonBridge.info.require(e.lessonApiExport).K}catch(e){console.log(e),alert("Error: "+e,"red")}},get token(){try{return lessonBridge.info.webApiUtil["math"!=lessonBridge.info.subject?"useModuleMapping":"Q"](window),window.getToken()}catch(e){console.log(e),alert("Error: "+e,"red")}}},close:()=>{try{return lessonBridge.info.connection.component.close()}catch(e){console.log(e),alert("Error: "+e,"red")}},start:()=>{try{return lessonBridge.info.connection.component.start()}catch(e){console.log(e),alert("Error: "+e,"red")}},resume:()=>{try{return lessonBridge.info.connection.component.resume()}catch(e){console.log(e),alert("Error: "+e,"red")}},pause:()=>{try{return lessonBridge.info.connection.component.pause()}catch(e){console.log(e),alert("Error: "+e,"red")}}};
let olay = document.createElement('div');
olay.className = "__minFarmer_olay"
if (document.querySelector(".__minFarmer_olay")) {return;}
olay.innerHTML = `
<div style="padding:8px; border:2px solid #0f0f1f;background:#2f2f4f; border-radius:16px;z-index:9999999999999;width:320px;position:absolute; opacity:0.9; top:16px; left:16px;"</div>
<h1 style="text-align:center;font-size:28px;">Minute Farmer</h1>
<br>
<div style="width:100%;margin:auto;display:flex;flex-direction:column;">
<button class="startFarmBtn" style="border-radius:12px; background:#36a346;padding-left:48px; padding-right:48px; padding-top:8px; padding-bottom:8px;border:1px solid #4ad45e ;font-size:16px;font-weight:500;margin:auto;margin-bottom:6px;color:white;">Start Farming</button>
<button class="stopFarmBtn" style="border-radius:12px; background:#a36736;padding-left:48px; padding-right:48px; padding-top:8px; padding-bottom:8px;border:1px solid #c47c41;font-size:16px;font-weight:500;margin:auto;color:white;">Stop Farming</button>
<br><br>
<button class="close" style="border-radius:6px; background:#2f2f2f;padding-left:24px; padding-right:24px; padding-top:3px; padding-bottom:3px;border:1px solid #c47c41;font-size:12px;font-weight:500;margin:auto;color:white;">Close</button>
</div>
</div>
`
    let started = false;
document.body.appendChild(olay);
drag(olay.querySelector('div'));
olay.querySelector('.close').addEventListener("click",()=>{olay.remove()})
olay.querySelector('.startFarmBtn').addEventListener("click",()=>{
if (started) {alert("Already started.");return}
    
    if (document.getElementById("html5-splash-card")) {
if (document.getElementById("lesson-splash-continue-button-button")) {
                    document.getElementsByClassName("css-17awnnt-Box eny8iue0")[3].remove()
                document.getElementById("lesson-splash-close-button").remove();lessonBridge.start();lessonBridge.resume();
    alert("Started!");started = true;
} else {alert("wait til the button is green")}
        
    } else {alert("Not in lesson loading page!")}
})
    olay.querySelector('.stopFarmBtn').addEventListener("click",()=>{
if (!started) {alert("Not farming.");return}
    
    if (document.getElementById("html5-splash-card")) {
if (document.getElementById("lesson-splash-continue-button-button")) {
 lessonBridge.pause();lessonBridge.close();
    alert("Stopped!");started = false;
} else {alert("Not farming.")}
        
    } else {alert("Not in lesson loading page!")}
})
})();
