let root = document.getElementById("root");

let div1 = document.getElementById("div1");

var input = document.createElement("input");
input.placeholder = "skriv nåt";
input.setAttribute("id","input");
div1.append(input);

var btn = document.createElement("button");
btn.innerText="lägg till";
btn.setAttribute("id","btn");
div1.append(btn);

var btnDel = document.createElement("button");
btnDel.innerText="Radera";
btnDel.setAttribute("id","btnDel");


let div2 = document.getElementById("div2");

btn.addEventListener("click",function(){
    inputText = input.value;
    console.log(inputText);
    localStorage.setItem("username",inputText);
    if("username" && inputText){
        addItem()
    }
    
});

addItem();
function addItem(){
    let text = document.createElement("h2");
    text.setAttribute("id","text");
    text.innerText = localStorage.getItem("username");
    div2.append(text);
    div2.append(btnDel);
    
    storeItem()
}
//tar bort
btnDel.addEventListener("click",function(){
    localStorage.clear();
    div2.innerHTML="";
    
    div1.append(input);
    input.placeholder = "skriv nåt";
    div1.append(btn);
    btn.innerText="lägg till";
})


function storeItem(){
    localStorage.getItem("username");
    console.log(localStorage.getItem("username"));
}
