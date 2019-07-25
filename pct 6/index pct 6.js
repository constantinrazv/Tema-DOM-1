/*function validate(text, event){

  event.preventDefault();

  var myText = document.querySelector("[name = 'fname']");
  var wordCount = document.querySelector("[name = 'count']");
  var characters = myText.value.split('');
  wordCount.innerText = characters.length;
 
}*/

function charCount(text, event){
  var myText = document.querySelector("[name = 'fname']");
  var wordCount = document.querySelector("[name = 'count']");
  var characters = myText.value.split('');
  wordCount.innerText = characters.length + 1;

  if(characters.length>=9){
    wordCount.classList.add("red");
    event.preventDefault();
    
  }else{
    wordCount.classList.remove("red");
  }
}

