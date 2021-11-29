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

var btnDelete = document.createElement("button");
btnDelete.innerText ="Radera";
btnDelete.setAttribute("id","btnDelete");

btn.addEventListener("click",function(){
    console.log(input.value);
    let inputText = input.value;
    localStorage.setItem("username",inputText);
    
addAction()
removeItem()


});


function addAction(){
    

    let text = document.createElement("h2");
    text.setAttribute("id","text");
    text.innerText = input.value;
    root.append(text);
    root.append(btnDelete);
    
}


removeItem()

function removeItem(){
    btnDelete.addEventListener("click",function(){
        console.log(input.value);
    })
}