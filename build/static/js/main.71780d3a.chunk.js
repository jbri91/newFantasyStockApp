(this["webpackJsonpstock-app"]=this["webpackJsonpstock-app"]||[]).push([[0],{59:function(e,t,a){},61:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),r=a.n(c),s=(a(59),a(53)),l=a(19),i=a.n(l),u=a(23),m=a(2),d=(a(61),a(37),a(102)),p=a(103),h=a(9),f=a(24),g=a(104),y=a(99),b=a(100),E=a(101);var S=function(e){var t=Object(h.g)(),a=e.setAuthentication,c=e.authentication,r=e.createPassword,s=e.createUsername,l=e.setUserId,i=e.userId,u=Object(n.useState)(""),S=Object(m.a)(u,2),k=S[0],O=S[1],j=Object(n.useState)(""),v=Object(m.a)(j,2),C=v[0],x=v[1],P=Object(n.useState)(!0),A=Object(m.a)(P,2),N=A[0],w=A[1],I=Object(n.useState)(!1),T=Object(m.a)(I,2),B=T[0],J=T[1],F=function(){return J(!B)},D=function(){O(""),x("")};return Object(n.useEffect)((function(){if(s&r){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usernameCredential:s,password:r})};fetch("/api/username",e)}i>0&&fetch("/api/foundusername",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(i)})}).then((function(e){return e.json()})).then((function(e){return O(e)})).catch((function(e){return console.log(e)}))}),[i,r,s]),c?t.push("/summary"):console.log("Please Login"),o.a.createElement("div",{style:{marginBottom:"70px"}},o.a.createElement(d.a,{bg:"dark",variant:"dark"},o.a.createElement(d.a.Brand,{href:"/"},o.a.createElement("img",{src:"data:image/png;base64,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",alt:"Bull Market"})),o.a.createElement(p.a,{className:"mr-auto"},o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},o.a.createElement(f.b,{style:{color:"gray"},to:"/",href:"home"},"Home|"),o.a.createElement(f.b,{style:{color:"gray"},to:"/report",href:"reportPage"},"Report|"),o.a.createElement(f.b,{style:{color:"gray"},to:"/summary",href:"summaryPage"},"Summary"))),o.a.createElement("div",{style:{marginRight:"20px"}},c?"Welcome "+(k||s):null),c?o.a.createElement("button",{style:{color:"black"},className:"btn btn-info btn-lg",onClick:function(){a(!1),D(),localStorage.clear()}},"Log Out"):o.a.createElement("button",{onClick:F,style:{color:"black"},className:"btn btn-info btn-lg",href:"#login"},"Login/Register")),o.a.createElement("div",null,o.a.createElement(g.a,{isOpen:B,style:{color:"black"}},o.a.createElement("div",null,o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h4",null," Log in to your account"),o.a.createElement(y.a,{type:"button",className:"close",onClick:F,"data-dismiss":"modal",style:{color:"black",fontWeight:"bold"}},"\xd7")),o.a.createElement(b.a,null,o.a.createElement("div",null,o.a.createElement("input",{placeholder:"User ID",onChange:function(e){O(e.target.value)},value:k}),o.a.createElement("input",{placeholder:"Password",value:C,onChange:function(e){x(e.target.value)},type:"password"}))),o.a.createElement(E.a,{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(y.a,{onClick:F,to:"/createAccount",href:"createAccount",style:{color:"black",backgroundColor:"lightblue",border:"solid",borderColor:"skyblue"}},"Create Account"),N?null:o.a.createElement("div",{style:{fontSize:"13px",color:"red"}},"The username or password is incorrect"),o.a.createElement(y.a,{style:{color:"black",backgroundColor:"lightblue",border:"solid",borderColor:"skyblue"},onClick:function(){fetch("/api/username",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usernameCredential:k,password:C})}).then((function(e){e.json(),e.ok?(w(!0),fetch("/api/username",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usernameCredential:k,password:C})}).then((function(e){return e.json()})).then((function(e){console.log("line85 in NavBar",e),a(e[1]),l({id:e[0]>0?e[0]:null})(e[0]>0?localStorage.id=e[0]:null)})).then(fetch("/api/foundusername",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(i)})})).then((function(e){return O(e)}),F()).catch((function(e){return console.log(e)}))):(D(),w((function(e){return!1,false})))}))}},"Submit")))))))},k=a.p+"static/media/homepageCoinImage.adcc889c.jpg";var O=function(){return console.log("HomePage"),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{style:{marginTop:"0px"}},o.a.createElement("h1",null,"Fantasy Stock Application"),o.a.createElement("h4",{style:{marginTop:"30px",wordWrap:"break-word",fontSize:"16px"}},"Welcome to where you can practice how to invest in the stock market before you risk your hard earned cash."),o.a.createElement("img",{style:{borderRadius:"50%",margin:"40px"},src:k,alt:"Homepage Coins"}),o.a.createElement("h5",{style:{marginTop:"30px"}},"\u201cRemember that the stock market is a manic depressive.\u201d - Warren Buffet"),o.a.createElement("a",{style:{color:"black",fontSize:"20px"},href:"https://iexcloud.io"},"Data provided by IEX Cloud"))))};var j=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=(a[0],a[1]),r=Object(n.useState)([]),s=Object(m.a)(r,2),l=s[0],i=s[1],u=Object(n.useState)([]),d=Object(m.a)(u,2),p=d[0],h=d[1],f=Object(n.useState)([]),g=Object(m.a)(f,2),y=g[0],b=g[1],E=e.userId,S=Object(n.useState)(""),k=Object(m.a)(S,2),O=k[0],j=k[1];function v(e){console.log(e.target.id);var t={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_symbol:e.target.id,userId:parseInt(E)})};fetch("/api/deleteall",t).then((function(t){fetch("/api/allsymbols/".concat(E)).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log(e)})),fetch("/api/stockreport/".concat(E)).then((function(e){return e.json()})).then((function(e){console.log(e),b(JSON.parse(e))})).catch((function(e){return console.log(e)})),fetch("/api/shares/".concat(E)).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)})),fetch("/api/totalPortfolio/".concat(E)).then((function(e){return e.json()})).then((function(e){return h(JSON.parse(e))})).catch((function(e){return console.log(e)}));for(var a=-1,n=0;n<y.length;n++)if(y[n][0]===e.target.id){a=y[n][2]*y[n][1];break}var r=Number(Number(O)+a).toFixed(2);fetch("/api/boughtstock",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(E),boughtStock:r})}).catch((function(e){return console.log(e)}));for(var s=[],u=0;u<l.length;u++)s.push(o.a.createElement("tr",{key:u},o.a.createElement("td",null," ",y[u][0]," "),o.a.createElement("td",null," ",y[u][1]," "),o.a.createElement("td",null," $",(y[u][1]*y[u][2]).toFixed(2)," "),o.a.createElement("td",null," ",(y[u][2]/p*100).toFixed(2),"%"," "),o.a.createElement("td",null,o.a.createElement("button",{id:y[u][0],type:"button",onClick:v,className:"btn btn-secondary"},"Sell All"))))}))}console.log("User Id in ReportPage",E),Object(n.useEffect)((function(){var e=new AbortController,t=e.signal;return fetch("/api/allsymbols/".concat(E)).then((function(e){return e.json()})).then((function(e){console.log(e),c(e)})).catch((function(e){return console.log(e)})),fetch("/api/shares/".concat(E)).then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})).catch((function(e){return console.log(e)})),fetch("/api/totalPortfolio/".concat(E),{signal:t}).then((function(e){return e.json()})).then((function(e){return h(JSON.parse(e))})).catch((function(e){return console.log(e)})),fetch("/api/stockreport/".concat(E)).then((function(e){return e.json()})).then((function(e){console.log(JSON.parse(e)),b(JSON.parse(e))})).catch((function(e){return console.log(e)})),console.log(E),fetch("/api/userbalance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(E)})}).then((function(e){return e.json()})).then((function(e){return j(e)})).catch((function(e){return console.log(e)})),function(){e.abort()}}),[E]);for(var C=[],x=0;x<y.length;x++)C.push(o.a.createElement("tr",{key:x},o.a.createElement("td",null," ",y[x][0]," "),o.a.createElement("td",null," ",y[x][1]," "),o.a.createElement("td",null," $",(y[x][1]*y[x][2]).toFixed(2)," "),o.a.createElement("td",null," ",(y[x][2]/p*100*y[x][1]).toFixed(2),"%"," "),o.a.createElement("td",null,o.a.createElement("button",{id:y[x][0],type:"button",onClick:v,className:"btn btn-secondary"},"Sell All"))));return o.a.createElement("div",{className:"App"},o.a.createElement("table",{style:{color:"white"},className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Symbol"),o.a.createElement("th",{scope:"col"},"Shares"),o.a.createElement("th",{scope:"col"},"Total Invested"),o.a.createElement("th",{scope:"col"}," % of Your Portfolio"),o.a.createElement("th",null,"Quick Sell"))),o.a.createElement("tbody",null,C)))},v=a(105);var C=function(e){var t,a=e.price,n=e.stockName,c=e.symbol,r=e.time,s=e.dayChange,l=e.percentChange,i=e.stockId,u=e.shares,m=e.initialPrice;return o.a.createElement("div",null,o.a.createElement(v.a,{style:{width:"18rem",height:"12rem",margin:"20px"}},o.a.createElement(v.a.Header,{style:{color:"black",fontWeight:"bold",display:"flex",justifyContent:"space-between",height:"3rem",fontSize:"16px",textDecoration:"underline"}},o.a.createElement("p",null,e.symbol),o.a.createElement("p",{type:"button","data-toggle":"modal","data-target":"#stockModal",onClick:function(){e.setPrice(a),e.setStockName(n),e.setSymbol(c),e.setDayChange(s),e.setPercentageChange(l),e.setDate(r),e.setStockId(i)}},"Trade")),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Text,{style:{fontSize:"12px",color:"gray",textDecoration:"underline",display:"flex",justifyContent:"left"}}," ",e.stockName,o.a.createElement(v.a.Text,{style:{marginLeft:"5px"}},m?"Cost $"+m:null)),o.a.createElement("div",{style:{display:"grid",justifyContent:"left"}},o.a.createElement("div",{style:{color:"gray",display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(v.a.Text,{style:{display:"flex",fontSize:"12px",marginBottom:"0px"}}," ","Price"," "),o.a.createElement(v.a.Text,{style:{fontSize:"12px",color:"gray"}}," ","Day's change")),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"10px"}},o.a.createElement(v.a.Text,{style:{fontSize:"14px",fontWeight:"bold",color:"black",marginRight:"15px",marginBottom:"0px"}}," ","$",e.price," "),o.a.createElement(v.a.Text,{style:e.dayChange>=0?{fontSize:"12px",fontWeight:"bold",color:"green"}:{fontSize:"12px",fontWeight:"bold",color:"red"}}," ",e.dayChange," (",null===(t=e.percentChange)||void 0===t?void 0:t.toFixed(2),"%)"," "))),o.a.createElement(v.a.Text,{style:{fontSize:"12px",fontWeight:"bold",color:"gray",display:"flex"}},e.time,o.a.createElement("span",{style:{marginLeft:"100px"}},u?u+" Shares":null)))))};var x=function(e){var t=e.selected,a=e.quantity,c=e.stockId,r=e.purchasedStocks,s=e.setPurchasedStocks,l=e.userId,d=e.buyingPower,p=e.setBuyingPower,h=e.setAccountValue,f=e.setReviewOrderErrors,g=Object(n.useState)(""),y=Object(m.a)(g,2),b=y[0],E=y[1];function S(){return(S=Object(u.a)(i.a.mark((function n(){var o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=d-e.stockSum,"Buy"!==t){n.next=23;break}if(!(e.stockSum>d)){n.next=6;break}f('"You do not have enough buying power!"'),n.next=21;break;case 6:return f(""),n.t2=fetch("/api/buystock",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({symbol:e.symbol,stockName:e.stockName,price:e.stockPrice,day_change:e.dayChange,percentage_change:e.percentageChange,date:e.date,shares:parseInt(a),userId:parseInt(l),initialPrice:e.stockPrice})}),n.next=10,fetch("/api/purchased/".concat(l)).then((function(e){return e.json()})).then((function(t){return e.setPurchasedStocks(JSON.parse(t))})).catch((function(e){return console.log(e)}));case 10:return n.t3=n.sent,n.t1=n.t2.then.call(n.t2,n.t3),n.next=14,fetch("/api/boughtstock",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(l),boughtStock:o})});case 14:return n.t4=n.sent,n.t0=n.t1.then.call(n.t1,n.t4),n.next=18,fetch("/api/userbalance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(l)})}).then((function(e){return e.json()})).then((function(e){return p(JSON.parse(e))})).catch((function(e){return console.log(e)}));case 18:return n.t5=n.sent,n.next=21,n.t0.then.call(n.t0,n.t5);case 21:n.next=24;break;case 23:"Sell"===t&&(0==b?f("You do not own this stock!"):(f(""),a>b?f("You do not have that many shares to sell!"):(f(""),b-a>=1?(fetch("/api/updatestocks",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({shares:b-a,stock_id:c})}),fetch("/api/boughtstock",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(l),boughtStock:Number(d)+e.stockSum})}),fetch("/api/userbalance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(l)})}).then((function(e){return e.json()})).then((function(e){return p(JSON.parse(e))})).catch((function(e){return console.log(e)}))):(f(""),fetch("/api/deleterow",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_id:c})}).then(fetch("/api/purchased/".concat(l)).then((function(e){return e.json()})).then((function(t){return e.setPurchasedStocks(JSON.parse(t))})).catch((function(e){return console.log(e)}))),fetch("/api/boughtstock",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(l),boughtStock:Number(d)+e.stockSum})}).then(fetch("/api/userbalance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(l)})}).then((function(e){return e.json()})).then((function(e){return p(JSON.parse(e))})))))));case 24:case"end":return n.stop()}}),n)})))).apply(this,arguments)}console.log("ReviewOrder.js","Shares",b,"Quantity",a),Object(n.useEffect)((function(){for(var e=0;e<r.length;e++)c===r[e][0]&&E(r[e][7]);l&&fetch("/api/purchased/".concat(l)).then((function(e){return e.json()})).then((function(e){return s(JSON.parse(e))})).catch((function(e){return console.log(e)})),fetch("/api/accountvalue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(l)})}).then((function(e){return e.json()})).then((function(e){h(0===Number(e)?2e4:e)})).catch((function(e){return console.log(e)}))}),[b,d,c,l,a,s]);var k=d-e.stockSum,O=Number(d)+Number(e.stockSum);return o.a.createElement("div",null,o.a.createElement("div",{id:"reviewModal",className:"modal fade",role:"dialog",style:{color:"black"}},o.a.createElement("div",{className:"modal-dialog"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h4",{className:"modal-title"}," Review Order "),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"},className:"modal-body"},o.a.createElement("div",{style:{fontSize:"20px"}},o.a.createElement("p",null,e.selected," ",e.quantity," shares of ",e.symbol," (",e.stockName,")"),o.a.createElement("p",null," Limit at $",e.stockPrice),o.a.createElement("p",null,"Estimated Total: $",Number(e.stockSum).toFixed(2)),o.a.createElement("p",null," ","Remaining Buy Power: $","Buy"===e.selected?k.toFixed(2):O.toFixed(2)))),o.a.createElement("button",{type:"button",className:"btn btn-info",style:{color:"black",fontWeight:"bolder"},onClick:function(){return S.apply(this,arguments)},"data-dismiss":"modal"},"Place Order"),o.a.createElement("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"))))))};var P=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),l=Object(m.a)(s,2),i=l[0],u=l[1],d=Object(n.useState)([]),p=Object(m.a)(d,2),h=p[0],f=p[1],g=e.userId,y=e.setReviewOrderErrors,b=e.setAccountValue;return console.log("StockModal: Quantity",i,"stocksum",h,"selected",c),o.a.createElement("div",{id:"stockModal",className:"modal fade",role:"dialog",style:{color:"black"}},o.a.createElement("div",{className:"modal-dialog"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h4",{className:"modal-title"}," Buy/Sell Stock"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"},className:"modal-body"},o.a.createElement("div",null,o.a.createElement("p",{style:{marginBottom:"0px"}},"Action"),o.a.createElement("select",{name:"trade",id:"trade",value:c,onChange:function(e){r(e.target.value)}},o.a.createElement("option",{value:"Select"}," --Select-- "),o.a.createElement("option",{value:"Buy"}," Buy "),o.a.createElement("option",{value:"Sell"}," Sell "))),o.a.createElement("div",null,o.a.createElement("p",{style:{marginBottom:"0px"}},"Quanity"),o.a.createElement("input",{type:"number",style:{width:"100px",height:"32px"},onChange:function(e){u(e.target.value)}}))),o.a.createElement("button",{type:"button",className:"btn btn-info",style:{color:"black",fontWeight:"bolder"},"data-toggle":"modal","data-target":"#reviewModal",onClick:function(){if(i<=0||""===c||"Select"===c);else{var t=e.stockPrice*i;f(t)}}},"Review Order"),o.a.createElement("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close")))),o.a.createElement(x,{stockSum:h,stockPrice:e.stockPrice,stockName:e.stockName,symbol:e.symbol,stockId:e.stockId,dayChange:e.dayChange,percentageChange:e.percentageChange,date:e.date,quantity:i,setQuantity:u,selected:c,purchasedStocks:e.purchasedStocks,setPurchasedStocks:e.setPurchasedStocks,buyingPower:e.buyingPower,setBuyingPower:e.setBuyingPower,setAccountValue:b,userId:g,setReviewOrderErrors:y}))};var A=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),l=Object(m.a)(s,2),i=l[0],u=l[1],d=Object(n.useState)([]),p=Object(m.a)(d,2),h=p[0],f=p[1],g=Object(n.useState)([]),y=Object(m.a)(g,2),b=y[0],E=y[1],S=Object(n.useState)([]),k=Object(m.a)(S,2),O=k[0],j=k[1],v=Object(n.useState)([]),x=Object(m.a)(v,2),A=x[0],N=x[1],w=Object(n.useState)(0),I=Object(m.a)(w,2),T=I[0],B=I[1],J=Object(n.useState)(""),F=Object(m.a)(J,2),D=F[0],W=F[1],R=Object(n.useState)(""),Y=Object(m.a)(R,2),L=Y[0],U=Y[1],X=Object(n.useState)(""),H=Object(m.a)(X,2),z=H[0],Q=H[1],Z=Object(n.useState)(""),M=Object(m.a)(Z,2),q=M[0],V=M[1],G=Object(n.useState)(""),K=Object(m.a)(G,2),$=K[0],_=K[1],ee=Object(n.useState)(""),te=Object(m.a)(ee,2),ae=te[0],ne=te[1],oe=Object(n.useState)(""),ce=Object(m.a)(oe,2),re=ce[0],se=ce[1],le=Object(n.useState)(0),ie=Object(m.a)(le,2),ue=ie[0],me=ie[1],de=e.userId,pe=e.reviewOrderErrors,he=e.setReviewOrderErrors;e.setUser,e.authentication,console.log("ID in summary page",de),Object(n.useEffect)((function(){de&&(fetch("/api/purchased/".concat(de)).then((function(e){return e.json()})).then((function(e){u(JSON.parse(e))})).catch((function(e){return console.log(e)})),fetch("/api/userbalance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(de)})}).then((function(e){return e.json()})).then((function(e){console.log(e),r(e)})).catch((function(e){return console.log(e)})),fetch("/api/accountvalue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:parseInt(de)})}).then((function(e){return e.json()})).then((function(e){me(e)})).catch((function(e){return console.log(e)})),fetch("/api/allsymbols/".concat(de)).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)fetch("/api/searchStock/".concat(e[t])).then((function(e){return e.json()})).then((function(e){return fetch("/api/lateststocks",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({symbol:e.symbol,stockPrice:e.latestPrice,dayChange:e.change,percentageChange:e.changePercent,userId:parseInt(de)})})}))})).catch((function(e){return console.log(e)}))),fetch("/api/stocks").then((function(e){return e.json()})).then((function(e){f(e[0]),j(e[1]),N(e[2]),E(e[3])}))}),[c]);for(var fe=[],ge=0;ge<i.length;ge++)fe.push(o.a.createElement(C,{key:i[ge][0],stockId:i[ge][0],symbol:i[ge][1],stockName:i[ge][2],price:i[ge][3],dayChange:i[ge][4],percentChange:i[ge][5],time:i[ge][6],shares:i[ge][7],initialPrice:i[ge][9].toFixed(2),setPrice:B,setStockName:W,setSymbol:_,setDate:V,setDayChange:U,setPercentageChange:Q,setStockId:ne}));return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"grid",justifyContent:"flex-start",marginLeft:"10px",borderStyle:"solid",width:"400px",position:"relative",top:"-70px",left:"-10px"}},o.a.createElement("h3",null,"Buying Power: $",Number(c).toFixed(2)),o.a.createElement("h3",null,"Account Value: $",Number(ue).toFixed(2))),o.a.createElement("p",{style:{color:"red"}},pe),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/searchStock/".concat(re)).then((function(e){return e.json()})).then((function(e){return se(e)})).catch((function(e){return console.log(e)}))}},o.a.createElement("input",{onChange:function(e){se(e.target.value)},placeholder:"Search"})),o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},re.companyName?o.a.createElement(C,{symbol:re.symbol,stockName:re.companyName,price:re.latestPrice.toFixed(2),dayChange:re.change,percentChange:re.changePercent,time:re.latestTime,setPrice:B,setStockName:W,setSymbol:_,setDate:V,setDayChange:U,setPercentageChange:Q,setStockId:ne}):null),o.a.createElement("h1",{style:{fontSize:"30px",marginTop:"15px"}}," Positions Cards "),o.a.createElement("header",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},fe),o.a.createElement("h1",{style:{fontSize:"30px",marginTop:"15px"}}," Popular Stocks "),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},o.a.createElement(C,{symbol:h.symbol,stockName:h.companyName,price:h.latestPrice?h.latestPrice.toFixed(2):h.latestPrice,dayChange:h.change,percentChange:h.changePercent,time:h.latestTime,setPrice:B,setStockName:W,setSymbol:_,setDate:V,setDayChange:U,setPercentageChange:Q,setStockId:ne}),o.a.createElement(C,{symbol:O.symbol,stockName:O.companyName,price:O.latestPrice?O.latestPrice.toFixed(2):O.latestPrice,dayChange:O.change,percentChange:O.changePercent,time:O.latestTime,setPrice:B,setStockName:W,setSymbol:_,setDate:V,setDayChange:U,setPercentageChange:Q,setStockId:ne}),o.a.createElement(C,{symbol:b.symbol,stockName:b.companyName,price:b.latestPrice?b.latestPrice.toFixed(2):b.latestPrice,dayChange:b.change,percentChange:b.changePercent,time:b.latestTime,setPrice:B,setStockName:W,setSymbol:_,setDate:V,setDayChange:U,setPercentageChange:Q,setStockId:ne}),o.a.createElement(C,{symbol:A.symbol,stockName:A.companyName,price:A.latestPrice?A.latestPrice.toFixed(2):A.latestPrice,dayChange:A.change,percentChange:A.changePercent,time:A.latestTime,setPrice:B,setStockName:W,setSymbol:_,setDate:V,setDayChange:U,setPercentageChange:Q,setStockId:ne}),o.a.createElement(P,{stockPrice:T,stockName:D,symbol:$,dayChange:L,date:q,percentageChange:z,purchasedStocks:i,setPurchasedStocks:u,stockId:ae,buyingPower:c,setBuyingPower:r,setAccountValue:me,userId:de,setReviewOrderErrors:he})))},N=a(27),w=a.n(N);var I=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),l=Object(m.a)(s,2),d=l[0],p=l[1],h=Object(n.useState)(""),f=Object(m.a)(h,2),g=f[0],y=f[1],b=Object(n.useState)(""),E=Object(m.a)(b,2),S=E[0],k=E[1],O=Object(n.useState)(""),j=Object(m.a)(O,2),v=j[0],C=j[1],x=Object(n.useState)(""),P=Object(m.a)(x,2),A=P[0],N=P[1],I=Object(n.useState)(""),T=Object(m.a)(I,2),B=T[0],J=T[1],F=e.setAuthentication;function D(){return(D=Object(u.a)(i.a.mark((function e(t){var a,n,r,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=function(){var e=d,t=new RegExp(/[0-9]/).test(e);c&&d?(J(""),d.length,t?(N(""),k(""),N(v===d?"":o.a.createElement("p",{style:{fontSize:"15px",color:"red",marginRight:"30px"}},"Password does not match"))):k(o.a.createElement("ul",{style:{fontSize:"15px",color:"red",marginRight:"30px"}},o.a.createElement("li",null,"Password must be 8 or more characters"),o.a.createElement("li",null,"Password must have atleast one uppercase letter"),o.a.createElement("li",null,"Password must have atleast one Number")))):J(o.a.createElement("p",{style:{fontSize:"15px",color:"red",marginRight:"30px"}},"Please Fill In All Fields"))},c||d){e.next=4;break}return e.abrupt("return",a());case 4:return e.prev=4,n={username:c,password:d},e.next=8,w.a.post("/api/createaccount",n);case 8:r=e.sent,s=r.data,l=JSON.parse(s),console.log("Credential data",l),localStorage.setItem("id",l.id),F(!0),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),y(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}return o.a.createElement("div",{style:{border:"15px solid grey",width:"400px",padding:"50px",margin:"0 auto",display:"flex"}},o.a.createElement("div",{className:"form-group"},o.a.createElement("h1",{className:"display-6",style:{marginBottom:"70px"}},"Create An Account"),o.a.createElement("form",{onSubmit:function(e){return D.apply(this,arguments)}},B,o.a.createElement("input",{required:!0,className:"form-control",onChange:function(e){return r(e.target.value)},style:{marginBottom:"20px"},placeholder:"Username"}),g?o.a.createElement("p",{style:{fontSize:"15px",color:"red"}},"Username is already taken"):null,o.a.createElement("input",{required:!0,className:"form-control",onChange:function(e){return p(e.target.value)},type:"password",style:{marginBottom:"20px"},placeholder:"Password"}),o.a.createElement("input",{required:!0,className:"form-control",onChange:function(e){return C(e.target.value)},type:"password",style:{marginBottom:"20px"},placeholder:"Re-type Password"}),A,S,o.a.createElement("button",{type:"submit",className:"btn btn-info"},"Create Account"))))},T=["children"];var B=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),l=Object(m.a)(r,2),d=l[0],p=l[1],g=Object(n.useState)({id:"",username:"",password:"",buyingPower:0}),y=Object(m.a)(g,2),b=y[0],E=y[1],k=b.id,v=b.buyingPower;Object(n.useEffect)((function(){C()}),[k,a]);var C=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("id"),a={userId:t},!(t>0)){e.next=12;break}return console.log(a),e.next=6,w.a.post("/api/credentials",a);case 6:n=e.sent,o=n.data,r=JSON.parse(o),console.log("Credential Dats",r),E({id:r[0],username:r[1],password:r[2],buyingPower:r[3]}),c(!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=a;function P(e){var t=e.children,a=Object(s.a)(e,T);return o.a.createElement(h.b,Object.assign({},a,{render:function(){return!0===x?t:o.a.createElement(h.a,{to:"/"})}}))}return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(f.a,null,o.a.createElement(S,{user:b,userId:k,setUserId:E,setAuthentication:c,authentication:a}),o.a.createElement(h.d,null,o.a.createElement(h.b,{path:"/",component:O,exact:!0}),o.a.createElement(P,{path:"/report"},o.a.createElement(j,{userId:k})),o.a.createElement(P,{path:"/summary"},o.a.createElement(A,{buyingPower:v,authentication:a,setUser:E,userId:k,reviewOrderErrors:d,setReviewOrderErrors:p})),o.a.createElement(h.b,{path:"/createAccount",render:function(e){return o.a.createElement(I,{setAuthentication:c,authentication:a})}})))))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.71780d3a.chunk.js.map