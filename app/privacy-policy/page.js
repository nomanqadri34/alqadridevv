import React from 'react';

export const metadata = {
    title: 'Privacy Policy - Mohd Noman Qadri',
    description: 'Privacy Policy for Mohd Noman Qadri Portfolio',
};

const PrivacyPolicy = () => {
    return (
        <section className="w-full min-h-screen bg-background py-16 px-4 sm:px-6 font-sans text-text-main">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <header className="mb-10 pb-6 border-b border-gray-100 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
                    <p className="text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
                </header>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name and contact information</li>
                            <li>Email address</li>
                            <li>Messages you send through our contact form</li>
                            <li>Information about your device and internet connection</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and maintain our services</li>
                            <li>Respond to your inquiries and requests</li>
                            <li>Send you updates and marketing communications</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">3. Information Sharing</h2>
                        <p className="mb-4">We do not sell or rent your personal information to third parties. We may share your information with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Service providers who assist in our operations</li>
                            <li>Professional advisors and consultants</li>
                            <li>Law enforcement when required by law</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                        <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Regular security assessments</li>
                            <li>Access controls and authentication</li>
                            <li>Secure data storage practices</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">6. Cookies and Tracking</h2>
                        <p className="mb-4">We use cookies and similar tracking technologies to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Remember your preferences</li>
                            <li>Analyze website traffic</li>
                            <li>Improve user experience</li>
                            <li>Provide personalized content</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">7. Children's Privacy</h2>
                        <p className="mb-4">Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">8. Changes to This Policy</h2>
                        <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.</p>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
                        <p className="mb-4">If you have any questions about this privacy policy, please contact us at:</p>
                        <div className="space-y-2 font-medium">
                            <p>Email: <a href="mailto:nomanqadri@alqadridev.in" className="text-primary hover:underline">nomanqadri@alqadridev.in</a></p>
                            <p>Phone: <a href="tel:+916392525639" className="text-primary hover:underline">+91 6392525639</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
