import React from 'react';
import RegisterForm from '@/components/forms/register-form';

export const metadata = {
    title: 'Sign Up - IELTS Online Tests',
    description: 'Create your IELTS Online Tests account',
};

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <RegisterForm showHeader={true} />
        </div>
    );
} 