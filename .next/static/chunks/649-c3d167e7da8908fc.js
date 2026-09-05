"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[649],{4472:function(e,t,i){i.d(t,{Sy:function(){return w},ZP:function(){return M},dH:function(){return N}});var c=i(7437);i(2265);var r=i(7138),a=i(5066),n=i(8002),s=i(3541),d=i(6127),h=i(5302),o=i(4486),l=i(6160),y=i(5134),u=i(8913),f=i(9178),k=i(9687),p=i(9321),x=i(2022),m=i(8279),b=i(5085);let g={Open:{bg:"#3b82f620",text:"#60a5fa",border:"#3b82f640"},"In Progress":{bg:"#f59e0b20",text:"#fbbf24",border:"#f59e0b40"},"Waiting for Information":{bg:"#a855f720",text:"#c084fc",border:"#a855f740"},Resolved:{bg:"#22c55e20",text:"#4ade80",border:"#22c55e40"},Closed:{bg:"#6b728020",text:"#9ca3af",border:"#6b728040"},Cancelled:{bg:"#ef444420",text:"#f87171",border:"#ef444440"}},Z={Low:{bg:"#22c55e20",text:"#4ade80",border:"#22c55e40"},Medium:{bg:"#3b82f620",text:"#60a5fa",border:"#3b82f640"},High:{bg:"#f59e0b20",text:"#fbbf24",border:"#f59e0b40"},Urgent:{bg:"#ef444420",text:"#f87171",border:"#ef444440"}},j={Low:(0,c.jsx)(a.Z,{style:{width:12,height:12}}),Medium:(0,c.jsx)(n.Z,{style:{width:12,height:12}}),High:(0,c.jsx)(s.Z,{style:{width:12,height:12}}),Urgent:(0,c.jsx)(d.Z,{style:{width:12,height:12}})},v={"Computer Hardware":(0,c.jsx)(h.Z,{style:{width:14,height:14}}),"Software / Application":(0,c.jsx)(o.Z,{style:{width:14,height:14}}),"Network / Internet":(0,c.jsx)(l.Z,{style:{width:14,height:14}}),"Printer / Scanner":(0,c.jsx)(y.Z,{style:{width:14,height:14}}),"Classroom / Lab Room":(0,c.jsx)(u.Z,{style:{width:14,height:14}}),"Account / Login":(0,c.jsx)(f.Z,{style:{width:14,height:14}}),Other:(0,c.jsx)(k.Z,{style:{width:14,height:14}})};function w(e){if(!e)return"-";let t=new Date,i=new Date(e),c=t-i,r=Math.floor(c/6e4),a=Math.floor(c/36e5),n=Math.floor(c/864e5);return r<1?"เมื่อสักครู่":r<60?"".concat(r," นาทีที่แล้ว"):a<24?"".concat(a," ชั่วโมงที่แล้ว"):n<7?"".concat(n," วันที่แล้ว"):i.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}function M(e){let{ticket:t,compact:i=!1}=e,a=g[t.status]||g.Open,n=Z[t.priority]||Z.Medium;return i?(0,c.jsxs)(r.default,{href:"/tickets/".concat(t.id),className:"ticket-card ticket-card-compact",children:[(0,c.jsxs)("div",{className:"ticket-card-left",children:[(0,c.jsx)("span",{className:"ticket-no",children:t.ticket_no}),(0,c.jsx)("span",{className:"ticket-title-compact",children:t.title})]}),(0,c.jsxs)("div",{className:"ticket-card-right",children:[(0,c.jsx)("span",{className:"status-badge",style:{background:a.bg,color:a.text,border:"1px solid ".concat(a.border)},children:t.status}),(0,c.jsxs)("span",{className:"priority-badge",style:{background:n.bg,color:n.text,border:"1px solid ".concat(n.border)},children:[j[t.priority],t.priority]})]})]}):(0,c.jsxs)(r.default,{href:"/tickets/".concat(t.id),className:"ticket-card",children:[(0,c.jsxs)("div",{className:"ticket-card-header",children:[(0,c.jsxs)("div",{className:"ticket-card-id-row",children:[(0,c.jsx)("span",{className:"ticket-no",children:t.ticket_no}),(0,c.jsx)("span",{className:"ticket-time",children:w(t.created_at)})]}),(0,c.jsx)("h3",{className:"ticket-card-title",children:t.title})]}),(0,c.jsxs)("div",{className:"ticket-card-meta",children:[(0,c.jsxs)("div",{className:"ticket-meta-item",children:[v[t.issue_type]||(0,c.jsx)(k.Z,{style:{width:14,height:14}}),(0,c.jsx)("span",{children:t.issue_type})]}),(0,c.jsxs)("div",{className:"ticket-meta-item",children:[(0,c.jsx)(p.Z,{style:{width:14,height:14}}),(0,c.jsx)("span",{children:t.location||"-"})]}),(0,c.jsxs)("div",{className:"ticket-meta-item",children:[(0,c.jsx)(x.Z,{style:{width:14,height:14}}),(0,c.jsx)("span",{children:t.requester_name})]}),t.assigned_to&&(0,c.jsxs)("div",{className:"ticket-meta-item",children:[(0,c.jsx)(m.Z,{style:{width:14,height:14}}),(0,c.jsx)("span",{children:t.assigned_to})]})]}),(0,c.jsxs)("div",{className:"ticket-card-footer",children:[(0,c.jsx)("span",{className:"status-badge",style:{background:a.bg,color:a.text,border:"1px solid ".concat(a.border)},children:t.status}),(0,c.jsxs)("span",{className:"priority-badge",style:{background:n.bg,color:n.text,border:"1px solid ".concat(n.border)},children:[j[t.priority],t.priority]})]})]})}function N(e){let{tickets:t}=e;return 0===t.length?(0,c.jsxs)("div",{className:"empty-state",children:[(0,c.jsx)(b.Z,{className:"empty-icon"}),(0,c.jsx)("h3",{children:"ไม่พบ Ticket"}),(0,c.jsx)("p",{children:"ยังไม่มีรายการปัญหาที่ตรงกับเงื่อนไข"})]}):(0,c.jsx)("div",{className:"ticket-grid",children:t.map(e=>(0,c.jsx)(M,{ticket:e},e.id))})}},4486:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]])},5066:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]])},3541:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]])},9687:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},2023:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},5085:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]])},9178:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]])},9321:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},8002:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},5302:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]])},5134:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]])},8913:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]])},4817:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},8279:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]])},2022:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},6160:function(e,t,i){i.d(t,{Z:function(){return c}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,i(8030).Z)("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]])}}]);