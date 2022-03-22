
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
    //Declaration of components
    
    //Add events in fields
    document.getElementById('email').addEventListener('blur',CheckFields)
    document.getElementById('emailconfirm').addEventListener('blur',CheckFields)
    document.getElementById('password').addEventListener('blur',CheckFields)
    document.getElementById('passwordconfirm').addEventListener('blur',CheckFields)
    document.getElementById('passwordconfirm').addEventListener('blur',CheckFields)
    document.getElementById('firstname').addEventListener('blur',CheckFields)
    document.getElementById('lastname').addEventListener('blur',CheckFields)

    //Submit user infos.
    document.getElementById('submitbttn').addEventListener('click',getElementsonclick)

}
//Validations
//This function valid the email field are empty or invalid
function EmailValid(email){   
    //Get the button 
    var btnsbmt= document.querySelector("#submitbttn")
    const RegEx = /^\S+@\S+\.\S+$/
    if(!RegEx.test(email)){    
        btnsbmt.disabled = true    
        return alert('Email or Email Confirmation invalid!')
    }    
    btnsbmt.disabled = false
}
//This function valid the password field are empty or invalid
function PasswordValid(password){       
    //Get the button
    var btnsbmt= document.querySelector("#submitbttn")
    if(password.length < 8 ){     
        btnsbmt.disabled = true
        return alert('Password or Password Confirmation invalid!')
    }  
    btnsbmt.disabled = false
}
//This function valid the value of field.
function EmptyField(value,name){
    //Get the button
    var btnsbmt= document.querySelector("#submitbttn")
    if(value  == ""){     
        debugger
        
        btnsbmt.disabled = true
        return alert("The field "+name+" is empty! ")        
    }   
    btnsbmt.disabled = false
    return true
}
//This function checks if the field is empty and if it is valid
function CheckFields(){
    
    if(EmptyField(this.value,this.name)){
        const idField = this.id

        if(idField.includes("email")){
            EmailValid(this.value)
        }
        if(idField.includes("password")){
            PasswordValid(this.value)
        }
         
    }
    

    
}
//This function valid the email and email confirm is equals
function ValidationEquals(data,dataconfirm,name){      
    debugger
    const valid = {valid:false, message:''}
    if(!(data === dataconfirm)){        
        valid.message = 'Field and your Confirmation is not equals!'   

        return alert(valid.message)
    }
    valid.valid = true    
    return valid
}

function ValidationsForEquals(data) {         
    const emailValid= ValidationEquals(data.email,data.emailconfirm)
    const passwordValid= ValidationEquals(data.password,data.passwordconfirm)
    const StatusValidations ={
        emailValid: emailValid,
        passwordValid:passwordValid
    }
    //Call functions over validate all fields 
    return StatusValidations;
}
//SignUp in server
function SignUp(parameters){
    debugger
    //Save in local storage the all datas users
    window.localStorage.setItem("userData",JSON.stringify(parameters))
}

//Get elements and building a object to send a method SignUp
function getElementsonclick(){
    var userdatas = {      
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        birthday: document.getElementById('birthday').value,
        email: document.getElementById('email').value,
        emailconfirm: document.getElementById('emailconfirm').value,
        password: document.getElementById('password').value,
        passwordconfirm: document.getElementById('passwordconfirm').value
        /* emailconfirmation: urlParams.get('emailconfirmation')
        emailconfirmation: urlParams.get('emailconfirmation')*/
    }  
    const valid = ValidationsForEquals(userdatas)
     if(valid.passwordValid.valid && valid.emailValid.valid){        
        //Save in local storage the all datas users
        SignUp(userdatas)
     }      
    

}