import { motion } from "framer-motion"; 
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ( {sidebar, setsidebar} ) => {
  return (
    <nav className="absolute top-0 left-0 right-0 w-full pt-10 text-white z-40">
    <div className="containers mx-auto px-8 md:px-16">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.h1 initial={{ opacity: 0,y: -100 }} 
        animate={{ opacity: 1,y: 0 }} 
        transition={{ duration: 1,type: "spring", stiffness: 100, damping: 10 }} className="text-2xl font-semibold text-primary">文种 <span className="text-lightOrange ">咖啡</span></motion.h1>
      </div>
      <div className="flex justify-end">
        <motion.div initial={{ opacity: 0,y: -100 }} 
        animate={{ opacity: 1,y: 0 }} 
        transition={{ duration: 1,type: "spring", stiffness: 100, damping: 10 }}
        onClick={() => setsidebar(!sidebar)}
        >
          <GiHamburgerMenu className="text-3xl cursor-pointer" />
        </motion.div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
