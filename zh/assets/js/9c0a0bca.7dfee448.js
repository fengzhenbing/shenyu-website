"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1613],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3114:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],p={title:"WebSocket\u4ee3\u7406",keywords:["WebSocket"],description:"websocket\u4ee3\u7406"},a=void 0,u={unversionedId:"plugin-center/proxy/websocket-plugin",id:"plugin-center/proxy/websocket-plugin",isDocsHomePage:!1,title:"WebSocket\u4ee3\u7406",description:"websocket\u4ee3\u7406",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/websocket-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/websocket-plugin",permalink:"/zh/docs/next/plugin-center/proxy/websocket-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/proxy/websocket-plugin.md",version:"current",frontMatter:{title:"WebSocket\u4ee3\u7406",keywords:["WebSocket"],description:"websocket\u4ee3\u7406"},sidebar:"tutorialSidebar",previous:{title:"Tars\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/proxy/tars-plugin"},next:{title:"Hystrix\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/fault-tolerance/hystrix-plugin"}},l=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u8bf7\u6c42\u8def\u5f84",id:"\u8bf7\u6c42\u8def\u5f84",children:[]}],s={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Websocket"),"\u63d2\u4ef6\u5b9e\u73b0\u4e86\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"websocket"),"\u4ee3\u7406\u7684\u652f\u6301\u3002"),(0,i.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"../deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,i.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5728\u57fa\u7840\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"->"),"\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"websocket")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,i.kt)("p",null,"\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,i.kt)("p",null,"\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"websocket"),"\u63d2\u4ef6\u7684\u76f8\u5173\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--if you use http proxy start this--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-websocket</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\n")),(0,i.kt)("h2",{id:"\u8bf7\u6c42\u8def\u5f84"},"\u8bf7\u6c42\u8def\u5f84"),(0,i.kt)("p",null,"\u4f7f\u7528 Apache ShenYu \u4ee3\u7406websocket\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u4f7f\u7528ws\u534f\u8bae\u5f00\u5934\uff0c\u540e\u9762\u8def\u5f84\u4e3a\u771f\u5b9eWebsocket\u8def\u5f84\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ws://localhost:9195/xxx\n")))}d.isMDXComponent=!0}}]);