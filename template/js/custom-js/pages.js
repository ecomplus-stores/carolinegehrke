!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

import Vue from 'vue'
const ecomUtils = require('@ecomplus/utils')
const search = new EcomSearch()
const atacado = [];


var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation.target)
        if (mutation.type == "attributes") {
            if($(mutation.target).data('price__base')){
                apx.updateDiscount(mutation.target);
            }
        }
    });
});
if($('#content #search-engine').length > 0){
    let searchMain = document.querySelector('#content #search-engine');
    var observerSearch = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
        if(mutation.type == "childList"){
            setTimeout(apx.imageProportion(), 500);
            
        }
            //console.log(mutation.type);
        });
    });
    var config = { attributes: true, childList: true, characterData: true };
    observerSearch.observe(searchMain, config);
}
//observer.disconnect();

const apx = {
    imageProportion : function(){
        let w = $('.product-card__pictures').first().innerWidth();
        let h = w * apx_product_list.image_size;
        let root = document.documentElement;
        root.style.setProperty('--apx_product_list_height', h + "px");

        console.log('eita')
        $('.product-card__name').equalHeights();

    },
    pageType : function(){
        return storefront.context.resource
    },
    setDiscount : function(oObj){
        atacado.push(parseFloat(oObj.available_extra_discount.value)/100);
        setTimeout(function(){
            $('[data-price__base]').each(function(){
               let discountPrice =  parseFloat($(this).data('price__base')) * atacado[0];
               $(this).after('<span class="apx-discount__rule d-block">'+ ecomUtils.formatMoney(discountPrice)+' no <b>ATACADO</b></span>');
            });
            
            $("[data-price__base]").bind("DOMSubtreeModified", function() {
                apx.updateDiscount($(this));
            });
        }, 2000);
    },
    updateDiscount : function(oObj){
        let discountPrice =  parseFloat(parseFloat(oObj.text().trim().replace('R$','').replace('.','').replace(',','.').replace(' ','')).toFixed(2)) * atacado[0];
        oObj.next('.apx-discount__rule').html(ecomUtils.formatMoney(discountPrice)+' no <b>ATACADO</b>');
    }    
};

$('.apx_newsletter form').submit(function(e){
    e.preventDefault();
    var news = [];
    news.form = $(this);
    news.mail = $(this).find('input[name="email"]').val();
    news.name = $(this).find('input[name="name"]').val();
    axios.post('https://us-central1-marketingtools-ecomplus.cloudfunctions.net/app/alpix/apx_newsletter', {
        storeId : storefront.settings.store_id,
        mail : news.mail,
        fullname : news.name
    })
    .then(function(response){
        alert(response.data.msg)
        if(!response.data.error){
            news.form.find('input[type="text"],input[type="email"]').val('')
        }
    })
});

$('.apx_form:not(.avise-me)').submit(function(e){
    e.preventDefault();
    var mail = [];
    mail.form = $(this);
    mail.destination = $(this).find('[name="destination]').val() != undefined ? $(this).find('input[name="destination"]').val() : "contato@lola-b.com";
    mail.replyTo = $(this).find('input[name="email"]').val();
    mail.subject = $(this).find('input[name="subject"]').val();
    mail.body = "";

    mail.form.find('input:not([type="hidden"]), textarea').each(function(){
        mail.body = mail.body + $(this).closest('div').find('label').text() + ': ' + $(this).val() + '<br>';
    });

    axios.post('https://us-central1-marketingtools-ecomplus.cloudfunctions.net/app/alpix/apx_sendmail', {
        storeId : storefront.settings.store_id,
        destination : mail.destination,
        subject : mail.subject,
        content : mail.body,
        reply_mail: mail.replyTo
    })
    .then(function(response){
        alert(response.data.msg)
        if(!response.data.error){
            mail.form.find('input[type="text"],input[type="email"],textarea,input[type="tel"]').val('')
        }
    })    
});

