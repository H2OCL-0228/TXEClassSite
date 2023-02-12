//控制右侧侧边栏的js文件

//定义一些方便的变量
let rS = document.getElementById("rightSideBar");
let iR = document.getElementById("inRight");
let oRSBB = document.getElementById("openRightSideBarButton");
isOpen = 0;

//开局不显示
rS.style.width = "0px";
iR.style.display = "none";

//打开侧边栏函数
function openOrCloseRight(){
    if( isOpen === 0 ){
        rS.style.width = "80px";
        iR.style.display = "flex";
        oRSBB.style.right = "80px";
        isOpen = 1;
    }else{
        rS.style.width = "0px";
        iR.style.display = "none";
        oRSBB.style.right = "0px";
        isOpen = 0;
    }
}

//布置作业
let numWork = 0;
function addHomework(){
    let hmTitle = prompt("您正在布置一项作业，请您三思而后行.如果您确定，请在这里输入作业标题");
    let hmMain = prompt("请输入您的作业正文");
    hw = document.getElementById("homeworks").innerHTML;
    document.getElementById("homeworks").innerHTML = hw + "<div class = \"homework\" id = \"" + numWork + "\"><div class = \"homeworkTitle\">" + hmTitle + "<button class=\"closeHomework\" onclick = \"closeHm(" + numWork + ")\">X</button></div><div class=\"homeworkMain\">" + hmMain + "</div></div>";
    numWork += 1;
}
function closeHm(id){
    let a = document.getElementById(id);
    a.remove();
}

//切换班级
function chooseClass(){
    document.querySelector("#chooseClassList").style.display = "flex";
}