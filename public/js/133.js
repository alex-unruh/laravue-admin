(self.webpackChunk=self.webpackChunk||[]).push([[133],{3019:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(9669),n=o.n(a);function l(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o,a;return t=e,(o=[{key:"getProductsSmall",value:function(){return n().get("assets/layout/data/products-small.json").then((function(e){return e.data.data}))}},{key:"getProducts",value:function(){return n().get("assets/layout/data/products.json").then((function(e){return e.data.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return n().get("assets/layout/data/products-orders-small.json").then((function(e){return e.data.data}))}}])&&l(t.prototype,o),a&&l(t,a),e}()},3771:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(3645),n=o.n(a)()((function(e){return e[1]}));n.push([e.id,".p-toast.p-toast-topright{top:70px;z-index:1000}",""]);const l=n},1156:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(3645),n=o.n(a)()((function(e){return e[1]}));n.push([e.id,".table-header[data-v-1254341d]{display:flex;justify-content:space-between}.product-image[data-v-1254341d]{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);width:100px}.p-dialog .product-image[data-v-1254341d]{display:block;margin:0 auto 2rem;width:150px}.confirmation-content[data-v-1254341d]{align-items:center;display:flex;justify-content:center}.product-badge[data-v-1254341d]{border-radius:2px;font-size:12px;font-weight:700;letter-spacing:.3px;padding:.25em .5rem;text-transform:uppercase}.product-badge.status-instock[data-v-1254341d]{background:#c8e6c9;color:#256029}.product-badge.status-outofstock[data-v-1254341d]{background:#ffcdd2;color:#c63737}.product-badge.status-lowstock[data-v-1254341d]{background:#feedaf;color:#8a5340}[data-v-1254341d] .p-toolbar{flex-wrap:wrap}[data-v-1254341d] .p-toolbar .p-button{margin-bottom:.25rem}",""]);const l=n},6344:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(3645),n=o.n(a)()((function(e){return e[1]}));n.push([e.id,".layout-footer[data-v-1f4c48b6]{text-align:center}",""]);const l=n},5891:(e,t,o)=>{"use strict";o.d(t,{Z:()=>be});var a=o(5166),n={class:"layout-logo"},l={class:"layout-main"};var r={class:"layout-topbar p-shadow-5"},i=(0,a.createVNode)("span",{class:"pi pi-bars"},null,-1),c={class:"layout-topbar-icons"},u={class:"layout-topbar-search"},s=(0,a.createVNode)("span",{class:"layout-topbar-search-icon pi pi-search"},null,-1),d=(0,a.createStaticVNode)('<button class="p-link"><span class="layout-topbar-item-text">Events</span><span class="layout-topbar-icon pi pi-calendar"></span></button><button class="p-link"><span class="layout-topbar-item-text">User</span><span class="layout-topbar-icon pi pi-user"></span></button>',2),p=(0,a.createVNode)("span",{class:"layout-topbar-item-text"},"Settings",-1),m=(0,a.createVNode)("span",{class:"layout-topbar-icon pi pi-cog"},null,-1);const f={methods:{onMenuToggle:function(e){this.$emit("menu-toggle",e)},onToggleConfig:function(e){this.$emit("configToggle",e)}},render:function(e,t,o,n,l,f){var g=(0,a.resolveComponent)("InputText");return(0,a.openBlock)(),(0,a.createBlock)("div",r,[(0,a.createVNode)("button",{class:"p-link layout-menu-button",onClick:t[1]||(t[1]=function(){return f.onMenuToggle&&f.onMenuToggle.apply(f,arguments)})},[i]),(0,a.createVNode)("div",c,[(0,a.createVNode)("span",u,[(0,a.createVNode)(g,{type:"text",placeholder:"Search"}),s]),d,(0,a.createVNode)("button",{class:"p-link",onClick:t[2]||(t[2]=function(){return f.onToggleConfig&&f.onToggleConfig.apply(f,arguments)})},[p,m])])])}},g=f;var v=(0,a.withScopeId)("data-v-03553fc6");(0,a.pushScopeId)("data-v-03553fc6");var y={class:"layout-profile"},h=(0,a.createVNode)("div",null,[(0,a.createVNode)("img",{src:"assets/layout/images/icon.svg",alt:""})],-1),b=(0,a.createVNode)("span",{class:"username"},"Alexandre Unruh",-1),V=(0,a.createVNode)("i",{class:"pi pi-fw pi-cog"},null,-1),N=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-user"}),(0,a.createVNode)("span",null,"Account")])],-1),C=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-inbox"}),(0,a.createVNode)("span",null,"Notifications"),(0,a.createVNode)("span",{class:"menuitem-badge"},"2")])],-1),k=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-power-off"}),(0,a.createVNode)("span",null,"Logout")])],-1);(0,a.popScopeId)();var S=v((function(e,t,o,n,l,r){return(0,a.openBlock)(),(0,a.createBlock)("div",y,[h,(0,a.createVNode)("button",{class:"p-link layout-profile-link",onClick:t[1]||(t[1]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},[b,V]),(0,a.createVNode)(a.Transition,{name:"layout-submenu-wrapper"},{default:v((function(){return[(0,a.withDirectives)((0,a.createVNode)("ul",null,[N,C,k],512),[[a.vShow,l.expanded]])]})),_:1})])}));const M={data:function(){return{expanded:!1}},methods:{onClick:function(e){this.expanded=!this.expanded,e.preventDefault()}}};M.render=S,M.__scopeId="data-v-03553fc6";const w=M;var x={class:"layout-menu-container"};var D={key:0},P={key:0,class:"arrow"},B={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},I={key:1,class:"menuitem-badge"},A={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},T={key:1,class:"menuitem-badge"};const _={name:"appsubmenu",props:{items:Array,root:{type:Boolean,default:!1}},data:function(){return{activeIndex:null,currentRoute:null}},methods:{onMenuItemClick:function(e,t,o){t.disabled?e.preventDefault():(t.to||t.url||e.preventDefault(),this.currentRoute=t.to,t.command&&t.command({originalEvent:e,item:t}),this.activeIndex=o===this.activeIndex?null:o,this.$emit("menuitem-click",{originalEvent:e,item:t}))},visible:function(e){return"function"==typeof e.visible?e.visible():!1!==e.visible},getClasses:function(e){var t=this.currentRoute==e.to;return[e.class,"p-ripple",{"router-link-active":t,"router-link-exact-active":t,"p-disabled":e.disabled}]}},render:function(e,t,o,n,l,r){var i=(0,a.resolveComponent)("inertia-link"),c=(0,a.resolveComponent)("appsubmenu"),u=(0,a.resolveDirective)("ripple");return o.items?((0,a.openBlock)(),(0,a.createBlock)("ul",D,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(o.items,(function(n,s){return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[r.visible(n)&&!n.separator?((0,a.openBlock)(),(0,a.createBlock)("li",{key:s,class:[{"active-menuitem":l.activeIndex===s&&!n.to&&!n.disabled}],role:"none"},[n.items&&!0===o.root?((0,a.openBlock)(),(0,a.createBlock)("div",P)):(0,a.createCommentVNode)("",!0),e.route().has(n.to)?((0,a.openBlock)(),(0,a.createBlock)(i,{key:1,href:e.route(n.to),class:r.getClasses(n),onClick:function(e){return r.onMenuItemClick(e,n,s)},"aria-current":e.route().current(n.to)?"page":"",target:n.target,exact:""},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("i",{class:n.icon},null,2),(0,a.createVNode)("span",null,(0,a.toDisplayString)(n.label),1),n.items?((0,a.openBlock)(),(0,a.createBlock)("i",B)):(0,a.createCommentVNode)("",!0),n.badge?((0,a.openBlock)(),(0,a.createBlock)("span",I,(0,a.toDisplayString)(n.badge),1)):(0,a.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-current","target"])):(0,a.createCommentVNode)("",!0),n.to?(0,a.createCommentVNode)("",!0):(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createBlock)("a",{key:2,href:n.url||"#",style:n.style,class:[n.class,"p-ripple",{"p-disabled":n.disabled}],onClick:function(e){return r.onMenuItemClick(e,n,s)},target:n.target,role:"menuitem"},[(0,a.createVNode)("i",{class:n.icon},null,2),(0,a.createVNode)("span",null,(0,a.toDisplayString)(n.label),1),n.items?((0,a.openBlock)(),(0,a.createBlock)("i",A)):(0,a.createCommentVNode)("",!0),n.badge?((0,a.openBlock)(),(0,a.createBlock)("span",T,(0,a.toDisplayString)(n.badge),1)):(0,a.createCommentVNode)("",!0)],14,["href","onClick","target"])),[[u]]),(0,a.createVNode)(a.Transition,{name:"layout-submenu-wrapper"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)(c,{items:r.visible(n)&&n.items,onMenuitemClick:t[1]||(t[1]=function(t){return e.$emit("menuitem-click",t)})},null,8,["items"]),[[a.vShow,l.activeIndex===s]])]})),_:2},1024)],2)):(0,a.createCommentVNode)("",!0),r.visible(n)&&n.separator?((0,a.openBlock)(),(0,a.createBlock)("li",{class:"p-menu-separator",style:n.style,key:"separator"+s,role:"separator"},null,4)):(0,a.createCommentVNode)("",!0)],64)})),256))])):(0,a.createCommentVNode)("",!0)}},L={props:{model:Array},methods:{onMenuItemClick:function(e){this.$emit("menuitem-click",e)}},components:{AppSubmenu:_},render:function(e,t,o,n,l,r){var i=(0,a.resolveComponent)("AppSubmenu");return(0,a.openBlock)(),(0,a.createBlock)("div",x,[(0,a.createVNode)(i,{items:o.model,class:"layout-menu",root:!0,onMenuitemClick:r.onMenuItemClick},null,8,["items","onMenuitemClick"])])}},U=L;var O=(0,a.createVNode)("i",{class:"pi pi-times"},null,-1),$={class:"layout-config-content"},j=(0,a.createVNode)("h5",{style:{"margin-top":"0"}},"Input Style",-1),R={class:"p-formgroup-inline"},Z={class:"p-field-radiobutton"},F=(0,a.createVNode)("label",{for:"input_outlined"},"Outlined",-1),E={class:"p-field-radiobutton"},q=(0,a.createVNode)("label",{for:"input_filled"},"Filled",-1),W=(0,a.createVNode)("h5",null,"Ripple Effect",-1),z=(0,a.createVNode)("h5",null,"Menu Type",-1),K={class:"p-formgroup-inline"},Y={class:"p-field-radiobutton"},Q=(0,a.createVNode)("label",{for:"static"},"Static",-1),G={class:"p-field-radiobutton"},H=(0,a.createVNode)("label",{for:"overlay"},"Overlay",-1),J=(0,a.createVNode)("h5",null,"Menu Color",-1),X={class:"p-formgroup-inline"},ee={class:"p-field-radiobutton"},te=(0,a.createVNode)("label",{for:"dark"},"Dark",-1),oe={class:"p-field-radiobutton"},ae=(0,a.createVNode)("label",{for:"light"},"Light",-1);const ne={props:{layoutMode:{type:String,default:null},layoutColorMode:{type:String,default:null}},data:function(){return{active:!1,d_layoutMode:this.layoutMode,d_layoutColorMode:this.layoutColorMode}},watch:{$route:function(){this.active&&(this.active=!1,this.unbindOutsideClickListener())},layoutMode:function(e){this.d_layoutMode=e},layoutColorMode:function(e){this.d_layoutColorMode=e}},outsideClickListener:null,methods:{toggleConfigurator:function(e){this.active=!this.active,e.preventDefault()},onToggleConfigurator:function(e){this.toggleConfigurator(e)},hideConfigurator:function(e){this.active=!1,e.preventDefault()},changeInputStyle:function(e){this.$appState.inputStyle=e},changeRipple:function(e){this.$primevue.config.ripple=e},changeLayout:function(e,t){this.$emit("layout-change",t),e.preventDefault()},changeLayoutColor:function(e,t){this.$emit("layout-color-change",t),e.preventDefault()}},computed:{containerClass:function(){return["layout-config",{"layout-config-active":this.active}]},rippleActive:function(){return this.$primevue.config.ripple},inputStyle:function(){return this.$appState.inputStyle}},render:function(e,t,o,n,l,r){var i=(0,a.resolveComponent)("RadioButton"),c=(0,a.resolveComponent)("InputSwitch");return(0,a.openBlock)(),(0,a.createBlock)("div",{id:"layout-config",class:r.containerClass},[(0,a.createVNode)("a",{href:"#",class:"layout-config-close",onClick:t[1]||(t[1]=function(){return r.hideConfigurator&&r.hideConfigurator.apply(r,arguments)})},[O]),(0,a.createVNode)("div",$,[j,(0,a.createVNode)("div",R,[(0,a.createVNode)("div",Z,[(0,a.createVNode)(i,{id:"input_outlined",name:"inputstyle",value:"outlined",modelValue:r.inputStyle,"onUpdate:modelValue":r.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),F]),(0,a.createVNode)("div",E,[(0,a.createVNode)(i,{id:"input_filled",name:"inputstyle",value:"filled",modelValue:r.inputStyle,"onUpdate:modelValue":r.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),q])]),W,(0,a.createVNode)(c,{modelValue:r.rippleActive,"onUpdate:modelValue":r.changeRipple},null,8,["modelValue","onUpdate:modelValue"]),z,(0,a.createVNode)("div",K,[(0,a.createVNode)("div",Y,[(0,a.createVNode)(i,{id:"static",name:"layoutMode",value:"static",modelValue:l.d_layoutMode,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.d_layoutMode=e}),onChange:t[3]||(t[3]=function(e){return r.changeLayout(e,"static")})},null,8,["modelValue"]),Q]),(0,a.createVNode)("div",G,[(0,a.createVNode)(i,{id:"overlay",name:"layoutMode",value:"overlay",modelValue:l.d_layoutMode,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.d_layoutMode=e}),onChange:t[5]||(t[5]=function(e){return r.changeLayout(e,"overlay")})},null,8,["modelValue"]),H])]),J,(0,a.createVNode)("div",X,[(0,a.createVNode)("div",ee,[(0,a.createVNode)(i,{id:"dark",name:"layoutColorMode",value:"dark",modelValue:l.d_layoutColorMode,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.d_layoutColorMode=e}),onChange:t[7]||(t[7]=function(e){return r.changeLayoutColor(e,"dark")})},null,8,["modelValue"]),te]),(0,a.createVNode)("div",oe,[(0,a.createVNode)(i,{id:"light",name:"layoutColorMode",value:"light",modelValue:l.d_layoutColorMode,"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.d_layoutColorMode=e}),onChange:t[9]||(t[9]=function(e){return r.changeLayoutColor(e,"light")})},null,8,["modelValue"]),ae])])])],2)}},le=ne;var re=(0,a.withScopeId)("data-v-1f4c48b6");(0,a.pushScopeId)("data-v-1f4c48b6");var ie={class:"layout-footer"},ce=(0,a.createVNode)("span",{class:"footer-text",style:{"margin-right":"5px"}},"Unruh Solutions - © All rights reserved",-1),ue=(0,a.createVNode)("span",{class:"footer-text",style:{"margin-left":"5px"}},null,-1);(0,a.popScopeId)();var se=re((function(e,t,o,n,l,r){return(0,a.openBlock)(),(0,a.createBlock)("div",ie,[ce,ue])}));const de={name:"AppFooter"};var pe=o(3379),me=o.n(pe),fe=o(6344),ge={insert:"head",singleton:!1};me()(fe.Z,ge);fe.Z.locals;de.render=se,de.__scopeId="data-v-1f4c48b6";const ve={data:function(){return{layoutMode:"static",layoutColorMode:"dark",staticMenuInactive:!1,overlayMenuActive:!1,mobileMenuActive:!1,menu:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:"dashboard"},{label:"Media",icon:"pi pi-fw pi-images",to:"media"},{label:"Users",icon:"pi pi-fw pi-users",to:"users"},{label:"Categories",icon:"pi pi-fw pi-list",to:"categories"},{label:"Posts",icon:"pi pi-fw pi-book",to:"posts"},{label:"Settings",icon:"pi pi-fw pi-cog",to:"settings"}]}},methods:{onToggleConfig:function(e){this.$refs.appConfig.toggleConfigurator(e)},onWrapperClick:function(){this.menuClick||(this.overlayMenuActive=!1,this.mobileMenuActive=!1),this.menuClick=!1},onMenuToggle:function(){this.menuClick=!0,this.isDesktop()?"overlay"===this.layoutMode?(!0===this.mobileMenuActive&&(this.overlayMenuActive=!0),this.overlayMenuActive=!this.overlayMenuActive,this.mobileMenuActive=!1):"static"===this.layoutMode&&(this.staticMenuInactive=!this.staticMenuInactive):this.mobileMenuActive=!this.mobileMenuActive,event.preventDefault()},onSidebarClick:function(){this.menuClick=!0},onMenuItemClick:function(e){e.item&&!e.item.items&&(this.overlayMenuActive=!1,this.mobileMenuActive=!1)},onLayoutChange:function(e){this.layoutMode=e},onLayoutColorChange:function(e){this.layoutColorMode=e},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},isDesktop:function(){return window.innerWidth>1024},isSidebarVisible:function(){return!this.isDesktop()||("static"===this.layoutMode?!this.staticMenuInactive:"overlay"!==this.layoutMode||this.overlayMenuActive)}},computed:{containerClass:function(){return["layout-wrapper",{"layout-overlay":"overlay"===this.layoutMode,"layout-static":"static"===this.layoutMode,"layout-static-sidebar-inactive":this.staticMenuInactive&&"static"===this.layoutMode,"layout-overlay-sidebar-active":this.overlayMenuActive&&"overlay"===this.layoutMode,"layout-mobile-sidebar-active":this.mobileMenuActive,"p-input-filled":"filled"===this.$appState.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},sidebarClass:function(){return["layout-sidebar",{"layout-sidebar-dark":"dark"===this.layoutColorMode,"layout-sidebar-light":"light"===this.layoutColorMode}]},logo:function(){return"assets/layout/images/logo_unruh_small.png"}},beforeUpdate:function(){this.mobileMenuActive?this.addClass(document.body,"body-overflow-hidden"):this.removeClass(document.body,"body-overflow-hidden")},components:{AppTopBar:g,AppProfile:w,AppMenu:U,AppConfig:le,AppFooter:de}};var ye=o(3771),he={insert:"head",singleton:!1};me()(ye.Z,he);ye.Z.locals;ve.render=function(e,t,o,r,i,c){var u=(0,a.resolveComponent)("AppTopBar"),s=(0,a.resolveComponent)("inertia-link"),d=(0,a.resolveComponent)("AppProfile"),p=(0,a.resolveComponent)("AppMenu"),m=(0,a.resolveComponent)("AppConfig"),f=(0,a.resolveComponent)("AppFooter");return(0,a.openBlock)(),(0,a.createBlock)("div",{class:c.containerClass,onClick:t[2]||(t[2]=function(){return c.onWrapperClick&&c.onWrapperClick.apply(c,arguments)})},[(0,a.createVNode)(u,{onMenuToggle:c.onMenuToggle,onConfigToggle:c.onToggleConfig},null,8,["onMenuToggle","onConfigToggle"]),(0,a.createVNode)(a.Transition,{name:"layout-sidebar"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)("div",{class:c.sidebarClass,onClick:t[1]||(t[1]=function(){return c.onSidebarClick&&c.onSidebarClick.apply(c,arguments)})},[(0,a.createVNode)("div",n,[(0,a.createVNode)(s,{href:"/"},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("img",{alt:"Logo",src:c.logo,style:{width:"50%"}},null,8,["src"])]})),_:1})]),(0,a.createVNode)(d),(0,a.createVNode)(p,{model:i.menu,onMenuitemClick:c.onMenuItemClick},null,8,["model","onMenuitemClick"])],2),[[a.vShow,c.isSidebarVisible()]])]})),_:1}),(0,a.createVNode)("div",l,[(0,a.renderSlot)(e.$slots,"default")]),(0,a.createVNode)(m,{layoutMode:i.layoutMode,ref:"appConfig",layoutColorMode:i.layoutColorMode,onLayoutChange:c.onLayoutChange,onLayoutColorChange:c.onLayoutColorChange},null,8,["layoutMode","layoutColorMode","onLayoutChange","onLayoutColorChange"]),(0,a.createVNode)(f)],2)};const be=ve},133:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>ue});var a=o(5166),n=(0,a.withScopeId)("data-v-1254341d");(0,a.pushScopeId)("data-v-1254341d");var l={class:"p-grid crud-demo"},r={class:"p-col-12"},i={class:"p-col-12"},c={class:"card"},u={class:"table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between"},s=(0,a.createVNode)("h5",{class:"p-m-0"},"Manage Mídia",-1),d={class:"p-input-icon-left"},p=(0,a.createVNode)("i",{class:"pi pi-search"},null,-1),m=(0,a.createVNode)("span",{class:"p-column-title"},"Code",-1),f=(0,a.createVNode)("span",{class:"p-column-title"},"Name",-1),g=(0,a.createVNode)("span",{class:"p-column-title"},"Image",-1),v=(0,a.createVNode)("span",{class:"p-column-title"},"Price",-1),y=(0,a.createVNode)("span",{class:"p-column-title"},"Category",-1),h=(0,a.createVNode)("span",{class:"p-column-title"},"Rating",-1),b=(0,a.createVNode)("span",{class:"p-column-title"},"Status",-1),V={class:"p-field"},N=(0,a.createVNode)("label",{for:"name"},"Name",-1),C={key:0,class:"p-invalid"},k={class:"p-field"},S=(0,a.createVNode)("label",{for:"description"},"Description",-1),M={class:"p-field"},w=(0,a.createVNode)("label",{for:"inventoryStatus",class:"p-mb-3"},"Inventory Status",-1),x={key:0},D={key:1},P={key:2},B={class:"p-field"},I=(0,a.createVNode)("label",{class:"p-mb-3"},"Category",-1),A={class:"p-formgrid p-grid"},T={class:"p-field-radiobutton p-col-6"},_=(0,a.createVNode)("label",{for:"category1"},"Accessories",-1),L={class:"p-field-radiobutton p-col-6"},U=(0,a.createVNode)("label",{for:"category2"},"Clothing",-1),O={class:"p-field-radiobutton p-col-6"},$=(0,a.createVNode)("label",{for:"category3"},"Electronics",-1),j={class:"p-field-radiobutton p-col-6"},R=(0,a.createVNode)("label",{for:"category4"},"Fitness",-1),Z={class:"p-formgrid p-grid"},F={class:"p-field p-col"},E=(0,a.createVNode)("label",{for:"price"},"Price",-1),q={class:"p-field p-col"},W=(0,a.createVNode)("label",{for:"quantity"},"Quantity",-1),z={class:"confirmation-content"},K=(0,a.createVNode)("i",{class:"pi pi-exclamation-triangle p-mr-3",style:{"font-size":"2rem"}},null,-1),Y={key:0},Q=(0,a.createTextVNode)("Are you sure you want to delete "),G=(0,a.createTextVNode)("?"),H={class:"confirmation-content"},J=(0,a.createVNode)("i",{class:"pi pi-exclamation-triangle p-mr-3",style:{"font-size":"2rem"}},null,-1),X={key:0};(0,a.popScopeId)();var ee=n((function(e,t,o,ee,te,oe){var ae=(0,a.resolveComponent)("Breadcrumb"),ne=(0,a.resolveComponent)("Toast"),le=(0,a.resolveComponent)("Button"),re=(0,a.resolveComponent)("FileUpload"),ie=(0,a.resolveComponent)("Toolbar"),ce=(0,a.resolveComponent)("InputText"),ue=(0,a.resolveComponent)("Column"),se=(0,a.resolveComponent)("Rating"),de=(0,a.resolveComponent)("DataTable"),pe=(0,a.resolveComponent)("Textarea"),me=(0,a.resolveComponent)("Dropdown"),fe=(0,a.resolveComponent)("RadioButton"),ge=(0,a.resolveComponent)("InputNumber"),ve=(0,a.resolveComponent)("Dialog");return(0,a.openBlock)(),(0,a.createBlock)("div",l,[(0,a.createVNode)("div",r,[(0,a.createVNode)(ae,{model:te.breadcrumb,title:te.title,icon:te.icon},null,8,["model","title","icon"])]),(0,a.createVNode)("div",i,[(0,a.createVNode)("div",c,[(0,a.createVNode)(ne),(0,a.createVNode)(ie,{class:"p-mb-4"},{left:n((function(){return[(0,a.createVNode)(le,{label:"New",icon:"pi pi-plus",class:"p-button-success p-mr-2",onClick:oe.openNew},null,8,["onClick"]),(0,a.createVNode)(le,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",onClick:oe.confirmDeleteSelected,disabled:!te.selectedProducts||!te.selectedProducts.length},null,8,["onClick","disabled"])]})),right:n((function(){return[(0,a.createVNode)(re,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",class:"p-mr-2 p-d-inline-block"}),(0,a.createVNode)(le,{label:"Export",icon:"pi pi-upload",class:"p-button-help",onClick:t[1]||(t[1]=function(e){return oe.exportCSV(e)})})]})),_:1}),(0,a.createVNode)(de,{ref:"dt",value:te.products,selection:te.selectedProducts,"onUpdate:selection":t[3]||(t[3]=function(e){return te.selectedProducts=e}),dataKey:"id",paginator:!0,rows:10,filters:te.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:n((function(){return[(0,a.createVNode)("div",u,[s,(0,a.createVNode)("span",d,[p,(0,a.createVNode)(ce,{modelValue:te.filters.global,"onUpdate:modelValue":t[2]||(t[2]=function(e){return te.filters.global=e}),placeholder:"Search..."},null,8,["modelValue"])])])]})),default:n((function(){return[(0,a.createVNode)(ue,{selectionMode:"multiple",headerStyle:"width: 3rem"}),(0,a.createVNode)(ue,{field:"code",header:"Code",sortable:!0},{body:n((function(e){return[m,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.data.code),1)]})),_:1}),(0,a.createVNode)(ue,{field:"name",header:"Name",sortable:!0},{body:n((function(e){return[f,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.data.name),1)]})),_:1}),(0,a.createVNode)(ue,{header:"Image"},{body:n((function(e){return[g,(0,a.createVNode)("img",{src:"assets/layout/images/product/"+e.data.image,alt:e.data.image,class:"product-image"},null,8,["src","alt"])]})),_:1}),(0,a.createVNode)(ue,{field:"price",header:"Price",sortable:!0},{body:n((function(e){return[v,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(oe.formatCurrency(e.data.price)),1)]})),_:1}),(0,a.createVNode)(ue,{field:"category",header:"Category",sortable:!0},{body:n((function(e){return[y,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(oe.formatCurrency(e.data.category)),1)]})),_:1}),(0,a.createVNode)(ue,{field:"rating",header:"Reviews",sortable:!0},{body:n((function(e){return[h,(0,a.createVNode)(se,{modelValue:e.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]})),_:1}),(0,a.createVNode)(ue,{field:"inventoryStatus",header:"Status",sortable:!0},{body:n((function(e){return[b,(0,a.createVNode)("span",{class:"product-badge status-"+(e.data.inventoryStatus?e.data.inventoryStatus.toLowerCase():"")},(0,a.toDisplayString)(e.data.inventoryStatus),3)]})),_:1}),(0,a.createVNode)(ue,null,{body:n((function(e){return[(0,a.createVNode)(le,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success p-mr-2",onClick:function(t){return oe.editProduct(e.data)}},null,8,["onClick"]),(0,a.createVNode)(le,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:function(t){return oe.confirmDeleteProduct(e.data)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value","selection","filters"]),(0,a.createVNode)(ve,{visible:te.productDialog,"onUpdate:visible":t[13]||(t[13]=function(e){return te.productDialog=e}),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:n((function(){return[(0,a.createVNode)(le,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:oe.hideDialog},null,8,["onClick"]),(0,a.createVNode)(le,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:oe.saveProduct},null,8,["onClick"])]})),default:n((function(){return[te.product.image?((0,a.openBlock)(),(0,a.createBlock)("img",{key:0,src:"assets/demo/images/product/"+te.product.image,alt:te.product.image,class:"product-image"},null,8,["src","alt"])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)("div",V,[N,(0,a.createVNode)(ce,{id:"name",modelValue:te.product.name,"onUpdate:modelValue":t[4]||(t[4]=function(e){return te.product.name=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:{"p-invalid":te.submitted&&!te.product.name}},null,8,["modelValue","class"]),te.submitted&&!te.product.name?((0,a.openBlock)(),(0,a.createBlock)("small",C,"Name is required.")):(0,a.createCommentVNode)("",!0)]),(0,a.createVNode)("div",k,[S,(0,a.createVNode)(pe,{id:"description",modelValue:te.product.description,"onUpdate:modelValue":t[5]||(t[5]=function(e){return te.product.description=e}),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),(0,a.createVNode)("div",M,[w,(0,a.createVNode)(me,{id:"inventoryStatus",modelValue:te.product.inventoryStatus,"onUpdate:modelValue":t[6]||(t[6]=function(e){return te.product.inventoryStatus=e}),options:te.statuses,optionLabel:"label",placeholder:"Select a Status"},{value:n((function(e){return[e.value&&e.value.value?((0,a.openBlock)(),(0,a.createBlock)("div",x,[(0,a.createVNode)("span",{class:"product-badge status-"+e.value.value},(0,a.toDisplayString)(e.value.label),3)])):e.value&&!e.value.value?((0,a.openBlock)(),(0,a.createBlock)("div",D,[(0,a.createVNode)("span",{class:"product-badge status-"+e.value.toLowerCase()},(0,a.toDisplayString)(e.value),3)])):((0,a.openBlock)(),(0,a.createBlock)("span",P,(0,a.toDisplayString)(e.placeholder),1))]})),_:1},8,["modelValue","options"])]),(0,a.createVNode)("div",B,[I,(0,a.createVNode)("div",A,[(0,a.createVNode)("div",T,[(0,a.createVNode)(fe,{id:"category1",name:"category",value:"Accessories",modelValue:te.product.category,"onUpdate:modelValue":t[7]||(t[7]=function(e){return te.product.category=e})},null,8,["modelValue"]),_]),(0,a.createVNode)("div",L,[(0,a.createVNode)(fe,{id:"category2",name:"category",value:"Clothing",modelValue:te.product.category,"onUpdate:modelValue":t[8]||(t[8]=function(e){return te.product.category=e})},null,8,["modelValue"]),U]),(0,a.createVNode)("div",O,[(0,a.createVNode)(fe,{id:"category3",name:"category",value:"Electronics",modelValue:te.product.category,"onUpdate:modelValue":t[9]||(t[9]=function(e){return te.product.category=e})},null,8,["modelValue"]),$]),(0,a.createVNode)("div",j,[(0,a.createVNode)(fe,{id:"category4",name:"category",value:"Fitness",modelValue:te.product.category,"onUpdate:modelValue":t[10]||(t[10]=function(e){return te.product.category=e})},null,8,["modelValue"]),R])])]),(0,a.createVNode)("div",Z,[(0,a.createVNode)("div",F,[E,(0,a.createVNode)(ge,{id:"price",modelValue:te.product.price,"onUpdate:modelValue":t[11]||(t[11]=function(e){return te.product.price=e}),mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue"])]),(0,a.createVNode)("div",q,[W,(0,a.createVNode)(ge,{id:"quantity",modelValue:te.product.quantity,"onUpdate:modelValue":t[12]||(t[12]=function(e){return te.product.quantity=e}),integeronly:""},null,8,["modelValue"])])])]})),_:1},8,["visible"]),(0,a.createVNode)(ve,{visible:te.deleteProductDialog,"onUpdate:visible":t[15]||(t[15]=function(e){return te.deleteProductDialog=e}),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n((function(){return[(0,a.createVNode)(le,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[14]||(t[14]=function(e){return te.deleteProductDialog=!1})}),(0,a.createVNode)(le,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:oe.deleteProduct},null,8,["onClick"])]})),default:n((function(){return[(0,a.createVNode)("div",z,[K,te.product?((0,a.openBlock)(),(0,a.createBlock)("span",Y,[Q,(0,a.createVNode)("b",null,(0,a.toDisplayString)(te.product.name),1),G])):(0,a.createCommentVNode)("",!0)])]})),_:1},8,["visible"]),(0,a.createVNode)(ve,{visible:te.deleteProductsDialog,"onUpdate:visible":t[17]||(t[17]=function(e){return te.deleteProductsDialog=e}),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n((function(){return[(0,a.createVNode)(le,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[16]||(t[16]=function(e){return te.deleteProductsDialog=!1})}),(0,a.createVNode)(le,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:oe.deleteSelectedProducts},null,8,["onClick"])]})),default:n((function(){return[(0,a.createVNode)("div",H,[J,te.product?((0,a.openBlock)(),(0,a.createBlock)("span",X,"Are you sure you want to delete the selected products?")):(0,a.createCommentVNode)("",!0)])]})),_:1},8,["visible"])])])])})),te=o(3019);function oe(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function ae(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const ne={layout:o(5891).Z,data:function(){return{title:"Media",icon:"pi pi-fw pi-images",breadcrumb:[{label:"Media",route:"media"}],products:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:{},selectedProducts:null,filters:{},submitted:!1,statuses:[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}},productService:null,created:function(){this.productService=new te.Z},mounted:function(){var e=this;this.productService.getProducts().then((function(t){return e.products=t}))},methods:{formatCurrency:function(e){if(e)return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew:function(){this.product={},this.submitted=!1,this.productDialog=!0},hideDialog:function(){this.productDialog=!1,this.submitted=!1},saveProduct:function(){this.submitted=!0,this.product.name.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.$toast.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.productDialog=!1,this.product={})},editProduct:function(e){this.product=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(o),!0).forEach((function(t){ae(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):oe(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e),this.productDialog=!0},confirmDeleteProduct:function(e){this.product=e,this.deleteProductDialog=!0},deleteProduct:function(){var e=this;this.products=this.products.filter((function(t){return t.id!==e.product.id})),this.deleteProductDialog=!1,this.product={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById:function(e){for(var t=-1,o=0;o<this.products.length;o++)if(this.products[o].id===e){t=o;break}return t},createId:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<5;o++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},exportCSV:function(){this.$refs.dt.exportCSV()},confirmDeleteSelected:function(){this.deleteProductsDialog=!0},deleteSelectedProducts:function(){var e=this;this.products=this.products.filter((function(t){return!e.selectedProducts.includes(t)})),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}}};var le=o(3379),re=o.n(le),ie=o(1156),ce={insert:"head",singleton:!1};re()(ie.Z,ce);ie.Z.locals;ne.render=ee,ne.__scopeId="data-v-1254341d";const ue=ne}}]);