"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5354],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||a;return n?l.createElement(h,u(u({ref:t},p),{},{components:n})):l.createElement(h,u({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9294:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),u=["components"],i={title:"Apache ShenYu Issue And Pull Request",description:"Apache ShenYu Issue And Pull Request",author:"xiaoyu",categories:"Apache ShenYu",tags:["Issue-PR"]},o=void 0,s={unversionedId:"Apache-ShenYu-Issue-And-Pull-Request",id:"Apache-ShenYu-Issue-And-Pull-Request",isDocsHomePage:!1,title:"Apache ShenYu Issue And Pull Request",description:"Apache ShenYu Issue And Pull Request",source:"@site/community/2-Apache-ShenYu-Issue-And-Pull-Request.md",sourceDirName:".",slug:"/Apache-ShenYu-Issue-And-Pull-Request",permalink:"/community/Apache-ShenYu-Issue-And-Pull-Request",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/2-Apache-ShenYu-Issue-And-Pull-Request.md",version:"current",lastUpdatedBy:"dengliming",lastUpdatedAt:1630470378,formattedLastUpdatedAt:"9/1/2021",sidebarPosition:2,frontMatter:{title:"Apache ShenYu Issue And Pull Request",description:"Apache ShenYu Issue And Pull Request",author:"xiaoyu",categories:"Apache ShenYu",tags:["Issue-PR"]},sidebar:"community",previous:{title:"Apache ShenYu Code Conduct",permalink:"/community/Apache-ShenYu-Code-Conduct"},next:{title:"Apache ShenYu Contributor",permalink:"/community/Apache-ShenYu-Contributor's-Guide"}},p=[{value:"Create Issues",id:"create-issues",children:[]},{value:"Commit Messages",id:"commit-messages",children:[]},{value:"Pull Request",id:"pull-request",children:[]},{value:"Issue Label",id:"issue-label",children:[]},{value:"Merged Pull Request",id:"merged-pull-request",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-issues"},"Create Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you have any problems, you can choose to create an issue to describe."),(0,a.kt)("li",{parentName:"ul"},"It has 4 types which are: Bug Report, Feature Request, Question and Task."),(0,a.kt)("li",{parentName:"ul"},"Please follow the template for each type, if the more detailed your information is, the more it will help to solve your problem.")),(0,a.kt)("h2",{id:"commit-messages"},"Commit Messages"),(0,a.kt)("p",null,"Format is : ",(0,a.kt)("inlineCode",{parentName:"p"},"<type> (<module>) : <body>"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<type>"),": Define your modify type, Including but not limited to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"refactor"),(0,a.kt)("li",{parentName:"ul"},"fix"),(0,a.kt)("li",{parentName:"ul"},"docs"),(0,a.kt)("li",{parentName:"ul"},"test"),(0,a.kt)("li",{parentName:"ul"},"feature\n...")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<module>"),": Any of the modules belonging to the Apache ShenYu project,Please strictly follow the name of the project, Including but not limited to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"admin"),(0,a.kt)("li",{parentName:"ul"},"client"),(0,a.kt)("li",{parentName:"ul"},"common"),(0,a.kt)("li",{parentName:"ul"},"metrics"),(0,a.kt)("li",{parentName:"ul"},"spi"),(0,a.kt)("li",{parentName:"ul"},"plugin-grpc"),(0,a.kt)("li",{parentName:"ul"},"plugin-alibaba-dubbo"),(0,a.kt)("li",{parentName:"ul"},"register-client-nacos\n...")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<body>"),":Short description for commit messages. Please note the following rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No need for any capitalized words")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Please end with ",(0,a.kt)("inlineCode",{parentName:"p"},".")))),(0,a.kt)("p",null,"for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"refactor admin : modify some error log."),(0,a.kt)("li",{parentName:"ul"},"fix plugin-grpc :\xa0modify\xa0 \xa0result error."),(0,a.kt)("li",{parentName:"ul"},"feature plugin-alibaba-dubbo : add request for tag router.")),(0,a.kt)("h2",{id:"pull-request"},"Pull Request"),(0,a.kt)("p",null,"First of all, before Pull Request, you have to create issueNo Format is : ","[ISSUE #{issue number}]"," ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>"),"."),(0,a.kt)("p",null,"Please note the following rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A space is required between ISSUE and issue number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<body>")," : The first word needs to be capitalized, Other words no longer appear in capital letters.")),(0,a.kt)("p",null,"for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[ISSUE #123]"," Support spring cloud grayscale release.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[ISSUE #456]"," Fix dubbo plugin have some error."))),(0,a.kt)("h2",{id:"issue-label"},"Issue Label"),(0,a.kt)("p",null,"We need to Label to all issues. All of Apache ShenYu community's lists are here : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dromara/shenyu/labels"},"https://github.com/dromara/shenyu/labels"),"."),(0,a.kt)("p",null,"In general, an issue should be marked with 2 Label. One is the type of issue, and the other is the project module to which the issue belongs."),(0,a.kt)("p",null,"Except for the following Labels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[type: build]"),(0,a.kt)("li",{parentName:"ul"},"[type: community]"),(0,a.kt)("li",{parentName:"ul"},"[type: discussion]"),(0,a.kt)("li",{parentName:"ul"},"[type: duplicate]"),(0,a.kt)("li",{parentName:"ul"},"[TODO-LIST]"),(0,a.kt)("li",{parentName:"ul"},"[status: wontfix]","\n...")),(0,a.kt)("h2",{id:"merged-pull-request"},"Merged Pull Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All pull request must be approve and review.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Give appropriate advice whenever possible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In general, pull\xa0request\xa0 \xa0should be marked with 2 Lable and must set milestone.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After the merge is completed, need to check if the associated issueNo is closed."))))}m.isMDXComponent=!0}}]);