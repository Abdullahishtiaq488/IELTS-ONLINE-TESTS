                                                                    import React from 'react';
import { Section } from '@/components/ui/section';
import ContactForm from '@/components/forms/contact-form';

export default function ContactSection() {
    return (
        <Section background="gray">
            <div className="max-w-3xl mx-auto">
                <ContactForm />
            </div>
        </Section>
    );
} 