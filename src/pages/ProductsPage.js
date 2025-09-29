import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  BarChart, 
  Database, 
  Building, 
  Monitor, 
  Zap, 
  Globe, 
  Lock, 
  BarChart3, 
  Server, 
  Users, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Award,
  TrendingUp,
  Target,
  Lightbulb,
  UserCheck,
  PieChart,
  Brain,
  LineChart,
  CloudLightning,
  ShieldCheck,
  Workflow,
  Cpu,
  UserPlus,
  BarChart4
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 'dsa-portal',
      title: "Salsha DSA Portal",
      subtitle: "Direct Sales Agent Management",
      description: "Comprehensive DSA portal for managing direct sales agents, tracking leads, processing applications, and monitoring performance. Streamline your sales operations with real-time analytics and automated workflows.",
      icon: null,
      gradient: "from-teal-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Agent Registration & Onboarding",
        "Lead Management & Tracking",
        "Application Processing",
        "Commission Calculation",
        "Performance Analytics",
        "Real-time Reporting"
      ],
      benefits: [
        "Increase sales conversion by 35%",
        "Streamline agent management",
        "Automate commission calculations",
        "Improve lead tracking accuracy"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker", "AWS"],
      category: "BFSI"
    },
    {
      id: 'business-intelligence-portal',
      title: "Salsha BI Portal",
      subtitle: "Business Intelligence Platform",
      description: "Comprehensive business intelligence portal that transforms raw data into actionable insights. Get real-time dashboards, predictive analytics, and intelligent reporting for better business decisions.",
      icon: null,
      gradient: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Real-time Dashboards",
        "Predictive Analytics",
        "Automated Reporting",
        "KPI Monitoring",
        "Data Integration",
        "Executive Insights"
      ],
      benefits: [
        "Make data-driven decisions 60% faster",
        "Identify business opportunities",
        "Monitor performance in real-time",
        "Reduce manual reporting by 90%"
      ],
      technologies: ["Power BI", "Tableau", "Python", "SQL Server", "Azure", "Docker"],
      category: "Analytics"
    }
  ];


  const categories = [
    { name: "All", count: products.length },
    { name: "AI/ML", count: products.filter(p => p.category === "AI/ML").length },
    { name: "Analytics", count: products.filter(p => p.category === "Analytics").length },
    { name: "Cloud", count: products.filter(p => p.category === "Cloud").length },
    { name: "Security", count: products.filter(p => p.category === "Security").length },
    { name: "ERP", count: products.filter(p => p.category === "ERP").length },
    { name: "BFSI", count: products.filter(p => p.category === "BFSI").length },
    { name: "IT Services", count: products.filter(p => p.category === "IT Services").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-12 sm:pt-14">
      {/* Products Header */}
      <section className="bg-gradient-to-br from-teal-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            Our Products
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-100 font-medium">
            Innovative software solutions designed to transform your business operations and drive digital growth
          </p>
        </div>
      </section>


      {/* Category Filter */}
      <AnimatedSection>
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 150}>
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-20`}></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">{product.title}</h3>
                      <p className="text-teal-600 font-semibold">{product.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed font-medium">{product.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Key Features</h4>
                        <ul className="space-y-2">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="text-teal-600 mt-1 mr-2 flex-shrink-0" size={16} />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Benefits</h4>
                        <ul className="space-y-2">
                          {product.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <TrendingUp className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={16} />
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-gray-900">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                        {product.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            +{product.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Link
                        to="/contact"
                        className="px-8 py-3 bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center"
                      >
                        Know More
                        <ArrowRight className="ml-2" size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Why Choose Our <span className="text-teal-600">Products</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Built with enterprise-grade security, scalability, and performance in mind
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Enterprise Security</h3>
                <p className="text-gray-600 font-medium">Bank-level security with end-to-end encryption and compliance certifications</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Lightning Fast</h3>
                <p className="text-gray-600 font-medium">Optimized performance with 99.9% uptime and sub-second response times</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Easy Integration</h3>
                <p className="text-gray-600 font-medium">Seamless integration with existing systems and third-party applications</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Global Scale</h3>
                <p className="text-gray-600 font-medium">Built to scale globally with multi-region deployment capabilities</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">24/7 Support</h3>
                <p className="text-gray-600 font-medium">Round-the-clock technical support from our expert team</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Proven Results</h3>
                <p className="text-gray-600 font-medium">Trusted by 500+ enterprises with measurable business outcomes</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto font-medium">
              Schedule a demo to see how our products can drive your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                Schedule Demo
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 inline-flex items-center"
              >
                Know More
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ProductsPage;
