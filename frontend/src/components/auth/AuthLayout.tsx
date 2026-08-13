import type { ReactNode } from 'react';
import AuthBrandPanel from './AuthBrandPanel';
import campusTwinLogo from '../../assets/CampusTwin-logo.png';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[radial-gradient(circle_at_top,#eef4ff_0%,#f8fbff_28%,#f7f9fc_55%,#f4f7fb_100%)] font-sans p-0 sm:p-6 lg:p-8">
      <div className="w-full flex-1 sm:flex-none flex flex-col lg:flex-row max-w-[1180px] min-h-[100vh] sm:min-h-[700px] bg-white/92 sm:rounded-[32px] sm:border sm:border-[#E7EAF0] sm:shadow-[0_18px_60px_rgba(37,99,235,0.10)] overflow-hidden animate-[fadeIn_350ms_ease-out] backdrop-blur-sm">
        <div className="hidden lg:block w-[47%] bg-[linear-gradient(180deg,#EEF4FF_0%,#EAF1FF_100%)] relative">
          <AuthBrandPanel />
        </div>

        <div className="w-full lg:w-[53%] flex flex-col justify-center items-center px-6 py-10 sm:px-12 lg:px-14 xl:px-16 relative animate-[fadeIn_350ms_ease-out_80ms_both] bg-white">
          <div className="lg:hidden w-full max-w-[420px] flex flex-col items-center mb-8 pt-4">
            <img
              src={campusTwinLogo}
              alt="CampusTwin logo"
              className="w-12 h-12 object-contain mb-3"
            />
            <h1 className="text-[22px] font-bold text-slate-900 tracking-tight">CampusTwin</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Your campus, connected.</p>
          </div>

          <div className="w-full max-w-[430px]">
            {children}
          </div>
        </div>
      </div>

      <div className="hidden sm:flex items-center justify-between w-full max-w-[1180px] mt-5 text-[13px] text-slate-500 font-medium px-4">
        <span>&copy; 2026 CampusTwin</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-800 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  );
}
