(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{mXol:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tech",function(){return n("r3V1")}])},r3V1:function(e,t,n){"use strict";n.r(t);var s=n("o0o1"),a=n.n(s),c=n("q1tI"),i=n.n(c),r=n("0vQK"),u=n("lbm3"),l=n("KD6P"),o=n("3Z9Z"),d=n("JI6e"),h=n("+YzT"),g=n("mHu+"),b=n("/MKj"),p=i.a.createElement,T=function(e){var t=e.data,n=e.error,s=Object(b.c)((function(e){return e})).technologies,a=Object(b.b)();return Object(c.useEffect)((function(){0===s.length&&(a({type:"SET_BUSINESS",payload:t.business}),a({type:"SET_TECHNOLOGIES",payload:t.tech}))}),[]),p(u.a,null,n?p("p",null,"Error while load data"):p(l.a.Container,{id:"left-tabs-example",defaultActiveKey:"idn"},p(o.a,null,p(d.a,{xs:12,md:4,xl:3},p("h3",null,"Country"),p(h.a,{variant:"pills",className:"flex-column"},p(h.a.Item,null,p(h.a.Link,{eventKey:"idn"},"Indonesia")),p(h.a.Item,null,p(h.a.Link,{eventKey:"sg"},"Singapore")),p(h.a.Item,null,p(h.a.Link,{eventKey:"us"},"United States")))),p(d.a,{xs:12,md:8,xl:9},p(l.a.Content,null,p(l.a.Pane,{eventKey:"idn"},p(g.a,{id:"idnTech",title:"Indonesia Tech",news:s.length>0?s[0].idnTech:t.tech[0].idnTech})),p(l.a.Pane,{eventKey:"sg"},p(g.a,{title:"Singapore Tech",news:s.length>0?s[1].sgTech:t.tech[1].sgTech,id:"sgTech"})),p(l.a.Pane,{eventKey:"us"},p(g.a,{id:"usTech",news:s.length>0?s[2].usTech:t.tech[2].usTech,title:"United States Tech"})))))))};T.getInitialProps=function(e){var t,n,s,c,i,u,l,o,d,h;return a.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:if(t=e.store,n=t.getState(),!(n.technologies.length>0)){g.next=4;break}return g.abrupt("return",{});case 4:return g.prev=4,g.next=7,a.a.awrap(r.a.get(Object(r.b)("id","business")));case 7:return g.t0=g.sent,g.next=10,a.a.awrap(r.a.get(Object(r.b)("sg","business")));case 10:return g.t1=g.sent,g.next=13,a.a.awrap(r.a.get(Object(r.b)("us","business")));case 13:return g.t2=g.sent,g.next=16,a.a.awrap(r.a.get(Object(r.b)("id","technology")));case 16:return g.t3=g.sent,g.next=19,a.a.awrap(r.a.get(Object(r.b)("sg","technology")));case 19:return g.t4=g.sent,g.next=22,a.a.awrap(r.a.get(Object(r.b)("us","technology")));case 22:return g.t5=g.sent,s={idnBusiness:g.t0,sgBusiness:g.t1,usBusiness:g.t2,idnTech:g.t3,sgTech:g.t4,usTech:g.t5},c=s.sgBusiness,i=s.usBusiness,u=s.idnTech,l=s.sgTech,o=s.usTech,d=[{idnBusiness:s.idnBusiness.data.articles.slice(0,8)},{sgBusiness:c.data.articles.slice(0,8)},{usBusiness:i.data.articles.slice(0,8)}],h=[{idnTech:u.data.articles.slice(0,8)},{sgTech:l.data.articles.slice(0,8)},{usTech:o.data.articles.slice(0,8)}],g.abrupt("return",{data:{business:d,tech:h}});case 30:return g.prev=30,g.t6=g.catch(4),g.abrupt("return",{error:g.t6.message});case 33:case"end":return g.stop()}}),null,null,[[4,30]],Promise)},t.default=T}},[["mXol",1,2,0,3,4]]]);