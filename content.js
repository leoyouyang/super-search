//Remove the original buttons
$('input.gNO89b').remove();
$('input.RNmpXc').remove();
$('#gbqfbb').remove();

//Add new buttons
var googleButton = $("<input class='google' value='Google' type='submit'>");
var bingButton = $("<input class='bing' value='Bing' type='submit'>");
var duckduckgoButton = $("<input class='duckduckgo' value='DuckDuckGo' type='submit'>");
var wikipediaButton = $("<input class='wikipedia' value='Wikipedia' type='submit'>");
$('.FPdoLc.tfB0Bf center').append(googleButton);
$('.FPdoLc.tfB0Bf center').append(bingButton);
$('.FPdoLc.tfB0Bf center').append(duckduckgoButton);
$('.FPdoLc.tfB0Bf center').append(wikipediaButton);

$('.tfB0Bf center').append(googleButton);
$('.tfB0Bf center').append(bingButton);
$('.tfB0Bf center').append(duckduckgoButton);
$('.tfB0Bf center').append(wikipediaButton);

//Add search functions to the buttons
$('.google').click(function() {
  window.location.href = 'https://www.google.com/search?q=' + document.getElementsByClassName("gLFyf gsfi")[0].value;
  return false;
});

$('.bing').click(function() {
  window.location.href = 'https://www.bing.com/search?q=' + document.getElementsByClassName("gLFyf gsfi")[0].value;
  return false;
});

$('.duckduckgo').click(function() {
  window.location.href = 'https://duckduckgo.com/?q=' + document.getElementsByClassName("gLFyf gsfi")[0].value;
  return false;
});

$('.wikipedia').click(function() {
  window.location.href = 'https://en.wikipedia.org/w/index.php?search=' + document.getElementsByClassName("gLFyf gsfi")[0].value;
  return false;
});
