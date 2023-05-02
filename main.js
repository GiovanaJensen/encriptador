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
   return novoTexto;
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
   return novoTexto;
}

let texto = "giovana";
document.write(criptografar(texto));
document.write("<br>" + descriptografar(criptografar(texto)));