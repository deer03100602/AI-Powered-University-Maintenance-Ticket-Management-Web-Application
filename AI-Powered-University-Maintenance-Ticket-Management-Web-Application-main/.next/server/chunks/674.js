"use strict";exports.id=674,exports.ids=[674],exports.modules={2674:(e,t,i)=>{i.d(t,{NotificationService:()=>l});var s=i(7147),o=i.n(s),n=i(1017);let r=i.n(n)().join(process.cwd(),"data/settings.json");function a(){try{if(o().existsSync(r)){let e=o().readFileSync(r,"utf8");return JSON.parse(e)}}catch(e){console.error("Error reading settings.json:",e)}return{discord_webhook_url:process.env.DISCORD_WEBHOOK_URL||process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL||"",emailjs_service_id:process.env.EMAILJS_SERVICE_ID||process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID||"",emailjs_template_id:process.env.EMAILJS_TEMPLATE_ID||process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID||"",emailjs_public_key:process.env.EMAILJS_PUBLIC_KEY||process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY||"",emailjs_private_key:process.env.EMAILJS_PRIVATE_KEY||""}}let l={async sendWebhook(e,t){let i=a().discord_webhook_url;if(!i)return console.log("Webhook notification skipped: URL not configured."),!1;let s="",o=3447003;"create"===t?(s=`🆕 มีการแจ้งปัญหาใหม่! (${e.ticket_no})`,o=3066993):"update"===t&&(s=`🔄 อัปเดตตั๋วปัญหา (${e.ticket_no})`,"Resolved"===e.status||"Closed"===e.status?o=3066993:"In Progress"===e.status?o=15105570:"Cancelled"===e.status&&(o=15158332));let n=e.description?e.description.replace(/📎 \[(.*?)\]\((.*?)\)/g,"").trim():"",r={embeds:[{title:s,color:o,fields:[{name:"หัวข้อปัญหา",value:e.title||"-",inline:!1},{name:"ประเภท",value:e.issue_type||"-",inline:!0},{name:"สถานที่",value:e.location||"-",inline:!0},{name:"ระดับความเร่งด่วน",value:e.priority||"-",inline:!0},{name:"สถานะ",value:e.status||"-",inline:!0},{name:"ผู้แจ้ง",value:`${e.requester_name} (${e.requester_email||"ไม่ระบุ"})`,inline:!1},{name:"ผู้รับผิดชอบ",value:e.assigned_to||"ยังไม่ได้มอบหมาย",inline:!0}],description:n?`**รายละเอียด:**
${n.substring(0,500)}`:"",timestamp:new Date().toISOString(),footer:{text:"Mini Helpdesk System"}}]};try{let e=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!e.ok)return console.error(`Webhook sending failed: ${e.statusText}`),!1;return!0}catch(e){return console.error("Error sending Webhook:",e),!1}},async sendEmail(e,t){let i=a(),s=i.emailjs_service_id,o=i.emailjs_template_id,n=i.emailjs_public_key,r=i.emailjs_private_key;if(!s||!o||!n)return console.log("EmailJS notification skipped: credentials not fully configured."),!1;let l="",c="";"create"===t?(l=`ระบบรับเรื่องแจ้งปัญหาสำเร็จ - Ticket No: ${e.ticket_no}`,c=`สวัสดีครับ/ค่ะ คุณ ${e.requester_name},

ระบบได้รับเรื่องแจ้งปัญหาของคุณเรียบร้อยแล้ว:

Ticket No: ${e.ticket_no}
หัวข้อ: ${e.title}
ประเภท: ${e.issue_type}
สถานที่: ${e.location}
ความเร่งด่วน: ${e.priority}

คุณสามารถติดตามสถานะการดำเนินงานของตั๋วปัญหานี้ผ่านระบบ Mini Helpdesk ได้ตลอดเวลาครับ/ค่ะ`):(l=`อัปเดตสถานะปัญหา Ticket No: ${e.ticket_no}`,c=`สวัสดีครับ/ค่ะ คุณ ${e.requester_name},

ตั๋วปัญหาของคุณได้รับการอัปเดตสถานะแล้ว:

Ticket No: ${e.ticket_no}
หัวข้อ: ${e.title}
สถานะใหม่: ${e.status}
ผู้รับผิดชอบ: ${e.assigned_to||"ยังไม่ได้มอบหมาย"}
หมายเหตุการแก้ไข: ${e.resolution_note||"-"}

ขอบคุณที่ใช้บริการครับ/ค่ะ`);let _={service_id:s,template_id:o,user_id:n,accessToken:r||void 0,template_params:{subject:l,to_email:e.requester_email,to_name:e.requester_name,ticket_no:e.ticket_no,title:e.title,status:e.status,priority:e.priority,assigned_to:e.assigned_to||"ยังไม่ได้มอบหมาย",resolution_note:e.resolution_note||"-",message:c}};if(!e.requester_email)return console.log("EmailJS notification skipped: requester email is empty."),!1;try{let e=await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!e.ok){let t=await e.text();return console.error(`EmailJS sending failed: ${e.status} ${t}`),!1}return!0}catch(e){return console.error("Error sending EmailJS email:",e),!1}},async dispatch(e,t){Promise.allSettled([this.sendWebhook(e,t),this.sendEmail(e,t)]).then(e=>{console.log(`Notification dispatch completed for event '${t}':`,e)})}}}};