(self.webpackChunkearth_website=self.webpackChunkearth_website||[]).push([[179],{195:(e,n,t)=>{"use strict";var s=t(886),a=t(212);const o={volume:.5,sunIntesity:5};var r=new a.xsS;r.background=new a.Ilk(o.background||0);const i=r;var u=document.querySelector("canvas"),c=new a.CP7({canvas:u,antialias:!0});c.setPixelRatio(window.devicePixelRatio),c.shadowMap.enabled=!0,c.setSize(window.innerWidth,window.innerHeight,!1),c.physicallyCorrectLights=!0,c.shadowMap.enabled=!0,c.shadowMap.bias=1e-4,c.shadowMap.type=a.ntZ,c.outputEncoding=a.knz;const d=c;var w=new a.cPb(o.FOV||60,window.innerWidth/window.innerHeight,.1,1e3);w.position.x=5,w.lookAt(0,0,0);const l=w;new a.ZAu;var v=new a.Ox3(16777215,o.sunIntesity||5);v.castShadow=!0,v.shadow.camera.near=.1,v.shadow.camera.far=8,v.position.set(0,0,4),v.lookAt(0,0,0),v.shadow.mapSize=new a.FM8(1024,1024);const p=v;var h=t(757),m=t.n(h),f=t(926),y=t.n(f),g=new a.dpR;var x=new a.dpR;var k,b,P=t(766),S=["./sounds/spheres.wav","./sounds/volcanoes.wav","./sounds/mud.wav","./sounds/wind.wav","./sounds/crickets.wav","./sounds/birds.wav","./sounds/chimpanzee.wav","./sounds/wildog.wav","./sounds/footsteps.wav","./sounds/fire.wav","./sounds/first.wav","./sounds/tamedog.wav","./sounds/herding.wav","./sounds/tractor.wav","./sounds/morse.wav","./sounds/horse.wav","./sounds/train.wav","./sounds/bus.wav","./sounds/f-111.wav","./sounds/kiss.wav","./sounds/life.wav"],M=o.volume||.25,R=function e(n){var t=new P.Howl({src:[S[n]],preload:!0,volume:o.volume||.25,onend:function(){n+1!=S.length&&e(n+1)}});t.play(),t.fade(0,M,2e4)},j=document.querySelector("div.spinner"),A=document.querySelector("div.start"),q=document.querySelector("canvas"),E=[];Promise.all([new Promise(function(){var e=y()(m().mark((function e(n,t){var s,r,i,u,c,d;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new a.xo$(o.earthRadius||2,32,32),r=new a.EJi({color:7448559}),e.next=4,g.loadAsync("./textures/Albedo.jpg");case 4:return i=e.sent,r.map=i,e.next=8,g.loadAsync("./textures/Roughness.jpg");case 8:return u=e.sent,r.roughnessMap=u,r.clearcoat=1,r.clearcoatRoughness=.7,e.next=14,g.loadAsync("./textures/Emission.jpg");case 14:c=e.sent,r.emissiveMap=c,r.emissive=new a.Ilk(222,169,6),r.emissiveIntensity=o.emmision||.001,r.refractionRatio=1.45,d=new a.Kj0(s,r),n(d);case 21:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),new Promise(function(){var e=y()(m().mark((function e(n,t){var s,r,i,u;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new a.xo$(1.005*(o.earthsRadius||2),32,32),r=new a.EJi({color:16777215}),e.next=4,x.loadAsync("./textures/Clouds.jpg");case 4:i=e.sent,r.alphaMap=i,r.transparent=!0,r.depthWrite=!1,u=new a.Kj0(s,r),n(u);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),new Promise(function(){var e=y()(m().mark((function e(n,t){var s,r,i;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=new a.xo$(1.009*(o.earthsRadius||2),32,32),(r=new a.EJi({color:255})).opacity=.25,r.transparent=!0,r.depthWrite=!1,i=new a.Kj0(s,r),n(i);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())]).then((function(e){return E=e})).catch((function(e){return console.log(e)})).finally((function(){return function(){k=E[0],b=E[1],E[2],i.add(p),E.map((function(e){return i.add(e)})),window.addEventListener("resize",(function(){l.aspect=q.clientWidth/q.clientHeight,l.updateProjectionMatrix(),d.render(i,l)})),j.remove(),W();var e=!1;document.querySelector("button#start").addEventListener("click",(function(){e||(e=!0,A.remove(),document.querySelector(".golden-platte").classList.add("show"),q.style="filter: none",R(0))}))}()}));var z=new s.z(l,q);z.enableDamping=!0,z.rotateSpeed=.25,z.enablePan=!1,z.maxDistance=10,z.minDistance=4;var W=function e(){k.rotation.y+=2e-4,b.rotation.y-=5e-4,l.aspect=q.clientWidth/q.clientHeight,l.updateProjectionMatrix(),requestAnimationFrame(e),d.render(i,l),z.update()}}},0,[[195,666,216]]]);