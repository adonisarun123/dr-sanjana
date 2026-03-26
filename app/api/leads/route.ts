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
        replyTo: email || undefined,
        subject: `New Lead [${center}]: ${fullName} - ${concern || data.service || 'Consultation'}`,
        html: `
          <div style="font-family: sans-serif; padding: 0; border: 1px solid #f0e6df; border-radius: 16px; max-width: 600px; margin: auto; background-color: #ffffff; overflow: hidden;">
            <div style="background-color: #8B5E83; padding: 32px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-family: serif; letter-spacing: 0.5px;">New Patient Consultation</h1>
              <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">Lead captured for <strong>${center}</strong></p>
            </div>
            
            <div style="padding: 32px 24px;">
              <div style="margin-bottom: 24px;">
                <h3 style="color: #2D2D2D; border-bottom: 2px solid #FFF8F0; padding-bottom: 8px; margin-bottom: 16px; font-size: 18px;">Patient Information</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #6B6B6B; width: 140px; font-size: 14px;">Full Name:</td>
                    <td style="padding: 8px 0; color: #2D2D2D; font-weight: 600; font-size: 14px;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6B6B6B; font-size: 14px;">Phone Number:</td>
                    <td style="padding: 8px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #8B5E83; text-decoration: none; font-weight: 600;">${phone}</a></td>
                  </tr>
                  ${email ? `
                  <tr>
                    <td style="padding: 8px 0; color: #6B6B6B; font-size: 14px;">Email Address:</td>
                    <td style="padding: 8px 0; color: #2D2D2D; font-size: 14px;">${email}</td>
                  </tr>` : ''}
                </table>
              </div>

              <div style="margin-bottom: 24px;">
                <h3 style="color: #2D2D2D; border-bottom: 2px solid #FFF8F0; padding-bottom: 8px; margin-bottom: 16px; font-size: 18px;">Appointment Details</h3>
                <div style="background-color: #FFF8F0; border-radius: 12px; padding: 20px;">
                  <p style="margin: 0 0 12px; color: #2D2D2D; font-size: 14px;"><strong>Service:</strong> ${concern || data.service || 'General Consultation'}</p>
                  ${preferredDate ? `<p style="margin: 0 0 12px; color: #2D2D2D; font-size: 14px;"><strong>Preferred Slot:</strong> ${preferredDate} at ${preferredTime || 'Anytime'}</p>` : ''}
                  ${visitType ? `<p style="margin: 0 0 12px; color: #2D2D2D; font-size: 14px;"><strong>Type:</strong> ${visitType}</p>` : ''}
                  ${description ? `<div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e8e0db; color: #4A4A4A; font-style: italic; font-size: 14px;">"${description}"</div>` : ''}
                </div>
              </div>

              <div style="padding-top: 24px; border-top: 1px solid #f0f0f0;">
                <p style="font-size: 13px; color: #9B9B9B; margin: 0 0 4px;"><strong>Source:</strong> ${source || 'Website'}</p>
                <p style="font-size: 13px; color: #9B9B9B; margin: 0;"><strong>URL:</strong> <a href="${sourceUrl}" style="color: #2A6B5A; text-decoration: none;">${sourceUrl}</a></p>
                ${referral ? `<p style="font-size: 13px; color: #9B9B9B; margin: 8px 0 0;"><strong>Referral:</strong> ${referral}</p>` : ''}
              </div>
            </div>

            <div style="background-color: #F9F9F9; padding: 20px 24px; font-size: 12px; color: #777; border-top: 1px solid #eeeeee;">
              <div style="margin-bottom: 12px;">
                <strong>Advertising Attribution:</strong><br/>
                Source: ${utm_source || 'direct'} | Medium: ${utm_medium || 'none'} | Campaign: ${utm_campaign || 'none'}
              </div>
              <p style="margin: 0; color: #BBBBBB;">This is an automated notification from Health Nest Patient Management System.</p>
            </div>
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
