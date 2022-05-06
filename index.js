// criando minhas variáveis // selecionando elas através do document.querySelector OU document.getElementById 
// qual método de codificação o usuário irá escolher => Base64 ou CifraCésar
var selecioneMetodo = document.querySelector('#selecione') 
// incremento = botão que o usuário digita os "PASSOS => CifraCésar" => Na função: ocultar e só mostrar após o click
var ocultarIncremento = document.querySelector('#ocultarIncremento') 
var code = document.querySelector('#codificar') 
var decode = document.querySelector('#decodificar') 
var textoUsuario = document.querySelector('#escrever');  
var resultadoTexto = document.getElementById('resultado');
var botao = document.querySelector('#botao') 

// tem a função de selecionar o que o usuário irá utilizar 

selecioneMetodo.addEventListener("change", function (e) {    //função anônima     
    var metodoSelecionado = e.target.value;
  
    if (metodoSelecionado == "base64") {
        ocultarIncremento.style.display = "none"; // sumir com o local de incremento
        botao.setAttribute("onclick", "base64()") 
    } else {
        ocultarIncremento.style.display = "block";
        botao.setAttribute("onclick", "caesar()")   
    }
  });


codificar.addEventListener("click", function () {
    botao.innerText = "_encoder";               
  });
  
 decodificar.addEventListener("click", function () {
    botao.innerText = "_decode";             
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


// PROCESSANDO CIFRA DE CÉSAR
// utilizar fromCharCode


// https://www.30secondsofcode.org/js/s/caesar-cipher



/*
<script>
let text = String.fromCharCode(65);
document.getElementById("demo").innerHTML = text; 
</script>
*/

function caesarCodificando(arr, key) {
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return String.fromCharCode(((code - 65 + key) % 26) + 65) // https://stackoverflow.com/questions/65149100/seeking-an-explanation-of-caesar-cipher-code
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 + key) % 26) + 97)
      } else return c
  }).join('') //juntando todos os elementos do arr 
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

  // vou utilizar o join nesse caso da mesma forma que a documentação:

  /*
  const elements = ['Fire', 'Air', 'Water'];
  console.log(elements.join(''));
  // expected output: "FireAirWater"
  */


}