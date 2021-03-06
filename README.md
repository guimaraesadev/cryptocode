<h1 align="center">🔐 CODE&CRYPTO | #M2 | RESILIA </h1>

![coversgithub123 (2)](https://user-images.githubusercontent.com/101408372/166722929-3116863d-9e6d-4f39-9e46-2990059bea50.png)


## **Hospedagem;**

O projeto está hospedado no GitHub Pages. Esse processo faz parte do aprendizado contínuo na RESILIA Educação.<br>
⬇️ <br> 
[CODE&CRYPTO SERVER](https://guimaraesadev.github.io/criptografiaCodeRESILIA/) 


## **Sobre a aplicação;**

CODE&CRYPTO é um site capaz de realizar codificação e decodificação de mensagens em Cifra de César ou Base64. <br> 
Base64 é um algoritmo de codificação (encoding) que permite transformar qualquer caractere de qualquer idioma em um alfabeto que consiste em letras latinas, dígitos e sinais. <br> Em criptografia, a Cifra de César, também conhecida como cifra de troca, código de César ou troca de César, é uma das mais simples e conhecidas técnicas de criptografia. É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes. <br>
Dessa forma, o projeto foi todo pensado - desde as linhas de código até o design - para oferecer ao usuário uma melhor experiência de usabilidade. A aplicação conta com header com páginas que explicam sobre esses métodos de criptografia, além de contar sobre a história de Alan Turing, o pai da criptografia e um link para acesso à documentação do projeto, onde está tudo explicado em mais detalhes.

## **Tecnologias utilizadas;**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## **Requisitos da aplicação**; <br>

🏷️ A aplicação deve ser capaz de codificar e decodificar mensagens utilizando
tanto base64 quanto cifra de césar; <br>
Para isso, ela deve conter um formulário com: <br> 
🏷️ ○ Um campo de entrada textual, da mensagem que será codificada ou
decodificada; <br>
🏷️ Um campo de seleção, com as opções "cifra de césar" e "base64" com o
seguinte comportamento: <br><br>
- Com "cifra de césar" ativo na seleção, um novo campo deve surgir
no formulário para que seja possível fornecer o incremento
utilizado na cifra;
- Dois campos radiais **(radio buttons)** com os textos: "codificar" e
"decodificar"
- Um botão que, com "codificar" selecionado exibe o texto "Codificar
Mensagem!" e com "decodificar" selecionado exibe "Decodificar
Mensagem!"
- Um outro campo textual deve ser utilizado na página para que o
resultado da codificação e decodificação possa ser exibido para a
pessoa usuária

🏷️ Não existem requisitos quanto ao estilo da página! Você tem liberdade total para
explorar diferentes funcionalidades.

## **Imagens | Processo de criação;** <br>

→ Página com ScrollUp, contando com a introdução + fatos históricos sobre a criptografia, a vida de Alan Turing e a codificação nos dias de hoje. 

![image](https://user-images.githubusercontent.com/101408372/166557780-6f382511-c79b-4cc9-94e8-ffb1db6f5059.png)

→ Página principal, contando com o CRIPTOGRAFADOR de mensagens em Cifra de César e Base64.

![image](https://user-images.githubusercontent.com/101408372/166557919-1280d045-599e-4ea0-85c8-3df558fc784a.png)

## **Habilidades praticadas;**
- Implementando Button ScrollUp;
- Manipulação do DOM;
- Integração JS + HTML;
- if, else; 
- Eventos JavaScript;
- Método: charCodeAt;
- Função: .atob e .btoa;
- Array;
- Métodos em Array; 

## **Implementações;**

**Botão ScrollUp** ⬆️ com **JavaScript** que leva o usuário do final da página até o começo com apenas um click. <br>

    window.addEventListener('scroll', function () {

    let scroll = document.querySelector('.scrollTop')

        scroll.classList.toggle('active', window.scrollY > 450)
        })

    function backTop() {

    window.scrollTo({
        
        top: 0,
        behavior: 'smooth'
        })
    }

## **Design;**

O design da aplicação foi pensado na experiência do usuário ao se conectar com as cores e elementos. Pensando nisso, utilizei elementos 3D para construir as imagens, dando um tom de modernidade. Além de utilizar uma paleta de cores que combinasse com as imagens selecionadas através do Unsplash. 

![design](https://user-images.githubusercontent.com/101408372/167066047-e7c5981d-521a-4583-a566-3885c40e1914.png)



## **Documentação e referências;**
- [Cifra de César | Wikipédia](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
- [Base64 | Wikipédia](https://pt.wikipedia.org/wiki/Base64)
- [Cryptii](https://cryptii.com/pipes/caesar-cipher)
- [charCodeAt( )](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [Base64 | MDN | Documentação](https://developer.mozilla.org/en-US/docs/Glossary/Base64) <br>
- [Eventos JavaScript](https://www.marciobrasil.net.br/javascript-2/lista-completa-de-eventos-javascript.html)
- [IC UNICAMP | Eventos JS Lista](https://www.ic.unicamp.br/~celio/inf533/docs/eventos_javascript.html)
- [DankiCode](https://blog.dankicode.com/eventos-em-javascript/)
- [30 seconds of code | Caesar cipher](https://www.30secondsofcode.org/js/s/caesar-cipher)
- [charCodeAt() | W3Schools](https://www.w3schools.com/jsref/jsref_fromcharcode.asp)
- [Button ScrollUp | CSS | JavaScript](https://www.visualdicas.com.br/scripts/css/91-botao-scroll-to-top-html-css-javascript)






