







// function formValidate () {

//     const yourName = document.getElementById("name").value;

//     const yourName2 = document.getElementById("name2").value;

//     const yourEmail = document.getElementById("email").value;

//     const yourPass = document.getElementById("pass").value;
    
//     const error = document.getElementById("error");
//     let text = '' ;

//     if (yourName.length < 3) {
//         text = "pleas Enter valid name" ;
//         error.innerHTML = text ;
//         return false ;
//     }
//     else if (yourName2.length < 3) {
//         text = "pleas Enter valid name2" ;
//         error.innerHTML = text ;
//         return false ;
//     }
//     else if (yourEmail.length < 10) {
//         text = "pleas Enter valid Email"
//         error.innerHTML = text;
//         return false ;
//     }
//     else if(isNaN(yourPass) || yourPass.length < 6){
//         text = "pleas Enter valid password"
//         error.innerHTML = text;
//         return false ;
//     }
//     else {
//         alert("done") ;
//         return true ;
//     }


// }

// ////////////////////////////////////////////


// function formValidate2 () {

//     const yourName = document.getElementById("name").value;
//     const yourEmail = document.getElementById("email2").value;
//     const yourPass = document.getElementById("pass2").value;

//     const error2 = document.getElementById("error2");
//     let text = '' ;
//     if (yourName.length < 3) {
//         text = "pleas Enter valid name" ;
//         error2.innerHTML = text ;
//         return false ;
//     }
//     else if (yourEmail.length < 10) {
//         text = "pleas Enter valid Email" ;
//         error2.innerHTML = text ;
//         return false ;
//     }
//     else if (isNaN(yourPass) || yourPass.length < 6){
//         text = "pleas Enter valid password" ;
//         error2.innerHTML = text ;
//         return false ;
//     }
//     else {
//         alert("done") ;
//         return true ;
//     }
// }

////////////////////////////////////////

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


function formValidate2 () {

    // const yourName = document.getElementById("name").value;
    const yourEmail = document.getElementById("email2").value;
    const yourPass = document.getElementById("pass2").value;

    const error2 = document.getElementById("error2");
    let text = '' ;
   
     if (yourEmail.length < 10) {
        text = "Pleas Enter your Email" ;
        error2.innerHTML = text ;
        return false ;
    }
    else if (isNaN(yourPass)){
        text = "The password Not Number" ;
        error2.innerHTML = text ;
        return false ;
    }
    else if(yourPass.length < 6 || yourPass == ""){
        text = "Pleas Enter More 6 Numbers" ;
        error2.innerHTML = text ;
        return false ;
    }
    else {
        alert("are you sure this infomation is right") ;
        return true ;
    }
}






