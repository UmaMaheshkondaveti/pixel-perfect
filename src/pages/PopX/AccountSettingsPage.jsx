import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

function AccountSettingsPage() {

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
    exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="h-full flex flex-col justify-start items-start bg-white text-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="w-full bg-gray-100 p-6 border-b border-gray-200"
        variants={itemVariants}
      >
        <h1 className="text-xl font-semibold text-gray-800">Account Settings</h1>
      </motion.div>

      <motion.div
        className="p-6 w-full"
        variants={itemVariants}
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <img 
              className="w-16 h-16 rounded-full object-cover"
              alt="Marry Doe profile picture"
             src="https://images.unsplash.com/photo-1683029240907-1b195812422c" />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
              <Camera size={14} className="text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Marry Doe</h2>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        <motion.p
          className="text-gray-600 text-sm leading-relaxed"
          variants={itemVariants}
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </motion.p>
      </motion.div>
      <motion.div 
        className="mt-auto w-full border-t-2 border-dashed border-gray-200 p-6"
        variants={itemVariants}
      >
      </motion.div>
    </motion.div>
  );
}

export default AccountSettingsPage;