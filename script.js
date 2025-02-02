document.getElementById("btn").addEventListener("click", ()=>{
let inputValue =document.getElementById("textInput").value;
const para=document.querySelector(".para")
if (inputValue==="") {
    para.classList.toggle("paraAlert")
    alert("Veuillez  cliquer sur ajouter une tache puis sur saisir la tache a effectuer  !");
    return;
}

let containerLabelInputCheckbox=document.createElement("div")
containerLabelInputCheckbox.classList.add("containerLabelInputCheckbox")

let checkbox=document.createElement("input");
checkbox.type="checkbox";

let label=document.createElement("label");
label.textContent=inputValue;
containerLabelInputCheckbox.appendChild(checkbox);
containerLabelInputCheckbox.appendChild(label);


document.getElementById("container-checkbox").appendChild(containerLabelInputCheckbox);

document.getElementById("textInput").value="";
const deleteTache=document.querySelector(".delete");

deleteTache.addEventListener("click",()=>{
    
    if(checkbox.checked){
        checkbox.style.display="none";
        label.style.display="none";
    }
    
})

// const allCheckbox=Array.from(containerLabelInputCheckbox.querySelector("label"));
// allCheckbox.sort((a, b)=> a.textContent.localeCompare(b.textContent));

// allCheckbox.forEach((checkbox)=>{
//     containerLabelInputCheckbox.appendChild(checkbox);
//     console.log(allCheckbox)
// })


// const trier=document.querySelector(".trier");
// let table=[...allCheckbox].textContent
// console.log(table)
})