//Comentário de uma linha

/* Comentário
de várias
linhas */

var desconto = 0.2; // Declaração de uma variável
const PRECO = 2; // Declaração de uma constante

/* 
    VARIÁVEL: Pode ter se valor alterado no fluxo do script
    CONSTANTE: NÂO pode ter seu valor alterado no fluxo do script

    Uma boa prática é nomear as CONSTANTES com LETRAS MAIÚSCULAS (conforme pode ser visto na linha 8)
*/

var total = PRECO - desconto;

PRECO = PRECO - desconto; // Essa linha irá dar erro por que a constante PRECO não pode ser alterada