!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal={},e.Vue)}(this,(function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(t);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var d=function(e){return function(e,t){return u(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},f=function(e){return e==document.activeElement},v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,n,i;return t=e,(n=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||f(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;f(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=d(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&r(t.prototype,n),i&&r(t,i),e}(),h=function(e){var t=e.targetTouches?e.targetTouches[0]:e;return{x:t.clientX,y:t.clientY}},m=function(e,t,n){return"number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)},p=function(e){return e&&Number(e.replace(/px$/,""))||0},y={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},g=function(e,t,n){t&&t.addEventListener(y[e].pc,n),t&&t.addEventListener(y[e].m,n,{passive:!1})},b=function(e,t,n){t&&t.removeEventListener(y[e].pc,n),t&&t.removeEventListener(y[e].m,n)},w=!1;if("undefined"!=typeof window){var x={get passive(){w=!0}};window.addEventListener("testPassive",null,x),window.removeEventListener("testPassive",null,x)}var S,E,T="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),z=[],C=!1,O=0,M=-1,k=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},_=function(e){return z.some((function(){return k(e,-O)}))},$=function(e){var t=e||window.event;return!!_(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},D=function(e,t){if(e){if(!z.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};z=[].concat(u(z),[n]),T?(e.ontouchstart=function(e){1===e.targetTouches.length&&(M=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){O=e.targetTouches[0].clientY-M,!_(e.target)&&(t&&0===t.scrollTop&&O>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&O<0?$(e):e.stopPropagation())}(t,e)},C||(document.addEventListener("touchmove",$,w?{passive:!1}:void 0),C=!0)):function(e){if(void 0===E){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var i=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);E=document.body.style.paddingRight,document.body.style.paddingRight="".concat(i+n,"px")}}void 0===S&&(S=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},R=function(e){e?(z=z.filter((function(t){return t.targetElement!==e})),T?(e.ontouchstart=null,e.ontouchmove=null,C&&0===z.length&&(document.removeEventListener("touchmove",$,w?{passive:!1}:void 0),C=!1)):z.length||(void 0!==E&&(document.body.style.paddingRight=E,E=void 0),void 0!==S&&(document.body.style.overflow=S,S=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},j=function(){},L="enter",A="entering",B="leave",P="leavng";var I={type:[String,Object,Array],default:""},N={type:[Object,Array],default:function(){return{}}},V={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},F={props:{name:{type:String,default:null},value:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:I,overlayClass:I,contentClass:I,styles:N,overlayStyle:N,contentStyle:N,lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=o(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(t){return-1!==e.indexOf(t)})).length===e.length}},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},data:function(){return{modalStackIndex:null,visible:!1,visibility:{modal:!1,overlay:!1,resize:!1},overlayTransitionState:null,modalTransitionState:null,stopEvent:!1,params:{},dragResizeStyle:{},resolveToggle:j,rejectToggle:j,state:null,lastMousedownEl:null}},computed:{isComponentReadyToBeDestroyed:function(){return(this.hideOverlay||this.overlayTransitionState===B)&&this.modalTransitionState===B},calculateZIndex:function(){return!1===this.zIndex?!!this.zIndexAuto&&+this.zIndexBase+2*(this.modalStackIndex||0):this.zIndex},bindStyle:function(){return l({},!1!==this.calculateZIndex&&{zIndex:this.calculateZIndex})},bindContentStyle:function(){var e=[this.dragResizeStyle];return Array.isArray(this.contentStyle)?e.push.apply(e,u(this.contentStyle)):e.push(this.contentStyle),e},computedTransition:function(){return"string"==typeof this.transition?{name:this.transition}:l({},this.transition)},computedOverlayTransition:function(){return"string"==typeof this.overlayTransition?{name:this.overlayTransition}:l({},this.overlayTransition)}},watch:{value:function(e){if(this.stopEvent)this.stopEvent=!1;else if(this.mounted(),!e){if(this.emitEvent("before-close",!0))return void this.rejectToggle("hide");this.close()}},lockScroll:"handleLockScroll",hideOverlay:function(e){this.value&&!e&&(this.visibility.overlay=!0)},attach:"mounted",isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)},drag:function(e){this.visible&&(e?this.addDragDown():this.removeDragDown())},resize:function(e){this.visible&&(e?this.addResizeDown():this.removeResizeDown())},keepChangedStyle:function(e){e||(this.dragResizeStyle={})}},created:function(){this.api.modals.push(this)},mounted:function(){this.$focusTrap=new v,this.mounted()},beforeDestroy:function(){var e,t=this;this.close(),this.lockScroll&&this.$refs.vfmContainer&&R(this.$refs.vfmContainer),null==this||null===(e=this.$el)||void 0===e||e.remove();var n=this.api.modals.findIndex((function(e){return e===t}));this.api.modals.splice(n,1)},methods:{mounted:function(){var e=this;if(this.value){if(this.emitEvent("before-open",!1))return void this.rejectToggle("show");var t=this.getAttachElement();if(t||!1===this.attach){!1!==this.attach&&t.appendChild(this.$el);var n=this.api.openedModals.findIndex((function(t){return t===e}));-1!==n&&this.api.openedModals.splice(n,1),this.api.openedModals.push(this),this.modalStackIndex=this.api.openedModals.length-1,this.handleLockScroll(),this.api.openedModals.filter((function(t){return t!==e})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex=n,e.visibility.overlay=!1)})),this.visible=!0,this.$nextTick((function(){e.startTransitionEnter()}))}else!1!==t&&console.warn("Unable to locate target ".concat(this.attach))}},close:function(){var e=this,t=this.api.openedModals.findIndex((function(t){return t===e}));if(-1!==t&&this.api.openedModals.splice(t,1),this.api.openedModals.length>0){var n=this.api.openedModals[this.api.openedModals.length-1];(n.focusRetain||n.focusTrap)&&n.$refs.vfmContainer.focus(),!n.hideOverlay&&(n.visibility.overlay=!0)}this.drag&&this.removeDragDown(),this.resize&&this.removeResizeDown(),this.state=null,this.startTransitionLeave()},startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},handleLockScroll:function(){var e=this;this.value&&this.$nextTick((function(){e.lockScroll?D(e.$refs.vfmContainer,{reserveScrollBarGap:!0}):R(e.$refs.vfmContainer)}))},getAttachElement:function(){return!1!==this.attach&&("string"==typeof this.attach?!!window&&window.document.querySelector(this.attach):this.attach)},beforeOverlayEnter:function(){this.overlayTransitionState=A},afterOverlayEnter:function(){this.overlayTransitionState=L},beforeOverlayLeave:function(){this.overlayTransitionState=P},afterOverlayLeave:function(){this.overlayTransitionState=B},beforeModalEnter:function(){this.modalTransitionState=A},afterModalEnter:function(){this.modalTransitionState=L,(this.focusRetain||this.focusTrap)&&this.$refs.vfmContainer.focus(),this.focusTrap&&this.$focusTrap.enable(this.$refs.vfmContainer),this.drag&&this.addDragDown(),this.resize&&this.addResizeDown(),this.$emit("opened",this.createModalEvent({type:"opened"})),this.resolveToggle("show")},beforeModalLeave:function(){this.modalTransitionState=P,this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalLeave:function(){this.modalTransitionState=B,this.modalStackIndex=null,this.lockScroll&&R(this.$refs.vfmContainer),this.keepChangedStyle||(this.dragResizeStyle={});var e=!1,t=this.createModalEvent({type:"closed",stop:function(){e=!0}});this.$emit("closed",t),this.resolveToggle("hide"),e||(this.params={})},onMousedown:function(e){this.lastMousedownEl=null==e?void 0:e.target},onMouseupContainer:function(){this.lastMousedownEl===this.$refs.vfmContainer&&"resize:move"!==this.state&&(this.$emit("click-outside",this.createModalEvent({type:"click-outside"})),this.clickToClose&&this.$emit("input",!1))},onEsc:function(){this.visible&&this.escToClose&&this.$emit("input",!1)},createModalEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({ref:this},e)},emitEvent:function(e,t){var n=!1,i=this.createModalEvent({type:e,stop:function(){n=!0}});return this.$emit(e,i),!!n&&(this.stopEvent=!0,this.$emit("input",t),!0)},emitState:function(e,t,n){this.state="".concat(t,":").concat(n),this.$emit(this.state,e)},toggle:function(e,t){var n=arguments,i=this;return new Promise((function(o,r){i.resolveToggle=function(e){o(e),i.resolveToggle=j},i.rejectToggle=function(e){r(e),i.rejectToggle=j};var a="boolean"==typeof e?e:!i.value;a&&2===n.length&&(i.params=t),i.$emit("input",a)}))},pointerDown:function(e){var t=this;e.stopPropagation();var n,i="resize",o="drag",r=this.$refs,a=r.vfmContainer,s=r.vfmContent,c=e.target.getAttribute("direction");if(c)n=i;else{if(!function(e,t,n){return""===n||u(t.querySelectorAll(n)).includes(e.target)}(e,s,this.dragSelector))return;n=o}this.emitState(e,n,"start");var d,f,v,y,w=h(e),x=a.getBoundingClientRect(),S=s.getBoundingClientRect(),E="absolute"===window.getComputedStyle(s).position,T=p(this.dragResizeStyle.top),z=p(this.dragResizeStyle.left),C=function(){if(t.fitParent){var e={absolute:function(){return{minTop:0,minLeft:0,maxTop:x.height-S.height,maxLeft:x.width-S.width}},relative:function(){return{minTop:T+x.top-S.top,minLeft:z+x.left-S.left,maxTop:T+x.bottom-S.bottom,maxLeft:z+x.right-S.right}}};return E?e.absolute():e.relative()}return{}}(),O=n===i&&(d=document.body,f="cursor",v=V[c],y=d.style[f],d.style[f]=v,function(){d.style[f]=y}),M=function(e){e.stopPropagation(),t.emitState(e,n,"move");var r,a,s=h(e),u={x:s.x-w.x,y:s.y-w.y};n===i&&(u=t.getResizeOffset(c,u,x,S,E)),E?(r=S.top-x.top+u.y,a=S.left-x.left+u.x):(r=T+u.y,a=z+u.x),n===o&&t.fitParent&&(r=m(C.minTop,r,C.maxTop),a=m(C.minLeft,a,C.maxLeft));var d=l(l(l({position:"relative",top:r+"px",left:a+"px",margin:"unset",touchAction:"none"},E&&{position:"absolute",transform:"unset",width:S.width+"px",height:S.height+"px"}),u.width&&{width:u.width+"px"}),u.height&&{height:u.height+"px"});t.dragResizeStyle=l(l({},t.dragResizeStyle),d)};g("move",document,M),g("up",document,(function e(o){o.stopPropagation(),n===i&&O&&O(),setTimeout((function(){t.emitState(o,n,"end")})),b("move",document,M),b("up",document,e)}))},addDragDown:function(){g("down",this.$refs.vfmContent,this.pointerDown),this.dragResizeStyle.touchAction="none"},removeDragDown:function(){b("down",this.$refs.vfmContent,this.pointerDown)},addResizeDown:function(){var e=this;this.visibility.resize=!0,this.$nextTick((function(){g("down",e.$refs.vfmResize,e.pointerDown)}))},removeResizeDown:function(){b("down",this.$refs.vfmResize,this.pointerDown),this.visibility.resize=!1},getResizeOffset:function(e,t,n,i,o){var r=this,s=function(e,t,o,a){var s,l=i[t],u=n[e]-i[e],c=(s=t).charAt(0).toUpperCase()+s.slice(1);return{axis:o,edgeName:t,min:a?u:-l,max:a?l:u,minEdge:r["min".concat(c)],maxEdge:r["max".concat(c)],getEdge:function(e){return i[t]-e*(a?1:-1)},getOffsetAxis:function(e,n){var o=i[t]-e;return n?a?o:0:(a?1:-1)*o/2}}},c={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},d={x:0,y:0};return e.split("").forEach((function(e){var n=s.apply(void 0,u(c[e]));d=l(l({},d),function(e){var n,i=t[e.axis];i=r.fitParent?m(e.min,i,e.max):i;var s=m(e.minEdge,e.getEdge(i),e.maxEdge);return i=e.getOffsetAxis(s,o),a(n={},e.edgeName,s),a(n,e.axis,i),n}(n))})),d}}};var H,U=function(e,t,n,i,o,r,a,s,l,u){"boolean"!=typeof a&&(l=s,s=a,a=!1);var c,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),i&&(d._scopeId=i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):t&&(c=a?function(e){t.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),c)if(d.functional){var f=d.render;d.render=function(e,t){return c.call(t),f(e,t)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,c):[c]}return n},K="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var q={};var W=U({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ssr||e.visible?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ssr||e.visible,expression:"!ssr || visible"}],staticClass:"vfm vfm--inset",class:[!1===e.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":e.preventClick}],style:e.bindStyle,on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onEsc(t)}}},[n("transition",e._b({ref:"vfmOverlayTransition",on:{"before-enter":e.beforeOverlayEnter,"after-enter":e.afterOverlayEnter,"before-leave":e.beforeOverlayLeave,"after-leave":e.afterOverlayLeave}},"transition",e.computedOverlayTransition,!1),[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOverlay&&e.visibility.overlay,expression:"!hideOverlay && visibility.overlay"}],staticClass:"vfm__overlay vfm--overlay vfm--absolute vfm--inset",class:e.overlayClass,style:e.overlayStyle})]),e._v(" "),n("transition",e._b({ref:"vfmTransition",on:{"before-enter":e.beforeModalEnter,"after-enter":e.afterModalEnter,"before-leave":e.beforeModalLeave,"after-leave":e.afterModalLeave}},"transition",e.computedTransition,!1),[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.modal,expression:"visibility.modal"}],ref:"vfmContainer",staticClass:"vfm__container vfm--absolute vfm--inset vfm--outline-none",class:e.classes,style:e.styles,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1"},on:{mouseup:function(t){return t.target!==t.currentTarget?null:e.onMouseupContainer(t)},mousedown:function(t){return t.target!==t.currentTarget?null:e.onMousedown(t)}}},[n("div",{ref:"vfmContent",staticClass:"vfm__content",class:[e.contentClass,{"vfm--prevent-auto":e.preventClick}],style:e.bindContentStyle,on:{mousedown:function(t){return e.onMousedown(null)}}},[e._t("default",null,{params:e.params,close:function(){return e.$emit("input",!1)}}),e._v(" "),e.visibility.resize&&e.visibility.modal?n("div",{ref:"vfmResize",staticClass:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},e._l(e.resizeDirections,(function(e){return n("div",{key:e,staticClass:"vfm--absolute vfm--prevent-auto",class:"vfm--resize-"+e,attrs:{direction:e}})})),0):e._e()],2)])])],1):e._e()},staticRenderFns:[]},(function(e){e&&e("data-v-47686880_0",{source:".vfm--fixed[data-v-47686880]{position:fixed}.vfm--absolute[data-v-47686880]{position:absolute}.vfm--inset[data-v-47686880]{top:0;right:0;bottom:0;left:0}.vfm--overlay[data-v-47686880]{background-color:rgba(0,0,0,.5)}.vfm--prevent-none[data-v-47686880]{pointer-events:none}.vfm--prevent-auto[data-v-47686880]{pointer-events:auto}.vfm--outline-none[data-v-47686880]:focus{outline:0}.vfm-enter-active[data-v-47686880],.vfm-leave-active[data-v-47686880]{transition:opacity .2s}.vfm-enter[data-v-47686880],.vfm-leave-to[data-v-47686880]{opacity:0}.vfm--touch-none[data-v-47686880]{touch-action:none}.vfm--select-none[data-v-47686880]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vfm--resize-bl[data-v-47686880],.vfm--resize-br[data-v-47686880],.vfm--resize-tl[data-v-47686880],.vfm--resize-tr[data-v-47686880]{width:12px;height:12px;z-index:10}.vfm--resize-t[data-v-47686880]{top:-6px;left:0;width:100%;height:12px;cursor:ns-resize}.vfm--resize-tr[data-v-47686880]{top:-6px;right:-6px;cursor:nesw-resize}.vfm--resize-r[data-v-47686880]{top:0;right:-6px;width:12px;height:100%;cursor:ew-resize}.vfm--resize-br[data-v-47686880]{bottom:-6px;right:-6px;cursor:nwse-resize}.vfm--resize-b[data-v-47686880]{bottom:-6px;left:0;width:100%;height:12px;cursor:ns-resize}.vfm--resize-bl[data-v-47686880]{bottom:-6px;left:-6px;cursor:nesw-resize}.vfm--resize-l[data-v-47686880]{top:0;left:-6px;width:12px;height:100%;cursor:ew-resize}.vfm--resize-tl[data-v-47686880]{top:-6px;left:-6px;cursor:nwse-resize}",map:void 0,media:void 0})}),F,"data-v-47686880",false,undefined,!1,(function(e){return function(e,t){return function(e,t){var n=K?t.media||"default":e,i=q[n]||(q[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),void 0===H&&(H=document.head||document.getElementsByTagName("head")[0]),H.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var r=i.ids.size-1,a=document.createTextNode(o),s=i.element.childNodes;s[r]&&i.element.removeChild(s[r]),s.length?i.element.insertBefore(a,s[r]):i.element.appendChild(a)}}}(e,t)}}),void 0,void 0),Y=U({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modals-container"},e._l(e.api.dynamicModals,(function(t,i){return n(t.component,e._g(e._b({key:t.id,tag:"component",on:{closed:function(t){return e.slice(i)},"before-open":function(n){return e.beforeOpen(n,t,i)},opened:t.opened},scopedSlots:e._u([e._l(t.slots,(function(t,i){return{key:i,fn:function(){return[e.isString(t)?n("div",{key:i,domProps:{innerHTML:e._s(t)}}):n(t.component,e._g(e._b({key:i,tag:"component"},"component",t.bind,!1),t.on))]},proxy:!0}}))],null,!0),model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"modal.value"}},"component",t.bind,!1),t.on))})),1)},staticRenderFns:[]},undefined,{props:{},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t,n){var i=this;e.ref.params=t.params,this.$nextTick((function(){t.value||(i.slice(n),t.reject("show"))}))},isString:function(e){return"string"==typeof e}}},undefined,false,undefined,!1,void 0,void 0,void 0);function X(e,t){var n=l(l({},e),{},{props:l({},e.props)});return Object.assign(n.props,{api:{type:Object,default:function(){return t}}}),n}var Z=0,G="$vfm",J="VueFinalModal",Q="ModalsContainer",ee=function(){var e,t,n=(t=null,i.default.observable({show:function(e){for(var n=this,i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];switch(o(e)){case"string":return this.toggle.apply(this,[e,!0].concat(r));case"object":return Promise.allSettled([new Promise((function(i,o){var a={value:!0,id:Symbol("dynamicModal"),component:t,bind:{},slots:{},on:{},params:r[0],reject:o,opened:function(){i("show")}};n.dynamicModals.push(Object.assign(a,e))}))])}},hide:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.toggle(t,!1)},hideAll:function(){return this.hide.apply(this,u(this.openedModals.map((function(e){return e.name}))))},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=Array.isArray(e)?this.get.apply(this,u(e)):this.get(e);return Promise.allSettled(o.map((function(e){return e.toggle.apply(e,n)})))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.name)}))},dynamicModals:[],openedModals:[],modals:[],_setDefaultModal:function(e){t=e}}));return a(e={},G,n),a(e,J,function(e){var t=X(W,e);return e._setDefaultModal(t),t}(n)),a(e,Q,function(e){return X(Y,e)}(n)),e},te=ee(),ne=te.$vfm,ie=te.VueFinalModal,oe=te.ModalsContainer,re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=0===Z?te:ee(),i=n.$vfm,o=n.VueFinalModal,r=n.ModalsContainer;Z+=1;var a=t.key||G,s=t.componentName||J,l=t.dynamicContainerName||Q;e.prototype[a]=i,e.component(s,o),e.component(l,r)},ae=function(e){return{install:function(t,n){var i=Object.assign({},e,n);re(t,i)}}};ae.install=re,e.$vfm=ne,e.ModalsContainer=oe,e.VueFinalModal=ie,e.default=ae,e.defineVfm=ee,e.vfmPlugin=ae,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=VueFinalModal.umd.js.map
