// getting HTML elements 
let input = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let li = document.querySelector("#list");



//creating a function on click to get value of input in li>ul

input.addEventListener("keydown", function(event) {
    if(event.key === 'Enter'){
  if (input.value != "") {
    var newBtn = document.createElement("li");
    li.appendChild(newBtn);
    li.style.display = "block";
    newBtn.innerHTML = `${input.value} <i id='motu'class="fa-solid fa-xmark"></i><i id='john' onclick="edit(this)" class="fa-solid fa-eraser"></i>`;
    input.value = "";
  } else {
    alert("please fill input field");
  }}
  
// a function you can delete a list with .

  newBtn.querySelector("i").addEventListener("click", () => {
    newBtn.remove();
  });
});


//creating a function you can edit with .
function edit(data) {
  let ull = data.parentElement;
  let a = prompt("Edit your value", ull.firstChild.nodeValue);
     if (a == "") {
       li.remove();
     } if (a!=null){
        ull.firstChild.nodeValue = a ;
     }
     }
    
 
     btn.addEventListener("click", ()=>{
        if (input.value != "") {
          var newBtn = document.createElement("li");
          li.appendChild(newBtn);
          li.style.display = "block";
          newBtn.innerHTML = `${input.value} <i id='motu' class="fa-solid fa-xmark "></i><i id='john' onclick="edit(this)" class="fa-solid fa-eraser "></i>`;
          input.value = "";
        } else {
          alert("please fill input field");
        }
        newBtn.querySelector("i").addEventListener("click", () => {
            newBtn.remove();
          });
        });
     
