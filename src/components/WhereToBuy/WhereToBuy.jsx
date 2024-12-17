import React from "react";
import { motion } from "framer-motion";
import Map from "../../assets/world-map.png";

const WhereToBuy = () => {
  const locations = [
    {
      id: 1,
      city: "北京",
      address: "朝阳区三里屯路19号",
      phone: "+86 10 8888 8888"
    },
    {
      id: 2,
      city: "上海",
      address: "静安区南京西路1788号",
      phone: "+86 21 6888 8888"
    },
    {
      id: 3,
      city: "广州",
      address: "天河区天河路208号",
      phone: "+86 20 3888 8888"
    },
    {
      id: 4,
      city: "深圳",
      address: "福田区深南大道1088号",
      phone: "+86 755 8888 8888"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brown-900 mb-4">
          门店位置
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-brown-600 max-w-2xl mx-auto">
          我们在全国各大城市都设有门店，欢迎您前来品尝我们的咖啡
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Map Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={Map}
            alt="Store Locations Map"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent rounded-lg"></div>
        </motion.div>

        {/* Locations List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {locations.map((location) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: location.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-brown-900 mb-2">
                {location.city}
              </h3>
              <p className="text-brown-600 text-sm mb-2">{location.address}</p>
              <p className="text-primary font-medium text-sm">{location.phone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
