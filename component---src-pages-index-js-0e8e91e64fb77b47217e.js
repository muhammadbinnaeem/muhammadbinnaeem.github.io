(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(4),a=n.n(o),l=n(212),c=(n(155),n(7)),s=n.n(c),u=(n(153),n(150)),d=n.n(u),p=n(156),f=n(152),m=n(149),g=n(151);function h(){var e=d()(["font-size: 40px;"]);return h=function(){return e},e}function b(){var e=d()(["font-size: 50px;"]);return b=function(){return e},e}function x(){var e=d()(["font-size: 60px;"]);return x=function(){return e},e}function v(){var e=d()(["font-size: 70px;"]);return v=function(){return e},e}function y(){var e=d()(["font-size: 40px;"]);return y=function(){return e},e}function w(){var e=d()(["font-size: 50px;"]);return w=function(){return e},e}function _(){var e=d()(["font-size: 60px;"]);return _=function(){return e},e}function j(){var e=d()(["font-size: 70px;"]);return j=function(){return e},e}function C(){var e=d()(["font-size: ",";"]);return C=function(){return e},e}function E(){var e=d()(["font-size: ",";"]);return E=function(){return e},e}function k(){var e=d()(["padding-top: 150px;"]);return k=function(){return e},e}var I=g.i.colors,N=g.i.fontSizes,z=g.i.fonts,S=Object(m.c)(g.f).withConfig({displayName:"hero__HeroContainer",componentId:"sc-17z9avy-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100vh;",";div{width:100%;}"],g.h.flexCenter,g.g.tablet(k())),T=m.c.h1.withConfig({displayName:"hero__Hi",componentId:"sc-17z9avy-1"})(["color:",";margin:0 0 20px 3px;font-size:",";font-family:",";font-weight:normal;",";",";"],I.green,N.medium,z.SFMono,g.g.desktop(E(),N.small),g.g.tablet(C(),N.smallish)),M=m.c.h2.withConfig({displayName:"hero__Name",componentId:"sc-17z9avy-2"})(["font-size:80px;line-height:1.1;margin:0;",";",";",";",";"],g.g.desktop(j()),g.g.tablet(_()),g.g.phablet(w()),g.g.phone(y())),O=m.c.h3.withConfig({displayName:"hero__Subtitle",componentId:"sc-17z9avy-3"})(["font-size:80px;line-height:1.1;color:",";",";",";",";",";"],I.slate,g.g.desktop(v()),g.g.tablet(x()),g.g.phablet(b()),g.g.phone(h())),L=m.c.div.withConfig({displayName:"hero__Blurb",componentId:"sc-17z9avy-4"})(["margin-top:25px;width:50%;max-width:500px;a{",";}"],g.h.inlineLink),A=m.c.a.withConfig({displayName:"hero__EmailLink",componentId:"sc-17z9avy-5"})(["",";font-size:",";margin-top:50px;"],g.h.bigButton,N.smallish),R=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={isMounted:!1},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout(function(){return e.setState({isMounted:!0})},1e3)},n.componentWillUnmount=function(){this.setState({isMounted:!1})},n.render=function(){var e=this.props.data,t=this.state.isMounted,n=e[0].node,r=n.frontmatter,o=n.html,a=[function(){return i.a.createElement(T,{style:{transitionDelay:"100ms"}},r.title)},function(){return i.a.createElement(M,{style:{transitionDelay:"200ms"}},r.name,".")},function(){return i.a.createElement(O,{style:{transitionDelay:"300ms"}},r.subtitle)},function(){return i.a.createElement(L,{style:{transitionDelay:"400ms"},dangerouslySetInnerHTML:{__html:o}})},function(){return i.a.createElement("div",{style:{transitionDelay:"500ms"}},i.a.createElement(A,{href:"mailto:"+f.email},"Get In Touch"))}];return i.a.createElement(S,null,i.a.createElement(p.TransitionGroup,null,t&&a.map(function(e,t){return i.a.createElement(p.CSSTransition,{key:t,classNames:"fadeup",timeout:3e3},e)})))},t}(r.Component);R.propTypes={data:a.a.array.isRequired};var F=R,P=n(211),D=n.n(P),H=n(157);function G(){var e=d()(["width: 70%;"]);return G=function(){return e},e}function q(){var e=d()(["margin: 60px auto 0;"]);return q=function(){return e},e}function B(){var e=d()(["width: 100%;"]);return B=function(){return e},e}function W(){var e=d()(["display: block;"]);return W=function(){return e},e}var J=g.i.colors,Y=g.i.fontSizes,U=g.i.fonts,V=Object(m.c)(g.f).withConfig({displayName:"about__AboutContainer",componentId:"sc-1wexrvx-0"})(["position:relative;"]),X=m.c.div.withConfig({displayName:"about__FlexContainer",componentId:"sc-1wexrvx-1"})(["",";align-items:flex-start;",";"],g.h.flexBetween,g.g.tablet(W())),K=m.c.div.withConfig({displayName:"about__ContentContainer",componentId:"sc-1wexrvx-2"})(["width:60%;max-width:480px;",";a{",";}"],g.g.tablet(B()),g.h.inlineLink),Q=m.c.ul.withConfig({displayName:"about__SkillsContainer",componentId:"sc-1wexrvx-3"})(["display:grid;grid-template-columns:repeat(2,minmax(140px,200px));overflow:hidden;margin-top:20px;"]),Z=m.c.li.withConfig({displayName:"about__Skill",componentId:"sc-1wexrvx-4"})(["position:relative;margin-bottom:10px;padding-left:20px;font-family:",";font-size:",";color:",";&:before{content:'▹';position:absolute;left:0;color:",";font-size:",";line-height:12px;}"],U.SFMono,Y.smallish,J.slate,J.green,Y.small),$=m.c.div.withConfig({displayName:"about__PicContainer",componentId:"sc-1wexrvx-5"})(["position:relative;width:40%;max-width:300px;margin-left:60px;",";",";"],g.g.tablet(q()),g.g.phablet(G())),ee=Object(m.c)(D.a).withConfig({displayName:"about__Avatar",componentId:"sc-1wexrvx-6"})(["position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);border-radius:",";transition:",";"],g.i.borderRadius,g.i.transition),te=m.c.div.withConfig({displayName:"about__AvatarContainer",componentId:"sc-1wexrvx-7"})(["width:100%;position:relative;border-radius:",";background-color:",";margin-left:-20px;&:hover,&:focus{background:transparent;&:after{top:15px;left:15px;}","{filter:none;mix-blend-mode:normal;}}&:before,&:after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:",";transition:",";}&:before{top:0;left:0;right:0;bottom:0;background-color:",";mix-blend-mode:screen;}&:after{border:2px solid ",";top:20px;left:20px;z-index:-1;}"],g.i.borderRadius,J.green,ee,g.i.borderRadius,g.i.transition,J.navy,J.green),ne=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(H.a)().reveal(this.about,Object(f.srConfig)())},n.render=function(){var e=this,t=this.props.data[0].node,n=t.frontmatter,r=t.html,o=n.title,a=n.skills,l=n.avatar;return i.a.createElement(V,{id:"about",ref:function(t){return e.about=t}},i.a.createElement(g.c,null,o),i.a.createElement(X,null,i.a.createElement(K,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),i.a.createElement(Q,null,a&&a.map(function(e,t){return i.a.createElement(Z,{key:t},e)}))),i.a.createElement($,null,i.a.createElement(te,null,i.a.createElement(ee,{fluid:l.childImageSharp.fluid,alt:"Avatar"})))))},t}(r.Component);ne.propTypes={data:a.a.array.isRequired};var re=ne;n(210);function ie(){var e=d()(["padding-left: 0;"]);return ie=function(){return e},e}function oe(){var e=d()(["padding-left: 20px;"]);return oe=function(){return e},e}function ae(){var e=d()(["\n    width: 100%;\n    max-width: ","px;\n    height: 2px;\n    top: auto;\n    bottom: 0;\n    transform: translateX(\n      ","px\n    );\n  "]);return ae=function(){return e},e}function le(){var e=d()(["\n    ",";\n    padding: 0 15px;\n    text-align: center;\n    border-left: 0;\n    border-bottom: 2px solid ",";\n    min-width: 120px;\n  "]);return le=function(){return e},e}function ce(){var e=d()(["padding: 0 15px 2px;"]);return ce=function(){return e},e}function se(){var e=d()(["\n    display: flex;\n    margin-bottom: 30px;\n    width: 100%;\n    overflow-x: scroll;\n  "]);return se=function(){return e},e}function ue(){var e=d()(["display: block;"]);return ue=function(){return e},e}var de=g.i.colors,pe=g.i.fontSizes,fe=g.i.fonts,me=Object(m.c)(g.f).withConfig({displayName:"jobs__JobsContainer",componentId:"sc-13kygjg-0"})(["position:relative;max-width:700px;"]),ge=m.c.div.withConfig({displayName:"jobs__TabsContainer",componentId:"sc-13kygjg-1"})(["display:flex;align-items:flex-start;position:relative;",";"],g.g.thone(ue())),he=m.c.div.withConfig({displayName:"jobs__Tabs",componentId:"sc-13kygjg-2"})(["display:block;position:relative;width:max-content;z-index:3;",";"],g.g.thone(se())),be=m.c.button.withConfig({displayName:"jobs__Tab",componentId:"sc-13kygjg-3"})(["",";display:flex;align-items:center;width:100%;background-color:transparent;height:","px;padding:0 20px 2px;transition:",";border-left:2px solid ",";text-align:left;white-space:nowrap;font-family:",";font-size:",";color:",";",";",";&:hover,&:focus{background-color:",";}"],g.h.link,g.i.tabHeight,g.i.transition,de.darkGrey,fe.SFMono,pe.smallish,function(e){return e.isActive?de.green:de.lightGrey},g.g.tablet(ce()),g.g.thone(le(),g.h.flexCenter,de.darkGrey),de.lightNavy),xe=m.c.span.withConfig({displayName:"jobs__Highlighter",componentId:"sc-13kygjg-4"})(["display:block;background:",";width:2px;height:","px;border-radius:",";position:absolute;top:0;left:0;transition:",";transition-delay:0.1s;z-index:10;transform:translateY( ","px );",";"],de.green,g.i.tabHeight,g.i.borderRadius,g.i.transition,function(e){return e.activeTabId>0?e.activeTabId*g.i.tabHeight:0},g.g.thone(ae(),g.i.tabWidth,function(e){return e.activeTabId>0?e.activeTabId*g.i.tabWidth:0})),ve=m.c.div.withConfig({displayName:"jobs__ContentContainer",componentId:"sc-13kygjg-5"})(["position:relative;padding-top:14px;padding-left:30px;flex-grow:1;",";",";"],g.g.tablet(oe()),g.g.thone(ie())),ye=m.c.div.withConfig({displayName:"jobs__TabContent",componentId:"sc-13kygjg-6"})(["top:0;left:0;width:100%;height:auto;opacity:",";z-index:",";position:",";visibility:",";transition:",";transition-duration:",";ul{padding:0;margin:0;list-style:none;font-size:",";li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:'▹';position:absolute;left:0;color:",";line-height:",";}}}a{",";}"],function(e){return e.isActive?1:0},function(e){return e.isActive?2:-1},function(e){return e.isActive?"relative":"absolute"},function(e){return e.isActive?"visible":"hidden"},g.i.transition,function(e){return e.isActive?"0.5s":"0s"},pe.large,de.green,pe.xlarge,g.h.inlineLink),we=m.c.h4.withConfig({displayName:"jobs__JobTitle",componentId:"sc-13kygjg-7"})(["color:",";font-size:",";font-weight:500;margin-bottom:5px;"],de.lightestSlate,pe.xxlarge),_e=m.c.span.withConfig({displayName:"jobs__Company",componentId:"sc-13kygjg-8"})(["color:",";"],de.green),je=m.c.h5.withConfig({displayName:"jobs__JobDetails",componentId:"sc-13kygjg-9"})(["font-family:",";font-size:",";font-weight:normal;letter-spacing:0.5px;color:",";margin-bottom:30px;svg{width:15px;}"],fe.SFMono,pe.smallish,de.lightSlate),Ce=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={activeTabId:0},t.isActive=function(e){return t.state.activeTabId===e},t.setActiveTab=function(e){return t.setState({activeTabId:e})},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(H.a)().reveal(this.jobs,Object(f.srConfig)())},n.render=function(){var e=this,t=this.state.activeTabId,n=this.props.data;return i.a.createElement(me,{id:"jobs",ref:function(t){return e.jobs=t}},i.a.createElement(g.c,null,"Where I've Worked"),i.a.createElement(ge,null,i.a.createElement(he,{role:"tablist"},n&&n.map(function(t,n){var r=t.node.frontmatter.company;return i.a.createElement(be,{key:n,isActive:e.isActive(n),onClick:function(t){return e.setActiveTab(n,t)},role:"tab","aria-selected":e.isActive(n)?"true":"false","aria-controls":"tab"+n,id:"tab"+n,tabIndex:e.isActive(n)?"0":"-1"},i.a.createElement("span",null,r))}),i.a.createElement(xe,{activeTabId:t})),i.a.createElement(ve,null,n&&n.map(function(t,n){var r=t.node,o=r.frontmatter,a=r.html,l=o.title,c=o.url,s=o.company,u=o.range;return i.a.createElement(ye,{key:n,isActive:e.isActive(n),id:"job"+n,role:"tabpanel",tabIndex:"0","aria-labelledby":"job"+n,"aria-hidden":!e.isActive(n)},i.a.createElement(we,null,i.a.createElement("span",null,l),i.a.createElement(_e,null," @ ",i.a.createElement("a",{href:c,target:"_blank",rel:"nofollow noopener noreferrer"},s))),i.a.createElement(je,null,i.a.createElement("span",null,u)),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))}))))},t}(r.Component);Ce.propTypes={data:a.a.array.isRequired};var Ee=Ce,ke=(n(73),n(154));function Ie(){var e=d()(["\n        grid-column: 1 / -1;\n        opacity: 0.25;\n      "]);return Ie=function(){return e},e}function Ne(){var e=d()(["height: 100%;"]);return Ne=function(){return e},e}function ze(){var e=d()(["padding: 30px 25px 20px;"]);return ze=function(){return e},e}function Se(){var e=d()(["\n        grid-column: 1 / -1;\n        padding: 40px 40px 30px;\n      "]);return Se=function(){return e},e}function Te(){var e=d()(["margin-bottom: 70px;"]);return Te=function(){return e},e}function Me(){var e=d()(["\n    grid-column: 1 / -1;\n    opacity: 0.25;\n  "]);return Me=function(){return e},e}function Oe(){var e=d()(["height: 100%;"]);return Oe=function(){return e},e}function Le(){var e=d()(["\n    object-fit: cover;\n    width: auto;\n    height: 100%;\n    filter: grayscale(100%) contrast(1) brightness(80%);\n  "]);return Le=function(){return e},e}function Ae(){var e=d()(["\n      color: ",";\n      margin-right: 10px;\n    "]);return Ae=function(){return e},e}function Re(){var e=d()(["\n    background-color: transparent;\n    padding: 20px 0;\n  "]);return Re=function(){return e},e}function Fe(){var e=d()(["display: block;"]);return Fe=function(){return e},e}function Pe(){var e=d()(["font-size: 24px;"]);return Pe=function(){return e},e}function De(){var e=d()(["padding: 30px 25px 20px;"]);return De=function(){return e},e}function He(){var e=d()(["\n    grid-column: 1 / -1;\n    padding: 40px 40px 30px;\n  "]);return He=function(){return e},e}var Ge=g.i.colors,qe=g.i.fontSizes,Be=g.i.fonts,We=Object(m.c)(g.f).withConfig({displayName:"featured__FeaturedContainer",componentId:"sc-1wogb0y-0"})(["",";flex-direction:column;align-items:flex-start;"],g.h.flexCenter),Je=m.c.div.withConfig({displayName:"featured__FeaturedGrid",componentId:"sc-1wogb0y-1"})(["position:relative;"]),Ye=m.c.div.withConfig({displayName:"featured__ContentContainer",componentId:"sc-1wogb0y-2"})(["position:relative;z-index:2;grid-column:1 / 7;grid-row:1 / -1;",";",";"],g.g.thone(He()),g.g.phablet(De())),Ue=m.c.h4.withConfig({displayName:"featured__FeaturedLabel",componentId:"sc-1wogb0y-3"})(["font-size:",";font-weight:normal;color:",";font-family:",";margin-top:10px;padding-top:0;"],qe.smallish,Ge.green,Be.SFMono),Ve=m.c.h5.withConfig({displayName:"featured__ProjectName",componentId:"sc-1wogb0y-4"})(["font-size:28px;font-weight:600;margin:0 0 20px;color:",";",";a{",";}"],Ge.lightestSlate,g.g.tablet(Pe()),g.g.tablet(Fe())),Xe=m.c.div.withConfig({displayName:"featured__ProjectDescription",componentId:"sc-1wogb0y-5"})(["background-color:",";color:",";padding:25px;border-radius:",";font-size:",";",";p{margin:0;}a{",";color:",";}"],Ge.lightNavy,Ge.lightSlate,g.i.borderRadius,qe.large,g.g.thone(Re()),g.h.inlineLink,Ge.white),Ke=m.c.ul.withConfig({displayName:"featured__TechList",componentId:"sc-1wogb0y-6"})(["display:flex;flex-wrap:wrap;margin:25px 0 10px;li{font-family:",";font-size:",";color:",";margin-right:",";margin-bottom:7px;white-space:nowrap;&:last-of-type{margin-right:0;}",";}"],Be.SFMono,qe.smallish,Ge.lightSlate,g.i.margin,g.g.thone(Ae(),Ge.lightestSlate)),Qe=m.c.div.withConfig({displayName:"featured__Links",componentId:"sc-1wogb0y-7"})(["display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;a{padding:10px;svg{width:22px;height:22px;}}"]),Ze=Object(m.c)(D.a).withConfig({displayName:"featured__FeaturedImg",componentId:"sc-1wogb0y-8"})(["width:100%;max-width:100%;vertical-align:middle;border-radius:",";position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);",";"],g.i.borderRadius,g.g.tablet(Le())),$e=m.c.div.withConfig({displayName:"featured__ImgContainer",componentId:"sc-1wogb0y-9"})(["position:relative;z-index:1;border-radius:",";background-color:",";border-radius:2px;grid-column:6 / -1;grid-row:1 / -1;transition:",";",";",";&:hover,&:focus{background:transparent;&:before,","{background:transparent;filter:none;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:",";background-color:",";mix-blend-mode:screen;}"],g.i.borderRadius,Ge.green,g.i.transition,g.g.tablet(Oe()),g.g.thone(Me()),Ze,g.i.transition,Ge.navy),et=m.c.div.withConfig({displayName:"featured__Project",componentId:"sc-1wogb0y-10"})(["display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;margin-bottom:100px;",";&:last-of-type{margin-bottom:0;}&:nth-of-type(odd){","{grid-column:7 / -1;text-align:right;",";",";}","{justify-content:flex-end;li{margin-left:",";margin-right:0;}}","{justify-content:flex-end;margin-left:0;margin-right:-10px;}","{grid-column:1 / 8;",";",";}}"],g.g.thone(Te()),Ye,g.g.thone(Se()),g.g.phablet(ze()),Ke,g.i.margin,Qe,$e,g.g.tablet(Ne()),g.g.thone(Ie())),tt=function(e){function t(t){var n;return(n=e.call(this,t)||this).revealRefs=[],n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(H.a)().reveal(this.featured,Object(f.srConfig)()),this.revealRefs.forEach(function(e){return Object(H.a)().reveal(e,Object(f.srConfig)())})},n.render=function(){var e=this,t=this.props.data.filter(function(e){return"true"===e.node.frontmatter.show});return i.a.createElement(We,{id:"projects"},i.a.createElement(g.c,{ref:function(t){return e.featured=t}},"Some Things I've Made"),i.a.createElement(Je,null,t&&t.map(function(t,n){var r=t.node,o=r.frontmatter,a=r.html,l=o.external,c=o.title,s=o.tech,u=o.github,d=o.cover;return i.a.createElement(et,{key:n,ref:function(t){return e.revealRefs[n]=t}},i.a.createElement(Ye,null,i.a.createElement(Ue,null,"Featured Project"),i.a.createElement(Ve,null,l?i.a.createElement("a",{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},c):c),i.a.createElement(Xe,{dangerouslySetInnerHTML:{__html:a}}),s&&i.a.createElement(Ke,null,s.map(function(e,t){return i.a.createElement("li",{key:t},e)})),i.a.createElement(Qe,null,u&&i.a.createElement("a",{href:u,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},i.a.createElement(ke.d,null)),l&&i.a.createElement("a",{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},i.a.createElement(ke.b,null)))),i.a.createElement($e,null,i.a.createElement(Ze,{fluid:d.childImageSharp.fluid})))})))},t}(r.Component);tt.propTypes={data:a.a.array.isRequired};var nt=tt;function rt(){var e=d()(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));"]);return rt=function(){return e},e}function it(){var e=d()(["font-size: 24px;"]);return it=function(){return e},e}var ot=g.i.colors,at=g.i.fontSizes,lt=g.i.fonts,ct=Object(m.c)(g.f).withConfig({displayName:"projects__ProjectsContainer",componentId:"sc-12h64lj-0"})(["",";flex-direction:column;align-items:flex-start;"],g.h.flexCenter),st=m.c.h4.withConfig({displayName:"projects__ProjectsTitle",componentId:"sc-12h64lj-1"})(["margin:0 auto 50px;font-size:",";",";a{display:block;}"],at.h3,g.g.tablet(it())),ut=m.c.div.withConfig({displayName:"projects__ProjectsGrid",componentId:"sc-12h64lj-2"})([".projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;",";}"],g.g.desktop(rt())),dt=m.c.div.withConfig({displayName:"projects__ProjectInner",componentId:"sc-12h64lj-3"})(["",";flex-direction:column;align-items:flex-start;position:relative;padding:25px;height:100%;border-radius:",";transition:",";background-color:",";"],g.h.flexBetween,g.i.borderRadius,g.i.transition,ot.lightNavy),pt=m.c.div.withConfig({displayName:"projects__Project",componentId:"sc-12h64lj-4"})(["transition:",";&:hover,&:focus{outline:0;","{transform:translateY(-5px);box-shadow:0 2px 4px ",";box-shadow:0 19px 38px "," 0 15px 12px ",";}}"],g.i.transition,dt,ot.shadowNavy,ot.darkestNavy,ot.shadowNavy),ft=m.c.div.withConfig({displayName:"projects__ProjectHeader",componentId:"sc-12h64lj-5"})(["",";align-items:flex-end;margin-bottom:30px;"],g.h.flexBetween),mt=m.c.div.withConfig({displayName:"projects__Folder",componentId:"sc-12h64lj-6"})(["color:",";svg{width:40px;height:40px;}"],ot.green),gt=m.c.div.withConfig({displayName:"projects__Links",componentId:"sc-12h64lj-7"})(["margin-right:-10px;color:",";"],ot.lightSlate),ht=m.c.a.withConfig({displayName:"projects__IconLink",componentId:"sc-12h64lj-8"})(["padding:10px;svg{width:20px;height:20px;}"]),bt=m.c.h5.withConfig({displayName:"projects__ProjectName",componentId:"sc-12h64lj-9"})(["margin:0 0 10px;font-size:",";color:",";"],at.xxlarge,ot.lightestSlate),xt=m.c.div.withConfig({displayName:"projects__ProjectDescription",componentId:"sc-12h64lj-10"})(["font-size:17px;a{",";}"],g.h.inlineLink),vt=m.c.ul.withConfig({displayName:"projects__TechList",componentId:"sc-12h64lj-11"})(["flex-grow:1;display:flex;align-items:flex-end;flex-wrap:wrap;margin-top:20px;li{font-family:",";font-size:",";color:",";line-height:1.75;margin-right:15px;&:last-of-type{margin-right:0;}}"],lt.SFMono,at.xsmall,ot.lightSlate),yt=Object(m.c)(g.a).withConfig({displayName:"projects__ShowMoreButton",componentId:"sc-12h64lj-12"})(["margin:100px auto 0;"]),wt=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showMore:!1},n.showMoreToggle=function(){return n.setState({showMore:!n.state.showMore})},n.revealRefs=[],n.restRefs=[],n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(H.a)().reveal(this.projects,Object(f.srConfig)()),this.revealRefs.forEach(function(e,t){return Object(H.a)().reveal(e,Object(f.srConfig)(100*t))})},n.render=function(){var e=this,t=this.state.showMore,n=this.props.data.filter(function(e){return"true"===e.node.frontmatter.show}),r=n.slice(0,6),o=t?n:r;return i.a.createElement(ct,null,i.a.createElement(st,{ref:function(t){return e.projects=t}},"Other Projects"),i.a.createElement(ut,null,i.a.createElement(p.TransitionGroup,{className:"projects"},o&&o.map(function(t,n){var r=t.node,o=r.frontmatter,a=r.html,l=o.github,c=o.external,s=o.title,u=o.tech;return i.a.createElement(p.CSSTransition,{key:n,classNames:"fadeup",timeout:n>=6?300*(n-6):300,exit:!1},i.a.createElement(pt,{key:n,ref:function(t){return e.revealRefs[n]=t},tabIndex:"0",style:{transitionDelay:(n>=6?100*(n-6):0)+"ms"}},i.a.createElement(dt,null,i.a.createElement("div",null,i.a.createElement(ft,null,i.a.createElement(mt,null,i.a.createElement(ke.c,null)),i.a.createElement(gt,null,l&&i.a.createElement(ht,{href:l,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Github Link"},i.a.createElement(ke.d,null)),c&&i.a.createElement(ht,{href:c,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},i.a.createElement(ke.b,null)))),i.a.createElement(bt,null,c?i.a.createElement("a",{href:c,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Visit Website"},s):s),i.a.createElement(xt,{dangerouslySetInnerHTML:{__html:a}})),i.a.createElement("div",null,i.a.createElement(vt,null,u.map(function(e,t){return i.a.createElement("li",{key:t},e)}))))))}))),i.a.createElement(yt,{onClick:this.showMoreToggle},t?"Fewer":"More"," Projects"))},t}(r.Component);wt.propTypes={data:a.a.array.isRequired};var _t=wt;function jt(){var e=d()(["font-size: 40px;"]);return jt=function(){return e},e}function Ct(){var e=d()(["font-size: 50px;"]);return Ct=function(){return e},e}function Et(){var e=d()(["font-size: ",";"]);return Et=function(){return e},e}function kt(){var e=d()(["font-size: ",";"]);return kt=function(){return e},e}var It=g.i.colors,Nt=g.i.fontSizes,zt=g.i.fonts,St=Object(m.c)(g.f).withConfig({displayName:"contact__ContactContainer",componentId:"sc-6cd4xi-0"})(["text-align:center;max-width:600px;margin:0 auto 100px;a{",";}"],g.h.inlineLink),Tt=Object(m.c)(g.c).withConfig({displayName:"contact__GreenHeading",componentId:"sc-6cd4xi-1"})(["display:block;color:",";font-size:",";font-family:",";font-weight:normal;margin-bottom:20px;justify-content:center;",";&:before{bottom:0;font-size:",";",";}&:after{display:none;}"],It.green,Nt.medium,zt.SFMono,g.g.desktop(kt(),Nt.small),Nt.small,g.g.desktop(Et(),Nt.smallish)),Mt=m.c.h4.withConfig({displayName:"contact__Title",componentId:"sc-6cd4xi-2"})(["margin:0 0 20px;font-size:60px;",";",";"],g.g.desktop(Ct()),g.g.tablet(jt())),Ot=m.c.a.withConfig({displayName:"contact__EmailLink",componentId:"sc-6cd4xi-3"})(["",";margin-top:50px;"],g.h.bigButton),Lt=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(H.a)().reveal(this.contact,Object(f.srConfig)())},n.render=function(){var e=this,t=this.props.data[0].node,n=t.frontmatter,r=t.html,o=n.title;return i.a.createElement(St,{id:"contact",ref:function(t){return e.contact=t}},i.a.createElement(Tt,null,"What's Next?"),i.a.createElement(Mt,null,o),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),i.a.createElement(Ot,{href:"mailto:"+f.email,target:"_blank",rel:"nofollow noopener noreferrer"},"Say Hello"))},t}(r.Component);Lt.propTypes={data:a.a.array.isRequired};var At=Lt;n.d(t,"query",function(){return Pt});var Rt=Object(m.c)(g.d).withConfig({displayName:"pages__MainContainer",componentId:"sc-1tzx2o8-0"})(["",";counter-reset:section;"],g.h.sidePadding),Ft=function(e){var t=e.data,n=e.location;return i.a.createElement(l.a,{location:n},i.a.createElement(Rt,{id:"content"},i.a.createElement(F,{data:t.hero.edges}),i.a.createElement(re,{data:t.about.edges}),i.a.createElement(Ee,{data:t.jobs.edges}),i.a.createElement(nt,{data:t.featured.edges}),i.a.createElement(_t,{data:t.projects.edges}),i.a.createElement(At,{data:t.contact.edges})))};Ft.propTypes={data:a.a.object.isRequired,location:a.a.object};t.default=Ft;var Pt="3859291100"}}]);
//# sourceMappingURL=component---src-pages-index-js-0e8e91e64fb77b47217e.js.map