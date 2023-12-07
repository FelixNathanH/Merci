

window.onload = () => {  

    let form = document.getElementById("myform")
    let fullname = document.getElementById("fullname")
    let email = document.getElementById("email")
    let upassword = document.getElementById("upassword")
    let phonenumber = document.getElementById("phonenumber")
    let agreement = document.getElementById("agreementCB")
    let errorMessages = document.getElementById("errormessages")
    
    let error = []
    form.addEventListener("submit", (e)=>{
        error = []
        errorMessages.innerText = ''
        validatefullname()
        validateemaiil()
        validateupassword()
        validateagreement()

        if(error.length > 0){
            for(err of error){
                errorMessages.innerText += err + '\n'
            }
            e.preventDefault()
        }else{
            alert('Account Created')
        }
        
    })

    function isempty(value){
        if(value === ''){
            return true
        }
        return false
    }
    
    function validatefullname(){
        let value = fullname.value.trim()
        if(value === ''){
            error.push("field must be filled")
        }
        if(value.length < 5){
            error.push("Fullname must be at least 5 characters")
        }
    }

    function validateemaiil(){
        let value = email.value.trim()
        if(isempty(value)){
            error.push("Email must be filled")
        }

        let a=0
        let count=0

        while(a < value.length){
            if(value[a]=='@'){
                count++
            }
            a++
        }

        if(count != 1){
            error.push("wrong email format")
        }
    }

    function validateupassword(){
        let value = upassword.value.trim()
        if(value === ''){
            error.push("Please enter your password")
        }
        if(value.length < 8){
            error.push("Password must be at least 8 characters")
        }
    }
    function validatephonenumber(){
        let value = phonenumber.value.trim()
        if(value === ''){
            error.push("Please enter your phone number")
        }
        if(value.length < 12){
            error.push("Phone number must be at least 12 digits")
        }
        if(value.length > 16){
            error.push("Name must under 16 digits")
        }
    }
    function validateagreement(){
        if(agreement.checked){
            return
        }
        error.push("you must agree to terms to proceed")
    }

}

