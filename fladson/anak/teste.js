var naleatorio=0;
var nerros=0
function refresh (){
    naleatorio = parseInt(Math.random()*50);
    console.log(naleatorio)
}
function verifican(){
    var a=document.getElementById('n1').value
    if(a >50||a<1){
        alert('aposta invalida')
        return;
    }if(a>naleatorio){
        nerros++
        alert('seu numero é menor')
    }
    else if(a<naleatorio){
        alert('seu numero é maior')
    }else
    alert('parabéns voce acertou com '+nerros+'tentativas')
}
refresh();