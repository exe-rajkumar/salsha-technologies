import React from 'react';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const CookiePolicyPage = () => {
  const cookieTypes = [
    {
      icon: <Cookie size={32} />,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.",
      examples: ["Authentication", "Security", "Session management"]
    },
    {
      icon: <Settings size={32} />,
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
      examples: ["Language preferences", "User interface customization", "Form data"]
    },
    {
      icon: <Eye size={32} />,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Page views", "User behavior", "Performance metrics"]
    },
    {
      icon: <Shield size={32} />,
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      examples: ["Ad targeting", "Campaign effectiveness", "Social media integration"]
    }
  ];

  return (
    <div className="pt-12 sm:pt-14">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            Cookie Policy
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-100 font-medium">
            Learn how we use cookies to enhance your browsing experience.
          </p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Last Updated: December 2024</h2>
              <p className="text-gray-600 font-medium">
                This Cookie Policy explains how Salsha Technologies uses cookies and similar technologies to recognize you when you visit our website.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-12">
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">What Are Cookies?</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8 mb-12">
            {cookieTypes.map((type, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-teal-600 flex-shrink-0">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{type.title}</h3>
                      <p className="text-gray-600 font-medium mb-3">{type.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full font-medium"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Managing Your Cookie Preferences</h3>
              <div className="space-y-4 text-gray-600 font-medium">
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                  <li>Cookie consent: Use our cookie banner to manage preferences</li>
                  <li>Third-party opt-outs: Visit the websites of third-party providers</li>
                  <li>Contact us: Email us for assistance with cookie management</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Contact Us</h3>
              <p className="text-gray-600 font-medium mb-4">
                If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicyPage;
