"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1660],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?o.createElement(g,a(a({ref:n},u),{},{components:t})):o.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[c]="string"==typeof e?e:i,a[1]=r;for(var p=2;p<l;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2251:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var o=t(7462),i=t(3366),l=(t(7294),t(3905)),a=["components"],r={id:"debugging",title:"Debugging"},s=void 0,p={unversionedId:"debugging",id:"debugging",title:"Debugging",description:"Generation",source:"@site/../docs/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/debugging",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/debugging.md",tags:[],version:"current",lastUpdatedBy:"William Cheng",lastUpdatedAt:1593944426,formattedLastUpdatedAt:"Jul 5, 2020",frontMatter:{id:"debugging",title:"Debugging"},sidebar:"docs",previous:{title:"Customization",permalink:"/docs/customization"},next:{title:"Workflow Integrations",permalink:"/docs/integrations"}},u={},c=[{value:"Generation",id:"generation",level:2},{value:"Templates",id:"templates",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Logs",id:"logs",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"generation"},"Generation"),(0,l.kt)("p",null,"As a user there may be times when generated outputs don't match your expectations it's unclear why. The CLI supports a ",(0,l.kt)("inlineCode",{parentName:"p"},"--dry-run")," option which may be used to inspect the anticipated file operations without making changes to the file system."),(0,l.kt)("p",null,"Suppose you generate using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--minimal-update")," option, and you notice on subsequent generations of a client that no files have changed. This is by design."),(0,l.kt)("p",null,"For example, if you generate the aspnetcore generator passing ",(0,l.kt)("inlineCode",{parentName:"p"},"--minimal-update --dry-run")," to the sample generation script in the code repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export JAVA_OPTS="-Dlog.level=off"\n./bin/generate-samples.sh ./bin/configs/lua.yaml -- --minimal-update --dry-run\n')),(0,l.kt)("p",null,"You'll see the output similar to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bin/generate-samples.sh ./bin/configs/lua.yaml -- --minimal-update --dry-run\n# START SCRIPT: ./bin/generate-samples.sh\nThis script generates all configs under bin/configs by default.\nYou may generate a targeted script or set of scripts using glob patterns.\n\nFor example:\n    ./bin/generate-samples.sh bin/configs/java-*\n\nYou may generate a single config with additional options if you use -- to\nseparate the single config file from the generator arguments.\n\nFor example:\n    ./bin/generate-samples.sh bin/configs/java-vertx.yaml -- --global-property debugModels=true\n\n\n[main] INFO  o.o.codegen.DefaultGenerator - Generating with dryRun=true\n[main] INFO  o.o.codegen.DefaultGenerator - OpenAPI Generator: lua (client)\n[main] INFO  o.o.codegen.DefaultGenerator - Generator 'lua' is considered beta.\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] INFO  o.o.codegen.DefaultGenerator - Model inline_object (marked as unused due to form parameters) is generated due to the system property skipFormModel=false (default)\n[main] INFO  o.o.codegen.DefaultGenerator - Model inline_object_1 (marked as unused due to form parameters) is generated due to the system property skipFormModel=false (default)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/json)\n[main] WARN  o.o.codegen.DefaultCodegen - Multiple MediaTypes found, using only the first one\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/json)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] ERROR o.o.codegen.DefaultGenerator - \n\nDry Run Results:\n\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/.openapi-generator-ignore\nn /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/.openapi-generator/VERSION\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/api_response_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/category_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/inline_object_1_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/inline_object_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/order_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/pet_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/pet_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/store_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/tag_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/user_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/user_spec.lua\n\n\nStates:\n\n  - w Write\n  - n Write if New/Updated\n  - i Ignored\n  - s Skipped Overwrite\n  - k Skipped by user option(s)\n  - e Error evaluating file write state\n\n\n[main] ERROR o.o.codegen.DefaultGenerator - \n\nDry Run Results:\n\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/.openapi-generator-ignore\nn /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/.openapi-generator/VERSION\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/api_response_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/category_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/inline_object_1_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/inline_object_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/order_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/pet_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/pet_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/store_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/tag_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/user_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/user_spec.lua\n\n\nStates:\n\n  - w Write\n  - n Write if New/Updated\n  - i Ignored\n  - s Skipped Overwrite\n  - k Skipped by user option(s)\n  - e Error evaluating file write state\n\n")),(0,l.kt)("p",null,"The output lists the files which would be written in a normal run of the tool. Notice that we skip ",(0,l.kt)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," because the file exists and we don't want to blow away the user's generation rules. Most of these files will overwrite output files only if the contents slated for write are different from those on the filesystem; this is denoted by an ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," preceding the filename. Some of the above lines begin with a ",(0,l.kt)("inlineCode",{parentName:"p"},"w"),", meaning these files will ",(0,l.kt)("em",{parentName:"p"},"always")," result in a write operation."),(0,l.kt)("p",null,"If you find an operation that you feel should result in a different state, please ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator/issues/new/choose"},"open an issue")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator/compare"},"submit a pull request")," to change the behavior (we welcome all contributions)."),(0,l.kt)("h2",{id:"templates"},"Templates"),(0,l.kt)("p",null,"Sometimes, you may have issues with variables in your templates. As discussed in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/templating"},"templating")," docs, we offer a variety of system properties for inspecting the models bound to templates."),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("code",null,"--global-property debugOpenAPI")),(0,l.kt)("dd",null,"Prints out the JSON model of the OpenAPI Document, as seen by OpenAPI Generator"),(0,l.kt)("dt",null,(0,l.kt)("code",null,"--global-property debugModels")),(0,l.kt)("dd",null,"Prints out the JSON model passed to model templates"),(0,l.kt)("dt",null,(0,l.kt)("code",null,"--global-property debugOperations")),(0,l.kt)("dd",null,"Prints out the JSON model passed to operation (api) templates"),(0,l.kt)("dt",null,(0,l.kt)("code",null,"--global-property debugSupportingFiles")),(0,l.kt)("dd",null,"Prints out the JSON model passed to supporting files")),(0,l.kt)("p",null,"One or more of these properties can be passed alongside other command line options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"openapi-generator generate -g go \\\n    -o out \\\n    -i petstore-minimal.yaml \\\n    --global-property debugModels,debugOperations\n")),(0,l.kt)("p",null,"Or you can add these to your ",(0,l.kt)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable (this applies to every invocation of the tool):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export JAVA_OPTS="${JAVA_OPTS} --global-property debugModels,debugOperations"\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: Globally available system options like these will apply to all invocations of the generator (CLI and plugins)")),(0,l.kt)("h2",{id:"runtime"},"Runtime"),(0,l.kt)("p",null,"When you're working with a custom generator, a new generator, or otherwise trying to understand the behavior of the toolset, you may need to attach a remote debugger in order to step through the code."),(0,l.kt)("p",null,"The steps are shown here for a specific version of the generator, but apply the same if you're working off master or a feature branch."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Determine the version of ",(0,l.kt)("inlineCode",{parentName:"li"},"openapi-generator")," you're using. For the CLI, this is:  ",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"openapi-generator version\n"))),(0,l.kt)("li",{parentName:"ul"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"openapi-generator")," source directory (see ",(0,l.kt)("a",{parentName:"li",href:"/docs/contribute-building"},"building")," docs for obtaining source code and brief introduction)."),(0,l.kt)("li",{parentName:"ul"},"Checkout the branch/tag for the target version. Branches are not prefixed, but tags are prefixed with a ",(0,l.kt)("inlineCode",{parentName:"li"},"v"),". For instance if you're using version ",(0,l.kt)("inlineCode",{parentName:"li"},"3.3.0"),", you will execute:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"git checkout v3.3.0\n"))),(0,l.kt)("li",{parentName:"ul"},"Open the project in your IDE."),(0,l.kt)("li",{parentName:"ul"},"Setup your IDE for remote debugging. You'll want to define a port used for connecting the remote debugger. For this example, we'll use ",(0,l.kt)("inlineCode",{parentName:"li"},"5005"),". See external tutorials for ",(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/idea/run-debug-configuration-remote-debug.html"},"IntelliJ")," and ",(0,l.kt)("a",{parentName:"li",href:"https://www.ibm.com/developerworks/library/os-eclipse-javadebug/index.html"},"Eclipse")),(0,l.kt)("li",{parentName:"ul"},"Export the debug configuration, specifying ",(0,l.kt)("inlineCode",{parentName:"li"},"suspend=y")," so you have time to attach a remote debugger. These are passed as Java system properties, either on command line or as part of the ",(0,l.kt)("inlineCode",{parentName:"li"},"JAVA_OPTS")," environment variable. This will look like:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'export JAVA_OPTS="${JAVA_OPTS} -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005"\n'))),(0,l.kt)("li",{parentName:"ul"},"Execute the generator with your desired options. You should see the application output ",(0,l.kt)("em",{parentName:"li"},"only"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Listening for transport dt_socket at address: 5005\n"))),(0,l.kt)("li",{parentName:"ul"},"Set breakpoints in code, and then attach your remote debugger from your IDE (see above). The generator will automatically unblock once the remote debugger is attached. You can now step through the code.")),(0,l.kt)("h2",{id:"logs"},"Logs"),(0,l.kt)("p",null,"You can try to enable debugging log with ",(0,l.kt)("inlineCode",{parentName:"p"},"-Dlog.level=debug")," option to the ",(0,l.kt)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable to see more information:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export JAVA_OPTS="${JAVA_OPTS} -Dlog.level=debug"\n')),(0,l.kt)("p",null,"Set the option then DEBUG logs are printed out:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"openapi-generator generate -g go ...\n\n...\n...\n[main] DEBUG o.o.codegen.DefaultCodegen - debugging fromProperty for files : class Schema {\n    type: null\n    format: null\n    $ref: #/components/schemas/File\n...\n...\n")))}m.isMDXComponent=!0}}]);