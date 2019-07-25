function validate(text, event){
  
  event.preventDefault();

  nameInput = document.querySelector("[name = 'fname']");
  lnameInput = document.querySelector("[name = 'lname']");
  name = nameInput.value.toLowerCase();
  lname = lnameInput.value.toLowerCase();

  if(name === lname && name !== "" && lname !== ""){
    nameInput.classList.add("changeBgdColor");
    lnameInput.classList.add("changeBgdColor");
  }else{
    nameInput.classList.remove("changeBgdColor");
    lnameInput.classList.remove("changeBgdColor");
  }
    
}