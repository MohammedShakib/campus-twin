import { BrowserRouter as Router, Routes, Route, Navigate, useOutletContext } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectDetails from './components/landing/ProjectDetails';

// Dashboard Components
import DashboardShell from './components/dashboard/layout/DashboardShell';
import RoleGuard from './components/auth/RoleGuard';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import SecurityDashboard from './pages/dashboard/SecurityDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import type { User } from './types/dashboard';

import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

const DocumentationPage = () => (
  <div className="min-h-screen bg-slate-50">
    <div className="border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="font-bold text-slate-950">CampusTwin</a>
        <a href="/" className="text-sm font-bold text-blue-700 hover:text-blue-900">Back to home</a>
      </div>
    </div>
    <ProjectDetails />
  </div>
);

// A smart redirect component that checks the current user's role and redirects accordingly
const DashboardIndexRedirect = () => {
  const { user } = useOutletContext<{ user: User }>();

  switch (user.role) {
    case 'STUDENT':
      return <Navigate to="/dashboard/student" replace />;
    case 'TEACHER':
      return <Navigate to="/dashboard/teacher" replace />;
    case 'SECURITY':
      return <Navigate to="/dashboard/security" replace />;
    case 'ADMIN':
      return <Navigate to="/dashboard/admin" replace />;
    default:
      return <Navigate to="/" replace />;
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />

        {/* Authenticated Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardShell />}>
          {/* Base /dashboard route redirects based on role */}
          <Route index element={<DashboardIndexRedirect />} />

          {/* Role-specific dashboards */}
          <Route
            path="student"
            element={
              <RoleGuard allowedRoles={['STUDENT']}>
                <StudentDashboard />
              </RoleGuard>
            }
          />
          <Route
            path="teacher"
            element={
              <RoleGuard allowedRoles={['TEACHER']}>
                <TeacherDashboard />
              </RoleGuard>
            }
          />
          <Route
            path="security"
            element={
              <RoleGuard allowedRoles={['SECURITY']}>
                <SecurityDashboard />
              </RoleGuard>
            }
          />
          <Route
            path="admin"
            element={
              <RoleGuard allowedRoles={['ADMIN']}>
                <AdminDashboard />
              </RoleGuard>
            }
          />

          {/* Catch-all for undefined dashboard routes - redirect to /dashboard which redirects by role */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>

        {/* Global Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
