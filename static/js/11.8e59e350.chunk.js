(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[11],{847:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"h",(function(){return b})),t.d(n,"f",(function(){return d})),t.d(n,"g",(function(){return l})),t.d(n,"i",(function(){return j})),t.d(n,"c",(function(){return p})),t.d(n,"b",(function(){return f})),t.d(n,"d",(function(){return x})),t.d(n,"e",(function(){return O}));var r=t(2),c=t.n(r),a=t(7),i=t(5),o=t.n(i),s=t(851),u=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.approve(t.options.address,s.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(t,new o.a(r).times(new o.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(new o.a(t).times(new o.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:r,value:new o.a(t).times(new o.a(10).pow(18)).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.withdraw(t,new o.a(r).times(new o.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"0x85f27A63cFb4Dc5a36d7Eb5EF8620D343817e156"===n.options.address?n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})):n.methods.withdraw(new o.a(t).times(new o.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(t,"0").send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit("0").send({from:t}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:t,value:new o.a(0)}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},849:function(e,n,t){"use strict";t.d(n,"c",(function(){return j})),t.d(n,"a",(function(){return p})),t.d(n,"d",(function(){return f})),t.d(n,"b",(function(){return x})),t.d(n,"e",(function(){return O}));var r=t(35),c=t(2),a=t.n(c),i=t(7),o=t(0),s=t(61),u=t(38),b=t(80),d=t(847),l=t(845),j=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(l.g)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.b)(r,e,t);case 2:return i=c.sent,n(Object(b.c)(t)),c.abrupt("return",i);case 5:case"end":return c.stop()}}),c)}))),[t,n,e,r])}},p=function(e){var n=Object(s.m)().account,t=Object(l.g)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=e.reduce((function(e,c){return[].concat(Object(r.a)(e),[Object(d.b)(t,c,n)])}),[]),c.abrupt("return",Promise.all(i));case 2:case"end":return c.stop()}}),c)}))),[n,e,t])}},f=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(l.h)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.b)(r,e,t);case 2:return i=c.sent,n(Object(b.b)(t)),c.abrupt("return",i);case 5:case"end":return c.stop()}}),c)}))),[t,n,e,r])}},x=function(e){var n=Object(s.m)().account,t=Object(l.h)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=e.reduce((function(e,c){return[].concat(Object(r.a)(e),[Object(d.b)(t,c,n)])}),[]),c.abrupt("return",Promise.all(i));case 2:case"end":return c.stop()}}),c)}))),[n,e,t])}},O=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(u.b)(),r=Object(s.m)(),c=r.account,j=Object(l.k)(e),p=Object(o.useCallback)(Object(i.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=n?d.e:d.d,r.next=3,i(j,c);case 3:t(Object(b.l)(e,c)),t(Object(b.k)(e,c));case 5:case"end":return r.stop()}}),r)}))),[c,t,n,j,e]);return{onReward:p}}},853:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r,c,a,i=t(63),o=t(0),s=t.n(o),u=t(3),b=t(13),d=u.e.div(r||(r=Object(i.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),l=function(e){var n,t=e.size,r=void 0===t?"md":t,c=Object(o.useContext)(u.a).spacing;switch(r){case"lg":n=c[6];break;case"sm":n=c[2];break;case"md":default:n=c[4]}return Object(b.jsx)(d,{size:n})},j=u.e.div(c||(c=Object(i.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),p=u.e.div(a||(a=Object(i.a)(["\n  flex: 1;\n  text-align: center;\n"]))),f=function(e){var n=e.children,t=s.a.Children.toArray(n).length;return Object(b.jsx)(j,{children:s.a.Children.map(n,(function(e,n){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{children:e}),n<t-1&&Object(b.jsx)(l,{})]})}))})}},854:function(e,n,t){"use strict";t.d(n,"a",(function(){return y}));var r,c,a,i,o,s,u,b=t(63),d=(t(0),t(3)),l=t(848),j=t(42),p=t(844),f=t(13),x=d.e.div(r||(r=Object(b.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),O=d.e.input(c||(c=Object(b.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),h=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,c=e.startAdornment,a=e.value;return Object(f.jsxs)(x,{children:[!!c&&c,Object(f.jsx)(O,{placeholder:r,value:a,onChange:t}),!!n&&n]})},m=d.e.div(a||(a=Object(b.a)([""]))),v=d.e.div(i||(i=Object(b.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),g=d.e.div(o||(o=Object(b.a)(["\n  align-items: center;\n  display: flex;\n"]))),k=d.e.div(s||(s=Object(b.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),w=d.e.span(u||(u=Object(b.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),y=function(e){var n=e.max,t=e.symbol,r=e.onChange,c=e.onSelectMax,a=e.value,i=e.depositFeeBP,o=void 0===i?0:i,s=e.unstakingFeeBP,u=void 0===s?0:s,b=e.burnFee,d=void 0===b?0:b,x=Object(p.a)();return Object(f.jsxs)(m,{children:[Object(f.jsxs)(k,{children:[n.toLocaleString()," ",t," ",x(526,"Available")]}),Object(f.jsx)(h,{endAdornment:Object(f.jsxs)(g,{children:[Object(f.jsx)(w,{children:t}),Object(f.jsx)(v,{}),Object(f.jsx)("div",{children:Object(f.jsx)(j.j,{scale:"sm",onClick:c,children:x(452,"Max")})})]}),onChange:r,placeholder:"0",value:a}),o>0?Object(f.jsxs)(k,{children:[x(10001,"Deposit Fee"),": ",new l.a(a||0).times(o/1e4).toString()," ",t]}):null,d>0?Object(f.jsxs)(k,{children:[x(10001,"burn Fee"),": ",new l.a(a||0).times(o/1e4).toString()," ",t]}):null,u>0?Object(f.jsxs)(k,{children:[x(10011,"Unstaking Fee"),":"," ",new l.a(a||0).times(u/1e4).toString()," ",t]}):null]})}},856:function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return j}));var r=t(2),c=t.n(r),a=t(7),i=t(0),o=t(61),s=t(38),u=t(80),b=t(847),d=t(845),l=function(e){var n=Object(s.b)(),t=Object(o.m)().account,r=Object(d.h)();return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.h)(r,e,i,t);case 2:o=c.sent,n(Object(u.b)(t)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[t,n,r,e])}},j=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(o.m)(),l=r.account,j=Object(d.k)(e),p=Object(i.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a){var i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=n?b.g:b.f,r.next=3,i(j,a,l);case 3:t(Object(u.m)(String(e),l)),t(Object(u.k)(String(e),l));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[l,t,n,j,e]);return{onStake:p}};n.a=function(e){var n=Object(s.b)(),t=Object(o.m)().account,r=Object(d.g)();return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.h)(r,e,i,t);case 2:o=c.sent,n(Object(u.c)(t)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[t,n,r,e])}}},865:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(848);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(10512e3);"".concat("https://exchange.pancakeswap.finance","/#/add")},866:function(e,n,t){"use strict";var r,c=t(63),a=t(3).e.div(r||(r=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));n.a=a},868:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return j})),t.d(n,"c",(function(){return p}));var r=t(2),c=t.n(r),a=t(7),i=t(0),o=t(61),s=(t(851),t(38)),u=t(80),b=t(847),d=t(845),l=function(e){var n=Object(s.b)(),t=Object(o.m)().account,r=Object(d.g)();return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function a(){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,r,t);case 3:return i=c.sent,n(Object(u.c)(t)),c.abrupt("return",i);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,n,e,r])}},j=function(e){var n=Object(s.b)(),t=Object(o.m)().account,r=Object(d.h)();return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function a(){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,r,t);case 3:return i=c.sent,n(Object(u.b)(t)),c.abrupt("return",i);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,n,e,r])}},p=function(e,n){var t=Object(s.b)(),r=Object(o.m)().account,l=Object(d.k)(n);return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function a(){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,l,r);case 3:return i=c.sent,t(Object(u.j)(String(n),r)),c.abrupt("return",i);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,t,e,l,n])}}},869:function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return j}));var r=t(2),c=t.n(r),a=t(7),i=t(0),o=t(61),s=t(38),u=t(80),b=t(847),d=t(845),l=function(e){var n=Object(s.b)(),t=Object(o.m)().account,r=Object(d.h)();return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.i)(r,e,i,t);case 2:o=c.sent,n(Object(u.b)(t)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[t,n,r,e])}},j=function(e){var n=Object(s.b)(),t=Object(o.m)().account,r=Object(d.k)(e);return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.c)(r,i,t);case 2:n(Object(u.m)(String(e),t)),n(Object(u.k)(String(e),t)),n(Object(u.l)(String(e),t));case 5:case"end":return c.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[t,n,r,e])}};n.a=function(e){var n=Object(s.b)(),t=Object(o.m)().account,r=Object(d.g)();return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.i)(r,e,i,t);case 2:o=c.sent,n(Object(u.c)(t)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[t,n,r,e])}}},870:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return a}));t(0);var r=t(42),c=t(13),a=function(){return Object(c.jsx)(r.R,{variant:"success",outline:!0,startIcon:Object(c.jsx)(r.U,{}),children:"No Fees"})},i=function(){return Object(c.jsx)(r.R,{variant:"secondary",outline:!0,startIcon:Object(c.jsx)(r.U,{}),children:"Core"})},o=function(){return Object(c.jsx)(r.R,{variant:"textSubtle",outline:!0,startIcon:Object(c.jsx)(r.x,{}),children:"Community"})},s=function(){return Object(c.jsx)(r.R,{variant:"binance",outline:!0,startIcon:Object(c.jsx)(r.e,{}),children:"Binance"})}},958:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return dn}));var r,c,a,i,o,s,u,b,d,l=t(63),j=t(24),p=t(12),f=t(0),x=t.n(f),O=t(36),h=t(5),m=t.n(h),v=t(3),g=t(61),k=t(42),w=t(865),y=t(897),C=t.n(y),S=t(936),z=t.n(S),B=t(844),D=t(379),F=function(){return Object(f.useContext)(D.a)},A=t(846),N=t(79),H=t(15),E=t(866),I=t(219),P=t(870),R=v.e.div(r||(r=Object(l.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"])),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"text"]})),T=v.e.div(c||(c=Object(l.a)(["\n  background: ",";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",";\n  box-shadow: ",";\n  flex-direction: column;\n  position: relative;\n"])),(function(e){return e.theme.card.background}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"secondary"]}),(function(e){return e.isActive?"0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);":"0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"})),U=t(13),L=v.e.div(a||(a=Object(l.a)(["\n  color: ",";\n  font-size: 40px;\n  font-weight: 600;\n  padding: 10px 0;\n"])),(function(e){return e.theme.colors.text})),M=v.e.div(i||(i=Object(l.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-bottom: 16px;\n"])),(function(e){return e.theme.colors.textSubtle})),Y=v.e.div(o||(o=Object(l.a)(["\n  display: flex;\n  font-size: 14px;\n  padding: 4px 0;\n"]))),_=v.e.div(s||(s=Object(l.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.text})),q=v.e.div(u||(u=Object(l.a)(["\n  border-top: 1px solid ",";\n  padding: 24px;\n"])),(function(e){return e.theme.isDark?"#524B63":"#E9EAEB"})),W=function(){var e=Object(B.a)();return Object(U.jsxs)(T,{children:[Object(U.jsxs)("div",{style:{padding:"24px"},children:[Object(U.jsx)(R,{children:e(414,"Your Dball Project")}),Object(U.jsx)(k.B,{src:"/images/egg/2.png",width:64,height:64,alt:"Your project"}),Object(U.jsx)(L,{children:"0.0"}),Object(U.jsx)(M,{children:e(416,"Create a pool for your token")}),Object(U.jsx)(k.j,{variant:"secondary",as:"button",width:"100%",mb:"16px",onClick:function(){return alert("We'll announce soon on Telegram how to apply, stay tunned!")},children:e(418,"Apply Now")}),Object(U.jsxs)(Y,{children:[Object(U.jsxs)("div",{style:{flex:1},children:[e(736,"APR"),":"]}),Object(U.jsx)(_,{children:"0.0"})]}),Object(U.jsxs)(Y,{children:[Object(U.jsxs)("div",{style:{flex:1},children:[Object(U.jsxs)("span",{role:"img","aria-label":"dball",children:["\ud83d\udc32"," "]}),e(384,"Your Stake"),":"]}),Object(U.jsx)(_,{children:"0 DBALL"})]})]}),Object(U.jsx)(q,{children:Object(U.jsx)(P.b,{})})]})},V=t(2),J=t.n(V),Q=t(7),G=t(855),K=v.e.div(b||(b=Object(l.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"primary"]})),X=function(e){var n=e.text,t=e.isFinished,r=void 0!==t&&t;return Object(U.jsx)(K,{isFinished:r,children:n})},Z=t(845),$=t(868),ee=t(856),ne=t(869),te=t(849),re=t(858),ce=t.n(re),ae=Object(v.e)(k.S)(d||(d=Object(l.a)(["\n  color: ",";\n"])),(function(e){var n=e.isDisabled,t=e.color,r=e.theme;return n?r.colors.textDisabled:t})),ie=function(e){var n=e.value,t=e.fontSize,r=e.color,c=e.decimals,a=e.isDisabled,i=e.unit,o=Object(f.useRef)(0);return Object(f.useEffect)((function(){o.current=n}),[n]),Object(U.jsxs)(ae,{bold:!0,color:r,fontSize:t,isDisabled:a,children:[Object(U.jsx)(ce.a,{start:o.current,end:n,decimals:c,duration:1,separator:","}),n&&i&&Object(U.jsx)("span",{children:i})]})};ie.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var oe,se,ue,be,de,le,je,pe,fe,xe,Oe,he,me,ve,ge,ke,we,ye,Ce,Se,ze,Be=ie,De=t(853),Fe=t(854),Ae=function(e){var n=e.max,t=e.onConfirm,r=e.onDismiss,c=e.tokenName,a=void 0===c?"":c,i=e.depositFeeBP,o=void 0===i?0:i,s=Object(f.useState)(""),u=Object(j.a)(s,2),b=u[0],d=u[1],l=Object(f.useState)(!1),p=Object(j.a)(l,2),x=p[0],O=p[1],h=Object(B.a)(),m=Object(f.useMemo)((function(){return Object(A.b)(n)}),[n]),v=Object(f.useCallback)((function(e){d(e.currentTarget.value)}),[d]),g=Object(f.useCallback)((function(){d(m)}),[m,d]);return Object(U.jsxs)(k.I,{title:"".concat(h(316,"Deposit")," ").concat(a," Tokens"),onDismiss:r,children:[Object(U.jsx)(Fe.a,{value:b,onSelectMax:g,onChange:v,max:m,symbol:a,burnFee:o}),Object(U.jsxs)(De.a,{children:[Object(U.jsx)(k.j,{width:"100%",variant:"secondary",onClick:r,children:h(462,"Cancel")}),Object(U.jsx)(k.j,{width:"100%",disabled:x,onClick:Object(Q.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,t(b);case 3:O(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:x?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},Ne=function(e){var n=e.onConfirm,t=e.onDismiss,r=e.max,c=e.tokenName,a=void 0===c?"":c,i=Object(f.useState)(""),o=Object(j.a)(i,2),s=o[0],u=o[1],b=Object(f.useState)(!1),d=Object(j.a)(b,2),l=d[0],p=d[1],x=Object(B.a)(),O=Object(f.useMemo)((function(){return Object(A.b)(r)}),[r]),h=Object(f.useCallback)((function(e){u(e.currentTarget.value)}),[u]),m=Object(f.useCallback)((function(){u(O)}),[O,u]);return Object(U.jsxs)(k.I,{title:"Withdraw ".concat(a),onDismiss:t,children:[Object(U.jsx)(Fe.a,{onSelectMax:m,onChange:h,value:s,max:O,symbol:a}),Object(U.jsxs)(De.a,{children:[Object(U.jsx)(k.j,{variant:"secondary",onClick:t,children:x(462,"Cancel")}),Object(U.jsx)(k.j,{disabled:l,onClick:Object(Q.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,n(s);case 3:p(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:l?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},He=v.e.div(oe||(oe=Object(l.a)(["\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]))),Ee=v.e.a(se||(se=Object(l.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]))),Ie=function(e){var n=e.hasBalance;return void 0!==n&&n?Object(U.jsxs)("div",{children:[Object(U.jsx)(He,{children:"Action Required"}),Object(U.jsx)(Ee,{href:" https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",target:"_blank",children:"What do I need to do?"})]}):Object(U.jsx)("div",{children:Object(U.jsx)(R,{isFinished:!0,children:"FINISHED"})})},Pe=t(86),Re=v.e.button(ue||(ue=Object(l.a)(["\n  align-items: center;\n  background: ",";\n  border: 0;\n  border-radius: 12px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  border: 2px solid ",";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n"])),(function(e){return e.disabled?"#ddd":e.theme.card.background}),(function(e){return e.disabled?"#acaaaf":"#32cad7"}),(function(e){return e.fontSize}),(function(e){return e.size}),(function(e){return e.padding}),(function(e){return e.padding}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.disabled?"#eee":"#33cbd7"})),Te=Object(v.e)(Pe.b)(be||(be=Object(l.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),Ue=v.e.a(de||(de=Object(l.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),Le=function(e){var n,t,r,c=e.children,a=e.disabled,i=e.href,o=e.onClick,s=e.size,u=e.text,b=e.to,d=Object(f.useContext)(v.a),l=d.colors,j=d.spacing,p=l.background;switch(s){case"sm":t=j[3],n=36,r=14;break;case"lg":t=j[4],n=72,r=16;break;case"md":default:t=j[4],n=56,r=16}var x=Object(f.useMemo)((function(){return b?Object(U.jsx)(Te,{to:b,children:u}):i?Object(U.jsx)(Ue,{href:i,target:"__blank",children:u}):u}),[i,u,b]);return Object(U.jsxs)(Re,{boxShadow:undefined,color:p,disabled:a,fontSize:r,onClick:o,padding:t,size:n,children:[c,x]})},Me=t(32),Ye=t(954),_e=t(955),qe=(le={},Object(Me.a)(le,H.b.BINANCE,P.a),Object(Me.a)(le,H.b.CORE,P.c),Object(Me.a)(le,H.b.COMMUNITY,P.b),le),We=v.e.div(je||(je=Object(l.a)(["\n  border-top: 1px solid ",";\n  color: ",";\n  padding: 24px;\n"])),(function(e){return e.theme.isDark?"#524B63":"#E9EAEB"}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled2":"primary2"]})),Ve=v.e.button(pe||(pe=Object(l.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n"])),(function(e){return e.theme.colors.primary})),Je=v.e.div(fe||(fe=Object(l.a)(["\n  margin-top: 24px;\n"]))),Qe=v.e.div(xe||(xe=Object(l.a)(["\n  align-items: center;\n  display: flex;\n"]))),Ge=v.e.div(Oe||(Oe=Object(l.a)(["\n  flex: 1;\n"]))),Ke=v.e.div(he||(he=Object(l.a)(["\n  font-size: 14px;\n"]))),Xe=v.e.a(me||(me=Object(l.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n"]))),Ze=function(e){var n=e.projectLink,t=e.totalStaked,r=e.blocksRemaining,c=e.isFinished,a=e.blocksUntilStart,i=e.poolCategory,o=e.unit,s=Object(f.useState)(!1),u=Object(j.a)(s,2),b=u[0],d=u[1],l=Object(B.a)(),p=b?Ye.a:_e.a,x=qe[i];return Object(U.jsxs)(We,{isFinished:c,children:[Object(U.jsxs)(Qe,{children:[Object(U.jsx)(Ge,{children:Object(U.jsx)(x,{})}),Object(U.jsxs)(Ve,{onClick:function(){return d(!b)},children:[b?"Hide":"Details"," ",Object(U.jsx)(p,{})]})]}),b&&Object(U.jsxs)(Je,{children:[Object(U.jsxs)(Qe,{style:{marginBottom:"4px"},children:[Object(U.jsx)(Ge,{children:Object(U.jsxs)(Ke,{children:[Object(U.jsxs)("span",{role:"img","aria-label":"syrup",children:["\ud83d\udc32"," "]}),l(408,"Total")]})}),Object(U.jsx)(Be,{fontSize:"14px",isDisabled:c,value:Object(A.a)(t)})]}),a>0&&Object(U.jsxs)(Qe,{children:[Object(U.jsx)(Ge,{children:Object(U.jsxs)(Ke,{children:[l(410,"Start"),":"]})}),Object(U.jsx)(Be,{fontSize:"14px",isDisabled:c,value:a,decimals:0})]}),0===a&&r>0&&Object(U.jsxs)(Qe,{children:[Object(U.jsx)(Ge,{children:Object(U.jsxs)(Ke,{children:[l(411,"End"),":"]})}),Object(U.jsx)(Be,{fontSize:"14px",isDisabled:c,value:r,unit:o,decimals:0})]}),Object(U.jsx)(Xe,{href:n,target:"_blank",children:l(412,"View project site")})]})]})},$e=x.a.memo(Ze),en=v.e.div(ve||(ve=Object(l.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]))),nn=v.e.div(ge||(ge=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]))),tn=v.e.div(ke||(ke=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),rn=v.e.div(we||(we=Object(l.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),cn=v.e.div(ye||(ye=Object(l.a)(["\n  display: flex;\n  font-size: 14px;\n  padding: 3px 0;\n"]))),an=function(e){var n=e.pool,t=n.sousId,r=(n.image,n.tokenName),c=n.stakingTokenName,a=n.stakingTokenAddress,i=n.projectLink,o=n.harvest,s=n.apy,u=n.tokenDecimals,b=n.poolCategory,d=n.totalStaked,l=n.startBlock,p=n.endBlock,x=n.isFinished,O=n.userData,h=n.stakingLimit,v=n.burnFee,w=b===H.b.BINANCE,y=Object(B.a)(),C=Object(Z.d)(a[56]),S=Object(g.m)().account,z=F(),D=Object($.c)(C,t).onApprove,N=Object(ee.b)(t,w).onStake,E=Object(ne.b)(t).onUnstake,I=Object(te.e)(t,w).onReward,P=Object(f.useState)(!1),L=Object(j.a)(P,2),M=L[0],Y=L[1],_=Object(f.useState)(!1),q=Object(j.a)(_,2),W=q[0],V=q[1],K=new m.a((null===O||void 0===O?void 0:O.allowance)||0),re=new m.a((null===O||void 0===O?void 0:O.stakingTokenBalance)||0),ce=new m.a((null===O||void 0===O?void 0:O.stakedBalance)||0),ae=new m.a((null===O||void 0===O?void 0:O.pendingReward)||0),ie=Math.max(l-z,0),oe=Math.max(p-z,0),se=c===H.c.SYRUP,ue=(null===ce||void 0===ce?void 0:ce.toNumber())>0,be=!ue&&!K.toNumber()&&!w,de=x&&ue,le=new m.a(h).multipliedBy(new m.a(10).pow(u)),je=Object(k.ab)(Object(U.jsx)(Ae,{max:h&&re.isGreaterThan(le)?le:re,onConfirm:N,tokenName:h?"".concat(c," (").concat(h," max)"):c,depositFeeBP:10*v})),pe=Object(j.a)(je,1)[0],fe=Object(k.ab)(Object(U.jsx)(Ne,{max:ce,onConfirm:E,tokenName:c})),xe=Object(j.a)(fe,1)[0],Oe=Object(f.useCallback)(Object(Q.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Y(!0),e.next=4,D();case 4:e.sent||Y(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[D,Y]);return Object(U.jsxs)(T,{isActive:de,isFinished:x,children:[x&&Object(U.jsx)(en,{}),Object(U.jsxs)("div",{style:{padding:"24px"},children:[Object(U.jsxs)(R,{isFinished:x,children:[se&&"[OLD]"," ",r," ",y(348,"Pool")]}),Object(U.jsxs)("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center"},children:[Object(U.jsx)("div",{style:{flex:1},children:Object(U.jsx)(k.B,{src:"/images/bnbpool/BNB.svg",width:64,height:64,alt:r})}),S&&o&&!se&&Object(U.jsx)(Le,{disabled:!ae.toNumber()||W,text:W?"Collecting":"Harvest",onClick:Object(Q.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,I();case 3:V(!1);case 4:case"end":return e.stop()}}),e)})))})]}),se?Object(U.jsx)(Ie,{hasBalance:ue}):Object(U.jsx)(tn,{children:Object(U.jsx)(Be,{value:Object(A.a)(ae,u),decimals:"BTCB"===r?5:3,isDisabled:x})}),Object(U.jsx)(X,{isFinished:x,text:y(330,"".concat(r," earned"))}),Object(U.jsxs)(nn,{children:[!S&&Object(U.jsx)(G.a,{}),S&&(be&&!se?Object(U.jsx)("div",{style:{flex:1},children:Object(U.jsx)(k.j,{disabled:x||M,onClick:Oe,width:"100%",children:"Approve ".concat(c)})}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(k.j,{disabled:ce.eq(new m.a(0))||W,onClick:se?Object(Q.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,E("0");case 3:V(!1);case 4:case"end":return e.stop()}}),e)}))):xe,children:"Unstake ".concat(c)}),Object(U.jsx)(rn,{}),!se&&Object(U.jsx)(k.A,{disabled:x,onClick:pe,children:Object(U.jsx)(k.a,{color:"background"})})]}))]}),Object(U.jsxs)(cn,{children:[Object(U.jsxs)("div",{style:{flex:1},children:[y(736,"APR"),":"]}),x||se||!s||(null===s||void 0===s?void 0:s.isNaN())||!(null===s||void 0===s?void 0:s.isFinite())?"-":Object(U.jsx)(Be,{fontSize:"14px",isDisabled:x,value:null===s||void 0===s?void 0:s.toNumber(),decimals:2,unit:"%"})]}),Object(U.jsxs)(cn,{children:[Object(U.jsxs)("div",{style:{flex:1},children:[Object(U.jsxs)("span",{role:"img","aria-label":c,children:["\ud83d\udc32"," "]}),y(384,"Your Stake"),":"]}),Object(U.jsx)(Be,{fontSize:"14px",isDisabled:x,value:Object(A.a)(ce)})]}),v>0?Object(U.jsxs)(cn,{children:[Object(U.jsxs)("div",{style:{flex:1},children:[Object(U.jsxs)("span",{role:"img","aria-label":c,children:["\ud83d\udd25"," "]}),y(10005,"Burn fee"),":"]}),Object(U.jsx)(Be,{fontSize:"14px",isDisabled:x,value:v/10,decimals:1,unit:"%"})]}):""]}),Object(U.jsx)($e,{projectLink:i,totalStaked:d,blocksRemaining:oe,isFinished:x,blocksUntilStart:ie,poolCategory:b,unit:"blocks"})]})},on=function(){var e=Object(O.h)(),n=e.url,t=e.isExact,r=Object(B.a)();return Object(U.jsx)(sn,{children:Object(U.jsxs)(k.k,{activeIndex:t?0:1,scale:"sm",variant:"subtle",children:[Object(U.jsx)(k.l,{as:Pe.b,to:"".concat(n),children:r(999,"Active")}),Object(U.jsx)(k.l,{as:Pe.b,to:"".concat(n,"/history"),children:r(999,"Inactive")})]})})},sn=v.e.div(Ce||(Ce=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),un=v.e.div(Se||(Se=Object(l.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),bn=v.e.div(ze||(ze=Object(l.a)(["\n  align-items: center;\n  color: ",";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.colors.primary})),dn=function(){var e=Object(O.h)().path,n=Object(B.a)(),t=Object(g.m)().account,r=Object(N.f)(),c=Object(N.m)(t),a=Object(N.p)(),i=F(),o=function(e,n,t){var r=new m.a(n);return"BNB"===e||"WBNB"===e?new m.a(1):n&&t===H.c.BUSD?r.div(a):r},s=c.map((function(e){var n=r.find((function(n){return n.tokenSymbol===e.tokenName})),t=r.find((function(n){return n.tokenSymbol===e.stakingTokenName})),c=o(H.c.CAKE,null===t||void 0===t?void 0:t.tokenPriceVsQuote,null===t||void 0===t?void 0:t.quoteTokenSymbol),a=o(e.tokenName,null===n||void 0===n?void 0:n.tokenPriceVsQuote,null===n||void 0===n?void 0:n.quoteTokenSymbol).times(e.tokenPerBlock).times(w.a),s=new m.a(0);s=c.times(Object(A.a)(e.totalStaked));var u=a.div(s).times(100);return Object(p.a)(Object(p.a)({},e),{},{isFinished:e.isFinished||i>e.endBlock,apy:u})})),u=z()(s,(function(e){return e.isFinished})),b=Object(j.a)(u,2),d=b[0],l=b[1];return Object(U.jsxs)(I.a,{children:[Object(U.jsxs)(bn,{children:[Object(U.jsxs)("div",{children:[Object(U.jsx)(k.z,{as:"h1",size:"xxl",mb:"16px",children:n(282,"BNB Pool")}),Object(U.jsxs)("ul",{children:[Object(U.jsx)("li",{children:n(580,"Stake DBALL to earn new tokens.")}),Object(U.jsx)("li",{children:n(404,"You can unstake at any time.")}),Object(U.jsx)("li",{children:n(406,"Rewards are calculated per block.")})]})]}),Object(U.jsx)("img",{src:"/images/egg/2.png",alt:"pool icon",width:435,height:218})]}),Object(U.jsx)(on,{}),Object(U.jsx)(un,{}),Object(U.jsxs)(E.a,{children:[Object(U.jsx)(O.b,{exact:!0,path:"".concat(e),children:Object(U.jsxs)(U.Fragment,{children:[C()(l,["sortOrder"]).map((function(e){return Object(U.jsx)(an,{pool:e},e.sousId)})),Object(U.jsx)(W,{})]})}),Object(U.jsx)(O.b,{path:"".concat(e,"/history"),children:C()(d,["sortOrder"]).map((function(e){return Object(U.jsx)(an,{pool:e},e.sousId)}))})]})]})}}}]);
//# sourceMappingURL=11.8e59e350.chunk.js.map