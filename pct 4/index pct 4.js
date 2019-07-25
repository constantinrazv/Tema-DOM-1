function validate(text, event){
  
  event.preventDefault();

  var nameInput = document.querySelector("[name = 'fname']");
  var lnameInput = document.querySelector("[name = 'lname']");
  var name = nameInput.value.toLowerCase();
  var lname = lnameInput.value.toLowerCase();
  var resultInput = document.querySelector("[name = 'bgval']");
  var result = resultInput.value;
  var val1 = Number(name);
  var val2 = Number(lname);
  
  var result = val1 + val2;
  resultInput.value = result;

}

