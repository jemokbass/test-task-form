(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a747"],{bc1a:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"form-passport form",on:{submit:function(t){return t.preventDefault(),e.submitHandlerPassport(t)}}},[s("h2",{staticClass:"form-passport__head head-title"},[e._v("Документ удостоверяющий личность")]),s("label",{staticClass:"label form-passport__select"},[s("span",{staticClass:"form-passport__title"},[e._v("Тип документа*")]),s("div",{staticClass:"select-inner"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.typeDocument,expression:"typeDocument"}],staticClass:"select",class:{invalid:e.$v.typeDocument.$dirty&&!e.$v.typeDocument.required,valid:e.$v.typeDocument.required},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.typeDocument=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}}),s("option",{attrs:{value:"passport"}},[e._v("Паспорт")]),s("option",{attrs:{value:"born"}},[e._v("Свидетельство о рождении")]),s("option",{attrs:{value:"driver"}},[e._v("Водительское удостоверение")])]),s("span",{staticClass:"focus"})]),e.$v.typeDocument.$dirty&&!e.$v.typeDocument.required?s("small",{staticClass:"invalid"},[e._v("Поле пустое")]):e._e()]),s("label",{staticClass:"label form-passport__label"},[s("span",{staticClass:"form-passport__title"},[e._v("Серия")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.series,expression:"series"}],staticClass:"input",attrs:{type:"text",maxlength:"7"},domProps:{value:e.series},on:{input:function(t){t.target.composing||(e.series=t.target.value)}}})]),s("label",{staticClass:"label form-passport__label"},[s("span",{staticClass:"form-passport__title"},[e._v("Номер")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.numberPassport,expression:"numberPassport"}],staticClass:"input",attrs:{type:"text",maxlength:"6"},domProps:{value:e.numberPassport},on:{input:function(t){t.target.composing||(e.numberPassport=t.target.value)}}})]),s("label",{staticClass:"label form-passport__label"},[s("span",{staticClass:"form-passport__title"},[e._v("Кем выдан")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.whoIssue,expression:"whoIssue"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.whoIssue},on:{input:function(t){t.target.composing||(e.whoIssue=t.target.value)}}})]),s("label",{staticClass:"label form-passport__label"},[s("span",{staticClass:"form-passport__title"},[e._v("Дата выдачи*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dateIssue,expression:"dateIssue"}],staticClass:"input",class:{invalid:e.$v.dateIssue.$dirty&&!e.$v.dateIssue.required||e.$v.dateIssue.$dirty&&!e.$v.dateIssue.minLength,valid:e.$v.dateIssue.$dirty&&e.$v.dateIssue.required&&e.$v.dateIssue.minLength},attrs:{type:"text",maxlength:"10"},domProps:{value:e.dateIssue},on:{input:function(t){t.target.composing||(e.dateIssue=t.target.value)}}}),e.$v.dateIssue.$dirty&&!e.$v.dateIssue.required?s("small",{staticClass:"invalid"},[e._v('Поле "дата выдачи" должно быть заполнено')]):e.$v.dateIssue.$dirty&&!e.$v.dateIssue.minLength?s("small",{staticClass:"invalid"},[e._v("Слишком короткая дата")]):e._e()]),e._m(0)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-passport__next"},[s("button",{staticClass:"button",attrs:{type:"submit"}},[e._v("➤")])])}],i=(s("ac1f"),s("5319"),s("b5ae")),n={name:"Passport",data:function(){return{typeDocument:"",series:"",numberPassport:"",whoIssue:"",dateIssue:""}},validations:{typeDocument:{required:i["required"]},dateIssue:{required:i["required"],minLength:Object(i["minLength"])(8)}},watch:{series:function(){this.series=this.series.replace(/[^0-9]/g,"").replace(/^(\d{2})?(\d{2})?/g,"$1 - $2")},numberPassport:function(){this.numberPassport=this.numberPassport.replace(/[^0-9]/g,"").replace(/^(\d{6})?/g,"$1")},dateIssue:function(){this.dateIssue=this.dateIssue.replace(/[^0-9]/g,"").replace(/^(\d{2})?(\d{2})?(\d{4})?/g,"$1.$2.$3")}},methods:{submitHandlerPassport:function(){var e=this;if(this.$v.$touch(),!this.$v.$invalid){var t={typeDocument:this.typeDocument,series:this.series,numberPassport:this.numberPassport,whoIssue:this.whoIssue,dateIssue:this.dateIssue},s=document.querySelector(".form-passport");s.insertAdjacentHTML("afterBegin",'<div class="modal"><h3>Успешно</h3></div>'),setTimeout((function(){e.$router.push("/"),console.log(t)}),2200)}}}},o=n,l=s("2877"),u=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21a747.c4e91dbe.js.map