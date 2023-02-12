//时间函数
function time(){
    let clock = new Date();
    let h = String(clock.getHours());
    let m = String(clock.getMinutes());
    
    //调试
    // console.log(h,m);
    
    //控制主时钟timeBox
    let timeBox = document.getElementById("timeBox");
    if(h.length === 1){
        h = "0" + h;
    }
    if(m.length === 1){
        console.log(m.length);
        m = "0" + m;
    }
    timeBox.innerHTML = h + ":" + m;

    //显示星期
    let weekDayList = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    document.getElementById("weekDay").innerHTML = weekDayList[clock.getDay()];

    //显示日期
    let year = String(clock.getFullYear());
    let month = String(clock.getMonth() + 1);
    let date = String(clock.getDate());
    if(date.length === 1){
        date = "0" + date;
    }
    document.getElementById("month").innerHTML = year + "年" + month + "月" + date + "日";
}

//启动时间函数、吃饭计算函数
function startTime(){
    timeStart = setInterval(function(){time(),toEatTime()},1000);
}

//一言API 调用函数
function oneSay(){
    fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
        .then(data => {

        const hitokoto = document.getElementById('simplePoetry');
        hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid;
        hitokoto.innerText = data.hitokoto;

        const hitoInfo = document.getElementById("poetryInfor");
        hitoInfo.innerHTML = "一言出处:" + data.from + "&nbsp" + "一言作者:" + data.from_who;
        })
        .catch(console.error)
}

//设置一言更换计时器
function startOneSay(){
    window.oneSayInterval = setInterval(function(){oneSay()},300000);
}
// function test(){
//     clearInterval(window.oneSayInterval);
// }

//向课表选择器中填充元素
function addChooseClasslistButtons(){
    for(var i = 1;i <= 30;i ++){
        document.querySelector("#chooseMain").innerHTML = 
        document.querySelector("#chooseMain").innerHTML + 
        '<div class="chooseButton" onclick="getList(' + i + ')">高一' + i + '班课程表</div>'
    }
}

//从文件获取课程表变量
// function getList(indexs){   
//     varClassList(indexs);
// }

//课程表函数
function getList(indexs){

    varClassList(indexs);

    document.getElementById("classList").innerHTML = "";

    for(i = 0 ; i <= 8 ; i++){
        let a = document.getElementById("classList").innerHTML;
        document.getElementById("classList").innerHTML = a + "<div class = \"classes\" id = \"c" + i +"\"></div>";
    }

    // lMon = ["外","化","数","地","语","理","艺","体","班"];
    // lTue = ["数","语","理","史","外","政","数","自","自"];
    // lWed = ["语","外","数","技","理化","语","生","体","自"];
    // lThu = ["数","理","外","理","外","化","数","政","自"];
    // lFri = ["数","语","生","史","地","化","理","外","自"];
    // lSat = ["当","前","星","期","值","暂","无","课","表"];
    // lSun = ["当","前","星","期","值","暂","无","课","表"];

    cList = new Array(lSun , lMon , lTue , lWed , lThu , lFri , lSat);

    //调试
    console.log(cList);

    //按照星期抽取课程表
    let temp = new Date();
    let todayClass = cList[Number(temp.getDay())];

    //调试
    console.log(temp.getDay(),todayClass);

    //将课程表插入显示区域
    for( n = 0 ; n <= 8 ; n++ ){
        document.getElementById("c" + n).innerHTML = todayClass[n];
    }
}

//开关模态框函数
document.getElementById("modalSettings").style.display = "none";
document.getElementById("modalAbout").style.display = "none";
function openModal(id){
    document.getElementById(id).style.display = "flex";
}
function closeModal(id){
    document.getElementById(id).style.display = "none";
}

//公祭日自动切换灰色蒙版
function grayScale(){
    let a = new Date();
    let month = a.getMonth() + 1;
    let day = a.getDate();
    if( month === 12 && day === 13){
        document.body.style.filter = "grayscale(100%)";
        noticeByBoxForward("沉痛悼念在南京大屠杀中不幸离世的中国同胞");
    }else if( month === 4 && day === 4){
        document.body.style.filter = "grayscale(100%)";
        noticeByBoxForward("向伟大的抗疫工作者致敬");
    }//疫情封闭管理专项
    else{
        noticeByBoxForward("新学期，新征程，新梦想！");
    }
}

//body的onload函数们
function bodyOnload(){
    clearInterval(bg.interval);
    // getList(9);
    addChooseClasslistButtons()
    closeCover();
    startTime();
    oneSay();
    // classList();
    startOneSay();
    grayScale();
	smallScreen();
}

//关闭加载动画函数
function closeCover(){
    setTimeout(() => {
       document.getElementById("cover").style.display = "none"; 
    }, 10000);
}

//通知气泡控制函数
let temp = document.getElementById("noticeBox");
temp.style.right = "-200px";
function noticeByBoxForward(text){
    temp.style.right = "50px";
    temp.innerHTML = text; 
}

//吃饭时间计算函数
// function toEatTime(){
//     isFirst = new Date().getDay() % 2;
//     h = new Date().getHours();
//     isZero = ["06:55","12:20","18:05"];
//     isntZero = ["06:55","12:10","17:55"];
//     eatTime = document.getElementById("toEatMain");
//     if( isFirst === 0){
//         if( h > 7 && h <= 12){
//             eatTime.innerHTML = isZero[1];
//         }else if( h >= 12 && h <= 18){
//             eatTime.innerHTML = isZero[2];
//         }else{
//             eatTime.innerHTML = isZero[0];
//         }
//     }else if( isFirst != 0){
//         if( h > 7 && h <= 12){
//             eatTime.innerHTML = isntZero[1];
//         }else if( h >= 12 && h <= 18){
//             eatTime.innerHTML = isntZero[2];
//         }else{
//             eatTime.innerHTML = isntZero[0];
//         }
//     }
// }

// 联系方式
function callUs(){
    alert('如关于Oncalender您有任何的建议或反馈，请联系：\n TengKong的QQ:2517940148 \n技协官网:thisis.host');
}