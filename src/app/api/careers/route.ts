import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const jobTitle = (formData.get('jobTitle') as string) || 'General Application';
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const experience = formData.get('experience') as string;
        const currentCompany = (formData.get('currentCompany') as string) || 'N/A';
        const message = (formData.get('message') as string) || 'No additional message provided.';
        const resumeFile = formData.get('resume') as File | null;

        if (!name || !email || !phone || !experience) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields (name, email, phone, experience).' },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transport
        const host = process.env.SMTP_HOST || 'smtp.gmail.com';
        const port = parseInt(process.env.SMTP_PORT || '465', 10);
        const secure = process.env.SMTP_SECURE !== 'false';
        const user = process.env.SMTP_USER || 'clientleadbackup@gmail.com';
        const pass = process.env.SMTP_PASS || '';
        const from = process.env.SMTP_FROM || `"TechInvention Careers" <${user}>`;
        const to = process.env.SMTP_TO || 'clientleadbackup@gmail.com';

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {
                user,
                pass,
            },
        });

        // Prepare Attachment
        const attachments = [];
        if (resumeFile && typeof resumeFile.arrayBuffer === 'function') {
            const buffer = Buffer.from(await resumeFile.arrayBuffer());
            attachments.push({
                filename: resumeFile.name || 'resume.pdf',
                content: buffer,
                contentType: resumeFile.type || 'application/octet-stream',
            });
        }

        // Build Email HTML Content
        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
                .header { background-color: #1955A6; color: #ffffff; padding: 24px 30px; }
                .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
                .header p { margin: 4px 0 0 0; opacity: 0.85; font-size: 13px; }
                .content { padding: 30px; }
                .field-group { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
                .field-group:last-child { border-bottom: none; }
                .label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px; }
                .value { font-size: 15px; font-weight: 600; color: #0f172a; margin: 0; }
                .message-box { background: #f8fafc; border-left: 4px solid #1955A6; padding: 12px 16px; font-size: 14px; color: #334155; border-radius: 0 6px 6px 0; }
                .footer { background: #f1f5f9; padding: 16px 30px; text-size-adjust: 100%; font-size: 12px; color: #64748b; text-align: center; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Job Application Lead</h1>
                    <p>Position Applied: <strong>${jobTitle}</strong></p>
                </div>
                <div class="content">
                    <div class="field-group">
                        <div class="label">Position Title</div>
                        <div class="value">${jobTitle}</div>
                    </div>
                    <div class="field-group">
                        <div class="label">Full Name</div>
                        <div class="value">${name}</div>
                    </div>
                    <div class="field-group">
                        <div class="label">Email Address</div>
                        <div class="value"><a href="mailto:${email}" style="color: #1955A6; text-decoration: none;">${email}</a></div>
                    </div>
                    <div class="field-group">
                        <div class="label">Contact Phone</div>
                        <div class="value">${phone}</div>
                    </div>
                    <div class="field-group">
                        <div class="label">Years of Experience</div>
                        <div class="value">${experience}</div>
                    </div>
                    <div class="field-group">
                        <div class="label">Current Employer / Organization</div>
                        <div class="value">${currentCompany}</div>
                    </div>
                    <div class="field-group">
                        <div class="label">Cover Letter / Note</div>
                        <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
                    </div>
                    ${attachments.length > 0 ? `
                    <div class="field-group">
                        <div class="label">Attached Resume</div>
                        <div class="value">📎 ${attachments[0].filename}</div>
                    </div>` : ''}
                </div>
                <div class="footer">
                    Sent automatically from TechInvention Careers Form to <strong>${to}</strong>
                </div>
            </div>
        </body>
        </html>
        `;

        const mailOptions = {
            from,
            to,
            subject: `[Career Lead] ${name} - Application for ${jobTitle}`,
            text: `New Application Received:\n\nPosition: ${jobTitle}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nExperience: ${experience}\nCurrent Company: ${currentCompany}\nMessage: ${message}`,
            html: htmlContent,
            attachments,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Application lead successfully sent to HR.',
        });
    } catch (err: any) {
        console.error('Error handling careers application email:', err);
        return NextResponse.json(
            {
                success: false,
                error: err?.message || 'Failed to submit career application. Please try again later.',
            },
            { status: 500 }
        );
    }
}
