(self.webpackChunk=self.webpackChunk||[]).push([[499],{7068:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(3645),a=o.n(n)()((function(e){return e[1]}));a.push([e.id,".p-toast.p-toast-topright{top:70px;z-index:1000}",""]);const l=a},6344:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(3645),a=o.n(n)()((function(e){return e[1]}));a.push([e.id,".layout-footer[data-v-1f4c48b6]{text-align:center}",""]);const l=a},7617:(e,t,o)=>{"use strict";o.d(t,{Z:()=>Ce});var n=o(5166),a={class:"layout-logo"},l={class:"layout-main"};var i={class:"layout-topbar p-shadow-5"},r=(0,n.createVNode)("span",{class:"pi pi-bars"},null,-1),c={class:"layout-topbar-icons"},u={class:"layout-topbar-search"},s=(0,n.createVNode)("span",{class:"layout-topbar-search-icon pi pi-search"},null,-1),d=(0,n.createStaticVNode)('<button class="p-link"><span class="layout-topbar-item-text">Events</span><span class="layout-topbar-icon pi pi-calendar"></span></button><button class="p-link"><span class="layout-topbar-item-text">User</span><span class="layout-topbar-icon pi pi-user"></span></button>',2),p=(0,n.createVNode)("span",{class:"layout-topbar-item-text"},"Settings",-1),m=(0,n.createVNode)("span",{class:"layout-topbar-icon pi pi-cog"},null,-1);const f={methods:{onMenuToggle:function(e){this.$emit("menu-toggle",e)},onToggleConfig:function(e){this.$emit("configToggle",e)}},render:function(e,t,o,a,l,f){var v=(0,n.resolveComponent)("InputText");return(0,n.openBlock)(),(0,n.createBlock)("div",i,[(0,n.createVNode)("button",{class:"p-link layout-menu-button",onClick:t[1]||(t[1]=function(){return f.onMenuToggle&&f.onMenuToggle.apply(f,arguments)})},[r]),(0,n.createVNode)("div",c,[(0,n.createVNode)("span",u,[(0,n.createVNode)(v,{type:"text",placeholder:"Search"}),s]),d,(0,n.createVNode)("button",{class:"p-link",onClick:t[2]||(t[2]=function(){return f.onToggleConfig&&f.onToggleConfig.apply(f,arguments)})},[p,m])])])}},v=f;var y=(0,n.withScopeId)("data-v-01b321c2");(0,n.pushScopeId)("data-v-01b321c2");var g={class:"layout-profile"},h=(0,n.createVNode)("div",null,[(0,n.createVNode)("img",{src:"assets/layout/images/profile.png",alt:""})],-1),C=(0,n.createVNode)("span",{class:"username"},"Alexandre Unruh",-1),b=(0,n.createVNode)("i",{class:"pi pi-fw pi-cog"},null,-1),V=(0,n.createVNode)("li",null,[(0,n.createVNode)("button",{class:"p-link"},[(0,n.createVNode)("i",{class:"pi pi-fw pi-user"}),(0,n.createVNode)("span",null,"Account")])],-1),k=(0,n.createVNode)("li",null,[(0,n.createVNode)("button",{class:"p-link"},[(0,n.createVNode)("i",{class:"pi pi-fw pi-inbox"}),(0,n.createVNode)("span",null,"Notifications"),(0,n.createVNode)("span",{class:"menuitem-badge"},"2")])],-1),N=(0,n.createVNode)("li",null,[(0,n.createVNode)("button",{class:"p-link"},[(0,n.createVNode)("i",{class:"pi pi-fw pi-power-off"}),(0,n.createVNode)("span",null,"Logout")])],-1);(0,n.popScopeId)();var M=y((function(e,t,o,a,l,i){return(0,n.openBlock)(),(0,n.createBlock)("div",g,[h,(0,n.createVNode)("button",{class:"p-link layout-profile-link",onClick:t[1]||(t[1]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},[C,b]),(0,n.createVNode)(n.Transition,{name:"layout-submenu-wrapper"},{default:y((function(){return[(0,n.withDirectives)((0,n.createVNode)("ul",null,[V,k,N],512),[[n.vShow,l.expanded]])]})),_:1})])}));const w={data:function(){return{expanded:!1}},methods:{onClick:function(e){this.expanded=!this.expanded,e.preventDefault()}}};w.render=M,w.__scopeId="data-v-01b321c2";const S=w;var B={class:"layout-menu-container"};var A={key:0},I={key:0,class:"arrow"},x={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},_={key:1,class:"menuitem-badge"},D={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},L={key:1,class:"menuitem-badge"};const T={name:"appsubmenu",props:{items:Array,root:{type:Boolean,default:!1}},data:function(){return{activeIndex:null,currentRoute:null}},methods:{onMenuItemClick:function(e,t,o){t.disabled?e.preventDefault():(t.to||t.url||e.preventDefault(),this.currentRoute=t.to,t.command&&t.command({originalEvent:e,item:t}),this.activeIndex=o===this.activeIndex?null:o,this.$emit("menuitem-click",{originalEvent:e,item:t}))},visible:function(e){return"function"==typeof e.visible?e.visible():!1!==e.visible},getClasses:function(e){var t=this.currentRoute==e.to;return[e.class,"p-ripple",{"router-link-active":t,"router-link-exact-active":t,"p-disabled":e.disabled}]}},render:function(e,t,o,a,l,i){var r=(0,n.resolveComponent)("inertia-link"),c=(0,n.resolveComponent)("appsubmenu"),u=(0,n.resolveDirective)("ripple");return o.items?((0,n.openBlock)(),(0,n.createBlock)("ul",A,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(o.items,(function(a,s){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[i.visible(a)&&!a.separator?((0,n.openBlock)(),(0,n.createBlock)("li",{key:s,class:[{"active-menuitem":l.activeIndex===s&&!a.to&&!a.disabled}],role:"none"},[a.items&&!0===o.root?((0,n.openBlock)(),(0,n.createBlock)("div",I)):(0,n.createCommentVNode)("",!0),e.route().has(a.to)?((0,n.openBlock)(),(0,n.createBlock)(r,{key:1,href:e.route(a.to),class:i.getClasses(a),onClick:function(e){return i.onMenuItemClick(e,a,s)},"aria-current":e.route().current(a.to)?"page":"",target:a.target,exact:""},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("i",{class:a.icon},null,2),(0,n.createVNode)("span",null,(0,n.toDisplayString)(a.label),1),a.items?((0,n.openBlock)(),(0,n.createBlock)("i",x)):(0,n.createCommentVNode)("",!0),a.badge?((0,n.openBlock)(),(0,n.createBlock)("span",_,(0,n.toDisplayString)(a.badge),1)):(0,n.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-current","target"])):(0,n.createCommentVNode)("",!0),a.to?(0,n.createCommentVNode)("",!0):(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createBlock)("a",{key:2,href:a.url||"#",style:a.style,class:[a.class,"p-ripple",{"p-disabled":a.disabled}],onClick:function(e){return i.onMenuItemClick(e,a,s)},target:a.target,role:"menuitem"},[(0,n.createVNode)("i",{class:a.icon},null,2),(0,n.createVNode)("span",null,(0,n.toDisplayString)(a.label),1),a.items?((0,n.openBlock)(),(0,n.createBlock)("i",D)):(0,n.createCommentVNode)("",!0),a.badge?((0,n.openBlock)(),(0,n.createBlock)("span",L,(0,n.toDisplayString)(a.badge),1)):(0,n.createCommentVNode)("",!0)],14,["href","onClick","target"])),[[u]]),(0,n.createVNode)(n.Transition,{name:"layout-submenu-wrapper"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)(c,{items:i.visible(a)&&a.items,onMenuitemClick:t[1]||(t[1]=function(t){return e.$emit("menuitem-click",t)})},null,8,["items"]),[[n.vShow,l.activeIndex===s]])]})),_:2},1024)],2)):(0,n.createCommentVNode)("",!0),i.visible(a)&&a.separator?((0,n.openBlock)(),(0,n.createBlock)("li",{class:"p-menu-separator",style:a.style,key:"separator"+s,role:"separator"},null,4)):(0,n.createCommentVNode)("",!0)],64)})),256))])):(0,n.createCommentVNode)("",!0)}},$={props:{model:Array},methods:{onMenuItemClick:function(e){this.$emit("menuitem-click",e)}},components:{AppSubmenu:T},render:function(e,t,o,a,l,i){var r=(0,n.resolveComponent)("AppSubmenu");return(0,n.openBlock)(),(0,n.createBlock)("div",B,[(0,n.createVNode)(r,{items:o.model,class:"layout-menu",root:!0,onMenuitemClick:i.onMenuItemClick},null,8,["items","onMenuitemClick"])])}},U=$;var R=(0,n.createVNode)("i",{class:"pi pi-times"},null,-1),Z={class:"layout-config-content"},F=(0,n.createVNode)("h5",{style:{"margin-top":"0"}},"Input Style",-1),E={class:"p-formgroup-inline"},W={class:"p-field-radiobutton"},O=(0,n.createVNode)("label",{for:"input_outlined"},"Outlined",-1),P={class:"p-field-radiobutton"},j=(0,n.createVNode)("label",{for:"input_filled"},"Filled",-1),z=(0,n.createVNode)("h5",null,"Ripple Effect",-1),q=(0,n.createVNode)("h5",null,"Menu Type",-1),G={class:"p-formgroup-inline"},H={class:"p-field-radiobutton"},J=(0,n.createVNode)("label",{for:"static"},"Static",-1),K={class:"p-field-radiobutton"},Q=(0,n.createVNode)("label",{for:"overlay"},"Overlay",-1),X=(0,n.createVNode)("h5",null,"Menu Color",-1),Y={class:"p-formgroup-inline"},ee={class:"p-field-radiobutton"},te=(0,n.createVNode)("label",{for:"dark"},"Dark",-1),oe={class:"p-field-radiobutton"},ne=(0,n.createVNode)("label",{for:"light"},"Light",-1);const ae={props:{layoutMode:{type:String,default:null},layoutColorMode:{type:String,default:null}},data:function(){return{active:!1,d_layoutMode:this.layoutMode,d_layoutColorMode:this.layoutColorMode}},watch:{$route:function(){this.active&&(this.active=!1,this.unbindOutsideClickListener())},layoutMode:function(e){this.d_layoutMode=e},layoutColorMode:function(e){this.d_layoutColorMode=e}},outsideClickListener:null,methods:{toggleConfigurator:function(e){this.active=!this.active,e.preventDefault()},onToggleConfigurator:function(e){this.toggleConfigurator(e)},hideConfigurator:function(e){this.active=!1,e.preventDefault()},changeInputStyle:function(e){this.$appState.inputStyle=e},changeRipple:function(e){this.$primevue.config.ripple=e},changeLayout:function(e,t){this.$emit("layout-change",t),e.preventDefault()},changeLayoutColor:function(e,t){this.$emit("layout-color-change",t),e.preventDefault()}},computed:{containerClass:function(){return["layout-config",{"layout-config-active":this.active}]},rippleActive:function(){return this.$primevue.config.ripple},inputStyle:function(){return this.$appState.inputStyle}},render:function(e,t,o,a,l,i){var r=(0,n.resolveComponent)("RadioButton"),c=(0,n.resolveComponent)("InputSwitch");return(0,n.openBlock)(),(0,n.createBlock)("div",{id:"layout-config",class:i.containerClass},[(0,n.createVNode)("a",{href:"#",class:"layout-config-close",onClick:t[1]||(t[1]=function(){return i.hideConfigurator&&i.hideConfigurator.apply(i,arguments)})},[R]),(0,n.createVNode)("div",Z,[F,(0,n.createVNode)("div",E,[(0,n.createVNode)("div",W,[(0,n.createVNode)(r,{id:"input_outlined",name:"inputstyle",value:"outlined",modelValue:i.inputStyle,"onUpdate:modelValue":i.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),O]),(0,n.createVNode)("div",P,[(0,n.createVNode)(r,{id:"input_filled",name:"inputstyle",value:"filled",modelValue:i.inputStyle,"onUpdate:modelValue":i.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),j])]),z,(0,n.createVNode)(c,{modelValue:i.rippleActive,"onUpdate:modelValue":i.changeRipple},null,8,["modelValue","onUpdate:modelValue"]),q,(0,n.createVNode)("div",G,[(0,n.createVNode)("div",H,[(0,n.createVNode)(r,{id:"static",name:"layoutMode",value:"static",modelValue:l.d_layoutMode,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.d_layoutMode=e}),onChange:t[3]||(t[3]=function(e){return i.changeLayout(e,"static")})},null,8,["modelValue"]),J]),(0,n.createVNode)("div",K,[(0,n.createVNode)(r,{id:"overlay",name:"layoutMode",value:"overlay",modelValue:l.d_layoutMode,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.d_layoutMode=e}),onChange:t[5]||(t[5]=function(e){return i.changeLayout(e,"overlay")})},null,8,["modelValue"]),Q])]),X,(0,n.createVNode)("div",Y,[(0,n.createVNode)("div",ee,[(0,n.createVNode)(r,{id:"dark",name:"layoutColorMode",value:"dark",modelValue:l.d_layoutColorMode,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.d_layoutColorMode=e}),onChange:t[7]||(t[7]=function(e){return i.changeLayoutColor(e,"dark")})},null,8,["modelValue"]),te]),(0,n.createVNode)("div",oe,[(0,n.createVNode)(r,{id:"light",name:"layoutColorMode",value:"light",modelValue:l.d_layoutColorMode,"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.d_layoutColorMode=e}),onChange:t[9]||(t[9]=function(e){return i.changeLayoutColor(e,"light")})},null,8,["modelValue"]),ne])])])],2)}},le=ae;var ie=(0,n.withScopeId)("data-v-1f4c48b6");(0,n.pushScopeId)("data-v-1f4c48b6");var re={class:"layout-footer"},ce=(0,n.createVNode)("span",{class:"footer-text",style:{"margin-right":"5px"}},"Unruh Solutions - © All rights reserved",-1),ue=(0,n.createVNode)("span",{class:"footer-text",style:{"margin-left":"5px"}},null,-1);(0,n.popScopeId)();var se=ie((function(e,t,o,a,l,i){return(0,n.openBlock)(),(0,n.createBlock)("div",re,[ce,ue])}));const de={name:"AppFooter"};var pe=o(3379),me=o.n(pe),fe=o(6344),ve={insert:"head",singleton:!1};me()(fe.Z,ve);fe.Z.locals;de.render=se,de.__scopeId="data-v-1f4c48b6";const ye={data:function(){return{layoutMode:"static",layoutColorMode:"dark",staticMenuInactive:!1,overlayMenuActive:!1,mobileMenuActive:!1,menu:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:"dashboard"},{label:"Media",icon:"pi pi-fw pi-images",to:"media"},{label:"Users",icon:"pi pi-fw pi-users",to:"users"},{label:"Categories",icon:"pi pi-fw pi-list",to:"categories"},{label:"Posts",icon:"pi pi-fw pi-book",to:"posts"},{label:"Settings",icon:"pi pi-fw pi-cog",to:"settings"}]}},methods:{onToggleConfig:function(e){this.$refs.appConfig.toggleConfigurator(e)},onWrapperClick:function(){this.menuClick||(this.overlayMenuActive=!1,this.mobileMenuActive=!1),this.menuClick=!1},onMenuToggle:function(){this.menuClick=!0,this.isDesktop()?"overlay"===this.layoutMode?(!0===this.mobileMenuActive&&(this.overlayMenuActive=!0),this.overlayMenuActive=!this.overlayMenuActive,this.mobileMenuActive=!1):"static"===this.layoutMode&&(this.staticMenuInactive=!this.staticMenuInactive):this.mobileMenuActive=!this.mobileMenuActive,event.preventDefault()},onSidebarClick:function(){this.menuClick=!0},onMenuItemClick:function(e){e.item&&!e.item.items&&(this.overlayMenuActive=!1,this.mobileMenuActive=!1)},onLayoutChange:function(e){this.layoutMode=e},onLayoutColorChange:function(e){this.layoutColorMode=e},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},isDesktop:function(){return window.innerWidth>1024},isSidebarVisible:function(){return!this.isDesktop()||("static"===this.layoutMode?!this.staticMenuInactive:"overlay"!==this.layoutMode||this.overlayMenuActive)}},computed:{containerClass:function(){return["layout-wrapper",{"layout-overlay":"overlay"===this.layoutMode,"layout-static":"static"===this.layoutMode,"layout-static-sidebar-inactive":this.staticMenuInactive&&"static"===this.layoutMode,"layout-overlay-sidebar-active":this.overlayMenuActive&&"overlay"===this.layoutMode,"layout-mobile-sidebar-active":this.mobileMenuActive,"p-input-filled":"filled"===this.$appState.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},sidebarClass:function(){return["layout-sidebar",{"layout-sidebar-dark":"dark"===this.layoutColorMode,"layout-sidebar-light":"light"===this.layoutColorMode}]},logo:function(){return"assets/layout/images/v-logo.png"}},beforeUpdate:function(){this.mobileMenuActive?this.addClass(document.body,"body-overflow-hidden"):this.removeClass(document.body,"body-overflow-hidden")},components:{AppTopBar:v,AppProfile:S,AppMenu:U,AppConfig:le,AppFooter:de}};var ge=o(7068),he={insert:"head",singleton:!1};me()(ge.Z,he);ge.Z.locals;ye.render=function(e,t,o,i,r,c){var u=(0,n.resolveComponent)("AppTopBar"),s=(0,n.resolveComponent)("inertia-link"),d=(0,n.resolveComponent)("AppProfile"),p=(0,n.resolveComponent)("AppMenu"),m=(0,n.resolveComponent)("AppConfig"),f=(0,n.resolveComponent)("AppFooter");return(0,n.openBlock)(),(0,n.createBlock)("div",{class:c.containerClass,onClick:t[2]||(t[2]=function(){return c.onWrapperClick&&c.onWrapperClick.apply(c,arguments)})},[(0,n.createVNode)(u,{onMenuToggle:c.onMenuToggle,onConfigToggle:c.onToggleConfig},null,8,["onMenuToggle","onConfigToggle"]),(0,n.createVNode)(n.Transition,{name:"layout-sidebar"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)("div",{class:c.sidebarClass,onClick:t[1]||(t[1]=function(){return c.onSidebarClick&&c.onSidebarClick.apply(c,arguments)})},[(0,n.createVNode)("div",a,[(0,n.createVNode)(s,{href:"/"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("img",{alt:"Logo",src:c.logo,style:{width:"50%"}},null,8,["src"])]})),_:1})]),(0,n.createVNode)(d),(0,n.createVNode)(p,{model:r.menu,onMenuitemClick:c.onMenuItemClick},null,8,["model","onMenuitemClick"])],2),[[n.vShow,c.isSidebarVisible()]])]})),_:1}),(0,n.createVNode)("div",l,[(0,n.renderSlot)(e.$slots,"default")]),(0,n.createVNode)(m,{layoutMode:r.layoutMode,ref:"appConfig",layoutColorMode:r.layoutColorMode,onLayoutChange:c.onLayoutChange,onLayoutColorChange:c.onLayoutColorChange},null,8,["layoutMode","layoutColorMode","onLayoutChange","onLayoutColorChange"]),(0,n.createVNode)(f)],2)};const Ce=ye},3499:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>u});var n=o(5166),a={class:"p-grid"},l={class:"p-col-12"},i={class:"card"},r=(0,n.createVNode)("p",null,"Use this page to start from scratch and place your custom content.",-1);const c={layout:o(7617).Z,data:function(){return{title:"Dashboard",icon:"pi pi-fw pi-home",breadcrumb:[]}},render:function(e,t,o,c,u,s){var d=(0,n.resolveComponent)("Breadcrumb");return(0,n.openBlock)(),(0,n.createBlock)("div",a,[(0,n.createVNode)("div",l,[(0,n.createVNode)(d,{model:u.breadcrumb,title:u.title,icon:u.icon},null,8,["model","title","icon"]),(0,n.createVNode)("div",i,[(0,n.createVNode)("h5",null,(0,n.toDisplayString)(u.title),1),r])])])}},u=c}}]);