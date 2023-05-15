$(document).ready(function(){
    var palavras = [
        'cachorro',
        'gato',
        'galinha',
        'capivara',
        'leopardo',
        'cavalo'
    ];
    
    var palavra = [];
    var aux = [];
    var letrasDigitadas = [];
    var span = [];
    var jogoIniciado = false;

    var acertou = false, repetiu = false;
    
    var imagem = 1;
    var chances = 6;

    $('#botao-sortear').click(function(){
        jogoIniciado = true;

        $('.imagens').html('<img src="imgs/forca_1.png" width="300px" alt="Forca">');
        $('#input-letra').val("");
        $('.palavra').empty();
        $('.letras-digitadas').empty();
        aux = [];
        letrasDigitadas = [];

        palavra = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(palavra);

        for(var i = 0; i < palavra.length; i++){
            span = $("<span>");
            
            $('.palavra').append(span);
        }
    });

    $('#botao-chutar').click(function(){
        if(jogoIniciado === true && ($('#input-letra').val() !== "")){
            var letra = $('#input-letra').val();
            
            for(var i = 0; i < palavra.length; i++){
                if(letra === palavra[i]){
                    if(letra === aux[i]){
                        repetiu = true;
                        acertou = false;
                    }else{                        
                        acertou = true;
                        repetiu = false;

                        aux[i] = letra;
                        $('#palavra').removeClass('palavra').addClass('palavra-visivel');
                        $('.palavra-visivel span').eq(i).text(letra.toUpperCase());
                    }
                }
            }
            
            if(!letrasDigitadas.includes(letra)){
                letrasDigitadas.push(letra);
        
                var span = $("<span>" + letra.toUpperCase() + "</span>");
                $('.letras-digitadas').append(span);
            }else{
                repetiu = true;
            }
            
            console.log(aux);
            console.log(letrasDigitadas);

            if(repetiu === true){
                console.log('Você já tentou essa letra');
                repetiu = false;
            }else if(acertou === true){
                console.log('Você acertou a letra: ' + letra);
                acertou = false;
            }else{
                chances--;

                console.log('Você errou a letra. Chances: ' + chances);

                imagem++;
                var nome_imagem = '<img src="imgs/forca_' + imagem + '.png" width="300px" alt="Forca">';
                $('.imagens').html(nome_imagem);
            }
        }

        if(chances === 0){
            alert('You Lose');
            imagem = 1;
            jogoIniciado = false;
        }

        $('#input-letra').val("");
    });
});
