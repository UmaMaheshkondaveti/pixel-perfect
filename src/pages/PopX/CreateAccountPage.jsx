import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

function CreateAccountPage() {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState('no');

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account-settings');
  };
  
  return (
    <motion.div
      className="h-full flex flex-col justify-start items-start p-6 bg-white text-gray-800 overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-3xl font-bold mb-4 mt-10"
        variants={itemVariants}
      >
        Create your PopX account
      </motion.h1>

      <motion.form onSubmit={handleSubmit} className="w-full space-y-5" variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <label htmlFor="fullName" className="form-label-popx">Full Name<span className="text-red-500">*</span></label>
          <input type="text" id="fullName" placeholder="Marry Doe" className="form-input-popx mt-1" required />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label htmlFor="phoneNumber" className="form-label-popx">Phone number<span className="text-red-500">*</span></label>
          <input type="tel" id="phoneNumber" placeholder="Marry Doe" className="form-input-popx mt-1" required />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="form-label-popx">Email address<span className="text-red-500">*</span></label>
          <input type="email" id="email" placeholder="Marry Doe" className="form-input-popx mt-1" required />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label htmlFor="password" className="form-label-popx">Password<span className="text-red-500">*</span></label>
          <input type="password" id="password" placeholder="Marry Doe" className="form-input-popx mt-1" required />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label htmlFor="companyName" className="form-label-popx">Company name</label>
          <input type="text" id="companyName" placeholder="Marry Doe" className="form-input-popx mt-1" />
        </motion.div>
        
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Are you an Agency?<span className="text-red-500">*</span></p>
          <RadioGroup defaultValue="no" value={isAgency} onValueChange={setIsAgency} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="r-yes" />
              <Label htmlFor="r-yes" className="text-gray-700">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="r-no" />
              <Label htmlFor="r-no" className="text-gray-700">No</Label>
            </div>
          </RadioGroup>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-4">
         <Button
            type="submit"
            className="w-full btn-primary-popx text-base py-3"
          >
            Create Account
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

export default CreateAccountPage;