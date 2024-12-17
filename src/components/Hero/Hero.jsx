import React from "react";
import Navbar from "../Navbar/Navbar";
import bgSlate from "../../assets/bg-slate.png";
import blackImg from "../../assets/black.png";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${bgSlate})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
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

  

  

const Hero = () => {

  const [sidebar, setsidebar] = React.useState(false);


  return (
    <motion.main  
    style={bgImage}
    initial="hidden"
    whileInView={"visible"}
    viewport={{ amount: 0.8 }}
    variants={cardVariants} 
    >
      <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ amount: 0.8 }}
      className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar */}
          <Navbar sidebar={sidebar} setsidebar={setsidebar} />
          {/* Hero Content */}
          <div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 place-items-center min-h-[750px]">
            {/* Add your hero content here */}
            <div className="text-center md:text-left md:pl-12 space-y-28">
              <motion.h1
                initial={{ opacity: 0,y: -100 }}
                animate={{ opacity: 1,y: 0 }}
                transition={{ duration: 1,type: "spring", stiffness: 100, damping: 10 }}
                className="text-4xl md:text-6xl font-bold mb-4 text-lightOrange text-shadow"
              >
                欢迎来到文种咖啡
              </motion.h1>    
              <motion.p
                initial={{ opacity: 0,y: -100 }}
                animate={{ opacity: 1,y: 0 }}
                transition={{type: "spring", stiffness: 100, damping: 10, duration: 1 }}
                className="text-lg md:text-xl opacity-80 mb-8 text-brown-100 text-shadow"
              >
                欢迎来到文种咖啡，这里是一家专业的咖啡店，我们的优质咖啡和独特的咖啡体验将为您提供无与伦比的滋味和享受。
              </motion.p>

              <motion.button
                initial={{ opacity: 0,y: -100 }}
                animate={{ opacity: 1,y: 0 }}
                transition={{type: "spring", stiffness: 100, damping: 10, duration: 1 }}
                className="bg-primary text-lightOrange px-6 py-3 rounded-md hover:bg-primaryDark "
              >
                选购开始
              </motion.button>
            </div>

            {/* Image */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0,scale: 0 }}
                animate={{ opacity: 1,scale: 1 }}
                transition={{type : "spring", stiffness: 100, damping: 10, duration: 1 }}
                src={blackImg}
                alt="Coffee"
                className="relative z-40 h-[400px] w-[400px] md:h-[400px] md:w-[500px] lg:h-[700px] lg:w-[700px] img-shadow"
              />
            </div>
            {/* Add more content here */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}
              className="h-[180px] w-[180px] absolute top-24 right-100 border-[20px] rounded-full z-10 border-primary"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}
              className="text-[140px] scale-150 font-bold text-dark-gray/40 leading-none z-0"
            >
              Black Tumbler
            </motion.div>
          </div>
        </div>
        {/* Add more hero content here */}

        {
          sidebar && (
            <motion.div initial={{ opacity: 0,y: -100 }} 
            animate={{ opacity: 1,y: 0 }} 
            transition={{ duration: 1,type: "spring", stiffness: 100, damping: 10 }}
             style={{ position: "absolute", top: 0, right: 0, width: "150px", height: "100%", background: "linear-gradient(to right, rgba(139,69,19,0.7), rgba(139,69,19,1))", backdropFilter: "blur(0.5rem)", zIndex: 10 }}>
            <div className="flex flex-col items-center justify-center h-full w-full">
           
            
            <div className= "flex flex-col justify-center items-center gap-6 text-white">
  
              <div style={{ width: "1px", height: "70px", backgroundColor: "white" }}></div>
  
              <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
                <FaFacebookF  color="#3b5998" className="text-2xl"   />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
                <FaTwitter color="#1da1f2" className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
                <FaInstagram color="#e1306c" className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
                <FaLinkedin color="#0077b5" />
              </div>
  
              <div style={{ width: "1px", height: "70px", backgroundColor: "white" }}></div>
             
            </div>
          </div>
          </motion.div> 
          )
        }
        
      </motion.section>    
    </motion.main>
  );
};

export default Hero;