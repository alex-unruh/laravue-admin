(self.webpackChunk=self.webpackChunk||[]).push([[665],{383:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var a=o(3645),l=o.n(a)()((function(e){return e[1]}));l.push([e.id,".p-toast.p-toast-topright{top:70px;z-index:1000}",""]);const n=l},647:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var a=o(3645),l=o.n(a)()((function(e){return e[1]}));l.push([e.id,".table-header[data-v-55198572]{display:flex;justify-content:space-between}.user-image[data-v-55198572]{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);width:50px}.p-dialog .user-image[data-v-55198572]{display:block;margin:0 auto 2rem;width:150px}.confirmation-content[data-v-55198572]{align-items:center;display:flex;justify-content:center}[data-v-55198572] .p-toolbar{flex-wrap:wrap}[data-v-55198572] .p-toolbar .p-button{margin-bottom:.25rem}",""]);const n=l},2428:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var a=o(3645),l=o.n(a)()((function(e){return e[1]}));l.push([e.id,".layout-footer[data-v-5cd3072b]{text-align:center}",""]);const n=l},1049:(e,t,o)=>{"use strict";o.d(t,{Z:()=>be});var a=o(5166),l={class:"layout-logo"},n={class:"layout-main"};var i=(0,a.createVNode)("span",{class:"pi pi-bars"},null,-1),r={class:"layout-topbar-icons"},s={class:"layout-topbar-search"},c=(0,a.createVNode)("span",{class:"layout-topbar-search-icon pi pi-search"},null,-1),u=(0,a.createStaticVNode)('<button class="p-link"><span class="layout-topbar-item-text">Events</span><span class="layout-topbar-icon pi pi-calendar"></span></button><button class="p-link"><span class="layout-topbar-item-text">User</span><span class="layout-topbar-icon pi pi-user"></span></button>',2),d=(0,a.createVNode)("span",{class:"layout-topbar-item-text"},"Settings",-1),p=(0,a.createVNode)("span",{class:"layout-topbar-icon pi pi-cog"},null,-1);const m={props:{colorMode:String},computed:{layoutClass:function(){return["layout-topbar","p-shadow-5","layout-topbar-"+this.colorMode]}},methods:{onMenuToggle:function(e){this.$emit("menu-toggle",e)},onToggleConfig:function(e){this.$emit("configToggle",e)}},render:function(e,t,o,l,n,m){var f=(0,a.resolveComponent)("InputText");return(0,a.openBlock)(),(0,a.createBlock)("div",{class:m.layoutClass},[(0,a.createVNode)("button",{class:"p-link layout-menu-button",onClick:t[1]||(t[1]=function(){return m.onMenuToggle&&m.onMenuToggle.apply(m,arguments)})},[i]),(0,a.createVNode)("div",r,[(0,a.createVNode)("span",s,[(0,a.createVNode)(f,{type:"text",placeholder:"Search"}),c]),u,(0,a.createVNode)("button",{class:"p-link",onClick:t[2]||(t[2]=function(){return m.onToggleConfig&&m.onToggleConfig.apply(m,arguments)})},[d,p])])],2)}},f=m;var g=(0,a.withScopeId)("data-v-5a6b9146");(0,a.pushScopeId)("data-v-5a6b9146");var h={class:"layout-profile"},v=(0,a.createVNode)("div",null,[(0,a.createVNode)("img",{src:"assets/layout/images/user.png",alt:""})],-1),y=(0,a.createVNode)("span",{class:"username"},"Alexandre Unruh",-1),b=(0,a.createVNode)("i",{class:"pi pi-fw pi-cog"},null,-1),V=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-user"}),(0,a.createVNode)("span",null,"Account")])],-1),C=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-inbox"}),(0,a.createVNode)("span",null,"Notifications"),(0,a.createVNode)("span",{class:"menuitem-badge"},"2")])],-1),N=(0,a.createVNode)("li",null,[(0,a.createVNode)("button",{class:"p-link"},[(0,a.createVNode)("i",{class:"pi pi-fw pi-power-off"}),(0,a.createVNode)("span",null,"Logout")])],-1);(0,a.popScopeId)();var k=g((function(e,t,o,l,n,i){return(0,a.openBlock)(),(0,a.createBlock)("div",h,[v,(0,a.createVNode)("button",{class:"p-link layout-profile-link",onClick:t[1]||(t[1]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},[y,b]),(0,a.createVNode)(a.Transition,{name:"layout-submenu-wrapper"},{default:g((function(){return[(0,a.withDirectives)((0,a.createVNode)("ul",null,[V,C,N],512),[[a.vShow,n.expanded]])]})),_:1})])}));const M={data:function(){return{expanded:!1}},methods:{onClick:function(e){this.expanded=!this.expanded,e.preventDefault()}}};M.render=k,M.__scopeId="data-v-5a6b9146";const S=M;var w={class:"layout-menu-container"};var U={key:0},x={key:0,class:"arrow"},D={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},B={key:1,class:"menuitem-badge"},I={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},_={key:1,class:"menuitem-badge"};const L={name:"appsubmenu",props:{items:Array,root:{type:Boolean,default:!1}},data:function(){return{activeIndex:null,currentRoute:null}},methods:{onMenuItemClick:function(e,t,o){t.disabled?e.preventDefault():(t.to||t.url||e.preventDefault(),this.currentRoute=t.to,t.command&&t.command({originalEvent:e,item:t}),this.activeIndex=o===this.activeIndex?null:o,this.$emit("menuitem-click",{originalEvent:e,item:t}))},visible:function(e){return"function"==typeof e.visible?e.visible():!1!==e.visible},getClasses:function(e){var t=this.currentRoute==e.to;return[e.class,"p-ripple",{"router-link-active":t,"router-link-exact-active":t,"p-disabled":e.disabled}]}},render:function(e,t,o,l,n,i){var r=(0,a.resolveComponent)("inertia-link"),s=(0,a.resolveComponent)("appsubmenu"),c=(0,a.resolveDirective)("ripple");return o.items?((0,a.openBlock)(),(0,a.createBlock)("ul",U,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(o.items,(function(l,u){return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[i.visible(l)&&!l.separator?((0,a.openBlock)(),(0,a.createBlock)("li",{key:u,class:[{"active-menuitem":n.activeIndex===u&&!l.to&&!l.disabled}],role:"none"},[l.items&&!0===o.root?((0,a.openBlock)(),(0,a.createBlock)("div",x)):(0,a.createCommentVNode)("",!0),e.route().has(l.to)?((0,a.openBlock)(),(0,a.createBlock)(r,{key:1,href:e.route(l.to),class:i.getClasses(l),onClick:function(e){return i.onMenuItemClick(e,l,u)},"aria-current":e.route().current(l.to)?"page":"",target:l.target,exact:""},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("i",{class:l.icon},null,2),(0,a.createVNode)("span",null,(0,a.toDisplayString)(l.label),1),l.items?((0,a.openBlock)(),(0,a.createBlock)("i",D)):(0,a.createCommentVNode)("",!0),l.badge?((0,a.openBlock)(),(0,a.createBlock)("span",B,(0,a.toDisplayString)(l.badge),1)):(0,a.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-current","target"])):(0,a.createCommentVNode)("",!0),l.to?(0,a.createCommentVNode)("",!0):(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createBlock)("a",{key:2,href:l.url||"#",style:l.style,class:[l.class,"p-ripple",{"p-disabled":l.disabled}],onClick:function(e){return i.onMenuItemClick(e,l,u)},target:l.target,role:"menuitem"},[(0,a.createVNode)("i",{class:l.icon},null,2),(0,a.createVNode)("span",null,(0,a.toDisplayString)(l.label),1),l.items?((0,a.openBlock)(),(0,a.createBlock)("i",I)):(0,a.createCommentVNode)("",!0),l.badge?((0,a.openBlock)(),(0,a.createBlock)("span",_,(0,a.toDisplayString)(l.badge),1)):(0,a.createCommentVNode)("",!0)],14,["href","onClick","target"])),[[c]]),(0,a.createVNode)(a.Transition,{name:"layout-submenu-wrapper"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)(s,{items:i.visible(l)&&l.items,onMenuitemClick:t[1]||(t[1]=function(t){return e.$emit("menuitem-click",t)})},null,8,["items"]),[[a.vShow,n.activeIndex===u]])]})),_:2},1024)],2)):(0,a.createCommentVNode)("",!0),i.visible(l)&&l.separator?((0,a.openBlock)(),(0,a.createBlock)("li",{class:"p-menu-separator",style:l.style,key:"separator"+u,role:"separator"},null,4)):(0,a.createCommentVNode)("",!0)],64)})),256))])):(0,a.createCommentVNode)("",!0)}},A={props:{model:Array},methods:{onMenuItemClick:function(e){this.$emit("menuitem-click",e)}},components:{AppSubmenu:L},render:function(e,t,o,l,n,i){var r=(0,a.resolveComponent)("AppSubmenu");return(0,a.openBlock)(),(0,a.createBlock)("div",w,[(0,a.createVNode)(r,{items:o.model,class:"layout-menu",root:!0,onMenuitemClick:i.onMenuItemClick},null,8,["items","onMenuitemClick"])])}},T=A;var $=(0,a.createVNode)("i",{class:"pi pi-times"},null,-1),P={class:"layout-config-content"},O=(0,a.createVNode)("h5",{style:{"margin-top":"0"}},"Input Style",-1),j={class:"p-formgroup-inline"},F={class:"p-field-radiobutton"},R=(0,a.createVNode)("label",{for:"input_outlined"},"Outlined",-1),E={class:"p-field-radiobutton"},Z=(0,a.createVNode)("label",{for:"input_filled"},"Filled",-1),q=(0,a.createVNode)("h5",null,"Ripple Effect",-1),z=(0,a.createVNode)("h5",null,"Menu Type",-1),W={class:"p-formgroup-inline"},Y={class:"p-field-radiobutton"},K=(0,a.createVNode)("label",{for:"static"},"Static",-1),G={class:"p-field-radiobutton"},H=(0,a.createVNode)("label",{for:"overlay"},"Overlay",-1),J=(0,a.createVNode)("h5",null,"Menu Theme",-1),Q={class:"p-formgroup-inline"},X={class:"p-field-radiobutton"},ee=(0,a.createVNode)("label",{for:"dark"},"Dark",-1),te={class:"p-field-radiobutton"},oe=(0,a.createVNode)("label",{for:"dark"},"Deluxe",-1),ae=(0,a.createVNode)("h5",null,"Logo",-1),le={class:"p-formgroup-inline"};const ne={props:{layoutMode:{type:String,default:null},layoutColorMode:{type:String,default:null}},data:function(){return{active:!1,d_layoutMode:this.layoutMode,d_layoutColorMode:this.layoutColorMode,form:this.$inertia.form({logo:null})}},watch:{$route:function(){this.active&&(this.active=!1,this.unbindOutsideClickListener())},layoutMode:function(e){this.d_layoutMode=e},layoutColorMode:function(e){this.d_layoutColorMode=e}},outsideClickListener:null,methods:{toggleConfigurator:function(e){this.active=!this.active,e.preventDefault()},onToggleConfigurator:function(e){this.toggleConfigurator(e)},hideConfigurator:function(e){this.active=!1,e.preventDefault()},changeInputStyle:function(e){this.$appState.inputStyle=e},changeRipple:function(e){this.$primevue.config.ripple=e},changeLayout:function(e,t){this.$emit("layout-change",t),e.preventDefault()},changeLayoutColor:function(e,t){this.$emit("layout-color-change",t),e.preventDefault()},uploadLogo:function(e){var t=this;this.$inertia.visit(route("change.logo"),{method:"post",forceFormData:!0,data:{logo:e.files[0]},onSuccess:function(){t.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3}),t.$refs.fileInput.clear()}})}},computed:{containerClass:function(){return["layout-config",{"layout-config-active":this.active}]},rippleActive:function(){return this.$primevue.config.ripple},inputStyle:function(){return this.$appState.inputStyle}},emits:["layout-change","layout-color-change"],render:function(e,t,o,l,n,i){var r=(0,a.resolveComponent)("Toast"),s=(0,a.resolveComponent)("RadioButton"),c=(0,a.resolveComponent)("InputSwitch"),u=(0,a.resolveComponent)("FileUpload");return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)(r),(0,a.createVNode)("div",{id:"layout-config",class:i.containerClass},[(0,a.createVNode)("a",{href:"#",class:"layout-config-close",onClick:t[1]||(t[1]=function(){return i.hideConfigurator&&i.hideConfigurator.apply(i,arguments)})},[$]),(0,a.createVNode)("div",P,[O,(0,a.createVNode)("div",j,[(0,a.createVNode)("div",F,[(0,a.createVNode)(s,{id:"input_outlined",name:"inputstyle",value:"outlined",modelValue:i.inputStyle,"onUpdate:modelValue":i.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),R]),(0,a.createVNode)("div",E,[(0,a.createVNode)(s,{id:"input_filled",name:"inputstyle",value:"filled",modelValue:i.inputStyle,"onUpdate:modelValue":i.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),Z])]),q,(0,a.createVNode)(c,{modelValue:i.rippleActive,"onUpdate:modelValue":i.changeRipple},null,8,["modelValue","onUpdate:modelValue"]),z,(0,a.createVNode)("div",W,[(0,a.createVNode)("div",Y,[(0,a.createVNode)(s,{id:"static",name:"layoutMode",value:"static",modelValue:n.d_layoutMode,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.d_layoutMode=e}),onChange:t[3]||(t[3]=function(e){return i.changeLayout(e,"static")})},null,8,["modelValue"]),K]),(0,a.createVNode)("div",G,[(0,a.createVNode)(s,{id:"overlay",name:"layoutMode",value:"overlay",modelValue:n.d_layoutMode,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.d_layoutMode=e}),onChange:t[5]||(t[5]=function(e){return i.changeLayout(e,"overlay")})},null,8,["modelValue"]),H])]),J,(0,a.createVNode)("div",Q,[(0,a.createVNode)("div",X,[(0,a.createVNode)(s,{id:"dark",name:"layoutColorMode",value:"dark",modelValue:n.d_layoutColorMode,"onUpdate:modelValue":t[6]||(t[6]=function(e){return n.d_layoutColorMode=e}),onChange:t[7]||(t[7]=function(e){return i.changeLayoutColor(e,"dark")})},null,8,["modelValue"]),ee]),(0,a.createVNode)("div",te,[(0,a.createVNode)(s,{id:"deluxe",name:"layoutColorMode",value:"deluxe",modelValue:n.d_layoutColorMode,"onUpdate:modelValue":t[8]||(t[8]=function(e){return n.d_layoutColorMode=e}),onChange:t[9]||(t[9]=function(e){return i.changeLayoutColor(e,"deluxe")})},null,8,["modelValue"]),oe])]),ae,(0,a.createVNode)("div",le,[(0,a.createVNode)(u,{ref:"fileInput",mode:"basic",id:"logo",accept:"image/*",customUpload:!0,maxFileSize:1e6,onUploader:i.uploadLogo},null,8,["onUploader"])])])],2)],64)}},ie=ne;var re=(0,a.withScopeId)("data-v-5cd3072b");(0,a.pushScopeId)("data-v-5cd3072b");var se={class:"footer-text",style:{"margin-right":"5px"}},ce=(0,a.createVNode)("span",{class:"footer-text",style:{"margin-left":"5px"}},null,-1);(0,a.popScopeId)();var ue=re((function(e,t,o,l,n,i){return(0,a.openBlock)(),(0,a.createBlock)("div",{class:i.layoutClass},[(0,a.createVNode)("span",se,(0,a.toDisplayString)(o.appName)+" | version: "+(0,a.toDisplayString)(o.appVersion)+" - MIT License",1),ce],2)}));const de={name:"AppFooter",props:{appName:String,appVersion:String,colorMode:String},computed:{layoutClass:function(){return["layout-footer","layout-footer-"+this.colorMode]}}};var pe=o(3379),me=o.n(pe),fe=o(2428),ge={insert:"head",singleton:!1};me()(fe.Z,ge);fe.Z.locals;de.render=ue,de.__scopeId="data-v-5cd3072b";const he={props:{settings:Object},data:function(){return{layoutMode:"static",layoutColorMode:"dark",staticMenuInactive:!1,overlayMenuActive:!1,mobileMenuActive:!1,menu:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:"dashboard"},{label:"Users",icon:"pi pi-fw pi-users",to:"users"},{label:"Categories",icon:"pi pi-fw pi-list",to:"categories"},{label:"Posts",icon:"pi pi-fw pi-book",to:"posts"},{label:"Settings",icon:"pi pi-fw pi-cog",to:"settings"},{label:"Media",icon:"pi pi-fw pi-images",to:"media"}]}},methods:{onToggleConfig:function(e){this.$refs.appConfig.toggleConfigurator(e)},onWrapperClick:function(){this.menuClick||(this.overlayMenuActive=!1,this.mobileMenuActive=!1),this.menuClick=!1},onMenuToggle:function(){this.menuClick=!0,this.isDesktop()?"overlay"===this.layoutMode?(!0===this.mobileMenuActive&&(this.overlayMenuActive=!0),this.overlayMenuActive=!this.overlayMenuActive,this.mobileMenuActive=!1):"static"===this.layoutMode&&(this.staticMenuInactive=!this.staticMenuInactive):this.mobileMenuActive=!this.mobileMenuActive,event.preventDefault()},onSidebarClick:function(){this.menuClick=!0},onMenuItemClick:function(e){e.item&&!e.item.items&&(this.overlayMenuActive=!1,this.mobileMenuActive=!1)},onLayoutChange:function(e){this.layoutMode=e,this.saveSetting("menu_type",e)},onLayoutColorChange:function(e){this.layoutColorMode=e,this.saveSetting("menu_theme",e)},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},isDesktop:function(){return window.innerWidth>1024},saveSetting:function(e,t){var o=this;this.$inertia.visit(route("settings.store"),{method:"post",preserveState:!0,preserveScroll:!0,data:{key:e,value:t},onSuccess:function(){o.$toast.add({severity:"info",summary:"Success",detail:"Layout changed",life:2e3})}})},isSidebarVisible:function(){return!this.isDesktop()||("static"===this.layoutMode?!this.staticMenuInactive:"overlay"!==this.layoutMode||this.overlayMenuActive)}},computed:{containerClass:function(){return["layout-wrapper",{"layout-overlay":"overlay"===this.layoutMode,"layout-static":"static"===this.layoutMode,"layout-static-sidebar-inactive":this.staticMenuInactive&&"static"===this.layoutMode,"layout-overlay-sidebar-active":this.overlayMenuActive&&"overlay"===this.layoutMode,"layout-mobile-sidebar-active":this.mobileMenuActive,"p-input-filled":"filled"===this.$appState.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},sidebarClass:function(){return["layout-sidebar",{"layout-sidebar-dark":"dark"===this.layoutColorMode,"layout-sidebar-deluxe":"deluxe"===this.layoutColorMode}]},topbarClass:function(){return["layout-sidebar",{"layout-topbar-dark":"dark"===this.layoutColorMode,"layout-topbar-deluxe":"deluxe"===this.layoutColorMode}]},logo:function(){return this.settings.admin_logo&&""!==this.settings.admin_logo?"storage/"+this.settings.admin_logo:"assets/layout/images/v-logo.png"}},beforeUpdate:function(){this.mobileMenuActive?this.addClass(document.body,"body-overflow-hidden"):this.removeClass(document.body,"body-overflow-hidden")},mounted:function(){this.layoutMode=this.settings.menu_type,this.layoutColorMode=this.settings.menu_theme},components:{AppTopBar:f,AppProfile:S,AppMenu:T,AppConfig:ie,AppFooter:de}};var ve=o(383),ye={insert:"head",singleton:!1};me()(ve.Z,ye);ve.Z.locals;he.render=function(e,t,o,i,r,s){var c=(0,a.resolveComponent)("Toast"),u=(0,a.resolveComponent)("AppTopBar"),d=(0,a.resolveComponent)("inertia-link"),p=(0,a.resolveComponent)("AppProfile"),m=(0,a.resolveComponent)("AppMenu"),f=(0,a.resolveComponent)("AppConfig"),g=(0,a.resolveComponent)("AppFooter");return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)(c),(0,a.createVNode)("div",{class:s.containerClass,onClick:t[2]||(t[2]=function(){return s.onWrapperClick&&s.onWrapperClick.apply(s,arguments)})},[(0,a.createVNode)(u,{onMenuToggle:s.onMenuToggle,onConfigToggle:s.onToggleConfig,colorMode:r.layoutColorMode},null,8,["onMenuToggle","onConfigToggle","colorMode"]),(0,a.createVNode)(a.Transition,{name:"layout-sidebar"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)("div",{class:s.sidebarClass,onClick:t[1]||(t[1]=function(){return s.onSidebarClick&&s.onSidebarClick.apply(s,arguments)})},[(0,a.createVNode)("div",l,[(0,a.createVNode)(d,{href:"/"},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("img",{alt:"Logo",src:s.logo,style:{width:"50%"}},null,8,["src"])]})),_:1})]),(0,a.createVNode)(p),(0,a.createVNode)(m,{model:r.menu,onMenuitemClick:s.onMenuItemClick},null,8,["model","onMenuitemClick"])],2),[[a.vShow,s.isSidebarVisible()]])]})),_:1}),(0,a.createVNode)("div",n,[(0,a.renderSlot)(e.$slots,"default")]),(0,a.createVNode)(f,{layoutMode:r.layoutMode,ref:"appConfig",layoutColorMode:r.layoutColorMode,onLayoutChange:s.onLayoutChange,onLayoutColorChange:s.onLayoutColorChange},null,8,["layoutMode","layoutColorMode","onLayoutChange","onLayoutColorChange"]),(0,a.createVNode)(g,{colorMode:r.layoutColorMode,appName:o.settings.app_name,appVersion:o.settings.app_version},null,8,["colorMode","appName","appVersion"])],2)],64)};const be=he},2665:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>G});var a=o(5166),l=(0,a.withScopeId)("data-v-55198572");(0,a.pushScopeId)("data-v-55198572");var n={class:"p-grid crud-demo"},i={class:"p-col-12"},r={class:"card"},s=(0,a.createVNode)("i",{class:"pi pi-plus"},null,-1),c=(0,a.createTextVNode)(" New"),u=(0,a.createVNode)("i",{class:"pi pi-trash"},null,-1),d=(0,a.createTextVNode)("  Delete"),p=(0,a.createVNode)("i",{class:"pi pi-upload"},null,-1),m=(0,a.createTextVNode)(" Export"),f={class:"table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between"},g=(0,a.createVNode)("h5",{class:"p-m-0"},"Manage users",-1),h={class:"p-input-icon-left"},v=(0,a.createVNode)("i",{class:"pi pi-search"},null,-1),y={class:"p-field"},b=(0,a.createVNode)("label",{for:"name"},"Name",-1),V={key:0,class:"p-invalid"},C={class:"p-field"},N=(0,a.createVNode)("label",{for:"email"},"Email",-1),k={key:0,class:"p-invalid"},M={class:"p-field"},S=(0,a.createVNode)("label",{for:"password"},"Password",-1),w={key:0,class:"p-invalid"},U={class:"p-field"},x=(0,a.createVNode)("label",{for:"profile"},"User Profile",-1),D={key:0,class:"p-invalid"},B={class:"p-field"},I=(0,a.createVNode)("label",{for:"profile"},"User Image",-1),_=(0,a.createVNode)("br",null,null,-1),L=(0,a.createVNode)("br",null,null,-1),A={key:0,class:"p-invalid"},T={class:"confirmation-content"},$=(0,a.createVNode)("i",{class:"pi pi-exclamation-triangle p-mr-3",style:{"font-size":"2rem"}},null,-1),P={key:0},O=(0,a.createTextVNode)("Are you sure you want to delete "),j=(0,a.createTextVNode)("?"),F=(0,a.createVNode)("div",{class:"confirmation-content"},[(0,a.createVNode)("i",{class:"pi pi-exclamation-triangle p-mr-3",style:{"font-size":"2rem"}}),(0,a.createVNode)("span",null,"Are you sure you want to delete the selected users?")],-1);(0,a.popScopeId)();var R=l((function(e,t,o,R,E,Z){var q=(0,a.resolveComponent)("Breadcrumb"),z=(0,a.resolveComponent)("Toast"),W=(0,a.resolveComponent)("Toolbar"),Y=(0,a.resolveComponent)("InputText"),K=(0,a.resolveComponent)("Column"),G=(0,a.resolveComponent)("Button"),H=(0,a.resolveComponent)("DataTable"),J=(0,a.resolveComponent)("Password"),Q=(0,a.resolveComponent)("Dropdown"),X=(0,a.resolveComponent)("Dialog");return(0,a.openBlock)(),(0,a.createBlock)("div",n,[(0,a.createVNode)("div",i,[(0,a.createVNode)(q,{model:E.breadcrumb,title:E.title,icon:E.icon},null,8,["model","title","icon"]),(0,a.createVNode)("div",r,[(0,a.createVNode)(z),(0,a.createVNode)(W,{class:"p-mb-4"},{left:l((function(){return[(0,a.createVNode)("button",{type:"button",class:"p-button-success p-button p-component p-mr-2",onClick:t[1]||(t[1]=function(){return Z.openNew&&Z.openNew.apply(Z,arguments)})},[s,c]),(0,a.createVNode)("button",{type:"button",class:"p-button-danger p-button p-component p-mr-2",onClick:t[2]||(t[2]=function(){return Z.confirmDeleteSelected&&Z.confirmDeleteSelected.apply(Z,arguments)}),disabled:!E.selectedUsers||!E.selectedUsers.length},[u,d],8,["disabled"])]})),right:l((function(){return[(0,a.createVNode)("button",{type:"button",class:"p-button-help p-button p-component",onClick:t[3]||(t[3]=function(e){return Z.exportCSV(e)})},[p,m])]})),_:1}),(0,a.createVNode)(H,{ref:"dt",value:o.users,selection:E.selectedUsers,"onUpdate:selection":t[5]||(t[5]=function(e){return E.selectedUsers=e}),dataKey:"id",paginator:!0,rows:10,filters:E.filters,globalFilterFields:["name","email","profile"],filterDisplay:"menu",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} users",responsiveLayout:"scroll"},{header:l((function(){return[(0,a.createVNode)("div",f,[g,(0,a.createVNode)("span",h,[v,(0,a.createVNode)(Y,{modelValue:E.filters.global.value,"onUpdate:modelValue":t[4]||(t[4]=function(e){return E.filters.global.value=e}),placeholder:"Search..."},null,8,["modelValue"])])])]})),default:l((function(){return[(0,a.createVNode)(K,{selectionMode:"multiple",headerStyle:"width: 3rem"}),(0,a.createVNode)(K,{header:"Image"},{body:l((function(e){return[(0,a.createVNode)("img",{src:"storage/thumbs/"+e.data.image,alt:e.data.image,class:"user-image"},null,8,["src","alt"])]})),_:1}),(0,a.createVNode)(K,{field:"id",header:"Id",sortable:!0}),(0,a.createVNode)(K,{field:"name",header:"Name",sortable:!0}),(0,a.createVNode)(K,{field:"email",header:"E-mail",sortable:!0}),(0,a.createVNode)(K,{field:"profile",header:"Profile",sortable:!0}),(0,a.createVNode)(K,{header:"Manage"},{body:l((function(e){return[(0,a.createVNode)(G,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success p-mr-2",onClick:function(t){return Z.editUser(e.data)}},null,8,["onClick"]),(0,a.createVNode)(G,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:function(t){return Z.confirmDeleteUser(e.data)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value","selection","filters"]),(0,a.createVNode)(X,{visible:E.UserDialog,"onUpdate:visible":t[12]||(t[12]=function(e){return E.UserDialog=e}),style:{width:"500px"},header:E.dialogLabel,modal:!0,class:"p-fluid"},{footer:l((function(){return[(0,a.createVNode)(G,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:Z.hideDialog},null,8,["onClick"]),(0,a.createVNode)(G,{label:e.isUpdate?"Update":"Save",icon:"pi pi-check",class:"p-button-text",onClick:Z.saveUser},null,8,["label","onClick"])]})),default:l((function(){return[(0,a.createVNode)("form",{onSubmit:t[11]||(t[11]=(0,a.withModifiers)((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"]))},[E.form.image?((0,a.openBlock)(),(0,a.createBlock)("img",{key:0,src:e.isUpdate&&!E.changeImage?"storage/medium/"+E.form.image:E.form.image,alt:E.form.image,class:"user-image"},null,8,["src","alt"])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)("div",y,[b,(0,a.withDirectives)((0,a.createVNode)("input",{type:"text",class:["p-inputtext p-component",{"p-invalid":o.errors.name}],name:"name",id:"name","onUpdate:modelValue":t[6]||(t[6]=function(e){return E.form.name=e}),required:"true",autofocus:""},null,2),[[a.vModelText,E.form.name,void 0,{trim:!0}]]),o.errors.name?((0,a.openBlock)(),(0,a.createBlock)("small",V,(0,a.toDisplayString)(o.errors.name),1)):(0,a.createCommentVNode)("",!0)]),(0,a.createVNode)("div",C,[N,(0,a.withDirectives)((0,a.createVNode)("input",{type:"text",class:["p-inputtext p-component",{"p-invalid":o.errors.email}],name:"email",id:"email","onUpdate:modelValue":t[7]||(t[7]=function(e){return E.form.email=e}),required:"true"},null,2),[[a.vModelText,E.form.email,void 0,{trim:!0}]]),o.errors.email?((0,a.openBlock)(),(0,a.createBlock)("small",k,(0,a.toDisplayString)(o.errors.email),1)):(0,a.createCommentVNode)("",!0)]),(0,a.createVNode)("div",M,[S,(0,a.createVNode)(J,{id:"password",modelValue:E.form.password,"onUpdate:modelValue":t[8]||(t[8]=function(e){return E.form.password=e}),modelModifiers:{trim:!0},required:!e.isUpdate,class:{"p-invalid":o.errors.password}},null,8,["modelValue","required","class"]),o.errors.password?((0,a.openBlock)(),(0,a.createBlock)("small",w,(0,a.toDisplayString)(o.errors.password),1)):(0,a.createCommentVNode)("",!0)]),(0,a.createVNode)("div",U,[x,(0,a.createVNode)(Q,{modelValue:E.form.profile,"onUpdate:modelValue":t[9]||(t[9]=function(e){return E.form.profile=e}),options:E.profiles,optionLabel:"label",optionValue:"label",placeholder:"Select a profile"},null,8,["modelValue","options"]),o.errors.profile?((0,a.openBlock)(),(0,a.createBlock)("small",D,(0,a.toDisplayString)(o.errors.profile),1)):(0,a.createCommentVNode)("",!0)]),(0,a.createVNode)("div",B,[I,_,(0,a.createVNode)("input",{type:"file",name:"image",onChange:t[10]||(t[10]=function(){return Z.onUserImageChange&&Z.onUserImageChange.apply(Z,arguments)}),accept:"image/*",class:"custom-input-file"},null,32),L,o.errors.image?((0,a.openBlock)(),(0,a.createBlock)("small",A,(0,a.toDisplayString)(o.errors.image),1)):(0,a.createCommentVNode)("",!0)])],32)]})),_:1},8,["visible","header"]),(0,a.createVNode)(X,{visible:E.deleteUserDialog,"onUpdate:visible":t[14]||(t[14]=function(e){return E.deleteUserDialog=e}),style:{width:"450px"},header:"Confirm",modal:!0},{footer:l((function(){return[(0,a.createVNode)(G,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[13]||(t[13]=function(e){return E.deleteUserDialog=!1})}),(0,a.createVNode)(G,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:Z.deleteUser},null,8,["onClick"])]})),default:l((function(){return[(0,a.createVNode)("div",T,[$,e.user?((0,a.openBlock)(),(0,a.createBlock)("span",P,[O,(0,a.createVNode)("b",null,(0,a.toDisplayString)(e.user.name),1),j])):(0,a.createCommentVNode)("",!0)])]})),_:1},8,["visible"]),(0,a.createVNode)(X,{visible:E.deleteUsersDialog,"onUpdate:visible":t[16]||(t[16]=function(e){return E.deleteUsersDialog=e}),style:{width:"450px"},header:"Confirm",modal:!0},{footer:l((function(){return[(0,a.createVNode)(G,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[15]||(t[15]=function(e){return E.deleteUsersDialog=!1})}),(0,a.createVNode)(G,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:Z.deleteSelectedUsers},null,8,["onClick"])]})),default:l((function(){return[F]})),_:1},8,["visible"])])])])}));function E(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function Z(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const q={layout:o(1049).Z,props:{users:Array,errors:Object},data:function(){return{title:"Users",icon:"pi pi-fw pi-users",breadcrumb:[{label:"Users",route:"users"}],dialogLabel:null,changeImage:!1,isUdpate:!1,UserDialog:!1,deleteUserDialog:!1,deleteUsersDialog:!1,selectedUsers:null,filters:{global:{value:null}},submitted:!1,profiles:[{label:"Admin"},{label:"Editor"},{label:"Visitor"}],form:this.$inertia.form({id:null,name:null,email:null,password:null,image:null,image_file:null,profile:null})}},methods:{openNew:function(){this.changeImage=!1,this.form={},this.isUpdate=!1,this.dialogLabel="New User",this.submitted=!1,this.UserDialog=!0},editUser:function(e){this.changeImage=!1,this.dialogLabel="Edit User",this.form=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?E(Object(o),!0).forEach((function(t){Z(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e),this.isUpdate=!0,this.UserDialog=!0},confirmDeleteUser:function(e){this.user=e,this.deleteUserDialog=!0},hideDialog:function(){this.UserDialog=!1,this.submitted=!1},saveUser:function(){var e=this;this.submitted=!0;var t=this.isUpdate?route("users.update",[this.form.id]):route("users.store");this.$inertia.visit(t,{method:"post",data:this.form,forceFormData:!0,preserveState:!0,preserveScroll:!0,onSuccess:function(){e.UserDialog=!1,e.$toast.add({severity:"success",summary:"Success",detail:"User created",life:3e3})}})},deleteUser:function(){var e=this;this.$inertia.visit(route("users.delete",[this.user.id]),{method:"post",preserveState:!0,preserveScroll:!0,onSuccess:function(){e.$toast.add({severity:"success",summary:"Success",detail:"User deleted",life:3e3}),e.deleteUserDialog=!1}})},onUserImageChange:function(e){this.changeImage=!0,this.form.image_file=e.target.files[0],this.form.image=URL.createObjectURL(e.target.files[0]),console.log(this.form.image_file)},exportCSV:function(){this.$refs.dt.exportCSV()},confirmDeleteSelected:function(){this.deleteUsersDialog=!0},deleteSelectedUsers:function(){for(var e=this,t=[],o=0;o<this.selectedUsers.length;o++)t.push(this.selectedUsers[o].id);this.$inertia.visit(route("users.delete-multiple"),{method:"post",data:{ids:t},preserveState:!0,preserveScroll:!0,onSuccess:function(){e.deleteUsersDialog=!1,e.$toast.add({severity:"success",summary:"Success",detail:"Users deleted",life:3e3}),e.selectedUsers=null}})}}};var z=o(3379),W=o.n(z),Y=o(647),K={insert:"head",singleton:!1};W()(Y.Z,K);Y.Z.locals;q.render=R,q.__scopeId="data-v-55198572";const G=q}}]);