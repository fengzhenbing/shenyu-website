"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8038],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1099:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"ModifyResponse Plugin",keywords:["modifyResponse"],description:"modifyResponse Plugin"},p=void 0,s={unversionedId:"plugin-center/http-handle/modify-response-plugin",id:"plugin-center/http-handle/modify-response-plugin",isDocsHomePage:!1,title:"ModifyResponse Plugin",description:"modifyResponse Plugin",source:"@site/docs/plugin-center/http-handle/modify-response-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/modify-response-plugin",permalink:"/docs/next/plugin-center/http-handle/modify-response-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/http-handle/modify-response-plugin.md",version:"current",frontMatter:{title:"ModifyResponse Plugin",keywords:["modifyResponse"],description:"modifyResponse Plugin"},sidebar:"tutorialSidebar",previous:{title:"Divide Plugin",permalink:"/docs/next/plugin-center/http-handle/divide-plugin"},next:{title:"Param-mapping Plugin",permalink:"/docs/next/plugin-center/http-handle/param-mapping-plugin"}},u=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"ModifyResponsePlugin Guide",id:"modifyresponseplugin-guide",children:[]}],d={toc:u};function c(e){var n=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"modifyResponse")," is a native plugin of ",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway and is used to edit response header and body and statusCode.")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"modifyResponse")," , set to enable.")),(0,a.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introduce ",(0,a.kt)("inlineCode",{parentName:"li"},"modifyResponse")," dependency in the pom.xml file of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu modify response plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-modify-response</artifactId>\n  <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu modify response plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to:",(0,a.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"only those matched requests can be modified response.")))),(0,a.kt)("h2",{id:"modifyresponseplugin-guide"},"ModifyResponsePlugin Guide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.Configuration selector"),(0,a.kt)("li",{parentName:"ul"},"2.Configuration rule"),(0,a.kt)("li",{parentName:"ul"},"3.modify response statusCode\n",(0,a.kt)("img",{src:t(3645).Z})),(0,a.kt)("li",{parentName:"ul"},"4.modify response header\n",(0,a.kt)("img",{src:t(5710).Z})),(0,a.kt)("li",{parentName:"ul"},"5.modify response body\n",(0,a.kt)("img",{src:t(8681).Z})),(0,a.kt)("li",{parentName:"ul"},"param details:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addHeaders"),": add response header\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"key-value"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setHeaders"),": set response header\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"key-value"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replaceHeaderKeys"),": replace response header name\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removeHeaderKeys"),": remove response header ",(0,a.kt)("inlineCode",{parentName:"li"},"key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"statusCode"),": response status code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addBodyKeys"),": add response body"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replaceBodyKeys"),": replace response body \uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removeBodyKeys"),": remove response body ",(0,a.kt)("inlineCode",{parentName:"li"},"key"))))),(0,a.kt)("p",null,"modify response body is achieved through ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONPath")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"$.")," represents the root directory."),(0,a.kt)("p",null,"use the configuration\uff0cunopened the plugin\uff0cresponse body is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"id":3,"name":"hello world findById"}\n')),(0,a.kt)("p",null,"open the plugin\uff0cresponse body is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"id2":3,"add":"4"}\n')))}c.isMDXComponent=!0},8681:function(e,n,t){n.Z=t.p+"assets/images/modifyBody-en-fa57f66c274d0ab89fce27bd95317b6e.png"},5710:function(e,n,t){n.Z=t.p+"assets/images/modifyHeader-en-930b4badfebbee15d2d9d5b384669404.png"},3645:function(e,n,t){n.Z=t.p+"assets/images/modifyStatus-en-fa50ac082c8151bfe64ce6cc331520d7.png"}}]);