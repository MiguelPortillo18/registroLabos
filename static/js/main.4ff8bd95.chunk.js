(this.webpackJsonpregistro=this.webpackJsonpregistro||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(1),l=a(2),c=a(4),o=a(3),s=a(5),u=a(0),i=a.n(u),m=a(7),d=a.n(m),h=(a(15),0),b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={tableRows:[]},a.addRow=function(e){a.setState({tableRows:a.state.tableRows.concat([{carnet:e.carnet,schedule:e.schedule,late:e.late}])}),h++},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"renderRows",value:function(){var e=this;return this.state.tableRows.map((function(t){return i.a.createElement("tr",{key:h},i.a.createElement("td",null,t.carnet),i.a.createElement("td",null,t.schedule),i.a.createElement("td",null,(new Date).toLocaleString()),i.a.createElement("td",null,t.late),i.a.createElement("td",null," ",i.a.createElement("button",{type:"button",value:h,className:"btn btn-danger",onClick:function(){return e.handleDeleteRow()}},"Drop")))}))}},{key:"handleDeleteRow",value:function(e){var t=Object(n.a)(this.state.tableRows);t.splice(e,1),this.setState({tableRows:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(E,{callBackFromParent:this.addRow}),i.a.createElement("section",null,i.a.createElement("table",{className:"table table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",{className:"table-dark"},i.a.createElement("th",{scope:"col"},"Carnet"),i.a.createElement("th",{scope:"col"},"Horario de laboratorio"),i.a.createElement("th",{scope:"col"},"Hora de ingreso"),i.a.createElement("th",{scope:"col"},"Tarde?"),i.a.createElement("th",{scope:"col"},"Drop"))),i.a.createElement("tbody",{id:"table_body"},this.renderRows()))))}}]),t}(i.a.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).handleClick=function(){var e=document.getElementById("carnet_field").value,t=document.getElementById("schedule_field").options,n=t[t.selectedIndex].text,r=p(document.getElementById("late_switch").checked);a.props.callBackFromParent({carnet:e,schedule:n,late:r})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"renderSelection",value:function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"schedule"},"Seleccione el horario:"),i.a.createElement("select",{name:"schedule",className:"form-control",id:"schedule_field"},i.a.createElement("option",null,e[0]),i.a.createElement("option",null,e[1]),i.a.createElement("option",null,e[2]),i.a.createElement("option",null,e[3]),i.a.createElement("option",null,e[4]),i.a.createElement("option",null,e[5])))}},{key:"renderInput",value:function(){return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"carnet",className:"col-sm-2 col-form-label"},"Ingrese el carnet: "),i.a.createElement("br",null),i.a.createElement("input",{className:"form-control",type:"text",name:"carnet",id:"carnet_field"}))}},{key:"renderH1",value:function(e){return i.a.createElement("h1",null,e)}},{key:"renderSwitch",value:function(){return i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-switch"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"late_switch"}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"late_switch"},"Lleg\xf3 tarde?")))}},{key:"renderInsertButton",value:function(){var e=this;return i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{type:"button",className:"btn btn-danger",id:"submit_btn",onClick:function(){return e.handleClick()}},"Ingresar"))}},{key:"renderDropButton",value:function(){var e=this;return i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{type:"button",className:"btn btn-danger",id:"submit_btn",onClick:function(){return e.handleClick()}},"Ingresar"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("br",null),i.a.createElement("div",{className:"jumbotron"},this.renderH1("Registro de laboratorio"),this.renderInput(),this.renderSelection(["Lunes de 9:00 a 11.00","Martes de 13:30 a 15:30","Mi\xe9rcoles de 9:00 a 11.00","Jueves de 13:30 a 15:30","Viernes de 9:00 a 11.00","Viernes de 15:30 a 17:30"]),this.renderSwitch(),this.renderInsertButton()))}}]),t}(i.a.Component);d.a.render(i.a.createElement(b,null),document.getElementById("root"));var p=function(e){return e?"Llego tarde":"A tiempo"}},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.4ff8bd95.chunk.js.map