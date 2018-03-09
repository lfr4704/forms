$( document ).ready( function () {



  $("#submit").click( function(){ // the reason why you do not name this function is becuase you do not need to because it only exist when you click on it.
  var emailText = $("#email").val();
  var passwordText = $('#password').val();
  /*line below validates email*/
 	//console.log(validateEmail((emailText), passwordText));

 	$("#inner").css({"visibility": "visible", "background-color": "#E68FAC"});

  if (emailText == "example@email.com") {

  	if (passwordText == "password") {
  		
  		$("#inner").append( "<p>You entered the correct password</p>");
  		//console.log("You have entered teh right password");
  	} else {
		$("#inner").append( "<p>You entered the incorrect password!</p>");
  		//console.log("incorrect password, try again");
  	}
  } else {
  	$("#inner").append( "<p>No user with that email " + emailText + " exists!</p>");
  	//console.log("no user wit email " + emailText + " exists");
  }

  });

 // credit to stack overflow https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
});


