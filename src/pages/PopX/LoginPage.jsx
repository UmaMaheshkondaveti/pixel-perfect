import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function LoginPage() {
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
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account-settings');
  };

  return (
    <motion.div
      className="h-full flex flex-col justify-start items-start p-6 bg-white text-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-3xl font-bold mb-2 mt-10"
        variants={itemVariants}
      >
        Signin to your PopX account
      </motion.h1>
      <motion.p
        className="text-lg text-gray-500 mb-8"
        variants={itemVariants}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </motion.p>

      <motion.form onSubmit={handleSubmit} className="w-full space-y-6" variants={itemVariants}>
        <div>
          <label htmlFor="email" className="form-label-popx">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="form-input-popx mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label-popx">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="form-input-popx mt-1"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 text-base py-3"
        >
          Login
        </Button>
      </motion.form>
    </motion.div>
  );
}

export default LoginPage;