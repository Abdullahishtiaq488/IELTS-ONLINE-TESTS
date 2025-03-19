import React from 'react';
import { Section } from '@/components/ui/section';
import ContactForm from '@/components/forms/contact-form';

export default function ContactPage() {
  return (
    <div className="py-10 bg-gray-50">
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </div>
  );
} 