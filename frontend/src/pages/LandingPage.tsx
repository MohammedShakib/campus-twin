import { useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import LiveStatusBar from '../components/landing/LiveStatusBar';
import ProblemSolution from '../components/landing/ProblemSolution';
import CoreFeatures from '../components/landing/CoreFeatures';
import InteractivePreview from '../components/landing/InteractivePreview';
import WorkflowSteps from '../components/landing/WorkflowSteps';
import RoleTabs from '../components/landing/RoleTabs';
import TechStack from '../components/landing/TechStack';
import SyllabusMapping from '../components/landing/SyllabusMapping';
import AnalyticsPreview from '../components/landing/AnalyticsPreview';
import AIAssistant from '../components/landing/AIAssistant';
import SecurityAndFuture from '../components/landing/SecurityAndFuture';
import AboutProject from '../components/landing/AboutProject';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      
      <main>
        <HeroSection />
        <LiveStatusBar />
        <ProblemSolution />
        <CoreFeatures />
        <InteractivePreview />
        <WorkflowSteps />
        <RoleTabs />
        <TechStack />
        <SyllabusMapping />
        <AnalyticsPreview />
        <AIAssistant />
        <SecurityAndFuture />
        <AboutProject />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
