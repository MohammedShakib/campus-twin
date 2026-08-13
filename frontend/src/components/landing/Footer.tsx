import { Link } from 'react-router-dom';
import campusTwinLogo from '../../assets/CampusTwin-logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between md:py-7">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img
                src={campusTwinLogo}
                alt="CampusTwin logo"
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg font-extrabold tracking-tight text-slate-950">CampusTwin</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Live campus operations, transport, rooms, and alerts in one platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
            <a href="#features" className="transition-colors hover:text-blue-600">
              Features
            </a>
            <a href="#campus-map" className="transition-colors hover:text-blue-600">
              Campus Live
            </a>
            <Link to="/demo" className="transition-colors hover:text-blue-600">
              Dashboard
            </Link>
            <a href="https://github.com/MohammedShakib/campus-twin" target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-600">
              GitHub
            </a>
            <Link to="/login" className="transition-colors hover:text-blue-600">
              Sign In
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-200 py-4 text-xs text-slate-400">
          <p>&copy; 2026 CampusTwin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
