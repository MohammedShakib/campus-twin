import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectDetails from './components/landing/ProjectDetails';

// Placeholder for actual login component
const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="text-slate-600 mb-4">Authentication system will be implemented here.</p>
      <a href="/" className="text-blue-600 hover:underline">Go back home</a>
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
