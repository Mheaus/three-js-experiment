(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{4:function(e,n,t){e.exports=t(5)},5:function(e,n,t){"use strict";t.r(n);var i=t(3),o=t(1),a=t(2),r=(t(8),new o.g),s=new o.d(75,window.innerWidth/window.innerHeight,.1,1e3),d=new o.i({antialias:!0});function w(){d.setSize(window.innerWidth,window.innerHeight)}function c(){w(),s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix()}s.position.z=5,d.setClearColor("#efefef"),document.body.appendChild(d.domElement),window.addEventListener("resize",c),w();for(var h=new o.f,p=new o.h,u=function e(){Object(i.a)(this,e),this.geometry=new o.a(1,1,1),this.material=new o.c({color:16711422}),this.mesh=new o.b(this.geometry,this.material)},l=0;l<15;l+=1){var m=(new u).mesh;m.position.x=10*(Math.random()-.5),m.position.y=10*(Math.random()-.5),m.position.z=10*(Math.random()-.5),r.add(m)}var f=new o.e(16777215,1,1e3);f.position.set(0,0,0),r.add(f);var v=new o.e(16777215,2,1e3);v.position.set(0,0,25),r.add(v),function e(){requestAnimationFrame(e),d.render(r,s)}(),window.addEventListener("click",function(e){e.preventDefault(),p.x=e.clientX/window.innerWidth*2-1,p.y=-e.clientY/window.innerHeight*2+1,h.setFromCamera(p,s);for(var n=h.intersectObjects(r.children,!0),t=0;t<n.length;t+=1){var i=n[t].object,o=new a.b;o.to(i.scale,1,{x:2,ease:a.a.easeOut}),o.to(i.scale,.5,{x:.5,ease:a.a.easeInOut}),o.to(i.position,.5,{x:2,ease:a.a.easeOut}),o.to(i.rotation,.5,{y:.5*Math.PI,ease:a.a.easeOut},"=-1.5")}})},8:function(e,n,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.3d403e8d.chunk.js.map