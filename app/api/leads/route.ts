import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      fullName,
      phone,
      concern,
      center,
      source,
      sourceUrl,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      // Appointment specific fields
      email,
      preferredDate,
      preferredTime,
      visitType,
      description,
      referral
    } = data;

    // 1. Store in Database
    const lead = await prisma.lead.create({
      data: {
        fullName,
        phone,
        concern: concern || data.service || 'General Consultation',
        center: center || 'Not Specified',
        source: source || 'Direct',
        sourceUrl: sourceUrl || 'Unknown',
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
        utm_term: utm_term || null,
        utm_content: utm_content || null,
        ipAddress: req.headers.get('x-forwarded-for') || 'unknown',
        email: email || null,
        preferredDate: preferredDate || null,
        preferredTime: preferredTime || null,
        visitType: visitType || null,
        description: description || null,
        referral: referral || null,
      },
    });

    // 2. Send Email Notification via SMTP if configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const hsrEmail = 'healthnest2010@yahoo.in';
      const attibeleEmail = 'raghavahospital2002@gmail.com';
      
      // Route based on center
      const destinationEmail = center === 'Attibele' ? attibeleEmail : hsrEmail;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || `"Health Nest Leads" <${process.env.SMTP_USER}>`,
        to: destinationEmail,
        subject: `New Lead [${center}]: ${fullName} - ${concern || data.service || 'Consultation'}`,
        html: `
          <div style="font-family: sans-serif; padding: 24px; border: 1px solid #f0f0f0; border-radius: 16px; max-width: 600px; margin: auto; background-color: #ffffff;">
            <h2 style="color: #8B5E83; margin-top: 0; font-family: serif;">New Consultation Request</h2>
            <p style="font-size: 16px; color: #333;">A new lead has been captured from the website.</p>
            
            <div style="background: #FFF8F0; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${fullName}</p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #8B5E83; text-decoration: none;">${phone}</a></p>
              ${email ? `<p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>` : ''}
              <p style="margin: 8px 0;"><strong>Concern/Service:</strong> ${concern || data.service || 'General'}</p>
              <p style="margin: 8px 0;"><strong>Preferred Center:</strong> ${center || 'Not Specified'}</p>
              ${preferredDate ? `<p style="margin: 8px 0;"><strong>Preferred Date:</strong> ${preferredDate} (${preferredTime || 'Anytime'})</p>` : ''}
              ${visitType ? `<p style="margin: 8px 0;"><strong>Visit Type:</strong> ${visitType}</p>` : ''}
              ${description ? `<p style="margin: 8px 0;"><strong>Message:</strong> ${description}</p>` : ''}
            </div>

            <div style="padding: 10px 0; border-top: 1px solid #eee;">
              <p style="font-size: 13px; color: #666; margin: 4px 0;"><strong>Lead Source:</strong> ${source || 'Website Form'}</p>
              <p style="font-size: 13px; color: #666; margin: 4px 0;"><strong>Captured on URL:</strong> <a href="${sourceUrl}" style="color: #2A6B5A;">${sourceUrl}</a></p>
              ${referral ? `<p style="font-size: 13px; color: #666; margin: 4px 0;"><strong>Patient heard via:</strong> ${referral}</p>` : ''}
            </div>

            <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; margin-top: 15px; font-size: 12px; color: #777;">
              <strong>Campaign Details:</strong><br/>
              Source: ${utm_source || 'direct'} | Medium: ${utm_medium || 'none'} | Campaign: ${utm_campaign || 'none'}
            </div>
            
            <p style="font-size: 11px; color: #999; text-align: center; margin-top: 25px;">
              This is an automated notification from Health Nest Patient Management System.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ success: true, id: lead.id });
  } catch (error: any) {
    console.error('Lead Submission Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
