//刚开始不显示大界面
document.getElementById("mainBox").style.display = "none";
document.getElementById("mainBox2").style.display = "none";

//大界面的切换
function changeMain(toolsType){
    document.getElementById("mainBox").style.display = "flex";
    document.getElementById("mainBox2").style.display = "flex";
    document.getElementById("backPicture").style.display = "none";
    if (toolsType === 0){

        document.getElementById("main").style.transform = "translateY(0%)";
        document.getElementById("mainBox").style.visibility = "visible";
        setTimeout(function(){
            document.getElementById("mainBox2").style.visibility = "hidden";
        },300)

    } else if (toolsType === 1){
        document.getElementById("main").style.transform = "translateY(-50%)";
        document.getElementById("mainBox2").style.visibility = "visible";
        setTimeout(function(){
            document.getElementById("mainBox").style.visibility = "hidden";
        },300)
    }
}


//按钮颜色改变

let sideButtons = document.getElementsByClassName("sideButton");

function changeSideButtonColor(numbers){

    sideButtons[numbers].style.backgroundColor = "rgb(65, 174, 60)";
    sideButtons[numbers].style.color = "white";

    for( i = 0 ; i < sideButtons.length ; i ++){
        if ( i !== numbers){
            sideButtons[i].style.backgroundColor = "rgb(243, 243, 243)";
            sideButtons[i].style.color = "black";
        }
    }
}

//亲本那里的按钮

let mdButtons = document.getElementsByClassName("mdButton");
function mdButtonColor(numbers){

    mdButtons[numbers].style.backgroundColor = "rgb(65, 174, 60)";
    mdButtons[numbers].style.color = "white";

    for( i = 0 ; i < mdButtons.length ; i ++){
        if ( i !== numbers){
            mdButtons[i].style.backgroundColor = "rgba(243, 243, 243,0)";
            mdButtons[i].style.color = "rgb(65, 174, 60)";
        }
    }
}



let mdButtons2 = document.getElementsByClassName("mdButton2");

function mdButtonColor2(numbers){
    
    mdButtons2[numbers].style.backgroundColor = "rgb(65, 174, 60)";
    mdButtons2[numbers].style.color = "white";

    for( i = 0 ; i < mdButtons.length ; i ++){
        if ( i !== numbers){
            mdButtons2[i].style.backgroundColor = "rgba(243, 243, 243,0)";
            mdButtons2[i].style.color = "rgb(65, 174, 60)";
        }
    }
}