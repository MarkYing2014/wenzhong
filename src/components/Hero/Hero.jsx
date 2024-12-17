import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../assets/black.png";

const Hero = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-brown-50 to-brown-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-900 leading-tight">
              探索咖啡的
              <br />
              <span className="text-primary">美妙世界</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-brown-600 max-w-lg mx-auto md:mx-0">
              我们精心挑选来自世界各地的优质咖啡豆，为您带来独特的咖啡体验。每一杯都是匠心之作，让您品味生活的美好时刻。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-brown-700 transition duration-300"
              >
                立即购买
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full hover:bg-brown-50 transition duration-300"
              >
                了解更多
              </motion.button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[500px]">
              <img
                src={HeroImg}
                alt="Coffee Cup"
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
              />
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brown-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;