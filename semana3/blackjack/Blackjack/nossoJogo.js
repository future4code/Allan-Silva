
console.log("Bem vindo ao jogo de Blackjack!");

let blackjack = confirm("Quer iniciar uma nova rodada?");

if(blackjack) {
   const card1User = comprarCarta();
   const card2User = comprarCarta();
   const card1Pc = comprarCarta();
   const card2Pc = comprarCarta();

   let punctuationUser = card1User.valor + card2User.valor
   let punctuationPc = card1Pc.valor + card2Pc.valor

   console.log(`Usuário - cartas:", ${card1User.texto} ,${card2User.texto}" - "${punctuationUser}`)
   console.log(`Computador - cartas: ${card1Pc.texto} ${card2Pc.texto}" - ${punctuationPc}`)

   if (punctuationUser > punctuationPc) {
      console.log("O usuário ganhou!");
   } else if (punctuationUser === punctuationPc) {
      console.log("Empate!");
   } else if (punctuationUser > punctuationPc) {
      console.log("O computador ganhou!");
   }
} else {
   console.log("O jogo acabou");
}