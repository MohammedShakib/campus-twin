import StatCard from '../../components/dashboard/ui/StatCard';
import QuickAction from '../../components/dashboard/ui/QuickAction';
import { UserCheck, BookOpen, Bus, Calendar, Search, Map as MapIcon, MessageSquareWarning } from 'lucide-react';

import TodaySchedule from '../../components/dashboard/student/TodaySchedule';
import AttendanceOverview from '../../components/dashboard/student/AttendanceOverview';
import CampusBusWidget from '../../components/dashboard/student/CampusBusWidget';
import LiveCampusOverview from '../../components/dashboard/student/LiveCampusOverview';
import UpcomingEvents from '../../components/dashboard/student/UpcomingEvents';
import RecentUpdates from '../../components/dashboard/student/RecentUpdates';
import { useOutletContext } from 'react-router-dom';
import type { User } from '../../types/dashboard';

export default function StudentDashboard() {
  const { user } = useOutletContext<{ user: User }>();

  // Date formatting for the greeting
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-6">
      {/* Mobile Greeting (hidden on desktop since it's in Topbar) */}
      <div className="sm:hidden mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Good morning, {user.name.split(' ')[0]}</h1>
        <p className="text-sm text-slate-500">{today}</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
          helper="Library → Engineering"
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (Primary Content) - Takes up 2/3 on desktop */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TodaySchedule />
            <LiveCampusOverview />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AttendanceOverview />
            <CampusBusWidget />
          </div>
        </div>

        {/* Right Column (Secondary Content) - Takes up 1/3 on desktop */}
        <div className="space-y-6">
          <UpcomingEvents />
          <RecentUpdates />

          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <QuickAction
                icon={Search}
                label="Find Room"
                href="/dashboard/rooms"
                colorClass="text-indigo-600"
                bgClass="bg-indigo-50"
              />
              <QuickAction
                icon={Bus}
                label="Track Bus"
                href="/dashboard/bus"
                colorClass="text-emerald-600"
                bgClass="bg-emerald-50"
              />
              <QuickAction
                icon={MessageSquareWarning}
                label="Report Issue"
                href="/dashboard/complaints"
                colorClass="text-rose-600"
                bgClass="bg-rose-50"
              />
              <QuickAction
                icon={MapIcon}
                label="Campus Map"
                href="/dashboard/map"
                colorClass="text-amber-600"
                bgClass="bg-amber-50"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
