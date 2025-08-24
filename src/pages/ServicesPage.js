import React, { useState } from 'react';
import { Cloud, Shield, Code, Database, Building, Headphones, CheckCircle, ArrowRight, Zap, Globe, Lock, BarChart3, BarChart, Server, Users, Settings, Monitor } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);



  const services = [
    {
      id: 'cloud-solutions',
      title: "Cloud Solutions",
      subtitle: "Scalable Cloud Infrastructure & Migration",
      description: "Transform your business with enterprise-grade cloud solutions. We help you migrate, optimize, and scale your infrastructure in the cloud.",
      icon: <Cloud size={60} />,
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "AWS/Azure/GCP Migration",
        "Infrastructure as Code (Terraform)",
        "Auto Scaling & Load Balancing",
        "Cost Optimization",
        "Security & Compliance",
        "24/7 Cloud Monitoring"
      ],
      benefits: [
        "Reduce infrastructure costs by up to 40%",
        "Improve scalability and performance",
        "Enhanced security and compliance",
        "Faster deployment and recovery"
      ],
      technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes"],
      price: "Starting at ₹25,000/month"
    },
    {
      id: 'cybersecurity',
      title: "Cybersecurity",
      subtitle: "Enterprise Security & Threat Protection",
      description: "Protect your digital assets with comprehensive cybersecurity solutions. From threat detection to compliance management.",
      icon: <Shield size={60} />,
      gradient: "from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Threat Detection & Response",
        "Security Audits & Penetration Testing",
        "Compliance Management (ISO 27001)",
        "Data Encryption & Protection",
        "Incident Response Planning",
        "Security Training & Awareness"
      ],
      benefits: [
        "Protect against 99.9% of cyber threats",
        "Meet regulatory compliance requirements",
        "Reduce security incident response time",
        "Build customer trust and confidence"
      ],
      technologies: ["SIEM", "EDR", "Firewall", "VPN", "Encryption", "Compliance Tools"],
      price: "Starting at ₹15,000/month"
    },
    {
      id: 'web-development',
      title: "Web & App Development",
      subtitle: "Modern Web & Mobile Applications",
      description: "Build cutting-edge web and mobile applications with the latest technologies. From concept to deployment and maintenance.",
      icon: <Code size={60} />,
      gradient: "from-purple-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Responsive Web Applications",
        "Mobile App Development",
        "API Development & Integration",
        "E-commerce Solutions",
        "CMS Development",
        "Performance Optimization"
      ],
      benefits: [
        "Faster time to market",
        "Improved user experience",
        "Scalable and maintainable code",
        "Cross-platform compatibility"
      ],
      technologies: ["React", "Vue.js", "Node.js", "Python", "Flutter", "React Native"],
      price: "Starting at ₹50,000/project"
    },
    {
      id: 'ai-ml-solutions',
      title: "AI/ML Solutions",
      subtitle: "Artificial Intelligence & Machine Learning",
      description: "Harness the power of artificial intelligence and machine learning to transform your business operations. We develop custom AI models, implement intelligent automation, and create smart solutions that learn and adapt.",
      icon: <BarChart size={60} />,
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions",
        "AI-Powered Automation",
        "Predictive Modeling",
        "Intelligent Chatbots"
      ],
      benefits: [
        "Automate repetitive tasks and processes",
        "Improve accuracy and efficiency",
        "Predict outcomes and trends",
        "Reduce operational costs by 40-50%"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"],
      price: "Starting at ₹45,000/month"
    },
    {
      id: 'data-analytics',
      title: "Data Analytics",
      subtitle: "Advanced Data Analysis & Insights",
      description: "Transform your raw data into actionable insights with our comprehensive data analytics services. We help you collect, process, and analyze data to uncover patterns, trends, and opportunities.",
      icon: <BarChart3 size={60} />,
      gradient: "from-blue-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Data Collection & Processing",
        "Statistical Analysis & Modeling",
        "Trend Analysis & Forecasting",
        "Performance Metrics & KPIs",
        "Data Quality Assessment",
        "Advanced Analytics Reporting"
      ],
      benefits: [
        "Improve decision making with data insights",
        "Identify new business opportunities",
        "Optimize business processes",
        "Increase revenue by 20-30%"
      ],
      technologies: ["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib"],
      price: "Starting at ₹25,000/month"
    },
    {
      id: 'dashboard-bi',
      title: "Dashboard & BI",
      subtitle: "Business Intelligence & Visualization",
      description: "Create powerful business intelligence dashboards that provide real-time insights into your business performance. We design interactive visualizations and automated reporting systems.",
      icon: <Monitor size={60} />,
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Interactive Dashboards",
        "Real-time Reporting",
        "KPI Monitoring & Alerts",
        "Executive Dashboards",
        "Custom Visualizations",
        "Automated Report Generation"
      ],
      benefits: [
        "Real-time visibility into business performance",
        "Faster decision making with instant insights",
        "Improved collaboration and communication",
        "Reduce reporting time by 80%"
      ],
      technologies: ["Tableau", "Power BI", "QlikView", "D3.js", "Plotly", "Grafana"],
      price: "Starting at ₹30,000/month"
    },
    {
      id: 'erp-solutions',
      title: "ERP Solutions",
      subtitle: "Enterprise Resource Planning",
      description: "Streamline your business operations with integrated ERP solutions. Manage finance, inventory, HR, and more in one platform.",
      icon: <Building size={60} />,
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Financial Management",
        "Inventory & Supply Chain",
        "HR & Payroll Management",
        "Customer Relationship Management",
        "Business Intelligence & Analytics",
        "Workflow Automation"
      ],
      benefits: [
        "Increase operational efficiency by 60%",
        "Reduce manual processes and errors",
        "Better decision making with real-time data",
        "Improved customer satisfaction"
      ],
      technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Salesforce"],
      price: "Starting at ₹1,00,000/implementation"
    },
    {
      id: 'database-admin',
      title: "Database Administration",
      subtitle: "Professional Database Management",
      description: "Expert database administration services for optimal performance, security, and reliability of your data infrastructure.",
      icon: <Database size={60} />,
      gradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Database Design & Optimization",
        "Performance Tuning",
        "Backup & Disaster Recovery",
        "Security & Access Management",
        "Migration & Upgrades",
        "Monitoring & Maintenance"
      ],
      benefits: [
        "Improve database performance by 50%",
        "Ensure 99.9% uptime and reliability",
        "Reduce data loss risks",
        "Optimize storage and costs"
      ],
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Redis"],
      price: "Starting at ₹20,000/month"
    },
    {
      id: 'it-consulting',
      title: "IT Consulting",
      subtitle: "Strategic Technology Guidance",
      description: "Strategic IT consulting to help you make informed technology decisions and drive digital transformation initiatives.",
      icon: <Headphones size={60} />,
      gradient: "from-teal-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Technology Strategy & Planning",
        "Digital Transformation",
        "Process Optimization",
        "Vendor Selection & Management",
        "Training & Knowledge Transfer",
        "ROI Analysis & Reporting"
      ],
      benefits: [
        "Align technology with business goals",
        "Reduce technology risks and costs",
        "Accelerate digital transformation",
        "Improve team productivity"
      ],
      technologies: ["Strategy", "Architecture", "Process", "Training", "Analytics"],
      price: "Starting at ₹5,000/hour"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <CheckCircle size={24} /> },
    { number: "100%", label: "Client Satisfaction", icon: <Zap size={24} /> },
    { number: "24/7", label: "Support Available", icon: <Globe size={24} /> },
    { number: "25+", label: "Expert Team", icon: <Users size={24} /> }
  ];

  return (
    <div className="pt-12 sm:pt-14">
      {/* Services Header */}
      <section className="bg-gradient-to-br from-teal-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-100">
            Comprehensive IT solutions designed to transform your business and drive growth
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">What We <span className="text-teal-600">Offer?</span></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud solutions to cybersecurity, we provide end-to-end IT services to help your business thrive in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <AnimatedSection key={service.id}>
          <section id={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                  {/* <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 ${service.gradient.replace('from-', 'bg-gradient-to-r from-').replace('to-', ' to-')} text-white`}>
                    {service.icon}
                    <span className="ml-2">{service.title}</span>
                  </div> */}

                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold mb-4 text-gray-900">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="text-teal-600 mt-1 mr-3 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-4 text-gray-900">Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Zap className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Get Started
                      <ArrowRight className="inline ml-2" size={20} />
                    </button>
                    <button className="px-8 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300">
                      Learn More
                    </button>
                  </div> */}
                </div>

                {/* Image */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 rounded-2xl`}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      ))}

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Let's discuss your requirements and create a customized solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
                <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;
