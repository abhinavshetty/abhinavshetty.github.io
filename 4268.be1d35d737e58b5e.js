"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[4268],{4268:(T,s,e)=>{e.r(s),e.d(s,{FormLayoutDemoModule:()=>I});var u=e(177),o=e(4341),d=e(4007),t=e(4438),c=e(1141),r=e(2242),p=e(8150),F=e(1305);let h=(()=>{class n{constructor(){this.selectedState=null,this.states=[{name:"Arizona",code:"Arizona"},{name:"California",value:"California"},{name:"Florida",code:"Florida"},{name:"Ohio",code:"Ohio"},{name:"Washington",code:"Washington"}],this.dropdownItems=[{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}],this.cities1=[],this.cities2=[],this.city1=null,this.city2=null}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["ng-component"]],decls:94,vars:2,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card","p-fluid"],[1,"field"],["htmlFor","name1"],["pInputText","","id","name1","type","text"],["htmlFor","email1"],["pInputText","","id","email1","type","text"],["htmlFor","age1"],["pInputText","","id","age1","type","text"],[1,"p-formgrid","grid"],[1,"field","col"],["htmlFor","name2"],["pInputText","","id","name2","type","text"],["htmlFor","email2"],["pInputText","","id","email2","type","text"],[1,"field","grid"],["htmlFor","name3",1,"col-12","mb-2","md:col-2","md:mb-0"],[1,"col-12","md:col-10"],["pInputText","","id","name3","type","text"],["htmlFor","email3",1,"col-12","mb-2","md:col-2","md:mb-0"],["pInputText","","id","email3","type","text"],[1,"card"],[1,"formgroup-inline"],["htmlFor","firstname1",1,"p-sr-only"],["pInputText","","id","firstname1","type","text","placeholder","Firstname"],["htmlFor","lastname1",1,"p-sr-only"],["pInputText","","id","lastname1","type","text","placeholder","Lastname"],["pButton","","label","Submit"],[1,"field","p-fluid"],["htmlFor","username"],["pInputText","","id","username","type","text"],[1,"col-12"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["htmlFor","firstname2"],["pInputText","","id","firstname2","type","text"],["htmlFor","lastname2"],["pInputText","","id","lastname2","type","text"],[1,"field","col-12"],["htmlFor","address"],["pInputTextarea","","id","address","rows","4"],["htmlFor","city"],["pInputText","","id","city","type","text"],[1,"field","col-12","md:col-3"],["htmlFor","state"],["optionLabel","name",3,"ngModelChange","options","ngModel"],["htmlFor","zip"],["pInputText","","id","zip","type","text"]],template:function(i,a){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t.EFF(4,"Vertical"),t.k0s(),t.j41(5,"div",3)(6,"label",4),t.EFF(7,"Name"),t.k0s(),t.nrm(8,"input",5),t.k0s(),t.j41(9,"div",3)(10,"label",6),t.EFF(11,"Email"),t.k0s(),t.nrm(12,"input",7),t.k0s(),t.j41(13,"div",3)(14,"label",8),t.EFF(15,"Age"),t.k0s(),t.nrm(16,"input",9),t.k0s()(),t.j41(17,"div",2)(18,"h5"),t.EFF(19,"Vertical Grid"),t.k0s(),t.j41(20,"div",10)(21,"div",11)(22,"label",12),t.EFF(23,"Name"),t.k0s(),t.nrm(24,"input",13),t.k0s(),t.j41(25,"div",11)(26,"label",14),t.EFF(27,"Email"),t.k0s(),t.nrm(28,"input",15),t.k0s()()()(),t.j41(29,"div",1)(30,"div",2)(31,"h5"),t.EFF(32,"Horizontal"),t.k0s(),t.j41(33,"div",16)(34,"label",17),t.EFF(35,"Name"),t.k0s(),t.j41(36,"div",18),t.nrm(37,"input",19),t.k0s()(),t.j41(38,"div",16)(39,"label",20),t.EFF(40,"Email"),t.k0s(),t.j41(41,"div",18),t.nrm(42,"input",21),t.k0s()()(),t.j41(43,"div",22)(44,"h5"),t.EFF(45,"Inline"),t.k0s(),t.j41(46,"div",23)(47,"div",3)(48,"label",24),t.EFF(49,"Firstname"),t.k0s(),t.nrm(50,"input",25),t.k0s(),t.j41(51,"div",3)(52,"label",26),t.EFF(53,"Lastname"),t.k0s(),t.nrm(54,"input",27),t.k0s(),t.nrm(55,"button",28),t.k0s()(),t.j41(56,"div",22)(57,"h5"),t.EFF(58,"Help Text"),t.k0s(),t.j41(59,"div",29)(60,"label",30),t.EFF(61,"Username"),t.k0s(),t.nrm(62,"input",31),t.j41(63,"small"),t.EFF(64,"Enter your username to reset your password."),t.k0s()()()(),t.j41(65,"div",32)(66,"div",22)(67,"h5"),t.EFF(68,"Advanced"),t.k0s(),t.j41(69,"div",33)(70,"div",34)(71,"label",35),t.EFF(72,"Firstname"),t.k0s(),t.nrm(73,"input",36),t.k0s(),t.j41(74,"div",34)(75,"label",37),t.EFF(76,"Lastname"),t.k0s(),t.nrm(77,"input",38),t.k0s(),t.j41(78,"div",39)(79,"label",40),t.EFF(80,"Address"),t.k0s(),t.nrm(81,"input",41),t.k0s(),t.j41(82,"div",34)(83,"label",42),t.EFF(84,"City"),t.k0s(),t.nrm(85,"input",43),t.k0s(),t.j41(86,"div",44)(87,"label",45),t.EFF(88,"State"),t.k0s(),t.j41(89,"p-dropdown",46),t.mxI("ngModelChange",function(m){return t.DH7(a.selectedState,m)||(a.selectedState=m),m}),t.k0s()(),t.j41(90,"div",44)(91,"label",47),t.EFF(92,"Zip"),t.k0s(),t.nrm(93,"input",48),t.k0s()()()()()),2&i&&(t.R7$(89),t.Y8G("options",a.dropdownItems),t.R50("ngModel",a.selectedState))},dependencies:[o.BC,o.vS,c._f,r.S,p.ms,F.Z],encapsulation:2})}return n})(),v=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[d.iI.forChild([{path:"",component:h}]),d.iI]})}return n})();var f=e(8537),g=e(612),y=e(9322),k=e(4635),x=e(7480),j=e(3897),E=e(6296);let I=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[u.MD,o.YN,v,f.$$,g.rO,y.AV,p.kr,k.Zn,x.O3,j.tQ,E.iV,F.f,r.u]})}return n})()}}]);