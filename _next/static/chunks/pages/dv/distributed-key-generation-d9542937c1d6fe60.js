(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{35551:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dv/distributed-key-generation",function(){return e(67398)}])},67398:function(t,n,e){"use strict";e.r(n);var r=e(85893),o=e(70695),a=e(71553),i=e(67294),u=e(92389),c=e(37274),s=e(48847),l=e(11163);function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){f(t,n,e[n])}))}return t}var d=function(){var t=(0,c.o)((function(t){return t.dkgData})),n=(0,l.useRouter)(),e=(0,c.o)((0,i.useCallback)((function(t){return t.completeOperatorStep}),[])),f=function(){e("dv-dkg"),n.push("/deposit/advisories#groupFlow")},d="configHash",m=n.query[d]||n.asPath.match(new RegExp("[&?]".concat(d,"=(.*)(&|$)"))),b=(0,c.o)((function(t){return t.clusterDefinitionData})),v=(null===b||void 0===b?void 0:b.config_hash)||(Array.isArray(m)?m[1]:m),g=(0,i.useState)(t.map((function(t,n){var e=t.contentTitle,o=t.textContentSection,a=t.commands,i=t.actions,c=t.enableNextStep,l=t.rank,p=t.term,d=t.title,m=t.value;return{content:function(t,n,c,s){return(0,r.jsx)(u.n,{contentTitle:e,textContentSection:o,commands:null===a||void 0===a?void 0:a.map((function(t){return t.includes("{configHash}")&&"string"===typeof v?t.replace("{configHash}",v):t})),actions:i,rank:t,onAccept:c,onBack:s,enableNextStep:n,term:p,onSubmit:f})},enableNextStep:c,rank:l,state:(0,s.d$)(n),title:d,value:m,term:p}}))),h=g[0],k=g[1],y=(0,i.useState)(h[0]),w=y[0],S=y[1];return(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl",width:"auto",margin:"0 -12.5%"},children:[(0,r.jsx)(a.xv,{variant:"h3",children:"Distributed Key Generation"}),(0,r.jsx)(a.I,{itemSelected:w,items:h,onItemChange:function(t){S(t)},onComplete:function(){},onUpdateState:function(t){k(h.map((function(n){return n.rank===t+1?(S(n),p({},n,{state:"enabled"})):n})))},onBack:function(t){k(h.map((function(n){return n.rank===t?p({},n,{state:"upcoming"}):n})));var n=h.find((function(n){return n.rank===t-1}));n&&S(n)}})]})};n.default=d,d.layout="OperatorProgressTrackerLayout"}},function(t){t.O(0,[774,888,179],(function(){return n=35551,t(t.s=n);var n}));var n=t.O();_N_E=n}]);