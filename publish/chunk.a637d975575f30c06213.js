(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{172:function(t,s,i){"use strict";var e=i(28),n=i(43),a=i(44),r=i(45),o=i(80);const c=(t,s)=>{const{type:i,value:e}=s;if(e)return"percentage"===i?t*(100-e)/100:t-e};var l={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(n.a)(e.o),i19from:()=>Object(n.a)(e.xb),i19interestFree:()=>Object(n.a)(e.Kb),i19of:()=>Object(n.a)(e.sc),i19to:()=>Object(n.a)(e.Hd),i19upTo:()=>Object(n.a)(e.Qd),price(){const t=Object(a.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(r.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(a.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const s=Object(a.a)(this.product);for(let i=0;i<t.length;i++){if(Object(a.a)({...this.product,...t[i]})>s)return!0}}return!1},priceWithDiscount(){return c(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:o.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const s=t.min_installment||5,i=parseInt(this.price/s,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const s=()=>{const s=t.info&&t.info.apply_discount;if(s){const t=s.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(s).length>0}return!1};s()||t.on("info:apply_discount",s)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const s=()=>{const s=t.info&&t.info.list_payments;return!!s&&(this.updateInstallments(s.installments_option),this.updateDiscount(s.discount_option),Object.keys(s).length>0)};s()||t.on("info:list_payments",s)}}};s.a=l},178:function(t,s,i){"use strict";i.d(s,"a",(function(){return e})),i.d(s,"b",(function(){return n}));var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(" "+t._s(t.i19from)+" ")]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(" "+t._s(t.i19to)+" ")])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value",attrs:{"data-price__base":t.price}},[t.hasVariedPrices?i("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" "),t.installmentsNumber>1?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e()]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},["number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)},n=[]},179:function(t,s,i){"use strict";i.d(s,"a",(function(){return e})),i.d(s,"b",(function(){return n}));var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(s){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():i("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("body",(function(){return[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(s,e){return 1===t.body.pictures.length||1===e||t.isHovered?i("a-picture",{key:e,staticClass:"product-card__picture",attrs:{src:s,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",(function(){return[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2)]})),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",(function(){return[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]})),i("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",(function(){return[t.buyHtml?i("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),i("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?i("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",(function(){return[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}))],2)]:t._t("out-of-stock",(function(){return[i("p",{staticClass:"badge badge-dark"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[i("p",{staticClass:"badge badge-warning"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("footer",(function(){return[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2)]),t.isLoading?[t._t("default"),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),i("div",{ref:"quickview"})],2)},n=[function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}]}}]);