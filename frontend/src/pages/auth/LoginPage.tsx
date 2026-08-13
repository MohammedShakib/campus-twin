import { useState } from 'react';
import type { FormEvent, KeyboardEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [capsLockActive, setCapsLockActive] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your university email.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (email === 'error@university.edu') {
        setError('Unable to sign in. Check your email and password and try again.');
        return;
      }

      navigate('/dashboard/student');
    }, 1000);
  };

  const handleDemoLogin = (role: 'student' | 'teacher' | 'security' | 'admin') => {
    navigate(`/dashboard/${role}`);
  };

  const checkCapsLock = (e: KeyboardEvent | MouseEvent) => {
    setCapsLockActive(e.getModifierState('CapsLock'));
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-[40px] font-bold tracking-tight text-slate-900 leading-none mb-3">Welcome back</h2>
          <p className="text-[15px] text-slate-500 leading-7">Sign in to your CampusTwin account.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
              University Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@university.edu"
              className={`w-full h-[52px] px-4 rounded-2xl border ${error && !email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-slate-50/60 text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all`}
            />
            {error && !email && (
              <p className="text-sm text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{error}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={checkCapsLock}
                onClick={checkCapsLock}
                placeholder="Enter your password"
                className={`w-full h-[52px] pl-4 pr-11 rounded-2xl border ${error && !password ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-slate-50/60 text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 focus:outline-none rounded-md"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {capsLockActive && (
              <p className="text-xs text-amber-600 font-medium mt-1">Caps Lock is on</p>
            )}
            {error && password && email && (
              <p className="text-sm text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{error}</p>
            )}
          </div>

          <div className="flex items-center justify-between pt-1.5">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-[52px] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-[16px] transition-all active:scale-[0.99] flex items-center justify-center disabled:opacity-70 disabled:pointer-events-none mt-3 shadow-[0_12px_24px_rgba(37,99,235,0.18)]"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-7 text-center">
          <p className="text-sm font-medium text-slate-500">
            New to CampusTwin?{' '}
            <a href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Create an account
            </a>
          </p>
        </div>

        <div className="mt-9 text-center relative group">
          <button className="text-[12px] font-medium text-slate-400 hover:text-slate-600 transition-colors">
            Use a demo account (Dev)
          </button>

          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.08)] rounded-2xl p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all -translate-y-2 group-hover:translate-y-0 z-50">
            <button onClick={() => handleDemoLogin('student')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors">Login as Student</button>
            <button onClick={() => handleDemoLogin('teacher')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors">Login as Teacher</button>
            <button onClick={() => handleDemoLogin('security')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors">Login as Security</button>
            <button onClick={() => handleDemoLogin('admin')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors">Login as Admin</button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
