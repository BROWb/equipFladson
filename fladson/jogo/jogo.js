var naleatorio =0;
var nerros=0;
// aqui declaro as variaveis para armazenar o numero e os erros.

function refresh(){
// gerar um numero aleatorio 
naleatorio = parseInt (Math.random() * 50);
//gerar numeros aleatorios(math.radom)retira as casas decimais (parseInt).multiplica o 50(*)
console.log( naleatorio)
}
function verifican(){
    var a = document.getElementById('n1').value
    if(a > 50 || a < 1 ){
        alert('aposta inválida')
        return;

    }
    if(a > naleatorio){
        nerros++;
        alert('o número para ser encontrado é menor ')
    }
    else if(a < naleatorio){
        nerros++;
        alert('o número para ser encontardo é maior')
    }
    else(
        alert('parabéns, voce acertou com ' +nerros+ ' tentativas'))
        
}
refresh();