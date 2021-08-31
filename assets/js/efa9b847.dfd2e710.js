"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7569],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),g=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=g(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=g(t),d=i,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=p;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var g=2;g<o;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7371:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return g},toc:function(){return s},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],a={title:"Logging Plugin",keywords:["logging"],description:"logging plugin"},u=void 0,g={unversionedId:"plugin-center/observability/logging-plugin",id:"plugin-center/observability/logging-plugin",isDocsHomePage:!1,title:"Logging Plugin",description:"logging plugin",source:"@site/docs/plugin-center/observability/logging-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-plugin",permalink:"/docs/next/plugin-center/observability/logging-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/observability/logging-plugin.md",version:"current",frontMatter:{title:"Logging Plugin",keywords:["logging"],description:"logging plugin"},sidebar:"tutorialSidebar",previous:{title:"Waf Plugin",permalink:"/docs/next/plugin-center/authority-and-certification/waf-plugin"},next:{title:"Monitor Plugin",permalink:"/docs/next/plugin-center/observability/monitor-plugin"}},s=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When making invokes to the target service, Apache ShenYu gateway also allows users to print the request information in the log that includes the request path, request method, request parameters, response header, response body ...etc.")),(0,o.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,o.kt)("inlineCode",{parentName:"li"},"logging"),", set to enable."),(0,o.kt)("li",{parentName:"ul"},"Introduce ",(0,o.kt)("inlineCode",{parentName:"li"},"logging")," support in the pox.xml file of the gateway."),(0,o.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"   \x3c!-- apache shenyu logging plugin start--\x3e\n    <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-logging</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n   \x3c!-- apache shenyu logging plugin end--\x3e\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,o.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"Only those matched requests can print the information about this request.")),(0,o.kt)("h2",{id:"situation"},"Situation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users may want to view the information about request(including request headers, request parameters, response headers, response body...etc) where in the side of gateway when debugging during development or troubleshooting problems online.")))}p.isMDXComponent=!0}}]);