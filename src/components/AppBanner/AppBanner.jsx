import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import AppImg from "../../assets/app/app.png";
import { motion } from "framer-motion";

const AppBanner = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="bg-gradient-to-r from-brown-900 to-brown-800 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 lg:p-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              下载我们的APP
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-8">
              随时随地享受美味咖啡，立即下载我们的APP开启您的咖啡之旅！
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </button>
              <button className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <p className="text-xs">Get it on</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full flex items-center justify-center p-6"
          >
            <img
              src={AppImg}
              alt="Mobile App"
              className="max-w-[300px] w-full object-contain mx-auto transform hover:scale-105 transition duration-300"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
