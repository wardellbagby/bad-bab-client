(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{886:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_toast",function(){return p});var n=r(6),o=r(9),i=r(15),a=r(890),s=r(893);function c(t,e,r){var n=new t,o=new t,i=e.host||e,a=e.querySelector(".toast-wrapper");o.addElement(a);switch(r){case"top":o.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var s=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",o.fromTo("opacity",.01,1);break;default:o.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(o))}function d(t,e,r){var n=new t,o=new t,i=e.host||e,a=e.querySelector(".toast-wrapper");o.addElement(a);switch(r){case"top":o.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":o.fromTo("opacity",.99,0);break;default:o.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(o))}function l(t,e,r){var n=new t,o=new t,i=e.host||e,a=e.querySelector(".toast-wrapper");o.addElement(a);switch(r){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",o.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",o.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",o.fromTo("opacity",.01,1)}return Promise.resolve(n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o))}function u(t,e){var r=new t,n=new t,o=e.host||e,i=e.querySelector(".toast-wrapper");return n.addElement(i),n.fromTo("opacity",.99,0),Promise.resolve(r.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(n))}var p=function(){function t(t){Object(o.r)(this,t),this.presented=!1,this.mode=Object(o.f)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,this.didPresent=Object(o.g)(this,"ionToastDidPresent",7),this.willPresent=Object(o.g)(this,"ionToastWillPresent",7),this.willDismiss=Object(o.g)(this,"ionToastWillDismiss",7),this.didDismiss=Object(o.g)(this,"ionToastDidDismiss",7),this.config=Object(o.h)(this,"config")}return t.prototype.present=function(){return n.__awaiter(this,void 0,void 0,function(){var t=this;return n.__generator(this,function(e){switch(e.label){case 0:return[4,Object(i.e)(this,"toastEnter",c,l,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(i.f)(this,t,e,"toastLeave",d,u,this.position)},t.prototype.onDidDismiss=function(){return Object(i.g)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(i.g)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this,e=this.buttons?this.buttons.map(function(t){return"string"===typeof t?{text:t}:t}):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e},t.prototype.buttonClick=function(t){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(r){switch(r.label){case 0:return e=t.role,Object(i.j)(e)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return r.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}})})},t.prototype.callButtonHandler=function(t){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(r){switch(r.label){case 0:if(!t||!t.handler)return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.handler()];case 2:return!1===r.sent()?[2,!1]:[3,4];case 3:return e=r.sent(),console.error(e),[3,4];case 4:return[2,!0]}})})},t.prototype.hostData=function(){var t,e=Object(o.f)(this);return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign((t={},t[""+e]=!0,t),Object(a.a)(this.color),Object(a.b)(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.renderButtons=function(t,e){var r,n=this;if(0!==t.length){var i=Object(o.f)(this),a=((r={"toast-button-group":!0})["toast-button-group-"+e]=!0,r);return Object(o.j)("div",{class:a},t.map(function(t){return Object(o.j)("button",{type:"button",class:h(t),tabIndex:0,onClick:function(){return n.buttonClick(t)}},Object(o.j)("div",{class:"toast-button-inner"},t.icon&&Object(o.j)("ion-icon",{name:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===i&&Object(o.j)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))}))}},t.prototype.__stencil_render=function(){var t,e=this.getButtons(),r=e.filter(function(t){return"start"===t.side}),n=e.filter(function(t){return"start"!==t.side}),i=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(o.j)("div",{class:i},Object(o.j)("div",{class:"toast-container"},this.renderButtons(r,"start"),Object(o.j)("div",{class:"toast-content"},void 0!==this.header&&Object(o.j)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(o.j)("div",{class:"toast-message",innerHTML:Object(s.a)(this.message)})),this.renderButtons(n,"end")))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.l)(this)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(o.j)(o.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"},enumerable:!0,configurable:!0}),t}();function h(t){var e;return Object.assign(((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,e["ion-focusable"]=!0,e["ion-activatable"]=!0,e),Object(a.b)(t.cssClass))}},890:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return a}),r.d(e,"c",function(){return o}),r.d(e,"d",function(){return c});var n=r(6);function o(t,e){return null!==e.closest(t)}function i(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function a(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var s=/^[a-z][a-z0-9+\-.]*:/;function c(t,e,r,o){return n.__awaiter(this,void 0,void 0,function(){var i;return n.__generator(this,function(n){switch(n.label){case 0:return null==e||"#"===e[0]||s.test(e)?[3,2]:(i=t.document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return n.sent(),[2,i.push(e,o)];case 2:return[2,!1]}})})}},893:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(t){try{if("string"!==typeof t||""===t)return t;var e=document.createDocumentFragment(),r=document.createElement("div");e.appendChild(r),r.innerHTML=t,s.forEach(function(t){for(var r=e.querySelectorAll(t),n=r.length-1;n>=0;n--){var a=r[n];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var s=i(a),c=0;c<s.length;c++)o(s[c])}});for(var n=i(e),a=0;a<n.length;a++)o(n[a]);var c=document.createElement("div");c.appendChild(e);var d=c.querySelector("div");return null!==d?d.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},o=function t(e){if(!e.nodeType||1===e.nodeType){for(var r=e.attributes.length-1;r>=0;r--){var n=e.attributes[r],o=n.name;if(a.includes(o.toLowerCase())){var s=n.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}else e.removeAttribute(o)}var c=i(e);for(r=0;r<c.length;r++)t(c[r])}},i=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=53.10fedc35.chunk.js.map