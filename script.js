const add = document.getElementById("add");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

 
add.addEventListener("click", () => {
    const el = document.createElement("li");
    el.innerText = input.value;
    el.style.color = "red";
    ul.append(el);

    const compbtn = document.createElement("button");
    compbtn.innerText = "Mark as Done";
    compbtn.style.color = "white";
    compbtn.style.backgroundColor = "green";
    compbtn.style.marginLeft = "10px";
    compbtn.addEventListener("click", () => {
        el.style.textDecoration = "line-through";
        compbtn.innerText = "Completed \u2713";
        el.style.color = "green";
    })

    const delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.style.color = "white";
    delbtn.style.backgroundColor = "red";
    delbtn.style.marginLeft = "10px";
    delbtn.addEventListener("click", () => {
          el.style.display = "none";
    })


    el.appendChild(compbtn);
    el.appendChild(delbtn);
    ul.appendChild(el);
    input.value = "";
})

// Adding task on pressing ENTER
input.addEventListener("keypress" , (e) => {
    if(e.key == "Enter") {
        const el = document.createElement("li");
       el.innerText = input.value;
       el.style.color = "red";
       ul.append(el);

       const compbtn = document.createElement("button");
       compbtn.innerText = "Mark as Done";
       compbtn.style.color = "white";
       compbtn.style.backgroundColor = "green";
       compbtn.style.marginLeft = "10px";
       compbtn.addEventListener("click", () => {
          el.style.textDecoration = "line-through";
          compbtn.innerText = "Completed \u2713";
        el.style.color = "green";
       })

     const delbtn = document.createElement("button");
       delbtn.innerText = "Delete";
       delbtn.style.color = "white";
       delbtn.style.backgroundColor = "red";
       delbtn.style.marginLeft = "10px";
       delbtn.addEventListener("click", () => {
              el.style.display = "none";
       })


        el.appendChild(compbtn);
        el.appendChild(delbtn);
        ul.appendChild(el);
        input.value = "";
    }
})