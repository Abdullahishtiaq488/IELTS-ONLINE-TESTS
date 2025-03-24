import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Forgot Password - IELTS Online Tests',
  description: 'Reset your IELTS Online Tests password',
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-4xl shadow-2xl p-8">
        <div className="flex justify-center mb-8">
          <Image src="/images/logo.jpg" alt="IELTS Online Tests" width={180} height={60} />
        </div>

        <h1 className="text-2xl font-bold text-center text-primary-900 mb-4">FORGOT PASSWORD</h1>

        <p className="text-center mb-8 text-tertiary-600">
          Enter your email address below and we&apos;ll send you a link to reset your password.
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-medium py-3 rounded-md hover:bg-blue-800 transition-colors mt-6"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Remembered your password? <Link href="/login" className="text-blue-600 font-medium">Back to login</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 