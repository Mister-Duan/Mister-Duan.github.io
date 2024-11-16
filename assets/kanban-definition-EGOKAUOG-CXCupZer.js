import{m as o,Q as W,N as U,ar as J,g as fe,c as me,J as te,aT as be,bc as _e,bd as ke,be as Se,b7 as Ee,b8 as Ne,b9 as le,ba as ce}from"./mermaid.esm.min-BVKXqsiq.js";import"./app-BGTcwSfg.js";var Z=function(){var i=o(function(S,e,s,a){for(s=s||{},a=S.length;a--;s[S[a]]=e);return s},"o"),u=[1,4],d=[1,13],r=[1,12],g=[1,15],p=[1,16],k=[1,20],c=[1,19],D=[6,7,8],I=[1,26],O=[1,24],v=[1,25],n=[6,7,11],T=[1,31],C=[6,7,11,24],F=[1,6,13,16,17,20,23],M=[1,35],H=[1,36],w=[1,6,7,11,13,16,17,20,23],G=[1,38],f={trace:o(function(){},"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:o(function(S,e,s,a,h,t,b){var l=t.length-1;switch(h){case 6:case 7:return a;case 8:a.getLogger().trace("Stop NL ");break;case 9:a.getLogger().trace("Stop EOF ");break;case 11:a.getLogger().trace("Stop NL2 ");break;case 12:a.getLogger().trace("Stop EOF2 ");break;case 15:a.getLogger().info("Node: ",t[l-1].id),a.addNode(t[l-2].length,t[l-1].id,t[l-1].descr,t[l-1].type,t[l]);break;case 16:a.getLogger().info("Node: ",t[l].id),a.addNode(t[l-1].length,t[l].id,t[l].descr,t[l].type);break;case 17:a.getLogger().trace("Icon: ",t[l]),a.decorateNode({icon:t[l]});break;case 18:case 23:a.decorateNode({class:t[l]});break;case 19:a.getLogger().trace("SPACELIST");break;case 20:a.getLogger().trace("Node: ",t[l-1].id),a.addNode(0,t[l-1].id,t[l-1].descr,t[l-1].type,t[l]);break;case 21:a.getLogger().trace("Node: ",t[l].id),a.addNode(0,t[l].id,t[l].descr,t[l].type);break;case 22:a.decorateNode({icon:t[l]});break;case 27:a.getLogger().trace("node found ..",t[l-2]),this.$={id:t[l-1],descr:t[l-1],type:a.getType(t[l-2],t[l])};break;case 28:this.$={id:t[l],descr:t[l],type:0};break;case 29:a.getLogger().trace("node found ..",t[l-3]),this.$={id:t[l-3],descr:t[l-1],type:a.getType(t[l-2],t[l])};break;case 30:this.$=t[l-1]+t[l];break;case 31:this.$=t[l];break}},"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:u},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:u},{6:d,7:[1,10],9:9,12:11,13:r,14:14,16:g,17:p,18:17,19:18,20:k,23:c},i(D,[2,3]),{1:[2,2]},i(D,[2,4]),i(D,[2,5]),{1:[2,6],6:d,12:21,13:r,14:14,16:g,17:p,18:17,19:18,20:k,23:c},{6:d,9:22,12:11,13:r,14:14,16:g,17:p,18:17,19:18,20:k,23:c},{6:I,7:O,10:23,11:v},i(n,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:k,23:c}),i(n,[2,19]),i(n,[2,21],{15:30,24:T}),i(n,[2,22]),i(n,[2,23]),i(C,[2,25]),i(C,[2,26]),i(C,[2,28],{20:[1,32]}),{21:[1,33]},{6:I,7:O,10:34,11:v},{1:[2,7],6:d,12:21,13:r,14:14,16:g,17:p,18:17,19:18,20:k,23:c},i(F,[2,14],{7:M,11:H}),i(w,[2,8]),i(w,[2,9]),i(w,[2,10]),i(n,[2,16],{15:37,24:T}),i(n,[2,17]),i(n,[2,18]),i(n,[2,20],{24:G}),i(C,[2,31]),{21:[1,39]},{22:[1,40]},i(F,[2,13],{7:M,11:H}),i(w,[2,11]),i(w,[2,12]),i(n,[2,15],{24:G}),i(C,[2,30]),{22:[1,41]},i(C,[2,27]),i(C,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:o(function(S,e){if(e.recoverable)this.trace(S);else{var s=new Error(S);throw s.hash=e,s}},"parseError"),parse:o(function(S){var e=this,s=[0],a=[],h=[null],t=[],b=this.table,l="",j=0,se=0,ue=0,ge=2,re=1,de=t.slice.call(arguments,1),m=Object.create(this.lexer),R={yy:{}};for(var Q in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Q)&&(R.yy[Q]=this.yy[Q]);m.setInput(S,R.yy),R.yy.lexer=m,R.yy.parser=this,typeof m.yylloc>"u"&&(m.yylloc={});var V=m.yylloc;t.push(V);var pe=m.options&&m.options.ranges;typeof R.yy.parseError=="function"?this.parseError=R.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ye(E){s.length=s.length-2*E,h.length=h.length-E,t.length=t.length-E}o(ye,"popStack");function ae(){var E;return E=a.pop()||m.lex()||re,typeof E!="number"&&(E instanceof Array&&(a=E,E=a.pop()),E=e.symbols_[E]||E),E}o(ae,"lex");for(var _,X,P,L,Ge,Y,B={},K,A,oe,z;;){if(P=s[s.length-1],this.defaultActions[P]?L=this.defaultActions[P]:((_===null||typeof _>"u")&&(_=ae()),L=b[P]&&b[P][_]),typeof L>"u"||!L.length||!L[0]){var q="";z=[];for(K in b[P])this.terminals_[K]&&K>ge&&z.push("'"+this.terminals_[K]+"'");m.showPosition?q="Parse error on line "+(j+1)+`:
`+m.showPosition()+`
Expecting `+z.join(", ")+", got '"+(this.terminals_[_]||_)+"'":q="Parse error on line "+(j+1)+": Unexpected "+(_==re?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(q,{text:m.match,token:this.terminals_[_]||_,line:m.yylineno,loc:V,expected:z})}if(L[0]instanceof Array&&L.length>1)throw new Error("Parse Error: multiple actions possible at state: "+P+", token: "+_);switch(L[0]){case 1:s.push(_),h.push(m.yytext),t.push(m.yylloc),s.push(L[1]),_=null,X?(_=X,X=null):(se=m.yyleng,l=m.yytext,j=m.yylineno,V=m.yylloc,ue>0);break;case 2:if(A=this.productions_[L[1]][1],B.$=h[h.length-A],B._$={first_line:t[t.length-(A||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(A||1)].first_column,last_column:t[t.length-1].last_column},pe&&(B._$.range=[t[t.length-(A||1)].range[0],t[t.length-1].range[1]]),Y=this.performAction.apply(B,[l,se,j,R.yy,L[1],h,t].concat(de)),typeof Y<"u")return Y;A&&(s=s.slice(0,-1*A*2),h=h.slice(0,-1*A),t=t.slice(0,-1*A)),s.push(this.productions_[L[1]][0]),h.push(B.$),t.push(B._$),oe=b[s[s.length-2]][s[s.length-1]],s.push(oe);break;case 3:return!0}}return!0},"parse")},$=function(){var S={EOF:1,parseError:o(function(e,s){if(this.yy.parser)this.yy.parser.parseError(e,s);else throw new Error(e)},"parseError"),setInput:o(function(e,s){return this.yy=s||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:o(function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var s=e.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},"input"),unput:o(function(e){var s=e.length,a=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var t=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===h.length?this.yylloc.first_column:0)+h[h.length-a.length].length-a[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[t[0],t[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},"unput"),more:o(function(){return this._more=!0,this},"more"),reject:o(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:o(function(e){this.unput(this.match.slice(e))},"less"),pastInput:o(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:o(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:o(function(){var e=this.pastInput(),s=new Array(e.length+1).join("-");return e+this.upcomingInput()+`
`+s+"^"},"showPosition"),test_match:o(function(e,s){var a,h,t;if(this.options.backtrack_lexer&&(t={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(t.yylloc.range=this.yylloc.range.slice(0))),h=e[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],a=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var b in t)this[b]=t[b];return!1}return!1},"test_match"),next:o(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,s,a,h;this._more||(this.yytext="",this.match="");for(var t=this._currentRules(),b=0;b<t.length;b++)if(a=this._input.match(this.rules[t[b]]),a&&(!s||a[0].length>s[0].length)){if(s=a,h=b,this.options.backtrack_lexer){if(e=this.test_match(a,t[b]),e!==!1)return e;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(e=this.test_match(s,t[h]),e!==!1?e:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:o(function(){var e=this.next();return e||this.lex()},"lex"),begin:o(function(e){this.conditionStack.push(e)},"begin"),popState:o(function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:o(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:o(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},"topState"),pushState:o(function(e){this.begin(e)},"pushState"),stateStackSize:o(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:o(function(e,s,a,h){switch(a){case 0:return this.pushState("shapeData"),s.yytext="",24;case 1:return this.pushState("shapeDataStr"),24;case 2:return this.popState(),24;case 3:let t=/\n\s*/g;return s.yytext=s.yytext.replace(t,"<br/>"),24;case 4:return 24;case 5:this.popState();break;case 6:return e.getLogger().trace("Found comment",s.yytext),6;case 7:return 8;case 8:this.begin("CLASS");break;case 9:return this.popState(),17;case 10:this.popState();break;case 11:e.getLogger().trace("Begin icon"),this.begin("ICON");break;case 12:return e.getLogger().trace("SPACELINE"),6;case 13:return 7;case 14:return 16;case 15:e.getLogger().trace("end icon"),this.popState();break;case 16:return e.getLogger().trace("Exploding node"),this.begin("NODE"),20;case 17:return e.getLogger().trace("Cloud"),this.begin("NODE"),20;case 18:return e.getLogger().trace("Explosion Bang"),this.begin("NODE"),20;case 19:return e.getLogger().trace("Cloud Bang"),this.begin("NODE"),20;case 20:return this.begin("NODE"),20;case 21:return this.begin("NODE"),20;case 22:return this.begin("NODE"),20;case 23:return this.begin("NODE"),20;case 24:return 13;case 25:return 23;case 26:return 11;case 27:this.begin("NSTR2");break;case 28:return"NODE_DESCR";case 29:this.popState();break;case 30:e.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 31:return e.getLogger().trace("description:",s.yytext),"NODE_DESCR";case 32:this.popState();break;case 33:return this.popState(),e.getLogger().trace("node end ))"),"NODE_DEND";case 34:return this.popState(),e.getLogger().trace("node end )"),"NODE_DEND";case 35:return this.popState(),e.getLogger().trace("node end ...",s.yytext),"NODE_DEND";case 36:return this.popState(),e.getLogger().trace("node end (("),"NODE_DEND";case 37:return this.popState(),e.getLogger().trace("node end (-"),"NODE_DEND";case 38:return this.popState(),e.getLogger().trace("node end (-"),"NODE_DEND";case 39:return this.popState(),e.getLogger().trace("node end (("),"NODE_DEND";case 40:return this.popState(),e.getLogger().trace("node end (("),"NODE_DEND";case 41:return e.getLogger().trace("Long description:",s.yytext),21;case 42:return e.getLogger().trace("Long description:",s.yytext),21}},"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:!1},shapeDataStr:{rules:[2,3],inclusive:!1},shapeData:{rules:[1,4,5],inclusive:!1},CLASS:{rules:[9,10],inclusive:!1},ICON:{rules:[14,15],inclusive:!1},NSTR2:{rules:[28,29],inclusive:!1},NSTR:{rules:[31,32],inclusive:!1},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:!1},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:!0}}};return S}();f.lexer=$;function N(){this.yy={}}return o(N,"Parser"),N.prototype=f,f.Parser=N,new N}();Z.parser=Z;var Le=Z,x=[],ie=[],ee=0,ne={},xe=o(()=>{x=[],ie=[],ee=0,ne={}},"clear"),De=o(i=>{if(x.length===0)return null;let u=x[0].level,d=null;for(let r=x.length-1;r>=0;r--)if(x[r].level===u&&!d&&(d=x[r]),x[r].level<u)throw new Error('Items without section detected, found section ("'+x[r].label+'")');return i===(d==null?void 0:d.level)?null:d},"getSection"),he=o(function(){return ie},"getSections"),Oe=o(function(){let i=[],u=[],d=he(),r=W();for(let g of d){let p={id:g.id,label:U(g.label??"",r),isGroup:!0,ticket:g.ticket,shape:"kanbanSection",level:g.level,look:r.look};u.push(p);let k=x.filter(c=>c.parentId===g.id);for(let c of k){let D={id:c.id,parentId:g.id,label:U(c.label??"",r),isGroup:!1,ticket:c==null?void 0:c.ticket,priority:c==null?void 0:c.priority,assigned:c==null?void 0:c.assigned,icon:c==null?void 0:c.icon,shape:"kanbanItem",level:c.level,rx:5,ry:5,cssStyles:["text-align: left"]};u.push(D)}}return{nodes:u,edges:i,other:{},config:W()}},"getData"),ve=o((i,u,d,r,g)=>{var I,O;let p=W(),k=((I=p.mindmap)==null?void 0:I.padding)??J.mindmap.padding;switch(r){case y.ROUNDED_RECT:case y.RECT:case y.HEXAGON:k*=2}let c={id:U(u,p)||"kbn"+ee++,level:i,label:U(d,p),width:((O=p.mindmap)==null?void 0:O.maxNodeWidth)??J.mindmap.maxNodeWidth,padding:k,isGroup:!1};if(g!==void 0){let v;g.includes(`
`)?v=g+`
`:v=`{
`+g+`
}`;let n=fe(v,{schema:me});if(n.shape&&(n.shape!==n.shape.toLowerCase()||n.shape.includes("_")))throw new Error(`No such shape: ${n.shape}. Shape names should be lowercase.`);n!=null&&n.shape&&n.shape==="kanbanItem"&&(c.shape=n==null?void 0:n.shape),n!=null&&n.label&&(c.label=n==null?void 0:n.label),n!=null&&n.icon&&(c.icon=n==null?void 0:n.icon),n!=null&&n.assigned&&(c.assigned=n==null?void 0:n.assigned),n!=null&&n.ticket&&(c.ticket=n==null?void 0:n.ticket),n!=null&&n.priority&&(c.priority=n==null?void 0:n.priority)}let D=De(i);D?c.parentId=D.id||"kbn"+ee++:ie.push(c),x.push(c)},"addNode"),y={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},Ce=o((i,u)=>{switch(te.debug("In get type",i,u),i){case"[":return y.RECT;case"(":return u===")"?y.ROUNDED_RECT:y.CLOUD;case"((":return y.CIRCLE;case")":return y.CLOUD;case"))":return y.BANG;case"{{":return y.HEXAGON;default:return y.DEFAULT}},"getType"),Ae=o((i,u)=>{ne[i]=u},"setElementForId"),Ie=o(i=>{if(!i)return;let u=W(),d=x[x.length-1];i.icon&&(d.icon=U(i.icon,u)),i.class&&(d.cssClasses=U(i.class,u))},"decorateNode"),we=o(i=>{switch(i){case y.DEFAULT:return"no-border";case y.RECT:return"rect";case y.ROUNDED_RECT:return"rounded-rect";case y.CIRCLE:return"circle";case y.CLOUD:return"cloud";case y.BANG:return"bang";case y.HEXAGON:return"hexgon";default:return"no-border"}},"type2Str"),Te=o(()=>te,"getLogger"),$e=o(i=>ne[i],"getElementById"),Re={clear:xe,addNode:ve,getSections:he,getData:Oe,nodeType:y,getType:Ce,setElementForId:Ae,decorateNode:Ie,type2Str:we,getLogger:Te,getElementById:$e},Pe=Re,Be=o(async(i,u,d,r)=>{var F,M,H,w,G;te.debug(`Rendering kanban diagram
`+i);let g=r.db.getData(),p=W();p.htmlLabels=!1;let k=be(u),c=k.append("g");c.attr("class","sections");let D=k.append("g");D.attr("class","items");let I=g.nodes.filter(f=>f.isGroup),O=0,v=10,n=[],T=25;for(let f of I){let $=((F=p==null?void 0:p.kanban)==null?void 0:F.sectionWidth)||200;O=O+1,f.x=$*O+(O-1)*v/2,f.width=$,f.y=0,f.height=$*3,f.rx=5,f.ry=5,f.cssClasses=f.cssClasses+" section-"+O;let N=await _e(c,f);T=Math.max(T,(M=N==null?void 0:N.labelBBox)==null?void 0:M.height),n.push(N)}let C=0;for(let f of I){let $=n[C];C=C+1;let N=((H=p==null?void 0:p.kanban)==null?void 0:H.sectionWidth)||200,S=-N*3/2+T,e=S,s=g.nodes.filter(t=>t.parentId===f.id);for(let t of s){if(t.isGroup)throw new Error("Groups within groups are not allowed in Kanban diagrams");t.x=f.x,t.width=N-1.5*v;let b=(await ke(D,t,{config:p})).node().getBBox();t.y=e+b.height/2,await Se(t),e=t.y+b.height/2+v/2}let a=$.cluster.select("rect"),h=Math.max(e-S+3*v,50)+(T-25);a.attr("height",h)}Ee(void 0,k,((w=p.mindmap)==null?void 0:w.padding)??J.kanban.padding,((G=p.mindmap)==null?void 0:G.useMaxWidth)??J.kanban.useMaxWidth)},"draw"),Ue={draw:Be},Fe=o(i=>{let u="";for(let r=0;r<i.THEME_COLOR_LIMIT;r++)i["lineColor"+r]=i["lineColor"+r]||i["cScaleInv"+r],Ne(i["lineColor"+r])?i["lineColor"+r]=le(i["lineColor"+r],20):i["lineColor"+r]=ce(i["lineColor"+r],20);let d=o((r,g)=>i.darkMode?ce(r,g):le(r,g),"adjuster");for(let r=0;r<i.THEME_COLOR_LIMIT;r++){let g=""+(17-3*r);u+=`
    .section-${r-1} rect, .section-${r-1} path, .section-${r-1} circle, .section-${r-1} polygon, .section-${r-1} path  {
      fill: ${d(i["cScale"+r],10)};
      stroke: ${d(i["cScale"+r],10)};

    }
    .section-${r-1} text {
     fill: ${i["cScaleLabel"+r]};
    }
    .node-icon-${r-1} {
      font-size: 40px;
      color: ${i["cScaleLabel"+r]};
    }
    .section-edge-${r-1}{
      stroke: ${i["cScale"+r]};
    }
    .edge-depth-${r-1}{
      stroke-width: ${g};
    }
    .section-${r-1} line {
      stroke: ${i["cScaleInv"+r]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${i.background};
    stroke: ${i.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${i.background};
    stroke: ${i.nodeBorder};
    text-decoration: underline;
  }
    `}return u},"genSections"),Me=o(i=>`
  .edge {
    stroke-width: 3;
  }
  ${Fe(i)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${i.git0};
  }
  .section-root text {
    fill: ${i.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${i.textColor};
    fill: ${i.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,"getStyles"),He=Me,Ke={db:Pe,renderer:Ue,parser:Le,styles:He};export{Ke as diagram};
