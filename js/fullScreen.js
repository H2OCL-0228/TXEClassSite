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
    document.getElementById("disFullScreen").style.display = "block";
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
    document.getElementById("fullScreen").style.display = "block";
}

{/* <button class="headerButton" id="fullScreen"  onclick="handleFullScreen()">
<img src="./sucai/全屏.svg" class="headerImg">
</button>
<button class="headerButton" id="disFullScreen"  onclick="fixerEFS(),exitFullscreen()">
<img src="./sucai/全屏.svg" class="headerImg">
</button> */}
{/* <button class="headerButton" id="fullScreen"  onclick="handleFullScreen()">
全屏
</button>
<button class="headerButton" id="disFullScreen"  onclick="fixerEFS(),exitFullscreen()">
退出
</button> */}