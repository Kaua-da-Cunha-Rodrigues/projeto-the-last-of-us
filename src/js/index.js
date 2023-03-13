/*Pense Primeiro o que você quer atingir...*/

/*
    1 - Dar um jeito de pegar o elemento HTML dos botões

    2 - Dar um jeito de identificar o clique do user no botão

    3 - Desmarcar o botão selecionado anterior

    4 - Marcar o botão clicado como se estivesse selecioanda

    5 - Esconder a imagem ativa de fundo

    6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// 1
const botoesCarrosel = document.querySelectorAll('.botao'); // busca todos os elementos que tem a classe botao. Document é o elemento que representa a página
const imagens = document.querySelectorAll('.imagem');

//2
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //3
        desativarBotaoSelecionado(); //Isso ajuda pra quem for ler o código depois

        //4
        selecionarBotaoCarrosel(botao);

        //5
        esconderImagemAtiva();

        //6
        mostrarImagemDeFundo(indice);
    }) 
}) // '() => {}' representa uma função de seta. E para cada botao ele executa a função

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado'); //busca o elemento com a classe
    botaoSelecionado.classList.remove('selecionado'); //remove a classe
}
