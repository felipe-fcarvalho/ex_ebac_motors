$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true 
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            },
            veiculoInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email:'Por favor, insira seu e-mail',
            telefone:'Por favor, insira seu telefone completo',
            veiculoInteresse: 'Por favor, escolha seu veículo de interesse'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos incorretos`)
            }
        }
    })

    $('.destaque-list button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculo-interesse').val(nomeVeiculo);
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });
    
    $('#sobre').click(function(){
        const sobre = $('#sobre-a-loja');
        const alturaNav = $('nav').outerHeight();
        const folga = 40;

        $('html, body').animate({
            scrollTop: sobre.offset().top - alturaNav - folga
        }, 1000)
    });
});
