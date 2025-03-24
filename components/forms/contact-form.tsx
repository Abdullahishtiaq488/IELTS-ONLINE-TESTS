'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        userType: '',
        details: '',
        name: '',
        email: '',
        title: '',
        message: '',
        captcha: ''
    });

    const [charactersRemaining, setCharactersRemaining] = useState(500);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Update character count for message field
        if (name === 'message') {
            setCharactersRemaining(500 - value.length);
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Add actual form submission logic here
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex items-center mb-6">
                <div className="mr-4">
                    <Image src="/images/contact-icon.svg" alt="Contact icon" width={40} height={40} />
                </div>
                <h2 className="text-2xl font-bold text-primary-900">Contact us</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="userType" className="sr-only">You are</label>
                    <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        className="w-full border border-muted-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                        aria-required="true"
                    >
                        <option value="" disabled>--You are--</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="parent">Parent</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="details" className="sr-only">Tell us more about yourself</label>
                    <input
                        id="details"
                        type="text"
                        name="details"
                        placeholder="Tell us more"
                        value={formData.details}
                        onChange={handleInputChange}
                        className="w-full border border-muted-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>

                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-muted-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                        aria-required="true"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-muted-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                        aria-required="true"
                    />
                </div>

                <div>
                    <label htmlFor="title" className="sr-only">Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full border border-muted-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                        aria-required="true"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        maxLength={500}
                        rows={5}
                        className="w-full border border-muted-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                        aria-required="true"
                        aria-describedby="message-counter"
                    ></textarea>
                    <div id="message-counter" className="text-sm text-primary-950 mt-1" aria-live="polite">
                        {charactersRemaining} character(s) remaining
                    </div>
                </div>

                <div className="flex items-center">
                    <label htmlFor="captcha" className="mr-4 text-primary-950">1 + 3 =</label>
                    <input
                        id="captcha"
                        type="text"
                        name="captcha"
                        value={formData.captcha}
                        onChange={handleInputChange}
                        className="border border-muted-950 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 w-20"
                        required
                        aria-required="true"
                        aria-describedby="captcha-help"
                    />
                </div>

                <div id="captcha-help" className="text-sm text-primary-950">
                    Solve this simple math problem and enter the result. E.g. for 1+3, enter 4.
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-primary-900 hover:bg-primary-800 text-white font-medium py-3 px-10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label="Send message"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
} 