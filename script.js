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
const campoBusca = document.getElementById("busca")
let encontrado = -1

function pagLogin(){
    document.getElementById("login").style.display = "flex";
    document.getElementById("cadastrofreela").style.display = "none";
    document.getElementById("cadastroempresa").style.display = "none";
    document.getElementById("imagem").style.display = "none";
    document.getElementById("pesquisa").style.display = "none";
  }

function pagCadastroF(){
    document.getElementById("cadastrofreela").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastroempresa").style.display = "none";
    document.getElementById("imagem").style.display = "none";
    document.getElementById("pesquisa").style.display = "none";
}

function pagCadastroE(){
    document.getElementById("cadastroempresa").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastrofreela").style.display = "none";
    document.getElementById("imagem").style.display = "none";
    document.getElementById("pesquisa").style.display = "none";
}

function voltar(){
  document.getElementById("cadastroempresa").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("cadastrofreela").style.display = "none";
  document.getElementById("imagem").style.display = "flex";
  document.getElementById("pesquisa").style.display = "none";
}

function buscar(){
  document.getElementById("cadastroempresa").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("cadastrofreela").style.display = "none";
  document.getElementById("imagem").style.display = "none";
  document.getElementById("pesquisa").style.display = "flex";
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
  localStorage.setItem("logado", "")
  window.location.href = "index.html"
}

function editarFreela(){
  document.getElementById("cadastrofreela").style.display = "flex";
}

function salvarFreela() {
  const novousuario = {
    dataNascimento: campoDataNascimento.value,
    cpf: campoCPF.value,
    nome: campoNomeFreela.value,
    telefone: campoTelefone.value,
    cidade: campoCidade.value
  }
  usuario = JSON.parse(localStorage.getItem("logado"))
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if (usuario.nome !== novousuario.nome && novousuario.nome != null) {
      usuario.nome = novousuario.nome
    }
    if (usuario.cpf !== novousuario.cpf && novousuario.cpf != null) {
      usuario.cpf = novousuario.cpf
    }
    if (usuario.dataNascimento !== novousuario.dataNascimento && novousuario.dataNascimento != null) {
      usuario.dataNascimento = novousuario.dataNascimento
    }
    if (usuario.telefone !== novousuario.telefone && novousuario.telefone != null) {
      usuario.telefone = novousuario.telefone
    }
    if (usuario.cidade !== novousuario.cidade && novousuario.nome != cidade) {
      usuario.cidade = novousuario.cidade
    }
    for(i=0;i<bancoDeDados.length;i++){
      if(bancoDeDados[i].email == usuario.email){
          encontrado = i
      }
    bancoDeDados.splice(encontrado,1)
      bancoDeDados.push(usuario)
      localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
      document.getElementById("nascimento").value = null
      document.getElementById("telefone").value = null
      document.getElementById("nomefreela").value = null
      document.getElementById("cpf").value = null
      document.getElementById("cidade").value = null
    }
    localStorage.setItem("logado", JSON.stringify(usuario))
    document.getElementById("cadastrofreela").style.display = "none";
    alert("Usuário editado com sucesso!")
  } 

  function editarEmpresa(){
    document.getElementById("cadastroempresa").style.display = "flex";
  }
  
  function salvarEmpresa() {
    const novousuario = {
      cpf: campoCPFEmpresa.value,
      nome: campoNomeEmpresa.value,
      telefone: campoTelefoneEmpresa.value,
      endereco: campoEndereco.value,
      cidade: campoCidadeEmpresa.value
    }
    usuario = JSON.parse(localStorage.getItem("logado"))
      let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
      if (usuario.nome !== novousuario.nome && novousuario.nome != null) {
        usuario.nome = novousuario.nome
      }
      if (usuario.cpf !== novousuario.cpf && novousuario.cpf != null) {
        usuario.cpf = novousuario.cpf
      }
      if (usuario.endereco !== novousuario.endereco && novousuario.endereco != null) {
        usuario.endereco = novousuario.endereco
      }
      if (usuario.telefone !== novousuario.telefone && novousuario.telefone != null) {
        usuario.telefone = novousuario.telefone
      }
      if (usuario.cidade !== novousuario.cidade && novousuario.nome != cidade) {
        usuario.cidade = novousuario.cidade
      }
      for(i=0;i<bancoDeDados.length;i++){
        if(bancoDeDados[i].email == usuario.email){
            encontrado = i
        }
      bancoDeDados.splice(encontrado,1)
        bancoDeDados.push(usuario)
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
        document.getElementById("endereco").value = null
        document.getElementById("telefoneempresa").value = null
        document.getElementById("nomeempresa").value = null
        document.getElementById("cpfempresa").value = null
        document.getElementById("cidadeempresa").value = null
      }
      localStorage.setItem("logado", JSON.stringify(usuario))
      document.getElementById("cadastroempresa").style.display = "none";
      alert("Usuário editado com sucesso!")
    } 
  
    function pesquisar(){
      let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
      for (let verificado of bancoDeDados) {
        if (verificado.nome == campoBusca.value) {
          if(verificado.endereco){
            pagCadastroE()
            document.getElementById("newemailempresa").value = verificado.email
            document.getElementById("endereco").value = verificado.endereco
            document.getElementById("telefoneempresa").value = verificado.telefone
            document.getElementById("nomeempresa").value = verificado.nome
            document.getElementById("cpfempresa").value = verificado.cpf
            document.getElementById("cidadeempresa").value = verificado.cidade
          }
          if(verificado.dataNascimento){
            pagCadastroF()
            document.getElementById("newemail").value = verificado.email
            document.getElementById("nascimento").value = verificado.dataNascimento
            document.getElementById("telefone").value = verificado.telefone
            document.getElementById("nomefreela").value = verificado.nome
            document.getElementById("cpf").value = verificado.cpf
            document.getElementById("cidade").value = verificado.cidade
          }
        }
      }
      
    }