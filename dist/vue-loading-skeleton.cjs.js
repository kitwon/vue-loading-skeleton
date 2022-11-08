"use strict";var _=Object.defineProperty;var S=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var s=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))$.call(t,n)&&s(e,n,t[n]);if(S)for(var n of S(t))L.call(t,n)&&s(e,n,t[n]);return e};Object.defineProperty(exports,"__esModule",{value:!0});exports[Symbol.toStringTag]="Module";var i=require("vue");const c="#eeeeee",v="#f5f5f5",k={animation:"",backgroundColor:c,backgroundImage:`linear-gradient(
    90deg,
    ${c},
    ${v},
    ${c}
  )`},b=Symbol("_themeStyle"),N=Symbol("_theme");function P(){return N}const T=P(),w=i.defineComponent({name:"PuSkeletonTheme",props:{color:{type:String,default:c},highlight:{type:String,default:v},duration:{type:Number,default:1.5},tag:{type:String,default:"div"},loading:{type:Boolean,default:void 0}},setup(e,{slots:t}){const n=i.computed(()=>{const{color:a,highlight:u,duration:d}=e,r=l({},k);return r.backgroundColor=a,r.backgroundImage=`linear-gradient(
        90deg,
        ${a},
        ${u},
        ${a}
      )`,d?r.animation=`SkeletonLoading ${d}s ease-in-out infinite`:(r.animation="",r.backgroundImage=""),r});return i.provide(b,n),i.provide(T,e),()=>{var a,u;return e.tag?i.h(e.tag,(a=t.default)==null?void 0:a.call(t)):(u=t.default)==null?void 0:u.call(t)[0]}}}),I=w;const j=e=>{if(!e)return!0;const[t]=e;let n=t.children;return!t.el&&!n},A=i.defineComponent({name:"PuSkeleton",props:{prefix:{type:String,default:"pu"},count:{type:Number,default:1},duration:{type:Number,default:1.5},tag:{type:String,default:"span"},width:{type:[String,Number],default:0},height:{type:[String,Number],default:0},circle:Boolean,loading:{type:[Boolean,Object,Array],default:void 0}},setup(e,{slots:t}){const n=i.inject(T,{}),a=i.inject(b,{value:l({},k)}),u=i.computed(()=>typeof(n==null?void 0:n.loading)!="undefined"?n.loading:e.loading),d=i.computed(()=>[`${e.prefix}-skeleton`]),r=i.computed(()=>{if(!a)return{};const o=l({},a==null?void 0:a.value);return e.duration?o.animation=`SkeletonLoading ${e.duration}s ease-in-out infinite`:o.backgroundImage="",e.width&&(o.width=e.width),e.height&&(o.height=e.height),e.circle&&(o.borderRadius="50%"),o});return()=>{var y;const o=(y=t.default)==null?void 0:y.call(t),g=typeof u.value!="undefined"?u.value:j(o),h=Array(g?e.count:0).fill(0).map((B,p)=>i.h("span",{key:p,class:d.value,style:r.value,innerHTML:"&zwnj;"}));return e.tag?i.h(e.tag,g?h:o):g?i.h("span",h):o}}}),f=A,m=I;var C={install(e){e.component(f.name,f),e.component(m.name,m)}};exports.Skeleton=f;exports.SkeletonTheme=m;exports.default=C;