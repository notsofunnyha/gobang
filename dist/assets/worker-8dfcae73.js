var Dn=Object.defineProperty;var Cn=(R,$,Y)=>$ in R?Dn(R,$,{enumerable:!0,configurable:!0,writable:!0,value:Y}):R[$]=Y;var W=(R,$,Y)=>(Cn(R,typeof $!="symbol"?$+"":$,Y),Y);(function(){"use strict";const rt={l1:1,d2:8,l2:64,l2x2:128,d3:512,l3:4096,d4:16384,l4:65536,l5:262144},G=r=>({l1:r&7,d2:(r&56)>>3,l2:(r&960)>>6,d3:(r&7680)>>9,l3:(r&12288)>>12,d4:(r&49152)>>14,l4:(r&196608)>>16,l5:(r&786432)>>18}),y={l1:1,d2:2,d3:3,l2:8,l2x2:16,l3:30,d4:50,l4:500,l5:1e3,win:1e4},ot=r=>{const{l5:t,l4:n,d4:e,l3:o,d3:a,l2:f,d2:u,l1:i}=r;let l=0;return t&&(l+=y.l5*t),n&&(l+=y.l4*n),e&&(l+=y.d4*e),o&&(l+=y.l3*o),a&&(l+=y.d3*a),f&&(l+=y.l2*f),u&&(l+=y.d2*u),i&&(l+=y.l1*i),l};console.warn("todo: 测试 countLine 是否正确");const wt=(r,t,n)=>e=>{let o=1;for(let a=0;a<e.length;a++){const f=e[a];if(a<4)o<<=1,f===r?o+=1:(f===t||f===n)&&(o=1);else if(a===4)o<<=1,o+=1;else{if(f===t||f===n)break;o<<=1,f===r&&(o+=1)}}return o},T=(r=>{let t=[],n=2**(r+1);for(;n-- >0;)t.push("0b"+n.toString(2));return t})(12),yt=r=>/010/.test(r)&&r.length>5,Mt=r=>/10{0,1}1/.test(r)&&r.length>=5,St=r=>[/000110/,/001100/,/011000/,/001010/,/010100/].some(t=>t.test(r)),kt=r=>/0101010/.test(r),Pt=r=>[/111/,/1011/,/1101/,/11001/,/10011/,/10101/].some(t=>t.test(r))&&r.length>=5,Lt=r=>[/010110/,/011010/,/01110/,/1010101/].some(t=>t.test(r)),_t=r=>[/11110/,/01111/,/11011/,/11101/,/10111/].some(t=>t.test(r)),Et=r=>[/011110/,/1011101/,/11011011/,/111010111/].some(t=>t.test(r)),At=r=>/1{5}/.test(r),j=[],{l5:Nt,l4:Dt,d4:Ct,l3:jt,d3:Xt,l2:Ft,l2x2:Tt,d2:zt,l1:Ot}=rt;T.forEach(r=>yt(r.slice(3))&&"l1"&&(j[+r]=Ot)),T.forEach(r=>Mt(r.slice(3))&&"d2"&&(j[+r]=zt)),T.forEach(r=>St(r.slice(3))&&"l2"&&(j[+r]=Ft)),T.forEach(r=>Pt(r.slice(3))&&"d3"&&(j[+r]=Xt)),T.forEach(r=>kt(r.slice(3))&&"l2x2"&&(j[+r]=Tt)),T.forEach(r=>Lt(r.slice(3))&&"l3"&&(j[+r]=jt)),T.forEach(r=>_t(r.slice(3))&&"d4"&&(j[+r]=Ct)),T.forEach(r=>Et(r.slice(3))&&"l4"&&(j[+r]=Dt)),T.forEach(r=>At(r.slice(3))&&"l5"&&(j[+r]=Nt));const F=(r,t=void 0,n=!1)=>(typeof t=="object"&&!n&&console.error(`
    val 为"引用类型"时, 请明确传递参数 yesHereIsObjectVal
    另外: 对于"引用类型", arrayN 使用 structuredClone 处理 val, 防止多个变量指向相同引用`),Array(r).fill().map(()=>structuredClone(t))),st=r=>new Promise(t=>setTimeout(t,r));var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $t(r){if(r.__esModule)return r;var t=r.default;if(typeof t=="function"){var n=function e(){if(this instanceof e){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach(function(e){var o=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,o.get?o:{enumerable:!0,get:function(){return r[e]}})}),n}var K={},Gt={get exports(){return K},set exports(r){K=r}};(function(r){(function(t,n,e){function o(i){var l=this,h=u();l.next=function(){var s=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=s-(l.c=s|0)},l.c=1,l.s0=h(" "),l.s1=h(" "),l.s2=h(" "),l.s0-=h(i),l.s0<0&&(l.s0+=1),l.s1-=h(i),l.s1<0&&(l.s1+=1),l.s2-=h(i),l.s2<0&&(l.s2+=1),h=null}function a(i,l){return l.c=i.c,l.s0=i.s0,l.s1=i.s1,l.s2=i.s2,l}function f(i,l){var h=new o(i),s=l&&l.state,c=h.next;return c.int32=function(){return h.next()*4294967296|0},c.double=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.quick=c,s&&(typeof s=="object"&&a(s,h),c.state=function(){return a(h,{})}),c}function u(){var i=4022871197,l=function(h){h=String(h);for(var s=0;s<h.length;s++){i+=h.charCodeAt(s);var c=.02519603282416938*i;i=c>>>0,c-=i,c*=i,i=c>>>0,c-=i,i+=c*4294967296}return(i>>>0)*23283064365386963e-26};return l}n&&n.exports?n.exports=f:e&&e.amd?e(function(){return f}):this.alea=f})(q,r,!1)})(Gt);var Z={},qt={get exports(){return Z},set exports(r){Z=r}};(function(r){(function(t,n,e){function o(u){var i=this,l="";i.x=0,i.y=0,i.z=0,i.w=0,i.next=function(){var s=i.x^i.x<<11;return i.x=i.y,i.y=i.z,i.z=i.w,i.w^=i.w>>>19^s^s>>>8},u===(u|0)?i.x=u:l+=u;for(var h=0;h<l.length+64;h++)i.x^=l.charCodeAt(h)|0,i.next()}function a(u,i){return i.x=u.x,i.y=u.y,i.z=u.z,i.w=u.w,i}function f(u,i){var l=new o(u),h=i&&i.state,s=function(){return(l.next()>>>0)/4294967296};return s.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,b=(c+d)/(1<<21);while(b===0);return b},s.int32=l.next,s.quick=s,h&&(typeof h=="object"&&a(h,l),s.state=function(){return a(l,{})}),s}n&&n.exports?n.exports=f:e&&e.amd?e(function(){return f}):this.xor128=f})(q,r,!1)})(qt);var U={},Bt={get exports(){return U},set exports(r){U=r}};(function(r){(function(t,n,e){function o(u){var i=this,l="";i.next=function(){var s=i.x^i.x>>>2;return i.x=i.y,i.y=i.z,i.z=i.w,i.w=i.v,(i.d=i.d+362437|0)+(i.v=i.v^i.v<<4^(s^s<<1))|0},i.x=0,i.y=0,i.z=0,i.w=0,i.v=0,u===(u|0)?i.x=u:l+=u;for(var h=0;h<l.length+64;h++)i.x^=l.charCodeAt(h)|0,h==l.length&&(i.d=i.x<<10^i.x>>>4),i.next()}function a(u,i){return i.x=u.x,i.y=u.y,i.z=u.z,i.w=u.w,i.v=u.v,i.d=u.d,i}function f(u,i){var l=new o(u),h=i&&i.state,s=function(){return(l.next()>>>0)/4294967296};return s.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,b=(c+d)/(1<<21);while(b===0);return b},s.int32=l.next,s.quick=s,h&&(typeof h=="object"&&a(h,l),s.state=function(){return a(l,{})}),s}n&&n.exports?n.exports=f:e&&e.amd?e(function(){return f}):this.xorwow=f})(q,r,!1)})(Bt);var Q={},Ht={get exports(){return Q},set exports(r){Q=r}};(function(r){(function(t,n,e){function o(u){var i=this;i.next=function(){var h=i.x,s=i.i,c,d;return c=h[s],c^=c>>>7,d=c^c<<24,c=h[s+1&7],d^=c^c>>>10,c=h[s+3&7],d^=c^c>>>3,c=h[s+4&7],d^=c^c<<7,c=h[s+7&7],c=c^c<<13,d^=c^c<<9,h[s]=d,i.i=s+1&7,d};function l(h,s){var c,d=[];if(s===(s|0))d[0]=s;else for(s=""+s,c=0;c<s.length;++c)d[c&7]=d[c&7]<<15^s.charCodeAt(c)+d[c+1&7]<<13;for(;d.length<8;)d.push(0);for(c=0;c<8&&d[c]===0;++c);for(c==8?d[7]=-1:d[c],h.x=d,h.i=0,c=256;c>0;--c)h.next()}l(i,u)}function a(u,i){return i.x=u.x.slice(),i.i=u.i,i}function f(u,i){u==null&&(u=+new Date);var l=new o(u),h=i&&i.state,s=function(){return(l.next()>>>0)/4294967296};return s.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,b=(c+d)/(1<<21);while(b===0);return b},s.int32=l.next,s.quick=s,h&&(h.x&&a(h,l),s.state=function(){return a(l,{})}),s}n&&n.exports?n.exports=f:e&&e.amd?e(function(){return f}):this.xorshift7=f})(q,r,!1)})(Ht);var I={},Wt={get exports(){return I},set exports(r){I=r}};(function(r){(function(t,n,e){function o(u){var i=this;i.next=function(){var h=i.w,s=i.X,c=i.i,d,b;return i.w=h=h+1640531527|0,b=s[c+34&127],d=s[c=c+1&127],b^=b<<13,d^=d<<17,b^=b>>>15,d^=d>>>12,b=s[c]=b^d,i.i=c,b+(h^h>>>16)|0};function l(h,s){var c,d,b,v,m,p=[],C=128;for(s===(s|0)?(d=s,s=null):(s=s+"\0",d=0,C=Math.max(C,s.length)),b=0,v=-32;v<C;++v)s&&(d^=s.charCodeAt((v+32)%s.length)),v===0&&(m=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,v>=0&&(m=m+1640531527|0,c=p[v&127]^=d+m,b=c==0?b+1:0);for(b>=128&&(p[(s&&s.length||0)&127]=-1),b=127,v=4*128;v>0;--v)d=p[b+34&127],c=p[b=b+1&127],d^=d<<13,c^=c<<17,d^=d>>>15,c^=c>>>12,p[b]=d^c;h.w=m,h.X=p,h.i=b}l(i,u)}function a(u,i){return i.i=u.i,i.w=u.w,i.X=u.X.slice(),i}function f(u,i){u==null&&(u=+new Date);var l=new o(u),h=i&&i.state,s=function(){return(l.next()>>>0)/4294967296};return s.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,b=(c+d)/(1<<21);while(b===0);return b},s.int32=l.next,s.quick=s,h&&(h.X&&a(h,l),s.state=function(){return a(l,{})}),s}n&&n.exports?n.exports=f:e&&e.amd?e(function(){return f}):this.xor4096=f})(q,r,!1)})(Wt);var J={},Rt={get exports(){return J},set exports(r){J=r}};(function(r){(function(t,n,e){function o(u){var i=this,l="";i.next=function(){var s=i.b,c=i.c,d=i.d,b=i.a;return s=s<<25^s>>>7^c,c=c-d|0,d=d<<24^d>>>8^b,b=b-s|0,i.b=s=s<<20^s>>>12^c,i.c=c=c-d|0,i.d=d<<16^c>>>16^b,i.a=b-s|0},i.a=0,i.b=0,i.c=-1640531527,i.d=1367130551,u===Math.floor(u)?(i.a=u/4294967296|0,i.b=u|0):l+=u;for(var h=0;h<l.length+20;h++)i.b^=l.charCodeAt(h)|0,i.next()}function a(u,i){return i.a=u.a,i.b=u.b,i.c=u.c,i.d=u.d,i}function f(u,i){var l=new o(u),h=i&&i.state,s=function(){return(l.next()>>>0)/4294967296};return s.double=function(){do var c=l.next()>>>11,d=(l.next()>>>0)/4294967296,b=(c+d)/(1<<21);while(b===0);return b},s.int32=l.next,s.quick=s,h&&(typeof h=="object"&&a(h,l),s.state=function(){return a(l,{})}),s}n&&n.exports?n.exports=f:e&&e.amd?e(function(){return f}):this.tychei=f})(q,r,!1)})(Rt);var tt={},Yt={get exports(){return tt},set exports(r){tt=r}},Vt={},Kt=Object.freeze({__proto__:null,default:Vt}),Zt=$t(Kt);(function(r){(function(t,n,e){var o=256,a=6,f=52,u="random",i=e.pow(o,a),l=e.pow(2,f),h=l*2,s=o-1,c;function d(x,S,P){var k=[];S=S==!0?{entropy:!0}:S||{};var w=p(m(S.entropy?[x,N(n)]:x??C(),3),k),g=new b(k),M=function(){for(var L=g.g(a),_=i,A=0;L<l;)L=(L+A)*o,_*=o,A=g.g(1);for(;L>=h;)L/=2,_/=2,A>>>=1;return(L+A)/_};return M.int32=function(){return g.g(4)|0},M.quick=function(){return g.g(4)/4294967296},M.double=M,p(N(g.S),n),(S.pass||P||function(L,_,A,D){return D&&(D.S&&v(D,g),L.state=function(){return v(g,{})}),A?(e[u]=L,_):L})(M,w,"global"in S?S.global:this==e,S.state)}function b(x){var S,P=x.length,k=this,w=0,g=k.i=k.j=0,M=k.S=[];for(P||(x=[P++]);w<o;)M[w]=w++;for(w=0;w<o;w++)M[w]=M[g=s&g+x[w%P]+(S=M[w])],M[g]=S;(k.g=function(L){for(var _,A=0,D=k.i,z=k.j,O=k.S;L--;)_=O[D=s&D+1],A=A*o+O[s&(O[D]=O[z=s&z+_])+(O[z]=_)];return k.i=D,k.j=z,A})(o)}function v(x,S){return S.i=x.i,S.j=x.j,S.S=x.S.slice(),S}function m(x,S){var P=[],k=typeof x,w;if(S&&k=="object")for(w in x)try{P.push(m(x[w],S-1))}catch{}return P.length?P:k=="string"?x:x+"\0"}function p(x,S){for(var P=x+"",k,w=0;w<P.length;)S[s&w]=s&(k^=S[s&w]*19)+P.charCodeAt(w++);return N(S)}function C(){try{var x;return c&&(x=c.randomBytes)?x=x(o):(x=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(x)),N(x)}catch{var S=t.navigator,P=S&&S.plugins;return[+new Date,t,P,t.screen,N(n)]}}function N(x){return String.fromCharCode.apply(0,x)}if(p(e.random(),n),r.exports){r.exports=d;try{c=Zt}catch{}}else e["seed"+u]=d})(typeof self<"u"?self:q,[],Math)})(Yt);var Ut=K,Qt=Z,It=U,Jt=Q,tn=I,nn=J,B=tt;B.alea=Ut,B.xor128=Qt,B.xorwow=It,B.xorshift7=Jt,B.xor4096=tn,B.tychei=nn;var en=B;function at(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,on(e.key),e)}}function nt(r,t,n){return t&&at(r.prototype,t),n&&at(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}function lt(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,et(r,t)}function et(r,t){return et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},et(r,t)}function rn(r,t){if(typeof r!="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var e=n.call(r,t||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function on(r){var t=rn(r,"string");return typeof t=="symbol"?t:String(t)}var V=function(){function r(){}var t=r.prototype;return t._seed=function(e,o){if(e===(e||0))return e;for(var a=""+e,f=0,u=0;u<a.length;++u)f^=a.charCodeAt(u)|0;return f},r}(),ut=function(r){lt(t,r);function t(e,o){var a;return a=r.call(this)||this,a._rng=void 0,a.seed(e,o),a}var n=t.prototype;return n.next=function(){return this._rng()},n.seed=function(o,a){this._rng=o},n.clone=function(o,a){return new t(this._rng,a)},nt(t,[{key:"name",get:function(){return"function"}}]),t}(V),ct=function(){var r=[].slice.call(arguments),t=r,n=t[0],e=n===void 0?"default":n;switch(typeof e){case"object":if(e instanceof V)return e;break;case"function":return new ut(e);case"number":case"string":default:return new ut(en.apply(void 0,r))}throw new Error('invalid RNG "'+e+'"')},sn=function(r,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),function(){return r.next()*(n-t)+t}};function X(r){return new an(r)}var an=function(t){var n=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(n.n))return n;throw new Error("Expected number to be an integer, got "+n.n)},this.isPositive=function(){if(n.n>0)return n;throw new Error("Expected number to be positive, got "+n.n)},this.lessThan=function(e){if(n.n<e)return n;throw new Error("Expected number to be less than "+e+", got "+n.n)},this.greaterThanOrEqual=function(e){if(n.n>=e)return n;throw new Error("Expected number to be greater than or equal to "+e+", got "+n.n)},this.greaterThan=function(e){if(n.n>e)return n;throw new Error("Expected number to be greater than "+e+", got "+n.n)},this.n=t},ln=function(r,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),n===void 0&&(n=t===void 0?1:t,t=0),X(t).isInt(),X(n).isInt(),function(){return Math.floor(r.next()*(n-t+1)+t)}},un=function(r){return function(){return r.next()>=.5}},cn=function(r,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),function(){var e,o,a;do e=r.next()*2-1,o=r.next()*2-1,a=e*e+o*o;while(!a||a>1);return t+n*o*Math.sqrt(-2*Math.log(a)/a)}},hn=function(r,t,n){t===void 0&&(t=0),n===void 0&&(n=1);var e=r.normal(t,n);return function(){return Math.exp(e())}},fn=function(r,t){return t===void 0&&(t=.5),X(t).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(r.next()+t)}},dn=function(r,t,n){return t===void 0&&(t=1),n===void 0&&(n=.5),X(t).isInt().isPositive(),X(n).greaterThanOrEqual(0).lessThan(1),function(){for(var e=0,o=0;e++<t;)r.next()<n&&o++;return o}},gn=function(r,t){t===void 0&&(t=.5),X(t).greaterThan(0).lessThan(1);var n=1/Math.log(1-t);return function(){return Math.floor(1+Math.log(r.next())*n)}},bn=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],pn=function(t){return bn[t]},vn=.9189385332046727,xn=function(r,t){if(t===void 0&&(t=1),X(t).isPositive(),t<10){var n=Math.exp(-t);return function(){for(var i=n,l=0,h=r.next();h>i;)h=h-i,i=t*i/++l;return l}}else{var e=Math.sqrt(t),o=.931+2.53*e,a=-.059+.02483*o,f=1.1239+1.1328/(o-3.4),u=.9277-3.6224/(o-2);return function(){for(;;){var i=void 0,l=r.next();if(l<=.86*u)return i=l/u-.43,Math.floor((2*a/(.5-Math.abs(i))+o)*i+t+.445);l>=u?i=r.next()-.5:(i=l/u-.93,i=(i<0?-.5:.5)-i,l=r.next()*u);var h=.5-Math.abs(i);if(!(h<.013&&l>h)){var s=Math.floor((2*a/h+o)*i+t+.445);if(l=l*f/(a/(h*h)+o),s>=10){var c=(s+.5)*Math.log(t/s)-t-vn+s-(.08333333333333333-(.002777777777777778-1/(1260*s*s))/(s*s))/s;if(Math.log(l*e)<=c)return s}else if(s>=0){var d,b=(d=pn(s))!=null?d:0;if(Math.log(l)<=s*Math.log(t)-t-b)return s}}}}}},mn=function(r,t){return t===void 0&&(t=1),X(t).isPositive(),function(){return-Math.log(1-r.next())/t}},wn=function(r,t){return t===void 0&&(t=1),X(t).isInt().greaterThanOrEqual(0),function(){for(var n=0,e=0;e<t;++e)n+=r.next();return n}},yn=function(r,t){t===void 0&&(t=1),X(t).isInt().isPositive();var n=r.irwinHall(t);return function(){return n()/t}},Mn=function(r,t){t===void 0&&(t=1),X(t).greaterThanOrEqual(0);var n=1/t;return function(){return 1/Math.pow(1-r.next(),n)}},Sn=function(r){lt(t,r);function t(){return r.apply(this,arguments)||this}var n=t.prototype;return n.next=function(){return Math.random()},n.seed=function(o,a){},n.clone=function(){return new t},nt(t,[{key:"name",get:function(){return"default"}}]),t}(V),kn=function(){function r(n){var e=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return e._rng.next()},this.float=function(o,a){return e.uniform(o,a)()},this.int=function(o,a){return e.uniformInt(o,a)()},this.integer=function(o,a){return e.uniformInt(o,a)()},this.bool=function(){return e.uniformBoolean()()},this.boolean=function(){return e.uniformBoolean()()},this.uniform=function(o,a){return e._memoize("uniform",sn,o,a)},this.uniformInt=function(o,a){return e._memoize("uniformInt",ln,o,a)},this.uniformBoolean=function(){return e._memoize("uniformBoolean",un)},this.normal=function(o,a){return cn(e,o,a)},this.logNormal=function(o,a){return hn(e,o,a)},this.bernoulli=function(o){return fn(e,o)},this.binomial=function(o,a){return dn(e,o,a)},this.geometric=function(o){return gn(e,o)},this.poisson=function(o){return xn(e,o)},this.exponential=function(o){return mn(e,o)},this.irwinHall=function(o){return wn(e,o)},this.bates=function(o){return yn(e,o)},this.pareto=function(o){return Mn(e,o)},n&&n instanceof V?this.use(n):this.use(new Sn),this._cache={}}var t=r.prototype;return t.clone=function(){var e=[].slice.call(arguments);return e.length?new r(ct.apply(void 0,e)):new r(this.rng.clone())},t.use=function(){this._rng=ct.apply(void 0,[].slice.call(arguments))},t.patch=function(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()},t.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)},t.choice=function(e){if(!Array.isArray(e))throw new Error("Random.choice expected input to be an array, got "+typeof e);var o=e==null?void 0:e.length;if(o>0){var a=this.uniformInt(0,o-1)();return e[a]}else return},t._memoize=function(e,o){var a=[].slice.call(arguments,2),f=""+a.join(";"),u=this._cache[e];return(u===void 0||u.key!==f)&&(u={key:f,distribution:o.apply(void 0,[this].concat(a))},this._cache[e]=u),u.distribution},nt(r,[{key:"rng",get:function(){return this._rng}}]),r}(),Pn=new kn;class Ln{constructor({size:t,randFn:n}){n||(n=()=>Pn.int(0,2**31)),this.max=F(t).map(e=>F(t).map(n)),this.min=F(t).map(e=>F(t).map(n)),this.code=n(),this.hash={}}go(t,n,e){this.code^=e?this.max[t][n]:this.min[t][n]}get(){return this.hash[this.code]}set(t){this.hash[this.code]=t}resetHash(){this.hash={}}}const{l1:ht,d2:ft,l2:dt,l2x2:gt,d3:bt,l3:pt,d4:vt,l4:xt,l5:mt}=rt;function _n(r,t){const n=this.winner;if(n===1)return y.win;if(n===2)return-y.win;if(r)return 0;let e=0,o=0,a=0,f=0,u=0,i=0,l=0,h=0,s=0,c=0,d=0,b=0,v=0,m=0,p=0,C=0;const N=(g,M)=>{if(t&&console.log("piece",M.toString(2)),M<34)return;const L=j[M];if(L)if(t&&console.warn(L.toString(2)),g===1)switch(L){case ht:return h++;case ft:return l++;case dt:return i++;case gt:return i+=2;case bt:return u++;case pt:return f++;case vt:return a++;case xt:return o++;case mt:return e++;default:return console.error("error")}else switch(L){case ht:return C++;case ft:return p++;case dt:return m++;case gt:return m+=2;case bt:return v++;case pt:return b++;case vt:return d++;case xt:return c++;case mt:return s++;default:return console.error("error")}},x=(g,M,L)=>{let _=1,A=0,D=!1;for(let z=0;z<15;z++){const O=L&3;if(L>>=2,O===M||O===3){N(g,_),_=1,D=!0;continue}else if(O===0)if(A===0)A++,_<<=1;else{_<<=1,!(L&12)&&z!==14&&(_<<=1),N(g,_),_=4,!(L&12)&&z!==14&&(_<<=1),A=0,D=!0;continue}else A=0,D=!1,_<<=1,_+=1}D||N(g,_)};for(let g=0;g<this.node0.length;g++)x(1,2,this.node0[g]);for(let g=0;g<this.node1.length;g++)x(1,2,this.node1[g]);for(let g=0;g<this.node2.length;g++)x(1,2,this.node2[g]);for(let g=0;g<this.node3.length;g++)x(1,2,this.node3[g]);for(let g=0;g<this.node0.length;g++)x(2,1,this.node0[g]);for(let g=0;g<this.node1.length;g++)x(2,1,this.node1[g]);for(let g=0;g<this.node2.length;g++)x(2,1,this.node2[g]);for(let g=0;g<this.node3.length;g++)x(2,1,this.node3[g]);t&&(console.log({maxL1:h,maxD2:l,maxL2:i,maxD3:u,maxL3:f,maxD4:a,maxL4:o,maxL5:e}),console.log({minL1:C,minD2:p,minL2:m,minD3:v,minL3:b,minD4:d,minL4:c,minL5:s}));let S=0,P=0;if((this.seekDepth&1)===0){if(o)return y.l5*2;if(a)return y.l5*3;if(c)return-y.l5;if(d>1||b>1||b&&d)return-y.l5*3;f&&!c&&!d&&(S+=y.l4)}else{if(c||d)return-y.l5;if(o)return y.l5;if(a>1||f>1||f&&a)return-y.l5*2;b&&!o&&!a&&(P+=y.l4)}return S=y.l5*e+y.l4*o+y.d4*a+y.l3*f+y.d3*u+y.l2*i+y.d2*l+y.l1*l,P=y.l5*s+y.l4*c+y.d4*d+y.l3*b+y.d3*v+y.l2*m+y.d2*p+y.l1*p,S*this.attackFactor-P*(this.firstHand===2?this.defenseFactor:1)}function En(r,t,n){let e=[],o=[],a=[],f=[],u=[],i=[],l=[],h=[],s=[],c=[],d=[],b=[];for(let m=0;m<r.length;m++){const p=r[m],[C,N]=p;let x=0,S=0,P=G(this.maxPointsScore[C][N][0]);{const w=G(this.maxPointsScore[C][N][1]),g=G(this.maxPointsScore[C][N][2]),M=G(this.maxPointsScore[C][N][3]);P.l5+=w.l5+g.l5+M.l5,P.l4+=w.l4+g.l4+M.l4,P.d4+=w.d4+g.d4+M.d4,P.l3+=w.l3+g.l3+M.l3,P.d3+=w.d3+g.d3+M.d3,P.l2+=w.l2+g.l2+M.l2,P.d2+=w.d2+g.d2+M.d2,P.l1+=w.l1+g.l1+M.l1;const{l5:L,l4:_,d4:A,l3:D}=P;L?e.push(p):_?a.push(p):(A>1&&h.push(p),D&&A&&s.push(p),D>1&&d.push(p),D&&l.push(p),A&&u.push(p)),x=ot(P)}let k=G(this.minPointsScore[C][N][0]);{const w=G(this.minPointsScore[C][N][1]),g=G(this.minPointsScore[C][N][2]),M=G(this.minPointsScore[C][N][3]);k.l5+=w.l5+g.l5+M.l5,k.l4+=w.l4+g.l4+M.l4,k.d4+=w.d4+g.d4+M.d4,k.l3+=w.l3+g.l3+M.l3,k.d3+=w.d3+g.d3+M.d3,k.l2+=w.l2+g.l2+M.l2,k.d2+=w.d2+g.d2+M.d2,k.l1+=w.l1+g.l1+M.l1;const{l5:L,l4:_,d4:A,l3:D}=k;L?o.push(p):_?f.push(p):(D&&A&&c.push(p),A&&i.push(p)),S=ot(k)}b.push({position:[C,N],score:x*this.attackFactor+S*this.defenseFactor})}let v;if(n)return t?e.length?e:o.length?o:a.length?a:h.length?h:f.length||c.length?s.concat(u):s.concat(d).concat(u).concat(l):e.length?e:a.length||s.length?i.concat(a).concat(s).concat(u):b.sort((m,p)=>p.score-m.score).map(m=>m.position);if(t){if(e.length)return e;if(o.length)return o;if(a.length)return a;if(s.length&&!f.length&&!i.length)return s;if(!u.length&&f.length)return f.concat(i)}else{if(o.length)return o;if(e.length)return e;if(f.length)return f;if(c.length&&!a.length&&!u.length)return c;if(!i.length&&a.length)return a.concat(u)}return v=b.sort((m,p)=>p.score-m.score).map(m=>m.position),v.length<=this.genLimit?v:v.slice(0,this.genLimit)}const An={l1:1,d2:2,d3:3,l2:8,l2x2:16,l3:30,d4:50,l4:500,l5:1e3,win:1e4};class H{constructor(t){W(this,"genChilds",En);W(this,"evaluate",_n);this.init({...t})}init({firstHand:t,autoPlay:n,enableStats:e,attackFactor:o,defenseFactor:a}){this.node0=[],this.node1=[],this.node2=[],this.node3=[],this.initNode(),this.stack=[],this.zobrist=new Ln({size:15}),this.maxPointsScore=F(15).map(()=>F(15,[0,0,0,0],!0)),this.minPointsScore=F(15).map(()=>F(15,[0,0,0,0],!0)),this.stats={},this.initStats(),this.enableStats=e!==void 0?e:!0,this.enableLog=!1,this.firstHand=t||2,this.genLimit=20,this.seekDepth=8,this.seekKillDepth=21,this.autoPlay=n||!1,this.attackFactor=o||1,this.defenseFactor=a||1,this.timeLimit=3e3}maxGo(){if(this.isFinal)return;console.log(Object.keys(this.zobrist.hash).length),this.initStats();const t=this.getMaxNextStep(),{i:n,j:e,score:o}=t;return this.put(n,e,1),this.logStats(),console.log({score:this.evaluate(),score2:o}),t}getMaxNextStep(){let t=this.genChilds(this.getAllOptimalNextStep(),!0);if(t=t.map(e=>({i:e[0],j:e[1]})),console.log({points:t}),t.length===1)return t[0];const n=this.seekKill();if(n)return n;this.startTime=+new Date,console.time("thinking");for(let e=2;e<=this.seekDepth&&(this.zobrist.resetHash(),!(+new Date-this.startTime>this.timeLimit));e+=2){for(let o=0;o<t.length;o++){let a=t[o];const{i:f,j:u}=a;this.put(f,u,1);const i=this.minimax(e-1,!1);this.rollback(),i.score!==-1/0&&(a.score=i.score,a.depth=e,a.stack=i.stack)}t=t.sort((o,a)=>a.score-o.score),console.log(e,t)}return console.timeEnd("thinking"),t[0]}seekKill(){if(this.stack.length>4){this.startTime=+new Date,console.time("thinking kill");for(let t=3;t<=this.seekKillDepth&&(this.zobrist.resetHash(),!(+new Date-this.startTime>this.timeLimit));t+=2){const n=this.minimax(t,!0,!0);if((n==null?void 0:n.score)>=An.win)return console.warn("算杀成功 :)",n),this.logStats(),console.timeEnd("thinking kill"),n}console.timeEnd("thinking kill")}}minGo(t,n){if(!this.isFinal)return this.isEmptyPosition(t,n)?(this.put(t,n,2),console.log({score:this.evaluate()}),!0):!1}minimax(t,n=!0,e=!1,o=-1/0,a=1/0){if(this.isFinal||t===0)return{score:this.evaluate(e),depth:t,stack:structuredClone(this.stack)};const f=this.genChilds(this.getAllOptimalNextStep(),n,e);if(n){if(f.length===0)return{score:-.1};let u=-1/0,i=f[0],l;for(const c of f){if(+new Date-this.startTime>this.timeLimit)break;const[d,b]=c;this.put(d,b,1),this.enableStats&&this.stats.abCut.eva++;let v=this.zobrist.get(),m;if(v===void 0){const p=this.minimax(t-1,!n,e,o,a);v=p.score,m=p.stack,this.zobrist.set(v),this.enableStats&&this.stats.zobrist.miss++}else this.enableStats&&this.stats.zobrist.hit++;if(this.rollback(),v>u&&(u=v,i=c,l=m),o=Math.max(o,u),a<=o){this.enableStats&&this.stats.abCut.cut++;break}}const[h,s]=i;return{score:u,i:h,j:s,stack:l}}else{if(f.length===0)return{score:.2};let u=1/0,i=f[0],l;for(const c of f){if(+new Date-this.startTime>this.timeLimit){u=-1/0;break}const[d,b]=c;this.put(d,b,2),this.enableStats&&this.stats.abCut.eva++;let v=this.zobrist.get(),m;if(v===void 0){const p=this.minimax(t-1,!n,e,o,a);v=p.score,m=p.stack,this.zobrist.set(v),this.enableStats&&this.stats.zobrist.miss++}else this.enableStats&&this.stats.zobrist.hit++;if(this.rollback(),v<u&&(u=v,i=c,l=m),a=Math.min(a,u),a<=o){this.enableStats&&this.stats.abCut.cut++;break}}const[h,s]=i;return{score:u,i:h,j:s,stack:l}}}isWall(t,n){return t<0||t>=15||n<0||n>=15}initNode(){this.node0=F(15,0),this.node1=F(15,0),this.node2=[];for(let t=0;t<15*2-1;t++){let n=0;for(let e=0;e<15;e++){const o=t-e;n<<=2,this.isWall(e,o)&&(n+=3)}this.node2[t]=n}this.node3=[];for(let t=0;t<15*2-1;t++){let n=0;for(let e=0;e<15;e++){const o=14+e-t;n<<=2,this.isWall(e,o)&&(n+=3)}this.node3[t]=n}}initNodeHashAndCode(){}put(t,n,e){this.zobrist.go(t,n,e===1),this.stack.push([t,n]),this.node0[t]=this.node0[t]|e<<2*(14-n),this.node1[n]=this.node1[n]|e<<2*(14-t),this.node2[t+n]=this.node2[t+n]|e<<2*(14-t),this.node3[14+t-n]=this.node3[14+t-n]|e<<2*(14-t),this.updateFourLineScore(t,n)}rollback(t=1){if(!(this.stack.length<t))for(;t-- >0;){const[n,e]=this.stack.pop();this.zobrist.go(n,e,this.getChess(n,e)===1);const o=2*(14-e);this.node0[n]=(this.node0[n]|3<<o)^3<<o;const a=2*(14-n);this.node1[e]=(this.node1[e]|3<<a)^3<<a,this.node2[n+e]=(this.node2[n+e]|3<<a)^3<<a,this.node3[14+n-e]=(this.node3[14+n-e]|3<<a)^3<<a,this.updateFourLineScore(n,e)}}minRepent(){this.stack.length>=2&&this.rollback(2)}isEmptyPosition(t,n){return!this.isWall(t,n)&&this.getChess(t,n)===0}getNearPositions(t){const n=[],[o,a]=t;for(let f=-2;f<=2;f++)for(let u=-2;u<=2;u++)this.isEmptyPosition(f+o,u+a)&&n.push([f+o,u+a]);return n}getAllOptimalNextStep(){if(this.stack.length===0)return[[7,7]];if(this.stack.length===1){if(this.isEmptyPosition(7,7))return[[7,7]];const n=7+(Math.random()>.5?1:-1),e=7+(Math.random()>.5?1:-1);return[[n,e]]}let t=[];for(let n=0;n<15;n++)for(let e=0;e<15;e++)this.getChess(n,e)===0&&this.haveNeighbor(n,e)&&t.push([n,e]);return t}haveNeighbor(t,n){for(let o=-2;o<=2;o++)if(!(o+t<0||o+t>=15))for(let a=-2;a<=2;a++){if(a+n<0||a+n>=15||o===0&&a===0)continue;if(this.getChess(o+t,n+a)!==0)return!0}return!1}getChess(t,n){return this.node0[t]>>2*(14-n)&3}getChessInFourDirection(t,n,e){let o=[],a=[],f=[],u=[];if(e===void 0||e===0){const i=this.node0[t],l=n>=4?i>>2*(18-n)&3:3,h=n>=3?i>>2*(17-n)&3:3,s=n>=2?i>>2*(16-n)&3:3,c=n>=1?i>>2*(15-n)&3:3,d=i>>2*(14-n)&3,b=n<=13?i>>2*(13-n)&3:3,v=n<=12?i>>2*(12-n)&3:3,m=n<=11?i>>2*(11-n)&3:3,p=n<=10?i>>2*(10-n)&3:3;if(o=[l,h,s,c,d,b,v,m,p],e===0)return o}if(e===void 0||e===1){const i=this.node1[n],l=t>=4?i>>2*(18-t)&3:3,h=t>=3?i>>2*(17-t)&3:3,s=t>=2?i>>2*(16-t)&3:3,c=t>=1?i>>2*(15-t)&3:3,d=i>>2*(14-t)&3,b=t<=13?i>>2*(13-t)&3:3,v=t<=12?i>>2*(12-t)&3:3,m=t<=11?i>>2*(11-t)&3:3,p=t<=10?i>>2*(10-t)&3:3;if(a=[l,h,s,c,d,b,v,m,p],e===1)return a}if(e===void 0||e===2){const i=this.node2[t+n],l=t>=4?i>>2*(18-t)&3:3,h=t>=3?i>>2*(17-t)&3:3,s=t>=2?i>>2*(16-t)&3:3,c=t>=1?i>>2*(15-t)&3:3,d=i>>2*(14-t)&3,b=t<=13?i>>2*(13-t)&3:3,v=t<=12?i>>2*(12-t)&3:3,m=t<=11?i>>2*(11-t)&3:3,p=t<=10?i>>2*(10-t)&3:3;if(f=[l,h,s,c,d,b,v,m,p],e===2)return f}if(e===void 0||e===3){const i=this.node3[14+t-n],l=t>=4?i>>2*(18-t)&3:3,h=t>=3?i>>2*(17-t)&3:3,s=t>=2?i>>2*(16-t)&3:3,c=t>=1?i>>2*(15-t)&3:3,d=i>>2*(14-t)&3,b=t<=13?i>>2*(13-t)&3:3,v=t<=12?i>>2*(12-t)&3:3,m=t<=11?i>>2*(11-t)&3:3,p=t<=10?i>>2*(10-t)&3:3;if(u=[l,h,s,c,d,b,v,m,p],e===3)return u}return[o,a,f,u]}getPositionsInFourDirection(t,n){let e=[],o=[],a=[],f=[];const u=t-4>0?t-4:0,i=t+4<15-1?t+4:15-1,l=n-4>0?n-4:0,h=n+4<15-1?n+4:15-1;for(let s=l;s<=h;s++)e.push([t,s]);for(let s=u;s<=i;s++)o.push([s,n]);for(let s=4;s>0;s--)t-s>=u&&n+s<=h&&a.push([t-s,n+s]);a.push([t,n]);for(let s=1;s<=4;s++)t+s<=i&&n-s>=l&&a.push([t+s,n-s]);for(let s=4;s>0;s--)t-s>=u&&n-s>=l&&f.push([t-s,n-s]);f.push([t,n]);for(let s=1;s<=4;s++)t+s<=i&&n+s<=h&&f.push([t+s,n+s]);return[e,o,a,f]}updateFourLineScore(t,n){const e=this.getPositionsInFourDirection(t,n);for(let o=0;o<4;o++){const a=e[o];for(let f=0;f<a.length;f++){const u=a[f];this.updatePointScore(u,o)}}}updatePointScore(t,n){const[e,o]=t;this.getChess(e,o)!==0?(this.maxPointsScore[e][o]=[0,0,0,0],this.minPointsScore[e][o]=[0,0,0,0]):(this.maxPointsScore[e][o][n]=this.evaPoint(e,o,1,n),this.minPointsScore[e][o][n]=this.evaPoint(e,o,2,n))}evaPoint(t,n,e,o){const a=this.getChessInFourDirection(t,n,o),i=wt(e===1?1:2,e===1?2:1,3);let l=0;const h=i(a),s=j[h];return l+=s||0,l}saveStack(){console.log(JSON.stringify(this.stack))}restoreStack(t){const n=this.firstHand,e=n===1?2:1;this.rollback(this.stack.length);for(let o=0;o<t.length;o++){const[a,f]=t[o];this.put(a,f,o&1?e:n)}}test(t){console.log(Function(t).call(this))}get winner(){if(this.stack.length<7)return null;const[t,n]=this.stack[this.stack.length-1],e=this.getChess(t,n),o=this.getChessInFourDirection(t,n);for(let a=0;a<4;a++){let f=0;const u=o[a];for(let i=0;i<u.length;i++)if(u[i]===e?f++:f=0,f===5)return e}return null}get winnerPositions(){if(!this.winner)return null;const[t,n]=this.stack[this.stack.length-1],e=this.getChess(t,n),o=this.getPositionsInFourDirection(t,n);for(let a=0;a<4;a++){const f=o[a];let u=0,i=[];for(let l=0;l<f.length;l++){const[h,s]=f[l];if(this.getChess(h,s)===e?(u++,i.push([h,s])):(u=0,i=[]),u===5)return i}}return null}get isFinal(){return!!this.winner||this.isBoardFull}get isBoardFull(){return this.stack.length===15**2}get lastChessPosition(){return this.stack.length?this.stack[this.stack.length-1]:null}get isDraw(){return this.isBoardFull&&!this.winner}get node(){return this.node0.map(t=>{let n=[];for(let e=0;e<15;e++)n.push((t&3<<2*e)>>2*e);return n.reverse()})}printNode(){console.log(this.node0.map(t=>t.toString(2))),console.log(this.node1.map(t=>t.toString(2))),console.log(this.node2.map(t=>t.toString(2))),console.log(this.node3.map(t=>t.toString(2)))}initStats(){this.stats={abCut:{all:this.genLimit**this.seekDepth,eva:0,cut:0,toString(){const{all:t,eva:n,cut:e}=this.stats.abCut,o=t-n;return`AB剪枝 最大节点总数:${t} 理论最少评估${t**.5>>0} 实际评估:${n} 剪去:${e}/${o}`}},zobrist:{miss:0,hit:0,toString(){const{hit:t,miss:n}=this.stats.zobrist;return`zobrist 评估节点数:${this.stats.abCut.eva} hit:${t} miss:${n}`}}}}logStats(){this.enableStats&&Object.keys(this.stats).forEach(t=>{console.log(this.stats[t].toString.call(this))})}}W(H,"MAX",1),W(H,"MIN",2),W(H,"EMPTY",0),W(H,"WALL",3);let E=new H;onmessage=async function(r){const{type:t,data:n}=r.data;let e;switch(t){case"init":E.init(n),E.autoPlay&&Nn();break;case"maxGo":e=E.maxGo();break;case"minGo":e=E.minGo(...n);break;case"minRepent":e=E.minRepent();break;case"reStart":e=E.init({});break;case"test":e=E.test(n);break}it(t,e)};const it=(r,t)=>postMessage({type:r,data:t,gobang:JSON.stringify({...E,node:E.node,stack:E.stack,firstHand:E.firstHand,lastChessPosition:E.lastChessPosition,winnerPositions:E.winnerPositions,isDraw:E.isDraw,winner:E.winner,isFinal:E.isFinal})}),Nn=async()=>{const r=new H({firstHand:H.MIN,seekDepth:2,defenseFactor:4});E.genLimit=30,E.seekDepth=8,r.seekDepth=4,r.genLimit=60,r.defenseFactor=1;const t=async()=>{if(E.isFinal)return;const{i:o,j:a}=E.maxGo();r.minGo(o,a),it("autoPlay")},n=async()=>{if(E.isFinal)return;const{i:o,j:a}=r.maxGo();E.minGo(o,a),it("autoPlay")},e=500;for(;E.autoPlay&&!E.isFinal;)await t(),await st(e),await n(),await st(e)}})();
