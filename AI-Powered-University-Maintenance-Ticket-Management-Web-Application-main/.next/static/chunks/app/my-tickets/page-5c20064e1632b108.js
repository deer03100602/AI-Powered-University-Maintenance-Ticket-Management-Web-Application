(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[237],{4882:function(e,t,s){Promise.resolve().then(s.bind(s,1055))},1055:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var i=s(7437),r=s(2265),a=s(7138),c=s(3690),n=s(2022),l=s(2513),d=s(4174),o=s(9061),h=s(4472);function u(){let{user:e,setUser:t,toast:s,isRealAuth:u}=(0,c.q)(),[m,f]=(0,r.useState)([]),[p,y]=(0,r.useState)(!0),[x,g]=(0,r.useState)(e.name),[k,j]=(0,r.useState)(e.email),[b,v]=(0,r.useState)(e.group||"นักศึกษา"),Z=async()=>{y(!0);try{let t=new URLSearchParams;u?t.append("requester_email",e.email):t.append("requester_name",e.name);let s=await fetch("/api/tickets?".concat(t.toString()));if(s.ok){let e=await s.json();f(e)}}catch(e){console.error("Error fetching my tickets:",e),s.error("ไม่สามารถโหลดรายการปัญหาได้")}finally{y(!1)}};return(0,r.useEffect)(()=>{g(e.name),j(e.email),v(e.group||"นักศึกษา")},[e]),(0,r.useEffect)(()=>{Z()},[e.name,e.email,u]),(0,i.jsxs)("div",{className:"page-my-tickets fade-in",children:[(0,i.jsxs)("div",{className:"page-header",children:[(0,i.jsxs)("div",{className:"page-header-left",children:[(0,i.jsxs)("h1",{className:"page-title",children:[(0,i.jsx)(n.Z,{style:{width:24,height:24,marginRight:8,display:"inline",verticalAlign:"middle"}}),"ปัญหาของฉัน"]}),(0,i.jsx)("p",{className:"page-subtitle",children:"ติดตามสถานะปัญหาที่คุณแจ้งไว้เข้าระบบทั้งหมด"})]}),(0,i.jsxs)(a.default,{href:"/create",className:"btn btn-primary",children:[(0,i.jsx)(l.Z,{style:{width:16,height:16}}),"แจ้งปัญหาใหม่"]})]}),(0,i.jsxs)("div",{className:"profile-card glass-card",children:[(0,i.jsx)("div",{className:"profile-icon",children:(0,i.jsx)(d.Z,{style:{width:48,height:48,color:"var(--primary-color)"}})}),(0,i.jsxs)("div",{className:"profile-details",children:[(0,i.jsx)("h3",{children:u?"โปรไฟล์ผู้ใช้งานจริง (Supabase Auth)":"โปรไฟล์ผู้แจ้งปัญหา"}),(0,i.jsx)("p",{className:"text-muted",style:{fontSize:"0.85rem",marginBottom:"1rem"},children:u?"ระบบยืนยันตัวตนของคุณเรียบร้อยแล้วและคัดกรองข้อมูลปัญหาตามอีเมลจริงของคุณโดยอัตโนมัติเพื่อความปลอดภัย":"ระบบระบุตัวตนของคุณจากชื่อผู้แจ้งด้านล่างนี้เพื่อกรองแสดงเฉพาะรายการของคุณ"}),(0,i.jsx)("form",{className:"profile-form",onSubmit:e=>{if(e.preventDefault(),!u){if(!x.trim()){s.error("กรุณากรอกชื่อผู้แจ้ง");return}t(x.trim(),k.trim(),b),s.success("อัปเดตข้อมูลผู้ใช้งานจำลองแล้ว")}},children:(0,i.jsxs)("div",{className:"form-row",style:{alignItems:"flex-end"},children:[(0,i.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,i.jsx)("label",{className:"form-label",children:"ชื่อผู้แจ้ง"}),(0,i.jsx)("input",{type:"text",className:"form-input",value:x,onChange:e=>g(e.target.value),required:!0,disabled:u})]}),(0,i.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,i.jsx)("label",{className:"form-label",children:"อีเมล"}),(0,i.jsx)("input",{type:"email",className:"form-input",value:k,onChange:e=>j(e.target.value),disabled:u})]}),(0,i.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,i.jsx)("label",{className:"form-label",children:"กลุ่มผู้ใช้งาน"}),(0,i.jsxs)("select",{className:"form-input form-select",value:b,onChange:e=>v(e.target.value),disabled:u,children:[(0,i.jsx)("option",{value:"นักศึกษา",children:"นักศึกษา"}),(0,i.jsx)("option",{value:"อาจารย์",children:"อาจารย์"}),(0,i.jsx)("option",{value:"เจ้าหน้าที่",children:"เจ้าหน้าที่"}),(0,i.jsx)("option",{value:"เจ้าหน้าที่ผู้รับผิดชอบงาน IT หรือผู้ดูแลอุปกรณ์",children:"เจ้าหน้าที่ IT / ผู้ดูแลอุปกรณ์"}),(0,i.jsx)("option",{value:"ผู้ดูแลระบบ",children:"ผู้ดูแลระบบ"})]})]}),!u&&(0,i.jsx)("div",{className:"form-group btn-group-align",style:{marginBottom:0},children:(0,i.jsxs)("button",{type:"submit",className:"btn btn-ghost btn-sm",children:[(0,i.jsx)(o.Z,{style:{width:14,height:14}}),"อัปเดตและกรอง"]})})]})})]})]}),(0,i.jsx)("div",{className:"results-header",children:(0,i.jsx)("span",{className:"results-count",children:p?"กำลังโหลด...":"พบปัญหาของคุณ ".concat(m.length," รายการ")})}),(0,i.jsx)("div",{id:"my-tickets-container",children:p?(0,i.jsx)("p",{className:"text-muted",style:{textAlign:"center",padding:"3rem"},children:"กำลังโหลดปัญหาของคุณ..."}):(0,i.jsx)(h.dH,{tickets:m})})]})}},4472:function(e,t,s){"use strict";s.d(t,{Sy:function(){return N},ZP:function(){return w},dH:function(){return M}});var i=s(7437);s(2265);var r=s(7138),a=s(5066),c=s(8002),n=s(3541),l=s(6127),d=s(5302),o=s(4486),h=s(6160),u=s(5134),m=s(8913),f=s(9178),p=s(9687),y=s(9321),x=s(2022),g=s(8279),k=s(5085);let j={Open:{bg:"#3b82f620",text:"#60a5fa",border:"#3b82f640"},"In Progress":{bg:"#f59e0b20",text:"#fbbf24",border:"#f59e0b40"},"Waiting for Information":{bg:"#a855f720",text:"#c084fc",border:"#a855f740"},Resolved:{bg:"#22c55e20",text:"#4ade80",border:"#22c55e40"},Closed:{bg:"#6b728020",text:"#9ca3af",border:"#6b728040"},Cancelled:{bg:"#ef444420",text:"#f87171",border:"#ef444440"}},b={Low:{bg:"#22c55e20",text:"#4ade80",border:"#22c55e40"},Medium:{bg:"#3b82f620",text:"#60a5fa",border:"#3b82f640"},High:{bg:"#f59e0b20",text:"#fbbf24",border:"#f59e0b40"},Urgent:{bg:"#ef444420",text:"#f87171",border:"#ef444440"}},v={Low:(0,i.jsx)(a.Z,{style:{width:12,height:12}}),Medium:(0,i.jsx)(c.Z,{style:{width:12,height:12}}),High:(0,i.jsx)(n.Z,{style:{width:12,height:12}}),Urgent:(0,i.jsx)(l.Z,{style:{width:12,height:12}})},Z={"Computer Hardware":(0,i.jsx)(d.Z,{style:{width:14,height:14}}),"Software / Application":(0,i.jsx)(o.Z,{style:{width:14,height:14}}),"Network / Internet":(0,i.jsx)(h.Z,{style:{width:14,height:14}}),"Printer / Scanner":(0,i.jsx)(u.Z,{style:{width:14,height:14}}),"Classroom / Lab Room":(0,i.jsx)(m.Z,{style:{width:14,height:14}}),"Account / Login":(0,i.jsx)(f.Z,{style:{width:14,height:14}}),Other:(0,i.jsx)(p.Z,{style:{width:14,height:14}})};function N(e){if(!e)return"-";let t=new Date,s=new Date(e),i=t-s,r=Math.floor(i/6e4),a=Math.floor(i/36e5),c=Math.floor(i/864e5);return r<1?"เมื่อสักครู่":r<60?"".concat(r," นาทีที่แล้ว"):a<24?"".concat(a," ชั่วโมงที่แล้ว"):c<7?"".concat(c," วันที่แล้ว"):s.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}function w(e){let{ticket:t,compact:s=!1}=e,a=j[t.status]||j.Open,c=b[t.priority]||b.Medium;return s?(0,i.jsxs)(r.default,{href:"/tickets/".concat(t.id),className:"ticket-card ticket-card-compact",children:[(0,i.jsxs)("div",{className:"ticket-card-left",children:[(0,i.jsx)("span",{className:"ticket-no",children:t.ticket_no}),(0,i.jsx)("span",{className:"ticket-title-compact",children:t.title})]}),(0,i.jsxs)("div",{className:"ticket-card-right",children:[(0,i.jsx)("span",{className:"status-badge",style:{background:a.bg,color:a.text,border:"1px solid ".concat(a.border)},children:t.status}),(0,i.jsxs)("span",{className:"priority-badge",style:{background:c.bg,color:c.text,border:"1px solid ".concat(c.border)},children:[v[t.priority],t.priority]})]})]}):(0,i.jsxs)(r.default,{href:"/tickets/".concat(t.id),className:"ticket-card",children:[(0,i.jsxs)("div",{className:"ticket-card-header",children:[(0,i.jsxs)("div",{className:"ticket-card-id-row",children:[(0,i.jsx)("span",{className:"ticket-no",children:t.ticket_no}),(0,i.jsx)("span",{className:"ticket-time",children:N(t.created_at)})]}),(0,i.jsx)("h3",{className:"ticket-card-title",children:t.title})]}),(0,i.jsxs)("div",{className:"ticket-card-meta",children:[(0,i.jsxs)("div",{className:"ticket-meta-item",children:[Z[t.issue_type]||(0,i.jsx)(p.Z,{style:{width:14,height:14}}),(0,i.jsx)("span",{children:t.issue_type})]}),(0,i.jsxs)("div",{className:"ticket-meta-item",children:[(0,i.jsx)(y.Z,{style:{width:14,height:14}}),(0,i.jsx)("span",{children:t.location||"-"})]}),(0,i.jsxs)("div",{className:"ticket-meta-item",children:[(0,i.jsx)(x.Z,{style:{width:14,height:14}}),(0,i.jsx)("span",{children:t.requester_name})]}),t.assigned_to&&(0,i.jsxs)("div",{className:"ticket-meta-item",children:[(0,i.jsx)(g.Z,{style:{width:14,height:14}}),(0,i.jsx)("span",{children:t.assigned_to})]})]}),(0,i.jsxs)("div",{className:"ticket-card-footer",children:[(0,i.jsx)("span",{className:"status-badge",style:{background:a.bg,color:a.text,border:"1px solid ".concat(a.border)},children:t.status}),(0,i.jsxs)("span",{className:"priority-badge",style:{background:c.bg,color:c.text,border:"1px solid ".concat(c.border)},children:[v[t.priority],t.priority]})]})]})}function M(e){let{tickets:t}=e;return 0===t.length?(0,i.jsxs)("div",{className:"empty-state",children:[(0,i.jsx)(k.Z,{className:"empty-icon"}),(0,i.jsx)("h3",{children:"ไม่พบ Ticket"}),(0,i.jsx)("p",{children:"ยังไม่มีรายการปัญหาที่ตรงกับเงื่อนไข"})]}):(0,i.jsx)("div",{className:"ticket-grid",children:t.map(e=>(0,i.jsx)(w,{ticket:e},e.id))})}},4486:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]])},5066:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]])},3541:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]])},9687:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},4174:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]])},5085:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]])},9178:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]])},9321:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},8002:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},5302:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]])},2513:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},5134:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]])},9061:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},8913:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]])},8279:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]])},2022:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},6160:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]])}},function(e){e.O(0,[762,978,138,690,971,23,744],function(){return e(e.s=4882)}),_N_E=e.O()}]);