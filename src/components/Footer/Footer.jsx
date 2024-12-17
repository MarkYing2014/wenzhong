import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-brown-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">关于我们</h3>
            <p className="text-brown-200">
            我们充满热情地为客户提供最优质的咖啡体验，从世界各地精选上等的咖啡豆。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-brown-200 hover:text-brown-50 transition">主页</a></li>
              <li><a href="#" className="text-brown-200 hover:text-brown-50 transition">服务</a></li>
              <li><a href="#" className="text-brown-200 hover:text-brown-50 transition">关于</a></li>
              <li><a href="#" className="text-brown-200 hover:text-brown-50 transition">联系</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">联系信息</h3>
            <ul className="space-y-2 text-brown-200">
              <li>123 Coffee Street</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@coderscoffee.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-brown-200 hover:text-brown-50 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-brown-200 hover:text-brown-50 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-brown-200 hover:text-brown-50 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-brown-200 hover:text-brown-50 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-brown-700 pt-8">
          <p className="text-center text-brown-200">
            {new Date().getFullYear()} Coder's Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
