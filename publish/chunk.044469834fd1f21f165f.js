/*! For license information please see chunk.044469834fd1f21f165f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{240:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(32);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s={selector:"vue-portal-target-".concat(((t=21)=>{let e="",n=t;for(;n--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e})())},i=function(t){return s.selector=t},a="undefined"!=typeof window&&void 0!==("undefined"==typeof document?"undefined":r(document)),d=o.a.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(t){return{updatedNodes:t.nodes}},render:function(t){var e=this.updatedNodes&&this.updatedNodes();return e?1!==e.length||e[0].text?t(this.tag||"DIV",e):e:t()},destroyed:function(){var t=this.$el;t&&t.parentNode.removeChild(t)}}),c=o.a.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(s.selector)}},tag:{type:String,default:"DIV"}},render:function(t){if(this.disabled){var e=this.$scopedSlots&&this.$scopedSlots.default();return e?e.length<2&&!e[0].text?e:t(this.tag,e):t()}return t()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var t=this;this.$nextTick((function(){t.disabled||t.slotFn===t.$scopedSlots.default||(t.container.updatedNodes=t.$scopedSlots.default),t.slotFn=t.$scopedSlots.default}))},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(t){t?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(a)return document.querySelector(this.selector)},insertTargetEl:function(){if(a){var t=document.querySelector("body"),e=document.createElement(this.tag);e.id=this.selector.substring(1),t.appendChild(e)}},mount:function(){if(a){var t=this.getTargetEl(),e=document.createElement("DIV");this.prepend&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),this.container=new d({el:e,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.name||"portal",c),e.defaultSelector&&i(e.defaultSelector)}"undefined"!=typeof window&&window.Vue&&window.Vue===o.a&&o.a.use(l)},373:function(t,e,n){"use strict";n.r(e);n(111);var o=n(0),r=n(32),s=n(263);e.default=(t={},e="search-engine",i="search-pagination")=>{const a=document.getElementById(e);if(a){const d=document.getElementById(`${e}-dock`);let c;const l=window.storefront&&window.storefront.getScopedSlots,u=new URLSearchParams(window.location.search),p={...t.props,term:u.get("term"),brands:u.getAll("brands[]"),categories:u.getAll("categories[]"),defaultFilters:u.getAll("filters[]").reduce(((t,e)=>{const[n,o]=e.split(":");return t[n]||(t[n]=[]),t[n].push(o),t}),{})},{sort:h}=a.dataset;h&&(p.defaultSort=h),["brands","categories"].forEach((t=>{if(a.dataset[t]){try{p[t]=JSON.parse(a.dataset[t])}catch(t){return void console.error(t)}p[t]&&p[t].length<2&&(p[`isFixed${t.charAt(0).toUpperCase()}${t.slice(1)}`]=!0),p.hasPopularItems=!1}}));const{resource:f}=window.document.body.dataset;switch(f){case"brands":case"categories":if(!p[f]||!p[f].length)return void console.error(new Error(`Skipping SearchEngine with empty '${f}' filter`))}const m=document.title,g=()=>{const t=u.get("term");let e=t?`${t} ~ ${m}`:m;const n=u.get("page");if(n>1&&(e+=` (${n}) `),window.history){const t=u.toString(),{pathname:n}=window.location;window.history.pushState({pathname:n,query:t},e,`${n}?${u.toString()}`)}document.title=e};g();const w=new r.a({data:{countRequests:0,canShowItems:!d,term:p.term,page:parseInt(u.get("page"),10)||1,totalItems:0},render(h){const f=this;return t.pagination&&n.e(34).then(n.bind(null,370)).then((t=>{new r.a({render:e=>e(t.default,{props:{totalItems:f.totalItems,page:f.page},on:{"update:page"(t){f.page=t,u.set("page",t),g(),window.scroll({top:0,behavior:"smooth"})}}})}).$mount(document.getElementById(i))})),h(s.a,{attrs:{id:d?null:e},props:{...p,term:f.term,page:f.page,canLoadMore:!t.pagination,canShowItems:f.canShowItems,loadMoreSelector:d?"#search-engine-load":null},on:{"update:term"(t){f.term=t,u.set("term",t),g()},fetch({ecomSearch:t,fetching:e,isPopularItems:n}){e.then((e=>{if(n||(f.totalItems=t.getTotalCount()),d){f.countRequests++;const t=()=>{f.canShowItems=!0,Object(o.$)("#search-engine-snap").remove()};if(!f.canShowItems)if(f.countRequests>1)t();else if(e&&e.hits)if(c&&c.length===e.hits.hits.length){let n=!0;const{hits:o}=e.hits;for(let t=0;t<o.length;t++)if(!c.find(`[data-product-id="${o[t]._id}"]`).length){n=!1;break}n||t()}else t()}}))}},scopedSlots:"function"==typeof l?l(a,h,!d):void 0})}});if(d){Object(o.$)(a).append(Object(o.$)("<div>",{id:"search-engine-load"}));const t=()=>w.$mount(d);if(c=Object(o.$)("#search-engine-snap .product-item"),c.length){const e=new window.MutationObserver((()=>{clearTimeout(n),e.disconnect(),setTimeout(t,150)}));e.observe(c[0],{childList:!0});const n=setTimeout((()=>{e.disconnect(),t()}),3e3)}else t()}else w.$mount(a)}}}}]);
//# sourceMappingURL=chunk.044469834fd1f21f165f.js.map