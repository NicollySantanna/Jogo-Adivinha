let tela1 = document.querySelector('.tela1')
let tela2 = document.querySelector('.tela2')

const numeroAleatorio = Math.round(Math.random() * 10);

let controle = 1;

function verificarNumero (e) {
    e.preventDefault();
    
    let inputNumero = document.querySelector('#inputNumero')
    
    if(Number(inputNumero.value == numeroAleatorio)){
        tela1.classList.add('hide')
        tela2.classList.remove('hide')
        
        document.querySelector('.tela2 h2').innerText = `Você acertou em ${controle} tentativas`
    }
    
    inputNumero.value = "";
    controle++
}

let btnVerificar = document.querySelector('#btnVerificar')
let btnNovamente = document.querySelector('#btnNovamente')

btnVerificar.addEventListener('click' , verificarNumero)
btnNovamente.addEventListener('click' , function(){
    tela1.classList.remove('hide')
    tela2.classList.add('hide')
    controle = 1;
})
