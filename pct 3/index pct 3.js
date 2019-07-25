function validate(text, event){
  
  event.preventDefault();

  nameInput = document.querySelector("[name = 'fname']");
  lnameInput = document.querySelector("[name = 'lname']");
  name = nameInput.value.toLowerCase();
  lname = lnameInput.value.toLowerCase();
  

  if(name > lname){
    document.querySelector("[name = 'bgval']").value = name;
  }else{
    document.querySelector("[name = 'bgval']").value = lname;
  }

  if(name.length > lname.length){
    document.querySelector("[name = 'bgval']").value = name;
  }else{
    document.querySelector("[name = 'bgval']").value = lname;
  }
  
}

