import StatCard from '../../components/dashboard/ui/StatCard';
import { Users, CarFront, ShieldAlert, Search, AlertTriangle } from 'lucide-react';

import VisitorRequests from '../../components/dashboard/security/VisitorRequests';
import ParkingStatus from '../../components/dashboard/security/ParkingStatus';
import EmergencyControls from '../../components/dashboard/security/EmergencyControls';
import SecurityActivityFeed from '../../components/dashboard/security/SecurityActivityFeed';
import CompactCampusOverview from '../../components/dashboard/security/CompactCampusOverview';

export default function SecurityDashboard() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Security Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-transparent pb-1 sm:pb-2">
        <div>
          <h1 className="text-[24px] lg:text-[28px] font-bold text-slate-900 leading-tight">Campus Security Overview</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">{today} · 2 visitors awaiting review</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/dashboard/verification" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
            <Search className="w-4 h-4" />
            Scan Visitor QR
          </a>
          <a href="/dashboard/visitors/new" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <Users className="w-4 h-4 text-indigo-600" />
            Log Visitor
          </a>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <StatCard
          label="Visitors Today"
          value="12"
          icon={Users}
          helper="2 awaiting approval"
          colorClass="text-blue-600"
          bgClass="bg-blue-50"
        />
        <StatCard
          label="Parking Occupied"
          value="87%"
          icon={CarFront}
          helper="Parking B almost full"
          trend="up"
          colorClass="text-amber-600"
          bgClass="bg-amber-50"
        />
        <StatCard
          label="Pending Visitors"
          value="2"
          icon={Search}
          helper="Requires review"
          colorClass="text-indigo-600"
          bgClass="bg-indigo-50"
        />
        <StatCard
          label="Active Emergencies"
          value="0"
          icon={ShieldAlert}
          helper="Campus operating normally"
          colorClass="text-emerald-600"
          bgClass="bg-emerald-50"
        />
      </div>

      {/* Main Content Grid - Balanced Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 items-start">

        {/* Left Column (Primary Content) */}
        <div className="lg:col-span-3 flex flex-col gap-5 sm:gap-6 order-1">
          <VisitorRequests />
          <ParkingStatus />
        </div>

        {/* Right Column (Secondary Content) */}
        <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6 order-2">

          {/* Horizontal Quick Actions */}
          <div className="bg-white rounded-[14px] border border-slate-200 p-4 shadow-sm order-last lg:order-first">
            <h3 className="text-[15px] font-bold text-slate-900 mb-3 whitespace-nowrap">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="/dashboard/verification" className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-xl text-[13px] font-semibold hover:bg-blue-100 transition-colors">
                <Search className="w-4 h-4" />
                Scan QR
              </a>
              <a href="/dashboard/visitors/new" className="flex items-center justify-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-[13px] font-semibold hover:bg-indigo-100 transition-colors">
                <Users className="w-4 h-4" />
                Log Visitor
              </a>
              <a href="/dashboard/parking" className="flex items-center justify-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-[13px] font-semibold hover:bg-emerald-100 transition-colors">
                <CarFront className="w-4 h-4" />
                Parking
              </a>
              <a href="/dashboard/incidents/new" className="flex items-center justify-center gap-2 px-3 py-2 bg-amber-50 text-amber-700 rounded-xl text-[13px] font-semibold hover:bg-amber-100 transition-colors">
                <AlertTriangle className="w-4 h-4" />
                Report Incident
              </a>
            </div>
          </div>

          <EmergencyControls />
          <SecurityActivityFeed />
          <div className="hidden lg:block">
             <CompactCampusOverview />
          </div>
        </div>
      </div>
    </div>
  );
}
