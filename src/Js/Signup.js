
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
    document.getElementById('submitbttn').addEventListener('click',getElementsonclick)
}
//Validations

function Validations(data) {
    const email = data.email;
    const emailconfirm = data.emailconfirm;
    const StatusValidations = {statusValid:false,message:''}
    //Declarations
    function EmailValid(email){   
        debugger
        const RegEx = /^\S+@\S+\.\S+$/
        return RegEx.test(email)

    }
    function EmailValidationAndEquals(email,emailconfirm) {      
        
        if(!EmailValid(email) || !EmailValid(emailconfirm)){
            console.log("Não está valido")
        }
    }
    //Call All Functions
    EmailValidationAndEquals(email,emailconfirm)
    return StatusValidations;
}
//SignUp in server
function SignUp(parameters){
    debugger
    console.log(parameters)
}
function getElementsonclick(){ 
    
    var userdatas = {      
        firstname: document.getElementById('firstname').value,
        fullname: document.getElementById('fullname').value,
        birthday: document.getElementById('birthday').value,
        email: document.getElementById('email').value,
        emailconfirmation: document.getElementById('emailconfirmation').value,
        password: document.getElementById('password').value,
        passwordconfirm: document.getElementById('passwordconfirm').value
        /* emailconfirmation: urlParams.get('emailconfirmation')
        emailconfirmation: urlParams.get('emailconfirmation')*/
    }  
    
    const val = Validations(userdatas)
    if(val){
        SignUp(userdatas)
    }else{
        
    }
   
    

}