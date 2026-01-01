import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/lib/models/User';
import nodemailer from 'nodemailer';

// Gmail SMTP Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export async function POST(request) {
    try {
        await dbConnect();
        const { email } = await request.json();

        // Find or create user
        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ email });
        }

        // Generate OTP
        const otp = user.generateOTP();
        await user.save();

        // Send OTP email via Gmail SMTP
        const mailOptions = {
            from: `"Al Qadri Dev" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Your Login OTP - Al Qadri Dev',
            html: `
                <html>
                <body style="font-family: 'Inter', Arial, sans-serif; background-color: #f9fafb; padding: 40px 20px;">
                    <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #1e293b; margin: 0;">Al Qadri Dev</h1>
                            <p style="color: #64748b; margin-top: 8px;">Full Stack & AI/ML Developer</p>
                        </div>
                        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #f59e0b, #fbbf24); border-radius: 12px; margin-bottom: 24px;">
                            <p style="color: white; margin: 0 0 10px 0; font-size: 14px;">Your One-Time Password</p>
                            <h2 style="color: white; font-size: 36px; letter-spacing: 8px; margin: 0; font-weight: bold;">${otp}</h2>
                        </div>
                        <p style="color: #64748b; text-align: center; font-size: 14px;">This OTP will expire in <strong>10 minutes</strong>.</p>
                        <p style="color: #94a3b8; text-align: center; font-size: 12px; margin-top: 30px;">If you didn't request this, please ignore this email.</p>
                    </div>
                </body>
                </html>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error.message);
        return NextResponse.json({ message: 'Error sending OTP', error: error.message }, { status: 500 });
    }
}

