"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[277],{3888:(w,E,d)=>{d.d(E,{b:()=>G,E:()=>y});var u=d(8359);class g extends u.yU{constructor(o,_){super()}schedule(o,_=0){return this}}const e={setInterval(h,o,..._){const{delegate:m}=e;return m?.setInterval?m.setInterval(h,o,..._):setInterval(h,o,..._)},clearInterval(h){const{delegate:o}=e;return(o?.clearInterval||clearInterval)(h)},delegate:void 0};var I=d(7908);const p={now:()=>(p.delegate||Date).now(),delegate:void 0};class f{constructor(o,_=f.now){this.schedulerActionCtor=o,this.now=_}schedule(o,_=0,m){return new this.schedulerActionCtor(this,o).schedule(m,_)}}f.now=p.now;const y=new class T extends f{constructor(o,_=f.now){super(o,_),this.actions=[],this._active=!1}flush(o){const{actions:_}=this;if(this._active)return void _.push(o);let m;this._active=!0;do{if(m=o.execute(o.state,o.delay))break}while(o=_.shift());if(this._active=!1,m){for(;o=_.shift();)o.unsubscribe();throw m}}}(class x extends g{constructor(o,_){super(o,_),this.scheduler=o,this.work=_,this.pending=!1}schedule(o,_=0){var m;if(this.closed)return this;this.state=o;const b=this.id,P=this.scheduler;return null!=b&&(this.id=this.recycleAsyncId(P,b,_)),this.pending=!0,this.delay=_,this.id=null!==(m=this.id)&&void 0!==m?m:this.requestAsyncId(P,this.id,_),this}requestAsyncId(o,_,m=0){return e.setInterval(o.flush.bind(o,this),m)}recycleAsyncId(o,_,m=0){if(null!=m&&this.delay===m&&!1===this.pending)return _;null!=_&&e.clearInterval(_)}execute(o,_){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const m=this._execute(o,_);if(m)return m;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,_){let b,m=!1;try{this.work(o)}catch(P){m=!0,b=P||new Error("Scheduled action threw falsy error")}if(m)return this.unsubscribe(),b}unsubscribe(){if(!this.closed){const{id:o,scheduler:_}=this,{actions:m}=_;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.o)(m,this),null!=o&&(this.id=this.recycleAsyncId(_,o,null)),this.delay=null,super.unsubscribe()}}}),G=y},5336:(w,E,d)=>{d.d(E,{GD:()=>D,M6:()=>Ve});var u=d(9969),g=d(177),e=d(4438),I=d(2365),x=d(5779),p=d(1455),f=d(8439),T=d(8263),y=d(2423),G=d(8807),h=d(8542),o=d(4420);const _=["list"],m=i=>({"p-submenu-list":!0,"p-panelmenu-root-list":i}),b=i=>({"p-disabled":i}),P=()=>({exact:!1}),k=i=>({$implicit:i});function S(i,l){1&i&&e.nrm(0,"li",7)}function $(i,l){if(1&i&&e.nrm(0,"AngleDownIcon",21),2&i){const t=e.XpG(6).$implicit,n=e.XpG();e.Y8G("styleClass","p-submenu-icon")("ngStyle",n.getItemProp(t,"iconStyle"))}}function A(i,l){if(1&i&&e.nrm(0,"AngleRightIcon",21),2&i){const t=e.XpG(6).$implicit,n=e.XpG();e.Y8G("styleClass","p-submenu-icon")("ngStyle",n.getItemProp(t,"iconStyle"))}}function R(i,l){if(1&i&&(e.qex(0),e.DNE(1,$,1,2,"AngleDownIcon",20)(2,A,1,2,"AngleRightIcon",20),e.bVm()),2&i){const t=e.XpG(5).$implicit,n=e.XpG();e.R7$(),e.Y8G("ngIf",n.isItemActive(t)),e.R7$(),e.Y8G("ngIf",!n.isItemActive(t))}}function F(i,l){}function L(i,l){1&i&&e.DNE(0,F,0,0,"ng-template")}function B(i,l){if(1&i&&(e.qex(0),e.DNE(1,R,3,2,"ng-container",10)(2,L,1,0,null,19),e.bVm()),2&i){const t=e.XpG(5);e.R7$(),e.Y8G("ngIf",!t.panelMenu.submenuIconTemplate),e.R7$(),e.Y8G("ngTemplateOutlet",t.panelMenu.submenuIconTemplate)}}function O(i,l){if(1&i&&e.nrm(0,"span",22),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.Y8G("ngClass",t.icon)("ngStyle",n.getItemProp(t,"iconStyle"))}}function Y(i,l){if(1&i&&(e.j41(0,"span",23),e.EFF(1),e.k0s()),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.R7$(),e.JRh(n.getItemProp(t,"label"))}}function X(i,l){if(1&i&&e.nrm(0,"span",24),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.Y8G("innerHTML",n.getItemProp(t,"label"),e.npT)}}function V(i,l){if(1&i&&(e.j41(0,"span",25),e.EFF(1),e.k0s()),2&i){const t=e.XpG(4).$implicit;e.Y8G("ngClass",t.badgeStyleClass),e.R7$(),e.JRh(t.badge)}}function H(i,l){if(1&i&&(e.j41(0,"a",15),e.DNE(1,B,3,2,"ng-container",10)(2,O,1,2,"span",16)(3,Y,2,1,"span",17)(4,X,1,1,"ng-template",null,1,e.C5r)(6,V,2,2,"span",18),e.k0s()),2&i){const t=e.sdS(5),n=e.XpG(3).$implicit,a=e.XpG();e.Y8G("ngClass",e.eq3(10,b,a.getItemProp(n,"disabled")))("target",a.getItemProp(n,"target")),e.BMQ("href",a.getItemProp(n,"url"),e.B4B)("data-pc-section","action")("tabindex",a.parentExpanded?"0":"-1"),e.R7$(),e.Y8G("ngIf",a.isItemGroup(n)),e.R7$(),e.Y8G("ngIf",n.icon),e.R7$(),e.Y8G("ngIf",!1!==(null==n.item?null:n.item.escape))("ngIfElse",t),e.R7$(3),e.Y8G("ngIf",n.badge)}}function N(i,l){if(1&i&&e.nrm(0,"AngleDownIcon",21),2&i){const t=e.XpG(6).$implicit,n=e.XpG();e.Y8G("styleClass","p-submenu-icon")("ngStyle",n.getItemProp(t,"iconStyle"))}}function K(i,l){if(1&i&&e.nrm(0,"AngleRightIcon",21),2&i){const t=e.XpG(6).$implicit,n=e.XpG();e.Y8G("styleClass","p-submenu-icon")("ngStyle",n.getItemProp(t,"iconStyle"))}}function j(i,l){if(1&i&&(e.qex(0),e.DNE(1,N,1,2,"AngleDownIcon",20)(2,K,1,2,"AngleRightIcon",20),e.bVm()),2&i){const t=e.XpG(5).$implicit,n=e.XpG();e.R7$(),e.Y8G("ngIf",n.isItemActive(t)),e.R7$(),e.Y8G("ngIf",!n.isItemActive(t))}}function U(i,l){}function q(i,l){1&i&&e.DNE(0,U,0,0,"ng-template")}function Q(i,l){if(1&i&&(e.qex(0),e.DNE(1,j,3,2,"ng-container",10)(2,q,1,0,null,19),e.bVm()),2&i){const t=e.XpG(5);e.R7$(),e.Y8G("ngIf",!t.panelMenu.submenuIconTemplate),e.R7$(),e.Y8G("ngTemplateOutlet",t.panelMenu.submenuIconTemplate)}}function W(i,l){if(1&i&&e.nrm(0,"span",22),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.Y8G("ngClass",t.icon)("ngStyle",n.getItemProp(t,"iconStyle"))}}function J(i,l){if(1&i&&(e.j41(0,"span",23),e.EFF(1),e.k0s()),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.R7$(),e.JRh(n.getItemProp(t,"label"))}}function z(i,l){if(1&i&&e.nrm(0,"span",24),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.Y8G("innerHTML",n.getItemProp(t,"label"),e.npT)}}function Z(i,l){if(1&i&&(e.j41(0,"span",25),e.EFF(1),e.k0s()),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.Y8G("ngClass",n.getItemProp(t,"badgeStyleClass")),e.R7$(),e.JRh(n.getItemProp(t,"badge"))}}function ee(i,l){if(1&i&&(e.j41(0,"a",26),e.DNE(1,Q,3,2,"ng-container",10)(2,W,1,2,"span",16)(3,J,2,1,"span",17)(4,z,1,1,"ng-template",null,2,e.C5r)(6,Z,2,2,"span",18),e.k0s()),2&i){const t=e.sdS(5),n=e.XpG(3).$implicit,a=e.XpG();e.Y8G("routerLink",a.getItemProp(n,"routerLink"))("queryParams",a.getItemProp(n,"queryParams"))("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",a.getItemProp(n,"routerLinkActiveOptions")||e.lJ4(20,P))("ngClass",e.eq3(21,b,a.getItemProp(n,"disabled")))("target",a.getItemProp(n,"target"))("fragment",a.getItemProp(n,"fragment"))("queryParamsHandling",a.getItemProp(n,"queryParamsHandling"))("preserveFragment",a.getItemProp(n,"preserveFragment"))("skipLocationChange",a.getItemProp(n,"skipLocationChange"))("replaceUrl",a.getItemProp(n,"replaceUrl"))("state",a.getItemProp(n,"state")),e.BMQ("title",a.getItemProp(n,"title"))("data-pc-section","action")("tabindex",a.parentExpanded?"0":"-1"),e.R7$(),e.Y8G("ngIf",a.isItemGroup(n)),e.R7$(),e.Y8G("ngIf",n.icon),e.R7$(),e.Y8G("ngIf",!1!==a.getItemProp(n,"escape"))("ngIfElse",t),e.R7$(3),e.Y8G("ngIf",n.badge)}}function te(i,l){if(1&i&&(e.qex(0),e.DNE(1,H,7,12,"a",13)(2,ee,7,23,"a",14),e.bVm()),2&i){const t=e.XpG(2).$implicit,n=e.XpG();e.R7$(),e.Y8G("ngIf",!n.getItemProp(t,"routerLink")),e.R7$(),e.Y8G("ngIf",n.getItemProp(t,"routerLink"))}}function ne(i,l){}function ie(i,l){1&i&&e.DNE(0,ne,0,0,"ng-template")}function ae(i,l){if(1&i&&(e.qex(0),e.DNE(1,ie,1,0,null,27),e.bVm()),2&i){const t=e.XpG(2).$implicit,n=e.XpG();e.R7$(),e.Y8G("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",e.eq3(2,k,t.item))}}function se(i,l){if(1&i){const t=e.RV6();e.j41(0,"p-panelMenuSub",28),e.bIt("itemToggle",function(a){e.eBV(t);const s=e.XpG(3);return e.Njj(s.onItemToggle(a))}),e.k0s()}if(2&i){const t=e.XpG(2).$implicit,n=e.XpG();e.Y8G("id",n.getItemId(t)+"_list")("panelId",n.panelId)("items",null==t?null:t.items)("itemTemplate",n.itemTemplate)("transitionOptions",n.transitionOptions)("focusedItemId",n.focusedItemId)("activeItemPath",n.activeItemPath)("level",n.level+1)("parentExpanded",!!n.parentExpanded&&n.isItemExpanded(t))}}function oe(i,l){if(1&i){const t=e.RV6();e.j41(0,"li",8)(1,"div",9),e.bIt("click",function(a){e.eBV(t);const s=e.XpG().$implicit,r=e.XpG();return e.Njj(r.onItemClick(a,s))}),e.DNE(2,te,3,2,"ng-container",10)(3,ae,2,4,"ng-container",10),e.k0s(),e.j41(4,"div",11),e.DNE(5,se,1,9,"p-panelMenuSub",12),e.k0s()()}if(2&i){const t=e.XpG(),n=t.$implicit,a=t.index,s=e.XpG();e.HbH(s.getItemProp(n,"styleClass")),e.AVh("p-hidden",!1===n.visible)("p-focus",s.isItemFocused(n)&&!s.isItemDisabled(n)),e.Y8G("ngClass",s.getItemClass(n))("ngStyle",s.getItemProp(n,"style"))("pTooltip",s.getItemProp(n,"tooltip"))("tooltipOptions",s.getItemProp(n,"tooltipOptions")),e.BMQ("id",s.getItemId(n))("aria-label",s.getItemProp(n,"label"))("aria-expanded",s.isItemGroup(n)?s.isItemActive(n):void 0)("aria-level",s.level+1)("aria-setsize",s.getAriaSetSize())("aria-posinset",s.getAriaPosInset(a))("data-p-disabled",s.isItemDisabled(n)),e.R7$(2),e.Y8G("ngIf",!s.itemTemplate),e.R7$(),e.Y8G("ngIf",s.itemTemplate),e.R7$(),e.Y8G("@submenu",s.getAnimation(n)),e.R7$(),e.Y8G("ngIf",s.isItemVisible(n)&&s.isItemGroup(n)&&s.isItemExpanded(n))}}function le(i,l){if(1&i&&e.DNE(0,S,1,0,"li",5)(1,oe,6,21,"li",6),2&i){const t=l.$implicit,n=e.XpG();e.Y8G("ngIf",t.separator),e.R7$(),e.Y8G("ngIf",!t.separator&&n.isItemVisible(t))}}const re=["submenu"],ce=["container"],_e=(i,l)=>({"p-component p-panelmenu-header":!0,"p-highlight":i,"p-disabled":l}),me=i=>({"p-panelmenu-expanded":i});function pe(i,l){1&i&&e.nrm(0,"ChevronDownIcon",20),2&i&&e.Y8G("styleClass","p-submenu-icon")}function ue(i,l){1&i&&e.nrm(0,"ChevronRightIcon",20),2&i&&e.Y8G("styleClass","p-submenu-icon")}function de(i,l){if(1&i&&(e.qex(0),e.DNE(1,pe,1,1,"ChevronDownIcon",19)(2,ue,1,1,"ChevronRightIcon",19),e.bVm()),2&i){const t=e.XpG(5).$implicit,n=e.XpG();e.R7$(),e.Y8G("ngIf",n.isItemActive(t)),e.R7$(),e.Y8G("ngIf",!n.isItemActive(t))}}function ge(i,l){}function he(i,l){1&i&&e.DNE(0,ge,0,0,"ng-template")}function Ie(i,l){if(1&i&&(e.qex(0),e.DNE(1,de,3,2,"ng-container",9)(2,he,1,0,null,18),e.bVm()),2&i){const t=e.XpG(5);e.R7$(),e.Y8G("ngIf",!t.submenuIconTemplate),e.R7$(),e.Y8G("ngTemplateOutlet",t.submenuIconTemplate)}}function fe(i,l){if(1&i&&e.nrm(0,"span",21),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.Y8G("ngClass",t.icon)("ngStyle",n.getItemProp(t,"iconStyle"))}}function be(i,l){if(1&i&&(e.j41(0,"span",22),e.EFF(1),e.k0s()),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.R7$(),e.JRh(n.getItemProp(t,"label"))}}function Pe(i,l){if(1&i&&e.nrm(0,"span",23),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.Y8G("innerHTML",n.getItemProp(t,"label"),e.npT)}}function ve(i,l){if(1&i&&(e.j41(0,"span",24),e.EFF(1),e.k0s()),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.Y8G("ngClass",n.getItemProp(t,"badgeStyleClass")),e.R7$(),e.JRh(n.getItemProp(t,"badge"))}}function xe(i,l){if(1&i&&(e.j41(0,"a",14),e.DNE(1,Ie,3,2,"ng-container",9)(2,fe,1,2,"span",15)(3,be,2,1,"span",16)(4,Pe,1,1,"ng-template",null,1,e.C5r)(6,ve,2,2,"span",17),e.k0s()),2&i){const t=e.sdS(5),n=e.XpG(3).$implicit,a=e.XpG();e.Y8G("target",a.getItemProp(n,"target")),e.BMQ("href",a.getItemProp(n,"url"),e.B4B)("tabindex",-1)("title",a.getItemProp(n,"title"))("data-pc-section","headeraction"),e.R7$(),e.Y8G("ngIf",a.isItemGroup(n)),e.R7$(),e.Y8G("ngIf",n.icon),e.R7$(),e.Y8G("ngIf",!1!==a.getItemProp(n,"escape"))("ngIfElse",t),e.R7$(3),e.Y8G("ngIf",a.getItemProp(n,"badge"))}}function ye(i,l){if(1&i&&(e.qex(0),e.DNE(1,xe,7,10,"a",13),e.bVm()),2&i){const t=e.XpG(2).$implicit,n=e.XpG();e.R7$(),e.Y8G("ngIf",!n.getItemProp(t,"routerLink"))}}function Te(i,l){1&i&&e.eu8(0)}function Ge(i,l){1&i&&e.nrm(0,"ChevronDownIcon",20),2&i&&e.Y8G("styleClass","p-submenu-icon")}function Ee(i,l){1&i&&e.nrm(0,"ChevronRightIcon",20),2&i&&e.Y8G("styleClass","p-submenu-icon")}function Me(i,l){if(1&i&&(e.qex(0),e.DNE(1,Ge,1,1,"ChevronDownIcon",19)(2,Ee,1,1,"ChevronRightIcon",19),e.bVm()),2&i){const t=e.XpG(4).$implicit,n=e.XpG();e.R7$(),e.Y8G("ngIf",n.isItemActive(t)),e.R7$(),e.Y8G("ngIf",!n.isItemActive(t))}}function ke(i,l){}function De(i,l){1&i&&e.DNE(0,ke,0,0,"ng-template")}function Ce(i,l){if(1&i&&(e.qex(0),e.DNE(1,Me,3,2,"ng-container",9)(2,De,1,0,null,18),e.bVm()),2&i){const t=e.XpG(4);e.R7$(),e.Y8G("ngIf",!t.submenuIconTemplate),e.R7$(),e.Y8G("ngTemplateOutlet",t.submenuIconTemplate)}}function we(i,l){if(1&i&&e.nrm(0,"span",21),2&i){const t=e.XpG(3).$implicit,n=e.XpG();e.Y8G("ngClass",t.icon)("ngStyle",n.getItemProp(t,"iconStyle"))}}function Se(i,l){if(1&i&&(e.j41(0,"span",22),e.EFF(1),e.k0s()),2&i){const t=e.XpG(3).$implicit,n=e.XpG();e.R7$(),e.JRh(n.getItemProp(t,"label"))}}function $e(i,l){if(1&i&&e.nrm(0,"span",23),2&i){const t=e.XpG(3).$implicit,n=e.XpG();e.Y8G("innerHTML",n.getItemProp(t,"label"),e.npT)}}function Ae(i,l){if(1&i&&(e.j41(0,"span",24),e.EFF(1),e.k0s()),2&i){const t=e.XpG(3).$implicit,n=e.XpG();e.Y8G("ngClass",n.getItemProp(t,"badgeStyleClass")),e.R7$(),e.JRh(n.getItemProp(t,"badge"))}}function Re(i,l){if(1&i&&(e.j41(0,"a",25),e.DNE(1,Ce,3,2,"ng-container",9)(2,we,1,2,"span",15)(3,Se,2,1,"span",16)(4,$e,1,1,"ng-template",null,2,e.C5r)(6,Ae,2,2,"span",17),e.k0s()),2&i){const t=e.sdS(5),n=e.XpG(2).$implicit,a=e.XpG();e.Y8G("routerLink",a.getItemProp(n,"routerLink"))("queryParams",a.getItemProp(n,"queryParams"))("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",a.getItemProp(n,"routerLinkActiveOptions")||e.lJ4(18,P))("target",a.getItemProp(n,"target"))("fragment",a.getItemProp(n,"fragment"))("queryParamsHandling",a.getItemProp(n,"queryParamsHandling"))("preserveFragment",a.getItemProp(n,"preserveFragment"))("skipLocationChange",a.getItemProp(n,"skipLocationChange"))("replaceUrl",a.getItemProp(n,"replaceUrl"))("state",a.getItemProp(n,"state")),e.BMQ("tabindex",-1)("data-pc-section","headeraction"),e.R7$(),e.Y8G("ngIf",a.isItemGroup(n)),e.R7$(),e.Y8G("ngIf",n.icon),e.R7$(),e.Y8G("ngIf",!1!==a.getItemProp(n,"escape"))("ngIfElse",t),e.R7$(3),e.Y8G("ngIf",a.getItemProp(n,"badge"))}}function Fe(i,l){if(1&i){const t=e.RV6();e.j41(0,"div",26),e.bIt("@rootItem.done",function(){e.eBV(t);const a=e.XpG(3);return e.Njj(a.onToggleDone())}),e.j41(1,"div",27)(2,"p-panelMenuList",28),e.bIt("headerFocus",function(a){e.eBV(t);const s=e.XpG(3);return e.Njj(s.updateFocusedHeader(a))}),e.k0s()()()}if(2&i){const t=e.XpG(2),n=t.$implicit,a=t.index,s=e.XpG();e.Y8G("ngClass",e.eq3(14,me,s.isItemActive(n)))("@rootItem",s.getAnimation(n)),e.BMQ("id",s.getContentId(n,a))("aria-labelledby",s.getHeaderId(n,a))("data-pc-section","toggleablecontent"),e.R7$(),e.BMQ("data-pc-section","menucontent"),e.R7$(),e.Y8G("panelId",s.getPanelId(a,n))("items",s.getItemProp(n,"items"))("itemTemplate",s.itemTemplate)("transitionOptions",s.transitionOptions)("root",!0)("activeItem",s.activeItem())("tabindex",s.tabindex)("parentExpanded",s.isItemActive(n))}}function Le(i,l){if(1&i){const t=e.RV6();e.j41(0,"div",6)(1,"div",7),e.bIt("click",function(a){e.eBV(t);const s=e.XpG(),r=s.$implicit,c=s.index,v=e.XpG();return e.Njj(v.onHeaderClick(a,r,c))})("keydown",function(a){e.eBV(t);const s=e.XpG(),r=s.$implicit,c=s.index,v=e.XpG();return e.Njj(v.onHeaderKeyDown(a,r,c))}),e.j41(2,"div",8),e.DNE(3,ye,2,1,"ng-container",9)(4,Te,1,0,"ng-container",10)(5,Re,7,19,"a",11),e.k0s()(),e.DNE(6,Fe,3,16,"div",12),e.k0s()}if(2&i){const t=e.XpG(),n=t.$implicit,a=t.index,s=e.XpG();e.Y8G("ngClass",s.getItemProp(n,"headerClass"))("ngStyle",s.getItemProp(n,"style")),e.BMQ("data-pc-section","panel"),e.R7$(),e.HbH(s.getItemProp(n,"styleClass")),e.Y8G("ngClass",e.l_i(23,_e,s.isItemActive(n),s.isItemDisabled(n)))("ngStyle",s.getItemProp(n,"style"))("pTooltip",s.getItemProp(n,"tooltip"))("tabindex",0)("tooltipOptions",s.getItemProp(n,"tooltipOptions")),e.BMQ("id",s.getHeaderId(n,a))("aria-expanded",s.isItemActive(n))("aria-label",s.getItemProp(n,"label"))("aria-controls",s.getContentId(n,a))("aria-disabled",s.isItemDisabled(n))("data-p-highlight",s.isItemActive(n))("data-p-disabled",s.isItemDisabled(n))("data-pc-section","header"),e.R7$(2),e.Y8G("ngIf",!s.itemTemplate),e.R7$(),e.Y8G("ngTemplateOutlet",s.itemTemplate)("ngTemplateOutletContext",e.eq3(26,k,n)),e.R7$(),e.Y8G("ngIf",s.getItemProp(n,"routerLink")),e.R7$(),e.Y8G("ngIf",s.isItemGroup(n))}}function Be(i,l){if(1&i&&(e.qex(0),e.DNE(1,Le,7,28,"div",5),e.bVm()),2&i){const t=l.$implicit,n=e.XpG();e.R7$(),e.Y8G("ngIf",n.isItemVisible(t))}}let Ye=(()=>{class i{panelMenu;el;panelId;focusedItemId;items;itemTemplate;level=0;activeItemPath;root;tabindex;transitionOptions;parentExpanded;itemToggle=new e.bkB;menuFocus=new e.bkB;menuBlur=new e.bkB;menuKeyDown=new e.bkB;listViewChild;constructor(t,n){this.panelMenu=t,this.el=n}getItemId(t){return t.item?.id??`${this.panelId}_${t.key}`}getItemKey(t){return this.getItemId(t)}getItemClass(t){return{"p-menuitem":!0,"p-disabled":this.isItemDisabled(t)}}getItemProp(t,n,a){return t&&t.item?o.BF.getItemValue(t.item[n],a):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemExpanded(t){return t.expanded}isItemActive(t){return this.isItemExpanded(t)||this.activeItemPath.some(n=>n&&n.key===t.key)}isItemVisible(t){return!1!==this.getItemProp(t,"visible")}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return o.BF.isNotEmpty(t.items)}getAnimation(t){return this.isItemActive(t)?{value:"visible",params:{transitionParams:this.transitionOptions,height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemClick(t,n){this.isItemDisabled(n)||(this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.itemToggle.emit({processedItem:n,expanded:!this.isItemActive(n)}))}onItemToggle(t){this.itemToggle.emit(t)}static \u0275fac=function(n){return new(n||i)(e.rXU((0,e.Rfq)(()=>D)),e.rXU(e.aKT))};static \u0275cmp=e.VBU({type:i,selectors:[["p-panelMenuSub"]],viewQuery:function(n,a){if(1&n&&e.GBs(_,5),2&n){let s;e.mGM(s=e.lsd())&&(a.listViewChild=s.first)}},hostAttrs:[1,"p-element"],inputs:{panelId:"panelId",focusedItemId:"focusedItemId",items:"items",itemTemplate:"itemTemplate",level:[2,"level","level",e.Udg],activeItemPath:"activeItemPath",root:[2,"root","root",e.L39],tabindex:[2,"tabindex","tabindex",e.Udg],transitionOptions:"transitionOptions",parentExpanded:[2,"parentExpanded","parentExpanded",e.L39]},outputs:{itemToggle:"itemToggle",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeyDown:"menuKeyDown"},features:[e.GFd],decls:3,vars:8,consts:[["list",""],["htmlLabel",""],["htmlRouteLabel",""],["role","tree",3,"focusin","focusout","keydown","ngClass","tabindex"],["ngFor","",3,"ngForOf"],["class","p-menuitem-separator","role","separator",4,"ngIf"],["role","treeitem",3,"ngClass","class","p-hidden","p-focus","ngStyle","pTooltip","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menuitem-separator"],["role","treeitem",3,"ngClass","ngStyle","pTooltip","tooltipOptions"],[1,"p-menuitem-content",3,"click"],[4,"ngIf"],[1,"p-toggleable-content"],[3,"id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded","itemToggle",4,"ngIf"],["class","p-menuitem-link",3,"ngClass","target",4,"ngIf"],["class","p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],[1,"p-menuitem-link",3,"ngClass","target"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"styleClass","ngStyle"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemToggle","id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded"]],template:function(n,a){if(1&n){const s=e.RV6();e.j41(0,"ul",3,0),e.bIt("focusin",function(c){return e.eBV(s),e.Njj(a.menuFocus.emit(c))})("focusout",function(c){return e.eBV(s),e.Njj(a.menuBlur.emit(c))})("keydown",function(c){return e.eBV(s),e.Njj(a.menuKeyDown.emit(c))}),e.DNE(2,le,2,2,"ng-template",4),e.k0s()}2&n&&(e.Y8G("ngClass",e.eq3(6,m,a.root))("tabindex",-1),e.BMQ("aria-activedescendant",a.focusedItemId)("data-pc-section","menu")("aria-hidden",!a.parentExpanded),e.R7$(2),e.Y8G("ngForOf",a.items))},dependencies:()=>[g.YU,g.Sq,g.bT,g.T3,g.B3,I.Wk,I.wQ,h.m,f.R,T.D,i],encapsulation:2,data:{animation:[(0,u.hZ)("submenu",[(0,u.wk)("hidden",(0,u.iF)({height:"0"})),(0,u.wk)("visible",(0,u.iF)({height:"*"})),(0,u.kY)("visible <=> hidden",[(0,u.i0)("{{transitionParams}}")]),(0,u.kY)("void => *",(0,u.i0)(0))])]}})}return i})(),Xe=(()=>{class i{el;panelId;id;items;itemTemplate;parentExpanded;expanded;transitionOptions;root;tabindex;activeItem;itemToggle=new e.bkB;headerFocus=new e.bkB;subMenuViewChild;searchTimeout;searchValue;focused;focusedItem=(0,e.vPA)(null);activeItemPath=(0,e.vPA)([]);processedItems=(0,e.vPA)([]);visibleItems=(0,e.EWP)(()=>{const t=this.processedItems();return this.flatItems(t)});get focusedItemId(){const t=this.focusedItem();return t&&t.item?.id?t.item.id:o.BF.isNotEmpty(this.focusedItem())?`${this.panelId}_${this.focusedItem().key}`:void 0}constructor(t){this.el=t}ngOnChanges(t){this.processedItems.set(this.createProcessedItems(t?.items?.currentValue||this.items||[]))}getItemProp(t,n){return t&&t.item?o.BF.getItemValue(t.item[n]):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemVisible(t){return!1!==this.getItemProp(t,"visible")}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemActive(t){return this.activeItemPath().some(n=>n.key===t.parentKey)}isItemGroup(t){return o.BF.isNotEmpty(t.items)}isElementInPanel(t,n){const a=t.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(n)}isItemMatched(t){return this.isValidItem(t)&&this.getItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isVisibleItem(t){return!!t&&(0===t.level||this.isItemActive(t))&&this.isItemVisible(t)}isValidItem(t){return!!t&&!this.isItemDisabled(t)&&!t.separator}findFirstItem(){return this.visibleItems().find(t=>this.isValidItem(t))}findLastItem(){return o.BF.findLast(this.visibleItems(),t=>this.isValidItem(t))}findItemByEventTarget(t){let n=t;for(;n&&"li"!==n.tagName?.toLowerCase();)n=n?.parentNode;return n?.id&&this.visibleItems().find(a=>this.isValidItem(a)&&`${this.panelId}_${a.key}`===n.id)}createProcessedItems(t,n=0,a={},s=""){const r=[];return t&&t.forEach((c,v)=>{const C=(""!==s?s+"_":"")+v,M={icon:c.icon,expanded:c.expanded,separator:c.separator,item:c,index:v,level:n,key:C,parent:a,parentKey:s};M.items=this.createProcessedItems(c.items,n+1,M,C),r.push(M)}),r}findProcessedItemByItemKey(t,n,a=0){if((n=n||this.processedItems())&&n.length)for(let s=0;s<n.length;s++){const r=n[s];if(this.getItemProp(r,"key")===t)return r;const c=this.findProcessedItemByItemKey(t,r.items,a+1);if(c)return c}}flatItems(t,n=[]){return t&&t.forEach(a=>{this.isVisibleItem(a)&&(n.push(a),this.flatItems(a.items,n))}),n}changeFocusedItem(t){const{originalEvent:n,processedItem:a,focusOnNext:s,selfCheck:r,allowHeaderFocus:c=!0}=t;o.BF.isNotEmpty(this.focusedItem())&&this.focusedItem().key!==a.key?(this.focusedItem.set(a),this.scrollInView()):c&&this.headerFocus.emit({originalEvent:n,focusOnNext:s,selfCheck:r})}scrollInView(){const t=p.D.findSingle(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${this.focusedItemId}"]`);t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"nearest"})}onFocus(t){if(!this.focused){this.focused=!0;const n=this.focusedItem()||(this.isElementInPanel(t,t.relatedTarget)?this.findItemByEventTarget(t.target)||this.findFirstItem():this.findLastItem());null!==t.relatedTarget&&this.focusedItem.set(n)}}onBlur(t){this.focused&&!this.el.nativeElement.contains(t.relatedTarget)&&(this.focused=!1,this.focusedItem.set(null),this.searchValue="")}onItemToggle(t){const{processedItem:n,expanded:a}=t;n.expanded=!n.expanded;const s=this.activeItemPath().filter(r=>r.parentKey!==n.parentKey);a&&s.push(n),this.activeItemPath.set(s),this.processedItems.update(r=>r.map(c=>c===n?n:c)),this.focusedItem.set(n)}onKeyDown(t){const n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&o.BF.isPrintableCharacter(t.key)&&this.searchItems(t,t.key)}}onArrowDownKey(t){const n=o.BF.isNotEmpty(this.focusedItem())?this.findNextItem(this.focusedItem()):this.findFirstItem();this.changeFocusedItem({originalEvent:t,processedItem:n,focusOnNext:!0}),t.preventDefault()}onArrowUpKey(t){const n=o.BF.isNotEmpty(this.focusedItem())?this.findPrevItem(this.focusedItem()):this.findLastItem();this.changeFocusedItem({originalEvent:t,processedItem:n,selfCheck:!0}),t.preventDefault()}onArrowLeftKey(t){if(o.BF.isNotEmpty(this.focusedItem())){if(this.activeItemPath().some(a=>a.key===this.focusedItem().key)){const a=this.activeItemPath().filter(s=>s.key!==this.focusedItem().key);this.activeItemPath.set(a)}else{const a=o.BF.isNotEmpty(this.focusedItem().parent)?this.focusedItem().parent:this.focusedItem();this.focusedItem.set(a)}t.preventDefault()}}onArrowRightKey(t){if(o.BF.isNotEmpty(this.focusedItem())){if(this.isItemGroup(this.focusedItem()))if(this.activeItemPath().some(s=>s.key===this.focusedItem().key))this.onArrowDownKey(t);else{const s=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItem().parentKey);s.push(this.focusedItem()),this.activeItemPath.set(s)}t.preventDefault()}}onHomeKey(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),t.preventDefault()}onEndKey(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),t.preventDefault()}onEnterKey(t){if(o.BF.isNotEmpty(this.focusedItem())){const n=p.D.findSingle(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${this.focusedItemId}"]`),a=n&&(p.D.findSingle(n,'[data-pc-section="action"]')||p.D.findSingle(n,"a,button"));a?a.click():n&&n.click()}t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}findNextItem(t){const n=this.visibleItems().findIndex(s=>s.key===t.key);return(n<this.visibleItems().length-1?this.visibleItems().slice(n+1).find(s=>this.isValidItem(s)):void 0)||t}findPrevItem(t){const n=this.visibleItems().findIndex(s=>s.key===t.key);return(n>0?o.BF.findLast(this.visibleItems().slice(0,n),s=>this.isValidItem(s)):void 0)||t}searchItems(t,n){this.searchValue=(this.searchValue||"")+n;let a=null,s=!1;if(o.BF.isNotEmpty(this.focusedItem())){const r=this.visibleItems().findIndex(c=>c.key===this.focusedItem().key);a=this.visibleItems().slice(r).find(c=>this.isItemMatched(c)),a=o.BF.isEmpty(a)?this.visibleItems().slice(0,r).find(c=>this.isItemMatched(c)):a}else a=this.visibleItems().find(r=>this.isItemMatched(r));return o.BF.isNotEmpty(a)&&(s=!0),o.BF.isEmpty(a)&&o.BF.isEmpty(this.focusedItem())&&(a=this.findFirstItem()),o.BF.isNotEmpty(a)&&this.changeFocusedItem({originalEvent:t,processedItem:a,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s}static \u0275fac=function(n){return new(n||i)(e.rXU(e.aKT))};static \u0275cmp=e.VBU({type:i,selectors:[["p-panelMenuList"]],viewQuery:function(n,a){if(1&n&&e.GBs(re,5),2&n){let s;e.mGM(s=e.lsd())&&(a.subMenuViewChild=s.first)}},hostAttrs:[1,"p-element"],inputs:{panelId:"panelId",id:"id",items:"items",itemTemplate:"itemTemplate",parentExpanded:[2,"parentExpanded","parentExpanded",e.L39],expanded:[2,"expanded","expanded",e.L39],transitionOptions:"transitionOptions",root:[2,"root","root",e.L39],tabindex:[2,"tabindex","tabindex",e.Udg],activeItem:"activeItem"},outputs:{itemToggle:"itemToggle",headerFocus:"headerFocus"},features:[e.GFd,e.OA$],decls:2,vars:10,consts:[["submenu",""],[3,"itemToggle","keydown","menuFocus","menuBlur","root","id","panelId","tabindex","itemTemplate","focusedItemId","activeItemPath","transitionOptions","items","parentExpanded"]],template:function(n,a){if(1&n){const s=e.RV6();e.j41(0,"p-panelMenuSub",1,0),e.bIt("itemToggle",function(c){return e.eBV(s),e.Njj(a.onItemToggle(c))})("keydown",function(c){return e.eBV(s),e.Njj(a.onKeyDown(c))})("menuFocus",function(c){return e.eBV(s),e.Njj(a.onFocus(c))})("menuBlur",function(c){return e.eBV(s),e.Njj(a.onBlur(c))}),e.k0s()}2&n&&e.Y8G("root",!0)("id",a.panelId+"_list")("panelId",a.panelId)("tabindex",a.tabindex)("itemTemplate",a.itemTemplate)("focusedItemId",a.focused?a.focusedItemId:void 0)("activeItemPath",a.activeItemPath())("transitionOptions",a.transitionOptions)("items",a.processedItems())("parentExpanded",a.parentExpanded)},dependencies:[Ye],styles:["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"],encapsulation:2,changeDetection:0})}return i})(),D=(()=>{class i{cd;model;style;styleClass;multiple=!1;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";id;tabindex=0;templates;containerViewChild;submenuIconTemplate;itemTemplate;animating;activeItem=(0,e.vPA)(null);ngOnInit(){this.id=this.id||(0,o._Y)()}ngAfterContentInit(){this.templates?.forEach(t=>{"submenuicon"===t.getType()?this.submenuIconTemplate=t.template:this.itemTemplate=t.template})}constructor(t){this.cd=t}collapseAll(){for(let t of this.model)t.expanded&&(t.expanded=!1);this.cd.detectChanges()}onToggleDone(){this.animating=!1,this.cd.markForCheck()}changeActiveItem(t,n,a,s=!1){if(!this.isItemDisabled(n)){const r=s?n:this.activeItem&&o.BF.equals(n,this.activeItem)?null:n;this.activeItem.set(r)}}getAnimation(t){return t.expanded?{value:"visible",params:{transitionParams:this.animating?this.transitionOptions:"0ms",height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getItemProp(t,n){return t?o.BF.getItemValue(t[n]):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemActive(t){return t.expanded}isItemVisible(t){return!1!==this.getItemProp(t,"visible")}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemGroup(t){return o.BF.isNotEmpty(t.items)}getPanelId(t,n){return n&&n.id?n.id:`${this.id}_${t}`}getHeaderId(t,n){return t.id?t.id+"_header":`${this.getPanelId(n)}_header`}getContentId(t,n){return t.id?t.id+"_content":`${this.getPanelId(n)}_content`}updateFocusedHeader(t){const{originalEvent:n,focusOnNext:a,selfCheck:s}=t,r=n.currentTarget.closest('[data-pc-section="panel"]'),c=s?p.D.findSingle(r,'[data-pc-section="header"]'):a?this.findNextHeader(r):this.findPrevHeader(r);c?this.changeFocusedHeader(n,c):a?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)}changeFocusedHeader(t,n){n&&p.D.focus(n)}findNextHeader(t,n=!1){const s=p.D.findSingle(n?t:t.nextElementSibling,'[data-pc-section="header"]');return s?p.D.getAttribute(s,"data-p-disabled")?this.findNextHeader(s.parentElement):s:null}findPrevHeader(t,n=!1){const s=p.D.findSingle(n?t:t.previousElementSibling,'[data-pc-section="header"]');return s?p.D.getAttribute(s,"data-p-disabled")?this.findPrevHeader(s.parentElement):s:null}findFirstHeader(){return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild,!0)}findLastHeader(){return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild,!0)}onHeaderClick(t,n,a){if(this.isItemDisabled(n))t.preventDefault();else{if(n.command&&n.command({originalEvent:t,item:n}),!this.multiple)for(let s of this.model)n!==s&&s.expanded&&(s.expanded=!1);n.expanded=!n.expanded,this.changeActiveItem(t,n,a),this.animating=!0,p.D.focus(t.currentTarget)}}onHeaderKeyDown(t,n,a){switch(t.code){case"ArrowDown":this.onHeaderArrowDownKey(t);break;case"ArrowUp":this.onHeaderArrowUpKey(t);break;case"Home":this.onHeaderHomeKey(t);break;case"End":this.onHeaderEndKey(t);break;case"Enter":case"Space":this.onHeaderEnterKey(t,n,a)}}onHeaderArrowDownKey(t){const n=!0===p.D.getAttribute(t.currentTarget,"data-p-highlight")?p.D.findSingle(t.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null;n?p.D.focus(n):this.updateFocusedHeader({originalEvent:t,focusOnNext:!0}),t.preventDefault()}onHeaderArrowUpKey(t){const n=this.findPrevHeader(t.currentTarget.parentElement)||this.findLastHeader(),a=!0===p.D.getAttribute(n,"data-p-highlight")?p.D.findSingle(n.nextElementSibling,'[data-pc-section="menu"]'):null;a?p.D.focus(a):this.updateFocusedHeader({originalEvent:t,focusOnNext:!1}),t.preventDefault()}onHeaderHomeKey(t){this.changeFocusedHeader(t,this.findFirstHeader()),t.preventDefault()}onHeaderEndKey(t){this.changeFocusedHeader(t,this.findLastHeader()),t.preventDefault()}onHeaderEnterKey(t,n,a){const s=p.D.findSingle(t.currentTarget,'[data-pc-section="headeraction"]');s?s.click():this.onHeaderClick(t,n,a),t.preventDefault()}static \u0275fac=function(n){return new(n||i)(e.rXU(e.gRc))};static \u0275cmp=e.VBU({type:i,selectors:[["p-panelMenu"]],contentQueries:function(n,a,s){if(1&n&&e.wni(s,x.Ei,4),2&n){let r;e.mGM(r=e.lsd())&&(a.templates=r)}},viewQuery:function(n,a){if(1&n&&e.GBs(ce,5),2&n){let s;e.mGM(s=e.lsd())&&(a.containerViewChild=s.first)}},hostAttrs:[1,"p-element"],inputs:{model:"model",style:"style",styleClass:"styleClass",multiple:[2,"multiple","multiple",e.L39],transitionOptions:"transitionOptions",id:"id",tabindex:[2,"tabindex","tabindex",e.Udg]},features:[e.GFd],decls:3,vars:5,consts:[["container",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle","ngClass"],[4,"ngFor","ngForOf"],["class","p-panelmenu-panel",3,"ngClass","ngStyle",4,"ngIf"],[1,"p-panelmenu-panel",3,"ngClass","ngStyle"],["role","button",3,"click","keydown","ngClass","ngStyle","pTooltip","tabindex","tooltipOptions"],[1,"p-panelmenu-header-content"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-panelmenu-header-action",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["class","p-toggleable-content","role","region",3,"ngClass",4,"ngIf"],["class","p-panelmenu-header-action",3,"target",4,"ngIf"],[1,"p-panelmenu-header-action",3,"target"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-header-action",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["role","region",1,"p-toggleable-content",3,"ngClass"],[1,"p-panelmenu-content"],[3,"headerFocus","panelId","items","itemTemplate","transitionOptions","root","activeItem","tabindex","parentExpanded"]],template:function(n,a){1&n&&(e.j41(0,"div",3,0),e.DNE(2,Be,2,1,"ng-container",4),e.k0s()),2&n&&(e.HbH(a.styleClass),e.Y8G("ngStyle",a.style)("ngClass","p-panelmenu p-component"),e.R7$(2),e.Y8G("ngForOf",a.model))},dependencies:()=>[g.YU,g.Sq,g.bT,g.T3,g.B3,I.Wk,I.wQ,h.m,y.D,G.v,Xe],styles:["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"],encapsulation:2,data:{animation:[(0,u.hZ)("rootItem",[(0,u.wk)("hidden",(0,u.iF)({height:"0"})),(0,u.wk)("visible",(0,u.iF)({height:"*"})),(0,u.kY)("visible <=> hidden",[(0,u.i0)("{{transitionParams}}")]),(0,u.kY)("void => *",(0,u.i0)(0))])]},changeDetection:0})}return i})(),Ve=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=e.$C({type:i});static \u0275inj=e.G2t({imports:[g.MD,I.iI,h.S,x.Gg,f.R,T.D,y.D,G.v,I.iI,h.S,x.Gg]})}return i})()}}]);