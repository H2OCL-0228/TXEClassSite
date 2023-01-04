// 跳转函数
function openpage(num){
  let hrefList = [
    "https://thisis.host/",
    "./randomnumberbuilder.html",
    "./timers/countdown.html",
    "./timers/beijingtime.html",
    "#",
    "./showscreen.html",
    "./toupiao.html",
    "./oncalendar/index.html",
    "./onwoodfish/index.html",
    "./about.html",
  ]
  window.location.href = hrefList[num];
}

// function open(){
//   window.location.href = "https://thisis.host";
// }

//滚轮横向滚动
let mainScr = document.querySelector('#main');
mainScr.addEventListener('wheel',function(event){
  winWidth = document.documentElement.clientWidth;
  if(winWidth >= 600){
    event.preventDefault();
    mainScr.scrollLeft += event.deltaY;
  }
})