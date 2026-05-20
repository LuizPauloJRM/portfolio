/*
*Crie uma const para armazenar conteudo html h2
* fez um loop  com duas variaveis letra e i dados
* dentro uma função depois que acada função ativa constantemente
* A cada 75 s realiza a letra
*
* */

const titulo = document.querySelector('.digitando-efeito');

function ativaLetra(elemento) {
    if (!elemento) return;
    const arrText = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    arrText.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}
ativaLetra(titulo);

