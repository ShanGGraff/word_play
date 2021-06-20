//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();

    const sentence = $("#original").val();
    let senArray = [];
    senArray = sentence.split(" ");
    let newArray = [];

    senArray.forEach(function(word) {
      if (word.length >= 3) {
        newArray.push(word);
      }
    });
    newArray.reverse();
    lastSentence = newArray.join(" ");
    $(".sentence").text(lastSentence);
  });
});