$('body').on('click','.avise_me button',function(e){
    //e.preventDefault();
    var mail = [];
    mail.form = $(this).closest('.avise_me');
    mail.destination = mail.form.find('[name="destination]').val() != undefined ? mail.form.find('input[name="destination"]').val() : "contato@lola-b.com";
    mail.replyTo = mail.form.find('input[name="email"]').val();
    mail.subject = 'Avise-me - ' + mail.replyTo;
    mail.body = "";

    mail.form.find('input,textarea').each(function(){
        mail.body = mail.body + $(this).closest('div').find('label').text() + ': ' + $(this).val() + '<br>';
    });

    axios.post('https://us-central1-marketingtools-ecomplus.cloudfunctions.net/app/alpix/apx_sendmail', {
        storeId : storefront.settings.store_id,
        destination : mail.destination,
        subject : mail.subject,
        content : mail.body,
        reply_mail: mail.replyTo
    })
    .then(function(response){
        alert(response.data.msg)
        if(!response.data.error){
            mail.form.find('input[type="text"],input[type="email"],textarea,input[type="tel"]').val('')
        }
    })    
});


$(document).ready(function(){
    if(window.innerWidth < 990){
        $('.header__nav .dropdown > a').click(function(e){
            e.preventDefault();
            $(this).closest('li').find('.dropdown-menu').toggle();
            $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
        })
    }

    // apx.imageProportion();
    setTimeout(apx.imageProportion(), 500);
    
    //ecomClient.modules({ url: '/apply_discount' })
    //.then(({ data }) => 
        //apx.setDiscount(data.result[0].response)   
    //)
    //.catch(console.error)

    if($('[data-look-id]').length){
        $('[data-look-id]').each(function(){
            const me = $(this).find('.row');
            ecomClient.store({ url: '/products/'+ $(this).data('look-id') + '.json' }).then(({ data }) => { 
                
                $('<div class="col-md-6 col-12 kit-cover pr-md-0 pb-md-0 pb-4"><a href="'+ data.slug +'"><picture><img data-src="'+ data.pictures[0].zoom.url +'" alt="'+ data.name+'" class="lozad-delay fade" crossorigin="anonymous"/></picture></a></div>').appendTo(me);
                $('<div class="col-md-6 col-12 kit-items"></div>').appendTo(me);

                const items_id = [];
                $.each(data.kit_composition,function(a,b){
                    items_id.push(b._id);
                });
                
                search.setProductIds(items_id).fetch().then(result => {
                    console.log(result)
                    $.each(result.hits.hits, function(k, v){
                        let product = v._source;
                        let mb = result.hits.hits.length - 1 != k ? 'mb-3' : '' 
                        let r = $('<a href="/'+ product.slug +'" class="row look-product-item align-items-center '+ mb +'"></a>');
                        let parcelas = 3;
                        r.append('<div class="col-5 pr-0 pr-md-3"><picture><img data-src="'+ product.pictures[0].zoom.url +'" alt="'+ product.name+'" class="lozad-delay fade" crossorigin="anonymous"/></picture></div>');
                        //r.append('<div class="col-7"><strong>'+ product.name +'</strong><span><strong>' + ecomUtils.formatMoney(product.price) + '</strong> ou <span> '+ parcelas +' de '+ecomUtils.formatMoney(product.price / parcelas)+'</span></span><small>'+ ecomUtils.formatMoney((product.price * atacado[0])) +' no <b>ATACADO</b></small></div>')
                        r.append('<div class="col-7"><strong>'+ product.name +'</strong><span><strong>' + ecomUtils.formatMoney(product.price) + '</strong> ou <span> '+ parcelas +' de '+ecomUtils.formatMoney(product.price / parcelas)+'</span></span></div>')
                        r.appendTo(me.find('.kit-items'));
                    });
                })
                .catch(error => {
                    console.error(error)
                    if (error.response) {
                        console.log(error.response)
                    }
                })  
            }).catch(console.error)
        })       
    }       
});

$(window).resize(function(){
    setTimeout(apx.imageProportion(), 500);
});

$('#mobile-search-btn').click(function(){
    $('.header__search-input').val('');
    if($('#search-bar').hasClass('apx_visible')){
        $('body').attr('style','')
    }
    $('#search-bar').toggleClass('apx_visible');
})
$('.header__search-input').keyup(function(){
   $('body .search__input').val($(this).val())[0].dispatchEvent(new Event('input'));
});
$('body').click(function(e){
    if($(e.target).closest('#header').length == 0 && $('.apx_visible').length == 1){
        $('#instant-search .search__status .close').click();
        $('#mobile-search-btn').click();
    }
});


