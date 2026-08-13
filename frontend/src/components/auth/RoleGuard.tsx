import { Navigate, useOutletContext } from 'react-router-dom';
import type { User, UserRole } from '../../types/dashboard';

interface RoleGuardProps {
  allowedRoles: UserRole[];
  children: React.ReactNode;
}

export default function RoleGuard({ allowedRoles, children }: RoleGuardProps) {
  const { user } = useOutletContext<{ user: User }>();

  if (!allowedRoles.includes(user.role)) {
    // If the user doesn't have the required role, redirect to the default dashboard route
    // The DashboardShell will automatically redirect them to their specific dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
