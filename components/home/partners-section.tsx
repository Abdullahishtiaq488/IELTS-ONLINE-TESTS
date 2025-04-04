import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { partnerDescription } from '@/data/partners';

export default function PartnersSection() {
    return (
        <Section background="white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                        Why Partner With Us?
                    </h2>
                    <div className="w-20 h-1 bg-accent-500 mx-auto mb-6 rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary-50 to-primary-100 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl mb-16">
                    <div className="h-full flex flex-col">
                        <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">
                            Join Our Global IELTS Community
                        </h3>
                        <p className="text-primary-700 leading-relaxed text-lg text-center flex-grow mb-6">
                            {partnerDescription}
                        </p>
                        <div className="text-center">
                            <Link
                                href="/about-partners"
                                className="inline-flex items-center justify-center bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                            >
                                <span>Join our partnership program</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats Section (moved from stats section) */}
                
                 

IELTS Reading: Simple Guide to Success
The IELTS Reading test checks how well you understand written English. You’ll face 3 sections, 40 questions, and only 60 minutes—so time and strategy matter!
________________________________________
🧾 What to Expect
•	Academic: 3 long texts from books, journals, or articles
•	General Training: Everyday texts like ads, notices, and instruction manuals
•	Total time: 60 minutes
•	No extra time to transfer answers
________________________________________
📌 Common Question Types
•	✅ Multiple choice
•	✅ True/False/Not Given
•	✅ Matching headings
•	✅ Sentence & summary completion
•	✅ Diagram labeling
________________________________________
✔️ Quick Tips
1.	Skim first, scan for answers
2.	Underline keywords in questions
3.	Don’t spend too long on one question
4.	Don’t leave blanks—guess if unsure
5.	Stick to what’s in the text only
________________________________________
📚 Best Way to Improve
•	Practice daily
•	Read articles and note keywords
•	Use past test papers
•	Learn synonyms and paraphrasing
________________________________________
🔗 Try This
👉 IELTS Reading Test Pdf
________________________________________
Final Tip:
Stay calm, read with focus, and practice under timed conditions. With the right habits, your score will improve!

            </div>
        </Section>
    );
}