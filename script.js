console.log("hej");

var root =document.getElementById("root");


var input = document.createElement("input");
input.placeholder = "skriv nåt";
input.required = "text";
input.setAttribute("id","input");
root.append(input);

var btn = document.createElement("button");
btn.innerText = "lägg till!";
btn.setAttribute("id","btn");
root.append(btn);

btn.addEventListener("click",function(){
    console.log(input.value);
    let inputText = input.value;
    localStorage.setItem("username",inputText);
    


    addAction()


});


function addAction(){
    var div = document.createElement("div");
    root.append(div);
    btnDelete = document.createElement("button");
    btnDelete.innerText ="Radera";
    btnDelete.id="btnDelete";
    div.append(btnDelete);
    

    let text = document.createElement("h2");
    text.setAttribute("id","text");
    text.innerText = inputText;
    div.append(text);
}