(this.webpackJsonpamanda=this.webpackJsonpamanda||[]).push([[0],{44:function(n){n.exports=JSON.parse('{"server":"http://34.64.155.137:8080"}')},53:function(n,e,t){},76:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,s,l,b,u,d,h,p,j=t(0),f=t(23),x=t.n(f),O=t(9),g=t(46),m=t(2),C=t(3),v=Object(C.a)(r||(r=Object(m.a)(["\n  *, ::after, ::before {\n    box-sizing: border-box;\n    position: relative;\n  }\n\n  #root {\n    z-index: -10;\n }\n\n  div {\n    display: block;\n  }\n  \n  body {\n    min-height: 100vh;\n    background: inherit;\n    margin: 0;\n    font-size: .875rem;\n    font-weight: 400;\n    line-height: 1.4285714286;\n    color: #212529;\n    text-align: left;\n    background: #ffffff;\n    z-index: -10;\n  }\n\n  html {\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: rgba(19, 24, 44, 0);\n    font-family: Noto Sans CJK KR Midium;\n  }\n\n  h2, h3, h4 {\n    margin: 0;\n    padding: 0;\n  }"]))),A=(t(53),t(6)),E=t.p+"static/media/colorLogo.4bb65331.svg",w=t.p+"static/media/BackArrow.88557292.svg",D=t.p+"static/media/matchMent.946b0fde.svg",y=C.b.div(c||(c=Object(m.a)(["\nwidth: 70vw;\nmargin: 0 0 37px 12.5vw;\n"]))),G=C.b.embed(i||(i=Object(m.a)(["\nmargin-top: 1.6vw;\nwidth: 103px;\nheight: 25px;\n"]))),k=C.b.div(o||(o=Object(m.a)(["\nmargin-top: 20px;\ndisplay: flex;\nalign-items: center;\n"]))),N=C.b.div(a||(a=Object(m.a)(["\nmargin-top: 8px;\ndisplay: flex;\nalign-items: center;\ncursor: pointer;\nz-index: 1;\n"]))),F=C.b.img(s||(s=Object(m.a)(["\nz-index: 0;\n"]))),U=C.b.span(l||(l=Object(m.a)(["\nfont-size: 20px;\nheight: 26px;\ncolor: #494949;\nline-height: 30px;\nfont-weight: 100;\n"]))),L=(C.b.div(b||(b=Object(m.a)(["\n  "]))),C.b.embed(u||(u=Object(m.a)(["\ndisplay: ",";\nmargin: 0 auto;\n"])),(function(n){return n.isEmpty&&"none"}))),T=t(7),K=t.n(T),M=t(14),_=t(4),z=t(43),I=t.n(z),S=t(44),B=I.a.create({baseURL:S.server}),H=function(){var n=Object(M.a)(K.a.mark((function n(){var e,t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/connect",n.next=3,B.get("/connect");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=Object(O.b)({key:"connectState",default:[]}),W=function(){var n=Object(O.c)(J),e=Object(_.a)(n,2),t=e[0],r=e[1];return{connect:t,connectList:function(){var n=Object(M.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=r,n.next=4,H();case 4:n.t1=n.sent,(0,n.t0)(n.t1),n.next=10;break;case 8:n.prev=8,n.t2=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}()}},V=t(1),P=function(){var n=W().connect;return Object(V.jsxs)(y,{children:[Object(V.jsx)("div",{children:Object(V.jsx)(G,{src:E})}),Object(V.jsxs)(k,{children:[Object(V.jsxs)(N,{onClick:function(){return window.location.replace("/")},children:[Object(V.jsx)(F,{src:w}),Object(V.jsx)(U,{children:"\ub3cc\uc544\uac00\uae30"})]}),Object(V.jsx)("div",{}),Object(V.jsx)(L,{src:D,isEmpty:n.length<=0})]})]})},R=t(5);!function(n){n[n.DAEGU=0]="DAEGU",n[n.DAEDEOK=1]="DAEDEOK",n[n.GWANGJU=2]="GWANGJU"}(d||(d={})),function(n){n.GWANGJU_FONT="#2B6BDB",n.GWANGJU_SELECT="rgba(81, 135, 231, 0.86)",n.GWANGJU_HEADER="#F7F9FD",n.GWANGJU_BACK="#5187E7",n.GWANGJU_CONTACT="rgba(81, 135, 231, 0.1)",n.DAEGU_FONT="#009843",n.DAEGU_SELECT="rgba(22, 162, 84, 0.86)",n.DAEGU_HEADER="#F7FDF8",n.DAEGU_BACK="#16A254",n.DAEGU_CONTACT="rgba(22, 162, 84, 0.1)",n.DAEDEOK_FONT="#FD8F04",n.DAEDEOK_SELECT="#F99E2B",n.DAEDEOK_HEADER="#FDFAF7",n.DAEDEOK_BACK="#F99E2B",n.DAEDEOK_CONTACT="rgba(249, 158, 43, 0.1)"}(h||(h={})),function(n){n[n.NOTAPPLICABLE=0]="NOTAPPLICABLE",n[n.HAVE=1]="HAVE",n[n.NOTHAVE=2]="NOTHAVE"}(p||(p={}));var Z,q,Q,X,Y,$,nn,en,tn,rn,cn,on,an,sn,ln,bn,un,dn,hn,pn=function(n){return n===d.DAEGU?h.DAEGU_FONT:n===d.GWANGJU?h.GWANGJU_FONT:h.DAEDEOK_FONT},jn=function(n){return n===d.DAEGU?h.DAEGU_BACK:n===d.GWANGJU?h.GWANGJU_BACK:h.DAEDEOK_BACK},fn=function(n){return n===d.DAEGU?h.DAEGU_SELECT:n===d.GWANGJU?h.GWANGJU_SELECT:h.DAEDEOK_SELECT},xn=C.b.div(Z||(Z=Object(m.a)(["\nposition: relative;\nwidth: 24.5vw;\nmin-width: 281px;\nheight: ",";\nborder: 1px solid #F3F3F3;\nbox-sizing: border-box;\nfilter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2));\nborder-radius: 10px;\nz-index: -1;\n"])),(function(n){return n.isMatch?"230px":"268px"})),On=C.b.div(q||(q=Object(m.a)(["\nposition: absolute;\nwidth: 100%;\nheight: 100%;\nbackground-color: ",";\nz-index: ",";\nborder-radius: 10px;\n"])),(function(n){return n.isAllMatch?"rgba(251, 251, 251, 0.7);":""}),(function(n){return n.isAllMatch?"10":"-10"})),gn=C.b.div(Q||(Q=Object(m.a)(["\ndisplay: flex;\nheight: 152px;\nborder-bottom: 1px solid #F3F3F3;\nz-index: -1;\n"]))),mn=C.b.div(X||(X=Object(m.a)(["\ndisplay: flex;\nwidth: 100%;\nalign-items: center;\nflex-direction: column;\nborder-right: 1px solid #F3F3F3;\n"]))),Cn=C.b.div(Y||(Y=Object(m.a)(["\ndisplay: flex;\njustify-content: center;\njustify-items: center;\nalign-items: center;\nflex-direction: column;\nwidth: 50%;\nz-index: -1;\n"]))),vn=C.b.span($||($=Object(m.a)(["\nline-height: 24px;\nfont-size: 1rem;\nfont-weight: 500;\ncolor: ",";\n"])),(function(n){return pn(n.school)})),An=C.b.span(nn||(nn=Object(m.a)(["\nfont-size: 24px;\nline-height: 36px;\ncolor: #191919;\ncursor: pointer;\n\n&:hover + span {\n  color: #3F3F3F;\n}\n"]))),En=C.b.span(en||(en=Object(m.a)(["\nfont-size: 16px;\nline-height: 21px;\ncolor: #8D8D8D;\ncursor: pointer;\n\n&:hover {\n  color: #3F3F3F;\n}\n"]))),wn=C.b.div(tn||(tn=Object(m.a)(["\npadding-top: 13px;\ndisplay: flex;\nheight: 115px;\nalign-items: center;\nflex-direction: column;\noverflow-x: hidden;\n"]))),Dn=C.b.span(rn||(rn=Object(m.a)(["\n/* font-size: 24px; */\nfont-size: ","px;\ncolor: #636363;\n"])),(function(n){return n.fontLength<=10?"24":24-Math.ceil(n.fontLength/4)})),yn=C.b.div(cn||(cn=Object(m.a)(["\nmargin-top: 13px;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\npadding: 4px 22px;\n/* width: 195px; */\nheight: 32px;\nbackground: rgba(81, 135, 231, 0.1);\nbackground: ",";\nborder-radius: 30px;\ncursor: pointer;\n"])),(function(n){return(e=n.school)===d.DAEGU?h.DAEGU_CONTACT:e===d.GWANGJU?h.GWANGJU_CONTACT:h.DAEDEOK_CONTACT;var e})),Gn=C.b.embed(on||(on=Object(m.a)(["\nwidth: 20px;\nheight: 20px;\nz-index: 0;\n"]))),kn=C.b.div(an||(an=Object(m.a)(["\nfont-size: 18px;\ncolor: ",";\nfont-size: ","px;\nmargin-left: 4px;\nline-height: 27px;\n"])),(function(n){return pn(n.school)}),(function(n){return n.fontLength<=10?"18":18-Math.ceil(n.fontLength/4)})),Nn=C.b.div(sn||(sn=Object(m.a)(["\nposition:relative;\n"]))),Fn=C.b.div(ln||(ln=Object(m.a)(["\nposition: absolute;\ntop: 14px;\nright: 20px;\nright: 1vw;\ngap: 4px;\ndisplay: flex;\n"]))),Un=C.b.div(bn||(bn=Object(m.a)(["\nwidth: 12px;\nheight: 12px;\nborder-radius: 50%;\nz-index: 1;\n"]))),Ln=Object(C.b)(Un)(un||(un=Object(m.a)(["\ndisplay: ",";\nbackground-color: ",";\nborder: 1px solid ",";\n/* ","; */\n"])),(function(n){return n.teamCheck===p.NOTAPPLICABLE&&"none"}),(function(n){return n.teamCheck===p.HAVE?h.GWANGJU_BACK:"#C4C4C4"}),(function(n){return n.teamCheck===p.HAVE?h.GWANGJU_BACK:"#C4C4C4"}),(function(n){return n.teamCheck===p.HAVE?h.GWANGJU_BACK:"white"})),Tn=Object(C.b)(Un)(dn||(dn=Object(m.a)(["\ndisplay: ",";\nbackground-color: ",";\nborder: 1px solid ",";\n/* ","; */\n"])),(function(n){return n.teamCheck===p.NOTAPPLICABLE&&"none"}),(function(n){return n.teamCheck===p.HAVE?h.DAEGU_BACK:"#C4C4C4"}),(function(n){return n.teamCheck===p.HAVE?h.DAEGU_BACK:"#C4C4C4"}),(function(n){return n.teamCheck===p.HAVE?h.GWANGJU_BACK:"white"})),Kn=Object(C.b)(Un)(hn||(hn=Object(m.a)(["\ndisplay: ",";\nbackground-color: ",";\nborder: 1px solid ",";\n/* ","; */\n\n"])),(function(n){return n.teamCheck===p.NOTAPPLICABLE&&"none"}),(function(n){return n.teamCheck===p.HAVE?h.DAEDEOK_BACK:"#C4C4C4"}),(function(n){return n.teamCheck===p.HAVE?h.DAEDEOK_BACK:"#C4C4C4"}),(function(n){return n.teamCheck===p.HAVE?h.GWANGJU_BACK:"white"}));function Mn(){return(Mn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function _n(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var zn=j.createElement("path",{d:"M15.125 7.625H8.875C8.54348 7.625 8.22554 7.7567 7.99112 7.99112C7.7567 8.22554 7.625 8.54348 7.625 8.875V15.125C7.625 15.4565 7.7567 15.7745 7.99112 16.0089C8.22554 16.2433 8.54348 16.375 8.875 16.375H15.125C15.4565 16.375 15.7745 16.2433 16.0089 16.0089C16.2433 15.7745 16.375 15.4565 16.375 15.125V8.875C16.375 8.54348 16.2433 8.22554 16.0089 7.99112C15.7745 7.7567 15.4565 7.625 15.125 7.625ZM12 14.5C11.5055 14.5 11.0222 14.3534 10.6111 14.0787C10.2 13.804 9.87952 13.4135 9.6903 12.9567C9.50108 12.4999 9.45157 11.9972 9.54804 11.5123C9.6445 11.0273 9.8826 10.5819 10.2322 10.2322C10.5819 9.8826 11.0273 9.6445 11.5123 9.54804C11.9972 9.45157 12.4999 9.50108 12.9567 9.6903C13.4135 9.87952 13.804 10.2 14.0787 10.6111C14.3534 11.0222 14.5 11.5055 14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5ZM14.8125 9.96875C14.658 9.96875 14.5069 9.92293 14.3785 9.83709C14.25 9.75124 14.1498 9.62923 14.0907 9.48647C14.0316 9.34372 14.0161 9.18663 14.0463 9.03509C14.0764 8.88354 14.1508 8.74433 14.2601 8.63507C14.3693 8.52581 14.5085 8.45141 14.6601 8.42126C14.8116 8.39112 14.9687 8.40659 15.1115 8.46572C15.2542 8.52485 15.3762 8.62498 15.4621 8.75346C15.5479 8.88194 15.5937 9.03298 15.5937 9.1875C15.5937 9.3947 15.5114 9.59341 15.3649 9.73993C15.2184 9.88644 15.0197 9.96875 14.8125 9.96875Z",fill:"#16A254"}),In=j.createElement("path",{d:"M12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25Z",fill:"#16A254"}),Sn=j.createElement("path",{d:"M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 9.34783 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2V2ZM17.625 15.125C17.625 15.788 17.3616 16.4239 16.8928 16.8928C16.4239 17.3616 15.788 17.625 15.125 17.625H8.875C8.21196 17.625 7.57608 17.3616 7.10724 16.8928C6.6384 16.4239 6.375 15.788 6.375 15.125V8.875C6.375 8.21196 6.6384 7.57607 7.10724 7.10723C7.57608 6.63839 8.21196 6.375 8.875 6.375H15.125C15.788 6.375 16.4239 6.63839 16.8928 7.10723C17.3616 7.57607 17.625 8.21196 17.625 8.875V15.125Z",fill:"#16A254"});function Bn(n,e){var t=n.title,r=n.titleId,c=_n(n,["title","titleId"]);return j.createElement("svg",Mn({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},c),t?j.createElement("title",{id:r},t):null,zn,In,Sn)}var Hn=j.forwardRef(Bn);t.p;function Jn(){return(Jn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Wn(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var Vn=j.createElement("path",{d:"M9.14209 11.8765H10.6888L9.9 10.1L9.14209 11.8765Z",fill:"#16A254"}),Pn=j.createElement("path",{d:"M12.0454 3.00019C2.40671 2.94945 -2.06234 13.1257 6.70334 17.6461C6.54924 18.1772 5.71345 21.0633 5.68019 21.2901C5.6564 21.4675 5.79134 21.616 6.0105 21.54C6.32692 21.4958 9.67913 19.141 10.2593 18.7322C24.1589 20.3958 26.896 3.63871 12.0454 3.00019ZM7.06587 13.1423C7.04692 13.8711 5.92545 13.8739 5.90566 13.1423V9.69597H5.0004C4.25071 9.67703 4.24924 8.57934 5.0004 8.55997H7.97092C8.72103 8.57976 8.72208 9.67597 7.97092 9.69597H7.06566V13.1423H7.06587ZM11.9414 13.6088C11.681 13.7461 11.1774 13.7128 11.0899 13.4326L10.8025 12.6806H9.03345L8.74608 13.433C8.65892 13.7126 8.15492 13.7463 7.89492 13.6088C7.73492 13.5351 7.58124 13.3322 7.75745 12.785L9.14502 9.13261C9.42902 8.38355 10.4057 8.38018 10.6913 9.13324L12.0785 12.784C12.2551 13.3322 12.1014 13.5351 11.9414 13.6088ZM14.8734 13.6115H13.0122C12.7057 13.6115 12.4562 13.373 12.4562 13.0798V9.13976C12.4762 8.37618 13.6202 8.37387 13.6406 9.13976V12.548H14.8734C15.6057 12.5661 15.6073 13.593 14.8734 13.6115ZM19.4147 13.1747C19.3631 13.672 18.6642 13.8553 18.3772 13.4438L17.0168 11.6412L16.8155 11.8425V13.1082C16.7964 13.8718 15.6751 13.8747 15.6551 13.1084V9.13976C15.6753 8.37555 16.7949 8.37408 16.8153 9.13976V10.3867L18.4339 8.76818C18.628 8.57134 18.9656 8.61366 19.1549 8.8105C19.3518 8.99766 19.3945 9.33913 19.1974 9.53155L17.8753 10.8534L19.3033 12.7452C19.3966 12.8675 19.4366 13.0225 19.4147 13.1747Z",fill:"#16A254"});function Rn(n,e){var t=n.title,r=n.titleId,c=Wn(n,["title","titleId"]);return j.createElement("svg",Jn({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},c),t?j.createElement("title",{id:r},t):null,Vn,Pn)}var Zn,qn=j.forwardRef(Rn);t.p;!function(n){n.KAKAOTALK="\uce74\uce74\uc624\ud1a1ID",n.DISCORD="\ub514\uc2a4\ucf54\ub4dc",n.INSTAGRAM="\uc778\uc2a4\ud0c0\uadf8\ub7a8"}(Zn||(Zn={}));var Qn,Xn,Yn,$n,ne,ee,te,re,ce=t.p+"static/media/discord.986fe972.svg",ie=t.p+"static/media/daeguDiscord.580e7c63.svg",oe=t.p+"static/media/daedeokDiscord.c7846433.svg",ae=function(n){return n===d.DAEDEOK?oe:n===d.DAEGU?ie:ce},se=function(n){return!1===n?p.NOTHAVE:!0===n?p.HAVE:p.NOTAPPLICABLE},le=function(n){var e=n.cardInfo,t=e.name1,r=e.name2,c=e.github1,i=e.github2,o=e.position1,a=e.position2,s=e.intro,l=e.contactType,b=e.contact,u=e.daeguTeam,d=e.gwangjuTeam,h=e.daedoekTeam,p=e.school,j=e.isMatch,f=Object(C.b)(Hn)(Qn||(Qn=Object(m.a)(["\n  width: 20px;\n  height: 20px;\n  path {\n    fill: ","!important;\n  }\n  "])),(function(n){return fn(n.school)})),x=Object(C.b)(qn)(Xn||(Xn=Object(m.a)(["\n  width: 20px;\n  height: 20px;\n  path {\n    fill: ","!important;\n  }\n  "])),(function(n){return fn(n.school)}));return Object(V.jsxs)(xn,{isMatch:j,children:[Object(V.jsx)(On,{isAllMatch:function(){var n=0;return u&&n++,d&&n++,h&&n++,2===n}()}),Object(V.jsxs)(gn,{children:[Object(V.jsx)(Cn,{children:Object(V.jsxs)(mn,{children:[Object(V.jsx)(vn,{school:p,children:o}),Object(V.jsx)(An,{onClick:function(){return window.open("https://github.com/".concat(c))},children:t}),Object(V.jsx)(En,{onClick:function(){return window.open("https://github.com/".concat(c))},children:c})]})}),Object(V.jsxs)(Cn,{children:[Object(V.jsx)(vn,{school:p,children:a}),Object(V.jsx)(An,{onClick:function(){return window.open("https://github.com/".concat(i))},children:r}),Object(V.jsx)(En,{onClick:function(){return window.open("https://github.com/".concat(i))},children:i})]}),Object(V.jsx)(Nn,{children:!j&&Object(V.jsxs)(Fn,{children:[Object(V.jsx)(Ln,{teamCheck:se(d)}),Object(V.jsx)(Tn,{teamCheck:se(u)}),Object(V.jsx)(Kn,{teamCheck:se(h)})]})})]}),Object(V.jsxs)(wn,{children:[Object(V.jsx)(Dn,{fontLength:s.length,children:s}),!j&&Object(V.jsxs)(yn,{school:p,onClick:function(){return function(n,e){if(n!==Zn.INSTAGRAM){var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4")}else window.open("https://www.instagram.com/".concat(e))}(l,b)},children:[l===Zn.DISCORD&&Object(V.jsx)(Gn,{src:ae(p)}),l===Zn.INSTAGRAM&&Object(V.jsx)(f,{school:p}),l===Zn.KAKAOTALK&&Object(V.jsx)(x,{school:p}),Object(V.jsxs)(kn,{school:p,fontLength:b.length,children:[l===Zn.INSTAGRAM&&"@",b]})]})]})]})},be=t.p+"static/media/plus.9758c3ba.svg",ue=t.p+"static/media/noConnectTeam.d046ef57.svg",de=C.b.div(Yn||(Yn=Object(m.a)(["\ndisplay: flex;\nflex-wrap: wrap;\nwidth: 75vw;\nmargin-left: 12.5vw;\npadding: 20px 0 20px 0;\ngap: .75vw;\nz-index: -2;\n"]))),he=(C.b.div($n||($n=Object(m.a)(["\nwidth: 70vw;\nmargin-left: 12.5vw;\n"]))),Object(C.b)(de)(ne||(ne=Object(m.a)(["\nwidth: 70vw;\nalign-items: center;\ngap: 5px !important;\npadding-top: 0px;\ndisplay: inline-flex !important;\nflex-wrap: column;\n"])))),pe=C.b.div(ee||(ee=Object(m.a)(["\nwidth: 20px;\nheight: 20px;\nborder-radius: 50%;\nbox-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))),je=C.b.div(te||(te=Object(m.a)(["\nmargin-top: 5vw;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\n"]))),fe=C.b.span(re||(re=Object(m.a)(["\nfont-size: 24px;\nline-height: 40px;\ntext-align: center;\ncolor: #494949;\nfont-weight: 100;\n"]))),xe=function(){var n=W().connect,e=n.map((function(n){return Object(V.jsxs)(he,{children:[Object(V.jsx)(le,{cardInfo:Object(R.a)(Object(R.a)({isMatch:!0,school:d.GWANGJU},n.gwangju),{},{daeguTeam:!1})},n.idx),Object(V.jsx)(pe,{children:Object(V.jsx)("embed",{src:be})}),Object(V.jsx)(le,{cardInfo:Object(R.a)(Object(R.a)({isMatch:!0,school:d.DAEGU},n.daegu),{},{gwangjuTeam:!1})},n.idx),Object(V.jsx)(pe,{children:Object(V.jsx)("embed",{src:be})}),Object(V.jsx)(le,{cardInfo:Object(R.a)(Object(R.a)({isMatch:!0,school:d.DAEDEOK},n.daedoek),{},{daeguTeam:!1})},n.idx)]})}));return n.length<=0?Object(V.jsxs)(je,{children:[Object(V.jsx)("embed",{src:ue}),Object(V.jsx)(fe,{children:"\uc544\uc9c1 \ub9e4\uce6d\ub41c \ud300\uc774 \uc5c6\uc2b5\ub2c8\ub2e4..."}),Object(V.jsx)(fe,{children:"\uc5f0\uacb0\ud558\ub7ec\uac00\ubcfc\uae4c\uc694?"})]}):Object(V.jsx)(V.Fragment,{children:e})},Oe=function(){var n=W().connectList;return Object(j.useEffect)((function(){n()}),[]),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(P,{}),Object(V.jsx)(xe,{})]})},ge=Object(O.b)({key:"schoolState",default:d.GWANGJU}),me=function(){var n=Object(O.c)(ge),e=Object(_.a)(n,2);return{school:e[0],setSchool:e[1]}},Ce=t.p+"static/media/arrow.ca1b8ff8.svg";function ve(){return(ve=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Ae(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var Ee=j.createElement("path",{d:"M4 5L0.535898 0.5L7.4641 0.5L4 5Z",fill:"#6292E7"});function we(n,e){var t=n.title,r=n.titleId,c=Ae(n,["title","titleId"]);return j.createElement("svg",ve({width:8,height:5,viewBox:"0 0 8 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},c),t?j.createElement("title",{id:r},t):null,Ee)}var De,ye,Ge,ke,Ne,Fe,Ue,Le,Te,Ke=j.forwardRef(we),Me=(t.p,C.b.div(De||(De=Object(m.a)(["\nwidth: 180px;\nheight: 50px;\n"])))),_e=C.b.div(ye||(ye=Object(m.a)(["\ndisplay: flex;\nposition: relative;\n"]))),ze=C.b.div(Ge||(Ge=Object(m.a)(["\nposition: absolute;\n"]))),Ie=C.b.div(ke||(ke=Object(m.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 182px;\nheight: 50px;\nborder: 1px solid #F3F3F3;\nborder-bottom: 0px;\nbackground-color: ",";\ncolor: ",";\nfont-size: 18px;\nfont-style: normal;\nfont-weight: normal;\nz-index:1;\ncursor: pointer;\n\n&:first-child {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n};\n\n&:last-child {\n  border-bottom: 1px solid #F3F3F3;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n};\n"])),(function(n){return n.position?fn(n.school):"white"}),(function(n){return n.position?"white":"#191919"})),Se=C.b.div(Ne||(Ne=Object(m.a)(["\ndisplay: flex;\nwidth: 100%;\nheight: 100%;\nborder: 1px solid #F3F3F3;\nbox-sizing: border-box;\nbox-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);\nborder-radius: 10px;\nappearance: none;\nbackground-color: white;\nalign-items: center;\njustify-content: center;\ncursor: pointer;\n"]))),Be=(C.b.span(Fe||(Fe=Object(m.a)(["\n-webkit-box-flex: 1;\nflex: 1 1 auto;\n"]))),C.b.span(Ue||(Ue=Object(m.a)(["\ndisplay: flex;\nalign-items:center;\njustify-content: center;\nfont-size: 1.3em;\nfont-weight: 500;\ncolor: ",";\n"])),(function(n){return fn(n.school)})));C.b.embed(Le||(Le=Object(m.a)(["\nwidth: .5rem;\nheight: .4rem;\n"])));!function(n){n.ALL="\ud3ec\uc9c0\uc158 \uc804\uccb4",n.FRONT="\ud504\ub860\ud2b8\uc5d4\ub4dc",n.BACK="\ubc31\uc5d4\ub4dc",n.ANDROID="\uc548\ub4dc\ub85c\uc774\ub4dc",n.IOS="ios",n.DESIGN="\ub514\uc790\uc774\ub108",n.EMBEDED="\uc784\ubca0\ub514\ub4dc",n.AI="\uc778\uacf5\uc9c0\ub2a5",n.GAME="\uac8c\uc784"}(Te||(Te={}));var He,Je,We,Ve,Pe,Re,Ze,qe,Qe,Xe,Ye,$e,nt,et,tt=Object(O.b)({key:"positionState",default:Te.ALL}),rt=function(){var n=Object(j.useState)(!1),e=Object(_.a)(n,2),t=e[0],r=e[1],c=Object(O.c)(tt),i=Object(_.a)(c,2),o=i[0],a=i[1],s=function(){return r(!1)};return{isSelectOpen:t,openModal:function(){return r(!0)},closeModal:s,position:o,modalClicked:function(n){a(n),s()}}},ct=function(){var n=rt(),e=n.isSelectOpen,t=n.closeModal,r=n.openModal,c=n.position,i=n.modalClicked,o=me().school,a=Object(j.useRef)(null),s=Object(j.useCallback)((function(n){a.current&&!a.current.contains(n.target)&&t()}),[a,t]);Object(j.useEffect)((function(){return document.addEventListener("mousedown",s),function(){document.removeEventListener("mousedown",s)}}),[s]);var l=Object.values(Te).map((function(n){return Object(V.jsx)(Ie,{school:o,position:n===c,onClick:function(){return i(n)},children:n},n)})),b=Object(C.b)(Ke)(He||(He=Object(m.a)(["\n    width: .5rem;\n    height: .4rem;\n    path {\n      fill: ","!important;\n    }\n  "])),(function(n){return fn(n.school)}));return Object(V.jsx)(Me,{children:e?Object(V.jsx)(_e,{ref:a,children:Object(V.jsx)(ze,{children:l})}):Object(V.jsx)(Se,{onClick:function(){return r()},children:Object(V.jsxs)(Be,{school:o,children:[c," \xa0",Object(V.jsx)(b,{school:o})]})})})},it=C.b.div(Je||(Je=Object(m.a)(["\nwidth: 100%;\nbackground-color: ",";\njustify-content: center;\n"])),(function(n){return(e=n.school)===d.DAEGU?h.DAEGU_HEADER:e===d.GWANGJU?h.GWANGJU_HEADER:h.DAEDEOK_HEADER;var e})),ot=C.b.div(We||(We=Object(m.a)(["\nwidth: 75vw;\ntop: 0;\nmargin-left: 12.5vw;\n"]))),at=C.b.div(Ve||(Ve=Object(m.a)(["\nfont-size: 1.4rem;\ncolor: ",";\ncolor: ",";\nfont-family: Gmarket Sans;\nline-height: 25px;\n"])),(function(n){return pn(n.school)}),(function(n){return pn(n.school)})),st=C.b.div(Pe||(Pe=Object(m.a)(["\nmargin-top: 19px;\ndisplay: flex;\nalign-items: center;\ncolor: #747474;\nfont-size: 1.3rem;\nfont-family: paybooc OTF Medium;\nline-height: 39px;\n"]))),lt=C.b.span(Re||(Re=Object(m.a)(["\ncolor: ",";\n"])),(function(n){return pn(n.school)})),bt=C.b.div(Ze||(Ze=Object(m.a)(["\ndisplay: flex;\nflex-wrap: wrap;\npadding: 1.6vw 0 1.6rem 0;\n"]))),ut=C.b.div(qe||(qe=Object(m.a)(["\nwidth: 100%;\nheight: 70px;\nbackground-color: #ffffff;\nborder: 1px solid #F3F3F3;\nbox-sizing: border-box;\nborder-collapse: collapse;\n"]))),dt=C.b.div(Qe||(Qe=Object(m.a)(["\ndisplay: flex;\nwidth: 75vw;\nheight: 100%;\nmargin-left: 12.5vw;\n"]))),ht=C.b.span(Xe||(Xe=Object(m.a)(["\n-webkit-box-flex: 1;\nflex: 1 1 auto;\n"]))),pt=Object(C.b)(ht)(Ye||(Ye=Object(m.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 1.5rem;\nborder: 1px solid ",";\nborder-collapse: collapse;\nbox-sizing: border-box;\ncolor: ",";\nbackground-color: ",";\nmargin: 0 auto;\ncursor: pointer;\n"])),(function(n){return n.school?jn(n.schoolCheck):"#F3F3F3"}),(function(n){return n.school?"white":"#E7E7E7"}),(function(n){return n.school?jn(n.schoolCheck):"white"})),jt=C.b.div($e||($e=Object(m.a)(["\nwidth: 180px;\nheight: 50px;\nborder: 1px solid #F3F3F3;\nbox-sizing: border - box;\nbox-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);\nborder-radius: 10px;\nappearance: none;\n"]))),ft=C.b.div(nt||(nt=Object(m.a)(["\nwidth: 180px;\nheight: 50px;\nbackground-color: ",";\nmargin-bottom: 10px;\nborder-radius: 10px;\ncolor: white;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nfont-size: 18px;\nfont-weight: 500;\ncursor: pointer;\nmargin: 3px 0 10px 0;\n"])),(function(n){return fn(n.schoolCheck)})),xt=C.b.img(et||(et=Object(m.a)(["\nwidth: 20px;\nheight: 20px;\n"]))),Ot=function(){var n=me(),e=n.school,t=n.setSchool;return Object(V.jsxs)(it,{school:e,children:[Object(V.jsx)(ot,{children:Object(V.jsxs)(bt,{children:[Object(V.jsxs)("div",{children:[Object(V.jsx)(at,{school:e,children:"Amanda"}),Object(V.jsx)(st,{children:Object(V.jsxs)("div",{children:["\uc6b0\ub9ac \ud300\uacfc \ub531 \ub9de\ub294 \ud300\ub4e4\uc744 \ucc3e\uace0\uc788\ub2e4\uba74 ",Object(V.jsx)("br",{}),Object(V.jsx)(lt,{school:e,children:"\uc544\ub9cc\ub2e4"}),"\ub97c \ud1b5\ud574 \uc6d0\ud558\ub294 ",Object(V.jsx)("span",{children:" "}),Object(V.jsx)(lt,{school:e,children:"\ud3ec\uc9c0\uc158\ubcc4"}),"\ub85c \ud300\uc744 \ucc3e\uc544\ubcf4\uc138\uc694!"]})})]}),Object(V.jsx)(ht,{}),Object(V.jsxs)("div",{children:[Object(V.jsxs)(ft,{schoolCheck:e,onClick:function(){return window.location.href="/#/connect"},children:["\ub9e4\uce6d \uc644\ub8cc \ud300 ",Object(V.jsx)(xt,{src:Ce})]}),Object(V.jsx)(jt,{children:Object(V.jsx)(ct,{})})]})]})}),Object(V.jsx)(ut,{children:Object(V.jsxs)(dt,{children:[Object(V.jsx)(pt,{school:e===d.GWANGJU,schoolCheck:e,onClick:function(){return t(d.GWANGJU)},children:"\uad11\uc8fc"}),Object(V.jsx)(pt,{school:e===d.DAEGU,schoolCheck:e,onClick:function(){return t(d.DAEGU)},children:"\ub300\uad6c"}),Object(V.jsx)(pt,{school:e===d.DAEDEOK,schoolCheck:e,onClick:function(){return t(d.DAEDEOK)},children:"\ub300\ub355"})]})})]})},gt=function(){var n=Object(M.a)(K.a.mark((function n(){var e,t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/daegu",n.next=3,B.get("/daegu");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),mt=function(){var n=Object(M.a)(K.a.mark((function n(){var e,t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/daedeok",n.next=3,B.get("/daedeok");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Ct=function(){var n=Object(M.a)(K.a.mark((function n(){var e,t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/gwangju",n.next=3,B.get("/gwangju");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),vt=function(){var n=Object(j.useState)([]),e=Object(_.a)(n,2),t=e[0],r=e[1],c=Object(j.useState)([]),i=Object(_.a)(c,2),o=i[0],a=i[1],s=Object(j.useState)([]),l=Object(_.a)(s,2),b=l[0],u=l[1];return{dague:t,daedeok:o,gwangju:b,userList:function(){var n=Object(M.a)(K.a.mark((function n(){var e;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.all([gt(),mt(),Ct()]);case 3:e=n.sent,r(e[d.DAEGU]),a(e[d.DAEDEOK]),u(e[d.GWANGJU]),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}()}},At=function(n){return void 0===n||null===n||""===n},Et=function(n){return!At(n.name1)&&(!At(n.name2)&&(!At(n.github1)&&(!At(n.github2)&&(!At(n.position1)&&(!At(n.position2)&&(!At(n.intro)&&!At(n.contact)))))))},wt=function(n,e,t){return t===Te.ALL||(t===n||t===e)},Dt=function(){var n=vt(),e=n.dague,t=n.daedeok,r=n.gwangju,c=n.userList,i=me().school,o=rt().position;Object(j.useEffect)((function(){c()}),[]);var a=e.filter((function(n){var e=n.position1,t=n.position2;return wt(e,t,o)})).filter((function(n){return Et(n)})).map((function(n){return Object(V.jsx)(le,{cardInfo:Object(R.a)({isMatch:!1,school:d.DAEGU},n)},n.name1)})),s=t.filter((function(n){var e=n.position1,t=n.position2;return wt(e,t,o)})).filter((function(n){return Et(n)})).map((function(n){return Object(V.jsx)(le,{cardInfo:Object(R.a)({isMatch:!1,school:d.DAEDEOK},n)},n.name1)})),l=r.filter((function(n){var e=n.position1,t=n.position2;return wt(e,t,o)})).filter((function(n){return Et(n)})).map((function(n){return Object(V.jsx)(le,{cardInfo:Object(R.a)({isMatch:!1,school:d.GWANGJU},n)},n.name1)}));return Object(V.jsxs)(de,{children:[i===d.GWANGJU&&l,i===d.DAEGU&&a,i===d.DAEDEOK&&s]})},yt=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Ot,{}),Object(V.jsx)(Dt,{})]})},Gt=function(){return Object(V.jsxs)(A.c,{children:[Object(V.jsx)(A.a,{path:"/connect",component:Oe}),Object(V.jsx)(A.a,{path:"/",component:yt})]})},kt=function(){return Object(V.jsx)(O.a,{children:Object(V.jsxs)(g.a,{children:[Object(V.jsx)(v,{}),Object(V.jsx)(Gt,{})]})})};x.a.render(Object(V.jsx)(kt,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.d2eb5bed.chunk.js.map