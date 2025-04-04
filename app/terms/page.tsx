import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export const metadata = {
    title: 'Terms & Conditions | The IELTS Project',
    description: 'Read about the terms and conditions governing the use of The IELTS Project platform.',
};

export default function TermsPage() {
    return (
        <main className="flex-1">
            <Section background="blue-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Terms & Conditions</h1>
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
                            These Terms & Conditions govern your use of The IELTS Project platform and all related services.
                            Please read them carefully before using our platform.
                        </p>

                        <h2>2. Definitions</h2>
                        <p>
                            &quot;Service&quot; or &quot;Platform&quot; refers to The IELTS Project website and all related services.
                            &quot;User&quot; refers to any individual who accesses or uses the Service.
                            &quot;Content&quot; refers to all materials available on the Service, including text, images, audio, and interactive features.
                        </p>

                        <h2>3. Account Registration</h2>
                        <p>
                            To access certain features of the Platform, you may need to register for an account. You agree to provide accurate
                            information during the registration process and to keep your account credentials secure. You are solely responsible
                            for any activity that occurs under your account.
                        </p>

                        <h2>4. Intellectual Property Rights</h2>
                        <p>
                            All content on the Platform, including but not limited to IELTS practice tests, study materials, and educational resources,
                            is the property of The IELTS Project or its licensors and is protected by intellectual property laws. You may not reproduce,
                            distribute, modify, or create derivative works of the Content without explicit permission.
                        </p>

                        <h2>5. User Conduct</h2>
                        <p>
                            You agree not to:
                        </p>
                        <ul>
                            <li>Use the Platform for any illegal purpose or in violation of any laws</li>
                            <li>Share your account credentials with others or allow multiple users to access the Platform through a single account</li>
                            <li>Attempt to bypass any security measures or access restricted areas of the Platform</li>
                            <li>Upload or share any content that infringes on third-party rights or contains malware</li>
                            <li>Engage in any activity that disrupts or interferes with the proper functioning of the Service</li>
                        </ul>

                        <h2>6. Payment Terms</h2>
                        <p>
                            Some features of the Platform may require payment. All payments are processed securely through our payment providers.
                            By making a payment, you agree to the terms and conditions of the payment processor. Subscription services will
                            automatically renew unless canceled prior to the renewal date.
                        </p>

                        <h2>7. Limitation of Liability</h2>
                        <p>
                            The IELTS Project provides educational resources and practice materials for IELTS preparation, but we do not guarantee specific
                            test results. We are not responsible for any outcomes resulting from the use of our Platform, including but not limited to
                            IELTS test scores. The Service is provided &quot;as is&quot; without warranties of any kind.
                        </p>

                        <h2>8. Privacy Policy</h2>
                        <p>
                            Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
                            Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                        </p>

                        <h2>9. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend your account and access to the Platform at our sole discretion,
                            without notice, for any reason, including but not limited to a breach of these Terms.
                        </p>

                        <h2>10. Changes to Terms</h2>
                        <p>
                            We may revise these Terms at any time by updating this page. By continuing to use the Platform after any changes
                            to the Terms, you accept and agree to be bound by the revised Terms.
                        </p>

                        <h2>11. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at support@theieltsproject.com.
                        </p>

                        <div className="mt-12 text-center text-primary-600">
                            <p>By using The IELTS Project, you acknowledge that you have read, understood, and agree to these Terms & Conditions.</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 