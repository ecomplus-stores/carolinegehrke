const ecomUtils = require('@ecomplus/utils')
const search = new EcomSearch()

const apx = {
    imageProportion : function(){
        let w = $('.product-card__pictures').first().innerWidth();
        let h = w * apx_product_list.image_size;
        let root = document.documentElement;
        root.style.setProperty('--apx_product_list_height', h + "px");
    },
    pageType : function(){
        return storefront.context.resource
    }
};

$(document).ready(function(){
    apx.imageProportion();

    if($('[data-look-id]').length){
        $('[data-look-id]').each(function(){
            const me = $(this).find('.row');
            ecomClient.store({ url: '/products/'+ $(this).data('look-id') + '.json' }).then(({ data }) => { 
                
                $('<div class="col-6 kit-cover pr-0"><a href="'+ data.slug +'"><picture><img data-src="'+ data.pictures[0].zoom.url +'" alt="'+ data.name+'" class="lozad-delay fade" crossorigin="anonymous"/></picture></a></div>').appendTo(me);
                $('<div class="col-6 kit-items"></div>').appendTo(me);

                const items_id = [];
                $.each(data.kit_composition,function(a,b){
                    items_id.push(b._id);
                });
                
                search.setProductIds(items_id).fetch().then(result => {
                    $.each(result.hits.hits, function(k, v){
                        let product = v._source;
                        let mb = result.hits.hits.length - 1 != k ? 'mb-3' : '' 
                        let r = $('<div class="row align-items-center '+ mb +'"></div>');
                        r.append('<div class="col-5"><picture><img data-src="'+ product.pictures[0].zoom.url +'" alt="'+ product.name+'" class="lozad-delay fade" crossorigin="anonymous"/></picture></div>');
                        r.append('<div class="col-7"><strong>'+ product.name +'</strong><span><strong>' + ecomUtils.formatMoney(product.price) + '</strong> ou <span> XXX de XXXX</span></span><small>'+ ecomUtils.formatMoney((product.price * 0.7)) +' no <b>ATACADO</b></small></div>')
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
    
})

$(window).resize(function(){
    apx.imageProportion();
})

