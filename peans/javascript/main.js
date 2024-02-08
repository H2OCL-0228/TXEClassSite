// 定义亲本变量
let mom ;
let dad ;

// 得到分离定律选择器的数据

function getChooseOne(buttonNum){
    arrayDads = document.getElementsByClassName("mdButton");

    dad = arrayDads[buttonNum].innerHTML;
    
    console.log("d" + ":" + dad);
}

function getChooseTwo(buttonNum){
    arrayMoms = document.getElementsByClassName("mdButton2");
    mom = arrayDads[buttonNum].innerHTML;
    console.log("m" + ":" + mom);
}

function separationLaw(){
    
    
        //定义总数
        let allCount = 0;
    
        //定义隐性纯合子计数
        let implicitQuantity = 0;
    
        //循环计算
        //定义循环次数
        let times = Number(document.getElementById("InputOne").value);
        let numberOfCycles = times <= 5000 ? times : 5000 ; 

    for( i = 0 ; i < numberOfCycles ; i ++ ){

        //计算总数
        allCount += 1;
        //从亲本中随机抽取
        let intOne = Math.floor(Math.random() * 2);
        let intTwo = Math.floor(Math.random() * 2);

        let momDivision = mom[intOne];
        let dadDivision = dad[intTwo];

        //生成结果
        let result = momDivision + dadDivision;
        let tempText = document.getElementById("detailDataOut").innerHTML;
        document.getElementById("detailDataOut").innerHTML = tempText + "," + result;

        //调整显性和隐性顺序
        result = result[0] === "d" && result[1] === "D" ? "Dd" : result;

        //隐性纯合子计数
        if( momDivision === "d" && dadDivision === "d" ){
            implicitQuantity += 1;
        }

        console.log(result);
    }

    //求解显性和隐性的比例
    let proportion = (allCount - implicitQuantity) + ":" + implicitQuantity;
    document.getElementById("sepOutput").innerHTML = proportion;
    document.getElementById("sepOutput2").innerHTML = numberOfCycles;
    console.log(proportion);

}