const campoEmail = document.getElementById("email")
const campoSenha = document.getElementById("password")
const campoNovoEmail = document.getElementById("newemail")
const campoNovaSenha = document.getElementById("newpassword")
const campoRepSenha = document.getElementById("reppassword")
const campoTelefone = document.getElementById("telefone")
const campoNomeFreela = document.getElementById("nomefreela")
const campoCPF = document.getElementById("cpf")
const campoDataNascimento = document.getElementById("nascimento")
const campoCidade = document.getElementById("cidade")
const campoNomeEmpresa = document.getElementById("nomeempresa")
const campoNovoEmailEmpresa = document.getElementById("newemailempresa")
const campoNovaSenhaEmpresa = document.getElementById("newpasswordempresa")
const campoRepSenhaEmpresa = document.getElementById("reppasswordempresa")
const campoTelefoneEmpresa = document.getElementById("telefoneempresa")
const campoCPFEmpresa = document.getElementById("cpfempresa")
const campoCidadeEmpresa = document.getElementById("cidadeempresa")
const campoEndereco = document.getElementById("endereco")

function pagLogin(){
    document.getElementById("login").style.display = "flex";
    document.getElementById("cadastrofreela").style.display = "none";
    document.getElementById("cadastroempresa").style.display = "none";
    document.getElementById("imagem").style.display = "none";
}

function pagCadastroF(){
    document.getElementById("cadastrofreela").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastroempresa").style.display = "none";
    document.getElementById("imagem").style.display = "none";
}

function pagCadastroE(){
    document.getElementById("cadastroempresa").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastrofreela").style.display = "none";
    document.getElementById("imagem").style.display = "none";
}

function voltar(){
  document.getElementById("cadastroempresa").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("cadastrofreela").style.display = "none";
  document.getElementById("imagem").style.display = "flex";
}

function logar() {
  let email = campoEmail.value
  let senha = campoSenha.value
  let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
  if (bancoDeDados == null) {
    alert("Nenhum usuário cadastrado até o momento")
  } else {
    for (let usuario of bancoDeDados) {
      if ( usuario.email == email && usuario.senha == senha ) {
        alert("Parabéns, você logou!")
        if( usuario.endereco == null){
          localStorage.setItem("logado", JSON.stringify(usuario))
          window.location.href = "home1.html"
          break
        }else if(usuario.dataNascimento == null){
          localStorage.setItem("logado", JSON.stringify(usuario))
          window.location.href = "home2.html"
          break;
        }
      }
    }
    alert("E-mail ou senha incorreta!")
  }
}

function cadastrarFreela() {
  if (campoNovaSenha.value == campoRepSenha.value) {
    const usuario = {
      email: campoNovoEmail.value,
      senha: campoNovaSenha.value,
      dataNascimento: campoDataNascimento.value,
      cpf: campoCPF.value,
      nome: campoNomeFreela.value,
      telefone: campoTelefone.value,
      cidade: campoCidade.value,
    }
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if (bancoDeDados == null) {
      bancoDeDados = []
    }
    if (existe(usuario, bancoDeDados)) {
      alert("Esse email já foi cadastrado anteriormente")
    } else {
      bancoDeDados.push(usuario)
      localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
      alert("Usuário cadastrado com sucesso!")
      document.getElementById("newemail").value = null
      document.getElementById("newpassword").value = null
      document.getElementById("reppassword").value = null
      document.getElementById("nascimento").value = null
      document.getElementById("telefone").value = null
      document.getElementById("nomefreela").value = null
      document.getElementById("cpf").value = null
      document.getElementById("cidade").value = null
    }
  } else {
    alert("As senhas são diferentes!")
  }
}

function cadastrarEmpresa() {
  if (campoNovaSenha.value == campoRepSenha.value) {
    const usuario = {
      email: campoNovoEmailEmpresa.value,
      senha: campoNovaSenhaEmpresa.value,
      cpf: campoCPFEmpresa.value,
      nome: campoNomeEmpresa.value,
      telefone: campoTelefoneEmpresa.value,
      endereco: campoEndereco.value,
      cidade: campoCidadeEmpresa.value,
    }
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if (bancoDeDados == null) {
      bancoDeDados = []
    }
    if (existe(usuario, bancoDeDados)) {
      alert("Esse email já foi cadastrado anteriormente")
    } else {
      bancoDeDados.push(usuario)
      localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
      alert("Usuário cadastrado com sucesso!")
      document.getElementById("newemailempresa").value = null
      document.getElementById("newpasswordempresa").value = null
      document.getElementById("reppasswordempresa").value = null
      document.getElementById("endereco").value = null
      document.getElementById("telefoneempresa").value = null
      document.getElementById("nomeempresa").value = null
      document.getElementById("cpfempresa").value = null
      document.getElementById("cidadeempresa").value = null
    }
  } else {
    alert("As senhas são diferentes!")
  }
}

function existe(usuario, bancoDeDados) {
  for (let verificado of bancoDeDados) {
    if (verificado.email == usuario.email) {
      return true
    }
  }
  return false
}

function logout() {
  window.location.href = "index.html"
}