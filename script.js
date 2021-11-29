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

let div = document.getElementById("div");


var btnDelete = document.createElement("button");
btnDelete.innerText ="Radera";
btnDelete.setAttribute("id","btnDelete");




btn.addEventListener("click",function(){
    //console.log(input.value);

    let inputText = input.value;

    localStorage.setItem("username",inputText);

        removeItem()
            if("userName" && inputText){
                
                addAction()
            }

});


    function addAction(){
        
        root.innerHTML = "";
        let text = document.createElement("h2");
        text.setAttribute("id","text");
        text.innerText = input.value;
        div.appendChild(text);
        div.append(btnDelete);
        btn.setAttribute("id","btn");
        input.setAttribute("id","input")

        
    }




function removeItem(){
            btnDelete.addEventListener("click",function(){
            //console.log(input.value);
            
            div.innerHTML ="";
            btn.setAttribute("class","btn");
            input.setAttribute("class","input");
            
            root.append(btn);
            
            root.append(input);


            localStorage.clear();
    })
}