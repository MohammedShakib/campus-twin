import StatCard from '../../components/dashboard/ui/StatCard';
import { UserCheck, BookOpen, Bus, Calendar, Search, Map as MapIcon, MessageSquareWarning } from 'lucide-react';

import TodaySchedule from '../../components/dashboard/student/TodaySchedule';
import AttendanceOverview from '../../components/dashboard/student/AttendanceOverview';
import CampusBusWidget from '../../components/dashboard/student/CampusBusWidget';
import LiveCampusOverview from '../../components/dashboard/student/LiveCampusOverview';
import UpcomingEvents from '../../components/dashboard/student/UpcomingEvents';
import RecentUpdates from '../../components/dashboard/student/RecentUpdates';
import MobileNextClassWidget from '../../components/dashboard/student/MobileNextClassWidget';
import MobileCampusStatusWidget from '../../components/dashboard/student/MobileCampusStatusWidget';
import { useOutletContext } from 'react-router-dom';
import type { User } from '../../types/dashboard';

export default function StudentDashboard() {
  const { user } = useOutletContext<{ user: User }>();

  // Date formatting for the greeting
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Dashboard Header - Visible on both, layout adapts */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-transparent pb-1 sm:pb-2">
        <div>
          <h1 className="text-[24px] lg:text-[28px] font-bold text-slate-900 leading-tight">Good morning, {user.name.split(' ')[0]}</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">{today} · 3 classes today</p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a href="/dashboard/rooms" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <Search className="w-4 h-4 text-indigo-600" />
            Find Room
          </a>
          <a href="/dashboard/bus" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <Bus className="w-4 h-4 text-emerald-600" />
            Track Bus
          </a>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <StatCard
          label="Overall Attendance"
          value="89%"
          icon={UserCheck}
          helper="+2.4% this month"
          trend="up"
          colorClass="text-blue-600"
          bgClass="bg-blue-50"
        />
        <StatCard
          label="Classes Today"
          value="3"
          icon={BookOpen}
          helper="Next at 11:30 AM"
          colorClass="text-indigo-600"
          bgClass="bg-indigo-50"
        />
        <StatCard
          label="Bus ETA"
          value="4 min"
          icon={Bus}
          helper="Bus 02 · Library"
          colorClass="text-emerald-600"
          bgClass="bg-emerald-50"
        />
        <StatCard
          label="Upcoming Events"
          value="2"
          icon={Calendar}
          helper="Next: Robotics Workshop"
          colorClass="text-amber-600"
          bgClass="bg-amber-50"
        />
      </div>

      {/* Mobile-only Priority Content */}
      <div className="block lg:hidden space-y-5">
        <MobileNextClassWidget />
        <MobileCampusStatusWidget />
      </div>

      {/* Main Content Grid - Desktop 60/40 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">

        {/* Row 1 - Desktop only schedule/map (replaced by mobile widgets above on small screens) */}
        <div className="hidden lg:block lg:col-span-3">
          <TodaySchedule />
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <LiveCampusOverview />
        </div>

        {/* Row 2 */}
        <div className="lg:col-span-3 order-1 lg:order-none">
          <AttendanceOverview />
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <CampusBusWidget />
        </div>

        {/* Row 3 */}
        <div className="hidden lg:block lg:col-span-3">
          <UpcomingEvents />
        </div>
        <div className="lg:col-span-2 order-2 lg:order-none">
          <RecentUpdates />
        </div>

      </div>

      {/* Horizontal Quick Actions */}
      <div className="bg-white rounded-[14px] border border-slate-200 p-4 shadow-sm order-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-[15px] font-bold text-slate-900 whitespace-nowrap">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 w-full sm:w-auto">
            <a href="/dashboard/rooms" className="flex items-center justify-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-[13px] font-semibold hover:bg-indigo-100 transition-colors flex-1 sm:flex-initial">
              <Search className="w-4 h-4" />
              Find Room
            </a>
            <a href="/dashboard/bus" className="flex items-center justify-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-[13px] font-semibold hover:bg-emerald-100 transition-colors flex-1 sm:flex-initial">
              <Bus className="w-4 h-4" />
              Track Bus
            </a>
            <a href="/dashboard/complaints" className="flex items-center justify-center gap-2 px-3 py-2 bg-rose-50 text-rose-700 rounded-xl text-[13px] font-semibold hover:bg-rose-100 transition-colors flex-1 sm:flex-initial">
              <MessageSquareWarning className="w-4 h-4" />
              Report Issue
            </a>
            <a href="/dashboard/map" className="flex items-center justify-center gap-2 px-3 py-2 bg-amber-50 text-amber-700 rounded-xl text-[13px] font-semibold hover:bg-amber-100 transition-colors flex-1 sm:flex-initial">
              <MapIcon className="w-4 h-4" />
              Campus Map
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
