import campustwinPlatformPreview from '../../assets/campustwin-platform-preview.png';

const problems = [
  'Separate, disconnected attendance systems',
  'No live classroom availability tracking',
  'Unclear bus arrival information',
  'Delayed emergency communication',
  'Manual room reservation processes',
];

const ProblemSolution = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:gap-12">
          <div>
            <h2 className="max-w-xl text-[32px] font-bold leading-tight text-slate-950 md:text-[40px]">
              Campus Information Should Not Be Scattered
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-7 text-slate-600 md:text-base">
              Campus teams still jump between separate systems for attendance, transport, rooms, and
              alerts. That slows down decisions and creates blind spots during busy hours.
            </p>

            <div className="mt-8 space-y-3">
              {problems.map((problem, index) => (
                <div
                  key={problem}
                  className="flex items-start gap-4 rounded-[18px] border border-slate-200/90 bg-slate-50/80 px-4 py-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-600 shadow-sm">
                    {index + 1}
                  </div>
                  <p className="pt-0.5 text-[15px] font-medium text-slate-700 md:text-base">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14)_0%,rgba(59,130,246,0)_72%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={campustwinPlatformPreview}
                alt="CampusTwin platform diagram connecting students, teachers, security, admin, and drivers to live data, instant updates, and unified control"
                className="block w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
