import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    universityId: '',
    email: '',
    accountType: 'student',
    department: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const departments = [
    'Computer Science & Engineering',
    'Electrical Engineering',
    'Business Administration',
    'Mechanical Engineering',
    'English',
    'Economics'
  ];

  const validatePassword = (pass: string) => {
    return {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      number: /[0-9]/.test(pass)
    };
  };

  const passValidation = validatePassword(formData.password);
  const isPasswordValid = passValidation.length && passValidation.uppercase && passValidation.lowercase && passValidation.number;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error for field when typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = 'Full name is required.';
    if (!formData.universityId) newErrors.universityId = 'University ID is required.';
    if (!formData.email) newErrors.email = 'University email is required.';
    else if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email address.';
    if (!formData.department) newErrors.department = 'Department is required.';

    if (!isPasswordValid) newErrors.password = 'Password does not meet requirements.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the Terms of Use.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <AuthLayout>
        <div className="w-full flex flex-col items-center text-center animate-[fadeIn_300ms_ease-out]">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Account Created!</h2>
          <p className="text-sm text-slate-500 mb-8">
            Welcome to CampusTwin. Your account has been successfully created.
          </p>
          <a
            href="/login"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-[15px] transition-all flex items-center justify-center"
          >
            Continue to Sign In
          </a>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Create your account</h2>
        <p className="text-sm text-slate-500 mb-8">Use your university information to get started.</p>

        <form onSubmit={handleSignup} className="space-y-4">

          {/* Account Type Selector */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setFormData({...formData, accountType: 'student'})}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${formData.accountType === 'student' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, accountType: 'teacher'})}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${formData.accountType === 'teacher' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Teacher
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5 col-span-2 sm:col-span-1">
              <label className="block text-sm font-semibold text-slate-700">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full h-11 px-4 rounded-xl border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-white text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.name && <p className="text-xs text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{errors.name}</p>}
            </div>
            <div className="space-y-1.5 col-span-2 sm:col-span-1">
              <label className="block text-sm font-semibold text-slate-700">University ID</label>
              <input
                name="universityId"
                value={formData.universityId}
                onChange={handleChange}
                placeholder="STU-12345"
                className={`w-full h-11 px-4 rounded-xl border ${errors.universityId ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-white text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.universityId && <p className="text-xs text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{errors.universityId}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700">University Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@university.edu"
              className={`w-full h-11 px-4 rounded-xl border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-white text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all`}
            />
            {errors.email && <p className="text-xs text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`w-full h-11 px-4 rounded-xl border ${errors.department ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-white text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all appearance-none`}
            >
              <option value="" disabled>Select a department</option>
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            {errors.department && <p className="text-xs text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{errors.department}</p>}
          </div>

          <div className="space-y-1.5 relative">
            <label className="block text-sm font-semibold text-slate-700">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                placeholder="Create a password"
                className={`w-full h-11 pl-4 pr-11 rounded-xl border ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-white text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 focus:outline-none rounded-md"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Password Requirements Tooltip/Block */}
            {(passwordFocused || formData.password) && !isPasswordValid && (
              <div className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs animate-[fadeIn_200ms_ease-out]">
                <p className="font-semibold text-slate-700 mb-1">Password must contain:</p>
                <ul className="space-y-1 text-slate-500">
                  <li className={`flex items-center gap-1.5 ${passValidation.length ? 'text-green-600' : ''}`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span> At least 8 characters
                  </li>
                  <li className={`flex items-center gap-1.5 ${passValidation.uppercase ? 'text-green-600' : ''}`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span> One uppercase letter
                  </li>
                  <li className={`flex items-center gap-1.5 ${passValidation.lowercase ? 'text-green-600' : ''}`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span> One lowercase letter
                  </li>
                  <li className={`flex items-center gap-1.5 ${passValidation.number ? 'text-green-600' : ''}`}>
                    <span className="w-1 h-1 rounded-full bg-current"></span> One number
                  </li>
                </ul>
              </div>
            )}
            {errors.password && <p className="text-xs text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{errors.password}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700">Confirm Password</label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full h-11 pl-4 pr-11 rounded-xl border ${errors.confirmPassword ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-white text-slate-900 text-[15px] focus:outline-none focus:ring-4 transition-all`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 focus:outline-none rounded-md"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-xs text-red-500 font-medium animate-[fadeIn_200ms_ease-out]">{errors.confirmPassword}</p>}
          </div>

          {/* Terms */}
          <div className="pt-2">
            <label className="flex items-start gap-2 cursor-pointer group">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className={`mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer ${errors.agreeTerms ? 'border-red-300 focus:ring-red-500' : ''}`}
              />
              <span className={`text-xs font-medium transition-colors ${errors.agreeTerms ? 'text-red-500' : 'text-slate-600 group-hover:text-slate-900'}`}>
                I agree to the Terms of Use and Privacy Policy.
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-[15px] transition-all active:scale-[0.99] flex items-center justify-center disabled:opacity-70 disabled:pointer-events-none mt-4"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="mt-8 text-center pb-8">
          <p className="text-sm font-medium text-slate-500">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
