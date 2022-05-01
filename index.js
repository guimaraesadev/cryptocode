
/*
O que meu arquivo JavaScript vai fazer: 
1. Incrementar a opção "adicione seu passo" na CIFRA CÉSAR através do ID "ocultar incremento", ou seja, através do DOM eu vou criar a opção de incremendo, e só aparecer com ela quando o usuário clicar na opção cifra césar 

BOTÃO RADIO => criptografar e depois inverter o comando se o usuário solicitar; 

2. Criar variável para armazenar cada ID e cada elemento selecionando através do .querySelector
3. Meu arquivo JS vai ouvir o que está sendo passando através do DOM com o addEventListener // Principalmente nos botões; => 
4. Adicionar funcionalidade ao botão "CODE here_" para ele OUVIR quando o usuário clicar e codificar de acordo com a base escolhida (Base64 ou Cifra César)

*/
    
var selecioneMetodo = document.querySelector('#selecioneMethod') 
//pegando o elemento da página INDEX onde o usuário escolhe entre cifra césar ou BASE64
var ocultarIncremento = document.querySelector('#ocultarIncremento') 
//