(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=(a(30),a(8)),s=a(5),i=a(10),m=a.n(i),u=a(17),p=a(18),d=a(19),h=a(23),b=a(20),E=a(24),f=(a(32),function(e){return c.a.createElement("form",{onSubmit:e.getData},c.a.createElement("div",{className:"col-6 mx-auto input-group mb-3"},c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-outline-secondary"},"Search")),c.a.createElement("input",{type:"text",name:"search",className:"form-control",placeholder:"","aria-describedby":"button-addon2"})))}),v=function(e){return c.a.createElement("div",null,e.recipes.map(function(e){return c.a.createElement("div",{className:"container mt-2",key:e.recipe_id},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-md-9 col-sm-10 mx-auto"},c.a.createElement("div",{className:"card p-1"},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-lg-4 text-center"},c.a.createElement("img",{src:e.image_url,className:"img-fluid img-thumbnail",alt:"weLove"})),c.a.createElement("div",{className:"col-lg-8 text-left mt-2 "},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title "},"@",e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,25),"...")),c.a.createElement("p",{className:"card-text"},e.publisher.length<20?"".concat(e.publisher):"".concat(e.publisher.substring(0,25),"...")),c.a.createElement("button",{type:"button",className:"btn btn-outline-secondary float-right"},c.a.createElement(o.b,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}}," See more ")))))))))}))},g="d8c18edd0b7973738f811b593d8ad815",w=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:[]},a.getData=function(){var e=Object(u.a)(m.a.mark(function e(t){var n,c,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.elements.search.value,t.preventDefault(),e.next=4,fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=".concat(g,"&q=").concat(n,"&count=15"));case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,a.setState({recipes:r.recipes}),console.log(a.state.recipes);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},"Recipe book")),c.a.createElement(f,{getData:this.getData}),c.a.createElement(v,{recipes:this.state.recipes}))}}]),t}(n.Component),N=function(){return c.a.createElement("div",null,"Funciona la ruta, aqui iran los detalles de la receta YUMI!")},y=function(){return c.a.createElement(o.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",component:w,exact:!0}),c.a.createElement(s.a,{path:"/recipe/:id",component:N})))};a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.110bb16b.chunk.js.map