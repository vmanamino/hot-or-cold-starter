
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
  	    count = 0;
  	    $("#count").text(count); 
  	    $("#guessList").empty();
  	});
  	
  	$("#target").submit(function(event) {
  	   count += 1; 
  	   $("#count").text(count);
  	   event.preventDefault();
  	   var userInput = $("#userGuess").val();
  	   $("#userGuess").val("");
  	 //  var randomValue = 15;
  	   userInput = +userInput;
  	   userInput = parseInt(userInput);
  	   if (userInput) {
  	       if (userInput < 101 && userInput > 0) {
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
    var difference = differenz(input, random);
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

function differenz(input, random) {
    var difference;
    if (input < random) {
        difference = random - input;
    }
    else if (input > random) {
        difference = input - random;
    }
    return difference;
}


