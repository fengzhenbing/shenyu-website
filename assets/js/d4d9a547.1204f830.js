"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8985],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,b=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(b,i(i({ref:t},s),{},{components:a})):n.createElement(b,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6503:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:3,title:"Integrate dubbo with soul gateway",keywords:["soul"],description:"Integrate dubbo with soul gateway"},p=void 0,u={unversionedId:"users-guide/dubbo-proxy",id:"version-2.3.0/users-guide/dubbo-proxy",isDocsHomePage:!1,title:"Integrate dubbo with soul gateway",description:"Integrate dubbo with soul gateway",source:"@site/versioned_docs/version-2.3.0/users-guide/dubbo-proxy.md",sourceDirName:"users-guide",slug:"/users-guide/dubbo-proxy",permalink:"/docs/2.3.0/users-guide/dubbo-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/users-guide/dubbo-proxy.md",version:"2.3.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Integrate dubbo with soul gateway",keywords:["soul"],description:"Integrate dubbo with soul gateway"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Integrate Http with soul gateway",permalink:"/docs/2.3.0/users-guide/http-proxy"},next:{title:"SpringCloud Proxy",permalink:"/docs/2.3.0/users-guide/spring-cloud-proxy"}},s=[{value:"Features",id:"features",children:[]},{value:"Configure soul gateway as Dubbo proxy",id:"configure-soul-gateway-as-dubbo-proxy",children:[]},{value:"Dubbo configuration",id:"dubbo-configuration",children:[{value:"Configure the interface with gateway",id:"configure-the-interface-with-gateway",children:[]},{value:"Dubbo user request and parameter explanation.",id:"dubbo-user-request-and-parameter-explanation",children:[]}]},{value:"Service governance",id:"service-governance",children:[]},{value:"Let&#39;s break down this process: http --&gt; gateway --&gt; dubbo provider",id:"lets-break-down-this-process-http----gateway----dubbo-provider",children:[]}],d={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This chapter is a guide about integrating dubbo service with soul gateway."),(0,o.kt)("li",{parentName:"ul"},"Support Alibaba Dubbo(< 2.7.x) and Apache Dubbo (>=2.7.x)."),(0,o.kt)("li",{parentName:"ul"},"Please start ",(0,o.kt)("inlineCode",{parentName:"li"},"soul-admin")," successfully before integrating, and ",(0,o.kt)("a",{parentName:"li",href:"./soul-set-up"},"Environment Setup")," is Ok.")),(0,o.kt)("h2",{id:"configure-soul-gateway-as-dubbo-proxy"},"Configure soul gateway as Dubbo proxy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add these dependencies in gateway's ",(0,o.kt)("inlineCode",{parentName:"li"},"pom.xml"),"."),(0,o.kt)("li",{parentName:"ul"},"Alibaba dubbo user, configure the dubbo version and registry center with yours.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul alibaba dubbo plugin start--\x3e\n<dependency>\n  <groupId>org.dromara</groupId>\n  <artifactId>soul-spring-boot-starter-plugin-alibaba-dubbo</artifactId>\n  <version>${last.version}</version>\n</dependency>\n\x3c!-- soul  alibaba dubbo plugin end--\x3e\n<dependency>\n  <groupId>com.alibaba</groupId>\n  <artifactId>dubbo</artifactId>\n  <version>2.6.5</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-client</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-framework</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-recipes</artifactId>\n  <version>4.0.1</version>\n</dependency>   \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apache dubbo user, configure the dubbo version and registry center with yours.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul apache dubbo plugin start--\x3e\n<dependency>\n   <groupId>org.dromara</groupId>\n   <artifactId>soul-spring-boot-starter-plugin-apache-dubbo</artifactId>\n   <version>${last.version}</version>\n</dependency>\n\x3c!--soul apache dubbo plugin end--\x3e\n\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo</artifactId>\n   <version>2.7.5</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency start --\x3e\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo-registry-nacos</artifactId>\n   <version>2.7.5</version>\n</dependency>\n<dependency>\n   <groupId>com.alibaba.nacos</groupId>\n   <artifactId>nacos-client</artifactId>\n   <version>1.1.4</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency  end--\x3e\n\n\x3c!-- Dubbo zookeeper registry dependency start--\x3e\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-client</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-framework</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-recipes</artifactId>\n   <version>4.0.1</version>\n</dependency>\n\x3c!-- Dubbo zookeeper registry dependency end --\x3e\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"restart gateway service."),(0,o.kt)("p",{parentName:"li"},"Dubbo integration with gateway,pls refer to : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-dubbo"},"soul-examples-dubbo"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Alibaba Dubbo User"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SpringBoot"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add these dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.dromara</groupId>\n     <artifactId>soul-spring-boot-starter-client-alibaba-dubbo</artifactId>\n     <version>${last.version}</version>\n</dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"backend server register center config, please look:",(0,o.kt)("a",{parentName:"p",href:"../register-center/register-center-access"},"register center access"),".")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Spring"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add these dependencies\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"   <dependency>\n     <groupId>org.dromara</groupId>\n     <artifactId>soul-client-alibaba-dubbo</artifactId>\n     <version>${last.version}</version>\n  </dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Inject these properties into your Sping beans XML file\uff1a      "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id ="alibabaDubboServiceBeanPostProcessor" class ="org.dromara.soul.client.alibaba.dubbo.AlibabaDubboServiceBeanPostProcessor">\n     <constructor-arg  ref="soulRegisterCenterConfig"/>\n</bean>\n\n<bean id="soulRegisterCenterConfig" class="org.dromara.soul.register.common.config.SoulRegisterCenterConfig">\n   <property name="registerType" value="http"/>\n   <property name="serverList" value="http://localhost:9095"/>\n   <property name="props">\n       <map>\n           <entry key="contextPath" value="/your contextPath"/>\n           <entry key="appName" value="your name"/>\n           <entry key="isFull" value="false"/>\n       </map>\n    </property>\n </bean>\n'))))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Apache Dubbo User"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SpringBoot"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add these dependencies:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.dromara</groupId>\n     <artifactId>soul-spring-boot-starter-client-apache-dubbo</artifactId>\n     <version>${last.version}</version>\n</dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},"backend server register center config, please look:",(0,o.kt)("a",{parentName:"li",href:"../register-center/register-center-access"},"register center_access"),"\uff1a"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Spring  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add these dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-client-apache-dubbo</artifactId>\n      <version>${last.version}</version>\n   </dependency>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Injecct these properties into your Spring beans XML file:"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id ="apacheDubboServiceBeanPostProcessor" class ="org.dromara.soul.client.apache.dubbo.ApacheDubboServiceBeanPostProcessor">\n   <constructor-arg  ref="soulRegisterCenterConfig"/>\n</bean>\n\n<bean id="soulRegisterCenterConfig" class="org.dromara.soul.register.common.config.SoulRegisterCenterConfig">\n   <property name="registerType" value="http"/>\n   <property name="serverList" value="http://localhost:9095"/>\n   <property name="props">\n        <map>\n             <entry key="contextPath" value="/your contextPath"/>\n             <entry key="appName" value="your name"/>\n             <entry key="isFull" value="false"/>\n        </map>\n   </property>\n</bean>\n')))))),(0,o.kt)("h2",{id:"dubbo-configuration"},"Dubbo configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("inlineCode",{parentName:"li"},"dubbo")," option in ",(0,o.kt)("inlineCode",{parentName:"li"},"soul-admin"),"."),(0,o.kt)("li",{parentName:"ul"},"Configure your registry address in ",(0,o.kt)("inlineCode",{parentName:"li"},"dubbo"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{"register":"zookeeper://localhost:2181"}   or {"register":"nacos://localhost:8848"}\n')),(0,o.kt)("h3",{id:"configure-the-interface-with-gateway"},"Configure the interface with gateway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"you can add the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"@SoulDubboClient")," to your dubbo service implementation class, so that the interface method will be configured with gateway.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"start your provider and get the log ",(0,o.kt)("inlineCode",{parentName:"p"},"dubbo client register success "),"\uff0cthen your dubbo interface has been added with soul gateway successfully.Pls refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-test-dubbo"),"\nproject."))),(0,o.kt)("h3",{id:"dubbo-user-request-and-parameter-explanation"},"Dubbo user request and parameter explanation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"communicate with dubbo service through Http transport protocol."),(0,o.kt)("li",{parentName:"ul"},"soul gateway need a route prefix which configured when accessing the project.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# for example: you have an order service and it has a interface, his registry address: /order/test/save\n\n# now we can communicate with gateway through POST request http://localhost:9195/order/test/save\n\n# localhost:9195 is gateway's ip port\uff0cdefault port is 9195 \uff0c/order is the contextPath you set through gateway.\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"parameter deliver:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"communicate with gateway through body or json of http post request."),(0,o.kt)("li",{parentName:"ul"},"more parameter types, pls refer to the interface definition in  ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-dubbo"},"soul-examples-dubbo")," and parameter passing\nmethod."))),(0,o.kt)("li",{parentName:"ul"},"Single java bean parameter type (",(0,o.kt)("inlineCode",{parentName:"li"},"default"),")."),(0,o.kt)("li",{parentName:"ul"},"Multi-parameter type support, add this config value in gateway's yaml file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"soul:\n  dubbo:\n    parameter: multi\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for customized multi-parameter type"),(0,o.kt)("li",{parentName:"ul"},"Create a new implementation class A in your gateway project of ",(0,o.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.web.dubbo.DubboParamResolveService"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface DubboParamResolveService {\n\n   /**\n    * Build parameter pair.\n    * this is Resolve http body to get dubbo param.\n    *\n    * @param body           the body\n    * @param parameterTypes the parameter types\n    * @return the pair\n    */\n   Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"body")," is the json string in http request."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parameterTypes"),": the list of method parameter types that are matched\uff0csplit with ",(0,o.kt)("inlineCode",{parentName:"li"},","),"."),(0,o.kt)("li",{parentName:"ul"},"in Pair\uff0cleft is parmeter type\uff0cright is parameter value, it's the standard of dubbo generalization calls."),(0,o.kt)("li",{parentName:"ul"},"Inject your class into Spring bean, cover the default implementation.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic DubboParamResolveService A() {\n      return new A();\n}\n")),(0,o.kt)("h2",{id:"service-governance"},"Service governance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tag route"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"Dubbo_Tag_Route")," when send request, the current request will be routed to the provider of the specified tag, which is only valid for the current request."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Explicit Target"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"url")," property in the annotation ",(0,o.kt)("inlineCode",{parentName:"li"},"@SoulDubboClient"),"."),(0,o.kt)("li",{parentName:"ul"},"Update the configuration in Admin."),(0,o.kt)("li",{parentName:"ul"},"It's valid for all request."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Param valid and SoulException"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},'validation="soulValidation"'),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("inlineCode",{parentName:"p"},"SoulException")," is thrown in the interface, exception information will be returned. It should be noted that ",(0,o.kt)("inlineCode",{parentName:"p"},"SoulException")," is thrown explicitly."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Service(validation = "soulValidation")\npublic class TestServiceImpl implements TestService {\n\n        @Override\n        @SoulDubboClient(path = "/test", desc = "test method")\n        public String test(@Valid HelloServiceRequest name) throws SoulException {\n            if (true){\n                throw new SoulException("Param binding error.");\n            }\n            return "Hello " + name.getName();\n        }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request param"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    public class HelloServiceRequest implements Serializable {\n    \n        private static final long serialVersionUID = -5968745817846710197L;\n    \n        @NotEmpty(message = "name cannot be empty")\n        private String name;\n    \n        @NotNull(message = "age cannot be null")\n        private Integer age;\n    \n        public String getName() {\n            return name;\n        }\n    \n        public void setName(String name) {\n            this.name = name;\n        }\n    \n        public Integer getAge() {\n            return age;\n        }\n    \n        public void setAge(Integer age) {\n            this.age = age;\n        }\n    }\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Send request"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": ""\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "name cannot be empty,age cannot be null"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Error message"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "Param binding error."\n}\n')))))),(0,o.kt)("h2",{id:"lets-break-down-this-process-http----gateway----dubbo-provider"},"Let's break down this process: http --\x3e gateway --\x3e dubbo provider"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It basically switches from HTTP request to Dubbo protocol, then invoke Dubbo service and return to the result."),(0,o.kt)("li",{parentName:"ul"},"Two things need to notice after intgeration with gateway, one is the added annoation ",(0,o.kt)("inlineCode",{parentName:"li"},"@SoulDubboClient"),", another is a path used to speicify the request path."),(0,o.kt)("li",{parentName:"ul"},"And you added a config value of ",(0,o.kt)("inlineCode",{parentName:"li"},"contextPath"),"."),(0,o.kt)("li",{parentName:"ul"},"If you still remember, then we can start."),(0,o.kt)("li",{parentName:"ul"},"If you have a function like this, the config value in contextPath is ",(0,o.kt)("inlineCode",{parentName:"li"},"/dubbo"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    @SoulDubboClient(path = "/insert", desc = "insert data")\n    public DubboTest insert(final DubboTest dubboTest) {\n        return dubboTest;\n    }\n')),(0,o.kt)("p",null,"So our request path is: http://localhost:9195/dubbo/insert, localhost:9195 is the gateway's domain name,if you changed before,so does with yours here.."),(0,o.kt)("p",null,"How about the request parameter? ",(0,o.kt)("inlineCode",{parentName:"p"},"DubboTest")," is a java bean object\uff0chas 2 parameters, id and name, so we can transfer the value's json type through request body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"id":"1234","name":"XIAO5y"}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your interface has no parameter, then the value is:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your interface has multi-parameter, pls refer to the guide above.")))}c.isMDXComponent=!0}}]);