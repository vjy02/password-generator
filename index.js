const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatedPassword = ""
let passwordLength = 0
let password1 = document.getElementById("password-el")
let password2 = document.getElementById("password2-el")

function generatePassword(){
    passwordLength = parseInt(document.getElementById("password-length").value);

    for (let x=0; x<2; x++){
        for(let i=0; i<passwordLength;i++){
            generatedPassword += characters[Math.floor(Math.random()*characters.length)]
        }
        if (x===0){
            password1.textContent = generatedPassword
            generatedPassword = ""
        }
        else{
            password2.textContent = generatedPassword
            generatedPassword = ""
        }
    }
}

