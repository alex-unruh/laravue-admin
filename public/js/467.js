(self.webpackChunk=self.webpackChunk||[]).push([[467],{1748:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var i=o(3645),a=o.n(i)()((function(e){return e[1]}));a.push([e.id,".p-toast.p-toast-topright{top:70px;z-index:1000}",""]);const n=a},9784:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var i=o(3645),a=o.n(i)()((function(e){return e[1]}));a.push([e.id,".icons-list[data-v-261cb9e2]{color:#6c757d;text-align:center}.icons-list .p-md-2[data-v-261cb9e2]{padding:1em}.icons-list i[data-v-261cb9e2]{font-size:1.5rem;margin-bottom:.5rem}",""]);const n=a},1140:(e,t,o)=>{"use strict";o.d(t,{Z:()=>ve});var i=o(5166),a={class:"layout-logo"},n={class:"layout-main"};var l={class:"layout-topbar p-shadow-5"},c=(0,i.createVNode)("span",{class:"pi pi-bars"},null,-1),r={class:"layout-topbar-icons"},s={class:"layout-topbar-search"},u=(0,i.createVNode)("span",{class:"layout-topbar-search-icon pi pi-search"},null,-1),p=(0,i.createStaticVNode)('<button class="p-link"><span class="layout-topbar-item-text">Events</span><span class="layout-topbar-icon pi pi-calendar"></span><span class="layout-topbar-badge">5</span></button><button class="p-link"><span class="layout-topbar-item-text">Settings</span><span class="layout-topbar-icon pi pi-cog"></span></button><button class="p-link"><span class="layout-topbar-item-text">User</span><span class="layout-topbar-icon pi pi-user"></span></button>',3);const d={methods:{onMenuToggle:function(e){this.$emit("menu-toggle",e)}},render:function(e,t,o,a,n,d){var m=(0,i.resolveComponent)("InputText");return(0,i.openBlock)(),(0,i.createBlock)("div",l,[(0,i.createVNode)("button",{class:"p-link layout-menu-button",onClick:t[1]||(t[1]=function(){return d.onMenuToggle&&d.onMenuToggle.apply(d,arguments)})},[c]),(0,i.createVNode)("div",r,[(0,i.createVNode)("span",s,[(0,i.createVNode)(m,{type:"text",placeholder:"Search"}),u]),p])])}},m=d;var f=(0,i.withScopeId)("data-v-5aec6afc");(0,i.pushScopeId)("data-v-5aec6afc");var h={class:"layout-profile"},b=(0,i.createVNode)("div",null,[(0,i.createVNode)("img",{src:"assets/layout/images/profile.png",alt:""})],-1),v=(0,i.createVNode)("span",{class:"username"},"Claire Williams",-1),y=(0,i.createVNode)("i",{class:"pi pi-fw pi-cog"},null,-1),k=(0,i.createVNode)("li",null,[(0,i.createVNode)("button",{class:"p-link"},[(0,i.createVNode)("i",{class:"pi pi-fw pi-user"}),(0,i.createVNode)("span",null,"Account")])],-1),g=(0,i.createVNode)("li",null,[(0,i.createVNode)("button",{class:"p-link"},[(0,i.createVNode)("i",{class:"pi pi-fw pi-inbox"}),(0,i.createVNode)("span",null,"Notifications"),(0,i.createVNode)("span",{class:"menuitem-badge"},"2")])],-1),V=(0,i.createVNode)("li",null,[(0,i.createVNode)("button",{class:"p-link"},[(0,i.createVNode)("i",{class:"pi pi-fw pi-power-off"}),(0,i.createVNode)("span",null,"Logout")])],-1);(0,i.popScopeId)();var N=f((function(e,t,o,a,n,l){return(0,i.openBlock)(),(0,i.createBlock)("div",h,[b,(0,i.createVNode)("button",{class:"p-link layout-profile-link",onClick:t[1]||(t[1]=function(){return l.onClick&&l.onClick.apply(l,arguments)})},[v,y]),(0,i.createVNode)(i.Transition,{name:"layout-submenu-wrapper"},{default:f((function(){return[(0,i.withDirectives)((0,i.createVNode)("ul",null,[k,g,V],512),[[i.vShow,n.expanded]])]})),_:1})])}));const C={data:function(){return{expanded:!1}},methods:{onClick:function(e){this.expanded=!this.expanded,e.preventDefault()}}};C.render=N,C.__scopeId="data-v-5aec6afc";const w=C;var M={class:"layout-menu-container"};var S={key:0},x={key:0,class:"arrow"},B={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},I={key:1,class:"menuitem-badge"},L={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},A={key:1,class:"menuitem-badge"};const T={name:"appsubmenu",props:{items:Array,root:{type:Boolean,default:!1}},data:function(){return{activeIndex:null,currentRoute:null}},methods:{onMenuItemClick:function(e,t,o){t.disabled?e.preventDefault():(t.to||t.url||e.preventDefault(),this.currentRoute=t.to,t.command&&t.command({originalEvent:e,item:t}),this.activeIndex=o===this.activeIndex?null:o,this.$emit("menuitem-click",{originalEvent:e,item:t}))},visible:function(e){return"function"==typeof e.visible?e.visible():!1!==e.visible},getClasses:function(e){var t=this.currentRoute==e.to;return[e.class,"p-ripple",{"router-link-active":t,"router-link-exact-active":t,"p-disabled":e.disabled}]}},render:function(e,t,o,a,n,l){var c=(0,i.resolveComponent)("inertia-link"),r=(0,i.resolveComponent)("appsubmenu"),s=(0,i.resolveDirective)("ripple");return o.items?((0,i.openBlock)(),(0,i.createBlock)("ul",S,[((0,i.openBlock)(!0),(0,i.createBlock)(i.Fragment,null,(0,i.renderList)(o.items,(function(a,u){return(0,i.openBlock)(),(0,i.createBlock)(i.Fragment,null,[l.visible(a)&&!a.separator?((0,i.openBlock)(),(0,i.createBlock)("li",{key:u,class:[{"active-menuitem":n.activeIndex===u&&!a.to&&!a.disabled}],role:"none"},[a.items&&!0===o.root?((0,i.openBlock)(),(0,i.createBlock)("div",x)):(0,i.createCommentVNode)("",!0),e.route().has(a.to)?((0,i.openBlock)(),(0,i.createBlock)(c,{key:1,href:e.route(a.to),class:l.getClasses(a),onClick:function(e){return l.onMenuItemClick(e,a,u)},"aria-current":e.route().current(a.to)?"page":"",target:a.target,exact:""},{default:(0,i.withCtx)((function(){return[(0,i.createVNode)("i",{class:a.icon},null,2),(0,i.createVNode)("span",null,(0,i.toDisplayString)(a.label),1),a.items?((0,i.openBlock)(),(0,i.createBlock)("i",B)):(0,i.createCommentVNode)("",!0),a.badge?((0,i.openBlock)(),(0,i.createBlock)("span",I,(0,i.toDisplayString)(a.badge),1)):(0,i.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-current","target"])):(0,i.createCommentVNode)("",!0),a.to?(0,i.createCommentVNode)("",!0):(0,i.withDirectives)(((0,i.openBlock)(),(0,i.createBlock)("a",{key:2,href:a.url||"#",style:a.style,class:[a.class,"p-ripple",{"p-disabled":a.disabled}],onClick:function(e){return l.onMenuItemClick(e,a,u)},target:a.target,role:"menuitem"},[(0,i.createVNode)("i",{class:a.icon},null,2),(0,i.createVNode)("span",null,(0,i.toDisplayString)(a.label),1),a.items?((0,i.openBlock)(),(0,i.createBlock)("i",L)):(0,i.createCommentVNode)("",!0),a.badge?((0,i.openBlock)(),(0,i.createBlock)("span",A,(0,i.toDisplayString)(a.badge),1)):(0,i.createCommentVNode)("",!0)],14,["href","onClick","target"])),[[s]]),(0,i.createVNode)(i.Transition,{name:"layout-submenu-wrapper"},{default:(0,i.withCtx)((function(){return[(0,i.withDirectives)((0,i.createVNode)(r,{items:l.visible(a)&&a.items,onMenuitemClick:t[1]||(t[1]=function(t){return e.$emit("menuitem-click",t)})},null,8,["items"]),[[i.vShow,n.activeIndex===u]])]})),_:2},1024)],2)):(0,i.createCommentVNode)("",!0),l.visible(a)&&a.separator?((0,i.openBlock)(),(0,i.createBlock)("li",{class:"p-menu-separator",style:a.style,key:"separator"+u,role:"separator"},null,4)):(0,i.createCommentVNode)("",!0)],64)})),256))])):(0,i.createCommentVNode)("",!0)}},D={props:{model:Array},methods:{onMenuItemClick:function(e){this.$emit("menuitem-click",e)}},components:{AppSubmenu:T},render:function(e,t,o,a,n,l){var c=(0,i.resolveComponent)("AppSubmenu");return(0,i.openBlock)(),(0,i.createBlock)("div",M,[(0,i.createVNode)(c,{items:o.model,class:"layout-menu",root:!0,onMenuitemClick:l.onMenuItemClick},null,8,["items","onMenuitemClick"])])}},_=D;var $=(0,i.createVNode)("i",{class:"pi pi-cog"},null,-1),U=(0,i.createVNode)("i",{class:"pi pi-times"},null,-1),F={class:"layout-config-content"},O=(0,i.createVNode)("h5",{style:{"margin-top":"0"}},"Input Style",-1),P={class:"p-formgroup-inline"},z={class:"p-field-radiobutton"},E=(0,i.createVNode)("label",{for:"input_outlined"},"Outlined",-1),R={class:"p-field-radiobutton"},Z=(0,i.createVNode)("label",{for:"input_filled"},"Filled",-1),W=(0,i.createVNode)("h5",null,"Ripple Effect",-1),q=(0,i.createVNode)("h5",null,"Menu Type",-1),G={class:"p-formgroup-inline"},j={class:"p-field-radiobutton"},H=(0,i.createVNode)("label",{for:"static"},"Static",-1),K={class:"p-field-radiobutton"},Y=(0,i.createVNode)("label",{for:"overlay"},"Overlay",-1),J=(0,i.createVNode)("h5",null,"Menu Color",-1),Q={class:"p-formgroup-inline"},X={class:"p-field-radiobutton"},ee=(0,i.createVNode)("label",{for:"dark"},"Dark",-1),te={class:"p-field-radiobutton"},oe=(0,i.createVNode)("label",{for:"light"},"Light",-1);const ie={props:{layoutMode:{type:String,default:null},layoutColorMode:{type:String,default:null}},data:function(){return{active:!1,d_layoutMode:this.layoutMode,d_layoutColorMode:this.layoutColorMode}},watch:{$route:function(){this.active&&(this.active=!1,this.unbindOutsideClickListener())},layoutMode:function(e){this.d_layoutMode=e},layoutColorMode:function(e){this.d_layoutColorMode=e}},outsideClickListener:null,methods:{toggleConfigurator:function(e){this.active=!this.active,e.preventDefault(),this.active?this.bindOutsideClickListener():this.unbindOutsideClickListener()},hideConfigurator:function(e){this.active=!1,this.unbindOutsideClickListener(),e.preventDefault()},changeInputStyle:function(e){this.$appState.inputStyle=e},changeRipple:function(e){this.$primevue.config.ripple=e},changeLayout:function(e,t){this.$emit("layout-change",t),e.preventDefault()},changeLayoutColor:function(e,t){this.$emit("layout-color-change",t),e.preventDefault()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.active&&e.isOutsideClicked(t)&&(e.active=!1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(e){return!(this.$el.isSameNode(e.target)||this.$el.contains(e.target))}},computed:{containerClass:function(){return["layout-config",{"layout-config-active":this.active}]},rippleActive:function(){return this.$primevue.config.ripple},inputStyle:function(){return this.$appState.inputStyle}},render:function(e,t,o,a,n,l){var c=(0,i.resolveComponent)("RadioButton"),r=(0,i.resolveComponent)("InputSwitch");return(0,i.openBlock)(),(0,i.createBlock)("div",{id:"layout-config",class:l.containerClass},[(0,i.createVNode)("a",{href:"#",class:"layout-config-button",id:"layout-config-button",onClick:t[1]||(t[1]=function(){return l.toggleConfigurator&&l.toggleConfigurator.apply(l,arguments)})},[$]),(0,i.createVNode)("a",{href:"#",class:"layout-config-close",onClick:t[2]||(t[2]=function(){return l.hideConfigurator&&l.hideConfigurator.apply(l,arguments)})},[U]),(0,i.createVNode)("div",F,[O,(0,i.createVNode)("div",P,[(0,i.createVNode)("div",z,[(0,i.createVNode)(c,{id:"input_outlined",name:"inputstyle",value:"outlined",modelValue:l.inputStyle,"onUpdate:modelValue":l.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),E]),(0,i.createVNode)("div",R,[(0,i.createVNode)(c,{id:"input_filled",name:"inputstyle",value:"filled",modelValue:l.inputStyle,"onUpdate:modelValue":l.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),Z])]),W,(0,i.createVNode)(r,{modelValue:l.rippleActive,"onUpdate:modelValue":l.changeRipple},null,8,["modelValue","onUpdate:modelValue"]),q,(0,i.createVNode)("div",G,[(0,i.createVNode)("div",j,[(0,i.createVNode)(c,{id:"static",name:"layoutMode",value:"static",modelValue:n.d_layoutMode,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.d_layoutMode=e}),onChange:t[4]||(t[4]=function(e){return l.changeLayout(e,"static")})},null,8,["modelValue"]),H]),(0,i.createVNode)("div",K,[(0,i.createVNode)(c,{id:"overlay",name:"layoutMode",value:"overlay",modelValue:n.d_layoutMode,"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.d_layoutMode=e}),onChange:t[6]||(t[6]=function(e){return l.changeLayout(e,"overlay")})},null,8,["modelValue"]),Y])]),J,(0,i.createVNode)("div",Q,[(0,i.createVNode)("div",X,[(0,i.createVNode)(c,{id:"dark",name:"layoutColorMode",value:"dark",modelValue:n.d_layoutColorMode,"onUpdate:modelValue":t[7]||(t[7]=function(e){return n.d_layoutColorMode=e}),onChange:t[8]||(t[8]=function(e){return l.changeLayoutColor(e,"dark")})},null,8,["modelValue"]),ee]),(0,i.createVNode)("div",te,[(0,i.createVNode)(c,{id:"light",name:"layoutColorMode",value:"light",modelValue:n.d_layoutColorMode,"onUpdate:modelValue":t[9]||(t[9]=function(e){return n.d_layoutColorMode=e}),onChange:t[10]||(t[10]=function(e){return l.changeLayoutColor(e,"light")})},null,8,["modelValue"]),oe])])])],2)}},ae=ie;var ne=(0,i.withScopeId)("data-v-4aa944ce");(0,i.pushScopeId)("data-v-4aa944ce");var le={class:"layout-footer"},ce=(0,i.createVNode)("span",{class:"footer-text",style:{"margin-right":"5px"}},"PrimeVue",-1),re=(0,i.createVNode)("img",{src:"assets/layout/images/logo.svg",alt:"sigma",width:"80"},null,-1),se=(0,i.createVNode)("span",{class:"footer-text",style:{"margin-left":"5px"}},"Theme and Layout",-1);(0,i.popScopeId)();var ue=ne((function(e,t,o,a,n,l){return(0,i.openBlock)(),(0,i.createBlock)("div",le,[ce,re,se])}));const pe={name:"AppFooter"};pe.render=ue,pe.__scopeId="data-v-4aa944ce";const de={data:function(){return{layoutMode:"static",layoutColorMode:"dark",staticMenuInactive:!1,overlayMenuActive:!1,mobileMenuActive:!1,menu:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:"dashboard"},{label:"UI Kit",icon:"pi pi-fw pi-sitemap",items:[{label:"Form Layout",icon:"pi pi-fw pi-id-card",to:"formlayout"},{label:"Input",icon:"pi pi-fw pi-check-square",to:"input"},{label:"Float Label",icon:"pi pi-fw pi-bookmark",to:"floatlabel"},{label:"Invalid State",icon:"pi pi-fw pi-exclamation-circle",to:"invalidstate"},{label:"Button",icon:"pi pi-fw pi-mobile",to:"button"},{label:"Table",icon:"pi pi-fw pi-table",to:"table"},{label:"List",icon:"pi pi-fw pi-list",to:"list"},{label:"Tree",icon:"pi pi-fw pi-share-alt",to:"tree"},{label:"Panel",icon:"pi pi-fw pi-tablet",to:"panel"},{label:"Overlay",icon:"pi pi-fw pi-clone",to:"overlay"},{label:"Menu",icon:"pi pi-fw pi-bars",to:"menu"},{label:"Message",icon:"pi pi-fw pi-comment",to:"messages"},{label:"File",icon:"pi pi-fw pi-file",to:"file"},{label:"Chart",icon:"pi pi-fw pi-chart-bar",to:"chart"},{label:"Misc",icon:"pi pi-fw pi-circle-off",to:"misc"}]},{label:"Utilities",icon:"pi pi-fw pi-globe",items:[{label:"Display",icon:"pi pi-fw pi-desktop",to:"display"},{label:"Elevation",icon:"pi pi-fw pi-external-link",to:"elevation"},{label:"Flexbox",icon:"pi pi-fw pi-directions",to:"flexbox"},{label:"Icons",icon:"pi pi-fw pi-search",to:"icons"},{label:"Grid System",icon:"pi pi-fw pi-th-large",to:"grid"},{label:"Spacing",icon:"pi pi-fw pi-arrow-right",to:"spacing"},{label:"Typography",icon:"pi pi-fw pi-align-center",to:"typography"},{label:"Text",icon:"pi pi-fw pi-pencil",to:"text"}]},{label:"Pages",icon:"pi pi-fw pi-clone",items:[{label:"Crud",icon:"pi pi-fw pi-user-edit",to:"crud"},{label:"Calendar",icon:"pi pi-fw pi-calendar-plus",to:"calendar"},{label:"Timeline",icon:"pi pi-fw pi-calendar",to:"timeline"},{label:"Empty Page",icon:"pi pi-fw pi-circle-off",to:"empty"}]},{label:"Menu Hierarchy",icon:"pi pi-fw pi-search",items:[{label:"Submenu 1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.1.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 1.1.2",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 1.1.3",icon:"pi pi-fw pi-bookmark"}]},{label:"Submenu 1.2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.2.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 1.2.2",icon:"pi pi-fw pi-bookmark"}]}]},{label:"Submenu 2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.1.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 2.1.2",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 2.1.3",icon:"pi pi-fw pi-bookmark"}]},{label:"Submenu 2.2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.2.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 2.2.2",icon:"pi pi-fw pi-bookmark"}]}]}]},{label:"Documentation",icon:"pi pi-fw pi-question",to:"documentation"},{label:"View Source",icon:"pi pi-fw pi-search",command:function(){window.location="https://github.com/primefaces/sigma-vue"}}]}},watch:{$route:function(){this.menuActive=!1,this.$toast.removeAllGroups()}},methods:{onWrapperClick:function(){this.menuClick||(this.overlayMenuActive=!1,this.mobileMenuActive=!1),this.menuClick=!1},onMenuToggle:function(){this.menuClick=!0,this.isDesktop()?"overlay"===this.layoutMode?(!0===this.mobileMenuActive&&(this.overlayMenuActive=!0),this.overlayMenuActive=!this.overlayMenuActive,this.mobileMenuActive=!1):"static"===this.layoutMode&&(this.staticMenuInactive=!this.staticMenuInactive):this.mobileMenuActive=!this.mobileMenuActive,event.preventDefault()},onSidebarClick:function(){this.menuClick=!0},onMenuItemClick:function(e){e.item&&!e.item.items&&(this.overlayMenuActive=!1,this.mobileMenuActive=!1)},onLayoutChange:function(e){this.layoutMode=e},onLayoutColorChange:function(e){this.layoutColorMode=e},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},isDesktop:function(){return window.innerWidth>1024},isSidebarVisible:function(){return!this.isDesktop()||("static"===this.layoutMode?!this.staticMenuInactive:"overlay"!==this.layoutMode||this.overlayMenuActive)}},computed:{containerClass:function(){return["layout-wrapper",{"layout-overlay":"overlay"===this.layoutMode,"layout-static":"static"===this.layoutMode,"layout-static-sidebar-inactive":this.staticMenuInactive&&"static"===this.layoutMode,"layout-overlay-sidebar-active":this.overlayMenuActive&&"overlay"===this.layoutMode,"layout-mobile-sidebar-active":this.mobileMenuActive,"p-input-filled":"filled"===this.$appState.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},sidebarClass:function(){return["layout-sidebar",{"layout-sidebar-dark":"dark"===this.layoutColorMode,"layout-sidebar-light":"light"===this.layoutColorMode}]},logo:function(){return"dark"===this.layoutColorMode?"assets/layout/images/logo-white.svg":"assets/layout/images/logo.svg"}},beforeUpdate:function(){this.mobileMenuActive?this.addClass(document.body,"body-overflow-hidden"):this.removeClass(document.body,"body-overflow-hidden")},components:{AppTopBar:m,AppProfile:w,AppMenu:_,AppConfig:ae,AppFooter:pe}};var me=o(3379),fe=o.n(me),he=o(1748),be={insert:"head",singleton:!1};fe()(he.Z,be);he.Z.locals;de.render=function(e,t,o,l,c,r){var s=(0,i.resolveComponent)("AppTopBar"),u=(0,i.resolveComponent)("inertia-link"),p=(0,i.resolveComponent)("AppProfile"),d=(0,i.resolveComponent)("AppMenu"),m=(0,i.resolveComponent)("AppConfig"),f=(0,i.resolveComponent)("AppFooter");return(0,i.openBlock)(),(0,i.createBlock)("div",{class:r.containerClass,onClick:t[2]||(t[2]=function(){return r.onWrapperClick&&r.onWrapperClick.apply(r,arguments)})},[(0,i.createVNode)(s,{onMenuToggle:r.onMenuToggle},null,8,["onMenuToggle"]),(0,i.createVNode)(i.Transition,{name:"layout-sidebar"},{default:(0,i.withCtx)((function(){return[(0,i.withDirectives)((0,i.createVNode)("div",{class:r.sidebarClass,onClick:t[1]||(t[1]=function(){return r.onSidebarClick&&r.onSidebarClick.apply(r,arguments)})},[(0,i.createVNode)("div",a,[(0,i.createVNode)(u,{href:"/"},{default:(0,i.withCtx)((function(){return[(0,i.createVNode)("img",{alt:"Logo",src:r.logo},null,8,["src"])]})),_:1})]),(0,i.createVNode)(p),(0,i.createVNode)(d,{model:c.menu,onMenuitemClick:r.onMenuItemClick},null,8,["model","onMenuitemClick"])],2),[[i.vShow,r.isSidebarVisible()]])]})),_:1}),(0,i.createVNode)("div",n,[(0,i.renderSlot)(e.$slots,"default")]),(0,i.createVNode)(m,{layoutMode:c.layoutMode,layoutColorMode:c.layoutColorMode,onLayoutChange:r.onLayoutChange,onLayoutColorChange:r.onLayoutColorChange},null,8,["layoutMode","layoutColorMode","onLayoutChange","onLayoutColorChange"]),(0,i.createVNode)(f)],2)};const ve=de},7467:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>R});var i=o(5166),a=(0,i.withScopeId)("data-v-261cb9e2");(0,i.pushScopeId)("data-v-261cb9e2");var n={class:"card icons-demo"},l=(0,i.createVNode)("h3",null,"Icons",-1),c=(0,i.createVNode)("p",null,"Sigma uses PrimeIcons v4.1, PrimeTek's new modern icon library.",-1),r=(0,i.createVNode)("h5",null,"Getting Started",-1),s=(0,i.createVNode)("p",null," PrimeIcons use the pi pi-{icon} syntax such as pi pi-check. A standalone icon can be displayed using an element like i or span. ",-1),u=(0,i.createTextVNode)(""),p=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('\n<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>\n')]),(0,i.createTextVNode)("\n")],-1),d=(0,i.createVNode)("i",{class:"pi pi-check",style:{"margin-right":"0.5rem"}},null,-1),m=(0,i.createVNode)("i",{class:"pi pi-times"},null,-1),f=(0,i.createVNode)("h5",null,"Component Icons",-1),h=(0,i.createVNode)("p",null," Components that have icon properties accept PrimeIcons with the pi pi-{icon} syntax. ",-1),b=(0,i.createTextVNode)(""),v=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('\n<Button label="Confirm" icon="pi pi-check"></Button>\n')]),(0,i.createTextVNode)("\n")],-1),y=(0,i.createVNode)("h5",null,"Size",-1),k=(0,i.createVNode)("p",null,"Size of the icons can easily be changed using font-size property.",-1),g=(0,i.createTextVNode)(""),V=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('\n<i class="pi pi-check"></i>\n')]),(0,i.createTextVNode)("\n")],-1),N=(0,i.createVNode)("i",{class:"pi pi-check"},null,-1),C=(0,i.createTextVNode)(""),w=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('\n<i class="pi pi-check" style="fontSize: 2rem"></i>\n')]),(0,i.createTextVNode)("\n")],-1),M=(0,i.createVNode)("i",{class:"pi pi-check",style:{fontsize:"2rem"}},null,-1),S=(0,i.createVNode)("h5",null,"Spinning Animation",-1),x=(0,i.createVNode)("p",null,"Special pi-spin class applies continuous rotation to an icon.",-1),B=(0,i.createTextVNode)(""),I=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('\n<i class="pi pi-spin pi-spinner" style="fontSize: 2rem"></i>\n')]),(0,i.createTextVNode)("\n")],-1),L=(0,i.createVNode)("i",{class:"pi pi-spin pi-spinner",style:{fontsize:"2rem"}},null,-1),A=(0,i.createVNode)("h5",null,"List of Icons",-1),T=(0,i.createVNode)("p",null,[(0,i.createTextVNode)(" Here is the current list of PrimeIcons, more icons are added periodically. You may also "),(0,i.createVNode)("a",{href:"https://github.com/primefaces/primeicons/issues"},"request new icons"),(0,i.createTextVNode)(" at the issue tracker. ")],-1),D={class:"p-grid icons-list"};(0,i.popScopeId)();var _=a((function(e,t,o,a,_,$){var U=(0,i.resolveComponent)("Button"),F=(0,i.resolveDirective)("code");return(0,i.openBlock)(),(0,i.createBlock)("div",n,[l,c,r,s,(0,i.withDirectives)((0,i.createVNode)("pre",null,[u,p],512),[[F]]),d,m,f,h,(0,i.withDirectives)((0,i.createVNode)("pre",null,[b,v],512),[[F]]),(0,i.createVNode)(U,{label:"Confirm",icon:"pi pi-check"}),y,k,(0,i.withDirectives)((0,i.createVNode)("pre",null,[g,V],512),[[F]]),N,(0,i.withDirectives)((0,i.createVNode)("pre",null,[C,w],512),[[F]]),M,S,x,(0,i.withDirectives)((0,i.createVNode)("pre",null,[B,I],512),[[F]]),L,A,T,(0,i.createVNode)("div",D,[((0,i.openBlock)(!0),(0,i.createBlock)(i.Fragment,null,(0,i.renderList)(_.icons,(function(e){return(0,i.openBlock)(),(0,i.createBlock)("div",{class:"p-col-12 p-md-2",key:e.properties.name},[(0,i.createVNode)("i",{class:"pi pi-"+e.properties.name},null,2),(0,i.createVNode)("div",null,"pi-"+(0,i.toDisplayString)(e.properties.name),1)])})),128))])])})),$=o(9669),U=o.n($);const F={layout:o(1140).Z,data:function(){return{icons:null}},mounted:function(){var e=this;U().get("assets/layout/data/icons.json").then((function(t){var o=t.data.icons;o.sort((function(e,t){return e.properties.name<t.properties.name?-1:e.properties.name<t.properties.name?1:0})),e.icons=o}))}};var O=o(3379),P=o.n(O),z=o(9784),E={insert:"head",singleton:!1};P()(z.Z,E);z.Z.locals;F.render=_,F.__scopeId="data-v-261cb9e2";const R=F}}]);