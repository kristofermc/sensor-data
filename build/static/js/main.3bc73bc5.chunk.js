(this["webpackJsonpsensor-data"]=this["webpackJsonpsensor-data"]||[]).push([[3],{195:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),s=r(76),a=r.n(s),i=(r(86),r(6)),c=r(0),l=r.n(c),d=r(4),h=r(2),b=r(3),j=r(8),u=r(7),p=r(52),f={integration:"react-1-xZWcfans4OKXQH7-bzvYxS4WaFNxwttdJz-YC57GC4DtKMto9stS5Py1xjAxYoalGyReYeSg3DIBPzzg6DDvO6xnOrlZk8AwIc1crj5gdgFeeiwcQDKuDuxr",tt:"tt-1-yH3Tz-doTJSmOolqmBQ-aKwEfbGva9-MdOx-iHa1EUI=",version:"2020-11-20"},g=r(54),O=r(5),x=function(e){Object(j.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).state={accessToken:null,results:[]},n}return Object(b.a)(r,[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"your.email@address",password:"yourselectedpassword"})},r={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ5b3VyLmVtYWlsQGFkZHJlc3MiLCJpYXQiOjE2Mjk5NzkwMjR9.uzS7XcottgqwdlxK7BUu3QhBv0M37mZVMUK2XIyRIxY"}};fetch("https://opendata.hopefully.works/api/signup",t).then((function(e){return e.json()})).then((function(t){return e.setState({accessToken:t.accessToken})})),fetch("https://opendata.hopefully.works/api/login",t).then((function(e){return e.json()})).then((function(t){e.setState({accessToken:t.accessToken})})),fetch("https://opendata.hopefully.works/api/events",r).then((function(e){return e.json()})).then((function(t){return e.setState({results:t})}))}},{key:"render",value:function(){this.state.accessToken;var e=this.state.results,t={labels:["Sensor 1","Sensor 2","Sensor 3","Sensor 4"],datasets:[{label:e.date,fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[e.sensor1,e.sensor2,e.sensor3,e.sensor4]}]};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{style:{textAlign:"center"},children:"Sensor Data"}),Object(O.jsxs)("h3",{style:{fontWeight:"normal"},children:["Date - ",Object(O.jsx)("b",{children:e.date})]}),Object(O.jsxs)("h5",{style:{fontWeight:"normal"},children:["Sensor 1 - ",Object(O.jsx)("b",{children:e.sensor1})]}),Object(O.jsxs)("h5",{style:{fontWeight:"normal"},children:["Sensor 2 - ",Object(O.jsx)("b",{children:e.sensor2})]}),Object(O.jsxs)("h5",{style:{fontWeight:"normal"},children:["Sensor 3 - ",Object(O.jsx)("b",{children:e.sensor3})]}),Object(O.jsxs)("h5",{style:{fontWeight:"normal"},children:["Sensor 4 - ",Object(O.jsx)("b",{children:e.sensor4})]}),Object(O.jsx)(g.a,{data:t})]})}}]),r}(o.a.Component);function m(e){var t=e.date,r=e.sensor1,n=e.sensor2,o=e.sensor3,s=e.sensor4,a={labels:["Sensor 1","Sensor 2","Sensor 3","Sensor 4"],datasets:[{label:t,fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgb(63, 127, 191)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[r,n,o,s]}]};return Object(O.jsxs)("div",{style:a,children:[Object(O.jsx)("h3",{style:{fontWeight:"normal"},children:Object(O.jsx)("b",{children:t})}),Object(O.jsxs)("h5",{style:{fontWeight:"normal"},children:["Sensor 1: ",Object(O.jsx)("b",{children:r})]}),Object(O.jsxs)("h5",{style:{fontWeight:"normal"},children:["Sensor 2: ",Object(O.jsx)("b",{children:n})]}),Object(O.jsxs)("h5",{style:{fontWeight:"normal"},children:["Sensor 3: ",Object(O.jsx)("b",{children:o})]}),Object(O.jsxs)("h5",{style:{fontWeight:"normal"},children:["Sensor 4: ",Object(O.jsx)("b",{children:s})]}),Object(O.jsx)(g.a,{data:a})]})}function y(){var e=Object(p.b)(),t=e.db,r=e.useReturn,n=(e.e,r((function(){return t("SENSOR-DATA").return()})).frame),o=function(){var e=Object(d.a)(l.a.mark((function e(){var r,n,o,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=prompt("Please enter the Date","2021-08-27T10:00:00.000Z"),n=prompt("Please enter the data for Sensor 1","59"),o=prompt("Please enter the data for Sensor 2","12"),s=prompt("Please enter the data for Sensor 3","95"),a=prompt("Please enter the data for Sensor 4","590"),r&&n&&o&&s&&a){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,t("SENSOR-DATA").insert({date:r,sensor1:n,sensor2:o,sensor3:s,sensor4:a}).one();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Error on input format");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{style:{position:"fixed",right:5,top:5,width:"80px",margin:20,padding:10,borderRadius:100,backgroundColor:"rgba(110, 236, 236, 0.5)"},onClick:o,children:"+ Add Record"}),Object(O.jsx)("div",{style:{marginLeft:130,marginRight:130,marginTop:30},children:Object(O.jsx)(x,{})}),Object(O.jsx)("h1",{style:{textAlign:"center",margin:30},children:"Historical Data:"}),Object(O.jsx)("div",{style:{marginLeft:130,marginRight:130,marginBottom:30},children:Object(O.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:20},children:n.map((function(e){return Object(O.jsx)(m,Object(i.a)({},e))}))})})]})}var S=function(){return Object(O.jsx)(p.a,{ebconfig:f,children:Object(O.jsx)(y,{})})},v=function(e){e&&e instanceof Function&&r.e(14).then(r.bind(null,207)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),s(e),a(e)}))};a.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),v()},86:function(e,t,r){}},[[195,4,5]]]);
//# sourceMappingURL=main.3bc73bc5.chunk.js.map