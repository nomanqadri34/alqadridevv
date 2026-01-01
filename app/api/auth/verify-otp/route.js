import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/lib/models/User';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        await dbConnect();
        const { email, otp } = await request.json();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const isValid = user.verifyOTP(otp);
        if (!isValid) {
            return NextResponse.json({ message: 'Invalid or expired OTP' }, { status: 400 });
        }

        // Clear OTP after successful verification
        user.otp = undefined;
        user.isVerified = true;
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET || 'fallback_secret', // Ideally force env var
            { expiresIn: '24h' }
        );

        return NextResponse.json({
            token,
            user: {
                id: user._id,
                email: user.email,
                isAdmin: user.isAdmin
            }
        });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return NextResponse.json({ message: 'Error verifying OTP' }, { status: 500 });
    }
}
