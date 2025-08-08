function formval(){
        let Name = document.querySelector("#name").value.trim()
        let Email = document.querySelector("#email").value.trim()
        let Num = document.querySelector("#num").value.trim()
        let Pass = document.querySelector("#pass").value.trim()
        let Cpass = document.querySelector("#cpass").value.trim()
        
        
        let Errname = document.querySelector("#errname")
        let Erremail = document.querySelector("#erremail")
        let Errnum = document.querySelector("#errnum")
        let Errpass = document.querySelector("#errpass")
        let Errcpass = document.querySelector("#errcpass")


        if(Name==""){
          Errname.innerHTML="Please enter name*"
          Errname.style.color="red"
          return false
        }
        else if(Email==""){
          Erremail.innerHTML="Please enter an email*"
          Erremail.style.color="red"
          return false
        }
        else if(!(Email.includes("@") && Email.includes(".com"))){
          Erremail.innerHTML="Please enter an valid email*"
          Erremail.style.color="red"
          return false
        }
        else if(Num==""){
          Errnum.innerHTML="Please enter number*"
          Errnum.style.color="red"
          return false
        }
        else if(Num.length!=10){
          Errnum.innerHTML="Please enter valid number*"
          Errnum.style.color="red"
          return false
        }
        else if(isNaN(Num)){
          Errnum.innerHTML="Please enter number only*"
          Errnum.style.color="red"
          return false
        }
        else if(Pass==""){
          Errpass.innerHTML="Please enter a password*"
          Errpass.style.color="red"
          return false
        }
        else if(Pass.length!=8){
          Errpass.innerHTML="Please enter 8 characters*"
          Errpass.style.color="red"
          return false
        }
        else if((Pass.match(/[0123456789]/)
          && Pass.match(/[@,_]/)
          && Pass.match(/[a-z]/)
          && Pass.match(/[A-Z]/))){
           Errpass.innerHTML="Please enter 8 characters*"
           Errpass.style.color="red"
           return false
        }
        else if(Cpass==""){
          Errcpass.innerHTML="Please enter a password*"
          Errcpass.style.color="red"
          return false
        }
        else if(Cpass!=Pass){
          Errcpass.innerHTML="Does not match*"
          Errcpass.style.color="red"
          return false
        }


      }
