var enterButton=document.getElementById("enter");
var input=document.getElementById("userInput");
var ul=document.querySelector("ul");
var item=document.getElementsByTagName("li");

function createListElement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    function deleteListItem(){
        li.classList.add("delete");
    }

    var dBtn=document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
}

function inputLength(){
    return input.value.length;
}

function addListAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}

function addListAfterKeyPress(){
    if(inputLength()>0 && event.which===13){//ASCII code of "enter" key is 13
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
