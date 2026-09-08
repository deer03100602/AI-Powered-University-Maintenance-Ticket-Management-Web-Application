"use strict";exports.id=321,exports.ids=[321],exports.modules={2321:(e,t,i)=>{i.d(t,{dH:()=>H,ZP:()=>N,Sy:()=>M});var s=i(326);i(7577);var a=i(434),r=i(2881);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,r.Z)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]),c=(0,r.Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),h=(0,r.Z)("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);var l=i(949),o=i(2634),n=i(4308),y=i(5091),x=i(3869),p=i(9308),k=i(699),m=i(3062),g=i(7636),b=i(9635),f=i(9819),j=i(3335);let v={Open:{bg:"#3b82f620",text:"#60a5fa",border:"#3b82f640"},"In Progress":{bg:"#f59e0b20",text:"#fbbf24",border:"#f59e0b40"},"Waiting for Information":{bg:"#a855f720",text:"#c084fc",border:"#a855f740"},Resolved:{bg:"#22c55e20",text:"#4ade80",border:"#22c55e40"},Closed:{bg:"#6b728020",text:"#9ca3af",border:"#6b728040"},Cancelled:{bg:"#ef444420",text:"#f87171",border:"#ef444440"}},w={Low:{bg:"#22c55e20",text:"#4ade80",border:"#22c55e40"},Medium:{bg:"#3b82f620",text:"#60a5fa",border:"#3b82f640"},High:{bg:"#f59e0b20",text:"#fbbf24",border:"#f59e0b40"},Urgent:{bg:"#ef444420",text:"#f87171",border:"#ef444440"}},Z={Low:s.jsx(d,{style:{width:12,height:12}}),Medium:s.jsx(c,{style:{width:12,height:12}}),High:s.jsx(h,{style:{width:12,height:12}}),Urgent:s.jsx(l.Z,{style:{width:12,height:12}})},u={"Computer Hardware":s.jsx(o.Z,{style:{width:14,height:14}}),"Software / Application":s.jsx(n.Z,{style:{width:14,height:14}}),"Network / Internet":s.jsx(y.Z,{style:{width:14,height:14}}),"Printer / Scanner":s.jsx(x.Z,{style:{width:14,height:14}}),"Classroom / Lab Room":s.jsx(p.Z,{style:{width:14,height:14}}),"Account / Login":s.jsx(k.Z,{style:{width:14,height:14}}),Other:s.jsx(m.Z,{style:{width:14,height:14}})};function M(e){if(!e)return"-";let t=new Date,i=new Date(e),s=t-i,a=Math.floor(s/6e4),r=Math.floor(s/36e5),d=Math.floor(s/864e5);return a<1?"เมื่อสักครู่":a<60?`${a} นาทีที่แล้ว`:r<24?`${r} ชั่วโมงที่แล้ว`:d<7?`${d} วันที่แล้ว`:i.toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"2-digit"})}function N({ticket:e,compact:t=!1}){let i=v[e.status]||v.Open,r=w[e.priority]||w.Medium;return t?(0,s.jsxs)(a.default,{href:`/tickets/${e.id}`,className:"ticket-card ticket-card-compact",children:[(0,s.jsxs)("div",{className:"ticket-card-left",children:[s.jsx("span",{className:"ticket-no",children:e.ticket_no}),s.jsx("span",{className:"ticket-title-compact",children:e.title})]}),(0,s.jsxs)("div",{className:"ticket-card-right",children:[s.jsx("span",{className:"status-badge",style:{background:i.bg,color:i.text,border:`1px solid ${i.border}`},children:e.status}),(0,s.jsxs)("span",{className:"priority-badge",style:{background:r.bg,color:r.text,border:`1px solid ${r.border}`},children:[Z[e.priority],e.priority]})]})]}):(0,s.jsxs)(a.default,{href:`/tickets/${e.id}`,className:"ticket-card",children:[(0,s.jsxs)("div",{className:"ticket-card-header",children:[(0,s.jsxs)("div",{className:"ticket-card-id-row",children:[s.jsx("span",{className:"ticket-no",children:e.ticket_no}),s.jsx("span",{className:"ticket-time",children:M(e.created_at)})]}),s.jsx("h3",{className:"ticket-card-title",children:e.title})]}),(0,s.jsxs)("div",{className:"ticket-card-meta",children:[(0,s.jsxs)("div",{className:"ticket-meta-item",children:[u[e.issue_type]||s.jsx(m.Z,{style:{width:14,height:14}}),s.jsx("span",{children:e.issue_type})]}),(0,s.jsxs)("div",{className:"ticket-meta-item",children:[s.jsx(g.Z,{style:{width:14,height:14}}),s.jsx("span",{children:e.location||"-"})]}),(0,s.jsxs)("div",{className:"ticket-meta-item",children:[s.jsx(b.Z,{style:{width:14,height:14}}),s.jsx("span",{children:e.requester_name})]}),e.assigned_to&&(0,s.jsxs)("div",{className:"ticket-meta-item",children:[s.jsx(f.Z,{style:{width:14,height:14}}),s.jsx("span",{children:e.assigned_to})]})]}),(0,s.jsxs)("div",{className:"ticket-card-footer",children:[s.jsx("span",{className:"status-badge",style:{background:i.bg,color:i.text,border:`1px solid ${i.border}`},children:e.status}),(0,s.jsxs)("span",{className:"priority-badge",style:{background:r.bg,color:r.text,border:`1px solid ${r.border}`},children:[Z[e.priority],e.priority]})]})]})}function H({tickets:e}){return 0===e.length?(0,s.jsxs)("div",{className:"empty-state",children:[s.jsx(j.Z,{className:"empty-icon"}),s.jsx("h3",{children:"ไม่พบ Ticket"}),s.jsx("p",{children:"ยังไม่มีรายการปัญหาที่ตรงกับเงื่อนไข"})]}):s.jsx("div",{className:"ticket-grid",children:e.map(e=>s.jsx(N,{ticket:e},e.id))})}},4308:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]])},3062:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},3335:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]])},699:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]])},7636:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},2634:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]])},3869:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]])},9308:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]])},9819:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]])},5091:(e,t,i)=>{i.d(t,{Z:()=>s});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,i(2881).Z)("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]])}};