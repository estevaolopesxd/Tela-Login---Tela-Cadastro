
let btn = document.querySelector(".fa-eye")
let btnCadastro = document.querySelector('#verConfirmeSenha')


let nome = document.getElementById("nome")
let labelnome = document.getElementById("labelnome")
let validenome = false

let usuario = document.getElementById("usuario")
let labelusuario = document.getElementById("labelusuario")
let valideusuario = false

let senha = document.getElementById("senha")
let labelsenha = document.getElementById("labelsenha")
let validesenha = false

let confirmesenha = document.getElementById("confirmesenha")
let labelconfirmesenha = document.getElementById("labelconfirmesenha")
let valideconfirmesenha = false

let msgError = document.getElementById("msgError")
let msgSuccess = document.getElementById("msgSuccess")

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
         let = mathRandom + mathRandom
 
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

 let userLogado = JSON.parse(localStorage.getItem('userLogado'))
 let logado = document.getElementById("logado")
 logado.innerHTML = `Olá ${userLogado.nome}!`
 
 if(localStorage.getItem('token') == null){
     alert('Você precisa estar logado para acessar essa página')
     window.location.href = 'index.html'
 }
 
 function sair(){
     localStorage.removeItem('token')
     window.location.href = 'index.html'
 }

/*TELA DE LOGIN*/


btn.addEventListener('click', () => {
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
        

    } else {
        inputSenha.setAttribute('type', 'password')
        
    }

})

/*FIM TELA DE LOGIN*/

/*TELA CADASTRO*/


btnCadastro.addEventListener("click", () => {
    let inputSenhaCadastro = document.querySelector("#confirmesenha")
    
    if(inputSenhaCadastro.getAttribute("type") == 'password'){
        inputSenhaCadastro.setAttribute("type", "text")
        

    } else {
        inputSenhaCadastro.setAttribute("type", "password")
    }

})
/*FIM TELA CADASTRO*/


nome.addEventListener("keyup", () => {
    if(nome.value.length <= 2){
        labelnome.setAttribute("style", "color: red")
        labelnome.innerHTML = "Nome *Insira no minimo 3 caracteres"
        nome.setAttribute("style", "border-color:red;")
        validenome = false

    } else {
        labelnome.setAttribute("style", "color: green")
        labelnome.innerHTML = "Nome"
        nome.setAttribute("style", "border-color:green;")
        validenome = true
    }
})


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


senha.addEventListener("keyup", () => {
    if(senha.value.length <= 5){
        labelsenha.setAttribute("style", "color: red")
        labelsenha.innerHTML = "Senha *Insira no minimo 6 caracteres"
        senha.setAttribute("style", "border-color:red;")
        validesenha = false

    }else{
        labelsenha.setAttribute("style", "color: green")
        labelsenha.innerHTML = "Senha"
        senha.setAttribute("style", "border-color:green;")
        validesenha = true
    }
})


confirmesenha.addEventListener("keyup", () => {
    if(senha.value != confirmesenha.value){
        labelconfirmesenha.setAttribute("style", "color: red")
        labelconfirmesenha.innerHTML = "Confirmar Senha *As senhas não conferem"
        confirmesenha.setAttribute("style", "border-color:red;")
        valideconfirmesenha = false

    }else{
        labelconfirmesenha.setAttribute("style", "color: green")
        labelconfirmesenha.innerHTML = "Confirmar Senha"
        confirmesenha.setAttribute("style", "border-color:green;")
        valideconfirmesenha = true
    }
})



 


function cadastrar(){

    if (validenome && valideusuario && validesenha && valideconfirmesenha){

        /*salvar cadastro no localstoge */

        let listaUser = JSON.parse(localStorage.getItem("listaUser") || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )
            localStorage.setItem("listaUser", JSON.stringify(listaUser))


        /*salvar cadastro no localstoge */


        msgSuccess.setAttribute("style", "display:block;")
        msgSuccess.innerHTML ="<strong>Cadastrando Usuario...</strong>"

        msgError.setAttribute("style", "display:none;")
        msgError.innerHTML =" "
        

        /* TEMPO PARA REDIRECIONAR*/ 
        setTimeout(() => {

            window.location.href = "index.html"

        }, 3000)


        /* TEMPO PARA REDIRECIONAR*/ 


    } else {
        msgError.setAttribute("style", "display:block;")
        msgError.innerHTML ="<strong>Preencha todos os campos corretamente antes de cadastrar</strong>"

        msgSuccess.innerHTML =""
        msgSuccess.setAttribute("style", "display:none;")
    }
}


