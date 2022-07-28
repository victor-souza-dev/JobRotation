const readline = require('readline-sync');

// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

// Resposta: 91

(function q1() {
  let [indice, soma, k] = [13, 0, 0];

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }
  console.log(soma);
})();

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule
// a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let numberQ2 = readline.question('Escolha um numero: ');

let q2 = number => {
  let fibonnaciArray = [0, 1];
  while (fibonnaciArray[fibonnaciArray.length - 1] < number) {
    let soma =
      fibonnaciArray[fibonnaciArray.length - 1] +
      fibonnaciArray[fibonnaciArray.length - 2];
    fibonnaciArray.push(soma);
    if (number == fibonnaciArray[fibonnaciArray.length - 1]) {
      console.log(`O numero ${number} pertence a sequencia Fibonnaci!\n`);
      break;
    } else if (number < fibonnaciArray[fibonnaciArray.length - 1]) {
      console.log(`O numero ${number} não pertence a sequencia Fibonnaci!\n`);
      break;
    }
  }
};
q2(numberQ2);

// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___
// Resposta: 9

// b) 2, 4, 8, 16, 32, 64, ____
// Resposta: 128

// c) 0, 1, 4, 9, 16, 25, 36, ____
// Resposta: 49

// d) 4, 16, 36, 64, ____
// Resposta: 100

// e) 1, 1, 2, 3, 5, 8, ____
// Resposta: 13

// f) 2,10, 12, 16, 17, 18, 19, ____
// Resposta: 21

// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em
// direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade
// constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de
// pedágio (Sem Parar)

// c) Explique como chegou no resultado.

// Primeiramente converti a velocidade dos dois de km/h para m/s e depois consegui o tempo que cada um demoraria para chegar no destino
// com a seguinte fórmula: Δt = ΔS / Vm
// carro = 55min / 30,5 m/s
// caminhão = 1h15min + 5min de pedágio / 22,2 m/s
// Posteriormente presumi que o carro certamente chegaria primeiro a metade da rota, então ele iria se encontrar com o caminhão por volta
// de 55% a 65% do percurso, partindo de Ribeirão Preto, claro
// Por fim percebi que quando eles se cruzarem,estarão em paralelo um com o outro, indo em direções opostas, contudo em paralelo,
// estando portanto, na mesma distância a partir daquele ponto em relação a Ribeirão Preto. ;-;

//

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

let numberQ5 = readline.question('Digite o que quer inverter: ');

function q5(number) {
  let array = number.split('');
  let inverter = [];
  for (let i = array.length - 1; i >= 0; i--) {
    inverter.push(array[i]);
  }
  inverter = inverter.join('');
  console.log(inverter);
}
q5(numberQ5);
