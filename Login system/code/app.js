// INITIALIZING THE ID'S GLOBALLY TO AN ELEMENT

var button = document.getElementById('btn');
var signupForm = document.getElementById('signupForm');
var signinForm = document.getElementById('signinForm');
var signupUsername = document.getElementById('signupUsername');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signupPasswordCheck = document.getElementById('signupPasswordCheck');
var signinUsername = document.getElementById('signinUsername');
var signinPassword = document.getElementById('signinPassword');



/*-------------------TOGGLE BUTTON FOR SIGNIN AND SIGNUP ---------------*/

/* in the signup(), three events must be happened simultaneously
1.button must be toggled when we click
2.after clicking,it must display the page which we have called('signupForm')
3. hide the remaining function('signinForm)*/

function signup() {
    button.style.left = "110px";
    document.getElementById('signupForm').style.cssText ="display: block;";
	document.getElementById('signinForm').style.cssText ="display: none;";
}

/* in the signin(), three events must be happened simultaneously
1.button must be toggled when we click
2.after clicking,it must display the page which we have called('signinForm')
3. hide the remaining function('signupForm)*/

function signin() {
    button.style.left = "0";
    document.getElementById('signupForm').style.cssText ="display: none;";
	document.getElementById('signinForm').style.cssText ="display: block;";
	
}


function signinTogglePassword() {

	var eye = document.getElementById('eye');
	var eyeSlash = document.getElementById('eyeSlash');

	if(signinPassword.type === 'password') {
		signinPassword.type = "text";
	    eye.style.display = "block";
		eyeSlash.style.display = "none";
	}

	else {
		signinPassword.type = "password";
		eye.style.display = "none";
		eyeSlash.style.display = "block";
	}
}


function signupTogglePassword() {

	var lock = document.getElementById('lock');
	var unlock = document.getElementById('unlock');
	
	
	if(signupPassword.type === 'password') {
		signupPassword.type = "text";
	    lock.style.display = "none";
		unlock.style.display = "block";
	}

	else   {
		signupPassword.type = "password";
		lock.style.display = "block";
		unlock.style.display = "none";
	}	

}


function signupTogglePasswordCheck() {
	var locked = document.getElementById('locked');
	var unlocked = document.getElementById('unlocked');
	
	 if(signupPasswordCheck.type === 'password') {
		signupPasswordCheck.type = "text";
		locked.style.display = "none";
		unlocked.style.display = "block";
	}

	else {
		signupPasswordCheck.type = "password";
		locked.style.display = "block";
		unlocked.style.display = "none";
	}
}


/*------------------------------SIGNUP FORM------------------------------------*/

/* preventDefault() method will break its default behaviour*/
signupForm.addEventListener('submit', e=> {
    e.preventDefault();
    checkSignupInputs();
});
	
function checkSignupInputs() {
	var signupUsernameValue = signupUsername.value.trim();
	var signupEmailValue = signupEmail.value.trim();
	var signupPasswordValue = signupPassword.value.trim();
	var signupPasswordCheckValue = signupPasswordCheck.value.trim();
	
	if(signupUsernameValue === '') {
		setErrorFor(signupUsername, 'username cannot be blank');
	}

    else if(signupUsernameValue.length<3) {
	setErrorFor(signupUsername,'username must be more than 3 characters');
	}
	
	 else {
		setSuccessFor(signupUsername);
	}
	
	if(signupEmailValue === '') {
		setErrorFor(signupEmail, 'email cannot be blank');
	} else if (!isEmail(signupEmailValue)) {
		setErrorFor(signupEmail, 'invalid email');
	} else {
		setSuccessFor(signupEmail);
	}
	
	if(signupPasswordValue === '') {
		setErrorFor(signupPassword, 'password cannot be blank');
	} else {
		setSuccessFor(signupPassword);
	}
	
	if(signupPasswordCheckValue === '') {
		setErrorFor(signupPasswordCheck, 'password cannot be blank');
	} else if(signupPasswordValue !== signupPasswordCheckValue) {
		setErrorFor(signupPasswordCheck, 'passwords does not match');
	} else{
		setSuccessFor(signupPasswordCheck);
	}
}

/*------------------------------SIGNIN FORM------------------------------------*/

signinForm.addEventListener('submit', e=> {
    e.preventDefault();
	checkSigninInputs();
});

function checkSigninInputs() {
var signinUsernameValue = signinUsername.value.trim();
var signinPasswordValue = signinPassword.value.trim();

	if(signinUsernameValue === '') {
		setErrorFor(signinUsername, 'username cannot be blank');
	} else if(signinUsernameValue.length<=3) {
		setErrorFor(signinUsername,'username must be more than 3 characters');
	}
	else {
		setSuccessFor(signinUsername);
	}


	if(signinPasswordValue === '') {
		setErrorFor(signinPassword, 'password cannot be blank');
	} else {
		setSuccessFor(signinPassword);
	}
	
	
}

/*LEXICAL SCOPING FUNCTIONS(setErrorFor&setSuccessFor) FOR 
CHECKSIGNUPINPUTS AND CHECKSIGNININPUTS*/

function setErrorFor(input, message) {
	var formInputs = input.parentElement;
	var small = formInputs.querySelector('small');
	formInputs.className = 'form-inputs error';
	small.innerText = message;
}

function setSuccessFor(input) {
	var formInputs = input.parentElement;
	formInputs.className = 'form-inputs success';
}
	
function isEmail(signupEmail) {
	return /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,5})$/.test(signupEmail);
}









//return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/