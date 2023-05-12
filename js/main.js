$(document).ready(function(){
    var palavras = [
        'cachorro',
        'gato',
        'galinha',
        'capivara',
        'leopardo',
        'cavalo'
    ];

    var indiceAleatorio = Math.floor(Math.random() * palavras.length);
    var palavraSorteada = palavras[indiceAleatorio];

    for(var i = 0; i < palavraSorteada.length; i++){
        var letra = palavraSorteada[i];
        var span = $("<span>" + letra + "</span>");

        $('.palavra').append(span);
    }

    $('#botao-chutar').click(function(){
        var letraDigitada = $('#chute-letra').val();

        for(var i = 0; i < palavraSorteada.length; i++){
            if(letraDigitada.toLowerCase() === palavraSorteada[i].toLowerCase()){
                
            }
        }
    });
});