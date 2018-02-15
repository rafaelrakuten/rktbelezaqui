// bug token no body
/*(function(){
    var corpo = document.querySelector('body').innerHTML;
    var re = /window\.AntiXsrfToken/;
    if( ! re.test(corpo) ){
        document.querySelector('#header').classList.add('positivo');
    }
})();
*/


//Da ação para o botão "continuar comprando" no resumo do carrinho
function closeMiniCar() {
    var miniCar = document.getElementById('divSummaryBasket');
    miniCar.style.display = 'none';
}


jQuery(window).load(function () {
    if (window.innerWidth >= 980) {

       /* jQuery('.banners ul li').each(function () {
            //Setar a paginacao para ficar em 90% ou 80% da imagem do banner de acordo com sua altura 
            var pagPos = jQuery('.owl-item img', this).height();
            var pagPos = pagPos - 30;
            var pagPos = String(pagPos + 'px');
            jQuery('.owl-pagination', this).css({
                "position": "relative",
                "top": pagPos
            });

            
            //Função responsavel por centralizar verticalmente as setas de navegação de um
            //banner de forma automatica de acordo com sua altura
            
        

            var setaHeight = jQuery('.owl-next').height() / 2;
            var paginationHeight = jQuery('.owl-pagination', this).height();
            bannerHeight = jQuery('.owl-item img', this).height();
            bannerHeight = bannerHeight / 2;
            bannerHeight = bannerHeight - setaHeight;
            bannerHeight = bannerHeight - paginationHeight;
            bannerHeight = String(bannerHeight + 'px');
            jQuery('.owl-buttons', this).css({
                "margin-top": bannerHeight
            });
        });  */

        
        // Efeito menu aside
        /* if (jQuery('.aside').length > 0 == true) {
            jQuery('.block li > span').click(function (event) {
                if (jQuery(this).hasClass('minus')) {
                    jQuery(this).next().css('display', 'block');
                    jQuery(this).removeClass('minus');
                } else {
                    jQuery(this).next().css('display', 'none');
                    jQuery(this).addClass('minus');
                }
            });
        }  */

    };



    


    if (window.innerWidth <= 979) {
        /*if(jQuery('body').hasClass('product')){
            jQuery('h1.name.fn').after(jQuery('.fab-cod'));
            jQuery('.responsive-prod-images').after(jQuery('.social.social-mobile'));
            jQuery('.fab-cod').after(jQuery('#ajaxReviewAggregate'));
            jQuery('.collum.details .social').after(jQuery('#ajaxTabs'));

        }*/
    };

    //Corrige bug de exibir % duplicado
    jQuery('.reviewaggregate .rating').each(function () {
        jQuery(this).attr('style', jQuery(this).attr('style').replace('%%', '%'));
    });

    //Troca televendas por sac na pagina institucional
    jQuery('.fst .televendas').ready(function () {
        var sac = jQuery('.fst .televendas').text().replace('Televendas', 'SAC');
        jQuery('.fst .televendas').text(sac);
    });

    //remove ".00" da porcentagem de desconto nos produtos em lista;
    jQuery('#main').ready(function () {
        jQuery('.hproduct:not(#info-product), .result, .aside .hproduct').each(function () {
            var percent = jQuery('.value-percentage', this).text().replace('.00', '');
            jQuery('.value-percentage', this).text(percent);
        });
    });

    //Verifica se a pagina de detalhes possui sku para
    //alterar o layout de acordo com o JPG aprovado
    jQuery("#main").ready(function () {
        if (jQuery('#skusproduct').attr('style') != undefined) {
            jQuery('.buy_sku').addClass('nosku');
        };
        jQuery('.buy_sku').css('display', 'block');
    });

    priceTo();
    cassrosselArrows();
    opniaoMobileAnchor();
    thumbVideo();
    btnFreteResponsivo();
    headerBotoesBarra();
    lookFiltros();
    carrinhoNumber();

});

jQuery(window).load(function () {
    if (window.innerWidth <= 979) {
        if (jQuery('body').hasClass('lookDetalhe')) {
            jQuery('#hplSelectAll').before(jQuery('#hplBuySup'));
            jQuery('.bxc').after(jQuery('.responsive-prod-images'));
        }
    };
    if (window.innerWidth >= 979) {
        if (jQuery('body').hasClass('basketpage')) {
            jQuery( ".details" ).each(function( index ) {
                jQuery(this).find('.brand').after(jQuery(this).find('.cod'));
                jQuery(this).find('.brand').css("display", "block");
                jQuery(this).find('.cod').css("display", "block");
              });
        }

        if (jQuery('body').hasClass('catalog')) {
            jQuery('.spnFiltro').click(function (event) {
                jQuery('.spnFiltro').removeClass('active');
                jQuery(this).toggleClass('active');
            });
            jQuery( ".filterBlock" ).mouseleave(function() {
                jQuery('.spnFiltro').removeClass('active');
              });
        }        
    };    

    selecionarTodos();
    //filtroOrdenaProdutos();
});


