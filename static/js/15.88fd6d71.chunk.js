(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[15],{870:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a}));n(0);var c=n(42),r=n(13),a=function(){return Object(r.jsx)(c.R,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.U,{}),children:"No Fees"})},s=function(){return Object(r.jsx)(c.R,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.U,{}),children:"Core"})},i=function(){return Object(r.jsx)(c.R,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.x,{}),children:"Community"})},o=function(){return Object(r.jsx)(c.R,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.e,{}),children:"Binance"})}},876:function(e,t,n){"use strict";var c,r=n(63),a=(n(0),n(3)),s=n(86),i=n(42),o=n(844),l=n(13),j=function(e){var t=e.translationId,n=e.children,c=Object(o.a)();return Object(l.jsx)(l.Fragment,{children:c(t,n)})},b=a.e.div(c||(c=Object(r.a)(["\n  margin-bottom: 40px;\n"])));t.a=function(e){var t=e.activeIndex,n=void 0===t?0:t;return Object(l.jsx)(b,{children:Object(l.jsxs)(i.k,{activeIndex:n,scale:"sm",variant:"subtle",children:[Object(l.jsx)(i.l,{id:"swap-nav-link",to:"/layer/info",as:s.b,children:Object(l.jsx)(j,{translationId:800,children:"Info"})}),Object(l.jsx)(i.l,{id:"pool-nav-link",to:"/layer/farms",as:s.b,children:Object(l.jsx)(j,{translationId:7400,children:"Farms"})}),Object(l.jsx)(i.l,{id:"pool-token-nav-link",to:"/layer/pools",as:s.b,children:"Pools"})]})})}},960:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ee}));var c,r,a,s,i,o,l,j,b,d,x,u,O,p,m,h,f,k,g,y,S=n(12),v=n(24),T=n(63),w=n(0),C=n(36),A=n(38),I=n(5),P=n.n(I),B=n(3),q=n(61),z=n(876),D=n(42),F=n(865),L=n(866),N=n(219),E=n(79),R=n(128),U=n(80),M=n(15),Q=n(844),Z=n(887),G=n(867),V=n(13),W=B.e.div(c||(c=Object(T.a)(["\n  margin-top: 24px;\n"]))),H=Object(B.e)(D.E)(r||(r=Object(T.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),J=function(e){var t=e.isTokenOnly,n=e.bscScanAddress,c=e.removed,r=e.totalValueFormated,a=e.lpLabel,s=e.quoteTokenAdresses,i=e.quoteTokenSymbol,o=e.tokenAddresses,l=Object(Q.a)(),j=Object(G.a)({quoteTokenAdresses:s,quoteTokenSymbol:i,tokenAddresses:o});return Object(V.jsxs)(W,{children:[Object(V.jsxs)(D.y,{justifyContent:"space-between",children:[Object(V.jsxs)(D.S,{children:[l(316,"Stake"),":"]}),Object(V.jsx)(H,{href:t?"https://exchange.dragonballfinance.org/#/swap/".concat(o[56]):"https://exchange.dragonballfinance.org/#/add/".concat(j),children:a})]}),!c&&Object(V.jsxs)(D.y,{justifyContent:"space-between",children:[Object(V.jsxs)(D.S,{children:[l(23,"Total Liquidity"),":"]}),Object(V.jsx)(D.S,{children:r})]}),Object(V.jsx)(D.y,{justifyContent:"flex-start",children:Object(V.jsx)(D.D,{external:!0,href:n,bold:!1,children:l(356,"View on BscScan")})})]})},X=n(870),$=Object(B.e)(D.y)(a||(a=Object(T.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),K=Object(B.e)(D.R)(s||(s=Object(T.a)(["\n  margin-left: 4px;\n"]))),Y=function(e){var t=e.lpLabel,n=e.multiplier,c=(e.risk,e.farmImage),r=e.tokenSymbol,a=e.depositFee;return Object(V.jsxs)($,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(V.jsx)(D.B,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64}),Object(V.jsxs)(D.y,{flexDirection:"column",alignItems:"flex-end",children:[Object(V.jsx)(D.z,{mb:"4px",children:t}),Object(V.jsxs)(D.y,{justifyContent:"center",children:[0===a?Object(V.jsx)(X.d,{}):null,Object(V.jsx)(K,{variant:"secondary",children:n})]})]})]})},_=n(2),ee=n.n(_),te=n(7),ne=n(850),ce=n(855),re=n(868),ae=n(856),se=n(869),ie=n(846),oe=n(853),le=n(854),je=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,s=e.depositFeeBP,i=void 0===s?0:s,o=Object(w.useState)(""),l=Object(v.a)(o,2),j=l[0],b=l[1],d=Object(w.useState)(!1),x=Object(v.a)(d,2),u=x[0],O=x[1],p=Object(Q.a)(),m=Object(w.useMemo)((function(){return Object(ie.b)(t)}),[t]),h=Object(w.useCallback)((function(e){b(e.currentTarget.value)}),[b]),f=Object(w.useCallback)((function(){b(m)}),[m,b]);return Object(V.jsxs)(D.I,{title:"".concat(p(316,"Deposit")," ").concat(a," Tokens"),onDismiss:c,children:[Object(V.jsx)(le.a,{value:j,onSelectMax:f,onChange:h,max:m,symbol:a,depositFeeBP:i}),Object(V.jsxs)(oe.a,{children:[Object(V.jsx)(D.j,{variant:"secondary",onClick:c,children:p(462,"Cancel")}),Object(V.jsx)(D.j,{disabled:u,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(j);case 3:O(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:u?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},be=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,s=Object(w.useState)(""),i=Object(v.a)(s,2),o=i[0],l=i[1],j=Object(w.useState)(!1),b=Object(v.a)(j,2),d=b[0],x=b[1],u=Object(Q.a)(),O=Object(w.useMemo)((function(){return Object(ie.b)(c)}),[c]),p=Object(w.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(w.useCallback)((function(){l(O)}),[O,l]);return Object(V.jsxs)(D.I,{title:"Withdraw ".concat(a),onDismiss:n,children:[Object(V.jsx)(le.a,{onSelectMax:m,onChange:p,value:o,max:O,symbol:a}),Object(V.jsxs)(oe.a,{children:[Object(V.jsx)(D.j,{variant:"secondary",onClick:n,children:u(462,"Cancel")}),Object(V.jsx)(D.j,{disabled:d,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,t(o);case 3:x(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:d?u(488,"Pending Confirmation"):u(464,"Confirm")})]})]})},de=B.e.div(i||(i=Object(T.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),xe=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.depositFeeBP,s=Object(Q.a)(),i=Object(ae.c)(r).onStake,o=Object(se.c)(r).onUnstake,l=Object(ie.a)(t),j=l.toLocaleString(),b=Object(D.ab)(Object(V.jsx)(je,{max:n,onConfirm:i,tokenName:c,depositFeeBP:a})),d=Object(v.a)(b,1)[0],x=Object(D.ab)(Object(V.jsx)(be,{max:t,onConfirm:o,tokenName:c})),u=Object(v.a)(x,1)[0];return Object(V.jsxs)(D.y,{justifyContent:"space-between",alignItems:"center",children:[Object(V.jsx)(D.z,{color:0===l?"textDisabled":"text",children:j}),0===l?Object(V.jsx)(D.j,{onClick:d,children:s(999,"Stake")}):Object(V.jsxs)(de,{children:[Object(V.jsx)(D.A,{variant:"tertiary",onClick:u,mr:"6px",children:Object(V.jsx)(D.H,{color:"primary"})}),Object(V.jsx)(D.A,{variant:"tertiary",onClick:d,children:Object(V.jsx)(D.a,{color:"primary"})})]})]})},ue=n(849),Oe=B.e.div(o||(o=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),pe=function(e){var t=e.earnings,n=e.pid,c=Object(Q.a)(),r=Object(w.useState)(!1),a=Object(v.a)(r,2),s=a[0],i=a[1],o=Object(ue.d)(n).onReward,l=Object(ae.c)(n).onStake,j=Object(ie.a)(t),b=j.toLocaleString();return Object(V.jsxs)(D.y,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(V.jsx)(D.z,{color:0===j?"textDisabled":"text",children:b}),Object(V.jsxs)(Oe,{children:[11===n?Object(V.jsx)(D.j,{disabled:0===j||s,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,l(j.toString());case 3:i(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(V.jsx)(D.j,{disabled:0===j||s,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,o();case 3:i(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},me=B.e.div(l||(l=Object(T.a)(["\n  padding-top: 16px;\n"]))),he=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(Q.a)(),a=Object(w.useState)(!1),s=Object(v.a)(a,2),i=s[0],o=s[1],l=Object(E.b)(t.pid),j=l.pid,b=l.lpAddresses,d=l.tokenAddresses,x=l.isTokenOnly,u=l.depositFeeBP,O=Object(E.c)(j),p=O.allowance,m=O.tokenBalance,h=O.stakedBalance,f=O.earnings,k=b[56],g=d[56],y=t.lpSymbol.toUpperCase(),S=c&&p&&p.isGreaterThan(0),T=Object(w.useMemo)((function(){return x?Object(ne.a)(n,g):Object(ne.a)(n,k)}),[n,k,g,x]),C=Object(re.b)(T).onApprove,A=Object(w.useCallback)(Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,C();case 4:o(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[C]);return Object(V.jsxs)(me,{children:[Object(V.jsxs)(D.y,{children:[Object(V.jsx)(D.S,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"SENZU"}),Object(V.jsx)(D.S,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(V.jsx)(pe,{earnings:f,pid:j}),Object(V.jsxs)(D.y,{children:[Object(V.jsx)(D.S,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:y}),Object(V.jsx)(D.S,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?S?Object(V.jsx)(xe,{stakedBalance:h,tokenBalance:m,tokenName:y,pid:j,depositFeeBP:u}):Object(V.jsx)(D.j,{mt:"8px",width:"100%",disabled:i,onClick:A,children:r(999,"Approve Contract")}):Object(V.jsx)(ce.a,{mt:"8px",fullWidth:!0})]})},fe=n(878),ke=B.e.div(j||(j=Object(T.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),ge=B.e.div(b||(b=Object(T.a)(["\n  margin-bottom: '10px';\n"]))),ye=Object(B.e)(D.S)(d||(d=Object(T.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),Se=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,s=e.cakePrice,i=e.apy,o=Object(Q.a)(),l=Object(G.a)({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),j=i.times(new P.a(100)).toNumber(),b=1e3/s.toNumber(),d=Object(fe.b)({numberOfDays:1,farmApy:j,cakePrice:s}),x=Object(fe.b)({numberOfDays:7,farmApy:j,cakePrice:s}),u=Object(fe.b)({numberOfDays:30,farmApy:j,cakePrice:s}),O=Object(fe.b)({numberOfDays:365,farmApy:j,cakePrice:s});return Object(V.jsxs)(D.I,{title:"ROI",onDismiss:t,children:[Object(V.jsxs)(ke,{children:[Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:o(999,"Timeframe")})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:o(999,"ROI")})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:o(999,"SENZU per $1000")})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{children:"1d"})}),Object(V.jsx)(ge,{children:Object(V.jsxs)(D.S,{children:[Object(fe.a)({amountEarned:d,amountInvested:b}),"%"]})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{children:d})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{children:"7d"})}),Object(V.jsx)(ge,{children:Object(V.jsxs)(D.S,{children:[Object(fe.a)({amountEarned:x,amountInvested:b}),"%"]})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{children:x})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{children:"30d"})}),Object(V.jsx)(ge,{children:Object(V.jsxs)(D.S,{children:[Object(fe.a)({amountEarned:u,amountInvested:b}),"%"]})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{children:u})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{children:"365d(APY)"})}),Object(V.jsx)(ge,{children:Object(V.jsxs)(D.S,{children:[Object(fe.a)({amountEarned:O,amountInvested:b}),"%"]})}),Object(V.jsx)(ge,{children:Object(V.jsx)(D.S,{children:O})})]}),Object(V.jsx)(ye,{fontSize:"12px",color:"textSubtle",children:o(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(V.jsx)(D.y,{justifyContent:"center",children:Object(V.jsxs)(D.E,{href:"https://exchange.pancakeswap.finance/#/add/".concat(l),children:[o(999,"Get")," ",n]})})]})},ve=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.cakePrice,s=e.apy,i=Object(D.ab)(Object(V.jsx)(Se,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:a,apy:s})),o=Object(v.a)(i,1)[0];return Object(V.jsx)(D.A,{onClick:o,variant:"text",scale:"sm",ml:"4px",children:Object(V.jsx)(D.m,{})})},Te=Object(B.f)(x||(x=Object(T.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),we=B.e.div(u||(u=Object(T.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Te),Ce=B.e.div(O||(O=Object(T.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Ae=B.e.div(p||(p=Object(T.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Ie=B.e.div(m||(m=Object(T.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Pe=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethereum,s=e.account,i=Object(Q.a)(),o=Object(w.useState)(!1),l=Object(v.a)(o,2),j=l[0],b=l[1],d=t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase()),x=Object(w.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===M.c.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===M.c.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),u=x?"$".concat(Number(x).toLocaleString(void 0,{maximumFractionDigits:0})):"-",O=t.lpSymbol,p=t.apy&&t.apy.times(new P.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),m=t.quoteTokenAdresses,h=t.quoteTokenSymbol,f=t.tokenAddresses,k=t.risk;return Object(V.jsxs)(Ce,{children:["SENZU"===t.tokenSymbol&&Object(V.jsx)(we,{}),Object(V.jsx)(Y,{lpLabel:O,multiplier:t.multiplier,risk:k,depositFee:t.depositFeeBP,farmImage:d,tokenSymbol:t.tokenSymbol}),!n&&Object(V.jsxs)(D.y,{justifyContent:"space-between",alignItems:"center",children:[Object(V.jsxs)(D.S,{children:[i(352,"APR"),":"]}),Object(V.jsx)(D.S,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(ve,{lpLabel:O,quoteTokenAdresses:m,quoteTokenSymbol:h,tokenAddresses:f,cakePrice:c,apy:t.apy}),p,"%"]}):Object(V.jsx)(D.P,{height:24,width:80})})]}),Object(V.jsxs)(D.y,{justifyContent:"space-between",children:[Object(V.jsxs)(D.S,{children:[i(318,"Earn"),":"]}),Object(V.jsx)(D.S,{bold:!0,children:"SENZU"})]}),Object(V.jsxs)(D.y,{justifyContent:"space-between",children:[Object(V.jsxs)(D.S,{style:{fontSize:"24px"},children:[i(10001,"Deposit Fee"),":"]}),Object(V.jsxs)(D.S,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(V.jsx)(he,{farm:t,ethereum:a,account:s}),Object(V.jsx)(Ae,{}),Object(V.jsx)(Z.a,{onClick:function(){return b(!j)},expanded:j}),Object(V.jsx)(Ie,{expanded:j,children:Object(V.jsx)(J,{removed:n,isTokenOnly:t.isTokenOnly,bscScanAddress:t.isTokenOnly?"https://bscscan.com/token/".concat(t.tokenAddresses[56]):"https://bscscan.com/token/".concat(t.lpAddresses[56]),totalValueFormated:u,lpLabel:O,quoteTokenAdresses:m,quoteTokenSymbol:h,tokenAddresses:f})})]})},Be=n(86),qe=function(e){var t=e.stakedOnly,n=e.setStakedOnly,c=Object(C.h)(),r=c.url,a=c.isExact,s=Object(Q.a)();return Object(V.jsxs)(ze,{children:[Object(V.jsxs)(De,{children:[Object(V.jsx)(D.T,{checked:t,onChange:function(){return n(!t)}}),Object(V.jsxs)(D.S,{children:[" ",s(699,"Staked only")]})]}),Object(V.jsxs)(D.k,{activeIndex:a?0:1,scale:"sm",variant:"subtle",children:[Object(V.jsx)(D.l,{as:Be.b,to:"".concat(r),children:s(698,"Active")}),Object(V.jsx)(D.l,{as:Be.b,to:"".concat(r,"/history"),children:s(700,"Inactive")})]})]})},ze=B.e.div(h||(h=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),De=B.e.div(f||(f=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),D.S),Fe=B.e.div(k||(k=Object(T.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Le=B.e.div(g||(g=Object(T.a)(["\n  display: flex;\n  align-items: center; \n  justify-content: center;\n  \n"]))),Ne=B.e.div(y||(y=Object(T.a)(["\n  align-items: center;\n  color: ",";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.colors.primary})),Ee=function(e){var t=Object(C.h)().path,n=Object(Q.a)(),c=Object(E.g)(),r=Object(E.o)(),a=Object(E.n)(),s=Object(q.m)(),i=s.account,o=s.ethereum,l=e.tokenMode,j=Object(A.b)(),b=Object(R.a)().fastRefresh;Object(w.useEffect)((function(){i&&j(Object(U.b)(i))}),[i,j,b]);var d=Object(w.useState)(!1),x=Object(v.a)(d,2),u=x[0],O=x[1],p=c.filter((function(e){return!!e.isTokenOnly===!!l&&"0X"!==e.multiplier})),m=c.filter((function(e){return!!e.isTokenOnly===!!l&&"0X"===e.multiplier})),h=p.filter((function(e){return e.userData&&new P.a(e.userData.stakedBalance).isGreaterThan(0)})),f=Object(w.useCallback)((function(e,t){return e.map((function(e){var t=new P.a(e.senzuPerBlock||1).times(new P.a(e.poolWeight)).div(new P.a(10).pow(18)).times(F.a),n=r.times(t),c=new P.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===M.c.BNB&&(c=c.times(a)),c.comparedTo(0)>0&&(n=n.div(c)),Object(S.a)(Object(S.a)({},e),{},{apy:n})})).map((function(e){return Object(V.jsx)(Pe,{farm:e,removed:t,bnbPrice:a,cakePrice:r,ethereum:o,account:i},e.pid)}))}),[a,i,r,o]);return Object(V.jsxs)(N.a,{children:[Object(V.jsx)(Ne,{children:Object(V.jsxs)("div",{children:[Object(V.jsx)(D.z,{as:"h1",size:"xxl",mb:"16px",children:"Layer 1"}),Object(V.jsxs)("ul",{children:[Object(V.jsx)("li",{children:n(5800,"Layered Farming is highly volatile")}),Object(V.jsx)("li",{children:n(4040,"please do your own research before investing")})]})]})}),Object(V.jsx)(Le,{children:l?Object(V.jsx)(z.a,{activeIndex:2}):Object(V.jsx)(z.a,{activeIndex:1})}),Object(V.jsx)(Fe,{}),Object(V.jsx)(D.z,{as:"h2",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:l?n(100020,"Stake tokens to earn SENZU"):n(3200,"Stake LP tokens to earn SENZU")}),Object(V.jsx)(D.z,{as:"h3",color:"secondary",mb:"50px",style:{textAlign:"center"},children:n(1e5,"Deposit Fee will be used to buyback DBALL")}),Object(V.jsx)(qe,{stakedOnly:u,setStakedOnly:O}),Object(V.jsxs)("div",{children:[Object(V.jsx)(Fe,{}),Object(V.jsxs)(L.a,{children:[Object(V.jsx)(C.b,{exact:!0,path:"".concat(t),children:f(u?h:p,!1)}),Object(V.jsx)(C.b,{exact:!0,path:"".concat(t,"/history"),children:f(m,!0)})]})]}),Object(V.jsx)(D.B,{src:"/images/egg/12.png",alt:"illustration",width:1352,height:587,responsive:!0})]})}}}]);
//# sourceMappingURL=15.88fd6d71.chunk.js.map