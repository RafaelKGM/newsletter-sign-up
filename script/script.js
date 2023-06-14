
const button = document.querySelector('.button')
const containerForm = document.getElementById("container")
const mainContainer = document.getElementById('MainContainer')
const succesContainer = document.getElementById('succesContainer')
succesContainer.style.display = 'none'
const emailSent = document.querySelector('.emailSent')

containerForm.addEventListener("submit",e=>{
    
    const email = document.getElementById("email").value
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (email == "") {
        e.preventDefault()
        labelInvalid = document.querySelector(".labelInputInvalid")
        labelInvalid.removeAttribute("hidden")
        container = document.getElementById("container")
       
        emailValid = document.getElementById("email");
        emailValid.classList.replace("email","invalid");
      
        }
    else if (!regexEmail.test(email)) {
        
        e.preventDefault()
        labelInvalid = document.querySelector(".labelInputInvalid")
        labelInvalid.innerHTML = "Valid email required"
        labelInvalid.removeAttribute("hidden")
        container = document.getElementById("container")
       
        emailValid = document.getElementById("email");
        emailValid.classList.replace("email","invalid");
        
    }
    else  {
        e.preventDefault()
        mainContainer.style.display = 'none'
        succesContainer.style.display = 'block'
        emailSent.innerHTML = email
    }
})

