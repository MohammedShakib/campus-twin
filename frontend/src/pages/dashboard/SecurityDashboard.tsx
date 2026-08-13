import StatCard from '../../components/dashboard/ui/StatCard';
import QuickAction from '../../components/dashboard/ui/QuickAction';
import { Users, CarFront, ShieldAlert,  Search, AlertTriangle } from 'lucide-react';

import VisitorRequests from '../../components/dashboard/security/VisitorRequests';
import ParkingStatus from '../../components/dashboard/security/ParkingStatus';
import EmergencyControls from '../../components/dashboard/security/EmergencyControls';
import RecentUpdates from '../../components/dashboard/student/RecentUpdates';
import LiveCampusOverview from '../../components/dashboard/student/LiveCampusOverview';
import { useOutletContext } from 'react-router-dom';
import type { User } from '../../types/dashboard';

export default function SecurityDashboard() {
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
          label="Visitors Today"
          value="12"
          icon={Users}
          helper="2 pending requests"
          colorClass="text-blue-600"
          bgClass="bg-blue-50"
        />
        <StatCard
          label="Parking Occupied"
          value="87%"
          icon={CarFront}
          helper="Parking A is almost full"
          trend="up"
          colorClass="text-amber-600"
          bgClass="bg-amber-50"
        />
        <StatCard
          label="Pending Visitors"
          value="2"
          icon={Search}
          colorClass="text-indigo-600"
          bgClass="bg-indigo-50"
        />
        <StatCard
          label="Active Emergencies"
          value="0"
          icon={ShieldAlert}
          colorClass="text-emerald-600"
          bgClass="bg-emerald-50"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (Primary Content) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VisitorRequests />
            <LiveCampusOverview />
          </div>

          <ParkingStatus />
        </div>

        {/* Right Column (Secondary Content) */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <QuickAction
                icon={Search}
                label="Scan QR"
                href="/dashboard/verification"
                colorClass="text-blue-600"
                bgClass="bg-blue-50"
              />
              <QuickAction
                icon={Users}
                label="Log Visitor"
                href="/dashboard/visitors/new"
                colorClass="text-indigo-600"
                bgClass="bg-indigo-50"
              />
              <QuickAction
                icon={CarFront}
                label="Manage Parking"
                href="/dashboard/parking"
                colorClass="text-emerald-600"
                bgClass="bg-emerald-50"
              />
              <QuickAction
                icon={AlertTriangle}
                label="Log Incident"
                href="/dashboard/incidents/new"
                colorClass="text-amber-600"
                bgClass="bg-amber-50"
              />
            </div>
          </div>

          <EmergencyControls />
          <RecentUpdates />
        </div>

      </div>
    </div>
  );
}
