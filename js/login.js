let btn = document.querySelector(".fa-eye")

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
        

    } else {
        inputSenha.setAttribute('type', 'password')
        
    }

})

/*FIM TELA DE LOGIN*/

function entrar(){
    listaUser = []
     let userValid = {
         nome: "",
         user:"",
         senha: ""
     }
 
    listaUser = JSON.parse(localStorage.getItem("listaUser"))
 
     listaUser.forEach((item) => {
         
         if(usuario.value == item.userCad && senha.value == item.senhaCad){
 
             userValid = {
                 nome: item.nomeCad,
                 user: item.userCad,
                 senha: item.senhaCad
             }
         }
 
     })
 
     if(usuario.value == userValid.user && senha.value == userValid.senha) {
         window.location.href = 'home.html'
         let mathRandom = Math.random().toString(16).substr(2)
         let token = mathRandom + mathRandom
 
         localStorage.setItem('token', token)
         localStorage.setItem('userLogado', JSON.stringify(userValid))
 
      } else {
         labelusuario.setAttribute("style", "color:red")
         usuario.setAttribute("style", "border-color:red")
         labelsenha.setAttribute("style", "color:red")
         senha.setAttribute("style", "border-color:red")
         msgError.setAttribute("style", "display:block")
         msgError.innerHTML = "Usuario ou senha incorretos"
         usuario.focus()
     }
 }


 usuario.addEventListener("keyup", () => {
    if(usuario.value.length <= 4){
        labelusuario.setAttribute("style", "color: red")
        labelusuario.innerHTML = "Usuario *Insira no minimo 5 caracteres"
        usuario.setAttribute("style", "border-color:red;")
        valideusuario = false

    }else{
        labelusuario.setAttribute("style", "color: green")
        labelusuario.innerHTML = "Usuario"
        usuario.setAttribute("style", "border-color:green;")
        valideusuario = true
    }
})
