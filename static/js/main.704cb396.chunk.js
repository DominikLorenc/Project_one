(this["webpackJsonpproject-one"]=this["webpackJsonpproject-one"]||[]).push([[0],[,,,function(e,t,i){e.exports={Card:"Card_Card__3qPTI",Container_img:"Card_Container_img__-YV6E",Img:"Card_Img__319CU",Description:"Card_Description__1kSfF",Link:"Card_Link__2Q0IS",Highlighted_card:"Card_Highlighted_card__2gRgK",BlogCard:"Card_BlogCard__3uWpG",Title:"Card_Title__3CytX",CardFooter:"Card_CardFooter__32UVV",Likes:"Card_Likes__1LG_L",ViewMore:"Card_ViewMore__238gT",ViewArrow:"Card_ViewArrow__20LBQ",ViewLink:"Card_ViewLink__1t6K9",IsVisible:"Card_IsVisible__2j0iZ"}},,,function(e,t,i){e.exports={Image:"Gallery_Image__2PZBU","alice-carousel__dots":"Gallery_alice-carousel__dots__2V-lW","alice-carousel__dots-item":"Gallery_alice-carousel__dots-item__jfvtE",__active:"Gallery___active__1US8T"}},,,,function(e,t,i){e.exports={Item:"NaviagtionItem_Item__3lT_5",Link:"NaviagtionItem_Link__3Z3Ya",Button:"NaviagtionItem_Button__2vFPa",Active:"NaviagtionItem_Active__3PGKa"}},function(e,t,i){e.exports={ReviewCard:"ReviewCard_ReviewCard__1d6cI",ImgContainer:"ReviewCard_ImgContainer__30FUR",Img:"ReviewCard_Img__21ojS",Profession:"ReviewCard_Profession__1Mr6x",Description:"ReviewCard_Description__2fMFx"}},function(e,t,i){e.exports={ContactSection:"ContactSection_ContactSection__2gZlt",FormSection:"ContactSection_FormSection__2UEW7",TitleContainer:"ContactSection_TitleContainer__jeLwH",Form:"ContactSection_Form__2r77h",ImgContainer:"ContactSection_ImgContainer__36Ah9",SubmitBtn:"ContactSection_SubmitBtn__2x_Ms"}},function(e,t,i){e.exports={FooterCard:"FooterAddressCard_FooterCard__3AW3Y",Title:"FooterAddressCard_Title__3nHYR",ListItems:"FooterAddressCard_ListItems__VOBIq",ListItem:"FooterAddressCard_ListItem__2lABN"}},,function(e,t,i){e.exports={StoreBar:"StoreBar_StoreBar__dQysv",Link:"StoreBar_Link__mzJA8",Image:"StoreBar_Image__z4H2Z"}},function(e,t,i){e.exports={Feature:"Feature_Feature__1DXLx",ImgFeature:"Feature_ImgFeature__m73NG",FeatureContent:"Feature_FeatureContent__2uT1O",Title:"Feature_Title__1v1vJ",Description:"Feature_Description__2dEVT"}},,function(e,t,i){e.exports={HeaderSection:"HomePage_HeaderSection__2Fzo9",BgHeaderContainer:"HomePage_BgHeaderContainer__2EC68",BgHeaderImg:"HomePage_BgHeaderImg__1uVOq",HeaderSocialSection:"HomePage_HeaderSocialSection__3At8J"}},function(e,t,i){e.exports={SocialBar:"SocialBar_SocialBar__1poi0",Link:"SocialBar_Link__1H_1G",FooterColor:"SocialBar_FooterColor__2dY0F"}},function(e,t,i){e.exports={Features:"Features_Features__PkE-e",ImgContainer:"Features_ImgContainer__q_v-k",Content:"Features_Content__5ZQCS",FeaturesContainer:"Features_FeaturesContainer__1_xHF"}},function(e,t,i){e.exports={Subtitle:"TitleSection_Subtitle__QD3kD",Title:"TitleSection_Title__3qI20",Description:"TitleSection_Description__2UJQO"}},,,,,,,,function(e,t,i){e.exports={Items:"NavigationItems_Items__1QgRt",Active:"NavigationItems_Active__3iM8E"}},function(e,t,i){e.exports={Header:"Navigation_Header__3Bk7l",Active:"Navigation_Active__2fdz6"}},function(e,t,i){e.exports={TitleSection:"Title_TitleSection__1CP_7",Title:"Title_Title__2Qbgj",Subtitle:"Title_Subtitle__16egd"}},function(e,t,i){e.exports={Blog:"Blog_Blog__1e19A",BlogNavigation:"Blog_BlogNavigation__2FtN5",BlogCardsContainer:"Blog_BlogCardsContainer__QkvVL",active:"Blog_active__tMGWD"}},function(e,t,i){e.exports={PerfectionSection:"PerfectionSection_PerfectionSection__pnRiQ",PerfectionContent:"PerfectionSection_PerfectionContent__1l22Y",ImgContainer:"PerfectionSection_ImgContainer__2XM86"}},function(e,t,i){e.exports={Input:"Input_Input__2FBxF",Textarea:"Input_Textarea__3E5ON"}},,,,,,,function(e,t,i){e.exports={Logo:"Logo_Logo__802pz",Img:"Logo_Img__1xgFT"}},function(e,t,i){e.exports={ImgAnimation:"ImageAnimation_ImgAnimation__1Xzpl",move:"ImageAnimation_move__1cueA",Image:"ImageAnimation_Image__1wsf9"}},function(e,t,i){e.exports={Partners:"Partners_Partners__3v-ek",Carousel:"Partners_Carousel__Qswmy"}},function(e,t,i){e.exports={Footer:"Footer_Footer__3As7x",FooterContainer:"Footer_FooterContainer__31jwj"}},,,,,,function(e,t,i){e.exports={Hamburger:"Hamburger_Hamburger__1Ayng"}},function(e,t,i){e.exports={Highlights:"Highlights_Highlights__2G6qg"}},,function(e,t,i){e.exports={ReviewSection:"ReviewSection_ReviewSection__Zr3it"}},,,,,,,function(e,t,i){},function(e,t,i){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(1),s=i(2),n=i.n(s),c=i(26),r=i.n(c),o=(i(60),i(61),i(8)),l=i(10),d=i.n(l),m=i(4),u=function(e){var t=e.btn,i=e.children,s=e.click,n=e.id,c=e.selectedID,r=e.scrollTo,o=[d.a.Button];return n===c&&(o=[d.a.Button,d.a.Active]),Object(a.jsx)("li",{className:d.a.Item,children:t?Object(a.jsx)("button",{className:o.join(" "),onClick:s,children:i}):Object(a.jsx)(m.Link,{to:r,spy:!0,smooth:!0,duration:500,offset:-70,className:d.a.Link,activeClass:d.a.Active,children:i})})},j=i(29),g=i.n(j),b=function(e){var t=[g.a.Items];e.show&&(t=[g.a.Items,g.a.Active]);var i=["home","feature","partners","blog","reviews","contact"].map((function(e){return Object(a.jsx)(u,{scrollTo:e,children:e},e)}));return Object(a.jsx)("ul",{className:t.join(" "),children:i})},h=i(30),p=i.n(h),x=i(41),A=i.n(x),O=function(e){return Object(a.jsx)("div",{className:A.a.Logo,children:Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("img",{className:A.a.Img,src:"data:image/png;base64,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",alt:"logo"})})})},v=i(5),f=i(0),_=i(50),C=i.n(_),N=function(e){return Object(a.jsx)(f.b.Provider,{value:{className:C.a.Hamburger,size:"3rem",color:e.changeColor?"white":"#5D5D5D"},children:Object(a.jsx)("div",{children:Object(a.jsx)(v.a,{onClick:e.clicked})})})},I=function(e){var t=Object(s.useState)(!1),i=Object(o.a)(t,2),n=i[0],c=i[1],r=Object(s.useState)(null),l=Object(o.a)(r,2),d=l[0],m=l[1];Object(s.useEffect)((function(){window.onscroll=function(){m(window.pageYOffset>0)}}),[]);var u=[p.a.Header];return d&&(u=[p.a.Header,p.a.Active]),Object(a.jsxs)("nav",{className:u.join(" "),children:[Object(a.jsx)(O,{}),Object(a.jsx)(N,{changeColor:d,clicked:function(){c(!n)}}),Object(a.jsx)(b,{show:n})]})},w=i(51),S=i.n(w),T=i(3),y=i.n(T),B=i(52),F=function(e){var t=e.blogCard,i=e.isVisible,s=e.views,n=e.like,c=e.highlighted,r=e.image,o=e.title,l=e.description,d=[y.a.Card],m=Object(a.jsx)("a",{className:y.a.Link,href:"/",children:"View more"});return c&&(d=[y.a.Card,y.a.Highlighted_card]),t&&(d=[y.a.BlogCard],i||(d=[y.a.BlogCard,y.a.IsVisible]),m=Object(a.jsxs)("div",{className:y.a.CardFooter,children:[Object(a.jsx)(f.b.Provider,{value:{className:y.a.ViewArrow,size:"2.5rem"},children:Object(a.jsx)("div",{className:y.a.ViewMore,children:Object(a.jsxs)("a",{href:"/",className:y.a.ViewLink,children:["View More ",Object(a.jsx)(v.f,{})]})})}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:y.a.Likes,children:[Object(a.jsxs)("p",{children:[Object(a.jsx)(B.a,{})," ",s]}),Object(a.jsxs)("p",{children:[Object(a.jsx)(v.c,{})," ",n]})]})})]})),Object(a.jsxs)("div",{className:d.join(" "),children:[Object(a.jsx)("div",{className:y.a.Container_img,children:Object(a.jsx)("img",{className:y.a.Img,src:r,alt:"people"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:y.a.Title,children:o}),Object(a.jsx)("p",{className:y.a.Description,children:l}),m]})]})},L=[{image:i.p+"static/media/mobile-app-img.f514bcb0.svg",title:"Mobile application",description:"This is a great section to introduce some of your companies highlighted services.",highlighted:!1},{image:i.p+"static/media/social-integration-img.56148c1f.svg",title:"Social integration",description:"Why not highlight the most popular of your top services with a much more vibrant gradient colour like this to help grap visitors' attention.",highlighted:!0},{image:i.p+"static/media/ecommerce-addons-img.1a8fd341.svg",title:"Ecommerce addons",description:"This is a great section to introduce some of your companies highlighted services.",highlighted:!1}],k=function(e){var t=L.map((function(e){return Object(a.jsx)(F,{highlighted:e.highlighted,image:e.image,title:e.title,description:e.description},e.title)}));return Object(a.jsx)("section",{className:S.a.Highlights,children:t})},V=i(42),P=i.n(V),Y=function(e){return Object(a.jsx)("div",{className:P.a.ImgAnimation,children:Object(a.jsx)("img",{className:P.a.Image,src:e.source,alt:"phone"})})},G=i(18),K=i.n(G),R=i.p+"static/media/header-img.0bae5388.svg",H=i(31),Q=i.n(H),E=function(e){return Object(a.jsxs)("div",{className:Q.a.TitleSection,children:[Object(a.jsx)("h1",{className:Q.a.Title,children:e.title}),Object(a.jsx)("p",{className:Q.a.Subtitle,children:e.description})]})},D=i(15),W=i.n(D),X=i.p+"static/media/apple_icon.507e802d.png",q=i.p+"static/media/gplay_icon.220a84a3.png",z=function(e){return Object(a.jsxs)("div",{className:W.a.StoreBar,children:[Object(a.jsx)("a",{className:W.a.Link,href:"/",children:Object(a.jsx)("img",{className:W.a.Image,src:X,alt:"logo Apple"})}),Object(a.jsx)("a",{className:W.a.Link,href:"/",children:Object(a.jsx)("img",{className:W.a.Image,src:q,alt:"logo Google Play"})})]})},Z=i(19),M=i.n(Z),J=function(e){var t=e.isGray,i=[M.a.Link];return t&&(i=[M.a.Link,M.a.FooterColor].join(" ")),Object(a.jsxs)("div",{className:M.a.SocialBar,children:[Object(a.jsx)("a",{className:i,href:"/",children:Object(a.jsx)(v.b,{})}),Object(a.jsx)("a",{className:i,href:"/",children:Object(a.jsx)(v.d,{})}),Object(a.jsx)("a",{className:i,href:"/",children:Object(a.jsx)(v.e,{})}),Object(a.jsx)("a",{className:i,href:"/",children:Object(a.jsx)(v.g,{})})]})},U=i(20),$=i.n(U),ee=i(16),te=i.n(ee),ie=function(e){return Object(a.jsxs)("div",{className:te.a.Feature,children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:te.a.ImgFeature,src:e.img,alt:e.alt})}),Object(a.jsxs)("div",{className:te.a.FeatureContent,children:[Object(a.jsx)("h3",{className:te.a.Title,children:e.title}),Object(a.jsx)("p",{className:te.a.Description,children:e.description})]})]})},ae=i.p+"static/media/features.641acb08.png",se=i.p+"static/media/financial-guard-img.bbd50f84.svg",ne=i.p+"static/media/fulfillment-service-img.01b91a81.svg",ce=i.p+"static/media/launch-pad-img.9155182f.svg",re=i.p+"static/media/support-247-img.34e442a9.svg",oe=i.p+"static/media/happy-customers-img.b649e5f3.svg",le=i.p+"static/media/social-compatibility-img.5d83df37.svg",de=i(21),me=i.n(de),ue=function(e){return Object(a.jsxs)("div",{className:me.a.TitleSection,children:[Object(a.jsx)("p",{className:me.a.Subtitle,children:e.subtitle}),Object(a.jsx)("h2",{className:me.a.Title,children:e.title}),Object(a.jsx)("p",{className:me.a.Description,children:e.description})]})},je=[{img:se,title:"Finance Assist",description:"Helping project your account details safely and securely. "},{img:ne,title:"Fulfilment Service",description:"We sort out the business logistics so you don't have to."},{img:ce,title:"Launch Pad",description:"Get ready for take off in a short matter of seconds."},{img:re,title:"Support 24/7",description:"Your business never stops working so neither do we."},{img:oe,title:"Happy Customers",description:"We pride ourselves in excellent client service."},{img:le,title:"Social Integration",description:"Connect with a whole host of social media platforms."}],ge=function(e){var t=je.map((function(e){return Object(a.jsx)(ie,{img:e.img,title:e.title,description:e.description,alt:e.title},e.title)}));return Object(a.jsx)(m.Element,{name:"feature",children:Object(a.jsxs)("section",{className:$.a.Features,children:[Object(a.jsx)("div",{className:$.a.ImgContainer,children:Object(a.jsx)(Y,{source:ae})}),Object(a.jsxs)("div",{className:$.a.Content,children:[Object(a.jsx)(ue,{subtitle:"About our application",title:"Some of our features",description:"Don't be afraid to brag about some of your unique selling points\n            here. Your visitors would love to find out more about your service\n            features."}),Object(a.jsx)("div",{className:$.a.FeaturesContainer,children:t})]})]})})},be=i(28),he=i.n(be),pe=(i(49),i.p+"static/media/dummy_logo1.00978364.png"),xe=i.p+"static/media/dummy_logo2.f1d697cf.png",Ae=i.p+"static/media/dummy_logo3.5eded5ae.png",Oe=i(6),ve=i.n(Oe),fe=function(){var e=function(e){return e.preventDefault()};return Object(a.jsxs)(he.a,{disableButtonsControls:!0,mouseTracking:!0,responsive:{0:{items:1},760:{items:3},1024:{items:4}},infinite:!0,children:[Object(a.jsx)("img",{src:pe,onDragStart:e,className:ve.a.Image,alt:"logo"}),Object(a.jsx)("img",{src:xe,onDragStart:e,className:ve.a.Image,alt:"logo"}),Object(a.jsx)("img",{src:Ae,onDragStart:e,className:ve.a.Image,alt:"logo"}),Object(a.jsx)("img",{src:Ae,onDragStart:e,className:ve.a.Image,alt:"logo"}),Object(a.jsx)("img",{src:pe,onDragStart:e,className:ve.a.Image,alt:"logo"}),Object(a.jsx)("img",{src:xe,onDragStart:e,className:ve.a.Image,alt:"logo"}),Object(a.jsx)("img",{src:Ae,onDragStart:e,className:ve.a.Image,alt:"logo"}),Object(a.jsx)("img",{src:pe,onDragStart:e,className:ve.a.Image,alt:"logo"}),Object(a.jsx)("img",{src:xe,onDragStart:e,className:ve.a.Image,alt:"logo"})]})},_e=i(43),Ce=i.n(_e),Ne=function(e){return Object(a.jsx)(m.Element,{name:"partners",children:Object(a.jsxs)("section",{className:Ce.a.Partners,children:[Object(a.jsx)(ue,{subtitle:"We work with the best",title:"Our Partners",description:"We work with some of the greatest companies in the industry to help deliver our services around the world"}),Object(a.jsx)("div",{className:Ce.a.Carousel,children:Object(a.jsx)(fe,{})})]})})},Ie=i(22),we=i(32),Se=i.n(we),Te=i.p+"static/media/blog1.6aade7ef.png",ye=i.p+"static/media/blog2.0bf174b4.png",Be=i.p+"static/media/blog3.257ca5b9.png",Fe=["all","creative","fintech","modern","marketing"],Le=function(e){var t=Object(s.useState)([{id:0,image:Te,name:"creative, fintech",description:"Showcase some of your recent news stories and link to your medium.com or external blog.",views:1750,like:520,visible:!0},{id:1,image:ye,name:"modern, fintech",description:"This is also a great place to feature some of your company's recent news in the press and online.",views:1950,like:540,visible:!0},{id:2,image:Be,name:"creative, marketing",description:"Click on the category links above and you'll see your blog posts get filtered right before your eyes.",views:1820,like:580,visible:!0}]),i=Object(o.a)(t,2),n=i[0],c=(i[1],Object(s.useState)(0)),r=Object(o.a)(c,2),l=r[0],d=r[1],j=Object(s.useState)([]),g=Object(o.a)(j,2),b=g[0],h=g[1];Object(s.useEffect)((function(){h(n)}),[n]);var p=Fe.map((function(e,t){return Object(a.jsx)(u,{id:t,selectedID:l,btn:!0,click:function(){return function(e,t){d(t);var i=[];n.map((function(t,a){var s=t.name;"all"===e?h(n):(s.includes(e)?i.push(Object(Ie.a)(Object(Ie.a)({},n[a]),{},{visible:!0})):i.push(Object(Ie.a)(Object(Ie.a)({},n[a]),{},{visible:!1})),h(i))}))}(e,t)},children:e},e)})),x=b.map((function(e,t){var i=e.image,s=e.name,n=e.description,c=e.views,r=e.like,o=e.visible;return Object(a.jsx)(F,{id:t,isVisible:o,image:i,title:s,description:n,blogCard:!0,views:c,like:r},s)}));return Object(a.jsx)(m.Element,{name:"blog",children:Object(a.jsxs)("section",{className:Se.a.Blog,children:[Object(a.jsx)(ue,{subtitle:"Featured stories",title:"Our blog"}),Object(a.jsx)("ul",{className:Se.a.BlogNavigation,children:p}),Object(a.jsx)("div",{className:Se.a.BlogCardsContainer,children:x})]})})},ke=i(33),Ve=i.n(ke),Pe=i.p+"static/media/perfection-header-img.ac3ce831.png",Ye=function(e){return Object(a.jsx)("section",{className:Ve.a.PerfectionSection,children:Object(a.jsxs)("div",{className:Ve.a.PerfectionContent,children:[Object(a.jsx)(ue,{title:"Made to pixel perfection",description:"Show your clients something eye catching here to grab their attention and make them want to signup to your great service today"}),Object(a.jsx)("div",{className:Ve.a.ImgContainer,children:Object(a.jsx)(Y,{source:Pe})})]})})},Ge=(i(104),i(11)),Ke=i.n(Ge),Re=function(e){var t=e.src,i=e.name,s=e.proffesion,n=e.description;return Object(a.jsxs)("div",{className:Ke.a.ReviewCard,children:[Object(a.jsx)("div",{className:Ke.a.ImgContainer,children:Object(a.jsx)("img",{className:Ke.a.Img,src:t,alt:"clinet"})}),Object(a.jsx)("h1",{className:Ke.a.Name,children:i}),Object(a.jsx)("p",{className:Ke.a.Profession,children:s}),Object(a.jsx)("div",{className:Ke.a.Description,children:Object(a.jsx)("p",{children:n})})]})},He=function(e){var t=e.clients.map((function(e){var t=e.id,i=e.src,s=e.name,n=e.proffesion,c=e.description;return Object(a.jsx)(Re,{src:i,name:s,proffesion:n,description:c},t)}));return Object(a.jsx)(he.a,{disableButtonsControls:!0,mouseTracking:!0,children:t})},Qe=i(53),Ee=i.n(Qe),De=[{id:0,src:i.p+"static/media/user.6a3a53a2.svg",name:"John McDonaldson",proffesion:"Software Engineer",description:"Well what can I say. Techue is the template for you and you should definitely purchase yours now. There's absolutely nothing stopping you, it's absolutely fantastic!"},{id:1,src:i.p+"static/media/user2.837a73f0.svg",name:"Margaret Fletcher",proffesion:"Sales Executive",description:"Well what can I say. Techue is the template for you and you should definitely purchase yours now. There's absolutely nothing stopping you, it's absolutely fantastic!"},{id:2,src:i.p+"static/media/user3.a01ce674.svg",name:"Frederick Knighthood",proffesion:"Public Speaker",description:"Well what can I say. Techue is the template for you and you should definitely purchase yours now. There's absolutely nothing stopping you, it's absolutely fantastic!"}],We=function(e){return Object(a.jsx)(m.Element,{name:"reviews",children:Object(a.jsxs)("section",{className:Ee.a.ReviewSection,children:[Object(a.jsx)(ue,{subtitle:"What they say about us",title:"Client reviews"}),Object(a.jsx)(He,{clients:De})]})})},Xe=i(54),qe=i(12),ze=i.n(qe),Ze=i.p+"static/media/contact.c8e4def1.png",Me=i(34),Je=i.n(Me),Ue=function(e){var t=e.elementType,i=e.name,s=e.type,n=e.value,c=e.placeholder,r=e.onChange,o="";switch(t){case"input":o=Object(a.jsx)("input",{name:i,type:s,value:n,placeholder:c,className:Je.a.Input,onChange:r});break;case"textarea":o=Object(a.jsx)("textarea",{name:i,value:n,placeholder:c,onChange:r,className:Je.a.Textarea});break;default:o=Object(a.jsx)("input",{name:i,type:s,value:n,placeholder:c,className:Je.a.Input,onChange:r})}return Object(a.jsx)(a.Fragment,{children:o})},$e=function(e){var t=Object(s.useState)([{id:0,elementType:"input",name:"name",type:"input",value:"",placeholder:"Name"},{id:1,elementType:"input",name:"email",type:"email",value:"",placeholder:"Email"},{id:2,elementType:"textarea",name:"message",value:"",placeholder:"Message"}]),i=Object(o.a)(t,2),n=i[0],c=i[1],r=n.map((function(e){var t=e.id,i=e.elementType,s=e.name,r=e.type,o=e.value,l=e.placeholder;return Object(a.jsx)(Ue,{elementType:i,name:s,type:r,value:o,placeholder:l,onChange:function(e){return function(e,t){var i=Object(Xe.a)(n);i[t].value=e.target.value,c(i)}(e,t)}},s)}));return Object(a.jsx)(m.Element,{name:"contact",children:Object(a.jsxs)("section",{className:ze.a.ContactSection,children:[Object(a.jsxs)("div",{className:ze.a.FormSection,children:[Object(a.jsx)("div",{className:ze.a.TitleContainer,children:Object(a.jsx)(ue,{subtitle:"Contact the team",title:"Start a conversation",description:"We're alwaysav ailable for a chat so do feel free to get in touch below and a member of the team will get right back to you."})}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:ze.a.Form,children:[r,Object(a.jsx)("button",{className:ze.a.SubmitBtn,children:"Submit message"})]})]}),Object(a.jsx)("div",{className:ze.a.ImgContainer,children:Object(a.jsx)(Y,{source:Ze})})]})})},et=i(44),tt=i.n(et),it=i(13),at=i.n(it),st=i(7),nt=i.n(st),ct=function(e){var t=e.title,i=e.address,s=e.phoneNumber,n=e.email,c=e.logo,r=e.description,o=Object(a.jsxs)("ul",{className:at.a.ListItems,children:[Object(a.jsx)("li",{className:at.a.ListItem,children:i}),Object(a.jsxs)("li",{className:at.a.ListItem,children:[Object(a.jsx)("strong",{children:"Tel:"}),s]}),Object(a.jsxs)("li",{className:at.a.ListItem,children:[Object(a.jsx)("strong",{children:"Email:"}),n]})]}),l=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:r}),Object(a.jsx)(J,{isGray:!0})]});return Object(a.jsxs)("div",{className:at.a.FooterCard,children:[Object(a.jsx)("h3",{className:at.a.Title,children:t}),c?l:o]})};ct.propsTypes={title:nt.a.string.isRequired,address:nt.a.string.isRequired,phoneNumber:nt.a.string.isRequired,email:nt.a.string.isRequired};var rt=ct,ot=function(e){return Object(a.jsx)("footer",{className:tt.a.Footer,children:Object(a.jsxs)("div",{className:tt.a.FooterContainer,children:[Object(a.jsx)(rt,{logo:!0,title:"techue.",description:"Techue is a vibrant and lightweight landing page template by Codefest. We like to do business at Techue HQ to client satisfaction."}),Object(a.jsx)(rt,{title:" London Office",address:"150B Technologie Avenue\n        London, SE1 2NY",phoneNumber:" +44 (800) 123 4567",email:" london@domain.com"}),Object(a.jsx)(rt,{title:" London Office",address:"150B Technologie Avenue\n        London, SE1 2NY",phoneNumber:" +44 (800) 123 4567",email:" london@domain.com"})]})})},lt=i.p+"static/media/header-bg.cd72f16c.svg",dt=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:K.a.BgHeaderContainer,children:Object(a.jsx)("img",{className:K.a.BgHeaderImg,src:lt,alt:"bg"})}),Object(a.jsx)(I,{}),Object(a.jsx)(m.Element,{name:"home",children:Object(a.jsxs)("header",{className:K.a.HeaderSection,children:[Object(a.jsx)(Y,{source:R}),Object(a.jsxs)("div",{className:K.a.HeaderSocialSection,children:[Object(a.jsx)(E,{title:"Get the ball rolling with techue.",description:"Techue is a vibrant, lightweight landing page template for all businesses."}),Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:"Start your 90-day free trial now."})}),Object(a.jsx)(z,{}),Object(a.jsx)(J,{})]})]})}),Object(a.jsx)(k,{}),Object(a.jsx)(ge,{}),Object(a.jsx)(Ne,{}),Object(a.jsx)(Le,{}),Object(a.jsx)(Ye,{}),Object(a.jsx)(We,{}),Object(a.jsx)($e,{}),Object(a.jsx)(ot,{})]})};var mt=function(){return Object(a.jsx)(dt,{})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(mt,{})}),document.getElementById("root"))}],[[105,1,2]]]);
//# sourceMappingURL=main.704cb396.chunk.js.map