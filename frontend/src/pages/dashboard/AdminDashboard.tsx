import StatCard from '../../components/dashboard/ui/StatCard';
import { Users, GraduationCap, MapPin, MessageSquareWarning, Megaphone, Calendar } from 'lucide-react';

import CampusOperationsOverview from '../../components/dashboard/admin/CampusOperationsOverview';
import AdminAnalytics from '../../components/dashboard/admin/AdminAnalytics';
import AdminRecentActivity from '../../components/dashboard/admin/AdminRecentActivity';
import AdminNeedsAttention from '../../components/dashboard/admin/AdminNeedsAttention';

export default function AdminDashboard() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Admin Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-transparent pb-1 sm:pb-2">
        <div>
          <h1 className="text-[24px] lg:text-[28px] font-bold text-slate-900 leading-tight">Campus Overview</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">{today} · Campus operations are running normally</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/dashboard/notices/new" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <Megaphone className="w-4 h-4 text-indigo-600" />
            Publish Notice
          </a>
          <a href="/dashboard/events/new" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
            <Calendar className="w-4 h-4" />
            Create Event
          </a>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
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
          helper="Across 12 classrooms"
          colorClass="text-indigo-600"
          bgClass="bg-indigo-50"
        />
        <StatCard
          label="Available Rooms"
          value="12"
          icon={MapPin}
          helper="Ready for use"
          colorClass="text-emerald-600"
          bgClass="bg-emerald-50"
        />
        <StatCard
          label="Open Complaints"
          value="7"
          icon={MessageSquareWarning}
          helper="2 require attention"
          colorClass="text-amber-600"
          bgClass="bg-amber-50"
        />
      </div>

      {/* Main Content Grid - Balanced Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 items-start">

        {/* Left Column (Primary Content) */}
        <div className="lg:col-span-3 flex flex-col gap-5 sm:gap-6 order-1">
          <CampusOperationsOverview />
          <AdminAnalytics />
        </div>

        {/* Right Column (Secondary Content) */}
        <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6 order-2">

          {/* Horizontal Quick Actions */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-4 shadow-sm order-last lg:order-first">
            <h3 className="text-[15px] font-bold text-slate-900 mb-3 whitespace-nowrap">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="/dashboard/users/new" className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-xl text-[13px] font-semibold hover:bg-blue-100 transition-colors">
                <Users className="w-4 h-4" />
                Add User
              </a>
              <a href="/dashboard/notices/new" className="flex items-center justify-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-[13px] font-semibold hover:bg-indigo-100 transition-colors">
                <Megaphone className="w-4 h-4" />
                Notice
              </a>
              <a href="/dashboard/events/new" className="flex items-center justify-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-[13px] font-semibold hover:bg-emerald-100 transition-colors">
                <Calendar className="w-4 h-4" />
                Event
              </a>
              <a href="/dashboard/classrooms/reserve" className="flex items-center justify-center gap-2 px-3 py-2 bg-amber-50 text-amber-700 rounded-xl text-[13px] font-semibold hover:bg-amber-100 transition-colors">
                <MapPin className="w-4 h-4" />
                Reserve Room
              </a>
            </div>
          </div>

          <AdminNeedsAttention />
          <AdminRecentActivity />
        </div>
      </div>
    </div>
  );
}
