
//////////////////////////////////////////////////////////////
function onCreate() {
  ShowToast();
}
//▬▬▬▬▬▬▬▬▬▬
     // TOAST
//▬▬▬▬▬▬▬▬▬▬
function ShowToast() {
  var x = document.getElementById("Toast");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3900);
}
//▬▬▬▬▬▬▬▬▬▬
     // FPS WEBS
//▬▬▬▬▬▬▬▬▬▬
 var fps = document.getElementById("fps");

var startTime = Date.now();

var frame = 0;

function tick() {

  var time = Date.now();

  frame++;

  if (time - startTime > 1000) {

      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);

      startTime = time;

      frame = 0;

  }  window.requestAnimationFrame(tick);

}

tick();

//▬▬▬▬▬▬▬▬▬▬
     // LINK
//▬▬▬▬▬▬▬▬▬▬

function Youtube() {
  setTimeout(function() {
    window.open('https://www.youtube.com/@vmlvmlvml', 'ultimate')},
  100);
}
function Facebook() {
  setTimeout(function() {
    window.open('https://www.facebook.com/100063855025744', 'ultimate')},
  100);
}
function Discord() {
  setTimeout(function() {
    window.open('https://dsc.bio/Vml2004', 'ultimate')},
  100);
}
function Telegram() {
  setTimeout(function() {
    window.open('https://t.me/Vmlvml', 'ultimate')},
  100);
}

function DarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
//▬▬▬▬▬▬▬▬▬▬
   // HOA ANH DAO
//▬▬▬▬▬▬▬▬▬▬





//////////////////////////////////////////////////////////////
