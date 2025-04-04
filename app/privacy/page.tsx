import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export const metadata = {
    title: 'Privacy Policy | The IELTS Project',
    description: 'Learn how The IELTS Project collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="flex-1">
            <Section background="blue-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Privacy Policy</h1>
                        <p className="text-lg text-primary-700">
                            Last updated: June 1, 2024
                        </p>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
                            <div className="prose prose-lg prose-primary mx-auto">
                                <p className="text-xl text-primary-800 leading-relaxed mb-8">
                                    At The IELTS Project, we are committed to protecting your privacy and ensuring the security of your personal information.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                                    or use our services.
                                </p>

                                <div className="mb-12 border-b border-primary-100 pb-8">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                                        <span className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">1</span>
                                        Information We Collect
                                    </h2>
                                    <p className="mb-4">
                                        We collect information that you provide directly to us when you:
                                    </p>
                                    <ul className="list-disc pl-8 mb-6 space-y-2 text-primary-700">
                                        <li>Register for an account</li>
                                        <li>Complete a profile</li>
                                        <li>Submit or take a practice test</li>
                                        <li>Communicate with us via email, contact forms, or other methods</li>
                                        <li>Subscribe to our newsletter</li>
                                        <li>Participate in surveys or promotions</li>
                                    </ul>

                                    <p className="mb-4">This information may include:</p>
                                    <ul className="list-disc pl-8 mb-6 space-y-2 text-primary-700">
                                        <li>Personal identifiers (name, email address, phone number)</li>
                                        <li>Account credentials</li>
                                        <li>Demographic information</li>
                                        <li>Payment information (processed securely through third-party payment processors)</li>
                                        <li>Educational background and IELTS preparation history</li>
                                        <li>Test results and performance data</li>
                                    </ul>

                                    <p className="mb-4">We also automatically collect certain information when you visit our website, including:</p>
                                    <ul className="list-disc pl-8 mb-2 space-y-2 text-primary-700">
                                        <li>IP address and device information</li>
                                        <li>Browser type and version</li>
                                        <li>Usage patterns and navigation behavior</li>
                                        <li>Referring websites or sources</li>
                                        <li>Session duration and page views</li>
                                    </ul>
                                </div>

                                <div className="mb-12 border-b border-primary-100 pb-8">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                                        <span className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">2</span>
                                        How We Use Your Information
                                    </h2>
                                    <p className="mb-4">We use the information we collect to:</p>
                                    <ul className="list-disc pl-8 mb-2 space-y-2 text-primary-700">
                                        <li>Provide, maintain, and improve our services</li>
                                        <li>Create and manage your account</li>
                                        <li>Process transactions and send related information</li>
                                        <li>Personalize your experience and deliver tailored content</li>
                                        <li>Track and analyze your test performance</li>
                                        <li>Communicate with you about services, updates, and promotions</li>
                                        <li>Respond to your inquiries and provide customer support</li>
                                        <li>Monitor and analyze usage patterns and trends</li>
                                        <li>Protect against unauthorized access and potential abuse</li>
                                        <li>Comply with legal obligations</li>
                                    </ul>
                                </div>

                                <div className="mb-12 border-b border-primary-100 pb-8">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                                        <span className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">3</span>
                                        Sharing of Your Information
                                    </h2>
                                    <p className="mb-4">We may share your information with:</p>
                                    <ul className="list-disc pl-8 mb-6 space-y-2 text-primary-700">
                                        <li>Service providers who perform services on our behalf</li>
                                        <li>Analytics providers who help us understand website usage</li>
                                        <li>Payment processors to complete transactions</li>
                                        <li>Business partners with whom we offer co-branded services or promotions</li>
                                        <li>Legal authorities when required by law or to protect our rights</li>
                                    </ul>

                                    <p className="mb-2 text-primary-800 font-medium">
                                        We do not sell your personal information to third parties for marketing purposes.
                                    </p>
                                </div>

                                <div className="mb-12 border-b border-primary-100 pb-8">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                                        <span className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">4</span>
                                        Data Security
                                    </h2>
                                    <p className="mb-2">
                                        We implement appropriate technical and organizational measures to protect your personal information
                                        against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                                        over the Internet or electronic storage is 100&percnt; secure, and we cannot guarantee absolute security.
                                    </p>
                                </div>

                                <div className="mb-12 border-b border-primary-100 pb-8">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                                        <span className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">5</span>
                                        Your Rights and Choices
                                    </h2>
                                    <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
                                    <ul className="list-disc pl-8 mb-6 space-y-2 text-primary-700">
                                        <li>Access to your personal information</li>
                                        <li>Correction of inaccurate or incomplete information</li>
                                        <li>Deletion of your personal information</li>
                                        <li>Restriction of processing</li>
                                        <li>Data portability</li>
                                        <li>Objection to processing</li>
                                    </ul>

                                    <p className="mb-2">
                                        To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
                                    </p>
                                </div>

                                <div className="mb-12 border-b border-primary-100 pb-8">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                                        <span className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">6</span>
                                        Children's Privacy
                                    </h2>
                                    <p className="mb-2">
                                        Our services are not directed to children under the age of 16. We do not knowingly collect personal
                                        information from children under 16. If you believe we have collected information from a child under 16,
                                        please contact us immediately.
                                    </p>
                                </div>

                                <div className="mb-12 border-b border-primary-100 pb-8">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                                        <span className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">7</span>
                                        Changes to This Privacy Policy
                                    </h2>
                                    <p className="mb-2">
                                        We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                                        operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                                        new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                                    </p>
                                </div>

                                <div className="mb-12 pb-8">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                                        <span className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">8</span>
                                        Contact Us
                                    </h2>
                                    <p className="mb-6">
                                        If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                                    </p>

                                    <div className="bg-primary-50 p-6 rounded-lg mb-6">
                                        <p className="font-medium text-primary-900 mb-1">Email:</p>
                                        <p className="text-primary-700 mb-4">privacy@theieltsproject.com</p>

                                        <p className="font-medium text-primary-900 mb-1">Address:</p>
                                        <p className="text-primary-700">123 Academic Street, Suite 101, London, UK</p>
                                    </div>
                                </div>

                                <div className="mt-12 text-center border-t border-primary-100 pt-8">
                                    <p className="text-primary-600 font-medium">By using The IELTS Project, you acknowledge that you have read and understood this Privacy Policy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 