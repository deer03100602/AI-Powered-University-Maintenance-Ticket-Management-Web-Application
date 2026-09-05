(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{3091:function(e,t,a){Promise.resolve().then(a.bind(a,7388))},7388:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Z}});var s=a(7437),r=a(2265),i=a(6463),n=a(3690),l=a(4258),c=a(2513),o=a(8030);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,o.Z)("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);var h=a(8803),u=a(5302),p=a(4486),m=a(6160),y=a(5134),f=a(8913),x=a(9178),g=a(9687),v=a(3045),j=a(500);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let k=(0,o.Z)("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]),N={monitor:u.Z,"app-window":p.Z,wifi:m.Z,printer:y.Z,school:f.Z,"key-round":x.Z,"circle-help":g.Z,wrench:v.Z,shield:j.Z,activity:k},w=["monitor","app-window","wifi","printer","school","key-round","circle-help","wrench","shield","activity"];function Z(){let e=(0,i.useRouter)(),{role:t,toast:a,confirm:o}=(0,n.q)(),[u,p]=(0,r.useState)([]),[m,y]=(0,r.useState)(!0);(0,r.useEffect)(()=>{"admin"!==t&&(a.warning("คุณไม่มีสิทธิ์เข้าถึงหน้าตั้งค่าประเภทปัญหา"),e.push("/"))},[t]);let f=async()=>{try{let e=await fetch("/api/issue-types");if(e.ok){let t=await e.json();p(t)}}catch(e){console.error("Error fetching issue types:",e),a.error("ไม่สามารถโหลดข้อมูลประเภทปัญหาได้")}finally{y(!1)}};(0,r.useEffect)(()=>{"admin"===t&&f()},[t]);let x=e=>{let t=e.name,r=e.description,i=e.icon||"circle-help";o("แก้ไขประเภทปัญหา","",async()=>{if(!t.trim()){a.error("กรุณากรอกชื่อประเภทปัญหา");return}try{let s=await fetch("/api/issue-types/".concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.trim(),description:r.trim(),icon:i})});if(s.ok)a.success("แก้ไขประเภทปัญหาสำเร็จ"),f();else{let e=await s.json();a.error("ไม่สามารถแก้ไขประเภทปัญหาได้: ".concat(e.error||""))}}catch(e){console.error(e),a.error("เกิดข้อผิดพลาดในการเชื่อมต่อ")}},{confirmText:"บันทึก",cancelText:"ยกเลิก",content:(0,s.jsxs)("div",{className:"edit-form",style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsxs)("label",{className:"form-label",children:["ชื่อประเภทปัญหา ",(0,s.jsx)("span",{className:"required",children:"*"})]}),(0,s.jsx)("input",{type:"text",className:"form-input",defaultValue:e.name,onChange:e=>{t=e.target.value}})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{className:"form-label",children:"รายละเอียด"}),(0,s.jsx)("textarea",{className:"form-input form-textarea",defaultValue:e.description,rows:3,onChange:e=>{r=e.target.value}})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{className:"form-label",children:"ไอคอน"}),(0,s.jsx)("select",{className:"form-input form-select",defaultValue:e.icon||"circle-help",onChange:e=>{i=e.target.value},children:w.map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]})]})})},v=e=>{o("ยืนยันการลบประเภทปัญหา","คุณแน่ใจหรือไม่ว่าต้องการลบประเภทปัญหานี้? ใบงานที่ใช้ประเภทปัญหานี้อาจไม่แสดงประเภทตามเดิม",async()=>{try{let t=await fetch("/api/issue-types/".concat(e),{method:"DELETE"});if(t.ok)a.success("ลบประเภทปัญหาสำเร็จ"),f();else{let e=await t.json();a.error("ไม่สามารถลบได้: ".concat(e.error||""))}}catch(e){console.error(e),a.error("เกิดข้อผิดพลาดในการเชื่อมต่อ")}},{confirmClass:"btn-danger"})};return"admin"!==t?null:(0,s.jsxs)("div",{className:"page-issue-types fade-in",children:[(0,s.jsxs)("div",{className:"page-header",children:[(0,s.jsxs)("div",{className:"page-header-left",children:[(0,s.jsxs)("h1",{className:"page-title text-gradient",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,s.jsx)(l.Z,{style:{width:26,height:26,color:"var(--primary-color)"}}),"จัดการประเภทปัญหาในระบบ"]}),(0,s.jsx)("p",{className:"page-subtitle",children:"แสดงรายการและจัดการหมวดหมู่ประเภทปัญหาทั้งหมดที่เปิดใช้งานในระบบแจ้งซ่อม"})]}),(0,s.jsxs)("button",{className:"btn btn-primary",onClick:()=>{let e="",t="",r="circle-help";o("เพิ่มประเภทปัญหาใหม่","",async()=>{if(!e.trim()){a.error("กรุณากรอกชื่อประเภทปัญหา");return}try{let s=await fetch("/api/issue-types",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.trim(),description:t.trim(),icon:r})});if(s.ok)a.success("เพิ่มประเภทปัญหาสำเร็จ"),f();else{let e=await s.json();a.error("ไม่สามารถเพิ่มประเภทปัญหาได้: ".concat(e.error||""))}}catch(e){console.error(e),a.error("เกิดข้อผิดพลาดในการเชื่อมต่อ")}},{confirmText:"เพิ่มประเภท",cancelText:"ยกเลิก",content:(0,s.jsxs)("div",{className:"edit-form",style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsxs)("label",{className:"form-label",children:["ชื่อประเภทปัญหา ",(0,s.jsx)("span",{className:"required",children:"*"})]}),(0,s.jsx)("input",{type:"text",className:"form-input",placeholder:"เช่น Network / Internet",onChange:t=>{e=t.target.value}})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{className:"form-label",children:"รายละเอียด"}),(0,s.jsx)("textarea",{className:"form-input form-textarea",placeholder:"คำอธิบายสั้นๆ เกี่ยวกับปัญหาประเภทนี้...",rows:3,onChange:e=>{t=e.target.value}})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{className:"form-label",children:"ไอคอน"}),(0,s.jsx)("select",{className:"form-input form-select",defaultValue:"circle-help",onChange:e=>{r=e.target.value},children:w.map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]})]})})},children:[(0,s.jsx)(c.Z,{style:{width:16,height:16}}),"เพิ่มประเภทปัญหา"]})]}),m?(0,s.jsx)("p",{className:"text-muted",style:{textAlign:"center",padding:"3rem"},children:"กำลังโหลดข้อมูลประเภทปัญหา..."}):0===u.length?(0,s.jsxs)("div",{className:"empty-state",children:[(0,s.jsx)("h3",{children:"ไม่พบประเภทปัญหาในระบบ"}),(0,s.jsx)("p",{children:"กรุณากดปุ่มเพิ่มประเภทปัญหาด้านบนเพื่อสร้างใหม่"})]}):(0,s.jsx)("div",{className:"issue-types-grid",children:u.map(e=>{let t=N[e.icon]||g.Z;return(0,s.jsxs)("div",{className:"type-card glass-card",children:[(0,s.jsxs)("div",{className:"type-card-header",children:[(0,s.jsx)("div",{className:"type-icon-wrapper",children:(0,s.jsx)(t,{className:"type-icon",style:{width:22,height:22}})}),(0,s.jsxs)("div",{className:"type-card-actions",children:[(0,s.jsx)("button",{className:"btn btn-ghost btn-icon-sm",onClick:()=>x(e),title:"แก้ไข",children:(0,s.jsx)(d,{style:{width:14,height:14}})}),(0,s.jsx)("button",{className:"btn btn-danger-ghost btn-icon-sm",onClick:()=>v(e.id),title:"ลบ",children:(0,s.jsx)(h.Z,{style:{width:14,height:14}})})]})]}),(0,s.jsxs)("div",{className:"type-card-body",style:{marginTop:"1rem"},children:[(0,s.jsx)("h3",{className:"type-title",style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"0.5rem"},children:e.name}),(0,s.jsx)("p",{className:"type-desc text-muted",style:{fontSize:"0.85rem",minHeight:"3rem",margin:0},children:e.description||"ไม่มีคำอธิบาย"}),(0,s.jsxs)("span",{className:"type-id-tag",style:{display:"inline-block",marginTop:"1rem",fontFamily:"monospace",fontSize:"0.75rem",opacity:.6},children:["ID: ",e.id]})]})]},e.id)})})]})}},4486:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]])},9687:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},9178:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]])},5302:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]])},2513:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},5134:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]])},8913:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]])},4258:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},500:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]])},8803:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},6160:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]])},3045:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(8030).Z)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]])},6463:function(e,t,a){"use strict";var s=a(1169);a.o(s,"usePathname")&&a.d(t,{usePathname:function(){return s.usePathname}}),a.o(s,"useRouter")&&a.d(t,{useRouter:function(){return s.useRouter}})}},function(e){e.O(0,[762,978,690,971,23,744],function(){return e(e.s=3091)}),_N_E=e.O()}]);