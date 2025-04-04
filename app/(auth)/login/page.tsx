import React from 'react';
import LoginForm from '@/components/forms/login-form';

export const metadata = {
  title: 'Log In - The IELTS Project',
  description: 'Log in to your IELTS Project account',
};

export default function LoginPage() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
} 