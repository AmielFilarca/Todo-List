!function(e){var t={};function o(d){if(t[d])return t[d].exports;var n=t[d]={i:d,l:!1,exports:{}};return e[d].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,d){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(o.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(d,n,function(t){return e[t]}.bind(null,n));return d},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);let d=[];const n=(e,t,o)=>{return{projectName:e,projectTodos:t=[],status:!1,addTodo:e=>{t.push(e)}}},r=(e,t,o,d,n)=>(!1,{title:e,description:t,dueDate:o,priority:d,status:!1});function c(){const e=document.querySelector(".projects-radio-group");for(;e.firstChild;)e.removeChild(e.lastChild);d.forEach(t=>{const o=document.createElement("input");o.setAttribute("type","radio"),o.setAttribute("id","projectIndex"+d.indexOf(t)),o.setAttribute("name","project"),o.setAttribute("value",t.projectName),o.setAttribute("data-index",d.indexOf(t)),o.addEventListener("change",()=>{i()}),0===d.indexOf(t)&&(o.checked=!0);const n=document.createElement("label");n.setAttribute("for","projectIndex"+d.indexOf(t)),n.textContent=t.projectName;const r=document.createElement("div");r.appendChild(o),r.appendChild(n),e.appendChild(r)})}function i(){const e=document.querySelector(".todo-list");for(;e.firstChild;)e.removeChild(e.lastChild);const t=document.querySelector('input[type="radio"][name="project"]:checked').dataset.index,o=document.createElement("button");o.classList.add("add-button","add-todo"),o.textContent="+ Add Todo";const n=document.querySelector(".todo-add");for(;n.firstChild;)n.removeChild(n.lastChild);n.appendChild(o),0==t?(d.forEach(t=>{const o=d.indexOf(t);t.projectTodos.forEach(n=>{const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("id",`project${d.indexOf(t)}todo${t.projectTodos.indexOf(n)}`),r.setAttribute("name","todo"),r.setAttribute("data-index",d[o].projectTodos.indexOf(n)),n.status?r.checked=!0:r.status=!1,r.addEventListener("change",()=>{n.status=r.checked});const c=document.createElement("label");c.setAttribute("for",`project${d.indexOf(t)}todo${t.projectTodos.indexOf(n)}`),c.textContent=n.title;const i=document.createElement("div");i.appendChild(r),i.appendChild(c),e.appendChild(i)})}),o.classList.add("disabled-btn")):(d[t].projectTodos.forEach(o=>{const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id","todoIndex"+d[t].projectTodos.indexOf(o)),n.setAttribute("name","todo"),n.setAttribute("data-index",d[t].projectTodos.indexOf(o)),o.status?n.checked=!0:n.status=!1,n.addEventListener("change",()=>{o.status=n.checked});const r=document.createElement("label");r.setAttribute("for","todoIndex"+d[t].projectTodos.indexOf(o)),r.textContent=o.title;const c=document.createElement("div");c.appendChild(n),c.appendChild(r),e.appendChild(c)}),o.classList.remove("disabled-btn"),o.addEventListener("click",s))}d.push({projectName:"All Todos",projectTodos:[],status:!1}),d.push(n("Project 1")),d.push(n("Project 2")),d.push(n("Project 3")),d[1].addTodo(r("Project 1 Todo 1","Description","Due Date","Priority")),d[1].addTodo(r("Project 1 Todo 2","Description","Due Date","Priority")),d[3].addTodo(r("Project 3 Todo 1","Description","Due Date","Priority"));function s(){const e=document.querySelector('input[type="radio"][name="project"]:checked').dataset.index;0!=e&&(d[e].addTodo(r(`Project ${e} Todo ${d[e].projectTodos.length+1}`,"Description","Due Date","Priority")),i())}document.querySelector(".add-project").addEventListener("click",()=>{d.push(n("Project "+d.length)),c();document.getElementById("projectIndex"+(d.length-1)).checked=!0,i()}),c(),i()}]);