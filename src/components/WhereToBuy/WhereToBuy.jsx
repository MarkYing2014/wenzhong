import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import worldMapImg from "../../assets/world-map.png";
import { motion } from "framer-motion";

const LocationCard = ({ name, address, phone, hours }) => (
  <div className="bg-brown-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-semibold mb-4 flex items-center text-brown-900">
      <FaMapMarkerAlt className="text-primary mr-2" />
      {name}
    </h3>
    <p className="text-brown-700 mb-2">{address}</p>
    <p className="text-brown-700 flex items-center mb-2">
      <FaPhone className="text-secondary mr-2" />
      {phone}
    </p>
    <p className="text-brown-700 flex items-center">
      <FaClock className="text-secondary mr-2" />
      {hours}
    </p>
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

const WhereToBuy = () => {
  const locations = [
    {
      name: "文种咖啡(东城)",
      address: "123 文种路,东城区",
      phone: "(123) 456-7890",
      hours: "Mon-Sun: 7AM - 8PM"
    },
    {
      name: "文种咖啡(西城)",
      address: "456 文种路,西城区",
      phone: "(987) 654-3210",
      hours: "Mon-Sun: 7AM - 8PM"
    }
   
    
  ];

  return (
    <motion.div variants={containerVariants}
    initial="hidden"
    whileInView={"visible"}
    viewport={{ amount: 0.8 }}
     className="container my-36">
       <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
        <div>

        <motion.h2
         variants={cardVariants}
         initial="hidden"
         whileInView={"visible"}
         viewport={{ amount: 0.8 }}
         className="text-3xl font-bold text-center mb-4 text-brown-900">哪里可以品尝</motion.h2>
        <motion.p variants={cardVariants} 
         initial="hidden"
         whileInView={"visible"}
         viewport={{ amount: 0.8 }}
         className="text-center text-brown-700 mb-12">光临我们的咖啡店，享受优质咖啡和独特的咖啡体验</motion.p>

         
        <motion.div variants={cardVariants} 
         initial="hidden"
         whileInView={"visible"}
         viewport={{ amount: 0.8 }}
           className="grid grid-cols-2 gap-8">
        {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </motion.div>


        </div>

        <motion.div variants={cardVariants} 
        initial="hidden" whileInView={"visible"} viewport={{ amount: 0.8 }} 
        className="col-span-2">
          <motion.img
           variants={cardVariants}
           initial={{opacity: 0, scale: 0.6}}
           whileInView={{opacity: 1, scale: 1.2}}
           transition={{duration: 1, type: "spring", stiffness: 100, damping: 10,delay: 1}}
           whileHover={{scale: 1.2}}
           src={worldMapImg} alt="Where to Buy" className="w-full sm:w-[500px] mx-auto" />
     
        </motion.div>


       

       </div>


    </motion.div>
    /*{/* <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-brown-900">Where to Find Us</h2>
        <p className="text-center text-brown-700 mb-12">Visit our stores and experience the perfect cup of coffee</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </section>*/
  );
};

export default WhereToBuy;
