'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LoginFormProps {
    showHeader?: boolean;
}

export default function LoginForm({ showHeader = true }: LoginFormProps) {
    const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempted with:', formData);
        // Implement actual login logic here
    };

    return (
        <div className={showHeader ? "max-w-md mx-auto bg-white rounded-lg shadow-md p-8 md:max-w-4xl" : "w-full"}>
            {showHeader && (
                <>
                    <div className="flex justify-center mb-8">
                        <Image src="/images/logo.svg" alt="IELTS Online Tests" width={180} height={60} />
                    </div>
                    <h1 className="text-2xl font-bold text-center text-primary-900 mb-8">LOG IN TO YOUR ACCOUNT</h1>
                </>
            )}

            <div className="md:flex md:space-x-12">
                {/* Left side - Login form */}
                <div className="md:w-1/2">
                    {/* Login method tabs */}
                    <div className="flex mb-6 border-b border-secondary-200">
                        <button
                            className={`flex items-center pb-3 px-4 ${loginMethod === 'phone' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-secondary-500'}`}
                            onClick={() => setLoginMethod('phone')}
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Login by phone
                        </button>
                        <button
                            className={`flex items-center pb-3 px-4 ${loginMethod === 'email' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-secondary-500'}`}
                            onClick={() => setLoginMethod('email')}
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Login by email
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {loginMethod === 'email' ? (
                            <>
                                <div className="mb-4">
                                    <label className="block text-secondary-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Please enter Username/Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border border-secondary-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-secondary-700 mb-2">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Please enter password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="w-full border border-secondary-300 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                                        >
                                            <svg className="h-5 w-5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="mb-4">
                                <label className="block text-secondary-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Please enter phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full border border-secondary-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    required
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary-900 text-white font-medium py-3 rounded-md hover:bg-primary-800 transition-colors mt-6"
                        >
                            Login
                        </button>

                        <div className="text-center mt-4">
                            <Link href="/forgot-password" className="text-primary-500 hover:text-primary-700 text-sm">
                                Forgot password?
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Or divider - visible only on mobile */}
                <div className="relative my-6 md:hidden">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-secondary-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="flex items-center justify-center bg-white rounded-full h-8 w-8 border border-secondary-300 text-sm text-secondary-500">Or</span>
                    </div>
                </div>

                {/* Center Or divider - visible only on desktop */}
                <div className="hidden md:flex md:items-center">
                    <div className="relative flex flex-col items-center px-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="h-full border-l border-secondary-300"></div>
                        </div>
                        <div className="relative flex flex-col items-center">
                            <span className="flex items-center justify-center bg-white rounded-full h-8 w-8 border border-secondary-300 text-sm text-secondary-500">Or</span>
                        </div>
                    </div>
                </div>

                {/* Right side - Social logins */}
                <div className="md:w-1/2">
                    <div className="space-y-4 h-full flex flex-col justify-center">
                        <button className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-3 rounded-md">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.545 10.239v3.818h5.556c-.239 1.422-1.704 4.157-5.556 4.157-3.328 0-6.05-2.759-6.05-6.145s2.722-6.145 6.05-6.145c1.9 0 3.184.8 3.912 1.496l2.665-2.561C17.634 3.461 15.286 2.5 12.545 2.5 7.021 2.5 2.5 7.021 2.5 12.545s4.521 10.045 10.045 10.045c5.8 0 9.659-4.075 9.659-9.82 0-.658-.057-1.157-.156-1.665h-9.503z" />
                            </svg>
                            Login with Google
                        </button>

                        <button className="w-full flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-md">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Login with Facebook
                        </button>

                        <button className="w-full flex items-center justify-center bg-primary-400 hover:bg-primary-500 text-white py-3 rounded-md">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                            Login with Twitter
                        </button>
                    </div>
                </div>
            </div>

            {showHeader && (
                <div className="text-center mt-8">
                    <p className="text-secondary-600">
                        Don&apos;t have an account? <Link href="/signup" className="text-primary-600 font-medium">Create one now!</Link>
                    </p>
                </div>
            )}
        </div>
    );
} 