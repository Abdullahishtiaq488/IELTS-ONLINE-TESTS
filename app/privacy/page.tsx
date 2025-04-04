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
                    <div className="max-w-4xl mx-auto prose prose-primary">
                        <p className="lead">
                            At The IELTS Project, we are committed to protecting your privacy and ensuring the security of your personal information.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                            or use our services.
                        </p>

                        <h2>1. Information We Collect</h2>
                        <p>
                            We collect information that you provide directly to us when you:
                        </p>
                        <ul>
                            <li>Register for an account</li>
                            <li>Complete a profile</li>
                            <li>Submit or take a practice test</li>
                            <li>Communicate with us via email, contact forms, or other methods</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Participate in surveys or promotions</li>
                        </ul>

                        <p>This information may include:</p>
                        <ul>
                            <li>Personal identifiers (name, email address, phone number)</li>
                            <li>Account credentials</li>
                            <li>Demographic information</li>
                            <li>Payment information (processed securely through third-party payment processors)</li>
                            <li>Educational background and IELTS preparation history</li>
                            <li>Test results and performance data</li>
                        </ul>

                        <p>We also automatically collect certain information when you visit our website, including:</p>
                        <ul>
                            <li>IP address and device information</li>
                            <li>Browser type and version</li>
                            <li>Usage patterns and navigation behavior</li>
                            <li>Referring websites or sources</li>
                            <li>Session duration and page views</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
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

                        <h2>3. Sharing of Your Information</h2>
                        <p>We may share your information with:</p>
                        <ul>
                            <li>Service providers who perform services on our behalf</li>
                            <li>Analytics providers who help us understand website usage</li>
                            <li>Payment processors to complete transactions</li>
                            <li>Business partners with whom we offer co-branded services or promotions</li>
                            <li>Legal authorities when required by law or to protect our rights</li>
                        </ul>

                        <p>
                            We do not sell your personal information to third parties for marketing purposes.
                        </p>

                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information
                            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                            over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>

                        <h2>5. Your Rights and Choices</h2>
                        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                        <ul>
                            <li>Access to your personal information</li>
                            <li>Correction of inaccurate or incomplete information</li>
                            <li>Deletion of your personal information</li>
                            <li>Restriction of processing</li>
                            <li>Data portability</li>
                            <li>Objection to processing</li>
                        </ul>

                        <p>
                            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                        </p>

                        <h2>6. Children's Privacy</h2>
                        <p>
                            Our services are not directed to children under the age of 16. We do not knowingly collect personal
                            information from children under 16. If you believe we have collected information from a child under 16,
                            please contact us immediately.
                        </p>

                        <h2>7. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                            new Privacy Policy on this page and updating the "Last updated" date.
                        </p>

                        <h2>8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                        </p>

                        <p>
                            Email: privacy@theieltsproject.com<br />
                            Address: 123 Academic Street, Suite 101, London, UK
                        </p>

                        <div className="mt-12 text-center text-primary-600">
                            <p>By using The IELTS Project, you acknowledge that you have read and understood this Privacy Policy.</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 