
/*
O que meu arquivo JavaScript vai fazer: 
1. Incrementar a opção "adicione seu passo" na CIFRA CÉSAR através do ID "ocultar incremento", ou seja, através do DOM eu vou criar a opção de incremendo, e só aparecer com ela quando o usuário clicar na opção cifra césar 

BOTÃO RADIO => criptografar e depois inverter o comando se o usuário solicitar; 

2. Criar variável para armazenar cada ID e cada elemento selecionando através do .querySelector
3. Meu arquivo JS vai ouvir o que está sendo passando através do DOM com o addEventListener // Principalmente nos botões; => 
4. Adicionar funcionalidade ao botão "CODE here_" para ele OUVIR quando o usuário clicar e codificar de acordo com a base escolhida (Base64 ou Cifra César)

*/
    
var selecioneMetodo = document.querySelector('#selecione') 
var ocultarIncremento = document.querySelector('#ocultarIncremento') 
var code = document.querySelector('#codificar') 
var decode = document.querySelector('#decodificar') 
var textoUsuario = document.querySelector('#escrever');  
var resultadoTexto = document.getElementById('resultado');
var botao = document.querySelector('#botao') 


selecioneMetodo.addEventListener("change", function (e) {        
    var metodoSelecionado = e.target.value;
  
    if (metodoSelecionado == "base64") {
        ocultarIncremento.style.display = "none";
        botao.setAttribute("onclick", "base64()") 
    } else {
        ocultarIncremento.style.display = "block";
        botao.setAttribute("onclick", "caesar()")   
    }
  });


codificar.addEventListener("click", function () {
    botao.innerText = "encoder_";               
  });
  
 decodificar.addEventListener("click", function () {
    botao.innerText = "decode_";             
  });

function base64(){
  var input = textoUsuario.value
  var escolha = code.checked
  resultadoTexto.value = base64Logic(input, escolha);
}

function base64Logic(input, escolha){
  return (escolha)? btoa(input) : atob(input);
}

function caesar()  {
  var input = textoUsuario.value.split("");
  var escolha = code.checked
  var numero =  parseInt(ocultarIncremento.value);
  if (escolha){
    resultadoTexto.value = caesarCodificando(input, numero);
  } 
  else {
    resultadoTexto.value = caesarDecodificando(input, numero);
  }
}

function caesarCodificando(arr, key){
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return String.fromCharCode(((code - 65 + key) % 26) + 65)
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 + key) % 26) + 97)
      } else return c
  }).join('')
}

function caesarDecodificando(arr, key){
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
      } else return c
  }).join('')
}