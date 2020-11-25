var db = firebase.database();
var formularios = db.ref("formularios");

document.getElementById("formContato").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    var nome = getInputValue("nome");
    var email = getInputValue("email");
    var telefone = getInputValue("telefone");
    var mensagem = getInputValue("mensagem");
 
    salvarFormulario(nome, email, telefone, mensagem);
    document.querySelector(".alert").style.display = "block";
    setTimeout(function(){
        document.querySelector(".alert").style.display = "none";
    },3000);
    document.getElementById("formContato").reset();
}

function getInputValue(inputId){
    return document.getElementById(inputId).value;
}

function salvarFormulario(nome, email, telefone, mensagem){
    var novoFormulario= formularios.push();
    novoFormulario.set({
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    });
}