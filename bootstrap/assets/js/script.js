let nome = document.querySelector ("#inputName")
let endereco = document.querySelector ("#inputAddress")
let cidade = document.querySelector ("#inputCity")
let estado = document.querySelector ("#inputEstado")

let nomeOk = false
let enderecoOk = false
let cidadeOk = false
let estadoOk = false

function validaNome() {
  if (nome.value.length >= 3) {
    nomeOk = true
  }
}

function validaEndereco() {
  if (endereco.value.length >= 10 || endereco.value.indexOf("n°")) {
    enderecoOk = true
  }
}

function validaCidade() {
  if (cidade.value.length >= 4) {
    cidadeOk = true
  }
}

function validaEstado() {
  if (estado != 0) {
    estadoOk = true
  }
}

function enviar() {
  if (nomeOk == true && enderecoOk == true && cidadeOk == true && estadoOk == true) {
    alert("Formulário enviado com sucesso!")
  }
  else (
    alert("Preencha corretamente o formulário!")
  )
}