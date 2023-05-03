/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

function criptografar(texto){
   let novoTexto = "";
   for(let i=0; i<texto.length; i++) {
      switch(texto[i]){
         case 'a':
            novoTexto += 'ai';
            break;
         case 'e':
            novoTexto += 'enter';
            break;
         case 'i':
            novoTexto += 'imes';
            break;
         case 'o':
            novoTexto += 'ober';
            break;
         case 'u':
            novoTexto += 'ufat';
            break;
         default:
            novoTexto += texto[i];
            break;
      }
   }
   mostrarNaTela(novoTexto);
}

function descriptografar(texto){
   let novoTexto = texto;
   while(novoTexto.search('ai') != -1){
      novoTexto = novoTexto.replace('ai','a');
   }
   while(novoTexto.search('enter') != -1){
      novoTexto = novoTexto.replace('enter','e');
   }
   while(novoTexto.search('imes') != -1){
      novoTexto = novoTexto.replace('imes','i');
   }
   while(novoTexto.search('ober') != -1){
      novoTexto = novoTexto.replace('ober','o');
   }
   while(novoTexto.search('ufat') != -1){
      novoTexto = novoTexto.replace('ufat','u');
   }
   mostrarNaTela(novoTexto);
}

function opcao(funcao,texto){
   switch(funcao){
      case "criptografar":
         criptografar(texto);
         break;
      case "descriptografar":
         descriptografar(texto);
         break;
      default: 
         alert("Essa opção não existe. Por favor, tente novamente!");
         break;
   }
}

function mostrarNaTela(texto){
   const copiarBotao = document.querySelector("button#copiar");
   copiarBotao.style = "display: block;";

   const sectionTag = document.querySelector("section#mensagens");
   sectionTag.style = "display: flex; flex-direction: column; align-items: space-between;"

   const sectionDivTag = document.querySelector("section#mensagens div");
   sectionDivTag.innerText = texto;
   sectionDivTag.style = "text-align: left;";
}

const criptografarBotao = document.querySelector("button#criptografar");
criptografarBotao.addEventListener("click", function(){
   const texto = document.querySelector("#mensagem");
   opcao("criptografar",texto.value);
});

const descriptografarBotao = document.querySelector("button#descriptografar");
descriptografarBotao.addEventListener("click",function(){
   const texto = document.querySelector("#mensagem");
   opcao("descriptografar",texto.value);
});

const copiarBotao = document.querySelector("button#copiar");
copiarBotao.addEventListener("click",function(){
   const sectionDivTag = document.querySelector("section#mensagens div");
   navigator.clipboard.writeText(sectionDivTag.innerText)
  .then(() => {
    console.log('Copied to clipboard');
   })
  .catch((error) => {
    console.error('Failed to copy: ', error);
  });
})