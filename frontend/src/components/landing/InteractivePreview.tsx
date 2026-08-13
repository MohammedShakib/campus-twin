import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import campusMapPreview from '../../assets/campus-map-preview.png';

const activity = [
  { label: 'Room 405 class started', time: '2 min ago', dot: 'bg-green-500' },
  { label: 'Bus 02 reached Library', time: '4 min ago', dot: 'bg-blue-500' },
  { label: 'Parking A reached 90%', time: '8 min ago', dot: 'bg-amber-500' },
];

const engineeringBuilding = {
  label: 'Engineering Building',
  statusLabel: 'Active',
  classes: 5,
  rooms: 3,
  students: 216,
  event: 'Robotics Workshop',
  nextClass: {
    name: 'Data Structures',
    details: 'Room 405 - 11:30 AM',
  },
};

const stats = [
  { label: 'Active Classes', value: engineeringBuilding.classes.toString() },
  { label: 'Available Rooms', value: engineeringBuilding.rooms.toString() },
  { label: 'Students Present', value: engineeringBuilding.students.toString() },
  { label: 'Current Event', value: engineeringBuilding.event },
];

const InteractivePreview = () => {
  const [showAllActivity, setShowAllActivity] = useState(false);
  const visibleActivity = showAllActivity ? activity : activity.slice(0, 2);

  return (
    <section id="campus-map" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Campus Live Overview</p>
            <h2 className="mt-3 text-[32px] font-bold leading-tight text-slate-950 md:text-[40px]">
              See What&apos;s Happening Across Campus
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">
              Track rooms, transportation and campus activity from one live view.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] shadow-[0_30px_70px_-48px_rgba(15,23,42,0.28)]">
          <div className="grid lg:grid-cols-[1.45fr_0.85fr] lg:items-stretch">
            <div className="border-b border-slate-200/80 p-4 md:p-5 lg:flex lg:min-h-[560px] lg:border-b-0 lg:border-r">
              <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 lg:flex-1">
                <img
                  src={campusMapPreview}
                  alt="Campus map showing Engineering Building, Main Gate, Library, Cafeteria, Parking, and the live bus route"
                  className="block h-full w-full object-cover object-center lg:min-h-full"
                />
              </div>
            </div>

            <div className="bg-slate-50/85 p-5 md:p-6 lg:flex lg:p-7">
              <div className="rounded-[22px] border border-white/80 bg-white/85 p-5 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.3)] backdrop-blur lg:flex lg:h-full lg:w-full lg:flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">{engineeringBuilding.label}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                        {engineeringBuilding.statusLabel}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                    Live
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                      <p className="mt-2 text-lg font-bold text-slate-950 md:text-xl">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[20px] border border-blue-100 bg-blue-50 px-4 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Next Class</p>
                  <p className="mt-2 text-base font-bold text-slate-950">{engineeringBuilding.nextClass.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{engineeringBuilding.nextClass.details}</p>
                </div>

                <div className="mt-6 lg:mt-auto">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Recent Activity
                    </span>
                    {!showAllActivity && (
                      <button
                        onClick={() => setShowAllActivity(true)}
                        className="inline-flex min-h-11 items-center gap-1 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
                      >
                        View all
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    {visibleActivity.map((item) => (
                      <div key={item.label} className="rounded-[16px] border border-slate-200 bg-white px-4 py-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${item.dot}`} />
                            <span className="text-sm font-medium text-slate-700">{item.label}</span>
                          </div>
                          <span className="shrink-0 text-xs text-slate-400">{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePreview;
