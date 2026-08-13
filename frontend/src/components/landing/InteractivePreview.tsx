import { useState } from 'react';
import campusMapPreview from '../../assets/campus-map-preview.png';

const activity = [
  ['Room 405 class started', '2 min ago', 'bg-green-500'],
  ['Bus 02 reached Library', '4 min ago', 'bg-blue-500'],
  ['Parking A reached 90%', '8 min ago', 'bg-amber-500'],
] as const;

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

const InteractivePreview = () => {
  const [showAllActivity, setShowAllActivity] = useState(false);
  const visibleActivity = showAllActivity ? activity : activity.slice(0, 2);

  return (
    <section id="campus-map" className="bg-[#F8FAFC] py-9 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1160px] px-5 md:px-6 lg:px-8">
        <div className="mb-7 max-w-2xl md:mb-10">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Campus Live Overview
            </span>
          </div>
          <h2 className="mb-2 text-[30px] font-bold leading-tight text-slate-900 md:text-3xl">
            See What&apos;s Happening Across Campus
          </h2>
          <p className="text-[15px] text-slate-600 md:text-base">
            View active classes, available rooms, bus movement and campus updates from one live interface.
          </p>
        </div>

        <div className="flex flex-col overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] md:rounded-[18px] lg:flex-row">
          <div className="relative flex-1 overflow-hidden border-b border-slate-200 bg-slate-50 lg:border-b-0 lg:border-r">
            <img
              src={campusMapPreview}
              alt="Campus map showing Engineering Building, Main Gate, Library, Cafeteria, Parking, and the live bus route"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex w-full flex-col justify-between bg-white p-5 md:p-6 lg:w-[380px] lg:p-8">
            <div>
              <div className="mb-5 md:mb-8">
                <h3 className="mb-1 text-xl font-bold text-slate-900">{engineeringBuilding.label}</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">
                    {engineeringBuilding.statusLabel}
                  </span>
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-3 md:mb-8 md:gap-x-4 md:gap-y-6">
                <div>
                  <span className="block text-xl font-bold text-slate-900 md:text-2xl">
                    {engineeringBuilding.classes}
                  </span>
                  <span className="text-xs font-medium text-slate-500">Active Classes</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-slate-900 md:text-2xl">
                    {engineeringBuilding.rooms}
                  </span>
                  <span className="text-xs font-medium text-slate-500">Available Rooms</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-slate-900 md:text-2xl">
                    {engineeringBuilding.students}
                  </span>
                  <span className="text-xs font-medium text-slate-500">Students Present</span>
                </div>
                <div>
                  <span className="mb-0.5 flex min-h-[32px] items-end text-xs font-bold leading-tight text-slate-900 md:text-[13px]">
                    {engineeringBuilding.event}
                  </span>
                  <span className="text-xs font-medium text-slate-500">Current Event</span>
                </div>
              </div>

              <div className="mb-5 rounded-[14px] bg-slate-50 px-3 py-2.5 md:mb-8">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Next Class
                </span>
                <p className="mb-0.5 text-sm font-bold text-slate-900">{engineeringBuilding.nextClass.name}</p>
                <p className="text-xs text-slate-500">{engineeringBuilding.nextClass.details}</p>
              </div>
            </div>

            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Recent Activity
              </span>
              <ul className="space-y-3">
                {visibleActivity.map(([label, time, color]) => (
                  <li key={label} className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${color}`} />
                      <span className="text-sm font-medium leading-tight text-slate-700">{label}</span>
                    </div>
                    <span className="shrink-0 text-xs text-slate-400">{time}</span>
                  </li>
                ))}
              </ul>
              {!showAllActivity && (
                <button
                  onClick={() => setShowAllActivity(true)}
                  className="mt-3 min-h-11 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
                >
                  View all activity
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePreview;
