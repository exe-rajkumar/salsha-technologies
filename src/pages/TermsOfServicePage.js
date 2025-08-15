import React from 'react';
import { FileText, Scale, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const TermsOfServicePage = () => {
  const termsSections = [
    {
      icon: <FileText size={32} />,
      title: "Acceptance of Terms",
      content: "By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: <Users size={32} />,
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use."
    },
    {
      icon: <Shield size={32} />,
      title: "Service Usage",
      content: "Our services are provided for legitimate business purposes only. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services."
    },
    {
      icon: <Scale size={32} />,
      title: "Intellectual Property",
      content: "All content, features, and functionality of our services are owned by Salsha Technologies and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      icon: <AlertTriangle size={32} />,
      title: "Limitation of Liability",
      content: "In no event shall Salsha Technologies be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or use."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Termination",
      content: "We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms of Service."
    }
  ];

  return (
    <div className="pt-12 sm:pt-14">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            Terms of Service
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-100 font-medium">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Last Updated: December 2024</h2>
              <p className="text-gray-600 font-medium">
                These Terms of Service ("Terms") govern your use of Salsha Technologies services. By using our services, you agree to these terms.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {termsSections.map((section, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center mb-4">
                    <div className="text-orange-500 mr-4">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{section.title}</h3>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">{section.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12">
            <div className="bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Contact Information</h3>
              <p className="text-gray-600 font-medium mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600 font-medium">
                <p>Email: legal@salshatechnologies.com</p>
                <p>Phone: +91-9369051640</p>
                <p>Address: C-24 S/F, DDA Colony, Shahdara, Delhi</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
