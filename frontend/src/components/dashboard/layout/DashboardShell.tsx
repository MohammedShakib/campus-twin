import { useEffect, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MobileNavigation from './MobileNavigation';
import GlobalSearch from './GlobalSearch';
import type { User, UserRole } from '../../../types/dashboard';

const MOCK_USER: User = {
  id: '1',
  name: 'Tanvir Ahmed',
  email: 'tanvir@student.campustwin.edu',
  role: 'STUDENT',
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

  return {
    ...MOCK_USER,
    role: pathRole ?? MOCK_USER.role,
  };
}

export default function DashboardShell() {
  const location = useLocation();
  const [isSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>(() => getInitialUser(location.pathname));

  useEffect(() => {
    const pathRole = getRoleFromPath(location.pathname);
    if (pathRole && pathRole !== currentUser.role) {
      setCurrentUser((user) => ({ ...user, role: pathRole }));
    }
  }, [location.pathname, currentUser.role]);

  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-hidden">
      <Sidebar
        user={currentUser}
        role={currentUser.role}
        isCollapsed={isSidebarCollapsed}
      />

      <MobileNavigation
        user={currentUser}
        role={currentUser.role}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Topbar
          user={currentUser}
          onMenuClick={() => setIsMobileMenuOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
        />

        <GlobalSearch
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
          <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8">
            <Outlet context={{ user: currentUser }} />
          </div>
        </main>
      </div>
    </div>
  );
}
