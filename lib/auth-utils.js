import jwt from 'jsonwebtoken';

export async function verifyAdmin(request) {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
        throw new Error('Authentication required');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        if (!decoded.isAdmin) {
            throw new Error('Admin access required');
        }
        return decoded;
    } catch (error) {
        if (error.message === 'Admin access required') throw error;
        throw new Error('Invalid token');
    }
}
