let btnekleDom=document.querySelector("#liveToastBtn");
let listDOM=document.querySelector("#list");
let lidom=document.querySelectorAll("li");
let inputDOM=document.querySelector("#inputum")




for(let i=0; i < lidom.length;i++){ 
  let closeButton = document.createElement("span"); 
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close"); 
  closeButton.onclick = deleteElement;
  lidom[i].append(closeButton); 
  lidom[i].onclick = checkk; 
 
}
 localStorage.setItem("YAPILACAKLAR",JSON.stringify(listDOM.innerHTML))

btnekleDom.addEventListener("click",newElement)


function checkk(){

this.classList.toggle("checked");
}

function deleteElement()
{
  this.parentElement.remove();
}

function newElement(){
   
     if( inputDOM.value =="")
     {
      $(".error").toast("show"); 
     }
     else{

      $(".success").toast("show"); 

       let yeniDOM=document.createElement("li");
        listDOM.appendChild(yeniDOM);
        yeniDOM.innerHTML=inputDOM.value;
        document.getElementById("inputum").value = "";

         yeniDOM.onclick = checkk;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7"; 
        closeButton.classList.add("close"); 
        closeButton.onclick = deleteElement; 

        yeniDOM.append(closeButton); 
         listDOM.append(yeniDOM);
        inputElement.value = ("");
        
        
     } 


}


