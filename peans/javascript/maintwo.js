//配置中生成父本和母本

let freeButtons = document.getElementsByClassName("freeButtons");

function addMdFree(times,nums){

    if (times === 1){
        let tempText = document.getElementById("freeDad").innerHTML;
        if (nums <= 2){
            document.getElementById("freeDad").innerHTML = freeButtons[nums].innerHTML;
        } else if (nums >= 3 && nums <= 5 && tempText.length === 2){
            document.getElementById("freeDad").innerHTML = tempText + freeButtons[nums].innerHTML;
        } else if (nums >= 3 && nums <= 5 && tempText.length === 4){
            let tText = document.getElementById("freeDad").innerHTML; //四位
            document.getElementById("freeDad").innerHTML = tText[0] + tText[1] + freeButtons[nums].innerHTML;
        }
    } else if (times === 2){

        let tempText2 = document.getElementById("freeMom").innerHTML;
        if ( nums <= 8 && nums >= 5){
            document.getElementById("freeMom").innerHTML = freeButtons[nums].innerHTML;
        } else if (nums >= 9 && nums <= 11 && tempText2.length === 2){
            document.getElementById("freeMom").innerHTML = tempText2 + freeButtons[nums].innerHTML;
        } else if (nums >= 9 && nums <= 11 && tempText2.length === 4){
            let tText2 = document.getElementById("freeMom").innerHTML; //四位
            document.getElementById("freeMom").innerHTML = tText2[0] + tText2[1] + freeButtons[nums].innerHTML;
        }else {
            return;
        }
    }
}


function freeCombinationLaw() {

    //初始化详细信息窗口
    document.getElementById("detailDataOut2").innerHTML = "";

    //定义父本和母本
    let mom = document.getElementById("freeMom").innerHTML;
    let dad = document.getElementById("freeDad").innerHTML;

    //定义结果result类型
    let yellowRound = 0;
    let yellowUnround = 0;
    let greenRound = 0;
    let greenUnround = 0;

    // 定义循环次数
    let numCycles = Number(document.getElementById("InputTwo").value);
    let numberOfCycles = numCycles <= 5000 ? numCycles : 5000;

    //给每一项都分类
    let combinationCategory = ["YYRR","YYRr","YyRR","YyRr","YYrr","Yyrr","yyRR","yyRr","yyrr"];
    let classificationQuantity = [0,0,0,0,0,0,0,0,0];

    //让他们产生配子
    function extract(type) {
        var intOne = Math.floor(Math.random() * 2); // 0 ~ 1
        var intTwo = Math.floor(Math.random() * 2 + 2); // 2 ~ 3
        let extracted = type[intOne] + type[intTwo];
        return extracted;
    }


    //预制详细信息
    let detailInfos;

    //分别产生配子并自由组合
    for (i = 0; i < numberOfCycles; i++) {
        let result = extract(mom) + extract(dad);

        //傻瓜式调整result显示顺序
        result = result[0] + result[2] + result[1] + result[3];//把A B 放到一块儿

        //大写A前置
        if (result[0] !== "Y") {
            result = result[1] + result[0] + result[2] + result[3];
        }

        //大写B前置
        if (result[2] !== "R") {
            result = result[0] + result[1] + result[3] + result[2];
        }

        //检查并计数
        let scoreResult;

        //是不是黄的？
        if (result.search("Y") != -1) {
            scoreResult = "1";
        } else {
            scoreResult = "0";
        }

        //是不是圆的
        if (result.search("R") != -1) {
            scoreResult += "1";
        } else {
            scoreResult += "0";
        }

        //判断并记分(比例)
        if (scoreResult === "11") {
            yellowRound += 1;
        } else if (scoreResult === "10") {
            yellowUnround += 1;
        } else if (scoreResult === "01") {
            greenRound += 1;
        } else {
            greenUnround += 1;
        }

        //给每一项都分类
        for (n = 0 ; n < combinationCategory.length ; n ++){
            if (result === combinationCategory[n]){
                classificationQuantity[n] += 1;
            }
        }

        //输出详细信息
        detailInfos = document.getElementById("detailDataOut2").innerHTML;
        document.getElementById("detailDataOut2").innerHTML += "," + result;

        console.log(scoreResult);

        console.log(result);
    }

    //产生最终比例
    let proportionalResults = yellowRound + ":" + greenRound + ":" + yellowUnround + ":" + greenUnround;

    //输出最终比例
    document.getElementById("freeOutput").innerHTML = proportionalResults;

    console.log(proportionalResults);

    //输出详细比例
    let showTypes = document.getElementsByClassName("showTypes");
    for ( i = 0 ; i < showTypes.length ; i ++ ){
        showTypes[i].innerHTML = combinationCategory[i] + "-" + classificationQuantity[i];
    }

    console.log(combinationCategory);

    console.log(classificationQuantity);

}

