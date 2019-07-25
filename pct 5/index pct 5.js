function validate(text, event){

  event.preventDefault();

  var myText = document.querySelector("[name = 'fname']");
  var wordCount = document.querySelector("[name = 'count']");
  var characters = myText.value.split('');
  wordCount.innerText = characters.length;
  
}