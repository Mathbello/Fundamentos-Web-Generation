let nome = window.document.getElementById("name")
let email = document.querySelector("#email")
let boss = document.querySelector("#boss")
let nomeOk = false
let emailOk = false
let bossOk = false
let maps = document.querySelector("#maps")

nome.style.width = "100%"
email.style.width= "100%"
boss.style.width= "100%"

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3) {
        txt.innerHTML = "Nome inválido"
        txt.style.color= "#E6001C"
    }
    else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "#004F2B"
        nomeOk = true
    }
}

function validaEmail() {
    let txt = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txt.innerHTML = "Email inválido"
        txt.style.color = "#E6001C"
    }
    else {
        txt.innerHTML = "Email válido"
        txt.style.color = "#004F2B"
        emailOk = true
    }
}

function validaBoss() {
    let txt = document.querySelector("#txtBoss")
    if(txt.innerHTML.length >= 140) {
        txt.innerHTML = "Texto muito grande, digite até 140 caracteres."
        txt.style.color = "#E6001C"
    }
    else {
        txt.innerHTML = ""
        bossOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && bossOk == true) {
        alert("Formulário enviado com sucesso!")
    }
    else {
        alert("Preencha o formulário antes de enviar!")
    }
}

function mapZoom() {
    maps.style.width = "800px"
    maps.style.height = "600px"
}

function mapNormal() {
    maps.style.width = "400px"
    maps.style.height = "250px"
}