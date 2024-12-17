import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import coverImg from "../../assets/coffee-cover.jpg";
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${coverImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%"
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      ease: "easeOut",
    }
    },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0 ,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeOut",
    }
    },
};

const AppBanner = () => {
  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    whileInView={"visible"}
    viewport={{ amount: 0.8 }}

    className="container my-1">
       <motion.div style={BannerStyle}
       variants={cardVariants}
       initial="hidden"
       whileInView={"visible"}
       viewport={{ amount: 0.8 }}

       className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl sm:mr-16">
        <div className="sm:flex-1 sm:px-16 px-6 py-12 sm:ml-16">
          <div className="flex justify-center sm:justify-end items-center">
            <motion.h1 initial={{ opacity: 0,y: 100 }} 
            animate={{ opacity: 1,y: 0 }} 
            transition={{ duration: 1,type: "spring", stiffness: 100, damping: 10, delay: 0.5 }} className="text-4xl font-bold text-white"> 下载 App </motion.h1>
          </div>
          <motion.p 
          initial={{ opacity: 0,y: 100 }} 
          animate={{ opacity: 1,y: 0 }} 
          transition={{ duration: 1,type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
          className="flex justify-center text-lg sm:justify-end my-4 text-white">探索更多特色咖啡</motion.p>
          <div className="flex justify-center sm:justify-end items-center space-x-8">
            <motion.a 
              href="https://apps.apple.com/us/app/id1584533456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg transition duration-300"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 10 }}
            >
              <FaApple className="text-2xl mr-2" />
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </motion.a>
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.coders.coffee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg transition duration-300"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 10 }}
            >
              <FaGooglePlay className="text-2xl mr-2" />
              <div>
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </motion.a>
          </div>
        </div>
       </motion.div>
    </motion.div>
  );
};

export default AppBanner;
