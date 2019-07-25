/*function validate(text, event){

  event.preventDefault();

  var myText = document.querySelector("[name = 'fname']");
  var wordCount = document.querySelector("[name = 'count']");
  var characters = myText.value.split('');
  wordCount.innerText = characters.length;
 
}*/

function onlyDigits(text, event){
  var myText = document.querySelector("[name = 'fname']");
  var wordCount = document.querySelector("[name = 'count']");
  var characters = myText.value.split('');
  wordCount.innerText = characters.length + 1;
  var char = event.key;

  if(char>0 && char<9){
    return true;
  }else{
    event.preventDefault();
  }

}

