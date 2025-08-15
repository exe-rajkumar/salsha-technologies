import React from 'react';
import { Shield, Lock, Eye, Database, Users, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const PrivacyPolicyPage = () => {
  const policySections = [
    {
      icon: <Shield size={32} />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and company information."
    },
    {
      icon: <Lock size={32} />,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform."
    },
    {
      icon: <Eye size={32} />,
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy."
    },
    {
      icon: <Database size={32} />,
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      icon: <Users size={32} />,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You can also opt out of certain communications and data processing activities."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Compliance",
      content: "We comply with applicable data protection laws and regulations, including GDPR, CCPA, and other privacy frameworks."
    }
  ];

  return (
    <div className="pt-12 sm:pt-14">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            Privacy Policy
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-100 font-medium">
            Your privacy is important to us. Learn how we protect and handle your information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Last Updated: December 2024</h2>
              <p className="text-gray-600 font-medium">
                This Privacy Policy describes how Salsha Technologies ("we," "us," or "our") collects, uses, and shares your personal information when you use our services.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {policySections.map((section, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="border-l-4 border-teal-500 pl-6">
                  <div className="flex items-center mb-4">
                    <div className="text-teal-600 mr-4">
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
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Contact Us</h3>
              <p className="text-gray-600 font-medium mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600 font-medium">
                <p>Email: privacy@salshatechnologies.com</p>
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

export default PrivacyPolicyPage;
