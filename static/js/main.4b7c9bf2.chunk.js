(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),s=a.n(r),l=(a(30),a(6)),o=a(5),i=a(7),m=a.n(i),u=a(10),p=a(11),d=a(12),h=a(14),b=a(13),v=a(15),E=(a(32),function(e){return n.a.createElement("form",{onSubmit:e.getData},n.a.createElement("div",{className:"col-6 mx-auto input-group mb-3"},n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-outline-secondary"},"Search")),n.a.createElement("input",{type:"text",name:"search",className:"form-control",placeholder:"","aria-describedby":"button-addon2"})))}),f=function(e){return n.a.createElement("div",null,e.recipes&&e.recipes.map(function(e){return n.a.createElement("div",{className:"container mt-2",key:e.recipe_id},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 col-md-9 col-sm-10 mx-auto"},n.a.createElement("div",{className:"card p-1"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-lg-4 text-center"},n.a.createElement("img",{src:e.image_url,className:"img-fluid img-thumbnail",alt:"weLove"})),n.a.createElement("div",{className:"col-lg-8 text-left mt-2 "},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title "},"@",e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,25),"...")),n.a.createElement("p",{className:"card-text"},e.publisher.length<20?"".concat(e.publisher):"".concat(e.publisher.substring(0,25),"...")),n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary float-right"},n.a.createElement(l.b,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}}," See more ")))))))))}))},g="d8c18edd0b7973738f811b593d8ad815",N=function(e){function t(){var e,a;Object(p.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={recipes:[]},a.getData=function(){var e=Object(u.a)(m.a.mark(function e(t){var c,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.elements.search.value,t.preventDefault(),e.next=4,fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=".concat(g,"&q=").concat(c,"&count=15"));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,a.setState({recipes:r.recipes}),console.log(a.state.recipes);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Recipe book")),n.a.createElement(E,{getData:this.getData}),n.a.createElement(f,{recipes:this.state.recipes}))}}]),t}(c.Component),w="d8c18edd0b7973738f811b593d8ad815",y=function(e){function t(){var e,a;Object(p.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={active:[]},a.componentDidMount=Object(u.a)(m.a.mark(function e(){var t,c,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=".concat(w,"&q=").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a.setState({active:n.recipes[0]}),console.log(a.state.active);case 9:case"end":return e.stop()}},e)})),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},0!==this.state.active.length&&n.a.createElement("div",{className:"col-8 mx-auto"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:this.state.active.image_url,className:"card-img-top",alt:this.state.active.title}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},this.state.active.title),n.a.createElement("p",{className:"card-text"},"Publisher: ",n.a.createElement("span",null," ",this.state.active.publisher," ")),n.a.createElement("p",{className:"card-text"},"Website: ",n.a.createElement("a",{href:this.state.active.publisher_url},this.state.active.publisher_url)),n.a.createElement("button",{className:"btn btn-outline-secondary float-right"},n.a.createElement(l.b,{to:"/"},"Home")))))))}}]),t}(c.Component),x=function(){return n.a.createElement(l.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",component:N,exact:!0}),n.a.createElement(o.a,{path:"/recipe/:id",component:y})))};a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.4b7c9bf2.chunk.js.map