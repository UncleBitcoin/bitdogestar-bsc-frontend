(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{847:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return l})),n.d(t,"i",(function(){return b})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return y}));var a=n(2),r=n.n(a),s=n(7),c=n(5),i=n.n(c),u=n(851),o=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.approve(n.options.address,u.ethers.constants.MaxUint256).send({from:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit(n,new i.a(a).times(new i.a(10).pow(18)).toString()).send({from:s}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit(new i.a(n).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit().send({from:a,value:new i.a(n).times(new i.a(10).pow(18)).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.withdraw(n,new i.a(a).times(new i.a(10).pow(18)).toString()).send({from:s}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"0x85f27A63cFb4Dc5a36d7Eb5EF8620D343817e156"===t.options.address?t.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})):t.methods.withdraw(new i.a(n).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit(n,"0").send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit("0").send({from:n}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit().send({from:n,value:new i.a(0)}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},849:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return y}));var a=n(35),r=n(2),s=n.n(r),c=n(7),i=n(0),u=n(61),o=n(38),p=n(80),d=n(847),l=n(845),b=function(e){var t=Object(o.b)(),n=Object(u.m)().account,a=Object(l.g)();return{onReward:Object(i.useCallback)(Object(c.a)(s.a.mark((function r(){var c;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(d.b)(a,e,n);case 2:return c=r.sent,t(Object(p.c)(n)),r.abrupt("return",c);case 5:case"end":return r.stop()}}),r)}))),[n,t,e,a])}},f=function(e){var t=Object(u.m)().account,n=Object(l.g)();return{onReward:Object(i.useCallback)(Object(c.a)(s.a.mark((function r(){var c;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=e.reduce((function(e,r){return[].concat(Object(a.a)(e),[Object(d.b)(n,r,t)])}),[]),r.abrupt("return",Promise.all(c));case 2:case"end":return r.stop()}}),r)}))),[t,e,n])}},m=function(e){var t=Object(o.b)(),n=Object(u.m)().account,a=Object(l.h)();return{onReward:Object(i.useCallback)(Object(c.a)(s.a.mark((function r(){var c;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(d.b)(a,e,n);case 2:return c=r.sent,t(Object(p.b)(n)),r.abrupt("return",c);case 5:case"end":return r.stop()}}),r)}))),[n,t,e,a])}},j=function(e){var t=Object(u.m)().account,n=Object(l.h)();return{onReward:Object(i.useCallback)(Object(c.a)(s.a.mark((function r(){var c;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=e.reduce((function(e,r){return[].concat(Object(a.a)(e),[Object(d.b)(n,r,t)])}),[]),r.abrupt("return",Promise.all(c));case 2:case"end":return r.stop()}}),r)}))),[t,e,n])}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.b)(),a=Object(u.m)(),r=a.account,b=Object(l.k)(e),f=Object(i.useCallback)(Object(c.a)(s.a.mark((function a(){var c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=t?d.e:d.d,a.next=3,c(b,r);case 3:n(Object(p.l)(e,r)),n(Object(p.k)(e,r));case 5:case"end":return a.stop()}}),a)}))),[r,n,t,b,e]);return{onReward:f}}},850:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var a=n(2),r=n.n(a),s=n(7),c=n(160),i=n.n(c),u=n(51),o=function(e,t){return new(new i.a(e).eth.Contract)(u,t)},p=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a){var s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o(t,n),e.prev=1,e.next=4,s.methods.balanceOf(a).call();case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a){return e.apply(this,arguments)}}()},852:function(e,t,n){"use strict";n.d(t,"d",(function(){return y})),n.d(t,"b",(function(){return O})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return x}));var a=n(2),r=n.n(a),s=n(7),c=n(24),i=n(0),u=n(5),o=n.n(u),p=n(61),d=n(224),l=n(861),b=n(70),f=n(850),m=n(26),j=n(128),y=function(){var e=Object(j.a)().slowRefresh,t=Object(i.useState)(),n=Object(c.a)(t,2),a=n[0],u=n[1];return Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(d,Object(m.d)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,u(new o.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),a},O=function(e){var t=Object(i.useState)(new o.a(0)),n=Object(c.a)(t,2),a=n[0],u=n[1],p=Object(j.a)().slowRefresh;return Object(i.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(d,Object(m.d)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,u(new o.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,p]),a},h=function(){var e=Object(j.a)().slowRefresh,t=Object(i.useState)(),n=Object(c.a)(t,2),a=n[0],u=n[1];return Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(l,Object(m.c)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,u(new o.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),a},x=function(e){var t=Object(i.useState)(new o.a(0)),n=Object(c.a)(t,2),a=n[0],u=n[1],p=Object(j.a)().slowRefresh;return Object(i.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(l,Object(m.c)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,u(new o.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,p]),a};t.a=function(e){var t=Object(i.useState)(new o.a(0)),n=Object(c.a)(t,2),a=n[0],u=n[1],d=Object(p.m)(),l=d.account,b=d.ethereum,m=Object(j.a)().fastRefresh;return Object(i.useEffect)((function(){l&&b&&function(){var t=Object(s.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.b)(b,e,l);case 2:n=t.sent,u(new o.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,b,e,m]),a}},861:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]')},872:function(e,t,n){"use strict";n.d(t,"b",(function(){return O}));var a=n(2),r=n.n(a),s=n(12),c=n(7),i=n(24),u=n(0),o=n(5),p=n.n(o),d=n(61),l=n(33),b=n(26),f=n(112),m=n(120),j=n(871),y=n(128),O=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(d.m)().account,f=Object(y.a)().fastRefresh;return Object(u.useEffect)((function(){o&&function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.map((function(e){return{address:Object(b.h)(),name:"pendingBdogs",params:[e.pid,o]}})),e.next=3,Object(l.a)(m,t);case 3:n=e.sent,c=j.a.map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{balance:new p.a(n[t])})})),a(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,f]),n};t.a=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(d.m)().account,m=Object(y.a)().fastRefresh;return Object(u.useEffect)((function(){o&&function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.b.map((function(e){return{address:Object(b.i)(),name:"pendingBdogs",params:[e.pid,o]}})),e.next=3,Object(l.a)(f,t);case 3:n=e.sent,c=j.b.map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{balance:new p.a(n[t])})})),a(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,m]),n}},961:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return te}));var a,r,s,c,i,u,o,p,d,l,b,f,m=n(63),j=n(0),y=n(3),O=n(42),h=n(844),x=n(219),v=n(2),w=n.n(v),g=n(7),T=n(24),k=n(61),S=n(848),M=n(849),H=n(872),z=n(855),B=n(858),D=n(13),C=function(e){var t=e.value,n=e.decimals,a=e.fontSize,r=void 0===a?"40px":a,s=e.prefix,c=Object(B.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),i=c.countUp,u=c.update,o=Object(j.useRef)(u);return Object(j.useEffect)((function(){o.current(t)}),[t,o]),Object(D.jsxs)(O.S,{bold:!0,fontSize:r,children:[s,i]})},E=function(e){var t=e.earningsSum,n=Object(h.a)();return Object(k.m)().account?Object(D.jsx)(C,{value:t}):Object(D.jsx)(O.S,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},R=function(e){var t=e.cakeBalance,n=Object(h.a)();return Object(k.m)().account?Object(D.jsx)(C,{value:t,fontSize:"24px"}):Object(D.jsx)(O.S,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},N=n(79),A=n(26),F=n(852),G=n(846),P=Object(y.e)(O.n)(a||(a=Object(m.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),V=y.e.div(r||(r=Object(m.a)(["\n  margin-bottom: 16px;\n"]))),L=y.e.img(s||(s=Object(m.a)(["\n  margin-bottom: 16px;\n"]))),$=y.e.div(c||(c=Object(m.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),_=y.e.div(i||(i=Object(m.a)(["\n  margin-top: 24px;\n"]))),J=function(){var e=Object(j.useState)(!1),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(k.m)().account,s=Object(h.a)(),c=Object(H.a)(),i=Object(G.a)(Object(F.a)(Object(A.d)())),u=Object(N.q)().toNumber(),o=c.reduce((function(e,t){return e+new S.a(t.balance).div(new S.a(10).pow(18)).toNumber()}),0),p=c.filter((function(e){return e.balance.toNumber()>0})),d=Object(M.a)(p.map((function(e){return e.pid}))).onReward,l=Object(j.useCallback)(Object(g.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,d();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,a(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[d]);return Object(D.jsx)(P,{children:Object(D.jsxs)(O.o,{children:[Object(D.jsx)(O.z,{size:"xl",mb:"24px",children:s(542,"Farms & Staking")}),Object(D.jsx)(L,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(D.jsxs)(V,{children:[Object(D.jsx)($,{children:"BDOGS to Harvest"}),Object(D.jsx)(E,{earningsSum:o}),Object(D.jsxs)($,{children:["~$",(u*o).toFixed(2)]})]}),Object(D.jsxs)(V,{children:[Object(D.jsx)($,{children:"BDOGS in Wallet"}),Object(D.jsx)(R,{cakeBalance:i}),Object(D.jsxs)($,{children:["~$",(u*i).toFixed(2)]})]}),Object(D.jsx)(_,{children:r?Object(D.jsx)(O.j,{id:"harvest-all",disabled:p.length<=0||n,onClick:l,width:"100%",children:n?s(548,"Collecting BDOGS"):s(999,"Harvest all (".concat(p.length,")"))}):Object(D.jsx)(z.a,{fullWidth:!0})})]})})},Q=Object(y.e)(O.n)(u||(u=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),U=y.e.div(o||(o=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),W=function(){var e=Object(h.a)(),t=Object(F.d)(),n=Object(F.b)(Object(A.d)()),a=Object(N.f)(),r=Object(N.q)(),s=t?t.minus(n):new S.a(0),c=Object(G.a)(s),i=r.times(s),u=0;return a&&a[0]&&a[0].bdogsPerBlock&&(u=new S.a(a[0].bdogsPerBlock).div(new S.a(10).pow(18)).toNumber()),Object(D.jsx)(Q,{children:Object(D.jsxs)(O.o,{children:[Object(D.jsx)(O.z,{size:"xl",mb:"24px",children:"BDOGS Stats"}),Object(D.jsxs)(U,{children:[Object(D.jsx)(O.S,{fontSize:"14px",children:"Total BDOGS Supply"}),c&&Object(D.jsx)(C,{fontSize:"14px",value:c,decimals:0})]}),Object(D.jsxs)(U,{children:[Object(D.jsx)(O.S,{fontSize:"14px",children:e(999,"Market Cap")}),Object(D.jsx)(C,{fontSize:"14px",value:Object(G.a)(i),decimals:0,prefix:"$"})]}),Object(D.jsxs)(U,{children:[Object(D.jsx)(O.S,{fontSize:"14px",children:"Total BDOGS Burned"}),Object(D.jsx)(C,{fontSize:"14px",value:Object(G.a)(n),decimals:0})]}),Object(D.jsxs)(U,{children:[Object(D.jsx)(O.S,{fontSize:"14px",children:"New BDOGS/block"}),Object(D.jsx)(O.S,{bold:!0,fontSize:"14px",children:u})]})]})})},q=Object(y.e)(O.n)(p||(p=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),I=function(){var e=Object(h.a)(),t=Object(N.u)();return Object(D.jsx)(q,{children:Object(D.jsxs)(O.o,{children:[Object(D.jsx)(O.z,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(C,{value:t.toNumber(),prefix:"$",decimals:2}),Object(D.jsx)(O.S,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},Y=n(952),K=Object(y.e)(O.n)(d||(d=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),X=(y.e.div(l||(l=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(h.a)();return Object(D.jsx)(K,{children:Object(D.jsxs)(O.o,{children:[Object(D.jsx)(O.z,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(D.jsx)(Y.a,{dataSource:{sourceType:"profile",screenName:"dragonballdefi"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),Z=y.e.div(b||(b=Object(m.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ee=Object(y.e)(O.d)(f||(f=Object(m.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),te=function(){Object(h.a)();return Object(D.jsxs)(x.a,{children:[Object(D.jsxs)(Z,{children:[Object(D.jsx)(O.z,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:"BitDogeStar Finance"}),Object(D.jsx)(O.S,{children:"The smart defi farm on Binance Smart Chain"})]}),Object(D.jsx)("div",{children:Object(D.jsxs)(ee,{children:[Object(D.jsx)(J,{}),Object(D.jsx)(X,{}),Object(D.jsx)(W,{}),Object(D.jsx)(I,{})]})})]})}}}]);
//# sourceMappingURL=13.7dad2450.chunk.js.map