if (window.innerWidth > 979) {
    if (jQuery('body').hasClass('product')) {
        if(typeof jQuery.Observe == 'object'){
            jQuery("#ProductBuy").observe("childlist subtree", function (record){ 
                if(jQuery(".notifyme.form")[0]) {
                    jQuery(".collum.details #ProductBuy").addClass('indisponivel')
                }else {
                    jQuery(".collum.details #ProductBuy").removeClass('indisponivel')
                }
            });
        }
    }
}


var Funcao = {

    CarrinhoZeroItem:function(){
        if (jQuery("body").hasClass('mobile-mode')) {
            if (jQuery(".btn-cart-mobile .qtd-cart").text() == "") {
                jQuery(".btn-cart-mobile .qtd-cart").text("0");
            }            
        }
    },
}

document.addEventListener("DOMContentLoaded", function(event) {
    Funcao.CarrinhoZeroItem();
});


// header welcome
jQuery('#header .wrap-help .right > .help-welcome').each(function(){
    jQuery(this).find('#identificacao').after('<div class="identificacao-2" />')
    var txtWelcome1 = jQuery(this).find('a:eq(0)').html();
   
   jQuery(this).find('a').eq(1).appendTo('.identificacao-2');
   jQuery(this).find('.identificacao-2').append('<span>ou</span>');
   jQuery(this).find('a').eq(0).appendTo('.identificacao-2');

   jQuery(this).find('.identificacao-2 a:eq(0)').each(function(){
    if( jQuery(this).attr('title') == 'Cadastre-se'){
        jQuery('body').addClass('deslogado');
    }
   });
});


//header nav

//jQuery('#header #nav > li').each(function(){
    //jQuery(this).find('a').eq(0).after('<span class="line " ><span class="transition"></span></span>');
//});

// header busca
jQuery('#header .search').each(function(){
   jQuery(this).find('.placeholder').attr('placeholder', 'Buscar');
});

// header car count 2 digitos
jQuery('#header .basket-count-number strong').each(function(){

    var txt = jQuery(this).text();
    if(txt < 10){
        jQuery('#header .basket-count-number strong').text(num(txt));
        jQuery('#header .basket-count-number.plural').text(num(txt));
    }
    function num(txt){
        var nu = txt / 10;
        var str = nu.toString();
        var res = str.replace('.', '');
        return res;
    }
});

function headerBotoesBarra(){
    var bt = jQuery('#header .help-welcome').html();
    jQuery('#header .botoes_ .help-welcome').append(jQuery(bt));
   
}



// footer 
(function rodape() { 
    
    jQuery(window).load(function(){
        jQuery('#footer .newsletter input').val('');
        jQuery('#footer .newsletter input').attr('placeholder', '');
    });

})();


// produto
    // price-to
    function priceTo(){
    
        jQuery('.list-products .hproduct').each(function(){
            var priceTo = jQuery(this).find(' .details .sale .value').text().replace('.', ',');
            jQuery(this).find(' .details .sale .value').text('R$ ' + priceTo);
        });
    }

    //cassossel
    function cassrosselArrows(){
        jQuery('.owl-carousel ').each(function(){
            var altura = jQuery(this).find('.owl-item').eq('0').height();
            var alturaMetade = altura / 2;
            var alturaSeta = jQuery(this).find('.owl-controls .owl-buttons > div').height();
            jQuery(this).find('.owl-controls .owl-buttons').css('top', alturaMetade);
            jQuery(this).find('.owl-controls .owl-buttons > div').css('margin-top', - alturaSeta / 2);
        });
    }
    
    // thumbs
    (function produtoThumbs(){
        var video = jQuery('.product #videoDetalhe');
        jQuery('body.product #info-product ul.thumbs').each(function(){
            jQuery(this).append('<li class="ultimo"></li>');
        });
        jQuery('body.product #info-product ul.thumbs .ultimo').html(video);
    })();




//look detalhe

 // infoproduct descrição
 jQuery('.lookDetalhe #info-product .description').each(function(){
    var text = jQuery(this).text();
    jQuery(this).html('<h4>Descrição</h4><p></p>');
    jQuery(this).find('p').text(text);
 });

 // thumbs
 (function detalheLookThumbs(){
    var video = jQuery('.lookDetalhe #videoDetalhe');
    jQuery('body.lookDetalhe #info-product ul.thumbs').each(function(){
        jQuery(this).append('<li class="ultimo"></li>');
    });
    jQuery('body.lookDetalhe #info-product ul.thumbs .ultimo').html(video);
 })();

function thumbVideo(){
    jQuery('.images ul.thumbs').each(function(){
        var primeiroH = jQuery(this).find('li:eq(0) img').height();
        jQuery(this).find('.ultimo a').height(primeiroH - 2);
    });
}

