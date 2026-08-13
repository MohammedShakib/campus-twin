import React, { useState } from 'react';
import { Loader2, ArrowLeft, Mail } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your university email.');
      return;
    }
    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }

    setIsLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <AuthLayout>
        <div className="w-full flex flex-col items-center text-center animate-[fadeIn_300ms_ease-out]">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Check your email</h2>
          <p className="text-sm text-slate-500 mb-2">
            We've sent password reset instructions to:
          </p>
          <p className="text-[15px] font-bold text-slate-900 mb-8">{email}</p>
          <a
            href="/login"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-[15px] transition-all flex items-center justify-center mb-4 shadow-sm shadow-blue-600/20"
          >
            Back to Sign In
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setEmail('');
            }}
            className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Resend email
          </button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="w-full">
        <a href="/login" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Sign In
        </a>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">Forgot your password?</h2>
        <p className="text-sm text-slate-500 mb-8">Enter your university email and we'll send instructions to reset your password.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700">
              University Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              placeholder="name@university.edu"
              className={`w-full h-12 px-4 rounded-xl border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-white text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all`}
            />
            {error && (
              <p className="text-sm text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-[15px] transition-all active:scale-[0.99] flex items-center justify-center disabled:opacity-70 disabled:pointer-events-none mt-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </span>
            ) : (
              'Send Reset Instructions'
            )}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
