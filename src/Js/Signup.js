
 /*   const urlParams = new URLSearchParams(window.location.search);
   var userdatas = {      
       firstname: urlParams.get('firstname'),
       fullname: urlParams.get('fullname'),
       birthday: urlParams.get('birthday'),
       email: urlParams.get('email'),
       emailconfirmation: urlParams.get('emailconfirmation'),
       password: urlParams.get('password'),
       passwordconfirm: urlParams.get('passwordconfirm')
       /* emailconfirmation: urlParams.get('emailconfirmation')
       emailconfirmation: urlParams.get('emailconfirmation') 
   } */

window.onload =()=>{
    //Add events in fields
    document.getElementById('email').addEventListener('blur',EmailValid)
    document.getElementById('emailconfirm').addEventListener('blur',EmailValid)
    document.getElementById('password').addEventListener('blur',PasswordValid)
    document.getElementById('passwordconfirm').addEventListener('blur',PasswordValid)
    document.getElementById('passwordconfirm').addEventListener('blur',PasswordValid)
    document.getElementById('firstname').addEventListener('blur',EmptyField)
    //Submit user infos.
    document.getElementById('submitbttn').addEventListener('click',getElementsonclick)

}
//Validations
//This function valid the email field are empty or invalid
function EmailValid(){   
    const email = this.value
    const RegEx = /^\S+@\S+\.\S+$/
    
    if(!RegEx.test(email)){
        if(email == ""){
            return alert("The email or email confirm field is empty! ")
        }
        return alert('Email invalid!')
    }    
}
//This function valid the password field are empty or invalid
function PasswordValid(){
    
}
//This function valid the password field are empty or invalid
function EmptyField(){
    this.value 
    debugger
}
//This function valid the email and email confirm is equals
function EmailValidationEquals(email,emailconfirm) {      
        debugger
    const valid = {valid:false, message:''}
    if(!(email === emailconfirm)){        
        valid.message = 'Email and Email Confirmation is not equals!'       
        return valid
    }
    valid.valid = true    
    return valid
}

function ValidationsForEquals(data) {        
    const emailValid= EmailValidationEquals(data.email,data.emailconfirm)
    const passwordValid= EmailValidationEquals(data.email,data.emailconfirm)
    const StatusValidations ={
        emailValid: emailValid,
        passwordValid:passwordValid
    }
    //Call functions over validate all fields 
    return StatusValidations;
}
//SignUp in server
function SignUp(parameters){
    
    localStorage.setItem('userParameters',parameters)
}
function getElementsonclick(){ 
    
    var userdatas = {      
        firstname: document.getElementById('firstname').value,
        fullname: document.getElementById('fullname').value,
        birthday: document.getElementById('birthday').value,
        email: document.getElementById('email').value,
        emailconfirm: document.getElementById('emailconfirm').value,
        password: document.getElementById('password').value,
        passwordconfirm: document.getElementById('passwordconfirm').value
        /* emailconfirmation: urlParams.get('emailconfirmation')
        emailconfirmation: urlParams.get('emailconfirmation')*/
    }  
    const valid = ValidationsForEquals(userdatas)
     if(!valid.passwordValid.valid || !valid.emailValid.valid){
        
     }  
    SignUp(userdatas)
    
   
    

}