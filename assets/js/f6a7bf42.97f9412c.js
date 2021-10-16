"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3221],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83654:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var i=n(87462),r=n(63366),l=(n(67294),n(3905)),a=["components"],o={sidebar_position:8,title:"Resilience4j Plugin",keywords:["soul"],description:"resilience4j plugin"},u=void 0,s={unversionedId:"plugins/resilience4j-plugin",id:"version-2.3.0/plugins/resilience4j-plugin",isDocsHomePage:!1,title:"Resilience4j Plugin",description:"resilience4j plugin",source:"@site/versioned_docs/version-2.3.0/plugins/resilience4j-plugin.md",sourceDirName:"plugins",slug:"/plugins/resilience4j-plugin",permalink:"/docs/2.3.0/plugins/resilience4j-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/plugins/resilience4j-plugin.md",version:"2.3.0",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Resilience4j Plugin",keywords:["soul"],description:"resilience4j plugin"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Sentinel Plugin",permalink:"/docs/2.3.0/plugins/sentinel-plugin"},next:{title:"Monitor Plugin",permalink:"/docs/2.3.0/plugins/monitor-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Usage",id:"plugin-usage",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"explanation"},"Explanation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Resilience4j is one of the options that supports flow control and circuit breaking."),(0,l.kt)("li",{parentName:"ul"},"Resilience4j supports flow control and circuit breaking functions for gateway.")),(0,l.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e  plugin management --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"resilience4j")," set to enable."),(0,l.kt)("li",{parentName:"ul"},"If you don't want to use it, please close the plugin in ",(0,l.kt)("inlineCode",{parentName:"li"},"soul-admin"),".")),(0,l.kt)("h2",{id:"plugin-usage"},"Plugin Usage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Introducing the follow supports to the pom.xml file of soul project.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul resilience4j plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-resilience4j</artifactId>\n       <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul resilience4j plugin end--\x3e\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Selectors and rules, please refer to: ",(0,l.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"selector"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Resilience4j Processing Details"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"timeoutDurationRate \uff1aConfigures wait time(ms) a thread waits for a permission,default value:5000\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"limitRefreshPeriod \uff1aConfigures the period of a limit refresh. After each period the rate limiter sets its permissions count back to the limitForPeriod value,default value:500\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"limitForPeriod \uff1aConfigures the number of permissions available during one limit refresh period,default value:50\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"circuitEnable \uff1aConfigures circuitBreaker enable,0:OFF,1:ON ,default value:0\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"timeoutDuration \uff1aConfigures request CircuitBreaker timeout(ms),default value:30000\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"fallbackUri \uff1aConfigures the fall back uri\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"slidingWindowSize \uff1aConfigures the size of the sliding window which is used to record the outcome of calls when the CircuitBreaker is closed,default value:100\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"slidingWindowType \uff1aConfigures the type of the sliding window which is used to record the outcome of calls when the CircuitBreaker is closed,\nSliding window can either be 0:count-based or 1:time-based.,default value:0\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"minimumNumberOfCalls \uff1aConfigures the minimum number of calls which are required (per sliding window period) before the CircuitBreaker can calculate the error rate or slow call rate,default value:100\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"waitIntervalFunctionInOpenState \uff1aConfigures the circuitBreaker time(ms) of duration,default value:10\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"permittedNumberOfCallsInHalfOpenState \uff1aConfigures the number of permitted calls when the CircuitBreaker is half open,default value:10\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"failureRateThreshold \uff1aConfigures the failure rate threshold in percentage,When the failure rate is equal or greater than the threshold the CircuitBreaker transitions to open and starts short-circuiting calls,default value:50\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"automaticTransitionFromOpenToHalfOpenEnabled \uff1aConfigures automatically transition from open state to half open state,true:ON,false:OFF,default value:false\u3002"))))))}m.isMDXComponent=!0}}]);