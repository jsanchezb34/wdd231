const openbutton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closebutton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");


openButton1.addEventListener("click", () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Este es el mensaje numero 1";
});

openButton2.addEventListener("click", () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Este es el mensaje numero 2";
  
});

openButton3.addEventListener("click", () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Este es el mensaje numero 3";
});

closebutton.addEventListener("click", () => {
    dialogBox.close();
});