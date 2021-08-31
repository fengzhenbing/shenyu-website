"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7332],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,f=d["".concat(u,".").concat(g)]||d[g]||c[g]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},699:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],a={sidebar_position:3,title:"SpringCloud Plugin",keywords:["SpringCloud"],description:"SpringCloud Plugin"},u=void 0,p={unversionedId:"plugins/spring-cloud-plugin",id:"version-2.3.0/plugins/spring-cloud-plugin",isDocsHomePage:!1,title:"SpringCloud Plugin",description:"SpringCloud Plugin",source:"@site/versioned_docs/version-2.3.0/plugins/spring-cloud-plugin.md",sourceDirName:"plugins",slug:"/plugins/spring-cloud-plugin",permalink:"/docs/2.3.0/plugins/spring-cloud-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/plugins/spring-cloud-plugin.md",version:"2.3.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"SpringCloud Plugin",keywords:["SpringCloud"],description:"SpringCloud Plugin"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Dubbo Plugin",permalink:"/docs/2.3.0/plugins/dubbo-plugin"},next:{title:"Sofa Plugin",permalink:"/docs/2.3.0/plugins/sofa-plugin"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Introducing Plugin Support of SpringCould Gateway",id:"introducing-plugin-support-of-springcould-gateway",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Detail",id:"detail",children:[]}],c={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This plugin is the core of transforming ",(0,o.kt)("inlineCode",{parentName:"li"},"http protocol")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"springCloud protocol"),".")),(0,o.kt)("h2",{id:"introducing-plugin-support-of-springcould-gateway"},"Introducing Plugin Support of SpringCould Gateway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introducing those dependencies in the pom.xml file of the gateway. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul springCloud plugin start--\x3e\n<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-springcloud</artifactId>\n    <version>${last.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-httpclient</artifactId>\n    <version>${last.version}</version>\n</dependency>\n\x3c!--soul springCloud plugin end--\x3e\n\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-commons</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency> \n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plugin management-> springCloud, set to enable. "),(0,o.kt)("li",{parentName:"ul"},"This plugin needs to cooperate with ",(0,o.kt)("inlineCode",{parentName:"li"},"starter")," dependency, please refer to:",(0,o.kt)("a",{parentName:"li",href:"../users-guide/spring-cloud-proxy"},"user-spring"),"."),(0,o.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,o.kt)("a",{parentName:"li",href:"../admin/selector-and-rule"},"selector"),".")),(0,o.kt)("h2",{id:"detail"},"Detail"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application name: it is your specific application name that needs to be invoked after the conditions are matched."),(0,o.kt)("li",{parentName:"ul"},"Soul will obtain the real IP of the corresponding service and initiate http proxy calls from registration center of springCloud.")))}d.isMDXComponent=!0}}]);