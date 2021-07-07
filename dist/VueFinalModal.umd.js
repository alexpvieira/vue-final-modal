!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal={},e.Vue)}(this,(function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n,o,r,i,a){try{var l=e[i](a),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(o,r)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var c=function(e){return function(e,t){return u(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},f=function(e){return e==document.activeElement},d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,n,o;return t=e,(n=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||f(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;f(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=c(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&r(t.prototype,n),o&&r(t,o),e}(),v=function(e){var t=e.targetTouches?e.targetTouches[0]:e;return{x:t.clientX,y:t.clientY}},p=function(e,t,n){return"number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)},m=function(e){return e&&Number(e.replace(/px$/,""))||0},y={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},h=function(e,t,n){t&&t.addEventListener(y[e].pc,n),t&&t.addEventListener(y[e].m,n,{passive:!1})},b=function(e,t,n){t&&t.removeEventListener(y[e].pc,n),t&&t.removeEventListener(y[e].m,n)},g=!1;if("undefined"!=typeof window){var w={get passive(){g=!0}};window.addEventListener("testPassive",null,w),window.removeEventListener("testPassive",null,w)}var x,E,S="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),k=[],O=!1,T=0,M=-1,z=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},B=function(e){return k.some((function(){return z(e,-T)}))},C=function(e){var t=e||window.event;return!!B(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},A=function(e,t){if(e){if(!k.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};k=[].concat(u(k),[n]),S?(e.ontouchstart=function(e){1===e.targetTouches.length&&(M=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){T=e.targetTouches[0].clientY-M,!B(e.target)&&(t&&0===t.scrollTop&&T>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&T<0?C(e):e.stopPropagation())}(t,e)},O||(document.addEventListener("touchmove",C,g?{passive:!1}:void 0),O=!0)):function(e){if(void 0===E){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);E=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===x&&(x=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},L=function(e){e?(k=k.filter((function(t){return t.targetElement!==e})),S?(e.ontouchstart=null,e.ontouchmove=null,O&&0===k.length&&(document.removeEventListener("touchmove",C,g?{passive:!1}:void 0),O=!1)):k.length||(void 0!==E&&(document.body.style.paddingRight=E,E=void 0),void 0!==x&&(document.body.style.overflow=x,x=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},P=function(){},_="enter",j="entering",V="leave",N="leavng",I={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},D={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=n(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(t){return-1!==e.indexOf(t)})).length===e.length}},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(e,n){var o=n.emit,r=Symbol("vfm"),a=t.ref(null),s=t.ref(null),c=t.ref(null),f=t.ref(null),y=t.ref(null),g=t.ref(null),w=t.ref(null),x=new d,E=t.ref(!1),S=t.reactive({modal:!1,overlay:!1,resize:!1}),k=t.ref(null),O=t.ref(null),T=t.ref(!1),M=t.ref({}),z=t.ref({}),B=t.ref(null),C=t.ref(null),D=P,R=P,H=t.computed((function(){return"string"==typeof e.overlayTransition?{name:e.overlayTransition}:l({},e.overlayTransition)})),$=t.computed((function(){return"string"==typeof e.transition?{name:e.transition}:l({},e.transition)})),F=t.computed((function(){return(e.hideOverlay||k.value===V)&&O.value===V})),K=t.computed((function(){return!1===e.zIndex?!!e.zIndexAuto&&+e.zIndexBase+2*(w.value||0):e.zIndex})),U=t.computed((function(){return l({},!1!==K.value&&{zIndex:K.value})})),q=t.computed((function(){var t=[z.value];return Array.isArray(e.contentStyle)?t.push.apply(t,u(e.contentStyle)):t.push(e.contentStyle),t}));function W(){return{uid:r,props:e,emit:o,vfmContainer:s,vfmContent:c,vfmResize:f,vfmOverlayTransition:y,vfmTransition:g,getAttachElement:Z,modalStackIndex:w,visibility:S,handleLockScroll:X,$focusTrap:x,toggle:te,params:M}}function Y(){if(e.modelValue){if(o("_before-open",J({type:"_before-open"})),Q("before-open",!1))return void R("show");var t=Z();if(t||!1===e.attach){!1!==e.attach&&t.appendChild(a.value);var n=e.api.openedModals.findIndex((function(e){return e.uid===r}));-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.push(W()),w.value=e.api.openedModals.length-1,X(),e.api.openedModals.filter((function(e){return e.uid!==r})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex.value=n,e.visibility.overlay=!1)})),E.value=!0,S.overlay=!0,S.modal=!0}else!1!==t&&console.warn("Unable to locate target ".concat(e.attach))}}function G(){var t=e.api.openedModals.findIndex((function(e){return e.uid===r}));if(-1!==t&&e.api.openedModals.splice(t,1),e.api.openedModals.length>0){var n=e.api.openedModals[e.api.openedModals.length-1];n.props.focusTrap&&n.$focusTrap.firstElement().focus(),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}e.drag&&re(),e.resize&&ae(),B.value=null,S.overlay=!1,S.modal=!1}function X(){e.modelValue&&t.nextTick((function(){e.lockScroll?A(s.value,{reserveScrollBarGap:!0}):L(s.value)}))}function Z(){return!1!==e.attach&&("string"==typeof e.attach?!!window&&window.document.querySelector(e.attach):e.attach)}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l({ref:W()},e)}function Q(e,n){var r=!1,i=J({type:e,stop:function(){r=!0}});return o(e,i),!!r&&(T.value=!0,t.nextTick((function(){o("update:modelValue",n)})),!0)}function ee(e,t,n){B.value="".concat(t,":").concat(n),o(B.value,e)}function te(t,n){var r=arguments;return new Promise((function(i,a){D=function(e){i(e),D=P},R=function(e){a(e),R=P};var l="boolean"==typeof t?t:!e.modelValue;l&&2===r.length&&(M.value=n),o("update:modelValue",l)}))}function ne(t){t.stopPropagation();var n,o="resize",r="drag",a=t.target.getAttribute("direction");if(a)n=o;else{if(!function(e,t,n){return""===n||u(t.querySelectorAll(n)).includes(e.target)}(t,c.value,e.dragSelector))return;n=r}ee(t,n,"start");var f,d,y,g,w=v(t),x=s.value.getBoundingClientRect(),E=c.value.getBoundingClientRect(),S="absolute"===window.getComputedStyle(c.value).position,k=m(z.value.top),O=m(z.value.left),T=function(){if(e.fitParent){var t={absolute:function(){return{minTop:0,minLeft:0,maxTop:x.height-E.height,maxLeft:x.width-E.width}},relative:function(){return{minTop:k+x.top-E.top,minLeft:O+x.left-E.left,maxTop:k+x.bottom-E.bottom,maxLeft:O+x.right-E.right}}};return S?t.absolute():t.relative()}return{}}(),M=n===o&&(f=document.body,d="cursor",y=I[a],g=f.style[d],f.style[d]=y,function(){f.style[d]=g}),B=function(t){t.stopPropagation(),ee(t,n,"move");var s,c,f=v(t),d={x:f.x-w.x,y:f.y-w.y};n===o&&(d=function(t,n,o,r,a){var s=function(t){var o,r=n[t.axis];r=e.fitParent?p(t.min,r,t.max):r;var l=p(t.minEdge,t.getEdge(r),t.maxEdge);return r=t.getOffsetAxis(l,a),i(o={},t.edgeName,l),i(o,t.axis,r),o},c=function(t,n,i,a){var l,u=r[n],s=o[t]-r[t],c=(l=n).charAt(0).toUpperCase()+l.slice(1);return{axis:i,edgeName:n,min:a?s:-u,max:a?u:s,minEdge:e["min".concat(c)],maxEdge:e["max".concat(c)],getEdge:function(e){return r[n]-e*(a?1:-1)},getOffsetAxis:function(e,t){var o=r[n]-e;return t?a?o:0:(a?1:-1)*o/2}}},f={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},d={x:0,y:0};return t.split("").forEach((function(e){var t=c.apply(void 0,u(f[e]));d=l(l({},d),s(t))})),d}(a,d,x,E,S)),S?(s=E.top-x.top+d.y,c=E.left-x.left+d.x):(s=k+d.y,c=O+d.x),n===r&&e.fitParent&&(s=p(T.minTop,s,T.maxTop),c=p(T.minLeft,c,T.maxLeft));var m=l(l(l({position:"relative",top:s+"px",left:c+"px",margin:"unset",touchAction:"none"},S&&{position:"absolute",transform:"unset",width:E.width+"px",height:E.height+"px"}),d.width&&{width:d.width+"px"}),d.height&&{height:d.height+"px"});z.value=l(l({},z.value),m)};h("move",document,B),h("up",document,(function e(t){t.stopPropagation(),n===o&&M&&M(),setTimeout((function(){ee(t,n,"end")})),b("move",document,B),b("up",document,e)}))}function oe(){h("down",c.value,ne),z.value.touchAction="none"}function re(){b("down",c.value,ne)}function ie(){S.resize=!0,t.nextTick((function(){h("down",f.value,ne)}))}function ae(){b("down",f.value,ne),S.resize=!1}return t.watch((function(){return e.modelValue}),(function(e){if(T.value)T.value=!1;else if(Y(),!e){if(Q("before-close",!0))return void R("hide");G()}})),t.watch((function(){return e.lockScroll}),X),t.watch((function(){return e.hideOverlay}),(function(t){e.modelValue&&!t&&(S.overlay=!0)})),t.watch((function(){return e.attach}),Y),t.watch(F,(function(e){e&&(E.value=!1,s.value.style.display="none")}),{flush:"post"}),t.watch((function(){return e.drag}),(function(e){E.value&&(e?oe():re())})),t.watch((function(){return e.resize}),(function(e){E.value&&(e?ie():ae())})),t.watch((function(){return e.keepChangedStyle}),(function(e){e||(z.value={})})),e.api.modals.push(W()),t.onMounted((function(){Y()})),t.onBeforeUnmount((function(){var t;G(),e.lockScroll&&s.value&&L(s.value),null==a||null===(t=a.value)||void 0===t||t.remove();var n=e.api.modals.findIndex((function(e){return e.uid===r}));e.api.modals.splice(n,1)})),{root:a,vfmContainer:s,vfmContent:c,vfmResize:f,vfmOverlayTransition:y,vfmTransition:g,computedOverlayTransition:H,computedTransition:$,visible:E,visibility:S,params:M,calculateZIndex:K,bindStyle:U,bindContentStyle:q,beforeOverlayEnter:function(){k.value=j},afterOverlayEnter:function(){k.value=_},beforeOverlayLeave:function(){k.value=N},afterOverlayLeave:function(){k.value=V},beforeModalEnter:function(){O.value=j},afterModalEnter:function(){O.value=_,(e.focusRetain||e.focusTrap)&&s.value.focus(),e.focusTrap&&x.enable(s.value),e.drag&&oe(),e.resize&&ie(),o("_opened"),o("opened",J({type:"opened"})),D("show")},beforeModalLeave:function(){O.value=N,x.enabled()&&x.disable()},afterModalLeave:function(){O.value=V,w.value=null,e.lockScroll&&L(s.value),e.keepChangedStyle||(z.value={});var t=!1,n=J({type:"closed",stop:function(){t=!0}});o("_closed"),o("closed",n),D("hide"),t||(M.value={})},onMousedown:function(e){C.value=null==e?void 0:e.target},onMouseupContainer:function(){C.value===s.value&&"resize:move"!==B.value&&(o("click-outside",J({type:"click-outside"})),e.clickToClose&&o("update:modelValue",!1))},onEsc:function(){E.value&&e.escToClose&&o("update:modelValue",!1)}}}},R=t.withScopeId("data-v-2836fdb5");t.pushScopeId("data-v-2836fdb5");var H={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"};t.popScopeId();var $=R((function(e,n,o,r,i,a){return o.ssr||r.visible?t.withDirectives((t.openBlock(),t.createBlock("div",{key:0,ref:"root",style:r.bindStyle,class:["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.preventClick}]],onKeydown:n[4]||(n[4]=t.withKeys((function(){return r.onEsc&&r.onEsc.apply(r,arguments)}),["esc"]))},[t.createVNode(t.Transition,t.mergeProps(r.computedOverlayTransition,{onBeforeEnter:r.beforeOverlayEnter,onAfterEnter:r.afterOverlayEnter,onBeforeLeave:r.beforeOverlayLeave,onAfterLeave:r.afterOverlayLeave}),{default:R((function(){return[!o.hideOverlay&&r.visibility.overlay?(t.openBlock(),t.createBlock("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass],style:o.overlayStyle},null,6)):t.createCommentVNode("v-if",!0)]})),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),t.createVNode(t.Transition,t.mergeProps(r.computedTransition,{onBeforeEnter:r.beforeModalEnter,onAfterEnter:r.afterModalEnter,onBeforeLeave:r.beforeModalLeave,onAfterLeave:r.afterModalLeave}),{default:R((function(){return[t.withDirectives(t.createVNode("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes],style:o.styles,"aria-expanded":r.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[2]||(n[2]=t.withModifiers((function(){return r.onMouseupContainer&&r.onMouseupContainer.apply(r,arguments)}),["self"])),onMousedown:n[3]||(n[3]=t.withModifiers((function(){return r.onMousedown&&r.onMousedown.apply(r,arguments)}),["self"]))},[t.createVNode("div",{ref:"vfmContent",class:["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.preventClick}]],style:r.bindContentStyle,onMousedown:n[1]||(n[1]=function(e){return r.onMousedown(null)})},[t.renderSlot(e.$slots,"default",{params:r.params,close:function(){return e.$emit("update:modelValue")}}),r.visibility.resize&&r.visibility.modal?(t.openBlock(),t.createBlock("div",H,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(o.resizeDirections,(function(e){return t.openBlock(),t.createBlock("div",{key:e,direction:e,class:["vfm--resize-".concat(e),"vfm--absolute vfm--prevent-auto"]},null,10,["direction"])})),128))],512)):t.createCommentVNode("v-if",!0)],38)],46,["aria-expanded"]),[[t.vShow,r.visibility.modal]])]})),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[t.vShow,!o.ssr||r.visible]]):t.createCommentVNode("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-2836fdb5] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-2836fdb5] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-2836fdb5],\n.vfm--resize-br[data-v-2836fdb5],\n.vfm--resize-bl[data-v-2836fdb5],\n.vfm--resize-tl[data-v-2836fdb5] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-2836fdb5] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-2836fdb5] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-2836fdb5] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-2836fdb5] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-2836fdb5] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-2836fdb5] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-2836fdb5] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-2836fdb5] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),D.render=$,D.__scopeId="data-v-2836fdb5",D.__file="lib/VueFinalModal.vue";var F={props:{},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t,n){var r,i=this;return(r=function*(){e.ref.params.value=t.params,yield i.$nextTick(),yield i.$nextTick(),t.value||(i.slice(n),t.reject("show"))},function(){var e=this,t=arguments;return new Promise((function(n,i){var a=r.apply(e,t);function l(e){o(a,n,i,l,u,"next",e)}function u(e){o(a,n,i,l,u,"throw",e)}l(void 0)}))})()},isString:function(e){return"string"==typeof e}}},K={class:"modals-container"};function U(e,t){var n=l(l({},e),{},{props:l({},e.props)});return Object.assign(n.props,{api:{type:Object,default:function(){return t}}}),n}F.render=function(e,n,o,r,i,a){return t.openBlock(),t.createBlock("div",K,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.api.dynamicModals,(function(e,n){return t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t}},t.toHandlers(e.on),{on_closed:function(e){return a.slice(n)},on_beforeOpen:function(t){return a.beforeOpen(t,e)},on_opened:e.opened}),t.createSlots({_:2},[t.renderList(e.slots,(function(e,n){return{name:n,fn:t.withCtx((function(){return[t.createCommentVNode(" eslint-disable vue/no-v-html "),a.isString(e)?(t.openBlock(),t.createBlock("div",{key:0,innerHTML:e},null,8,["innerHTML"])):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:1},e.bind,t.toHandlers(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","on_closed","on_beforeOpen","on_opened"])})),128))])},F.__file="lib/ModalsContainer.vue";var q=0,W="$vfm",Y="VueFinalModal",G="ModalsContainer",X=function(){var e,o,r=(o=null,{show:function(e){for(var r=this,i=arguments.length,a=new Array(i>1?i-1:0),l=1;l<i;l++)a[l-1]=arguments[l];switch(n(e)){case"string":return this.toggle.apply(this,[e,!0].concat(a));case"object":return Promise.allSettled([new Promise((function(n,i){var l={value:!0,id:Symbol("dynamicModal"),component:o,bind:{},slots:{},on:{},params:a[0],reject:i,opened:function(){n("show")}};r.dynamicModals.push(t.shallowReactive(Object.assign(l,e)))}))])}},hide:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.toggle(t,!1)},hideAll:function(){return this.hide.apply(this,u(this.openedModals.map((function(e){return e.props.name}))))},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=Array.isArray(e)?this.get.apply(this,u(e)):this.get(e);return Promise.allSettled(r.map((function(e){return e.toggle.apply(e,n)})))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.props.name)}))},dynamicModals:t.shallowReactive([]),openedModals:[],modals:[],_setDefaultModal:function(e){o=e}});return i(e={},W,r),i(e,Y,function(e){var t=U(D,e);return e._setDefaultModal(t),t}(r)),i(e,G,function(e){return U(F,e)}(r)),e},Z=X(),J=Z.$vfm,Q=Z.VueFinalModal,ee=Z.ModalsContainer,te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=0===q?Z:X(),o=n.$vfm,r=n.VueFinalModal,i=n.ModalsContainer;q+=1;var a=t.key||W,l=t.componentName||Y,u=t.dynamicContainerName||G;Object.defineProperty(e.config.globalProperties,a,{get:function(){return o}}),e.provide(a,o),e.component(l,r),e.component(u,i)},ne=function(e){return{install:function(t,n){var o=Object.assign({},e,n);te(t,o)}}};ne.install=te,e.$vfm=J,e.ModalsContainer=ee,e.VueFinalModal=Q,e.default=ne,e.defineVfm=X,e.vfmPlugin=ne,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=VueFinalModal.umd.js.map
