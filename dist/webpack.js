!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const o=n(1),r=n(2),l=["a","b"];let d=3,u={a:[[]],b:[[]]};const a=e=>{let t=document.getElementById(`matriz:${e}`);t.innerHTML="";for(let n=0;n<d;n++){let o=document.createElement("div");o.style["margin-top"]=0;for(let t=0;t<d;t++){let r=document.createElement("input");r.type="number",r.style.width=`${100/d}%`,r.style.margin=0,r.style.padding=0,r.placeholder=`${e}${n+1},${t+1}`,r.id=`${e}:${n}:${t}`,o.appendChild(r)}t.appendChild(o)}},c=()=>{console.log("Atualizando...");const e=document.getElementById("sl:ordem").value;l.map(e=>{(e=>{u[e]=[[]];for(let t=0;t<d;t++){u[e][t]=[];for(let n=0;n<d;n++)u[e][t].push(document.getElementById(`${e}:${t}:${n}`).value||0)}console.log("Load Matriz",e,u[e])})(e)}),e!=d?(console.log("Ordem foi alterado..."),d=e,l.map(e=>{a(e)}),document.getElementById("hidden").className="uk-hidden"):(console.log("Obter dados..."),document.getElementById("hidden").className="",l.map(e=>{(e=>{let t=document.getElementById(`info:${e}`);t.innerHTML="";let n=document.createElement("p");n.innerText=`Determinante é ${o(u[e])}`,t.appendChild(n)})(e)})),console.log("Feito!")};document.getElementById("sl:ordem").value=3,l.map(e=>{a(e)}),document.getElementById("bt:load").addEventListener("click",c,!1),document.getElementById("sl:ordem").addEventListener("change",c),e.exports={determinante:o,soma:r,subtracao:(e,t)=>r(e,t,!0)}},function(e,t){const n=(e,t)=>{let n=[],o=e.length;for(let r=1;r<o;r++)n.push(e[r].reduce((e,n,o)=>(t!=o&&e.push(n),e),[]));return n},o=e=>{if(2==e.length)return e[0][0]*e[1][1]-e[0][1]*e[1][0];let t=0,r=e.length;for(let l=0;l<r;l++)t+=e[0][l]*((l%2?-1:1)*o(n(e,l)));return t};e.exports=o},function(e,t){e.exports=((e,t,n)=>{let o=e.length,r=[];for(let l=0;l<o;l++){r[l]=[];for(let d=0;d<o;d++)r[l][d]=n?e[l][d]-t[l][d]:e[l][d]+t[l][d]}return r})}]);