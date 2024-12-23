const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');
const form = document.getElementById('Calculadora');

function calcular(numero){
    numero = valorB.value > valorA.value;
    return numero;
}

form.addEventListener('submit', function(e){ 
    e.preventDefault();

    const msgSucesso = `O numero &nbsp;<b>${valorB.value}  é maior que o numero &nbsp; <b>${valorA.value}</b>`;
    const msgErro = `O numero &nbsp;<b>${valorB.value}  é menor que o numero &nbsp; <b>${valorA.value}</b>`;
    if(calcular()){
        document.querySelector('#mensagem').innerHTML = msgSucesso;
        document.querySelector('#mensagem').classList.add('msg-sucesso');
        document.querySelector('#mensagem').classList.remove('msg-erro');
        document.querySelector('#mensagem').style.display = 'flex';
    } else {
        document.querySelector('#mensagem').innerHTML = msgErro;
        document.querySelector('#mensagem').classList.add('msg-erro');
        document.querySelector('#mensagem').classList.remove('msg-sucesso');
        document.querySelector('#mensagem').style.display = 'flex';
    }
})