//这个文件中的js内容是为了实现临时功能的临时内容，后期更新会解决此文件

//添加临时值日生
function addCleanStudent(){
    let name = prompt("添加今日值日小组,注意：只能添加一次,错了要刷新重来");
    document.getElementById("cleanStudentMain").innerHTML = name;
}

//添加临时擦黑板
function addCleanBlackboardStudent(){
    let name = prompt("添加今日临时擦黑板同学，注意：只能添加一次，要不然要刷新重来");
    document.getElementById("cleanBlackboardStudentMain").innerHTML = name;
}