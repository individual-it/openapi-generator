"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7221],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,c=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(c,l(l({ref:t},s),{},{components:n})):r.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"globals",title:"Global Properties"},p=void 0,d={unversionedId:"globals",id:"globals",title:"Global Properties",description:"Available Global Properties",source:"@site/../docs/global-properties.md",sourceDirName:".",slug:"/globals",permalink:"/docs/globals",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/global-properties.md",tags:[],version:"current",lastUpdatedBy:"Jim Schubert",lastUpdatedAt:1590923671,formattedLastUpdatedAt:"May 31, 2020",frontMatter:{id:"globals",title:"Global Properties"},sidebar:"docs",previous:{title:"Usage",permalink:"/docs/usage"},next:{title:"Configuration Options",permalink:"/docs/configuration"}},s={},u=[{value:"Available Global Properties",id:"available-global-properties",level:2},{value:"Note on Global Property declaration",id:"note-on-global-property-declaration",level:2}],m={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"available-global-properties"},"Available Global Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Acceptable value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"debugOpenAPI"),(0,o.kt)("td",{parentName:"tr",align:null},"Dumps JSON formatted and fully parsed OpenAPI document during generation"),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"debugModels"),(0,o.kt)("td",{parentName:"tr",align:null},"Dumps JSON formatted template-bound model information during generation"),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"debugOperations"),(0,o.kt)("td",{parentName:"tr",align:null},"Dumps JSON formatted template-bound operation information during generation"),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"debugSupportingFiles"),(0,o.kt)("td",{parentName:"tr",align:null},"Dumps JSON formatted Supporting File information during generation"),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"verbose"),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the verbosity"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"generateAliasAsModel"),(0,o.kt)("td",{parentName:"tr",align:null},"Defines whether primitive types defined at the model/schema level will be wrapped in a model"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"org.openapitools.codegen.utils.oncelogger.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},'Enable/disable the "OnceLogger" which reduces noise for select repeated logs'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"supportingFiles"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to define which supporting files will be generated. Prefer using the more robust ",(0,o.kt)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"no value, or a comma-separated string of file names")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"models"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to define which models will be generated. Prefer using the more robust ",(0,o.kt)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"no value, or a comma-separated string of model names")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"apis"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to define which apis will be generated. Prefer using the more robust ",(0,o.kt)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"no value, or a comma-separated string of api names")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"apiDocs"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to define if api docs will be generated. Prefer using the more robust ",(0,o.kt)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"modelDocs"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to define if model docs will be generated. Prefer using the more robust ",(0,o.kt)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"apiTests"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to define if api tests will be generated. Prefer using the more robust ",(0,o.kt)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"modelTests"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to define if model tests will be generated. Prefer using the more robust ",(0,o.kt)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"withXml"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to control support of XML generated constructs, where supported"),(0,o.kt)("td",{parentName:"tr",align:null},"none")))),(0,o.kt)("h2",{id:"note-on-global-property-declaration"},"Note on Global Property declaration"),(0,o.kt)("p",null,"There are ",(0,o.kt)("em",{parentName:"p"},"two ways"),' to provide selective generation properties or "global properties". First, these can be passed as Java System Properties. Second, these can be passed via the global property tooling option (',(0,o.kt)("inlineCode",{parentName:"p"},"--global-property")," in CLI and ",(0,o.kt)("inlineCode",{parentName:"p"},"globalProperty")," in Maven and Gradle configurations). This differentiation is new in version 5.0 with the removal of the ",(0,o.kt)("inlineCode",{parentName:"p"},"-D")," CLI option and the renaming of ",(0,o.kt)("inlineCode",{parentName:"p"},"systemProperties"),". If you're upgrading to OpenAPI Generator 5.0+"),(0,o.kt)("p",null,"While the examples seen in ",(0,o.kt)("a",{parentName:"p",href:"/docs/customization"},"Customization")," use the Java System Property syntax, keep in mind that the following are equivalent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"java -Dmodels {jar} generate {opts}\n")),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"java {jar} generate {opts} --global-property=models\n")),(0,o.kt)("p",null,"Why the two differing ways to provide the same properties? We previously accepted a ",(0,o.kt)("inlineCode",{parentName:"p"},"-D"),' tooling option which resembled Java System Property declaration. In older versions of OpenAPI Generator, the option modified the SystemProperties collection directly and was truly a "system property". This option changed during the 4.x release in an effort to make OpenAPI Generator thread-safe and isolate its configuration via thread locals. We no longer mutate System Properties. In the 4.x release and earlier, specifying the tooling ',(0,o.kt)("inlineCode",{parentName:"p"},"-D")," option with system properties intended for other tools like swagger-parser rather than passing them as true Java System Properties would lead to unexpected behavior for the user; if our tool set the system property ",(0,o.kt)("em",{parentName:"p"},"after")," invoking certain code, it would seem to the user like Java System Properties weren't working!"))}g.isMDXComponent=!0}}]);