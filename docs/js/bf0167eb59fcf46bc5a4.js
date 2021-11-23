"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[104],{395:(A,n,e)=>{var o=e(784),t=e(316),r=e(568),i=e(62),a=e.n(i),C=e(36),E=e.n(C),c=e(793),l=e.n(c),s=e(892),d=e.n(s),B=e(173),m=e.n(B),p=e(464),g=e.n(p),u=e(931),f={};f.styleTagTransform=g(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=E(),f.insertStyleElement=m(),a()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,t.render(o.createElement(r.Z,null),document.querySelector("#root"))},931:(A,n,e)=>{e.d(n,{Z:()=>a});var o=e(272),t=e.n(o),r=e(609),i=e.n(r)()(t());i.push([A.id,"header {\n  background-color: #0d1117;\n  width: 100%;\n}\n\n.header-main-nav {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n  align-items: center;\n  height: 60px;\n}\n\n.header-logo {\n  width: 20%;\n  display: flex;\n  justify-content: flex-start;\n  padding-left: 15px;\n}\n\n.ul-icons {\n  width: 20%;\n  display: flex;\n  justify-content: space-around;\n  text-decoration: none;\n  list-style: none;\n}\n\n.header-searchbar {\n  width: 60%;\n  border-radius: 5px;\n  border: 1px solid aliceblue;\n  display: flex;\n  justify-content: center;\n  background: #0d1117;\n  height: 40px;\n}\n\n.search-text {\n  background: none;\n  border: none;\n  width: 100%;\n}\n\n.container_login {\n  max-width: 1000px;\n  margin: auto;\n  background-color: #292b2ecc;\n  border: 1px solid #000000;\n  box-shadow: 0 0 35px #58a6ff5e;\n}\n\n.container_login_title {\n  text-align: center;\n}\n\n.container_login_main {\n  width: 500px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n}\n\n.input_login {\n  width: 500px;\n  font-size: 1.5rem;\n  padding: 10px 10px;\n  margin-bottom: 1rem;\n  background-color: #292b2e;\n  border-radius: 25px;\n}\n\n.forgot {\n  color: #58a7ff;\n  text-decoration: none;\n}\n\n.forgot:hover {\n  mix-blend-mode: difference;\n}\n\nbutton {\n  cursor: pointer;\n  color: #8b949e;\n}\n\n.login {\n  background-color: #292b2e;\n  border-bottom: 1px solid #000000;\n  padding: 2rem 0;\n}\n\n.subTitle_login {\n  padding: 0.5rem 0;\n}\n\n.subTitle_login:first-child {\n  margin-top: 3.5rem;\n}\n\n.button_input {\n  display: flex;\n  justify-content: center;\n}\n\n.button_login {\n  margin: 3rem 0 1rem 0;\n  width: 520px;\n  height: 48px;\n  border-radius: 25px;\n  font-weight: bold;\n  font-size: 1.5rem;\n  background-color: #58a7ff;\n  color: #292b2ecc;\n  transition: 0.2s;\n}\n\n.button_login:hover {\n  color: #58a7ff;\n  background-color: #0d1117;\n  transition: 0.2s;\n}\n\n.create {\n  color: #58a7ff;\n  text-decoration: none;\n}\n\n.create:hover {\n  mix-blend-mode: difference;\n}\n\n.create_login {\n  margin-bottom: 3rem;\n  text-align: center;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nbody {\n  background-color: #0d1117;\n  color: #8b949e;\n}\n\ninput {\n  background-color: transparent;\n  color: #8b949e;\n}\n\nbutton {\n  background-color: transparent;\n}\n\n.container_profil {\n  max-width: 1000px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-flow: column nowrap;\n}\n\n.custom_avatar {\n  margin: 4rem auto 2rem;\n  border-radius: 75px;\n}\n\n.line_profil {\n  margin: 1.5rem auto 0.5rem;\n  width: 520px;\n  display: flex;\n  font-size: 1.5rem;\n  justify-content: space-between;\n}\n\n.text_profil {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.link {\n  text-align: center;\n  text-decoration: none;\n  color: #58a7ff;\n  margin-bottom: 2rem;\n}\n\n.link:hover {\n  mix-blend-mode: difference;\n}\n\n.container_order {\n  display: flex;\n  justify-content: center;\n}\n\n.container_logout {\n  display: flex;\n  justify-content: center;\n}\n\n.order {\n  border-radius: 15px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.5rem 3rem;\n  margin-bottom: 2rem;\n  background-color: #58a7ff;\n  color: #292b2ecc;\n  transition: 0.2s;\n}\n\n.order:hover {\n  background-color: #0d1117;\n  color: #58a7ff;\n  box-shadow: 0 0 15px #58a7ff;\n  transition: 0.2s;\n}\n\n.logout {\n  border-radius: 15px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.5rem 3rem;\n  margin-bottom: 2rem;\n  background-color: #aa0000;\n  color: #292b2ecc;\n  transition: 0.2s;\n}\n\n.logout:hover {\n  background-color: #0d1117;\n  color: #aa0000;\n  box-shadow: 0 0 15px #aa0000;\n  transition: 0.2s;\n}\n\n.checkout-container {\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n}\n\n#order-recap {\n  display: flex;\n  flex-direction: column;\n  width: 70vw;\n}\n\n.article-template {\n  font-weight: 800;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: fit-content;\n  background-color: #292b2ecc;\n}\n\n#img-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n  width: 100px;\n  border: 1px solid grey;\n  margin: 1rem 0;\n}\n\n.label {\n  padding: 0.5rem;\n}\n\n.select {\n  font-size: 1.1rem;\n}\n\n#order-detail {\n  display: flex;\n  flex-direction: column;\n  width: 20vw;\n  height: 100vh;\n  padding-left: 2rem;\n  font-size: 1.5rem;\n}\n\n#order-detail h2 {\n  margin: 1rem;\n}\n\n.item-detail {\n  margin: 1rem 0;\n}\n\n#checkout {\n  width: 80%;\n  padding: 5px;\n  margin: auto 0;\n  border-radius: 5px;\n  background-color: wheat;\n}\n\n.container_list {\n  display: flex;\n  flex-flow: column nowrap;\n  max-width: 1000px;\n  margin: auto;\n  background-color: #292b2ecc;\n}\n\n.container_wishlist {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n}\n\n.box_img {\n  width: 30%;\n}\n\n.img_wishlist {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 225px;\n  width: 150px;\n  border: 1px solid grey;\n  margin: 1rem auto;\n}\n\n.box_name {\n  display: flex;\n  width: 60%;\n  margin: auto 0;\n}\n\n.name_wishlist {\n  font-size: 2rem;\n  margin: auto;\n  justify-content: center;\n}\n\n.box_trash {\n  width: 10%;\n  margin: auto 0;\n}\n\n.icon_trash {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n\nhr {\n  margin: 0 auto;\n  width: 900px;\n  height: 1px;\n  background-color: #0d1117;\n}\n\n.empty_wl {\n  margin: 7rem 0;\n}\n\n/*# sourceMappingURL=style.css.map */\n","",{version:3,sources:["webpack://./styles/partials/_header.scss","webpack://./styles/style.css","webpack://./styles/partials/_login.scss","webpack://./styles/partials/_variables.scss","webpack://./styles/partials/_reset.scss","webpack://./styles/partials/_profil.scss","webpack://./styles/partials/_cart.scss","webpack://./styles/partials/_wishlist.scss"],names:[],mappings:"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",sourceRoot:""}]);const a=i}},A=>{A.O(0,[335,418,531,827,207,655,25,668,572,738,249,237,227,290,779,831,999,248,699,337],(()=>(395,A(A.s=395)))),A.O()}]);