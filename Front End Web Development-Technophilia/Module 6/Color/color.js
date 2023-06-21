var colors=["#c75b54", "#c1cbad", "#f9a704", "#57e6b8"," #548b65", "#36baf6", "#94e7fd", "#eadbcf", "#18a443", "#5ba6b7", "#dfef1c"]

function changeColor(){
    var num=Math.floor(Math.random() * (colors.length));
    document.getElementById("target").style.backgroundColor=colors[num];
} 