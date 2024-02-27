"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9054],{68394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(85893),i=n(11151),r=n(5270);const o={sidebar_position:6,slug:"/modeling/testing",description:"Testing Models"},a="Testing Models",l={id:"content/modeling/testing-models",title:"Testing Models",description:"Testing Models",source:"@site/docs/content/modeling/testing-models.mdx",sourceDirName:"content/modeling",slug:"/modeling/testing",permalink:"/pr-preview/pr-674/docs/modeling/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/testing-models.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/modeling/testing",description:"Testing Models"},sidebar:"docs",previous:{title:"Authorization Through Organization Context",permalink:"/pr-preview/pr-674/docs/modeling/organization-context-authorization"},next:{title:"Building Blocks",permalink:"/pr-preview/pr-674/docs/modeling/building-blocks"}},d={},c=[{value:"Define the model and tuples",id:"define-the-model-and-tuples",level:2},{value:"Write tests",id:"write-tests",level:2},{value:"Write Check tests",id:"write-check-tests",level:2},{value:"Write List Objects tests",id:"write-list-objects-tests",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"Running tests using GitHub Actions",id:"running-tests-using-github-actions",level:2},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"testing-models",children:"Testing Models"}),"\n",(0,s.jsx)(r.AH,{}),"\n",(0,s.jsxs)(t.p,{children:["Every ",(0,s.jsx)(r.rZ,{format:r.v7.ShortForm})," model should be tested before deployment to ensure your authorization model is correctly designed."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:".fga.yaml"})," contains tests for ",(0,s.jsx)(r.rZ,{format:r.v7.ShortForm})," authorization models. If you are using Visual Studio Code as your IDE, install the ",(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=openfga.openfga-vscode",children:"OpenFGA extension"})," to enable syntax coloring and validation."]}),"\n",(0,s.jsx)(t.h2,{id:"define-the-model-and-tuples",children:"Define the model and tuples"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:".fga.yaml"})," files have the following top level items:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Object"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"name"})," (optional)"]}),(0,s.jsx)(t.td,{children:"A descriptive name for the test file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"model"})," or ",(0,s.jsx)(t.code,{children:"model_file"})]}),(0,s.jsxs)(t.td,{children:["An ",(0,s.jsx)(r.rZ,{format:r.v7.ShortForm})," model or a reference to an external model file in ",(0,s.jsx)(t.code,{children:"fga"})," or ",(0,s.jsx)(t.code,{children:"json"})," format"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"tuples or tuple_file"})," (optional)"]}),(0,s.jsxs)(t.td,{children:["A set of tuples or a reference to an external tuple file in ",(0,s.jsx)(t.code,{children:"json"}),", ",(0,s.jsx)(t.code,{children:"yaml"})," or ",(0,s.jsx)(t.code,{children:"csv"})," format. These are considered for all tests."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tests"})}),(0,s.jsxs)(t.td,{children:["A set of tests that verify the return values of ",(0,s.jsx)(r.rZ,{format:r.v7.ShortForm})," API calls"]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The example below defines a model and tuples:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'name: Model Tests # optional\n\n# model_file: ./model.fga # you can specify an external .fga file, or include it inline\nmodel: |\n  model\n    schema 1.1\n\n  type user\n\n  type organization\n     relations:\n       define member : [user]\n       define admin : [user with non_expired_grant]\n\n   condition non_expired_grant(current_time: timestamp, grant_time: timestamp, grant_duration: duration) {\n     current_time < grant_time + grant_duration\n  }\n\n# tuple_file: ./tuples.yaml # you can specify an external file, or include it inline\ntuples: \n\n   # Anne is a member of the Acme organization\n  - user: user:anne\n    relation: member\n    object: organization:acme\n\n  # Peter has the admin role from February 2nd 2024 0AM to 1AM\n  - user: user:peter\n    relation: admin\n    object: organization:acme\n    condition: \n      name: non_expired_grant\n      context: \n        grant_time : "2024-02-01T00:00:00Z"\n        grant_duration : 1h\n\n'})}),"\n",(0,s.jsx)(t.h2,{id:"write-tests",children:"Write tests"}),"\n",(0,s.jsx)(t.p,{children:"Always write tests to verify that the calls your application will make return the results you expect. A good test covers scenarios that verify every relation."}),"\n",(0,s.jsx)(t.p,{children:"Tests have the following structure:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Object"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"name"})," (optional)"]}),(0,s.jsx)(t.td,{children:"A descriptive name for the test, like \u201cOrganization Membership\u201d"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tuples"})}),(0,s.jsx)(t.td,{children:"A set of tuples that are only considered for the test"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"check"})}),(0,s.jsx)(t.td,{children:"A set of tests for Check calls, each with a user/object and a set of assertions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"list_objects"})}),(0,s.jsx)(t.td,{children:"A set of tests for ListObjects calls, each one with a user/type and a set of assertions for any number of relations"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"write-check-tests",children:"Write Check tests"}),"\n",(0,s.jsxs)(t.p,{children:["Check tests verify the results of the ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-674/docs/getting-started/perform-check",children:"check API"})," calls to validate access requirements for a user. Each check verification has the following structure:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Object"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"user"})}),(0,s.jsx)(t.td,{children:"The user type and user id you are checking for access"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"object"})}),(0,s.jsx)(t.td,{children:"The object type and object id related to the user"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"context"})}),(0,s.jsxs)(t.td,{children:["A set of tests for contextual parameters used to evaluate ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-674/docs/modeling/conditions",children:"conditions"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"assertions"})}),(0,s.jsxs)(t.td,{children:["A list of ",(0,s.jsx)(t.code,{children:"relation:expected-result"})," pairs"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<relation>: <true or false>"})}),(0,s.jsx)(t.td,{children:"The name of the relation you want to verify and the expected result"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The following example adds multiple check verifications in every test:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'tests:\n  - name: Test\n    check:\n      - user: user:anne\n        object: organization:acme\n        assertions:\n          member: true\n          admin: false\n\n      - user: user:peter\n        object: organization:acme\n        context: \n          current_time : "2024-02-01T00:10:00Z"\n        assertions:\n          member: false\n          admin: true\n'})}),"\n",(0,s.jsx)(t.h2,{id:"write-list-objects-tests",children:"Write List Objects tests"}),"\n",(0,s.jsxs)(t.p,{children:["A good test covers scenarios that specify every relation for every object type that your application will need to call the ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-674/docs/getting-started/perform-list-objects",children:"list-objects API"})," for."]}),"\n",(0,s.jsxs)(t.p,{children:["The following verifies the expected results using the ",(0,s.jsx)(t.code,{children:"list_objects"})," option in ",(0,s.jsx)(r.rZ,{format:r.v7.ShortForm})," tests:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'    list_objects:\n      - user: user:anne\n        type: organization\n        assertions:\n            member: \n                - organization:acme\n            admin: []\n              \n      - user: user:peter\n        type: organization\n        context: \n          current_time : "2024-02-01T00:10:00Z"\n\n        assertions:\n            member: []\n            admin: \n                - organization:acme\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The example above checks that ",(0,s.jsx)(t.code,{children:"user:anne"})," has access to the ",(0,s.jsx)(t.code,{children:"organization:acme"})," as a member and is not an admin of any organization. It also checks that ",(0,s.jsx)(t.code,{children:"user:peter"}),", given the current time is February 1st 2024, 0:10 AM, is not related to any organization as a member, but is related to ",(0,s.jsx)(t.code,{children:"organization:acme"})," as an admin."]}),"\n",(0,s.jsx)(t.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,s.jsxs)(t.p,{children:["Tests are run using the ",(0,s.jsx)(t.code,{children:"model test"})," CLI command. For instructions on installing the OpenFGA CLI, visit the ",(0,s.jsx)(t.a,{href:"https://github.com/openfga/cli",children:"OpenFGA CLI Github repository"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"fga model test --tests <filename>.fga.yaml\n"})}),"\n",(0,s.jsx)(t.p,{children:"When all tests pass, a summary with the number of tests passed is displayed. When a test fails, a line for every test is displayed."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ fga model test --tests docs.fga.yaml\n(PASSING) Test: Checks (4/4 passing) | ListObjects (4/4 passing)\n\n$ fga model test --tests docs.fga.yaml\n(FAILING) Test: Checks (4/4 passing) | ListObjects (3/4 passing)\n\u2713 ListObjects(user=user:anne,relation=member,type=organization, context=<nil>)\n\u2713 ListObjects(user=user:anne,relation=admin,type=organization, context=<nil>)\n\u2713 ListObjects(user=user:peter,relation=member,type=organization, context=&map[current_time:2024-02-01T00:10:00Z])\n\u2179 ListObjects(user=user:peter,relation=admin,type=organization, context=&map[current_time:2024-02-01T00:10:00Z]): expected=[organization:acm], got=[organization:acme], error=<nil>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"running-tests-using-github-actions",children:"Running tests using GitHub Actions"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.a,{href:"https://github.com/marketplace/actions/openfga-model-testing-action",children:"OpenFGA Model Testing Action"})," to run tests from CI/CD flows in GitHub."]}),"\n",(0,s.jsxs)(t.p,{children:["Set the path to the ",(0,s.jsx)(t.code,{children:".fga.yaml"})," file as the ",(0,s.jsx)(t.code,{children:"store-file-path"})," parameter when configuring the action:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"name: Test Action\n\non:\n  workflow_dispatch:\n  pull_request:\n    branches:\n      - main\n\njobs:\n  test:\n    name: Run test\n    runs-on: ubuntu-latest\n    steps:\n      - uses: openfga/action-openfga-test@v0.1\n        with:\n          store-file-path: ./example/model.fga.yaml\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,s.jsx)(r.$q,{description:"Check the following sections for more on how to learn how to write tests.",relatedLinks:[{title:"Use the FGA CLI ",description:"Learn how to use the FGA CLI.",link:"../getting-started/cli",id:"../getting-started/cli.mdx"},{title:"Super Admin Example ",description:"Define a model and tests for modeling a super-admin role.",link:"https://github.com/openfga/sample-stores/blob/main/stores/superadmin/store.fga.yaml"},{title:"Banking Example ",description:"Define a model and tests for banking application.",link:"https://github.com/openfga/sample-stores/blob/main/stores/banking/store.fga.yaml"},{title:"Entitlements Example ",description:"Define a model and tests for B2B application entitlements.",link:"https://github.com/openfga/sample-stores/blob/main/stores/advanced-entitlements/store.fga.yaml"}]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);