$(document).ready(function(){
    var palavras = [
        'cachorro',
        'gato',
        'galinha',
        'capivara',
        'leopardo',
        'cavalo'
    ];
    
    var jogoIniciado = false;
    var chances = 6;
    var acertos = 0;
    
    var imagem = 0;
    
    var palavra = [];
    var span = [];

    $('#botao-sortear').click(function(){
        jogoIniciado = true;

        $('.palavra').empty();

        palavra = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(palavra);

        for(var i = 0; i < palavra.length; i++){
            span = $("<span>");
            
            $('.palavra').append(span);
        }
    });

    // for(var i = 0; i < palavra.length; i++){
    //     var letra = $('#input-letra').val();
    //     if(letra === palavra[i]){
    //         span = $("<span>");

    //         $('.palavra').append(span);
    //     }
    // }
});
