import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export const metadata = {
    title: 'Frequently Asked Questions | The IELTS Project',
    description: 'Find answers to commonly asked questions about The IELTS Project, IELTS preparation, and our resources.',
};

const faqs = [
    {
        question: "What is The IELTS Project?",
        answer: "The IELTS Project is a comprehensive IELTS preparation platform that provides high-quality mock tests, practice materials, and resources to help students prepare for their IELTS exam and achieve their target scores."
    },
    {
        question: "Are your practice tests free?",
        answer: "Yes, we offer free IELTS mock tests covering all four sections: Reading, Writing, Listening, and Speaking. We believe in making quality IELTS preparation accessible to everyone."
    },
    {
        question: "How similar are your practice tests to the real IELTS exam?",
        answer: "Our practice tests are designed to closely mimic the format, difficulty level, and timing of the official IELTS exam. They are created by experienced IELTS teachers and follow the latest exam patterns."
    },
    {
        question: "Do you offer both Academic and General Training modules?",
        answer: "Yes, we provide practice materials for both the Academic and General Training modules of the IELTS exam, covering all the necessary components for comprehensive preparation."
    },
    {
        question: "How can I track my progress?",
        answer: "Our platform includes a progress tracking system that allows you to monitor your performance over time. You can see your scores for each test, identify your strengths and weaknesses, and track your improvement."
    },
    {
        question: "Do you provide feedback on Writing and Speaking tasks?",
        answer: "Yes, we offer detailed feedback on Writing and Speaking tasks through our AI-powered assessment system. For more personalized feedback, we also have options for expert evaluation from IELTS trainers."
    },
    {
        question: "Can I access the platform on mobile devices?",
        answer: "Yes, The IELTS Project is fully responsive and can be accessed on smartphones, tablets, laptops, and desktop computers, allowing you to practice anytime, anywhere."
    },
    {
        question: "How often do you update your practice materials?",
        answer: "We regularly update our practice materials to reflect any changes in the IELTS exam format and to ensure that our content remains relevant and effective for preparation."
    },
    {
        question: "Do you offer any study plans or guidance?",
        answer: "Yes, we provide customized study plans based on your target score, available preparation time, and current English proficiency level. Our tips section also offers valuable guidance for effective IELTS preparation."
    },
    {
        question: "How can I contact support if I have questions?",
        answer: "You can reach our support team through the Contact Us page on our website. We aim to respond to all inquiries within 24-48 hours."
    }
];

export default function FaqPage() {
    return (
        <main className="flex-1">
            <Section background="blue-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Frequently Asked Questions</h1>
                        <p className="text-lg text-primary-700">
                            Find answers to common questions about The IELTS Project and our IELTS preparation resources.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-muted-200">
                                    <h2 className="text-xl font-bold text-primary-900 mb-3">{faq.question}</h2>
                                    <p className="text-primary-700">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <h2 className="text-2xl font-bold text-primary-900 mb-6">Still have questions?</h2>
                            <p className="text-primary-700 mb-8">
                                If you couldn't find the answer to your question, please feel free to contact us directly.
                            </p>
                            <a href="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm">
                                Contact Support
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 