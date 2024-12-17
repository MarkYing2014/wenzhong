import React from "react";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeOut",
    }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      ease: "easeOut",
    }
  },
};

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: Coffee1,
      title: "黑咖啡",
      description: "我们用心烘焙并精心冲调的黑咖啡，是永恒的经典之选。"
    },
    {
      id: 2,
      image: Coffee3,
      title: "热咖啡",
      description: "享受热情的咖啡，让你的心情充满活力！"
    },
    {
      id: 3,
      image: Coffee1,
      title: "冷咖啡",
      description: "来一杯冰爽的咖啡，感受清凉的滋味！"
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <motion.div
        variants={containerVariants}
        className="text-center max-w-2xl mx-auto space-y-4 mb-12"
      >
        <motion.h1
          variants={cardVariants}
          className="font-bold text-2xl md:text-3xl lg:text-4xl text-lightgray"
        >
          烘焙咖啡
        </motion.h1>
        <motion.p
          variants={cardVariants}
          className="text-sm md:text-base lg:text-lg text-brown-600 opacity-80 px-4"
        >
          我们致力于为客户提供最佳的咖啡体验，从世界各地采购上等咖啡豆，并将其完美烘焙。
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="flex flex-col items-center p-4"
          >
            <div className="relative mb-6">
              <img 
                src={service.image}
                alt={service.title}
                className="img-shadow2 max-w-[200px] w-full mx-auto hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div className="bg-brown-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full">
              <h3 className="text-xl font-semibold mb-2 text-brown-900">{service.title}</h3>
              <p className="text-brown-600 text-sm md:text-base">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
