import StatCard from '../../components/dashboard/ui/StatCard';
import QuickAction from '../../components/dashboard/ui/QuickAction';
import { Users, GraduationCap, MapPin, MessageSquareWarning, Megaphone, Calendar } from 'lucide-react';

import CampusOperationsOverview from '../../components/dashboard/admin/CampusOperationsOverview';
import AdminAnalytics from '../../components/dashboard/admin/AdminAnalytics';
import AdminRecentActivity from '../../components/dashboard/admin/AdminRecentActivity';
import { useOutletContext } from 'react-router-dom';
import type { User } from '../../types/dashboard';

export default function AdminDashboard() {
  const { user } = useOutletContext<{ user: User }>();

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-6">
      {/* Mobile Greeting */}
      <div className="sm:hidden mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Good morning, {user.name.split(' ')[0]}</h1>
        <p className="text-sm text-slate-500">{today}</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          label="Online Students"
          value="2,480"
          icon={Users}
          helper="Out of 3,200 registered"
          colorClass="text-blue-600"
          bgClass="bg-blue-50"
        />
        <StatCard
          label="Active Classes"
          value="18"
          icon={GraduationCap}
          colorClass="text-indigo-600"
          bgClass="bg-indigo-50"
        />
        <StatCard
          label="Available Rooms"
          value="12"
          icon={MapPin}
          colorClass="text-emerald-600"
          bgClass="bg-emerald-50"
        />
        <StatCard
          label="Open Complaints"
          value="7"
          icon={MessageSquareWarning}
          helper="-2 since yesterday"
          trend="down"
          colorClass="text-amber-600"
          bgClass="bg-amber-50"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (Primary Content) */}
        <div className="lg:col-span-2 space-y-6">
          <CampusOperationsOverview />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AdminAnalytics />
            <AdminRecentActivity />
          </div>
        </div>

        {/* Right Column (Secondary Content) */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <QuickAction
                icon={Users}
                label="Add User"
                href="/dashboard/users/new"
                colorClass="text-blue-600"
                bgClass="bg-blue-50"
              />
              <QuickAction
                icon={Megaphone}
                label="Publish Notice"
                href="/dashboard/notices/new"
                colorClass="text-indigo-600"
                bgClass="bg-indigo-50"
              />
              <QuickAction
                icon={Calendar}
                label="Create Event"
                href="/dashboard/events/new"
                colorClass="text-emerald-600"
                bgClass="bg-emerald-50"
              />
              <QuickAction
                icon={MapPin}
                label="Reserve Room"
                href="/dashboard/classrooms/reserve"
                colorClass="text-amber-600"
                bgClass="bg-amber-50"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">System Health</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">API Gateway</span>
                <span className="text-green-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Database</span>
                <span className="text-green-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Message Queue</span>
                <span className="text-green-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
