"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3159],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return g}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),k=p(a),N=l,g=k["".concat(d,".").concat(N)]||k[N]||o[N]||r;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u[k]="string"==typeof t?t:l,i[1]=u;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},5488:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],u={title:"Documentation for the ada Generator"},d=void 0,p={unversionedId:"generators/ada",id:"generators/ada",title:"Documentation for the ada Generator",description:"METADATA",source:"@site/../docs/generators/ada.md",sourceDirName:"generators",slug:"/generators/ada",permalink:"/docs/generators/ada",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/ada.md",tags:[],version:"current",lastUpdatedBy:"Justin Black",lastUpdatedAt:1650213369,formattedLastUpdatedAt:"Apr 17, 2022",frontMatter:{title:"Documentation for the ada Generator"}},m={},k=[{value:"METADATA",id:"metadata",level:2},{value:"CONFIG OPTIONS",id:"config-options",level:2},{value:"IMPORT MAPPING",id:"import-mapping",level:2},{value:"INSTANTIATION TYPES",id:"instantiation-types",level:2},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",level:2},{value:"RESERVED WORDS",id:"reserved-words",level:2},{value:"FEATURE SET",id:"feature-set",level:2},{value:"Client Modification Feature",id:"client-modification-feature",level:3},{value:"Data Type Feature",id:"data-type-feature",level:3},{value:"Documentation Feature",id:"documentation-feature",level:3},{value:"Global Feature",id:"global-feature",level:3},{value:"Parameter Feature",id:"parameter-feature",level:3},{value:"Schema Support Feature",id:"schema-support-feature",level:3},{value:"Security Feature",id:"security-feature",level:3},{value:"Wire Format Feature",id:"wire-format-feature",level:3}],o={toc:k};function N(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"metadata"},"METADATA"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator name"),(0,r.kt)("td",{parentName:"tr",align:null},"ada"),(0,r.kt)("td",{parentName:"tr",align:null},"pass this to the generate command after -g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator stability"),(0,r.kt)("td",{parentName:"tr",align:null},"STABLE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator type"),(0,r.kt)("td",{parentName:"tr",align:null},"CLIENT"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator language"),(0,r.kt)("td",{parentName:"tr",align:null},"Ada"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator default templating engine"),(0,r.kt)("td",{parentName:"tr",align:null},"mustache"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"helpTxt"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates an Ada client implementation (beta)."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"config-options"},"CONFIG OPTIONS"),(0,r.kt)("p",null,"These options may be applied as additional-properties (cli) or configOptions (plugins). Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/configuration"},"configuration docs")," for more details."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowUnicodeIdentifiers"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, toggles whether unicode identifiers are allowed in names or not, default is false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disallowAdditionalPropertiesIfNotPresent"),(0,r.kt)("td",{parentName:"tr",align:null},"If false, the 'additionalProperties' implementation (set to true by default) is compliant with the OAS and JSON schema specifications. If true (default), keep the old (incorrect) behaviour that 'additionalProperties' is set to false by default."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("strong",{parentName:"td"},"false")),(0,r.kt)("dd",null,"The 'additionalProperties' implementation is compliant with the OAS and JSON schema specifications."),(0,r.kt)("dt",null,(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("dd",null,"Keep the old (incorrect) behaviour that 'additionalProperties' is set to false by default."))),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ensureUniqueParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ensure parameter names are unique in an operation (rename parameters that are not)."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enumUnknownDefaultCase"),(0,r.kt)("td",{parentName:"tr",align:null},"If the server adds new enum cases, that are unknown by an old spec/client, the client will fail to parse the network response.With this option enabled, each enum will have a new case, 'unknown_default_open_api', so that when the server sends an enum case that is not known by the client/spec, they can safely fallback to this case."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("strong",{parentName:"td"},"false")),(0,r.kt)("dd",null,"No changes to the enum's are made, this is the default option."),(0,r.kt)("dt",null,(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("dd",null,"With this option enabled, each enum will have a new case, 'unknown_default_open_api', so that when the enum case sent by the server is not known by the client/spec, can safely be decoded to this case."))),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpSupport"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the HTTP support library.  Possible values include 'curl' or 'aws'."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legacyDiscriminatorBehavior"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to false for generators with better support for discriminators. (Python, Java, Go, PowerShell, C#have this enabled by default)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("dd",null,"The mapping in the discriminator includes descendent schemas that allOf inherit from self and the discriminator mapping schemas in the OAS document."),(0,r.kt)("dt",null,(0,r.kt)("strong",{parentName:"td"},"false")),(0,r.kt)("dd",null,"The mapping in the discriminator includes any descendent schemas that allOf inherit from self, any oneOf schemas, any anyOf schemas, any x-discriminator-values, and the discriminator mapping schemas in the OAS document AND Codegen validates that oneOf and anyOf schemas contain the required discriminator and throws an error if the discriminator is missing."))),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openApiName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Ada package which provides support for OpenAPI for the generated client and server code.  The default is 'Swagger'."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prependFormOrBodyParameters"),(0,r.kt)("td",{parentName:"tr",align:null},"Add form or body parameters to the beginning of the parameter list."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projectName"),(0,r.kt)("td",{parentName:"tr",align:null},"GNAT project name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"defaultProject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortModelPropertiesByRequiredFlag"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort model properties to place required parameters before optional parameters."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortParamsByRequiredFlag"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort method arguments to place required parameters before optional parameters."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h2",{id:"import-mapping"},"IMPORT MAPPING"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type/Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Imports")))),(0,r.kt)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type/Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Instantiated By")))),(0,r.kt)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),(0,r.kt)("ul",{class:"column-ul"},(0,r.kt)("li",null,"DateTime"),(0,r.kt)("li",null,"binary"),(0,r.kt)("li",null,"boolean"),(0,r.kt)("li",null,"date"),(0,r.kt)("li",null,"double"),(0,r.kt)("li",null,"float"),(0,r.kt)("li",null,"integer"),(0,r.kt)("li",null,"long"),(0,r.kt)("li",null,"number"),(0,r.kt)("li",null,"object"),(0,r.kt)("li",null,"string")),(0,r.kt)("h2",{id:"reserved-words"},"RESERVED WORDS"),(0,r.kt)("ul",{class:"column-ul"},(0,r.kt)("li",null,"abort"),(0,r.kt)("li",null,"abs"),(0,r.kt)("li",null,"abstract"),(0,r.kt)("li",null,"accept"),(0,r.kt)("li",null,"access"),(0,r.kt)("li",null,"aliased"),(0,r.kt)("li",null,"all"),(0,r.kt)("li",null,"and"),(0,r.kt)("li",null,"array"),(0,r.kt)("li",null,"at"),(0,r.kt)("li",null,"begin"),(0,r.kt)("li",null,"body"),(0,r.kt)("li",null,"case"),(0,r.kt)("li",null,"constant"),(0,r.kt)("li",null,"declare"),(0,r.kt)("li",null,"delay"),(0,r.kt)("li",null,"digits"),(0,r.kt)("li",null,"do"),(0,r.kt)("li",null,"else"),(0,r.kt)("li",null,"elsif"),(0,r.kt)("li",null,"end"),(0,r.kt)("li",null,"entry"),(0,r.kt)("li",null,"exception"),(0,r.kt)("li",null,"exit"),(0,r.kt)("li",null,"for"),(0,r.kt)("li",null,"function"),(0,r.kt)("li",null,"generic"),(0,r.kt)("li",null,"goto"),(0,r.kt)("li",null,"if"),(0,r.kt)("li",null,"in"),(0,r.kt)("li",null,"interface"),(0,r.kt)("li",null,"is"),(0,r.kt)("li",null,"limited"),(0,r.kt)("li",null,"loop"),(0,r.kt)("li",null,"mod"),(0,r.kt)("li",null,"new"),(0,r.kt)("li",null,"not"),(0,r.kt)("li",null,"null"),(0,r.kt)("li",null,"of"),(0,r.kt)("li",null,"or"),(0,r.kt)("li",null,"others"),(0,r.kt)("li",null,"out"),(0,r.kt)("li",null,"overriding"),(0,r.kt)("li",null,"package"),(0,r.kt)("li",null,"pragma"),(0,r.kt)("li",null,"private"),(0,r.kt)("li",null,"procedure"),(0,r.kt)("li",null,"protected"),(0,r.kt)("li",null,"raise"),(0,r.kt)("li",null,"range"),(0,r.kt)("li",null,"record"),(0,r.kt)("li",null,"rem"),(0,r.kt)("li",null,"renames"),(0,r.kt)("li",null,"requeue"),(0,r.kt)("li",null,"return"),(0,r.kt)("li",null,"reverse"),(0,r.kt)("li",null,"select"),(0,r.kt)("li",null,"separate"),(0,r.kt)("li",null,"some"),(0,r.kt)("li",null,"subtype"),(0,r.kt)("li",null,"synchronized"),(0,r.kt)("li",null,"tagged"),(0,r.kt)("li",null,"task"),(0,r.kt)("li",null,"terminate"),(0,r.kt)("li",null,"then"),(0,r.kt)("li",null,"type"),(0,r.kt)("li",null,"until"),(0,r.kt)("li",null,"use"),(0,r.kt)("li",null,"when"),(0,r.kt)("li",null,"while"),(0,r.kt)("li",null,"with"),(0,r.kt)("li",null,"xor")),(0,r.kt)("h2",{id:"feature-set"},"FEATURE SET"),(0,r.kt)("h3",{id:"client-modification-feature"},"Client Modification Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasePath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorizations"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserAgent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MockServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"data-type-feature"},"Data Type Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Binary"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AnyType"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CollectionFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CollectionFormatMulti"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfPrimitives"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfPrimitives"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"documentation-feature"},"Documentation Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Readme"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Api"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"global-feature"},"Global Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasePath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Info"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schemes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PartialSchemes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consumes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Produces"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExternalDocumentation"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Examples"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XMLStructureDefinitions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MultiServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ParameterizedServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ParameterStyling"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Callbacks"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinkObjects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"parameter-feature"},"Parameter Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Query"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Header"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FormUnencoded"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FormMultipart"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"schema-support-feature"},"Schema Support Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Simple"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Composite"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polymorphism"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Union"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anyOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oneOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"not"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"security-feature"},"Security Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasicAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ApiKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenIDConnect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BearerToken"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_Implicit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_Password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_ClientCredentials"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_AuthorizationCode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")))),(0,r.kt)("h3",{id:"wire-format-feature"},"Wire Format Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XML"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PROTOBUF"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")))))}N.isMDXComponent=!0}}]);