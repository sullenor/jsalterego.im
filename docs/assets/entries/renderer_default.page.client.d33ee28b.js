var v=Object.defineProperty;var b=(t,e,n)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var c=(t,e,n)=>(b(t,typeof e!="symbol"?e+"":e,n),n);import{F as A,u as f,B as C}from"../chunks/chunk-d89e3fe2.js";import{d as E}from"../chunks/chunk-9ccb0baa.js";import"./renderer_default.page.server.extractAssets.6a6fbba1.js";class I{constructor(e){c(this,"x");c(this,"y");c(this,"angle");c(this,"radius");c(this,"rays");this.generateShape(e)}generateShape(e){this.x=u(0,e),this.y=0,this.angle=u(-Math.PI/2,Math.PI/2),this.radius=u(6,42,!0),this.rays=u(3,9,!0)}}function B(){var p;const t=document.createElement("canvas");t.setAttribute("class","h-100 w-100 fixed absolute--fill z-999"),t.style.setProperty("filter","invert(20%)"),t.style.setProperty("pointer-events","none"),(p=document.body)==null||p.prepend(t);const e=t.getContext("2d"),n=[],a=Math.round(window.innerWidth/1400*50),s=400;let h=0;function M(r){const d=t.getBoundingClientRect();t.width!==d.width&&(t.width=d.width),t.height!==d.height&&(t.height=d.height);const i=t.width,g=t.height;e.lineWidth=2,e.strokeStyle="rgba(255, 255, 255, 0.7)",h+=r,h>s&&(h-=s);const l=h/s*a;for(;n.length<l;)n.push(new I(i));e.clearRect(0,0,i,g),n.forEach((o,S)=>{o.x+=Math.cos(S+h/100)+u(0,r),o.y+=r/s,o.angle+=.005*Math.PI*r,o.x>i&&(o.x-=i),o.y>1&&o.generateShape(i),x(o,i,g)})}m(M);function x(r,d,i){const g=2*Math.PI/r.rays;let l=r.angle;for(let o=0;o<r.rays;o++)l+=g,e.beginPath(),e.moveTo(r.x,i*r.y),e.lineTo(r.x+r.radius*Math.cos(l),i*r.y+r.radius*Math.sin(l)),e.stroke()}}function m(t,e=Date.now()){const n=Date.now();let a=(n-e)*48/1e3;a>5&&(a=0),t(a)!==!1&&window.requestAnimationFrame(()=>{m(t,n)})}function u(t,e,n){return e==null&&(e=t,t=0),n?Math.round(Math.random()*(e-t))+t:Math.random()*(e-t)+t}let w=!1;const y=document.querySelector(":root"),P=E(()=>{const{innerHeight:t,scrollY:e}=window,n=Math.round(100*e/t);y==null||y.style.setProperty("--scroll",`${n}%`)},20);function D(){P(),B(),!w&&(window.addEventListener("scroll",P),w=!0)}const T=A(void 0);function q({pageContext:t,children:e}){return f(T.Provider,{value:t,children:e})}function R({pageContext:t,children:e}){return f(q,{pageContext:t,children:e})}async function H(t){const{Page:e,pageProps:n}=t;if(await D(),!e)throw new Error("Client-side render() hook expects pageContext.Page to be defined");const a=document.getElementById("app");if(!a)throw new Error("DOM element #app not found");C(f(R,{pageContext:t,children:f(e,{...n})}),a)}export{H as render};
