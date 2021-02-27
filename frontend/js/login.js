let cpf = document.querySelector('#cpf');
let senha = document.querySelector('#senha')
let btLogin = document.querySelector('.botao');

btLogin.addEventListener('click',e=>{
    e.preventDefault();
    console.log('clicaram no botão');
    console.log(cpf.value);
    console.log(senha.value);
});