// botao frete responsivo
function btnFreteResponsivo(){
    jQuery('.lookDetalhe.mobile-state').each(function(){
        jQuery(this).find('#hplBuy').before('<div class="only-mobile before-frete" />');
        jQuery(this).find('ul.tools').appendTo(jQuery('.before-frete'));
    });
};






 // link selecionar todos
 function selecionarTodos(){
    jQuery('#piecesLook').each(function(){
        jQuery(this).find('.title').after('<div class="hplSelectAllbefore" />');
     });

     jQuery('#hplSelectAll').clone().appendTo( jQuery('.hplSelectAllbefore' ));
    
 };

// ordenar produtos
function filtroOrdenaProdutos(){
    
    // jQuery('#ordena_produtos ul').each(function() {
    //     var list = jQuery(this), select = jQuery(document.createElement('select')).insertBefore(jQuery(this).hide());
    
    //     jQuery('>li a', this).each(function() {
    //         var target = jQuery(this).attr('target'),
    //         option = jQuery(document.createElement('option'))
    //             .appendTo(select)
    //             .val(this.href)
    //             .html(jQuery(this).html())
    //             .click(function(){
    //                 if(target==='_blank') {
    //                     window.open(jQuery(this).val());
    //                 }
    //                 else {
    //                     window.location.href = jQuery(this).val();
    //                 }
    //             });
    //     });
    //     list.remove();
    // });

    jQuery('#ordena_produtos ul').each(function() {
        var select = jQuery(document.createElement('select')).insertBefore(jQuery(this).hide());
        jQuery('>li a', this).each(function() {
            var a = jQuery(this).click(function() {
                if (jQuery(this).attr('target')==='_blank') {
                    window.open(this.href);
                }
                else {
                    window.location.href = this.href;
                }
            }),
            option = jQuery(document.createElement('option')).appendTo(select).val(this.href).html(jQuery(this).html()).click(function() {
                a.click();
            });
        });
    });
}


// quickview
if (jQuery('body').hasClass('quickview')) {
    jQuery('#descriptionSection').css("display", "block");
    jQuery('#abaDescricao').click(function (event) {
        jQuery('#descriptionSection').css("display", "block");
        jQuery('#characteristicSection').css("display", "none");
    });
    jQuery('#abaCaracteristica').click(function (event) {
        jQuery('#descriptionSection').css("display", "none");
        jQuery('#characteristicSection').css("display", "block");            
    })

}

// (function quickViewVejaMaisAncor(){


//     jQuery(document).ready(function(){
        
//     });
    


//     jQuery('.hproduct.show-quickview').each(function(){

//         var url = window.location.href;
//         console.log('url', url);
//         var link = jQuery(this).find('a.url').attr('href');
//         // jQuery(this).mouseenter(function(){
//         //     console.log('o link é ' + link)
//         // });

//         console.log('link', url + link);

//         jQuery(this).mouseenter(function(){
//             var teste = link;
//         });

//        // target( link );
//        jQuery(this).find('.bt-quick-look').on('click', function(){
//            console.log('2018');

       
          
//             jQuery('.veja-mais_').attr('href' , link);
//         }); 
//     });

// function target( url ){
//     jQuery('.quickview .tab-content .veja-mais_').on('click', function(){
//         jQuery('#fancybox-close, #fancybox-close-2').trigger('click');
//        window.location = url;
      
//      });
//     }


    
// })();

// afiliados
(function(){
    if(window.location.href.indexOf("afiliados") > -1) {
        jQuery('body').addClass('pagina-afiliados');
     }
})();


// link opiano detalhe no responsivo
function opniaoMobileAnchor(){
    jQuery('.product.mobile-state').each(function(){
        var opiniao = jQuery(this).find('.responsive-abas-description .aba-0').offset();
       
        jQuery('#info-product .reviewaggregate #hplAmountAssessments.anchor-opinion').on('click', function(){

            if( ! jQuery('.aba-0').hasClass('active')){
                jQuery('.resp-abas.aba-0 h2').trigger('click');
            
            }

            jQuery('html, body').animate({scrollTop:opiniao.top + 100 }, 800);
            

        });
    });
}


// look filtros

 function lookFiltros(){
//     jQuery('body.look .content #ordena_produtos fieldset').each(function(){
//         jQuery(this).append('<select />');
//         var li = jQuery(this).find('ul li');

//         for(var i = 0; i < li.length; i++){
//             console.log('i' + i);
//             var txt = jQuery(this).find('li').eq(i).text();
//             var option = document.createElement('option');
//             jQuery(this).find('select').append('<option />');
//             jQuery(this).find('select option').eq(i).text(txt);
//         }
//         for(var i = 0; i < li.length; i++){

//         }
//     });
    jQuery('.look .filters .itens-page span').text('Itens por página');

 }


 jQuery('body.look').each(function(){
    if( jQuery(this).find('#opinion').size() > 0){
        jQuery('body').addClass('avaliado');
    }else{
        jQuery('body').addClass('nao-avaliado');
    }
 });

 function carrinhoNumber(){
     
    var el = jQuery(' .basket-count-number  strong').eq(0).text();
    jQuery(' .btn-cart-mobile .qtd-cart').text(el);
 }




 
