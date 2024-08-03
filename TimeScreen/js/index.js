
//高考倒计时
function show(grade,year) {

    if (grade === "1") {
        var myyear = 2027;
    } else if (grade === "2") {
        var myyear = 2026;
    } else if (grade === "3") {
        var myyear = 2025;
    } else if (grade = "useYear") {
        var myyear = year;
    };

    //获取目的日期（你可以通过更改此处数值来改变目标时间）

    var mymonth = 6;
    var myday = 7;
    var myhour = 6;
    var myminute = 0;
    var mysecond = 0;
    var time = Number(new Date(myyear, mymonth, myday, myhour, myminute, mysecond));
    // var time=new Date(myyear,mymonth,myday,myhour,myminute,mysecond).getTime();
    
    //获取当前时间
    // var nowTime = Date.now();
    var nowTime = new Date().getTime();
    
    //获取时间差
    var timediff = Math.round((time - nowTime) / 1000);
    
    //获取还剩多少天
    var day = parseInt(timediff / 3600 / 24 - 29);//此处由于不知原因导致时间误差，减去29进行纠正
    
    //获取还剩多少小时
    var hour = parseInt(timediff / 3600 % 24);
    
    //获取还剩多少分钟
    var minute = parseInt(timediff / 60 % 60);
    
    //获取还剩多少秒
    var second = timediff % 60;
    
    //输出还剩多少时间
    document.getElementById("countDown").innerText = "距离高考 : " + day + "天" + hour + "小时" + minute + "分钟" + second + "秒";
    if (timediff == 0) { return; }
}

function stTime(grade,year) {
    countDownIntervals = setInterval(function () { show(grade,year) }, 1000);
}

function closeStTime(intervals) {
    clearInterval(intervals);
}

//默认执行高三
stTime("3");


//北京时间

function time() {

    var date = new Date();

    var hours = date.getHours();          //小时 ,返回 Date 对象的小时 (0 ~ 23)
    var minutes = date.getMinutes();      //分钟 ,返回 Date 对象的分钟 (0 ~ 59)
    var seconds = date.getSeconds();      //秒 ,返回 Date 对象的秒数 (0 ~ 59)   

    //修改小时格式
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
    }

    //修改分钟格式
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }

    //修改秒格式
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }

    //获取当前系统时间  格式(yyyy-mm-dd hh:mm:ss)
    var currentFormatDate = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerText = currentFormatDate;
}

setInterval("time()","1000");

//一言

function oneSay(){
  jinrishici.load(function(result) {
    var sentence = document.querySelector("#poetry")
    sentence.innerHTML = result.data.content
  });
}

oneSay();
setInterval("oneSay()","300000");

//默认设置不开启
document.getElementById("settingsCover").style.display = "none"

function openSetting(){
    document.getElementById("settingsCover").style.display = "flex";
    setTimeout( () => {
        document.getElementById("settings").style.left = "0";
    },0);
}

function closeSetting(){
    document.getElementById("settings").style.left = "-50%";
    setTimeout( () => {
        document.getElementById("settingsCover").style.display = "none";
    },500);
}

//日期
function getCurrentDate(){
    const now = new Date(); // 创建一个表示当前日期和时间的Date对象  
    const year = now.getFullYear(); // 获取完整的年份（4位数字）  
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的，所以加1，并使用padStart确保它是两位数  
    const day = String(now.getDate()).padStart(2, '0'); // 获取当前月份的日期，并使用padStart确保它是两位数  
  
    // 将年、月、日组合成“年-月-日”的格式  
    document.getElementById("date").innerHTML = `${year}年${month}月${day}日`;
} 

getCurrentDate()