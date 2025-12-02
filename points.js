//Vamos criar um sistema de pontuação para um jogo simples.
// Primeiro, vamos definir o nome do jogador.

let nome = prompt('Por favor, insira seu nome:');
console.log('Nome do jogador:', nome);
// Saudação personalizada usando o nome inserido
alert(`Olá, ${nome}! Bem-vindo ao jogo de perguntas.`);

// Definindo a pontuação inicial do jogador
let pontuacao = 0;
console.log('Pontuação inicial:', pontuacao);

//Agora, vamos criar um sistema de perguntas para aumentar a pontuação do jogador.
let pergunta1 = prompt('Qual é a capital da França?');
console.log('Resposta da pergunta 1:', pergunta1);
if (pergunta1.toLowerCase() === 'paris')  {
    pontuacao += 10;  
    alert('Resposta correta! Você ganhou 10 pontos.');
} else {
    alert('Resposta incorreta. A capital da França é Paris.');
}

//Note que o comando .toLowerCase() é usado para garantir que a comparação seja feita de forma case-insensitive.

let pergunta2 = prompt('Quanto é 5 + 7?');
console.log('Resposta da pergunta 2:', pergunta2); 
if (parseInt(pergunta2) === 12) {
    pontuacao += 10;  
    alert('Resposta correta! Você ganhou 10 pontos.');
} else {
    alert('Resposta incorreta. 5 + 7 é igual a 12.');
}

let pergunta3 = prompt('Qual é o maior planeta do nosso sistema solar?');
console.log('Resposta da pergunta 3:', pergunta3);
if (pergunta3.toLowerCase() === 'júpiter' || pergunta3.toLowerCase() === 'jupiter') {
    pontuacao += 10;  
    alert('Resposta correta! Você ganhou 10 pontos.');
} else {
    alert('Resposta incorreta. O maior planeta do nosso sistema solar é Júpiter.');
}

let pergunta4 = prompt('Quem escreveu "Dom Quixote"?');
console.log('Resposta da pergunta 4:', pergunta4);
if (pergunta4.toLowerCase() === 'miguel de cervantes' || pergunta4.toLowerCase() === 'cervantes') {
    pontuacao += 10;  
    alert('Resposta correta! Você ganhou 10 pontos.');
} else {
    alert('Resposta incorreta. "Dom Quixote" foi escrito por Miguel de Cervantes.');
}

let pergunta5 = prompt('Qual é o elemento químico representado pelo símbolo "O"?');
console.log('Resposta da pergunta 5:', pergunta5);
if (pergunta5.toLowerCase() === 'oxigênio' || pergunta5.toLowerCase() === 'oxigenio') {
    pontuacao += 10;  
    alert('Resposta correta! Você ganhou 10 pontos.');
} else {
    alert('Resposta incorreta. O símbolo "O" representa o elemento Oxigênio.');
}   

// Exibindo a pontuação final do jogador
alert(`Obrigado por jogar, ${nome}! Sua pontuação final é: ${pontuacao} pontos.`);
console.log('Pontuação final:', pontuacao);
alert('Até a próxima!');
