(this["webpackJsonpskate-shop-app"]=this["webpackJsonpskate-shop-app"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),r=c.n(n),i=c(26),s=c.n(i),o=(c(100),c(101),c(25),c(13)),l=c(15),j=c(65),d=c(57),b=c(39),u=c(11),O=c(94),h=Object(n.createContext)(),x=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(u.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(0),l=Object(u.a)(o,2),j=l[0],d=l[1],b=Object(n.useState)(0),x=Object(u.a)(b,2),m=x[0],f=x[1],p=function(e){var t=i.findIndex((function(t){return t.Item.name===e.name}));return-1===t?[!1,t]:[!0,t]};return Object(a.jsx)(h.Provider,{value:{cart:i,setCart:s,addItem:function(e,t,c,a,n,r){return function(){t>0&&(p(e)[0]?i[p(e)[1]].Cantidad=i[p(e)[1]].Cantidad+t:(r(!0),s([].concat(Object(O.a)(i),[{Item:e,Cantidad:t}]))),d(j+t*e.price),n(a-t),f(m+t),c(0))}},clearCart:function(){d(0),f(0),s([])},removeItem:function(e,t){return function(){f(m-t),d(j-t*e.price),s(i.filter((function(t){return t.Item.name!==e.name})))}},total:j,cantTotal:m,isInCart:p},children:t})},m=c(34),f=c(123),p=c(121),g=c(48),C=c(35),k=c(32),v=c(125),y=c(68),I=c(21),N=function(e){var t=e.i,c=e.cart,r=Object(n.useContext)(h).removeItem;return Object(a.jsxs)(p.a,{className:"p-3",children:[Object(a.jsxs)(g.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsx)("h4",{children:c.Item.name})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(y.a,{"aria-label":"Basic example",style:{float:"right"},children:[Object(a.jsx)(k.a,{onClick:r(c.Item,c.Cantidad),variant:"outline-dark",style:{float:"right"},children:"Eliminar articulo"}),Object(a.jsx)(v.a.Toggle,{as:k.a,variant:"outline-dark",style:{float:"right"},eventKey:t.toString(),children:"Mostrar detalles"})]})})]}),Object(a.jsx)(v.a.Collapse,{eventKey:t.toString(),children:Object(a.jsxs)(I.a.Body,{children:[Object(a.jsxs)("p",{children:["X",c.Cantidad," productos"]}),Object(a.jsxs)("p",{children:["$",c.Item.price," cada uno, $",c.Item.price*c.Cantidad," en total"]})]})})]})},S=function(e){var t=Object(n.useContext)(h),c=t.cart,r=t.clearCart,i=t.total;return Object(n.useEffect)((function(){return function(){}}),[c,i]),Object(a.jsxs)(f.a,Object(m.a)(Object(m.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(a.jsx)(f.a.Header,{children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsx)(f.a.Title,{id:"contained-modal-title-vcenter",children:"Carrito"})}),Object(a.jsx)(C.a,{children:Object(a.jsx)(k.a,{onClick:e.onHide,variant:"outline-dark",style:{float:"right"},children:"X"})})]})})}),Object(a.jsxs)(f.a.Body,{children:[Object(a.jsx)(v.a,{children:c.map((function(e,t){return Object(a.jsx)(N,{cart:e,i:t},t)}))}),Object(a.jsx)("h2",{style:{display:0===c.length?"block":"none"},children:"Empty Cart v.v"})]}),Object(a.jsx)(f.a.Footer,{children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsxs)("h4",{children:["$",i," en total"]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(y.a,{"aria-label":"Basic example",style:{float:"right"},children:[Object(a.jsx)(k.a,{onClick:r,variant:"outline-dark",children:"Clear Cart"}),Object(a.jsx)(k.a,{as:o.b,to:"/Checkout",variant:"outline-dark",onClick:e.onHide,children:"Go to checkout"})]})})]})})})]}))},T=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),c=t[0],i=t[1],s=Object(n.useContext)(h),o=s.cart,l=s.cantTotal;return Object(n.useEffect)((function(){return function(){}}),[o]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.a.Link,{style:{display:0===o.length?"none":"block"},children:[l," ",Object(a.jsx)("img",{alt:"",src:"/images/cart.png",width:"30",height:"30",className:"d-inline-block align-top",onClick:function(){return i(!0)}})]}),Object(a.jsx)(S,{show:c,onHide:function(){return i(!1)}})]})},X=function(e){var t=e.linkTo;return Object(a.jsxs)(j.a,{bg:"dark",expand:"md",variant:"dark",className:"px-5",children:[Object(a.jsxs)(j.a.Brand,{as:o.b,to:"/",children:[Object(a.jsx)("img",{alt:"",src:"/images/banner.png",width:"60",height:"30",className:"d-inline-block align-top"})," ","SkateShop"]}),Object(a.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)(d.a.Link,{as:o.b,to:"/",children:"Home"}),Object(a.jsxs)(b.a,{title:"Categories",id:"basic-nav-dropdown",children:[Object(a.jsx)(b.a.Item,{as:o.b,to:"/category/Bones",children:"Bones"}),Object(a.jsx)(b.a.Item,{as:o.b,to:"/category/Spitfire",children:"Spitfire"}),Object(a.jsx)(b.a.Item,{as:o.b,to:"/category/Grizzly",children:"Grizzly"}),Object(a.jsx)(b.a.Item,{as:o.b,to:"/category/Element",children:"Element"}),Object(a.jsx)(b.a.Item,{as:o.b,to:"/category/RedBones",children:"RedBones"}),Object(a.jsx)(b.a.Item,{as:o.b,to:"/category/Independent",children:"Independent"}),Object(a.jsx)(b.a.Item,{href:t,target:"_blank",children:"Una pagina de skate real"})]})]}),Object(a.jsx)(d.a,{className:"justify-content-end",style:{width:"100%"},children:Object(a.jsx)(T,{})})]})]})},E=(c(110),c(78)),L=c(52),B=function(e){var t=e.initial,c=e.plus,r=e.minus,i=e.item,s=Object(n.useContext)(h),o=s.addItem,l=s.isInCart,j=s.cart,d=Object(n.useState)(t),b=Object(u.a)(d,2),O=b[0],x=b[1],m=Object(n.useState)(i.stock),f=Object(u.a)(m,2),p=f[0],g=f[1],C=Object(n.useState)(!1),v=Object(u.a)(C,2),I=v[0],N=v[1];return Object(n.useEffect)((function(){return!0===l(i)[0]?(g(i.stock-j[l(i)[1]].Cantidad),N(!0)):(g(i.stock),N(!1)),function(){}}),[i,p,j,l]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{className:"card-text",children:[p," productos diponibles."]}),Object(a.jsxs)("div",{className:"d-grid gap-2 col-12 ml-auto mb-2",children:[Object(a.jsxs)(y.a,{"aria-label":"Basic example",size:"sm",children:[Object(a.jsx)(k.a,{variant:"outline-light",size:"lg",block:!0,onClick:r(O,x),children:"-"}),Object(a.jsx)(E.a,{children:Object(a.jsx)(L.a,{readOnly:!0,value:O})}),Object(a.jsx)(k.a,{variant:"outline-light",size:"lg",block:!0,onClick:c(O,p,x),children:"+"})]}),Object(a.jsx)(k.a,{variant:"outline-light",size:"lg",block:!0,disabled:0===p||0===O,onClick:o(i,O,x,p,g,N,I),children:"Add to cart"})]})]})},z=(c(111),function(e,t){return function(){e>0&&t(e-1)}}),A=function(e,t,c){return function(){e<t?c(e+1):alert("No podes a\xf1adir mas de este producto ya que el stock es de "+t)}},w=function(e){var t=e.item,c=(e.is,Object(n.useState)(0)),r=Object(u.a)(c,1)[0];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(C.a,{xl:2,lg:3,md:3,sm:4,className:"mb-4",children:Object(a.jsxs)(I.a,{bg:"dark",text:"light",className:"h-100",children:[Object(a.jsxs)(o.b,{to:"/ItemDetail/".concat(t.id),style:{color:"inherit",textDecoration:"inherit"},children:[Object(a.jsx)(I.a.Img,{variant:"top",src:t.image}),Object(a.jsxs)(I.a.Body,{children:[Object(a.jsx)(I.a.Title,{children:t.name}),Object(a.jsxs)(I.a.Title,{children:["$",t.price]})]})]}),Object(a.jsx)(I.a.Footer,{children:Object(a.jsx)(B,{firstStock:t.stock,initial:r,plus:A,minus:z,item:t})})]})})})},F=c(90),G=(c(112),F.a.initializeApp({apiKey:"AIzaSyADL2JG0jHdYwstj_HhT0SvJAzfSlL2OSg",authDomain:"tienda-de-skate-92e46.firebaseapp.com",projectId:"tienda-de-skate-92e46",storageBucket:"tienda-de-skate-92e46.appspot.com",messagingSenderId:"426498971554",appId:"1:426498971554:web:9d9777d37de7405827c4fb",measurementId:"G-42TQQB87TK"})),q=function(){return F.a.firestore(G)},D=function(e){var t=e.id,c=Object(n.useState)([]),r=Object(u.a)(c,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){var e=q().collection("productos");"undefined"===typeof t||!0===t?e.get().then((function(e){var t=e.docs.map((function(e){return Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id})}));s(t)})):e.where("brand","==",t).get().then((function(e){var t=e.docs.map((function(e){return Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id})}));s(t)}));return function(){}}),[t]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(C.a,{sm:12,children:Object(a.jsx)(g.a,{children:i.map((function(e,t){return Object(a.jsx)(w,{is:t,item:e},t)}))})})})},P=function(e){e.children,e.greeting,e.listaDeItems;var t=Object(l.g)().id,c=Object(n.useState)(),r=Object(u.a)(c,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){return s("undefined"===typeof t||t),function(){}}),[t]),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(g.a,{children:Object(a.jsx)(D,{id:i})})})},$=(c(114),c(83)),H=c(64),J=function(e){var t=e.initial,c=e.plus,r=e.minus,i=e.item,s=Object(n.useContext)(h),l=s.addItem,j=s.isInCart,d=s.cart,b=Object(n.useState)(t),O=Object(u.a)(b,2),x=O[0],m=O[1],f=Object(n.useState)(i.stock),p=Object(u.a)(f,2),g=p[0],C=p[1],v=Object(n.useState)(!1),I=Object(u.a)(v,2),N=I[0],S=I[1];return Object(n.useEffect)((function(){return!0===j(i)[0]?(C(i.stock-d[j(i)[1]].Cantidad),S(!0)):(C(i.stock),S(!1)),function(){}}),[i,g,d,j]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{className:"card-text",children:[g," productos diponibles."]}),Object(a.jsxs)("div",{className:"d-grid gap-2 col-12 ml-auto mb-2",children:[Object(a.jsxs)(y.a,{"aria-label":"Basic example",size:"sm",children:[Object(a.jsx)(k.a,{variant:"outline-light",size:"lg",block:!0,onClick:r(x,m),children:"-"}),Object(a.jsx)(E.a,{children:Object(a.jsx)(L.a,{readOnly:!0,value:x})}),Object(a.jsx)(k.a,{variant:"outline-light",size:"lg",block:!0,onClick:c(x,g,m),children:"+"})]}),Object(a.jsx)(k.a,{variant:"outline-light",size:"lg",block:!0,disabled:0===g||0===x,onClick:l(i,x,m,g,C,S),children:"Add to cart"}),Object(a.jsx)(k.a,{variant:"outline-light",size:"lg",block:!0,style:{display:N?"block":"none"},as:o.b,to:"/checkout",children:" Go To Checkout "})]})]})},K=function(e,t){return function(){e>0&&t(e-1)}},M=function(e,t,c){return function(){e<t?c(e+1):alert("No podes a\xf1adir mas de este producto ya que el stock es de "+t)}},R=function(e){var t=e.item,c=Object(n.useState)(t),r=Object(u.a)(c,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){return s(t),function(){}}),[t]),Object(a.jsx)(C.a,{sm:6,children:Object(a.jsxs)(I.a,{bg:"dark",text:"light",className:"h-100",children:[Object(a.jsxs)(I.a.Body,{children:[Object(a.jsx)(I.a.Title,{children:i.name}),Object(a.jsxs)(I.a.Title,{children:["$",i.price]}),Object(a.jsx)(I.a.Text,{children:i.description})]}),Object(a.jsx)(I.a.Footer,{children:Object(a.jsx)(J,{firstStock:i.stock,initial:0,plus:M,minus:K,item:t})})]})})},Q=function(){var e=Object(l.g)().id,t=Object(n.useState)({}),c=Object(u.a)(t,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){return q().collection("productos").doc(e).get().then((function(e){e.exists?i(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id})):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})),function(){}}),[e]),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(C.a,{sm:6,children:Object(a.jsxs)(H.a,{prevLabel:"",nextLabel:"",fade:!0,className:"border border-dark",children:[Object(a.jsx)(H.a.Item,{children:Object(a.jsx)($.a,{src:r.image,alt:"asdad",thumbnail:!0,className:"d-block w-100 border-0"})}),Object(a.jsx)(H.a.Item,{children:Object(a.jsx)($.a,{src:r.image1,thumbnail:!0,className:"d-block w-100 border-0"})}),Object(a.jsx)(H.a.Item,{children:Object(a.jsx)($.a,{src:r.image2,thumbnail:!0,className:"d-block w-100 border-0"})})]})}),Object(a.jsx)(R,{item:r})]})})},_=c(124),U=c(126),V=c(122),W=function(){var e=Object(n.useContext)(h),t=e.cart,c=e.clearCart,r=Object(n.useState)({}),i=Object(u.a)(r,1)[0],s=Object(l.f)();Object(n.useEffect)((function(){return function(){}}),[t]);var o=function(e){i[e.target.id]=e.target.value};return Object(a.jsxs)(_.a,{className:"border p-3",onSubmit:function(e){(console.log(t.length),0!==t.length)?(i.items=t,q().collection("compras").add(i).then((function(e){s.push("/afterCheckout/".concat(e.id,"/").concat(i.formNameLastName)),c()})).catch((function(e){console.error("Error adding document: ",e)})),e.preventDefault(),e.stopPropagation()):(alert("No tienes ningun elemento agregado al carrito"),s.push("/"))},children:[Object(a.jsxs)(g.a,{children:[Object(a.jsxs)(_.a.Group,{as:C.a,controlId:"formEmail",children:[Object(a.jsx)(_.a.Label,{children:"Email"}),Object(a.jsx)(_.a.Control,{type:"email",required:!0,onChange:o}),Object(a.jsx)(_.a.Text,{className:"text-muted",children:"ejemplo@ejemplo.com"})]}),Object(a.jsxs)(_.a.Group,{as:C.a,controlId:"formNameLastName",children:[Object(a.jsx)(_.a.Label,{children:"Nombre y Apellido"}),Object(a.jsx)(_.a.Control,{required:!0,onChange:o}),Object(a.jsx)(_.a.Text,{className:"text-muted",children:"Nombre y Apellido"})]}),Object(a.jsxs)(_.a.Group,{as:C.a,controlId:"formPhone",children:[Object(a.jsx)(_.a.Label,{children:"Telefono"}),Object(a.jsx)(_.a.Control,{required:!0,onChange:o}),Object(a.jsx)(_.a.Text,{className:"text-muted",children:"+XX X XX XXXX-XXXX"})]})]}),Object(a.jsxs)(g.a,{children:[Object(a.jsxs)(_.a.Group,{as:C.a,controlId:"formAddress",children:[Object(a.jsx)(_.a.Label,{children:"Direcci\xf3n"}),Object(a.jsx)(_.a.Control,{required:!0,onChange:o}),Object(a.jsx)(_.a.Text,{className:"text-muted",children:"Calle XXXX"})]}),Object(a.jsxs)(_.a.Group,{as:C.a,controlId:"formAddressData",children:[Object(a.jsx)(_.a.Label,{children:"Piso, numero de departamento"}),Object(a.jsx)(_.a.Control,{required:!0,onChange:o}),Object(a.jsx)(_.a.Text,{className:"text-muted",children:"X\xb0 N\xb0 XX"})]})]}),Object(a.jsxs)(g.a,{children:[Object(a.jsxs)(_.a.Group,{as:C.a,controlId:"formCity",children:[Object(a.jsx)(_.a.Label,{children:"Ciudad"}),Object(a.jsx)(_.a.Control,{required:!0,onChange:o}),Object(a.jsx)(_.a.Text,{className:"text-muted",children:"Nombre de tu Ciudad"})]}),Object(a.jsxs)(_.a.Group,{as:C.a,controlId:"formProvince",children:[Object(a.jsx)(_.a.Label,{children:"Provincia"}),Object(a.jsx)(_.a.Control,{as:"select",onChange:o,required:!0,children:["Buenos Aires","Catamarca","Chaco","Chubut","Ciudad Autonoma de Buenos Aires","C\xf3rdoba","Corrientes","Entre R\xedos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuqu\xe9n","R\xedo Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego, Ant\xe1rtida e Isla del Atl\xe1ntico Sur","Tucum\xe1n"].map((function(e,t){return Object(a.jsx)("option",{children:e},t)}))})]}),Object(a.jsxs)(_.a.Group,{as:C.a,controlId:"FormPostalCode",children:[Object(a.jsx)(_.a.Label,{children:"Codigo postal"}),Object(a.jsx)(_.a.Control,{required:!0,onChange:o}),Object(a.jsx)(_.a.Text,{className:"text-muted",children:"X1234XXX"})]})]}),Object(a.jsx)(_.a.Group,{id:"formTyC",className:"mt-3",children:Object(a.jsx)(_.a.Check,{type:"checkbox",label:"Acepto los terminos y condiciones",required:!0})}),Object(a.jsx)(U.a,{placement:"right",overlay:Object(a.jsx)(V.a,{id:"tooltip-disabled",children:"El carrito debe tener como minimo un articulo!"}),children:Object(a.jsx)("span",{className:"d-inline-block",children:Object(a.jsx)(k.a,{variant:"outline-dark",type:"submit",className:"mt-3",disabled:0===t.length,children:"Submit"})})})]})},Y=function(e){var t=e.cart,c=e.i,r=Object(n.useContext)(h).removeItem;return Object(a.jsx)("div",{children:Object(a.jsxs)(p.a,{className:"p-3",children:[Object(a.jsxs)(g.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsx)("h4",{children:t.Item.name})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(y.a,{"aria-label":"Basic example",style:{float:"right"},children:[Object(a.jsx)(k.a,{onClick:r(t.Item,t.Cantidad),variant:"outline-dark",style:{float:"right"},children:"Eliminar articulo"}),Object(a.jsx)(v.a.Toggle,{as:k.a,variant:"outline-dark",style:{float:"right"},eventKey:c.toString(),children:"Mostrar detalles"})]})})]}),Object(a.jsx)(v.a.Collapse,{eventKey:c.toString(),children:Object(a.jsxs)(I.a.Body,{children:[Object(a.jsxs)("p",{children:["X",t.Cantidad," productos"]}),Object(a.jsxs)("p",{children:["$",t.Item.price," cada uno, $",t.Item.price*t.Cantidad," en total"]})]})})]})})},Z=function(){var e=Object(n.useContext)(h),t=e.cart,c=e.total;return Object(n.useEffect)((function(){return function(){}}),[t]),Object(a.jsxs)(v.a,{className:"border p-1",children:[t.map((function(e,t){return Object(a.jsx)(Y,{cart:e,i:t},t)})),Object(a.jsxs)("h4",{className:"p-3",children:["$",c," en total"]})]})},ee=function(){var e=Object(n.useContext)(h),t=e.cart,c=e.total;return Object(n.useEffect)((function(){return function(){}}),[t,c]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(W,{}),Object(a.jsx)(Z,{})]})},te=(c(115),function(){var e=Object(l.g)(),t=e.token,c=e.name;return Object(a.jsx)(p.a,{children:Object(a.jsx)(g.a,{className:"justify-content-center",children:Object(a.jsxs)(C.a,{children:[Object(a.jsxs)("h1",{children:["Listo ",c,"!"]}),Object(a.jsx)("h3",{children:"Tu compra se proceso con exito."}),Object(a.jsx)("h3",{children:"Pronto nos comunicaremos con vos para que realices el pago."}),Object(a.jsx)("h2",{children:"Tu token de compra es: "}),Object(a.jsx)("h2",{style:{fontWeight:"bolder",textDecoration:"underline"},children:t}),Object(a.jsx)(k.a,{variant:"outline-dark",as:o.b,to:"/",block:!0,children:"Volver a la home"})]})})})}),ce=function(){return Object(a.jsx)(x,{children:Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(X,{linkTo:"https://www.thrashermagazine.com/"}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(P,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/category/:id",children:Object(a.jsx)(P,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/itemDetail/:id",children:Object(a.jsx)(Q,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/Checkout",children:Object(a.jsx)(ee,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/afterCheckout/:token/:name",children:Object(a.jsx)(te,{})})]})]})})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,127)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ce,{})}),document.getElementById("root")),ae()}},[[116,1,2]]]);
//# sourceMappingURL=main.3d7f86c8.chunk.js.map