(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(25),c=a.n(r),s=a(28),i=a(14),o="LOAD_GETREGION_REQ",j="LOAD_GETREGION_SUCCESS",d="LOAD_GETREGION_FAILURE",g={get_region:{isLoading:!1,data:{},error:""}},l=Object(s.combineReducers)({getRegions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case o:return Object(i.a)(Object(i.a)({},e),{},{get_region:Object(i.a)(Object(i.a)({},e.get_region),{},{isLoading:!0,error:""})});case j:return Object(i.a)(Object(i.a)({},e),{},{get_region:Object(i.a)(Object(i.a)({},e.get_region),{},{isLoading:!1,data:n})});case d:return Object(i.a)(Object(i.a)({},e),{},{get_region:Object(i.a)(Object(i.a)({},e.get_region),{},{isLoading:!1,error:"Unable to get Region Data Please try again..."})});default:return e}}}),b=function(e,t){return l(e,t)},O=a(55),h=a(56),x=Object(s.createStore)(b,Object(h.composeWithDevTools)(Object(s.applyMiddleware)(O.a))),u=(a(72),a(64)),m=a(6),p=a(36),y=a(57),v=a.n(y),f=a(113),_=a(114),R=a(115),L=a(112),F=a(3),w={load_regions:function(){return function(e){return e({type:o}),v.a.get("https://restcountries.com/v3/region/asia").then((function(t){console.log(t.data);var a=t.data[Math.floor(Math.random()*t.data.length)];console.log(a),e({type:j,payload:a})})).catch((function(t){var a;console.log(t),e({type:d,payload:a})}))}}},E=Object(p.b)((function(e){return{regions:e.getRegions.get_region}}),w)((function(e){var t=e.regions,a=e.load_regions;Object.keys(t.data).length&&console.log(t,t.data.borders);return Object(F.jsxs)("div",{style:{marginTop:"20px"},children:[Object(F.jsx)("h2",{children:Object.keys(t.data).length?Object(F.jsx)(F.Fragment,{children:"Please Press Below Button to get a New Region"}):Object(F.jsx)(F.Fragment,{children:"Please Press Below Button to Load a Region"})}),Object(F.jsxs)("div",{children:[Object(F.jsx)(f.a,{type:"primary",danger:!0,onClick:function(){a()},children:Object.keys(t.data).length?Object(F.jsx)(F.Fragment,{children:"Refresh Region!!"}):Object(F.jsx)(F.Fragment,{children:"Get a Region!!"})}),Object.keys(t.data).length&&!t.isLoading?Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{children:Object(F.jsx)("img",{src:t.data.flags[1],alt:"Flag_Image",height:"400",width:"300",style:{margin:"20px 10px 10px 10px"}})}),Object(F.jsxs)("div",{style:{fontSize:"1.2rem"},children:[Object(F.jsxs)(_.a,{children:[Object(F.jsxs)(R.a,{xs:24,sm:12,children:["Name : ",t.data.name.common]}),Object(F.jsxs)(R.a,{xs:24,sm:12,children:["Capital : ",t.data.capital[0]]})]}),Object(F.jsxs)(_.a,{children:[Object(F.jsxs)(R.a,{xs:24,sm:12,children:["Region : ",t.data.region]}),Object(F.jsxs)(R.a,{xs:24,sm:12,children:["Sub Region : ",t.data.subregion]})]}),Object(F.jsxs)(_.a,{children:[Object(F.jsx)(R.a,{xs:24,sm:12,children:t.data.hasOwnProperty("languages")?Object(F.jsxs)(F.Fragment,{children:["Languages :",Object.values(t.data.languages).join(",")]}):Object(F.jsx)(F.Fragment,{})}),Object(F.jsx)(R.a,{xs:24,sm:12,children:t.data.hasOwnProperty("borders")?Object(F.jsxs)(F.Fragment,{children:["Borders : ",Object.values(t.data.borders).join(",")]}):Object(F.jsx)(F.Fragment,{})})]})]})]}):Object(F.jsx)("div",{children:t.isLoading?Object(F.jsx)("div",{className:"loader",children:Object(F.jsx)(L.a,{tip:"Loading...",size:"large"})}):Object(F.jsx)(F.Fragment,{})})]})]})}));function k(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(u.a,{children:Object(F.jsxs)(m.d,{children:[Object(F.jsx)(m.b,{exact:!0,path:"/region",component:E}),Object(F.jsx)(m.a,{from:"/",to:"/region"})]})})})}a(107);var G=document.getElementById("root");c.a.render(Object(F.jsx)(n.StrictMode,{children:Object(F.jsx)(p.a,{store:x,children:Object(F.jsx)(k,{})})}),G)},72:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.63f835c2.chunk.js.map