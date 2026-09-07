// ============================================================
// page.js — Create Ticket Page
// Route: /create
// ============================================================

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { PlusCircle, Info, User, Send, Loader, UploadCloud, FileText, X } from 'lucide-react';

export default function CreateTicketPage() {
    const router = useRouter();
    const { user, setUser, toast, confirm } = useApp();
    const [issueTypes, setIssueTypes] = useState([]);

    // File upload ref and state
    const fileInputRef = useRef(null);
    const [attachments, setAttachments] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        async function fetchIssueTypes() {
            try {
                const res = await fetch('/api/issue-types');
                if (res.ok) {
                    const data = await res.json();
                    setIssueTypes(data);
                }
            } catch (e) {
                console.error('Error fetching issue types:', e);
            }
        }
        fetchIssueTypes();
    }, []);
    
    // Form States with Image 2 defaults
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [issueType, setIssueType] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [location, setLocation] = useState('');
    const [requesterName, setRequesterName] = useState(user.name || 'นักศึกษา ทดสอบ');
    const [requesterEmail, setRequesterEmail] = useState(user.email || 'student@example.com');
    const [requesterGroup, setRequesterGroup] = useState(user.group || 'นักศึกษา');
    const [submitting, setSubmitting] = useState(false);

    // Sync state if simulated user profile loads later
    useEffect(() => {
        if (user.name) setRequesterName(user.name);
        if (user.email) setRequesterEmail(user.email);
        if (user.group) setRequesterGroup(user.group);
    }, [user]);

    // Handle File Dropzone & Selection
    const handleFiles = async (files) => {
        if (!files || files.length === 0) return;

        setUploading(true);
        const newAttachments = [...attachments];

        for (const file of Array.from(files)) {
            if (file.size > 10 * 1024 * 1024) {
                toast.error(`ไฟล์ ${file.name} มีขนาดเกิน 10MB`);
                continue;
            }

            try {
                const formData = new FormData();
                formData.append('file', file);

                const res = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (res.ok) {
                    const data = await res.json();
                    newAttachments.push({
                        name: file.name,
                        size: file.size,
                        url: data.url,
                        type: file.type
                    });
                } else {
                    toast.error(`อัปโหลด ${file.name} ไม่สำเร็จ`);
                }
            } catch (err) {
                console.error('Upload error:', err);
                toast.error(`เกิดข้อผิดพลาดในการอัปโหลด ${file.name}`);
            }
        }

        setAttachments(newAttachments);
        setUploading(false);
    };

    const handleFileChange = (e) => {
        handleFiles(e.target.files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    };

    const removeAttachment = (index) => {
        setAttachments(attachments.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!title.trim() || !description.trim() || !issueType || !location.trim() || !requesterName.trim()) {
            toast.error('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน');
            return;
        }

        setSubmitting(true);

        try {
            let finalDescription = description.trim();
            if (attachments.length > 0) {
                finalDescription += '\n\n**ไฟล์แนบ:**\n' + attachments.map(a => `- [${a.name}](${a.url})`).join('\n');
            }

            const res = await fetch('/api/tickets', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title.trim(),
                    description: finalDescription,
                    issue_type: issueType,
                    priority,
                    location: location.trim(),
                    requester_name: requesterName.trim(),
                    requester_email: requesterEmail.trim(),
                    requester_group: requesterGroup
                })
            });

            if (res.ok) {
                const ticket = await res.json();
                
                // Save user profile state for next time
                setUser(requesterName.trim(), requesterEmail.trim(), requesterGroup);

                // Reset form
                setTitle('');
                setDescription('');
                setIssueType('');
                setPriority('Medium');
                setLocation('');
                setAttachments([]);

                // Display beautiful custom declarative Modal
                confirm(
                    '✅ แจ้งปัญหาสำเร็จ!',
                    '',
                    () => router.push(`/tickets/${ticket.id}`),
                    {
                        confirmText: 'ดูรายละเอียด Ticket',
                        cancelText: 'แจ้งปัญหาเพิ่มเติม',
                        onCancel: () => {},
                        content: (
                            <div className="success-ticket-info">
                                <div className="ticket-id-display">
                                    <span className="label">Ticket ID</span>
                                    <span className="value">{ticket.ticket_no}</span>
                                </div>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                    ปัญหาของคุณถูกบันทึกเข้าระบบเรียบร้อยแล้ว<br />
                                    คุณสามารถใช้เลข Ticket ID นี้ในการติดตามสถานะการดำเนินงานได้
                                </p>
                            </div>
                        )
                    }
                );
            } else {
                const err = await res.json();
                toast.error(`เกิดข้อผิดพลาด: ${err.error || 'ไม่สามารถสร้างตั๋วได้'}`);
            }
        } catch (err) {
            console.error('Error submitting ticket:', err);
            toast.error('ไม่สามารถส่งคำขอได้ กรุณาลองใหม่อีกครั้ง');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '1.5rem 1rem 3rem 1rem' }} className="fade-in">
            {/* Page Header */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '0 0 0.4rem 0' }}>
                    <PlusCircle style={{ width: 26, height: 26, color: '#f8fafc' }} />
                    แจ้งปัญหาใหม่
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>
                    กรอกรายละเอียดปัญหาเพื่อสร้าง Ticket ใหม่ในระบบ
                </p>
            </div>

            {/* Form Card */}
            <form 
                onSubmit={handleSubmit}
                className="ticket-form-card"
                style={{
                    backgroundColor: '#111726',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 16,
                    padding: '2rem',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)'
                }}
            >
                {/* Section 1: ข้อมูลปัญหา */}
                <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600 }}>
                        <Info style={{ width: 18, height: 18, color: '#818cf8' }} />
                        <span>ข้อมูลปัญหา</span>
                    </div>

                    {/* หัวข้อปัญหา */}
                    <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                            หัวข้อปัญหา <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input 
                            type="text" 
                            className="form-input" 
                            placeholder="เช่น คอมพิวเตอร์ห้อง Lab 301 เปิดไม่ติด" 
                            required 
                            maxLength={200}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                                width: '100%',
                                backgroundColor: '#0b0f19',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 8,
                                padding: '0.75rem 1rem',
                                color: '#f8fafc',
                                fontSize: '0.95rem',
                                outline: 'none'
                            }}
                        />
                        <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginTop: '0.35rem' }}>
                            อธิบายย่อสรุปสั้นๆ ชัดเจน
                        </span>
                    </div>

                    {/* รายละเอียดปัญหา */}
                    <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                            รายละเอียดปัญหา <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <textarea 
                            className="form-input" 
                            placeholder="อธิบายรายละเอียดปัญหา อาคาร หรือข้อความแสดงข้อผิดพลาด..." 
                            required 
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{
                                width: '100%',
                                backgroundColor: '#0b0f19',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 8,
                                padding: '0.75rem 1rem',
                                color: '#f8fafc',
                                fontSize: '0.95rem',
                                outline: 'none',
                                resize: 'vertical',
                                minHeight: 100
                            }}
                        />
                    </div>

                    {/* ไฟล์แนบ (ตัวเลือกเสริม) */}
                    <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                            ไฟล์แนบ (ตัวเลือกเสริม)
                        </label>
                        
                        <div 
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            style={{
                                border: isDragging ? '1px dashed #6366f1' : '1px dashed rgba(255, 255, 255, 0.18)',
                                backgroundColor: isDragging ? 'rgba(99, 102, 241, 0.08)' : 'rgba(11, 15, 25, 0.5)',
                                borderRadius: 12,
                                padding: '1.25rem 1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {/* Upload icon box */}
                            <div style={{
                                width: 46,
                                height: 46,
                                borderRadius: 10,
                                backgroundColor: '#1e2238',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <UploadCloud style={{ width: 22, height: 22, color: '#818cf8' }} />
                            </div>

                            {/* Dropzone text and badge chips */}
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.45rem' }}>
                                    ลากและวางไฟล์ที่นี่ หรือ <span style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'underline' }}>คลิกเพื่อเลือก</span>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.72rem', backgroundColor: 'rgba(255, 255, 255, 0.06)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 9999, padding: '2px 9px' }}>รูปภาพ</span>
                                    <span style={{ fontSize: '0.72rem', backgroundColor: 'rgba(255, 255, 255, 0.06)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 9999, padding: '2px 9px' }}>PDF</span>
                                    <span style={{ fontSize: '0.72rem', backgroundColor: 'rgba(255, 255, 255, 0.06)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 9999, padding: '2px 9px' }}>เอกสาร</span>
                                    <span style={{ fontSize: '0.72rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: 9999, padding: '2px 9px', fontWeight: 500 }}>สูงสุด 10MB</span>
                                </div>
                            </div>

                            <input 
                                ref={fileInputRef}
                                type="file" 
                                multiple 
                                style={{ display: 'none' }} 
                                onChange={handleFileChange}
                                accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
                            />
                        </div>

                        {/* Uploading indicator */}
                        {uploading && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.6rem', color: '#818cf8', fontSize: '0.85rem' }}>
                                <Loader style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} />
                                <span>กำลังอัปโหลดไฟล์...</span>
                            </div>
                        )}

                        {/* Attachments List */}
                        {attachments.length > 0 && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                                {attachments.map((att, idx) => (
                                    <div 
                                        key={idx} 
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                            backgroundColor: '#1a2234',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: 8,
                                            padding: '4px 10px',
                                            fontSize: '0.8rem',
                                            color: '#cbd5e1'
                                        }}
                                    >
                                        <FileText style={{ width: 14, height: 14, color: '#818cf8' }} />
                                        <span style={{ maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {att.name}
                                        </span>
                                        <button 
                                            type="button" 
                                            onClick={(e) => { e.stopPropagation(); removeAttachment(idx); }}
                                            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                                        >
                                            <X style={{ width: 14, height: 14 }} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Two Column: ประเภทปัญหา & ระดับความเร่งด่วน */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                                ประเภทปัญหา <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <select 
                                className="form-input form-select" 
                                required
                                value={issueType}
                                onChange={(e) => setIssueType(e.target.value)}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#0b0f19',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 8,
                                    padding: '0.75rem 1rem',
                                    color: issueType ? '#f8fafc' : '#94a3b8',
                                    fontSize: '0.95rem',
                                    outline: 'none'
                                }}
                            >
                                <option value="">-- เลือกประเภท --</option>
                                {issueTypes.map(t => (
                                    <option key={t.id} value={t.name}>{t.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                                ระดับความเร่งด่วน <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <select 
                                className="form-input form-select" 
                                required
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#0b0f19',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 8,
                                    padding: '0.75rem 1rem',
                                    color: '#f8fafc',
                                    fontSize: '0.95rem',
                                    outline: 'none'
                                }}
                            >
                                <option value="Low">Low — ไม่เร่งด่วน</option>
                                <option value="Medium">Medium — ทั่วไป</option>
                                <option value="High">High — ส่งผลต่อการทำงาน</option>
                                <option value="Urgent">Urgent — ต้องแก้ไขโดยด่วนที่สุด</option>
                            </select>
                        </div>
                    </div>

                    {/* สถานที่เกิดเหตุ */}
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                            สถานที่เกิดเหตุ <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input 
                            type="text" 
                            className="form-input" 
                            placeholder="เช่น ห้อง Lab 301 ชั้น 3 อาคาร IT" 
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={{
                                width: '100%',
                                backgroundColor: '#0b0f19',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 8,
                                padding: '0.75rem 1rem',
                                color: '#f8fafc',
                                fontSize: '0.95rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Section 2: ข้อมูลผู้แจ้ง */}
                <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600 }}>
                        <User style={{ width: 18, height: 18, color: '#818cf8' }} />
                        <span>ข้อมูลผู้แจ้ง</span>
                    </div>

                    {/* Two Column: ชื่อผู้แจ้ง & อีเมลติดต่อ */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                                ชื่อผู้แจ้ง <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className="form-input" 
                                placeholder="ชื่อ-นามสกุล" 
                                required 
                                value={requesterName}
                                onChange={(e) => setRequesterName(e.target.value)}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#0b0f19',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 8,
                                    padding: '0.75rem 1rem',
                                    color: '#f8fafc',
                                    fontSize: '0.95rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                                อีเมลติดต่อ
                            </label>
                            <input 
                                type="email" 
                                className="form-input" 
                                placeholder="email@example.com"
                                value={requesterEmail}
                                onChange={(e) => setRequesterEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#0b0f19',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 8,
                                    padding: '0.75rem 1rem',
                                    color: '#f8fafc',
                                    fontSize: '0.95rem',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    {/* กลุ่มผู้ใช้งาน */}
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                            กลุ่มผู้ใช้งาน <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <select 
                            className="form-input form-select" 
                            required
                            value={requesterGroup}
                            onChange={(e) => setRequesterGroup(e.target.value)}
                            style={{
                                width: '100%',
                                backgroundColor: '#0b0f19',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 8,
                                padding: '0.75rem 1rem',
                                color: '#f8fafc',
                                fontSize: '0.95rem',
                                outline: 'none'
                            }}
                        >
                            <option value="นักศึกษา">นักศึกษา</option>
                            <option value="อาจารย์">อาจารย์</option>
                            <option value="เจ้าหน้าที่">เจ้าหน้าที่</option>
                            <option value="ผู้ดูแลระบบ">ผู้ดูแลระบบ</option>
                            <option value="เจ้าหน้าที่ผู้รับผิดชอบงาน IT หรือผู้ดูแลอุปกรณ์">เจ้าหน้าที่ผู้รับผิดชอบงาน IT หรือผู้ดูแลอุปกรณ์</option>
                        </select>
                    </div>
                </div>

                {/* Bottom Action Buttons */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '2rem' }}>
                    <button 
                        type="button" 
                        onClick={() => router.push('/')}
                        disabled={submitting}
                        style={{
                            backgroundColor: '#1a2234',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            color: '#e2e8f0',
                            borderRadius: 8,
                            padding: '0.65rem 1.5rem',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#243048'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a2234'}
                    >
                        ยกเลิก
                    </button>
                    <button 
                        type="submit" 
                        disabled={submitting}
                        style={{
                            backgroundColor: '#5b68f5',
                            border: 'none',
                            color: '#ffffff',
                            borderRadius: 8,
                            padding: '0.65rem 1.6rem',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: submitting ? 'not-allowed' : 'pointer',
                            opacity: submitting ? 0.7 : 1,
                            boxShadow: '0 4px 14px rgba(91, 104, 245, 0.35)',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = '#4c58e0'; }}
                        onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = '#5b68f5'; }}
                    >
                        <Send style={{ width: 16, height: 16 }} />
                        {submitting ? 'กำลังส่งข้อมูล...' : 'ส่งแจ้งปัญหา'}
                    </button>
                </div>
            </form>
        </div>
    );
}
