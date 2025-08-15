import React, { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveMap from '../components/InteractiveMap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Office Address",
      details: ["C-24 S/F, DDA Colony", "Shahdara, Delhi, India"]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: ["sales@salshatechnologies.com", "support@salshatechnologies.com"]
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: ["+91-9369051640", "+91-11-12345678"]
    }
  ];

  return (
    <div className="pt-12 sm:pt-14">
      {/* Contact Header */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-100">
            Ready to transform your business? Let's discuss your requirements and create the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Get In Touch Section */}
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading text-center">Get In Touch</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Thank You!</h3>
                  <p className="text-gray-600 text-lg">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="web-development">Web Development</option>
                        <option value="erp-solutions">ERP Solutions</option>
                        <option value="database-admin">Database Administration</option>
                        <option value="it-consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <ArrowRight className="inline ml-2" size={20} />
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact Information Section */}
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading text-center">Contact Information</h3>
              <p className="text-gray-600 mb-8 text-center">
                Get in touch with our team of experts. We're here to help you with all your IT needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-teal-600">
                        {info.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-3 font-heading">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-gray-200 mt-8">
                <h4 className="font-semibold text-gray-900 mb-4 font-heading text-center">Follow Us</h4>
                <div className="flex justify-center space-x-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 bg-gray-100 hover:bg-teal-100 rounded-lg flex items-center justify-center transition-all duration-200"
                    >
                      <Icon className="text-gray-600 hover:text-teal-600" size={24} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Visit Our Office Section */}
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading text-center">Visit Our Office</h3>
              <p className="text-gray-600 mb-8 text-center">
                Located in the heart of Delhi, our office is easily accessible and ready to welcome you.
              </p>
              
              <div className="rounded-2xl overflow-hidden mb-6">
                <InteractiveMap />
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Address:</strong> C-24 S/F, DDA Colony, Shahdara, Delhi, India
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
