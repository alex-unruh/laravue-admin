(self.webpackChunk=self.webpackChunk||[]).push([[94],{383:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(3645),n=o.n(a)()((function(e){return e[1]}));n.push([e.id,".p-toast.p-toast-topright{top:70px;z-index:1000}",""]);const l=n},2428:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(3645),n=o.n(a)()((function(e){return e[1]}));n.push([e.id,".layout-footer[data-v-5cd3072b]{text-align:center}",""]);const l=n},1049:(e,t,o)=>{"use strict";o.d(t,{Z:()=>Ce});var a=o(5166),n={class:"layout-logo"},l={class:"layout-main"};var i=(0,a.createVNode)("span",{class:"pi pi-bars"},null,-1),r={class:"layout-topbar-icons"},s={class:"layout-topbar-search"},c=(0,a.createVNode)("span",{class:"layout-topbar-search-icon pi pi-search"},null,-1),u=(0,a.createStaticVNode)('<button class="p-link"><span class="layout-topbar-item-text">Events</span><span class="layout-topbar-icon pi pi-calendar"></span></button><button class="p-link"><span class="layout-topbar-item-text">User</span><span class="layout-topbar-icon pi pi-user"></span></button>',2),d=(0,a.createVNode)("span",{class:"layout-topbar-item-text"},"Settings",-1),p=(0,a.createVNode)("span",{class:"layout-topbar-icon pi pi-cog"},null,-1);const m={props:{colorMode:String},computed:{layoutClass:function(){return["layout-topbar","p-shadow-5","layout-topbar-"+this.colorMode]}},methods:{onMenuToggle:function(e){this.$emit("menu-toggle",e)},onToggleConfig:function(e){this.$emit("configToggle",e)}},render:function(e,t,o,n,l,m){var f=(0,a.resolveComponent)("InputText");return(0,a.openBlock)(),(0,a.createBlock)("div",{class:m.layoutClass},[(0,a.createVNode)("button",{class:"p-link layout-menu-button",onClick:t[1]||(t[1]=function(){return m.onMenuToggle&&m.onMenuToggle.apply(m,arguments)})},[i]),(0,a.createVNode)("div",r,[(0,a.createVNode)("span",s,[(0,a.createVNode)(f,{type:"text",placeholder:"Search"}),c]),u,(0,a.createVNode)("button",{class:"p-link",onClick:t[2]||(t[2]=function(){return m.onToggleConfig&&m.onToggleConfig.apply(m,arguments)})},[d,p])])],2)}},f=m;var g=(0,a.withScopeId)("data-v-5a6b9146");(0,a.pushScopeId)("data-v-5a6b9146");var y={class:"layout-profile"},v=(0,a.createVNode)("div",null,[(0,a.createVNode)("img",{src:"assets/layout/images/user.png",alt:""})],-1),h=(0,a.createVNode)("span",{class:"username"},"Alexandre Unruh",-1),C=(0,a.createVNode)("i",{class:"pi pi-fw pi-cog"},null,-1),V=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-user"}),(0,a.createVNode)("span",null,"Account")])],-1),b=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-inbox"}),(0,a.createVNode)("span",null,"Notifications"),(0,a.createVNode)("span",{class:"menuitem-badge"},"2")])],-1),k=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-power-off"}),(0,a.createVNode)("span",null,"Logout")])],-1);(0,a.popScopeId)();var N=g((function(e,t,o,n,l,i){return(0,a.openBlock)(),(0,a.createBlock)("div",y,[v,(0,a.createVNode)("button",{class:"p-link layout-profile-link",onClick:t[1]||(t[1]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},[h,C]),(0,a.createVNode)(a.Transition,{name:"layout-submenu-wrapper"},{default:g((function(){return[(0,a.withDirectives)((0,a.createVNode)("ul",null,[V,b,k],512),[[a.vShow,l.expanded]])]})),_:1})])}));const M={data:function(){return{expanded:!1}},methods:{onClick:function(e){this.expanded=!this.expanded,e.preventDefault()}}};M.render=N,M.__scopeId="data-v-5a6b9146";const S=M;var w={class:"layout-menu-container"};var B={key:0},x={key:0,class:"arrow"},A={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},I={key:1,class:"menuitem-badge"},_={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},L={key:1,class:"menuitem-badge"};const D={name:"appsubmenu",props:{items:Array,root:{type:Boolean,default:!1}},data:function(){return{activeIndex:null,currentRoute:null}},methods:{onMenuItemClick:function(e,t,o){t.disabled?e.preventDefault():(t.to||t.url||e.preventDefault(),this.currentRoute=t.to,t.command&&t.command({originalEvent:e,item:t}),this.activeIndex=o===this.activeIndex?null:o,this.$emit("menuitem-click",{originalEvent:e,item:t}))},visible:function(e){return"function"==typeof e.visible?e.visible():!1!==e.visible},getClasses:function(e){var t=this.currentRoute==e.to;return[e.class,"p-ripple",{"router-link-active":t,"router-link-exact-active":t,"p-disabled":e.disabled}]}},render:function(e,t,o,n,l,i){var r=(0,a.resolveComponent)("inertia-link"),s=(0,a.resolveComponent)("appsubmenu"),c=(0,a.resolveDirective)("ripple");return o.items?((0,a.openBlock)(),(0,a.createBlock)("ul",B,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(o.items,(function(n,u){return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[i.visible(n)&&!n.separator?((0,a.openBlock)(),(0,a.createBlock)("li",{key:u,class:[{"active-menuitem":l.activeIndex===u&&!n.to&&!n.disabled}],role:"none"},[n.items&&!0===o.root?((0,a.openBlock)(),(0,a.createBlock)("div",x)):(0,a.createCommentVNode)("",!0),e.route().has(n.to)?((0,a.openBlock)(),(0,a.createBlock)(r,{key:1,href:e.route(n.to),class:i.getClasses(n),onClick:function(e){return i.onMenuItemClick(e,n,u)},"aria-current":e.route().current(n.to)?"page":"",target:n.target,exact:""},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("i",{class:n.icon},null,2),(0,a.createVNode)("span",null,(0,a.toDisplayString)(n.label),1),n.items?((0,a.openBlock)(),(0,a.createBlock)("i",A)):(0,a.createCommentVNode)("",!0),n.badge?((0,a.openBlock)(),(0,a.createBlock)("span",I,(0,a.toDisplayString)(n.badge),1)):(0,a.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-current","target"])):(0,a.createCommentVNode)("",!0),n.to?(0,a.createCommentVNode)("",!0):(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createBlock)("a",{key:2,href:n.url||"#",style:n.style,class:[n.class,"p-ripple",{"p-disabled":n.disabled}],onClick:function(e){return i.onMenuItemClick(e,n,u)},target:n.target,role:"menuitem"},[(0,a.createVNode)("i",{class:n.icon},null,2),(0,a.createVNode)("span",null,(0,a.toDisplayString)(n.label),1),n.items?((0,a.openBlock)(),(0,a.createBlock)("i",_)):(0,a.createCommentVNode)("",!0),n.badge?((0,a.openBlock)(),(0,a.createBlock)("span",L,(0,a.toDisplayString)(n.badge),1)):(0,a.createCommentVNode)("",!0)],14,["href","onClick","target"])),[[c]]),(0,a.createVNode)(a.Transition,{name:"layout-submenu-wrapper"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)(s,{items:i.visible(n)&&n.items,onMenuitemClick:t[1]||(t[1]=function(t){return e.$emit("menuitem-click",t)})},null,8,["items"]),[[a.vShow,l.activeIndex===u]])]})),_:2},1024)],2)):(0,a.createCommentVNode)("",!0),i.visible(n)&&n.separator?((0,a.openBlock)(),(0,a.createBlock)("li",{class:"p-menu-separator",style:n.style,key:"separator"+u,role:"separator"},null,4)):(0,a.createCommentVNode)("",!0)],64)})),256))])):(0,a.createCommentVNode)("",!0)}},T={props:{model:Array},methods:{onMenuItemClick:function(e){this.$emit("menuitem-click",e)}},components:{AppSubmenu:D},render:function(e,t,o,n,l,i){var r=(0,a.resolveComponent)("AppSubmenu");return(0,a.openBlock)(),(0,a.createBlock)("div",w,[(0,a.createVNode)(r,{items:o.model,class:"layout-menu",root:!0,onMenuitemClick:i.onMenuItemClick},null,8,["items","onMenuitemClick"])])}},$=T;var U=(0,a.createVNode)("i",{class:"pi pi-times"},null,-1),F={class:"layout-config-content"},E=(0,a.createVNode)("h5",{style:{"margin-top":"0"}},"Input Style",-1),R={class:"p-formgroup-inline"},Z={class:"p-field-radiobutton"},O=(0,a.createVNode)("label",{for:"input_outlined"},"Outlined",-1),P={class:"p-field-radiobutton"},W=(0,a.createVNode)("label",{for:"input_filled"},"Filled",-1),j=(0,a.createVNode)("h5",null,"Ripple Effect",-1),z=(0,a.createVNode)("h5",null,"Menu Type",-1),q={class:"p-formgroup-inline"},G={class:"p-field-radiobutton"},H=(0,a.createVNode)("label",{for:"static"},"Static",-1),J={class:"p-field-radiobutton"},K=(0,a.createVNode)("label",{for:"overlay"},"Overlay",-1),Q=(0,a.createVNode)("h5",null,"Menu Theme",-1),X={class:"p-formgroup-inline"},Y={class:"p-field-radiobutton"},ee=(0,a.createVNode)("label",{for:"dark"},"Dark",-1),te={class:"p-field-radiobutton"},oe=(0,a.createVNode)("label",{for:"dark"},"Deluxe",-1),ae=(0,a.createVNode)("h5",null,"Logo",-1),ne={class:"p-formgroup-inline"};const le={props:{layoutMode:{type:String,default:null},layoutColorMode:{type:String,default:null}},data:function(){return{active:!1,d_layoutMode:this.layoutMode,d_layoutColorMode:this.layoutColorMode,form:this.$inertia.form({logo:null})}},watch:{$route:function(){this.active&&(this.active=!1,this.unbindOutsideClickListener())},layoutMode:function(e){this.d_layoutMode=e},layoutColorMode:function(e){this.d_layoutColorMode=e}},outsideClickListener:null,methods:{toggleConfigurator:function(e){this.active=!this.active,e.preventDefault()},onToggleConfigurator:function(e){this.toggleConfigurator(e)},hideConfigurator:function(e){this.active=!1,e.preventDefault()},changeInputStyle:function(e){this.$appState.inputStyle=e},changeRipple:function(e){this.$primevue.config.ripple=e},changeLayout:function(e,t){this.$emit("layout-change",t),e.preventDefault()},changeLayoutColor:function(e,t){this.$emit("layout-color-change",t),e.preventDefault()},uploadLogo:function(e){var t=this;this.$inertia.visit(route("change.logo"),{method:"post",forceFormData:!0,data:{logo:e.files[0]},onSuccess:function(){t.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3}),t.$refs.fileInput.clear()}})}},computed:{containerClass:function(){return["layout-config",{"layout-config-active":this.active}]},rippleActive:function(){return this.$primevue.config.ripple},inputStyle:function(){return this.$appState.inputStyle}},emits:["layout-change","layout-color-change"],render:function(e,t,o,n,l,i){var r=(0,a.resolveComponent)("Toast"),s=(0,a.resolveComponent)("RadioButton"),c=(0,a.resolveComponent)("InputSwitch"),u=(0,a.resolveComponent)("FileUpload");return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)(r),(0,a.createVNode)("div",{id:"layout-config",class:i.containerClass},[(0,a.createVNode)("a",{href:"#",class:"layout-config-close",onClick:t[1]||(t[1]=function(){return i.hideConfigurator&&i.hideConfigurator.apply(i,arguments)})},[U]),(0,a.createVNode)("div",F,[E,(0,a.createVNode)("div",R,[(0,a.createVNode)("div",Z,[(0,a.createVNode)(s,{id:"input_outlined",name:"inputstyle",value:"outlined",modelValue:i.inputStyle,"onUpdate:modelValue":i.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),O]),(0,a.createVNode)("div",P,[(0,a.createVNode)(s,{id:"input_filled",name:"inputstyle",value:"filled",modelValue:i.inputStyle,"onUpdate:modelValue":i.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),W])]),j,(0,a.createVNode)(c,{modelValue:i.rippleActive,"onUpdate:modelValue":i.changeRipple},null,8,["modelValue","onUpdate:modelValue"]),z,(0,a.createVNode)("div",q,[(0,a.createVNode)("div",G,[(0,a.createVNode)(s,{id:"static",name:"layoutMode",value:"static",modelValue:l.d_layoutMode,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.d_layoutMode=e}),onChange:t[3]||(t[3]=function(e){return i.changeLayout(e,"static")})},null,8,["modelValue"]),H]),(0,a.createVNode)("div",J,[(0,a.createVNode)(s,{id:"overlay",name:"layoutMode",value:"overlay",modelValue:l.d_layoutMode,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.d_layoutMode=e}),onChange:t[5]||(t[5]=function(e){return i.changeLayout(e,"overlay")})},null,8,["modelValue"]),K])]),Q,(0,a.createVNode)("div",X,[(0,a.createVNode)("div",Y,[(0,a.createVNode)(s,{id:"dark",name:"layoutColorMode",value:"dark",modelValue:l.d_layoutColorMode,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.d_layoutColorMode=e}),onChange:t[7]||(t[7]=function(e){return i.changeLayoutColor(e,"dark")})},null,8,["modelValue"]),ee]),(0,a.createVNode)("div",te,[(0,a.createVNode)(s,{id:"deluxe",name:"layoutColorMode",value:"deluxe",modelValue:l.d_layoutColorMode,"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.d_layoutColorMode=e}),onChange:t[9]||(t[9]=function(e){return i.changeLayoutColor(e,"deluxe")})},null,8,["modelValue"]),oe])]),ae,(0,a.createVNode)("div",ne,[(0,a.createVNode)(u,{ref:"fileInput",mode:"basic",id:"logo",accept:"image/*",customUpload:!0,maxFileSize:1e6,onUploader:i.uploadLogo},null,8,["onUploader"])])])],2)],64)}},ie=le;var re=(0,a.withScopeId)("data-v-5cd3072b");(0,a.pushScopeId)("data-v-5cd3072b");var se={class:"footer-text",style:{"margin-right":"5px"}},ce=(0,a.createVNode)("span",{class:"footer-text",style:{"margin-left":"5px"}},null,-1);(0,a.popScopeId)();var ue=re((function(e,t,o,n,l,i){return(0,a.openBlock)(),(0,a.createBlock)("div",{class:i.layoutClass},[(0,a.createVNode)("span",se,(0,a.toDisplayString)(o.appName)+" | version: "+(0,a.toDisplayString)(o.appVersion)+" - MIT License",1),ce],2)}));const de={name:"AppFooter",props:{appName:String,appVersion:String,colorMode:String},computed:{layoutClass:function(){return["layout-footer","layout-footer-"+this.colorMode]}}};var pe=o(3379),me=o.n(pe),fe=o(2428),ge={insert:"head",singleton:!1};me()(fe.Z,ge);fe.Z.locals;de.render=ue,de.__scopeId="data-v-5cd3072b";const ye={props:{settings:Object},data:function(){return{layoutMode:"static",layoutColorMode:"dark",staticMenuInactive:!1,overlayMenuActive:!1,mobileMenuActive:!1,menu:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:"dashboard"},{label:"Users",icon:"pi pi-fw pi-users",to:"users"},{label:"Categories",icon:"pi pi-fw pi-list",to:"categories"},{label:"Posts",icon:"pi pi-fw pi-book",to:"posts"},{label:"Settings",icon:"pi pi-fw pi-cog",to:"settings"},{label:"Media",icon:"pi pi-fw pi-images",to:"media"}]}},methods:{onToggleConfig:function(e){this.$refs.appConfig.toggleConfigurator(e)},onWrapperClick:function(){this.menuClick||(this.overlayMenuActive=!1,this.mobileMenuActive=!1),this.menuClick=!1},onMenuToggle:function(){this.menuClick=!0,this.isDesktop()?"overlay"===this.layoutMode?(!0===this.mobileMenuActive&&(this.overlayMenuActive=!0),this.overlayMenuActive=!this.overlayMenuActive,this.mobileMenuActive=!1):"static"===this.layoutMode&&(this.staticMenuInactive=!this.staticMenuInactive):this.mobileMenuActive=!this.mobileMenuActive,event.preventDefault()},onSidebarClick:function(){this.menuClick=!0},onMenuItemClick:function(e){e.item&&!e.item.items&&(this.overlayMenuActive=!1,this.mobileMenuActive=!1)},onLayoutChange:function(e){this.layoutMode=e,this.saveSetting("menu_type",e)},onLayoutColorChange:function(e){this.layoutColorMode=e,this.saveSetting("menu_theme",e)},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},isDesktop:function(){return window.innerWidth>1024},saveSetting:function(e,t){var o=this;this.$inertia.visit(route("settings.store"),{method:"post",preserveState:!0,preserveScroll:!0,data:{key:e,value:t},onSuccess:function(){o.$toast.add({severity:"info",summary:"Success",detail:"Layout changed",life:2e3})}})},isSidebarVisible:function(){return!this.isDesktop()||("static"===this.layoutMode?!this.staticMenuInactive:"overlay"!==this.layoutMode||this.overlayMenuActive)}},computed:{containerClass:function(){return["layout-wrapper",{"layout-overlay":"overlay"===this.layoutMode,"layout-static":"static"===this.layoutMode,"layout-static-sidebar-inactive":this.staticMenuInactive&&"static"===this.layoutMode,"layout-overlay-sidebar-active":this.overlayMenuActive&&"overlay"===this.layoutMode,"layout-mobile-sidebar-active":this.mobileMenuActive,"p-input-filled":"filled"===this.$appState.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},sidebarClass:function(){return["layout-sidebar",{"layout-sidebar-dark":"dark"===this.layoutColorMode,"layout-sidebar-deluxe":"deluxe"===this.layoutColorMode}]},topbarClass:function(){return["layout-sidebar",{"layout-topbar-dark":"dark"===this.layoutColorMode,"layout-topbar-deluxe":"deluxe"===this.layoutColorMode}]},logo:function(){return this.settings.admin_logo&&""!==this.settings.admin_logo?"storage/"+this.settings.admin_logo:"assets/layout/images/v-logo.png"}},beforeUpdate:function(){this.mobileMenuActive?this.addClass(document.body,"body-overflow-hidden"):this.removeClass(document.body,"body-overflow-hidden")},mounted:function(){this.layoutMode=this.settings.menu_type,this.layoutColorMode=this.settings.menu_theme},components:{AppTopBar:f,AppProfile:S,AppMenu:$,AppConfig:ie,AppFooter:de}};var ve=o(383),he={insert:"head",singleton:!1};me()(ve.Z,he);ve.Z.locals;ye.render=function(e,t,o,i,r,s){var c=(0,a.resolveComponent)("Toast"),u=(0,a.resolveComponent)("AppTopBar"),d=(0,a.resolveComponent)("inertia-link"),p=(0,a.resolveComponent)("AppProfile"),m=(0,a.resolveComponent)("AppMenu"),f=(0,a.resolveComponent)("AppConfig"),g=(0,a.resolveComponent)("AppFooter");return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)(c),(0,a.createVNode)("div",{class:s.containerClass,onClick:t[2]||(t[2]=function(){return s.onWrapperClick&&s.onWrapperClick.apply(s,arguments)})},[(0,a.createVNode)(u,{onMenuToggle:s.onMenuToggle,onConfigToggle:s.onToggleConfig,colorMode:r.layoutColorMode},null,8,["onMenuToggle","onConfigToggle","colorMode"]),(0,a.createVNode)(a.Transition,{name:"layout-sidebar"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)("div",{class:s.sidebarClass,onClick:t[1]||(t[1]=function(){return s.onSidebarClick&&s.onSidebarClick.apply(s,arguments)})},[(0,a.createVNode)("div",n,[(0,a.createVNode)(d,{href:"/"},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("img",{alt:"Logo",src:s.logo,style:{width:"50%"}},null,8,["src"])]})),_:1})]),(0,a.createVNode)(p),(0,a.createVNode)(m,{model:r.menu,onMenuitemClick:s.onMenuItemClick},null,8,["model","onMenuitemClick"])],2),[[a.vShow,s.isSidebarVisible()]])]})),_:1}),(0,a.createVNode)("div",l,[(0,a.renderSlot)(e.$slots,"default")]),(0,a.createVNode)(f,{layoutMode:r.layoutMode,ref:"appConfig",layoutColorMode:r.layoutColorMode,onLayoutChange:s.onLayoutChange,onLayoutColorChange:s.onLayoutColorChange},null,8,["layoutMode","layoutColorMode","onLayoutChange","onLayoutColorChange"]),(0,a.createVNode)(g,{colorMode:r.layoutColorMode,appName:o.settings.app_name,appVersion:o.settings.app_version},null,8,["colorMode","appName","appVersion"])],2)],64)};const Ce=ye},6094:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i});var a=o(5166),n={style:{"text-align":"center"}};const l={layout:o(1049).Z,name:"Error",props:{status:Number},computed:{title:function(){return{503:"503: Service Unavailable",500:"500: Server Error",404:"404: Page Not Found",403:"403: Forbidden"}[this.status]},description:function(){return{503:"pageError.503",500:"pageError.500",404:"pageError.404",403:"pageError.403"}[this.status]}},render:function(e,t,o,l,i,r){var s=(0,a.resolveComponent)("inertia-head");return(0,a.openBlock)(),(0,a.createBlock)("div",null,[(0,a.createVNode)(s,{title:"Error"}),(0,a.createVNode)("div",n,[(0,a.createVNode)("h1",null,(0,a.toDisplayString)(r.title),1)])])}},i=l}}]);