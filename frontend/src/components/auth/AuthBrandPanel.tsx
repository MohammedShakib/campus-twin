import campusTwinLogo from '../../assets/CampusTwin-logo.png';
import loginPhoto from '../../assets/login photo.png';

export default function AuthBrandPanel() {
  return (
    <div className="w-full h-full flex flex-col justify-between px-10 py-12 xl:px-12 xl:py-14 text-slate-900 overflow-hidden relative">
      <div className="absolute inset-x-8 top-8 h-36 rounded-full bg-[radial-gradient(circle,#d8e6ff_0%,rgba(216,230,255,0)_72%)] blur-3xl opacity-70" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <img
            src={campusTwinLogo}
            alt="CampusTwin logo"
            className="w-11 h-11 object-contain shrink-0"
          />
          <span className="text-[28px] font-bold tracking-tight text-slate-900">CampusTwin</span>
        </div>

        <div className="max-w-md">
          <h1 className="text-[46px] font-bold tracking-tight text-slate-900 leading-[1.08] mb-4">
            Stay connected to your campus.
          </h1>
          <p className="text-slate-600 text-[17px] leading-8 max-w-[430px]">
            Classes, attendance, transport and campus updates, all in one place.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 -mx-2">
        <div className="absolute inset-x-8 bottom-4 h-14 rounded-full bg-[radial-gradient(circle,#cfe0ff_0%,rgba(207,224,255,0)_72%)] blur-2xl opacity-85" />
        <div className="relative w-full max-w-[590px] rounded-[20px] border border-white/70 bg-white/40 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.07)]">
          <img
            src={loginPhoto}
            alt="Campus live preview"
            className="block w-full h-auto rounded-[18px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
