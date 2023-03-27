"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[5068],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7745:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={},a="metro-serializer",l={unversionedId:"tools/metro-serializer",id:"tools/metro-serializer",title:"metro-serializer",description:"",source:"@site/docs/tools/metro-serializer.mdx",sourceDirName:"tools",slug:"/tools/metro-serializer",permalink:"/rnx-kit/docs/tools/metro-serializer",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/metro-serializer.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-resolver-symlinks",permalink:"/rnx-kit/docs/tools/metro-resolver-symlinks"},next:{title:"metro-serializer-esbuild",permalink:"/rnx-kit/docs/tools/metro-serializer-esbuild"}},s={},c=[{value:"Usage",id:"usage",level:2}],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metro-serializer"},"metro-serializer"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@rnx-kit/metro-serializer")," is Metro's default JavaScript bundle serializer, but\nwith support for plugins."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Import and set the serializer to ",(0,i.kt)("inlineCode",{parentName:"p"},"serializer.customSerializer")," in your\n",(0,i.kt)("inlineCode",{parentName:"p"},"metro.config.js"),", then add your desired plugins. For instance, to add\n",(0,i.kt)("inlineCode",{parentName:"p"},"CyclicDependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DuplicateDependencies")," plugins:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n+const {\n+  CyclicDependencies,\n+} = require("@rnx-kit/metro-plugin-cyclic-dependencies-detector");\n+const {\n+  DuplicateDependencies,\n+} = require("@rnx-kit/metro-plugin-duplicates-checker");\n+const { MetroSerializer } = require("@rnx-kit/metro-serializer");\n\n module.exports = makeMetroConfig({\n   projectRoot: __dirname,\n   serializer: {\n+    customSerializer: MetroSerializer([\n+      CyclicDependencies(),\n+      DuplicateDependencies(),\n+    ]),\n   },\n });\n')))}m.isMDXComponent=!0}}]);