(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{45:function(e,t,a){e.exports=a(80)},50:function(e,t,a){},51:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(24),o=a.n(c),s=(a(50),a(1)),l=a(2),i=a(5),m=a(3),u=a(6),p=(a(51),a(9)),d=a(4),h=a(8),f=a.n(h),v=a(11),E=a.n(v),b="GET_ERRORS",g=function(e,t){return function(a){return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.awrap(E.a.post("/api/project",e));case 3:t.push("/dashboard"),a({type:b,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:b,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.project;return n.a.createElement("div",{className:"container",style:{width:506}},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"col-20"},n.a.createElement("span",{className:"mx-auto mb-2"},"ID: ".concat(t.projectIdentifier))),n.a.createElement("div",{className:"col-lg-20 col-md-20 col-20"},n.a.createElement("h3",null,"Name\uff1a".concat(t.projectName)),n.a.createElement("p",null,"Description: ".concat(t.description))),n.a.createElement("div",{className:"col-md-40 d-lg-block"},n.a.createElement("div",{className:"d-flex flex-wrap"},n.a.createElement(p.b,{to:"/projectBoard/".concat(t.projectIdentifier)},n.a.createElement("div",{className:"card card-body bg-light board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1 text-center"},n.a.createElement("br",null),"Project Board"," "))),n.a.createElement(p.b,{to:"/updateProject/".concat(t.projectIdentifier)},n.a.createElement("div",{className:"card card-body bg-light update"},n.a.createElement("i",{className:"fa fa-edit pr-1 text-center"},n.a.createElement("br",null),"Update Project"))),n.a.createElement("div",{className:"card card-body bg-light delete",onClick:function(){return e.onDeleteClick(t.projectIdentifier)}},n.a.createElement("i",{className:"fa fa-minus-circle pr-1 text-center"},n.a.createElement("br",null),"Delete Project"))))))}}]),t}(r.Component),N=Object(d.b)(null,{deleteProject:function(e){return function(t){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure to delete the project and all the data related to it?")){a.next=4;break}return a.next=3,f.a.awrap(E.a.delete("/api/project/".concat(e)));case 3:t({type:"DELETE_PROJECT",payload:e});case 4:case"end":return a.stop()}}))}}})(j),y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/addProject",href:"ProjectForm.html",className:"btn btn-lg btn-primary"},n.a.createElement("i",{className:"fas fa-plus-square mr-2"}),"Create a Project"))},O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects,t=e.length;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects Dashboard"),n.a.createElement("br",null),n.a.createElement(y,null),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement((function(){if(0===e.length)return n.a.createElement("div",{className:"alert alert-primary text-center",role:"alert"},'You do not have any project. Click "Create Project" to create your first project');for(var a=[],r=0;t>0;)t>1?(a.push(n.a.createElement("div",{className:"row",key:r},n.a.createElement(N,{className:"float-left",project:e[r++]}),n.a.createElement(N,{className:"float-right",project:e[r++]}))),t-=2):(a.push(n.a.createElement(N,{key:r,project:e[r++]})),t--);return a}),null)))))}}]),t}(r.Component),k=Object(d.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(e){var t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(E.a.get("/api/project/all"));case 2:t=a.sent,e({type:"GET_PROJECTS",payload:t.data});case 4:case"end":return a.stop()}}))}}})(O),C=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},w=a(26),P=a.n(w),S=function(e){return function(t){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(E.a.post("/api/users/register",e));case 3:t({type:b,payload:{}}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),t({type:b,payload:a.t0.response.data});case 9:case"end":return a.stop()}}),null,null,[[0,6]])}},_=function(){return function(e){localStorage.removeItem("jwtToken"),C(!1),e({type:"SET_CURRENT_USER",payload:{}})}},x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).logout=function(){a.props.logout(),window.location.href="/"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/"},n.a.createElement("i",{className:"far fa-clipboard mr-1"}),"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/dashboard"},n.a.createElement("i",{className:"fas fa-user-circle mr-1"})," ",r.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link ",to:"/",onClick:this.logout},n.a.createElement("i",{className:"fas fa-sign-out-alt mr-1"}),"Logout")))),o=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Welcome to the Personal Project Management Tool"))));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},n.a.createElement("i",{className:"fas fa-toolbox mr-2"})," Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),t}(r.Component),D=Object(d.b)((function(e){return{security:e.security}}),{logout:_})(x),T=a(22),I=a(13),R=a(10),A=a.n(R),L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,start_date:e.state.start_date,end_date:e.state.end_date};e.props.createProject(a,e.props.history)},e.state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg ",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:A()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.errors!==t.errors?{errors:e.errors}:null}}]),t}(r.Component),U=Object(d.b)((function(e){return{errors:e.errors}}),{createProject:g})(L),B=a(18),G=a(43),J={},q=a(19),M={projects:[],project:{}},F={project_tasks:[],project_taks:{}},K={user:{},validToken:!1},H=Object(B.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(q.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(q.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(q.a)({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(q.a)({},e,{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(q.a)({},e,{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(q.a)({},e,{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(q.a)({},e,{validToken:!!t.payload,user:t.payload});default:return e}}}),W={},X=[G.a],V=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),z=window.navigator.userAgent.includes("Chrome")&&V?Object(B.e)(H,W,Object(B.d)(B.a.apply(void 0,X),V)):Object(B.e)(H,W,Object(B.d)(B.a.apply(void 0,X))),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={id:a.state.id,projectName:a.state.projectName,projectIdentifier:a.state.projectIdentifier,description:a.state.description,start_date:a.state.start_date,end_date:a.state.end_date};a.props.createProject(t,a.props.history)},a.state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,r,n,c,o;return f.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,f.a.awrap(this.props.getProject(this.props.match.params.id,this.props.history));case 2:e=this.props.project,t=e.id,a=e.projectName,r=e.projectIdentifier,n=e.description,c=e.start_date,o=e.end_date,this.setState({id:t,projectName:a,projectIdentifier:r,description:n,start_date:c,end_date:o});case 4:case"end":return s.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h2",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("h4",null,"Project Name"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName||"",onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("h4",null,"Project Identifier"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier||"",disabled:!0})),n.a.createElement("h4",null,"Project Description"),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:A()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description||"",onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h4",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date||"",onChange:this.onChange})),n.a.createElement("h4",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date||"",onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.errors?{errors:e.errors}:null}}]),t}(r.Component),$=Object(d.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(a){var r;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(E.a.get("/api/project/".concat(e)));case 3:r=n.sent,a({type:"GET_PROJECT",payload:r.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t.push("/dashboard");case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},createProject:g})(Y),Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e,t){a.props.deleteProjectTask(e,t)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a=this,r=this.props.project_task;return 1===r.priority?(t="bg-danger text-light",e="HIGH"):2===r.priority?(t="bg-warning text-light",e="MEDIUM"):3===r.priority&&(t="bg-info text-light",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",r.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},r.summary),n.a.createElement("p",{className:"card-text text-truncate "},r.acceptanceCriteria),n.a.createElement(p.b,{to:"/updateProjectTask/".concat(r.projectIdentifier,"/").concat(r.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:function(){return a.onDeleteClick(r.projectIdentifier,r.projectSequence)}},"Delete")))}}]),t}(r.Component),Z=Object(d.b)(null,{deleteProjectTask:function(e,t){return function(a){return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.confirm("Are you sure to delete ".concat(t,"?"))){r.next=4;break}return r.next=3,f.a.awrap(E.a.delete("/api/backlog/".concat(e,"/").concat(t)));case 3:a({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return r.stop()}}))}}})(Q),ee=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return n.a.createElement(Z,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++){var o=e[c].props.project_task.status;"TO_DO"===o?t.push(e[c]):"IN_PROGRESS"===o?a.push(e[c]):"DONE"===o&&r.push(e[c])}return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),t}(r.Component),te=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return 0===t.length?null===e?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.message):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this Project"):n.a.createElement(ee,{project_tasks_prop:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4 text-center mb-4"},n.a.createElement("i",{className:"fas fa-tasks mr-3"}),"Project Tasks for ",t),n.a.createElement(p.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.errors)return{errors:e.errors}}}]),t}(r.Component),ae=Object(d.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(t){var a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.awrap(E.a.get("/api/backlog/".concat(e)));case 3:a=r.sent,t({type:"GET_BACKLOG",payload:a.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),t({type:b,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(te),re=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={summary:a.state.summary,acceptanceCriteria:a.state.acceptanceCriteria,status:a.state.status,priority:a.state.priority,dueDate:a.state.dueDate};a.props.addProjectTask(a.state.projectIdentifier,t,a.props.history)};var r=a.props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:r,errors:{}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e),className:"btn btn-dark ml-5"},n.a.createElement("i",{className:"fas fa-hand-point-left mr-2"}),"Back to Project Board"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.errors!==t.errors?{errors:e.errors}:null}}]),t}(r.Component),ne=Object(d.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(r){return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(E.a.post("/api/backlog/".concat(e),t));case 3:a.push("/projectBoard/".concat(e)),r({type:b,payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r({type:b,payload:n.t0.response.data});case 10:case"end":return n.stop()}}),null,null,[[0,7]])}}})(re),ce=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={id:e.state.id,projectSequence:e.state.projectSequence,summary:e.state.summary,acceptanceCriteria:e.state.acceptanceCriteria,status:e.state.status,priority:e.state.priority,dueDate:e.state.dueDate,projectIdentifier:e.state.projectIdentifier,create_At:e.state.create_At,errors:{}};e.props.updateProjectTask(e.state.projectIdentifier,e.state.projectSequence,e.props.history,a)},e.state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",create_At:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params,a=t.backlog_id,r=t.pt_id;this.props.getProjectTask(a,r,this.props.history).then((function(){if(0===Object.entries(e.props.errors).length&&e.props.errors.constructor===Object){var t=e.props.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,l=t.dueDate,i=t.projectIdentifier,m=t.create_At;e.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:l,projectIdentifier:i,create_At:m})}}))}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement(p.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-dark ml-5"},n.a.createElement("i",{className:"fas fa-hand-point-left mr-2"}),"Back to Project Board"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h2",{className:"display-4 text-center mb-4"},"Add /Update Project Task"),n.a.createElement("h4",null,"Task Name"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary)),n.a.createElement("h4",null,"Task Description"),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h4",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("h4",null,"Priority"),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("h4",null,"Status"),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.errors!==t.errors?{errors:e.errors}:null}}]),t}(r.Component),oe=Object(d.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(r){var n;return f.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,f.a.awrap(E.a.get("/api/backlog/".concat(e,"/").concat(t)));case 3:n=c.sent,r({type:"GET_PROJECT_TASK",payload:n.data}),c.next=11;break;case 7:c.prev=7,c.t0=c.catch(0),r({type:b,payload:c.t0.response.data}),a.push("/dashboard");case 11:case"end":return c.stop()}}),null,null,[[0,7]])}},updateProjectTask:function(e,t,a,r){return function(n){return f.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,f.a.awrap(E.a.put("/api/backlog/".concat(e,"/").concat(t),r));case 3:a.push("/projectBoard/".concat(e)),n({type:b,payload:{}}),c.next=11;break;case 7:c.prev=7,c.t0=c.catch(0),n({type:b,payload:c.t0.response.data}),a.push("/dashboard");case 11:case"end":return c.stop()}}),null,null,[[0,7]])}}})(ce),se=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};e.props.login(a)},e.state={username:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-success btn-block mt-4"}))))))}}]),t}(r.Component);se.getDerivedStateFromProps=function(e,t){return e.security.validToken&&e.history.push("/dashboard"),e.errors?{errors:e.errors}:null};var le=Object(d.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(t){var a,r,n;return f.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,f.a.awrap(E.a.post("/api/users/login",e));case 3:a=c.sent,r=a.data.token,localStorage.setItem("jwtToken",r),C(r),n=P()(r),t({type:"SET_CURRENT_USER",payload:n}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),t({type:b,payload:c.t0.response.data});case 14:case"end":return c.stop()}}),null,null,[[0,11]])}}})(se),ie=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.setState({message:""});var a={username:e.state.username,fullName:e.state.fullName,password:e.state.password,confirmPassword:e.state.confirmPassword};e.props.createNewUser(a).then((function(){0===Object.entries(e.props.errors).length&&e.setState({message:"Succuss! You can log in now!"})}))},e.state={username:"",fullName:"",password:"",confirmPassword:"",message:"",errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullname,onChange:this.onChange}),e.fullName&&n.a.createElement("div",{className:"invalid-feedback"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("p",{style:{color:"blue"}},this.state.message),n.a.createElement("input",{type:"submit",className:"btn btn-success btn-block mt-4"}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return JSON.stringify(e.errors)!==JSON.stringify(t.errors)?{errors:e.errors}:null}}]),t}(r.Component),me=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:S})(ie),ue=(a(78),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={errors:{},icon:n.a.createElement("i",{class:"fas fa-sign-in-alt mr-2"}),isLoginActive:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard"),this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLoginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLoginActive:!e.isLoginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLoginActive,a=t?"Register":"Login",r=t?"Login":"Register";return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Project Manager"),n.a.createElement("p",{className:"lead"},"Let the learning journal begin"),n.a.createElement("br",null),n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"landing-container",ref:function(t){return e.containerRef=t}},t&&n.a.createElement(le,{history:this.props.history,containerRef:function(t){return e.current=t}}),!t&&n.a.createElement(me,{containerRef:function(t){return e.current=t}}),n.a.createElement("br",null)),n.a.createElement(pe,{current:a,icon:this.state.icon,containerRef:function(t){return e.rightSide=t},currentActive:{currentActive:r},onClick:this.changeState.bind(this)})))))),n.a.createElement("br",null),n.a.createElement("br",null))}}]),t}(r.Component)),pe=function(e){var t="Login"===e.current?n.a.createElement("i",{className:"fas fa-sign-in-alt mr-2"}):"",a=""===t?n.a.createElement("i",{className:"fas fa-user-plus ml-2"}):"";return n.a.createElement("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick},n.a.createElement("div",{className:"inner-container"},n.a.createElement("div",{className:"text"},t,e.current,a)))},de=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:S})(ue),he=a(44),fe=Object(d.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(he.a)(e,["component","security"]);return(n.a.createElement(T.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(T.a,{to:"/"})}})))}));var ve=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return function(){var e=localStorage.getItem("jwtToken");if(e){C(e);var t=P()(e);z.dispatch({type:"SET_CURRENT_USER",payload:t});var a=Date.now()/1e3;t.exp<a&&(z.dispatch(_()),window.location.href="/")}}(),n.a.createElement(d.a,{store:z},n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(D,null),n.a.createElement(T.b,{exact:!0,path:"/",component:de}),n.a.createElement(T.d,null,n.a.createElement(fe,{exact:!0,path:"/dashboard",component:k}),n.a.createElement(fe,{exact:!0,path:"/addProject",component:U}),n.a.createElement(fe,{exact:!0,path:"/updateProject/:id",component:$}),n.a.createElement(fe,{exact:!0,path:"/projectBoard/:id",component:ae}),n.a.createElement(fe,{exact:!0,path:"/addProjectTask/:id",component:ne}),n.a.createElement(fe,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:oe})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);o.a.render(n.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.af4831c6.chunk.js.map