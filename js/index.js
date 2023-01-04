function openPage(name){
    if(name === "randomNB"){
        window.open("./randomNumberBuilder.html","_blank","scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes,height=700,width=600");
    }else if(name === "BeiJingTime"){
        window.open("./timers/BeiJingTime.html","_blank","scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes,height=350,width=1000");
    }else if(name === "countDown"){
        window.open("./timers/countDown.html","_blank","scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes,height=400,width=820");
    }else if(name === "showScreen"){
        window.open("./showScreen.html","_blank","scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes,height=1200,width=1500");
    }else if(name === "about"){
        window.open("./about.html","_blank","scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes,height=850px,width=800px");
    }else if(name === "touPiao"){
        window.open("./toupiao.html","_blank","scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes,height=1200px,width=1500px");
    }
}
function notice(name){
    if(name === "timer"){
        alert("由于技术问题，我们暂时无法（没写好qwq）为您提供计时器功能，将为您跳转到 @杨尚臻 的热铁盒工具箱计时器，感谢谅解。");
    }else if(name === "notTrue"){
        alert("源代码传值不正确");
    }else if(name === "clock"){
        alert("开发：纸鹿@野生技协");
    }
}


document.getElementById("disFullScreen").style.display = "none";
//定义一个变量进行判断，默认false 非全屏状态
var exitFullscreen = false;
// 全屏事件
function handleFullScreen() {
    var element = document.documentElement;
    if (this.fullscreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
        }
    }
    document.getElementById("fullScreen").style.display = "none";
    document.getElementById("disFullScreen").style.display = "flex";
}

function exitFullscreen() {    
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

//用来修复↑这个函数的不明原因bug的补丁函数
function fixerEFS(){
     document.getElementById("disFullScreen").style.display = "none";
    document.getElementById("fullScreen").style.display = "flex";
}

document.getElementById("alertBox").style.height = "0px";
document.getElementById("alertBox").style.top = "-100px";
document.getElementById("modalButtonClose").style.display = "none";
document.getElementById("modalAlertHeader").style.display = "none";
document.getElementById("modalAlertMain").style.display = "none";
function alertByModal(temp){
    document.getElementById("alertBox").style.height = "50%";
    document.getElementById("alertBox").style.top = "0px";
    document.getElementById("modalButtonClose").style.display = "flex";
    document.getElementById("modalAlertHeader").style.display = "flex";
    document.getElementById("modalAlertMain").style.display = "flex";
    if(temp === "Qqs"){
        document.getElementById("modalAlertHeader").innerHTML = "联系我们";
        document.getElementById("modalAlertMain").innerHTML = "开发者：TengKong@野生技协<br>作者QQ：2219655314<br>野生技协群：894656456<br>感谢您的支持";
    }else if(temp === "welcome"){
        document.getElementById("modalAlertHeader").innerHTML = "欢迎,焕然一新！";
        document.getElementById("modalAlertMain").innerHTML = "欢迎您使用Hclass！<br>当前版本：正式版v1.2<br>ps：更新内容可前往“关于与日志”查看<br>感谢您的支持，祝您使用愉快！"
    }
}

function closeModal(){
    document.getElementById("alertBox").style.height = "0px";
    document.getElementById("alertBox").style.top = "-100px";
    document.getElementById("modalButtonClose").style.display = "none";
    document.getElementById("modalAlertHeader").style.display = "none";
    document.getElementById("modalAlertMain").style.display = "none";
}

function grayScale(){
    let a = new Date();
    let month = a.getMonth() + 1;
    let day = a.getDate();
    if( month === 12 && day === 13){
        document.body.style.filter = "grayscale(100%)";
        document.getElementById("header").innerHTML = "勿忘国耻，砥砺前行";
    }else if( month === 4 && day === 4){
        document.body.style.filter = "grayscale(100%)";
        document.getElementById("header").innerHTML = "致敬伟大的抗疫者";
    }
}
