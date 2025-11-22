import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      region,
      productInterest,
      quantity,
      packaging,
      message,
    } = body;

    // Validasi required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get contact email from env or use default
    const contactEmail = process.env.CONTACT_EMAIL || 'info@company.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // Kirim email
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>New Contact Inquiry</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      padding: 20px 10px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .logo-section {
      background-color: #ffffff;
      padding: 25px 20px;
      text-align: center;
      border-bottom: 1px solid #e0e0e0;
    }
    .logo-section img {
      max-width: 180px;
      height: auto;
      display: inline-block;
    }
    .header {
      background: linear-gradient(135deg, #E50000 0%, #B30000 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
    .header p {
      font-size: 14px;
      margin-top: 8px;
      opacity: 0.95;
    }
    .content {
      padding: 30px 25px;
    }
    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #E50000;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #f0f0f0;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #666;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .value {
      color: #333;
      font-size: 15px;
      padding: 10px 12px;
      background-color: #f9f9f9;
      border-radius: 4px;
      border-left: 3px solid #E50000;
    }
    .value a {
      color: #E50000;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .value a:hover {
      color: #B30000;
      text-decoration: underline;
    }
    .message-box {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 4px;
      border-left: 3px solid #E50000;
      line-height: 1.7;
      color: #444;
      font-size: 14px;
    }
    .footer {
      background-color: #f9f9f9;
      padding: 20px 25px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
    .footer p {
      font-size: 12px;
      color: #888;
      margin: 5px 0;
    }
    .divider {
      height: 1px;
      background-color: #e0e0e0;
      margin: 25px 0;
    }
    @media only screen and (max-width: 600px) {
      body {
        padding: 10px 5px;
      }
      .content {
        padding: 20px 15px;
      }
      .header {
        padding: 25px 15px;
      }
      .header h1 {
        font-size: 20px;
      }
      .logo-section {
        padding: 20px 15px;
      }
      .logo-section img {
        max-width: 150px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo-section">
      <img src="https://uc1d3129e85c7533501da33967ea.dl.dropboxusercontent.com/cd/0/inline/C1qtRYM_nKonkEd9H7Bj4_ZR19Y_Mv5c_Wz0oJ4mz1S7qzC8k9Fy4oNehmRjDqc4PH7NHq3X04xnwI6InHmuH4-g4F40_1liXLZLgQIGF58Zo2dXRbb7kHdlAC01lSicx094jaEujMa8jLTDI_y9KUh0/file#" alt="Charcoal Craft">
    </div>
    
    <div class="header">
      <h1>📬 New Contact Form Inquiry</h1>
      <p>You have received a new message from your website</p>
    </div>
    
    <div class="content">
      <div class="section-title">Contact Information</div>
      
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${firstName} ${lastName}</div>
      </div>
      
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      
      ${region || productInterest || quantity || packaging ? '<div class="divider"></div><div class="section-title">Inquiry Details</div>' : ''}
      
      ${region ? `
      <div class="field">
        <div class="label">Region</div>
        <div class="value">${region}</div>
      </div>
      ` : ''}
      
      ${productInterest ? `
      <div class="field">
        <div class="label">Product Interest</div>
        <div class="value">${productInterest}</div>
      </div>
      ` : ''}
      
      ${quantity ? `
      <div class="field">
        <div class="label">Quantity Required</div>
        <div class="value">${quantity}</div>
      </div>
      ` : ''}
      
      ${packaging ? `
      <div class="field">
        <div class="label">Preferred Packaging</div>
        <div class="value">${packaging}</div>
      </div>
      ` : ''}
      
      ${message ? `
      <div class="divider"></div>
      <div class="section-title">Message</div>
      <div class="field">
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}
    </div>
    
    <div class="footer">
      <p><strong>Received:</strong> ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
      <p style="margin-top: 10px; color: #aaa;">This is an automated message from your contact form</p>
    </div>
  </div>
</body>
</html>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

