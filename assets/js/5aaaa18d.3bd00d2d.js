"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9188],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2053:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"\u3010Soul gateway release milestone version 2.3.0\u3011New support for grpc, tars and sofa protocols!",author:"xiaoyu",description:"Soul gateway release milestone version 2.3.0 New support for grpc, tars and sofa protocols",categories:"Apache ShenYu",tags:["Apache ShenYu"],date:new Date("2020-07-05T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},u=void 0,s={permalink:"/news/Soul-gateway-release-milestone-version-2.3.0",source:"@site/news/Soul-gateway-release-milestone-version-2.3.0.md",title:"\u3010Soul gateway release milestone version 2.3.0\u3011New support for grpc, tars and sofa protocols!",description:"Soul gateway release milestone version 2.3.0 New support for grpc, tars and sofa protocols",date:"2020-07-05T00:00:00.000Z",formattedDate:"July 5, 2020",tags:[{label:"Apache ShenYu",permalink:"/news/tags/apache-shen-yu"}],readingTime:3.365,truncated:!1,prevItem:{title:"[How I became an Apache ShenYu Committer one year after graduation]",permalink:"/news/Apache-ShenYu-Committer-2021-07-27"}},c=[{value:"soul-admin\uff08dashboard\uff09",id:"soul-admindashboard",children:[]},{value:"Soul gateway plugin",id:"soul-gateway-plugin",children:[{value:"New plugins",id:"new-plugins",children:[]},{value:"plugins optimization",id:"plugins-optimization",children:[]}]},{value:"Soul Client",id:"soul-client",children:[]},{value:"Soul data synchronization",id:"soul-data-synchronization",children:[]},{value:"Thanks",id:"thanks",children:[]},{value:"Join us",id:"join-us",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It's half a year since the last release. In this half a year, our community friends and I have done too much. Completed nearly 200 PR, published nearly 300 articles of source code analysis, added more than 120 contributors, promoted 7 members of the commiter who  won the legitimate JetBrains. We have completed many, many functions  With their help. Thank you very much."),(0,r.kt)("h2",{id:"soul-admindashboard"},"soul-admin\uff08dashboard\uff09"),(0,r.kt)("p",null,"Admin is the control panel of the whole gateway, which is in charge of all traffic and rules matching."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Shiro framework is integrated into admin to complete the  permission control in user button level. "),(0,r.kt)("li",{parentName:"ul"},"Templated plug-ins allow users to focus on data configuration without perceiving front-end pages."),(0,r.kt)("li",{parentName:"ul"},"The internationalization of the whole backend of admin , supports switching between Chinese and English. "),(0,r.kt)("li",{parentName:"ul"},"New support for H2 to store data."),(0,r.kt)("li",{parentName:"ul"},"Beautiful optimization of admin interface (table, button)."),(0,r.kt)("li",{parentName:"ul"},"New unit tests have been added, with a coverage rate of 70%.")),(0,r.kt)("h2",{id:"soul-gateway-plugin"},"Soul gateway plugin"),(0,r.kt)("h3",{id:"new-plugins"},"New plugins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Grpc plugin to fully support grpc protocol."),(0,r.kt)("li",{parentName:"ul"},"Add Tars plugin to support Tencent tars RPC Protocol."),(0,r.kt)("li",{parentName:"ul"},"Add sofa plugin supports the sofa RPC Protocol."),(0,r.kt)("li",{parentName:"ul"},"Add sentinel plugin to integrate the fusing and current limiting function of sentinel framework."),(0,r.kt)("li",{parentName:"ul"},"Add The resilience4j plugin to integrate the fusing and current limiting function of resilience4j framework."),(0,r.kt)("li",{parentName:"ul"},"Add the redisect plugin to support user redirection."),(0,r.kt)("li",{parentName:"ul"},"Add context path plugin to support user-defined context path")),(0,r.kt)("h3",{id:"plugins-optimization"},"plugins optimization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Divide plugin: optimization of node detection mode and flow preheating mode."),(0,r.kt)("li",{parentName:"ul"},"Ratelimit plugin: add some different current limiting algorithms  such as concurrent, leaky bucket and other for users to choose ."),(0,r.kt)("li",{parentName:"ul"},"Sign plugin: fix the bug that URL must be set; add whether to verify flag, which can be used for URI authentication of open platform."),(0,r.kt)("li",{parentName:"ul"},"Dubbo plugin: add form, URI parameter request, direct connection to registration center , parameter verification and other functions.")),(0,r.kt)("h2",{id:"soul-client"},"Soul Client"),(0,r.kt)("p",null,"Soul client only provides a client to access the soul gateway with a quick way, which is not necessary. you can configure the rules in Soul admin If you don't use Soul Client. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spring MVC client optimization, support spring, spring boot all versions."),(0,r.kt)("li",{parentName:"ul"},"Spring cloud client optimization, support spring, spring boot all versions."),(0,r.kt)("li",{parentName:"ul"},"Dubbo client optimization, support spring, spring boot all versions."),(0,r.kt)("li",{parentName:"ul"},"Soul grpc client is added to support grpc Java user access."),(0,r.kt)("li",{parentName:"ul"},"Soul tars client is added to support tars Java user access."),(0,r.kt)("li",{parentName:"ul"},"Soul sofa client is added to support sofa Java user access.")),(0,r.kt)("p",null,"In the previous version, only HTTP access is supported, but  the registry access is added this time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zookeeper is added as the registration center to access Soul gateway."),(0,r.kt)("li",{parentName:"ul"},"Nacos is added as the registration center to access Soul gateway."),(0,r.kt)("li",{parentName:"ul"},"Consul is added as the registration center to access Soul gateway."),(0,r.kt)("li",{parentName:"ul"},"Etcd is added as the registration center to access Soul gateway."),(0,r.kt)("li",{parentName:"ul"},"Please refer to ",(0,r.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/en/projects/shenyu/register-center-design/"},"https://shenyu.apache.org/en/projects/shenyu/register-center-design/"))),(0,r.kt)("h2",{id:"soul-data-synchronization"},"Soul data synchronization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix bugs in Nacos configuration center that do not have namespace set."),(0,r.kt)("li",{parentName:"ul"},"Optimize websocket synchronization mode."),(0,r.kt)("li",{parentName:"ul"},"Solve the HTTP long polling synchronous data bug when  the soul admin in deployed in cluster")),(0,r.kt)("h2",{id:"thanks"},"Thanks"),(0,r.kt)("p",null,"This is a milestone release and a formal change of Soul gateway. Our dashboard, code, documents, issue and PR are all internationalized in English, and the unit test coverage of the whole project has reached 70%.Thank you again for your hard work. Although we have completed a lot of functions (I did not fully list them above), we will have more challenges in the future. I believe that with you, this is not our end, but our starting point."),(0,r.kt)("h2",{id:"join-us"},"Join us"),(0,r.kt)("p",null,"At present, Soul is in the stage of rapid development. If you want to write high-quality code, or want to deeply understand the API gateway, or enjoy the fun of open source, you are welcome to join our community"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"github : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu"},"https://github.com/apache/incubator-shenyu")," "),(0,r.kt)("li",{parentName:"ul"},"gitee : ",(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/Apache-ShenYu/incubator-shenyu"},"https://gitee.com/Apache-ShenYu/incubator-shenyu")," "),(0,r.kt)("li",{parentName:"ul"},"QQ group\uff1a429951241")))}d.isMDXComponent=!0}}]);