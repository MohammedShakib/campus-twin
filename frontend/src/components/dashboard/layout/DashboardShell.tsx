import { useState } from 'react';
import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MobileNavigation from './MobileNavigation';
import NotificationPanel from './NotificationPanel';
import GlobalSearch from './GlobalSearch';
import type { User, UserRole } from '../../../types/dashboard';

// Mock current user for testing purposes
const MOCK_USER: User = {
  id: '1',
  name: 'Tanvir Ahmed',
  email: 'tanvir@student.campustwin.edu',
  role: 'STUDENT',
};

const DEMO_ROLE_SWITCHER_ENABLED = true;

const rolePathMap: Record<UserRole, string> = {
  STUDENT: '/dashboard/student',
  TEACHER: '/dashboard/teacher',
  SECURITY: '/dashboard/security',
  ADMIN: '/dashboard/admin',
};

function getRoleFromPath(pathname: string): UserRole | null {
  if (pathname.startsWith('/dashboard/teacher')) return 'TEACHER';
  if (pathname.startsWith('/dashboard/security')) return 'SECURITY';
  if (pathname.startsWith('/dashboard/admin')) return 'ADMIN';
  if (pathname.startsWith('/dashboard/student')) return 'STUDENT';
  return null;
}

function getInitialUser(pathname: string): User {
  const pathRole = getRoleFromPath(pathname);
  const storedRole = window.localStorage.getItem('campus-twin-demo-role') as UserRole | null;
  const role = pathRole ?? storedRole ?? MOCK_USER.role;

  return {
    ...MOCK_USER,
    role,
  };
}

export default function DashboardShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Local state for mocking role changes
  const [currentUser, setCurrentUser] = useState<User>(() => getInitialUser(location.pathname));

  // In a real app, you would fetch the user from context/auth
  const isAuthenticated = true; // Mock authentication

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-hidden">
      {/* Desktop Sidebar */}
      <Sidebar
        role={currentUser.role}
        isCollapsed={isSidebarCollapsed}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        role={currentUser.role}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Topbar */}
        <Topbar
          user={currentUser}
          onMenuClick={() => setIsMobileMenuOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          onNotificationClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
        />

        {/* Notification Panel (Absolute positioned inside relative container) */}
        <div className="relative z-40">
          <NotificationPanel
            isOpen={isNotificationsOpen}
            onClose={() => setIsNotificationsOpen(false)}
          />
        </div>

        {/* Global Search Modal */}
        <GlobalSearch
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        {/* Main scrollable content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
          <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8">

            {/* Demo Role Switcher */}
            {DEMO_ROLE_SWITCHER_ENABLED && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="text-yellow-800 font-bold text-sm">Demo Mode</h3>
                  <p className="text-yellow-700 text-xs">Switch roles to test different dashboard views</p>
                </div>
                <select
                  className="bg-white border border-yellow-300 rounded px-3 py-1.5 text-sm outline-none"
                  value={currentUser.role}
                  onChange={(e) => {
                    const role = e.target.value as UserRole;
                    window.localStorage.setItem('campus-twin-demo-role', role);
                    setCurrentUser({ ...currentUser, role });
                    navigate(rolePathMap[role], { replace: true });
                  }}
                >
                  <option value="STUDENT">Student</option>
                  <option value="TEACHER">Teacher</option>
                  <option value="SECURITY">Security</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            )}

            {/* This renders the child routes (e.g. StudentDashboard, TeacherDashboard) */}
            <Outlet context={{ user: currentUser }} />

          </div>
        </main>
      </div>
    </div>
  );
}
