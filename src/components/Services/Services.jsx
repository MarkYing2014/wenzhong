import React from "react";
import { FaCoffee, FaShoppingBag, FaMugHot, FaTruck } from "react-icons/fa";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";
import {motion, stagger } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-brown-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="text-primary text-3xl mb-4">
      <Icon />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-brown-900">{title}</h3>
    <p className="text-brown-600">{description}</p>
  </div>
);

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

const Services = () => {
  const servicesData = [
    {
      id: 1 ,
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


    <><motion.div variants ={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ amount: 0.8 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{   amount: 0.8 }}
        className="container my-16 space-y-4"
      >
        <div className="text-center max-w-lg mx-auto space-y-2">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="font-bold text-lightgray text-3xl"
          >

            烘焙咖啡
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="text-lg text-brown-600 opacity-50"
          >
            我们致力于为客户提供最佳的咖啡体验，从世界各地采购上等咖啡豆，并将其完美烘焙。
          </motion.p>
        </div>



      </motion.div>

    </motion.div><div className="container mx-auto px-4">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <motion.div variants={cardVariants}
             initial="hidden"
             whileInView={"visible"}
             viewport={{ amount: 0.8 }}
            className="text-center p-4 space-y-6">
              <img src ={service.image}
              alt=""
              className = "img-shadow2 max-w-[200px] mx-auto hover:scale-110 transition duration-300 cursor-pointer"/>
              <div className="bg-brown-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 text-brown-900">{service.title}</h3>
                <p className="text-brown-600">{service.description}</p>
                </div>
              </motion.div>
          ))}
        </div>


      </div></>  

 
  );    


};

export default Services;
