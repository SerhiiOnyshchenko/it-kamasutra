(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{322:function(t,e,s){t.exports={img01:"ProfileInfo_img01__2AH3l",img:"ProfileInfo_img__3Zl5B",avatar:"ProfileInfo_avatar__18eAo",av:"ProfileInfo_av__3x389",de:"ProfileInfo_de__2t3KP",name:"ProfileInfo_name__dhkJi",info:"ProfileInfo_info__182sC",about:"ProfileInfo_about__URyQ1"}},323:function(t,e,s){t.exports={content:"Profile_content__37N_3"}},324:function(t,e,s){t.exports={postes:"MyPosts_postes__12TLp",post:"MyPosts_post__1Kw5I"}},325:function(t,e,s){t.exports={item:"Post_item__2bMO2",img:"Post_img__11KgQ"}},329:function(t,e,s){"use strict";s.r(e);var a=s(6),c=s(27),i=s(28),n=s(31),o=s(30),r=s(1),u=s(0),j=s.n(u),l=s(15),d=s(29),b=s(322),p=s.n(b),h=s(135),f=s(139),O=function(t){var e=Object(u.useState)(!1),s=Object(f.a)(e,2),a=s[0],c=s[1],i=Object(u.useState)(t.status),n=Object(f.a)(i,2),o=n[0],j=n[1];Object(u.useEffect)((function(){j(t.status)}),[t.status]);return Object(r.jsxs)("div",{children:[!a&&Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Status: "}),Object(r.jsx)("span",{className:p.a.status,onDoubleClick:function(){c(!0)},children:t.status||"-----"})]}),a&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},onBlur:function(){c(!1),t.updateStatus(o)},autoFocus:!0,value:o})})]})},m=function(t){var e=t.profile,s=t.status,a=t.updateStatus;return e?Object(r.jsx)("div",{className:p.a.content,children:Object(r.jsxs)("div",{className:p.a.img,children:[Object(r.jsx)("img",{alt:"icon",className:p.a.img01,src:"https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"}),Object(r.jsxs)("div",{className:p.a.avatar,children:[Object(r.jsx)("div",{className:p.a.av,children:Object(r.jsx)("img",{src:null!=e.photos.large?e.photos.large:h.a,alt:"Avatar"})}),Object(r.jsxs)("div",{className:p.a.de,children:[Object(r.jsxs)("span",{className:p.a.name,children:[" ",e.fullName," "]}),Object(r.jsxs)("div",{className:p.a.info,children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:["Facebook: ",e.contacts.facebook]}),Object(r.jsxs)("div",{children:["Website: ",e.contacts.website]}),Object(r.jsxs)("div",{children:["VK: ",e.contacts.vk]}),Object(r.jsxs)("div",{children:["Twitter: ",e.contacts.twitter]}),Object(r.jsxs)("div",{children:["Instagram: ",e.contacts.instagram]}),Object(r.jsxs)("div",{children:["Youtube: ",e.contacts.youtube]}),Object(r.jsxs)("div",{children:["Github: ",e.contacts.github]}),Object(r.jsxs)("div",{children:["MainLink: ",e.contacts.mainLink]})]}),Object(r.jsxs)("div",{className:p.a.about,children:[Object(r.jsx)(O,{status:s,updateStatus:a}),Object(r.jsx)("b",{children:"About me:"})," ",Object(r.jsx)("br",{})," ",e.aboutMe]})]})]})]})]})}):Object(r.jsx)(d.a,{})},x=s(323),v=s.n(x),g=s(103),_=s(137),P=s(138),N=s(324),S=s.n(N),I=s(325),k=s.n(I),w=function(t){return Object(r.jsxs)("div",{className:k.a.item,children:[Object(r.jsx)("img",{alt:"icon",className:k.a.img,src:"https://filmix.co/uploads/frames/6241/f222903-avatar-2009_original.jpg"}),t.message,Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"like "}),t.count]})]})},y=Object(P.a)({form:"post"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(_.a,{name:"post",type:"text",placeholder:"Add text",component:"textarea"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add post"})})]})})),A=function(t){var e=t.PostData.map((function(t){return Object(r.jsx)(w,{message:t.message,count:t.count},t.id)}));return Object(r.jsxs)("div",{className:S.a.postes,children:[Object(r.jsx)("h3",{children:"my post"}),Object(r.jsx)(y,{onSubmit:function(e){t.addPost(e.post)}}),Object(r.jsx)("div",{className:S.a.post,children:e})]})},F=Object(l.b)((function(t){return{PostData:t.profilePage.PostData,newPostText:t.profilePage.newPostText}}),{addPost:g.a})(A),M=s(13),D=function(t){return t.isAuth?Object(r.jsxs)("div",{className:v.a.content,children:[Object(r.jsx)(m,{profile:t.profile,isAuth:t.isAuth,status:t.status,updateStatus:t.updateStatus}),Object(r.jsx)(F,{})]}):Object(r.jsx)(M.a,{to:"/login"})},T=s(9),C=function(t){Object(n.a)(s,t);var e=Object(o.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(d.a,{}):null,Object(r.jsx)(D,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))]})}}]),s}(j.a.Component);e.default=Object(T.d)(Object(l.b)((function(t){return{isAuth:t.auth.isAuth,profile:t.profilePage.profile,isFetching:t.usersPage.isFetching,status:t.profilePage.status,authorizedUserId:t.auth.userId}}),{getProfile:g.c,getStatus:g.d,updateStatus:g.e}),M.f)(C)}}]);
//# sourceMappingURL=3.b5fafc67.chunk.js.map