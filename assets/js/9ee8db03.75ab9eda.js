"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3101],{3905:function(e,n,i){i.d(n,{Zo:function(){return s},kt:function(){return f}});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=t.createContext({}),u=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},s=function(e){var n=u(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(i),f=r,g=p["".concat(d,".").concat(f)]||p[f]||c[f]||o;return i?t.createElement(g,l(l({ref:n},s),{},{components:i})):t.createElement(g,l({ref:n},s))}));function f(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=p;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<o;u++)l[u]=i[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},54520:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var t=i(87462),r=i(63366),o=(i(67294),i(3905)),l=["components"],a={sidebar_position:3,title:"File Uploading And Downloading",keywords:["soul"],description:"file uploading and downloading"},d=void 0,u={unversionedId:"developer-guide/file-and-image",id:"version-2.3.0/developer-guide/file-and-image",isDocsHomePage:!1,title:"File Uploading And Downloading",description:"file uploading and downloading",source:"@site/versioned_docs/version-2.3.0/developer-guide/file-and-image.md",sourceDirName:"developer-guide",slug:"/developer-guide/file-and-image",permalink:"/docs/2.3.0/developer-guide/file-and-image",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/developer-guide/file-and-image.md",version:"2.3.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"File Uploading And Downloading",keywords:["soul"],description:"file uploading and downloading"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Custom Plugin",permalink:"/docs/2.3.0/developer-guide/custom-plugin"},next:{title:"Fetching Correct IP Address And Host",permalink:"/docs/2.3.0/developer-guide/custom-parsing-ip-and-host"}},s=[{value:"description",id:"description",children:[]},{value:"File Uploading",id:"file-uploading",children:[]},{value:"File Downloading",id:"file-downloading",children:[]}],c={toc:s};function p(e){var n=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This doc gives a brief description for uploading and downloading files using soul.")),(0,o.kt)("h2",{id:"file-uploading"},"File Uploading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default file size limit is 10M."),(0,o.kt)("li",{parentName:"ul"},"For custom limitation, use",(0,o.kt)("inlineCode",{parentName:"li"},"--file.size")," with an integer variable. e.g.",(0,o.kt)("inlineCode",{parentName:"li"},"--file.size = 30")),(0,o.kt)("li",{parentName:"ul"},"Upload your files just as way you did before")),(0,o.kt)("h2",{id:"file-downloading"},"File Downloading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Soul supports downloading files in streams. There is no need to change anything.")))}p.isMDXComponent=!0}}]);