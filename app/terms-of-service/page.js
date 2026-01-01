import React from 'react';

export const metadata = {
    title: 'Terms of Service - Mohd Noman Qadri',
    description: 'Terms of Service for Mohd Noman Qadri Portfolio',
};

const TermsOfService = () => {
    return (
        <section className="w-full min-h-screen bg-background py-16 px-4 sm:px-6 font-sans text-text-main">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <header className="mb-10 pb-6 border-b border-gray-100 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
                    <p className="text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
                </header>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
                        <p className="mb-4">By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
                        <p className="mb-4">Permission is granted to temporarily access the materials on our website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose</li>
                            <li>Attempt to decompile or reverse engineer any software</li>
                            <li>Remove any copyright or proprietary notations</li>
                            <li>Transfer the materials to another person</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
                        <p className="mb-4">The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Implied warranties of merchantability</li>
                            <li>Fitness for a particular purpose</li>
                            <li>Non-infringement of intellectual property</li>
                            <li>Accuracy, reliability, and availability of the website</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
                        <p className="mb-4">In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">5. User Content</h2>
                        <p className="mb-4">Users may post content as long as it isn't illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                        <p className="mb-4">The content on this website, including without limitation:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Text, graphics, logos, and images</li>
                            <li>Software and functionality</li>
                            <li>Website design and organization</li>
                            <li>Data and databases</li>
                        </ul>
                        <p className="mt-4">are owned by us or our licensors and are protected by copyright and other intellectual property laws.</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">7. Termination</h2>
                        <p className="mb-4">We may terminate or suspend access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
                        <p className="mb-4">These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">9. Changes to Terms</h2>
                        <p className="mb-4">We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date of these terms.</p>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
                        <p className="mb-4">For any questions regarding these Terms of Service, please contact us at:</p>
                        <div className="space-y-2 font-medium">
                            <p>Email: <a href="mailto:al.qadri.web.dev@gmail.com" className="text-primary hover:underline">al.qadri.web.dev@gmail.com</a></p>
                            <p>Phone: <a href="tel:+916392525639" className="text-primary hover:underline">+91 6392525639</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default TermsOfService;
