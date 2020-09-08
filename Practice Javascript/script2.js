"use strict"; // Strict Mode
//test Array
/*var book, blen, text, i; 
book = ["chap1","chap2","chap3","chap4"];
blen = book.length;

text = "<ul>";

for (i = 0; i < blen; i++) {
    text += "<li>" + book[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;*/

//alert(document.getElementById("one").value);

/*
let printToScreen = function() {
    let screen = document.getElementById("result");
    let getClass = document.getElementsByClassName("inputNumber");
    alert(getClass.length);
    for(let i = 0; i < getClass.length; i++) {

    }
}
document.getElementById('one').onclick = printToScreen;
document.getElementById('two').onclick = printToScreen;
document.getElementById('three').onclick = printToScreen;
document.getElementById('four').onclick = printToScreen;
*/



let pick = function() {
    let chooseDay = new Date().getSeconds();
    let choosePic = document.getElementById("picture");
    //alert(chooseDay);
    if(chooseDay <= "19") {
        choosePic.innerHTML = "<img src='https://i.ytimg.com/vi/FClS4ni4zfo/maxresdefault.jpg'>"
    }else {
        if(chooseDay <= "39") {
            choosePic.innerHTML = "<img src='https://cuongdulich.com/assets/posts/1582375851-huong-dan-di-du-lich-ninh-binh-9.JPG'>"
        }else {
            choosePic.innerHTML = "<img src='https://skylightnhatrang.com/wp-content/uploads/2019/01/banner_news_3.png'>"
        }
    }
}


