import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import WelcomePage from '@/pages/PopX/WelcomePage';
import LoginPage from '@/pages/PopX/LoginPage';
import CreateAccountPage from '@/pages/PopX/CreateAccountPage';
import AccountSettingsPage from '@/pages/PopX/AccountSettingsPage';
import { useLocation } from 'react-router-dom';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-100">
      <motion.div 
        className="mobile-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mobile-screen bg-white">
          <Router>
            <AnimatedRoutes />
            <Toaster />
          </Router>
        </div>
      </motion.div>
    </div>
  );
}

export default App;