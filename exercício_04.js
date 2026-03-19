function ordena() {

   let numeros =[];

   for(let i = 0; i < 4; i++){
     numeros.push(Number(promp("Digite um número: ")));
   }   

   numeros.sort((a,b) => b - a);

   alert ("Ordem decrescente: " + numeros);
   


 }