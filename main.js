function add(){
    var result1=
    Number(document.getElementById("firstno").value)+
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result1;
}
function subtract(){
    var result1=
    Number(document.getElementById("firstno").value)-
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result1;
}
function multiply(){
    var result1=
    Number(document.getElementById("firstno").value)*
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result1;
}
function divide(){
    var result1=
    Number(document.getElementById("firstno").value)/
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result1;
}
function clear(){
    document.getElementById("result").value="";
}



