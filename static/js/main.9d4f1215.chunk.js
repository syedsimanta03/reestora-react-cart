(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,a){e.exports=a.p+"static/media/Item1.37a9b420.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/Item2.346557c3.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/Item3.03ac90e2.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/Item4.96c6f156.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/Item5.b62273c8.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/Item6.03ac90e2.jpg"},69:function(e,t,a){e.exports=a(90)},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),l=a(21),m=a(13),o=a(24),s=a(22),d=a(25),u=a(18),p=a(26),h=a(112),E=a(113),f=a(114),b=a(115),v=a(111),g=a(110),y=a(6),_=a(53),N=a.n(_),O=a(16),j=Object(y.a)(function(e){return{badge:{top:"30%",right:-5,border:"2px solid ".concat("light"===e.palette.type?e.palette.grey[200]:e.palette.grey[900])}}})(g.a);var I=Object(O.b)(function(e){return{cartItems:e.addedItems.length}},null)(function(e){return r.a.createElement(v.a,{"aria-label":"Cart",style:{color:"white"}},r.a.createElement(j,{badgeContent:e.cartItems,color:"primary"},r.a.createElement(N.a,null)))}),k=Object(h.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"white"}}});function w(){var e=k();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:e.root},r.a.createElement(E.a,{position:"fixed",color:"secondary"},r.a.createElement(f.a,null,r.a.createElement(b.a,{variant:"h6",className:e.title},r.a.createElement(u.b,{to:"/reestora-react-cart",className:"link-w logo"},r.a.createElement("i",{class:"material-icons"},"fastfood")," Reestora")),r.a.createElement("ul",{className:"shop-items"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/reestora-react-cart",className:"link-w"},"Shop")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/cart",className:"link-w ml-1"},r.a.createElement(I,null))))))),r.a.createElement("div",{class:"header header__content"},r.a.createElement(b.a,{variant:"h4"},r.a.createElement("p",{class:"display-1"},"Good food choices are good ",r.a.createElement("br",null),"investments.")),r.a.createElement("p",{className:"mt"},"There is a powerful need for symbolism, and that means the architecture must have ",r.a.createElement("br",null),"something that appeals to the human heart."," "),r.a.createElement("div",{class:"header__media"},r.a.createElement("button",{class:"header__media__btn header__media__btn__btn--1 btn-primary"},"Order Now"),r.a.createElement("p",null,"Watch our story"),r.a.createElement("button",{class:"header__media__btn header__media__btn__btn--2"},r.a.createElement("i",{class:"fas fa-play"})))))}var C=a(116),x=a(118),A=a(117),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.addToCart(e)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t){return r.a.createElement("div",{className:"cards"},r.a.createElement(C.a,{className:"card",key:t.id},r.a.createElement(A.a,{className:"media"},r.a.createElement("img",{src:t.img,alt:t.title,width:"auto",height:"280"})),r.a.createElement(x.a,null,r.a.createElement(b.a,{variant:"h6"},t.title),r.a.createElement("span",{to:"/",className:"header__media__btn__btn--3",onClick:function(){e.handleClick(t.id)}},r.a.createElement("i",{className:"material-icons"},"add")),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,t.desc),r.a.createElement("p",{className:"pt"},r.a.createElement("b",null,"Price: ",t.price,"$"))))))});return r.a.createElement("div",{className:"mt"},r.a.createElement(b.a,{variant:"h4",className:"center"},"All Our Best Fastfood Items"),r.a.createElement("div",{className:"box"},t))}}]),t}(n.Component),T=Object(O.b)(function(e){return{items:e.items}},function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}})(S),Q=a(119),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleChecked=function(e){e.target.checked?a.props.addShipping():a.props.substractShipping()},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillUnmount",value:function(){this.refs.shipping.checked&&this.props.substractShipping()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"collection"},r.a.createElement("li",{className:"collection-item"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",ref:"shipping",onChange:this.handleChecked}),r.a.createElement("span",{className:"ml-12"},"Shipping(+12$)"))),r.a.createElement("li",{className:"collection-item"},r.a.createElement("b",null,"Total: ",this.props.total," $"))),r.a.createElement("div",{className:"ml-13 my"},r.a.createElement(Q.a,{variant:"contained",color:"primary"},"Check Out"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),M=Object(O.b)(function(e){return{addedItems:e.addedItems,total:e.total}},function(e){return{addShipping:function(){e({type:"ADD_SHIPPING"})},substractShipping:function(){e({type:"SUB_SHIPPING"})}}})(D),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleRemove=function(e){a.props.removeItem(e)},a.handleAddQuantity=function(e){a.props.addQuantity(e)},a.handleSubtractQuantity=function(e){a.props.subtractQuantity(e)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.length?this.props.items.map(function(t){return r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"collection-item avatar",key:t.id},r.a.createElement("div",{className:"item-img"},r.a.createElement("img",{src:t.img,alt:t.img,className:""})),r.a.createElement("div",{className:"item-desc"},r.a.createElement("h3",null,t.title),r.a.createElement("p",{className:"ml-12"},r.a.createElement("b",null,"Price: ",t.price,"$")),r.a.createElement("p",{className:"ml-12"},r.a.createElement("b",null,"Quantity: ",t.quantity)),r.a.createElement("div",{className:"add-remove"},r.a.createElement(u.b,{to:"/cart"},r.a.createElement("i",{className:"material-icons",onClick:function(){e.handleAddQuantity(t.id)}},"arrow_drop_up")),r.a.createElement(u.b,{to:"/cart"},r.a.createElement("i",{className:"material-icons",onClick:function(){e.handleSubtractQuantity(t.id)}},"arrow_drop_down"))),r.a.createElement("button",{className:"header__media__btn__btn--1",onClick:function(){e.handleRemove(t.id)}},"Remove"))),r.a.createElement("hr",null))}):r.a.createElement("p",{className:"ml-13"},"Nothing.");return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"cart"},r.a.createElement(b.a,{variant:"h5",className:"my"},r.a.createElement("p",{className:"ml-13"}," You have ordered:")),r.a.createElement("ul",{className:"collection my"},t)),r.a.createElement(M,null))}}]),t}(n.Component),R=Object(O.b)(function(e){return{items:e.addedItems}},function(e){return{removeItem:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))},addQuantity:function(t){e(function(e){return{type:"ADD_QUANTITY",id:e}}(t))},subtractQuantity:function(t){e(function(e){return{type:"SUB_QUANTITY",id:e}}(t))}}})(P),U=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,{items:"this.state.value"}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/reestora-react-cart",component:T}),r.a.createElement(p.a,{path:"/cart",component:R}))))}}]),t}(n.Component),q=(a(89),a(38)),B=a(19),G=a(55),L=a.n(G),Y=a(56),H=a.n(Y),$=a(57),F=a.n($),J=a(58),V=a.n(J),W=a(59),z=a.n(W),K=a(60),X=a.n(K),Z={items:[{id:1,title:"Juice",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:110,img:L.a},{id:2,title:"Chicken",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:80,img:H.a},{id:3,title:"Sticks",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img:F.a},{id:4,title:"Sandwitch",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:260,img:V.a},{id:5,title:"Roll",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:160,img:z.a},{id:6,title:"Icecream",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img:X.a}],addedItems:[],total:0},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.items.find(function(e){return e.id===t.id});if(e.addedItems.find(function(e){return t.id===e.id}))return a.quantity+=1,Object(B.a)({},e,{total:e.total+a.price});a.quantity=1;var n=e.total+a.price;return Object(B.a)({},e,{addedItems:[].concat(Object(q.a)(e.addedItems),[a]),total:n})}if("REMOVE_ITEM"===t.type){var r=e.addedItems.find(function(e){return t.id===e.id}),c=e.addedItems.filter(function(e){return t.id!==e.id}),i=e.total-r.price*r.quantity;return console.log(r),Object(B.a)({},e,{addedItems:c,total:i})}if("ADD_QUANTITY"===t.type){var l=e.items.find(function(e){return e.id===t.id});l.quantity+=1;var m=e.total+l.price;return Object(B.a)({},e,{total:m})}if("SUB_QUANTITY"===t.type){var o=e.items.find(function(e){return e.id===t.id});if(1===o.quantity){var s=e.addedItems.filter(function(e){return e.id!==t.id}),d=e.total-o.price;return Object(B.a)({},e,{addedItems:s,total:d})}o.quantity-=1;var u=e.total-o.price;return Object(B.a)({},e,{total:u})}return"ADD_SHIPPING"===t.type?Object(B.a)({},e,{total:e.total+12}):"SUB_SHIPPING"===t.type?Object(B.a)({},e,{total:e.total-12}):e},te=a(36),ae=Object(te.b)(ee);i.a.render(r.a.createElement(O.a,{store:ae},r.a.createElement(U,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.9d4f1215.chunk.js.map