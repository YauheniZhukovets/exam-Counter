(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(5),c=n.n(u),s=(n(17),n(18),n(6)),i=n.n(s),l=n(1),o=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{disabled:e.disabled,onClick:e.funcButton,children:e.title})})},b=function(e){return"Incorrect value!"===e.errorText||e.inc===e.maxValue||e.startValue<0||e.maxValue<e.startValue?i.a.errorTextDisplay:i.a.textDisplay},j=function(e){return Object(l.jsxs)("div",{className:i.a.counter,children:[Object(l.jsx)("div",{className:b(e),children:e.isShowStartTestMessage&&e.errorText?e.errorText:e.inc}),Object(l.jsxs)("div",{className:"button",children:[Object(l.jsx)(o,{title:"inc",funcButton:e.incCount,disabled:e.disabledInc}),Object(l.jsx)(o,{title:"reset",funcButton:e.resetCount,disabled:e.disabledRes})]})]})},d=n(9),p=n.n(d),x=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:e.titleInput}),Object(l.jsx)("input",{onKeyPress:function(t){"Enter"===t.key&&e.pressSet()},className:e.errorInput,type:"number",onChange:function(t){e.changeValue(+t.currentTarget.value)},value:e.value})]})},O=function(e){return Object(l.jsxs)("div",{className:p.a.settingCounter,children:[Object(l.jsxs)("div",{className:p.a.settingDisplay,children:[Object(l.jsx)(x,{changeValue:e.changeMaxValue,pressSet:e.pressSet,titleInput:"max value:",errorInput:e.errorMaxInput,value:e.maxValue}),Object(l.jsx)(x,{changeValue:e.changeStartValue,pressSet:e.pressSet,titleInput:"start value:",errorInput:e.errorStartInput,value:e.startValue})]}),Object(l.jsx)("div",{className:"button",children:Object(l.jsx)(o,{title:"set",funcButton:function(){e.pressSet()},disabled:e.disabledSet})})]})},S=n(4),f=n.n(S),v=n(3),V=n(2),h={startValue:0,maxValue:5,inc:0,disableSet:!1,errorText:'Enter value and press "set"'};var g=function(){var e=Object(v.c)((function(e){return e.count.startValue})),t=Object(v.c)((function(e){return e.count.maxValue})),n=Object(v.c)((function(e){return e.count.inc})),r=Object(v.c)((function(e){return e.count.disableSet})),a=Object(v.c)((function(e){return e.count.errorText})),u=Object(v.b)(),c=t<=e||t<=0?f.a.errorInput:f.a.input,s=e<0?f.a.errorInput:f.a.input,i=!r||n===t,o=!r||e===n,b=r||e>t||e<0||t<=0||t===e;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{startValue:e,maxValue:t,errorMaxInput:c,errorStartInput:s,changeStartValue:function(e){u(function(e){return{type:"CHANGE-START-VALUE",value:e}}(e))},changeMaxValue:function(e){u(function(e){return{type:"CHANGE-MAX-VALUE",value:e}}(e))},pressSet:function(){u({type:"PRESS-SET"})},disabledSet:b}),Object(l.jsx)(j,{startValue:e,errorText:a,isShowStartTestMessage:!r,maxValue:t,inc:n,incCount:function(){u({type:"INC-COUNT"})},resetCount:function(){u({type:"RESET-COUNT"})},disabledInc:i,disabledRes:o})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,u=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),u(e),c(e)}))},m=n(7),C=n(12),I=Object(m.b)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-START-VALUE":return t.value<0||t.value>=e.maxValue?Object(V.a)(Object(V.a)({},e),{},{startValue:t.value,disableSet:!1,errorText:"Incorrect value!"}):Object(V.a)(Object(V.a)({},e),{},{startValue:t.value,disableSet:!1,errorText:'Enter value and press "set"'});case"CHANGE-MAX-VALUE":return t.value<=0||t.value<=e.startValue?Object(V.a)(Object(V.a)({},e),{},{maxValue:t.value,disableSet:!1,errorText:"Incorrect value!"}):Object(V.a)(Object(V.a)({},e),{},{maxValue:t.value,disableSet:!1,errorText:'Enter value and press "set"'});case"PRESS-SET":return Object(V.a)(Object(V.a)({},e),{},{inc:e.startValue,disableSet:!0,errorText:""});case"INC-COUNT":return e.inc<e.maxValue?Object(V.a)(Object(V.a)({},e),{},{inc:e.inc+1}):e;case"RESET-COUNT":return Object(V.a)(Object(V.a)({},e),{},{inc:e.startValue});default:return e}}}),y=Object(m.c)(I,function(){try{var e=localStorage.getItem("app-state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Object(m.a)(C.a));y.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("app-state",t)}catch(n){}}({count:y.getState().count})})),window.store=y,c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v.a,{store:y,children:Object(l.jsx)(g,{})})}),document.getElementById("root")),T()},4:function(e,t,n){e.exports={input:"Input_input__TMoqq",errorInput:"Input_errorInput__3xS39"}},6:function(e,t,n){e.exports={counter:"Counter_counter__P5Pit",errorTextDisplay:"Counter_errorTextDisplay__2Eoef",textDisplay:"Counter_textDisplay__1ienk"}},9:function(e,t,n){e.exports={settingCounter:"SettingCounter_settingCounter__3L6s3",settingDisplay:"SettingCounter_settingDisplay__1QlZl"}}},[[26,1,2]]]);
//# sourceMappingURL=main.573b8d57.chunk.js.map