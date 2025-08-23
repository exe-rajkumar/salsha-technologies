import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: ["Cloud Solutions", "Cybersecurity", "Web Development", "ERP Solutions", "Database Admin", "IT Consulting"],
    company: ["About Us", "Our Team", "Careers", "News & Updates"],
    support: ["Documentation", "Help Center", "Community", "Contact Support"]
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-2">
          
          {/* Left Container - Company Info */}
          <div className="lg:col-span-2 max-w-xs">
            <div className="flex items-center mb-4">
              <div className="w-40 h-10 flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="Salsha Technologies Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed font-medium text-sm">
              Leading provider of IT solutions, cloud management, and digital transformation 
              services. We empower businesses to thrive in the digital era.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-teal-700 hover:bg-teal-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Container - Navigation Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-3">
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-orange-400 font-heading">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to="/services"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left font-medium text-sm block"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-orange-400 font-heading">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item === "Careers" ? "/careers" : "/"}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left font-medium text-sm block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-orange-400 font-heading">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm font-medium">C-24 S/F, DDA Colony, Shahdara, Delhi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-teal-400 flex-shrink-0" size={16} />
                  <span className="text-sm font-medium">sales@salshatechnologies.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-teal-400 flex-shrink-0" size={16} />
                  <span className="text-sm font-medium">+91-9369051640</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-medium">
              © {new Date().getFullYear()} Salsha Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
