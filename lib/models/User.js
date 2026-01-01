import mongoose from 'mongoose';
// bcrypt is imported in original but not used in the schema shown. Keeping imports clean.
// import bcrypt from 'bcryptjs'; 

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    otp: {
        code: String,
        expiresAt: Date
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Generate OTP
userSchema.methods.generateOTP = function () {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otp = {
        code: otp,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000) // OTP expires in 10 minutes
    };
    return otp;
};

// Verify OTP
userSchema.methods.verifyOTP = function (otp) {
    if (!this.otp || !this.otp.code || !this.otp.expiresAt) {
        return false;
    }
    if (this.otp.expiresAt < Date.now()) {
        return false;
    }
    return this.otp.code === otp;
};

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
