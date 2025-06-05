import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function WelcomePage() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="h-full flex flex-col justify-end items-start p-6 bg-white text-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-3xl font-bold mb-2"
        variants={itemVariants}
      >
        Welcome to PopX
      </motion.h1>
      <motion.p
        className="text-lg text-gray-500 mb-8"
        variants={itemVariants}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </motion.p>

      <motion.div className="w-full space-y-3" variants={itemVariants}>
        <Button
          className="w-full btn-primary-popx text-base py-3"
          onClick={() => navigate('/create-account')}
        >
          Create Account
        </Button>
        <Button
          className="w-full btn-secondary-popx text-base py-3"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default WelcomePage;