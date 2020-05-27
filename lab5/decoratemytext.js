
function hiAlert() {
    alert("Hello, world!");

}

function changestyle() {
    "use strict";
    setInterval(function () {
        var textbox = document.getElementById("textid");
        var fontSize = textbox.style.fontSize = "24pt";

        var newFontSize = parseInt(fontSize) + 2 + "pt";
        textbox.style.fontSize = newFontSize;

    }, 500);
}


function checkbox() {

    if (document.getElementById("checkbox").checked) {
        document.getElementById("textid").style.fontWeight = "bold";
        document.getElementById("textid").style.color = "green";
        document.getElementById("textid").style.textDecoration = "underline";
        // document.getElementById("textid").
        // setAttribute("style", "fontWeight: bold; color: green; textDecoration: underline;");
    }
    else {
        document.getElementById("textid").style.fontWeight = "normal";
        document.getElementById("textid").style.color = "black";
        document.getElementById("textid").style.textDecoration = "none";
    }
}
