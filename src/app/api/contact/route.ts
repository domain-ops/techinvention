import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const name = (body.name || '').trim();
        const email = (body.email || '').trim();
        const phone = (body.phone || '').trim();
        const organisation = (body.organisation || 'N/A').trim();
        const enquiryType = (body.enquiryType || 'General Support').trim();
        const message = (body.message || 'No additional message provided.').trim();

        // Required field validation
        if (!name || !email || !phone || !enquiryType) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields (Name, Email, Contact Number, Enquiry Type).' },
                { status: 400 }
            );
        }

        // Validate Full Name: Accept letters and spaces only
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            return NextResponse.json(
                { success: false, error: 'Full Name must contain only letters and spaces.' },
                { status: 400 }
            );
        }

        // Validate Contact Number: Accept exactly 10 numeric digits
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length !== 10) {
            return NextResponse.json(
                { success: false, error: 'Contact number must be exactly 10 numeric digits.' },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transport
        const host = process.env.SMTP_HOST || 'smtp.gmail.com';
        const port = parseInt(process.env.SMTP_PORT || '465', 10);
        const secure = process.env.SMTP_SECURE !== 'false';
        const user = process.env.SMTP_USER || 'clientleadbackup@gmail.com';
        const pass = process.env.SMTP_PASS || '';
        const from = process.env.SMTP_FROM || `"TechInvention Support" <${user}>`;
        const to = process.env.SMTP_CONTACT_TO || process.env.SMTP_TO || 'connect@techinvention.biz';

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {
                user,
                pass,
            },
        });

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
                .footer { background: #f1f5f9; padding: 16px 30px; font-size: 12px; color: #64748b; text-align: center; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Website Contact Enquiry</h1>
                    <p>Enquiry Type: <strong>${enquiryType}</strong></p>
                </div>
                <div class="content">
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
                        <div class="value">${cleanPhone}</div>
                    </div>
                    <div class="field-group">
                        <div class="label">Organisation</div>
                        <div class="value">${organisation}</div>
                    </div>
                    <div class="field-group">
                        <div class="label">Enquiry Type</div>
                        <div class="value">${enquiryType}</div>
                    </div>
                    <div class="field-group">
                        <div class="label">Message</div>
                        <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
                    </div>
                </div>
                <div class="footer">
                    Sent automatically from TechInvention Contact Form to <strong>${to}</strong>
                </div>
            </div>
        </body>
        </html>
        `;

        const mailOptions = {
            from,
            to,
            subject: `[Contact Lead] ${name} - ${enquiryType}`,
            text: `New Contact Enquiry Received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${cleanPhone}\nOrganisation: ${organisation}\nEnquiry Type: ${enquiryType}\nMessage: ${message}`,
            html: htmlContent,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Your enquiry has been successfully submitted to connect@techinvention.biz.',
        });
    } catch (err: any) {
        console.error('Error handling contact form email:', err);
        return NextResponse.json(
            {
                success: false,
                error: err?.message || 'Failed to submit enquiry. Please try again later.',
            },
            { status: 500 }
        );
    }
}
