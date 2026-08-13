import StatCard from '../../components/dashboard/ui/StatCard';
import { BookOpen, Users, MapPin, ClipboardList, Megaphone, QrCode } from 'lucide-react';

import TeacherClasses from '../../components/dashboard/teacher/TeacherClasses';
import ClassroomReservations from '../../components/dashboard/teacher/ClassroomReservations';
import CourseAttendanceSummary from '../../components/dashboard/teacher/CourseAttendanceSummary';
import RecentUpdates from '../../components/dashboard/student/RecentUpdates';
import TeacherPendingTasks from '../../components/dashboard/teacher/TeacherPendingTasks';
import { useOutletContext } from 'react-router-dom';
import type { User } from '../../types/dashboard';

export default function TeacherDashboard() {
  const { user } = useOutletContext<{ user: User }>();

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Teacher Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-transparent pb-1 sm:pb-2">
        <div>
          <h1 className="text-[24px] lg:text-[28px] font-bold text-slate-900 leading-tight">Good morning, Dr. {user.name.split(' ')[1] || user.name.split(' ')[0]}</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">{today} · 3 classes today</p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a href="/dashboard/classes" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            View Schedule
          </a>
          <a href="/dashboard/announcements/new" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <Megaphone className="w-4 h-4 text-emerald-600" />
            Create Announcement
          </a>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <StatCard
          label="Classes Today"
          value="3"
          icon={BookOpen}
          helper="Next in 15 min"
          colorClass="text-indigo-600"
          bgClass="bg-indigo-50"
        />
        <StatCard
          label="Students Expected"
          value="74"
          icon={Users}
          helper="Across today's classes"
          colorClass="text-blue-600"
          bgClass="bg-blue-50"
        />
        <StatCard
          label="Room Requests"
          value="1"
          icon={MapPin}
          helper="Pending approval"
          colorClass="text-amber-600"
          bgClass="bg-amber-50"
        />
        <StatCard
          label="Pending Tasks"
          value="2"
          icon={ClipboardList}
          helper="Assignments to grade"
          colorClass="text-rose-600"
          bgClass="bg-rose-50"
        />
      </div>

      {/* Main Content Grid - 60/40 on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 items-start">

        {/* Left Column (Primary Content) - Takes up 60% on desktop */}
        <div className="lg:col-span-3 flex flex-col gap-5 sm:gap-6 order-1">
          <TeacherClasses />

          <div className="hidden lg:block">
            <CourseAttendanceSummary />
          </div>
        </div>

        {/* Right Column (Secondary Content) - Takes up 40% on desktop */}
        <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6 order-3 lg:order-2">

          {/* Horizontal Quick Actions */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-4 shadow-sm order-last lg:order-first">
            <h3 className="text-[15px] font-bold text-slate-900 mb-3 whitespace-nowrap">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              <a href="#qr" className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-xl text-[13px] font-semibold hover:bg-blue-100 transition-colors">
                <QrCode className="w-4 h-4" />
                Generate QR
              </a>
              <a href="/dashboard/announcements/new" className="flex items-center justify-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-[13px] font-semibold hover:bg-indigo-100 transition-colors">
                <Megaphone className="w-4 h-4" />
                Announcement
              </a>
              <a href="/dashboard/reservations/new" className="flex items-center justify-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-[13px] font-semibold hover:bg-emerald-100 transition-colors">
                <MapPin className="w-4 h-4" />
                Reserve Room
              </a>
              <a href="/dashboard/tasks/new" className="flex items-center justify-center gap-2 px-3 py-2 bg-rose-50 text-rose-700 rounded-xl text-[13px] font-semibold hover:bg-rose-100 transition-colors">
                <ClipboardList className="w-4 h-4" />
                New Task
              </a>
            </div>
          </div>

          <TeacherPendingTasks />
          <ClassroomReservations />
        </div>

        {/* Mobile order overrides */}
        <div className="col-span-1 block lg:hidden order-4 space-y-5 sm:space-y-6">
           <CourseAttendanceSummary />
           <RecentUpdates />
        </div>

        <div className="col-span-1 hidden lg:block lg:col-span-3 order-5">
           <RecentUpdates />
        </div>

      </div>
    </div>
  );
}
