import{j as t}from"./jsx-runtime.TBa3i5EZ.js";import{r as a}from"./index.CVf8TyFT.js";import{c as n}from"./createLucideIcon.CtqcSuvw.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],d=n("Moon",c);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],l=n("Sun",m);function u(){const[o,s]=a.useState("light");a.useEffect(()=>{const e=document.documentElement.classList.contains("dark");s(e?"dark":"light")},[]);const r=()=>{const e=o==="light"?"dark":"light";s(e),e==="dark"?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))};return t.jsx("button",{onClick:r,className:"p-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all focus:outline-none","aria-label":"Toggle dark mode",children:o==="light"?t.jsx(d,{className:"h-4 w-4"}):t.jsx(l,{className:"h-4 w-4"})})}export{u as default};
