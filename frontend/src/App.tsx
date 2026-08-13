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

// Placeholder for actual login component
const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="text-slate-600 mb-4">Authentication system will be implemented here.</p>
      <a href="/dashboard" className="text-blue-600 hover:underline">Go to Dashboard (Mock)</a>
    </div>
  </div>
);

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
