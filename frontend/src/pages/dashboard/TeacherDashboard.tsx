import StatCard from '../../components/dashboard/ui/StatCard';
import QuickAction from '../../components/dashboard/ui/QuickAction';
import { BookOpen, Users, MapPin, ClipboardList, Megaphone, QrCode } from 'lucide-react';

import TeacherClasses from '../../components/dashboard/teacher/TeacherClasses';
import ClassroomReservations from '../../components/dashboard/teacher/ClassroomReservations';
import AttendanceOverview from '../../components/dashboard/student/AttendanceOverview'; // Reusing for teacher view
import RecentUpdates from '../../components/dashboard/student/RecentUpdates';
import { useOutletContext } from 'react-router-dom';
import type { User } from '../../types/dashboard';

export default function TeacherDashboard() {
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
          label="Classes Today"
          value="3"
          icon={BookOpen}
          helper="Next in 15 mins"
          colorClass="text-indigo-600"
          bgClass="bg-indigo-50"
        />
        <StatCard
          label="Students Expected"
          value="74"
          icon={Users}
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (Primary Content) */}
        <div className="lg:col-span-2 space-y-6">
          <TeacherClasses />
          <AttendanceOverview /> {/* In a real app, this would show course averages instead of personal attendance */}
        </div>

        {/* Right Column (Secondary Content) */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <QuickAction
                icon={QrCode}
                label="Generate QR"
                colorClass="text-blue-600"
                bgClass="bg-blue-50"
              />
              <QuickAction
                icon={Megaphone}
                label="Announcement"
                href="/dashboard/announcements/new"
                colorClass="text-indigo-600"
                bgClass="bg-indigo-50"
              />
              <QuickAction
                icon={MapPin}
                label="Reserve Room"
                href="/dashboard/reservations/new"
                colorClass="text-emerald-600"
                bgClass="bg-emerald-50"
              />
              <QuickAction
                icon={ClipboardList}
                label="New Task"
                href="/dashboard/assignments/new"
                colorClass="text-amber-600"
                bgClass="bg-amber-50"
              />
            </div>
          </div>

          <ClassroomReservations />
          <RecentUpdates />
        </div>

      </div>
    </div>
  );
}
