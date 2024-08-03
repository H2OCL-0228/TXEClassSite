//背景蒙版透明度
let bgAlpha = 0.3;

document.getElementById("bgAlpha").value = bgAlpha;

function changeBgAlpha () {
    let newAlpha = document.getElementById("bgAlpha").value;
    document.documentElement.style.setProperty('--coverAlpha', newAlpha);
    bgAlpha = newAlpha;
    document.getElementById("bgAlpha").value = bgAlpha;
}

//倒计时年份
let examYear = 2025;
document.querySelector("#examYear").value = examYear;

function changeExamYear(){
    let newYear = Number(document.querySelector("#examYear").value);
    console.log(newYear);
    closeStTime(countDownIntervals);
    stTime("useYear" , newYear);
    examYear = newYear;
    document.querySelector("#examYear").value = examYear;
}

//板块开关

let openedPart = [ 1 , 1 , 1 ];

function partOpen( which ){

    let partIds = ["countDown","timeAndDate","poetry"];
    if ( openedPart[which] === 1 ){
        document.getElementById(partIds[which]).style.display = "none";
        openedPart[which] = 0;
    } else if ( openedPart[which] === 0 ){
        document.getElementById(partIds[which]).style.display = "flex";
        openedPart[which] = 1;
    }

}

//背景
function setBingBg(){
    clearInterval(bg.interval);
    document.body.style.backgroundImage = "url(https://bing.shangzhenyang.com/api/1080p)";
} 

function setYiJuan(){
    clearInterval(bg.interval);
    bg();
}

