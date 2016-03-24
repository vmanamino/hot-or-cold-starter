 var previousDifference = 0;
$(document).ready(function(){
    var random = randomValue();
    var count = 0;
    /*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
  	$(".new").mousedown(function(){
  	    $("#feedback").text("Make your Guess!");
  	    random = randomValue();
  	    previousDifference = 0;
  	    count = 0;
  	    setCount(count); 
  	    $("#guessList").empty();
  	});
  	
  	$("#target").submit(function(event) {
  	   event.preventDefault();
  	   var userInput = $("#userGuess").val();
  	   $("#userGuess").val("");
  	 //  var randomValue = 15;
  	   userInput = +userInput;
  	   userInput = parseInt(userInput);
  	   if (userInput) {
  	       if (userInput < 101 && userInput > 0) {
  	           count += 1; 
  	           setCount(count);
      	       $("#guessList").append("<li>"+userInput+"</li>");
      	       if (userInput == random){
      	          $('#feedback').text("gotchya");
      	       }
      	       else if (userInput != random){
      	           howClose(userInput, random);
      	       }
  	       }
  	       else {
  	           alert("Your number " + userInput + " does not range from 1 to 100");
  	           setCount(count);
  	       }
  	   }
  	   else {
  	       alert("Your input, " + userInput + ", is not valid number");
  	   }
  	});
});

function randomValue() {
    var value = Math.floor(Math.random() * ( 101 - 1)) + 1 ;
    console.log(value);
    return value;
}

function howClose(input, random){
    var difference = Math.abs(input - random);
    if (previousDifference) {
        console.log("previous");
        if (difference < previousDifference){
            $("#feedback").text("You're warmer!");
        }
        else {
            $("#feedback").text("You're colder!");
        }
    }
    else {
        console.log("no previous");
        if (difference > 50) {
            $("#feedback").text("Ice Cold!");
        }
        else if (difference <= 50 && difference >= 30) {
            $("#feedback").text("Cold!");
        }
        else if (difference < 30 && difference >= 20) {
            $("#feedback").text("Warm!");
        }
        else if (difference < 20 && difference >= 10) {
            $("#feedback").text("Hot!");
        }
        else if (difference < 10 && difference >= 1) {
            $("#feedback").text("Burning!");
        }
    }
    previousDifference = difference;
}

function setCount(count) {
    $("#count").text(count);
}
