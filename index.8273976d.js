function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var t=document.querySelector(".container"),r=document.querySelector(".field"),n=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),a=document.querySelector(".remove-column");function c(){var e=document.querySelectorAll("tr"),t=e.length,r=e[0].cells.length;n.disabled=t>=10,o.disabled=t<=2,l.disabled=r>=10,a.disabled=r<=2}t.addEventListener("click",function(t){if(t.target.classList.contains("button")){var n,o=function(t){if(Array.isArray(t))return e(t)}(n=r.rows)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,void 0)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();if(t.target.classList.contains("append-row")){for(var l=r.insertRow(-1),a=0;a<o[0].cells.length;a++)l.insertCell(a);c()}t.target.classList.contains("remove-row")&&(r.deleteRow(-1),c()),t.target.classList.contains("append-column")&&(o.forEach(function(e){e.insertCell(e.length)}),c()),t.target.classList.contains("remove-column")&&(o.forEach(function(e){e.deleteCell(e.length)}),c())}});
//# sourceMappingURL=index.8273976d.js.map
