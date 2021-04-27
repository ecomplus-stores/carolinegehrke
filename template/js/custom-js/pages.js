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
})

$(window).resize(function(){
    apx.imageProportion();
})

