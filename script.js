const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("password");
const campoNovoEmail = document.getElementById("newemail");
const campoNovaSenha = document.getElementById("newpassword");
const campoRepSenha = document.getElementById("reppassword");
const campoTelefone = document.getElementById("telefone");
const campoNomeFreela = document.getElementById("nomefreela")
const campoCPF = document.getElementById("cpf");
const campoDataNascimento = document.getElementById("nascimento");
const campoCidade = document.getElementById("cidade");
const campoNomeEmpresa = document.getElementById("nomeempresa")
const campoEndereco = document.getElementById("endereco")

function pagLogin(){
    document.getElementById("login").style.display = "flex";
    document.getElementById("cadastrofreela").style.display = "none";
    document.getElementById("cadastroempresa").style.display = "none";
}

function pagCadastroF(){
    document.getElementById("cadastrofreela").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastroempresa").style.display = "none";
}

function pagCadastroE(){
    document.getElementById("cadastroempresa").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastrofreela").style.display = "none";
}

function voltar(){
  document.getElementById("cadastroempresa").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("cadastrofreela").style.display = "none";
}

function logar() {
  let email = campoEmail.value;
  let senha = campoSenha.value;
  let mensagem = "E-mail ou senha incorreta!";
  let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
  if (bancoDeDados == null) {
    mensagem = "Nenhum usuário cadastrado até o momento";
  } else {
    for (let usuario of bancoDeDados) {
      if (usuario.email === email && usuario.senha === senha) {
        mensagem = "Parabéns, você logou!";
        localStorage.setItem("logado", JSON.stringify(usuario));
        window.location.href = "home.html";
        break;
      }
    }
  }
  alert(mensagem)
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
    };
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
      bancoDeDados = [];
    }
    if (existe(usuario, bancoDeDados)) {
      alert("Esse email já foi cadastrado anteriormente");
    } else {
      bancoDeDados.push(usuario);
      localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
      alert("Usuário cadastrado com sucesso!");
    }
  } else {
    alert("As senhas são diferentes!");
  }
}

function cadastrarEmpresa() {
  if (campoNovaSenha.value == campoRepSenha.value) {
    const usuario = {
      email: campoNovoEmail.value,
      senha: campoNovaSenha.value,
      cpf: campoCPF.value,
      nome: campoNomeEmpresa.value,
      telefone: campoTelefone.value,
      endereco: campoEndereco.valure,
      cidade: campoCidade.value,
    };
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
      bancoDeDados = [];
    }
    if (existe(usuario, bancoDeDados)) {
      alert("Esse email já foi cadastrado anteriormente");
    } else {
      bancoDeDados.push(usuario);
      localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
      alert("Usuário cadastrado com sucesso!");
    }
  } else {
    alert("As senhas são diferentes!");
  }
}

function existe(usuario, bancoDeDados) {
  for (let verificado of bancoDeDados) {
    if (verificado.email == usuario.email) {
      return true;
    }
  }
  return false;
}

function logout() {
  window.location.href = "index.html";
}

