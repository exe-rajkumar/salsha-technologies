import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Database, Building, Headphones, ArrowRight, CheckCircle, Star, Award, Zap, Globe, Lock, BarChart3, Smartphone, Server, Users, Monitor, Settings, Layers, LockKeyhole, MonitorPlay, BarChart, Network, LifeBuoy } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const HomePage = () => {
    


    const services = [
        {
            icon: <Layers size={48} />,
            title: "Cloud Solutions",
            description: "Migrate to the cloud with AWS, Azure, and GCP. We optimize infrastructure for scalability, cost-efficiency, and enterprise-grade security.",
            features: ["Cloud Migration", "Auto Scaling", "Cost Optimization", "Disaster Recovery"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <LockKeyhole size={48} />,
            title: "Cybersecurity",
            description: "Protect your business with multi-layered security solutions including threat detection, compliance management, and 24/7 monitoring.",
            features: ["Threat Detection", "Compliance", "Penetration Testing", "Security Audits"],
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <MonitorPlay size={48} />,
            title: "Product Development",
            description: "Build innovative digital products from concept to launch. We create scalable web apps, mobile applications, and enterprise software solutions.",
            features: ["Product Strategy", "Full-Stack Development", "Mobile Apps", "Enterprise Software"],
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <BarChart size={48} />,
            title: "AI/ML Solutions",
            description: "Harness AI and machine learning to transform operations. We develop custom models, intelligent automation, and predictive solutions.",
            features: ["Machine Learning", "AI Automation", "Predictive Models", "Computer Vision"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <BarChart3 size={48} />,
            title: "Data Analytics",
            description: "Transform raw data into actionable insights. We help collect, process, and analyze data to uncover patterns and opportunities.",
            features: ["Data Processing", "Statistical Analysis", "Trend Analysis", "Performance Metrics"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <Monitor size={48} />,
            title: "Dashboard & BI",
            description: "Create powerful business intelligence dashboards with real-time insights. Monitor KPIs and make data-driven decisions.",
            features: ["Interactive Dashboards", "Real-time Reporting", "KPI Monitoring", "Executive Insights"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <Network size={48} />,
            title: "ERP Solutions",
            description: "Streamline operations with integrated ERP systems. Manage finance, inventory, HR, and customer relationships in one platform.",
            features: ["Process Automation", "Financial Management", "Inventory Control", "HR Management"],
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <LifeBuoy size={48} />,
            title: "IT Support",
            description: "Ensure smooth technology infrastructure with 24/7 monitoring, proactive maintenance, and rapid technical support.",
            features: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk Support", "IT Consulting"],
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const stats = [
        { number: "200+", label: "Clients Served", icon: "👥" },
        { number: "98%", label: "Client Retention", icon: "💯" },
        { number: "24/7", label: "Support Available", icon: "🕒" },
        { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" }
    ];

    const testimonials = [
        {
            name: "Rajesh Kumar",
            company: "TechStart India",
            text: "Salsha Technologies transformed our infrastructure. Their cloud migration saved us 40% on costs.",
            rating: 5
        },
        {
            name: "Priya Sharma",
            company: "FinanceFlow NBFC",
            text: "Excellent ERP implementation. Our operations are now 60% more efficient.",
            rating: 5
        },
        {
            name: "Amit Patel",
            company: "DataDrive Solutions",
            text: "Outstanding cybersecurity services. We feel completely secure with their protection.",
            rating: 5
        }
    ];

    const features = [
        {
            icon: <Zap size={32} />,
            title: "Lightning Fast",
            description: "Optimized performance with 99.9% uptime guarantee"
        },
        {
            icon: <Lock size={32} />,
            title: "Enterprise Security",
            description: "Bank-level security with end-to-end encryption"
        },
        {
            icon: <Globe size={32} />,
            title: "Global Reach",
            description: "Cloud infrastructure spanning multiple continents"
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Real-time Analytics",
            description: "Advanced monitoring and performance insights"
        },
        {
            icon: <Smartphone size={32} />,
            title: "Mobile First",
            description: "Responsive design that works on all devices"
        },
        {
            icon: <Server size={32} />,
            title: "Scalable Architecture",
            description: "Grow your infrastructure as your business grows"
        }
    ];

    const teamMembers = [
        {
            name: "Arjun Singh",
            role: "CEO & Founder",
            image: "👨‍💼",
            description: "15+ years in IT leadership and digital transformation"
        },
        {
            name: "Priya Verma",
            role: "CTO",
            image: "👩‍💻",
            description: "Expert in cloud architecture and cybersecurity"
        },
        {
            name: "Rahul Mehta",
            role: "Head of Development",
            image: "👨‍💻",
            description: "Full-stack development and DevOps specialist"
        },
        {
            name: "Anjali Desai",
            role: "Head of Operations",
            image: "👩‍💼",
            description: "Process optimization and client success expert"
        }
    ];

    const blogPosts = [
        {
            title: "The Future of Cloud Computing in 2024",
            excerpt: "Discover the latest trends and technologies shaping the cloud landscape...",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            category: "Cloud"
        },
        {
            title: "Cybersecurity Best Practices for SMEs",
            excerpt: "Essential security measures every small business should implement...",
            date: "Dec 10, 2024",
            readTime: "7 min read",
            category: "Security"
        },
        {
            title: "Digital Transformation Success Stories",
            excerpt: "Real-world examples of businesses that transformed with technology...",
            date: "Dec 5, 2024",
            readTime: "6 min read",
            category: "Transformation"
        }
    ];

    const achievements = [
        { icon: <Award size={24} />, title: "Microsoft Gold Partner", description: "Certified cloud solutions provider" },
        { icon: <Award size={24} />, title: "AWS Advanced Consulting", description: "Premier consulting partner status" },
        { icon: <Award size={24} />, title: "ISO 27001 Certified", description: "Information security management" },
        { icon: <Award size={24} />, title: "Google Cloud Partner", description: "Official cloud services partner" }
    ];

    return (
        <div className="pt-12 sm:pt-14">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-600 via-teal-700 to-orange-500 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-1 gap-12 items-center">
                        {/* Hero Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in font-heading">
                                Solution-Driven IT for &nbsp;
                                <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent font-extrabold">
                                    Ambitious Businesses
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Salsha Technologies helps NBFCs and startups thrive in the cloud era with secure,
                                scalable digital foundations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/services" className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
                                    Explore Solutions
                                    <ArrowRight className="ml-2" size={20} />
                                </Link>
                                <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 inline-flex items-center">
                                    Schedule a Demo
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Salsha Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
                            Why Choose <span className="text-teal-600">Salsha</span>?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Your Business, Always On – Powering solutions with the pulse of Enterprise IT Solutions: AI & Business Intelligence Transformation, Data & Analytics, Database & Cloud – from Infrastructure to Intelligent Managed Services; transforming Enterprise ERP and Fusion Managed Services, Business Continuity Planning (BCP), Disaster Recovery, and IT Outsourcing.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatedSection delay={100}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Lightning Fast</h3>
                                <p className="text-gray-600 font-medium">Lightning-fast performance with 99.9% uptime guarantee and sub-second response times.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <Shield size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Enterprise Security</h3>
                                <p className="text-gray-600 font-medium">Bank-level security with end-to-end encryption and SOC 2 Type II compliance.</p>
                            </div>
                        </AnimatedSection>



                        <AnimatedSection delay={400}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <BarChart3 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Real-time Analytics</h3>
                                <p className="text-gray-600 font-medium">Advanced analytics and insights with real-time dashboards and predictive modeling.</p>
                            </div>
                        </AnimatedSection>



                        <AnimatedSection delay={500}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <Server size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Cloud Infrastructure</h3>
                                <p className="text-gray-600 font-medium">Robust cloud infrastructure with auto-scaling, load balancing, and disaster recovery.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={600}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <CheckCircle size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Transparent Pricing</h3>
                                <p className="text-gray-600 font-medium">No hidden fees, no surprise charges. Clear, predictable pricing for all our services.</p>
                            </div>
                        </AnimatedSection>



                        <AnimatedSection delay={700}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <Monitor size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">24/7 Monitoring</h3>
                                <p className="text-gray-600 font-medium">Round-the-clock system monitoring with instant alerts and proactive issue resolution.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={800}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <Building size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Business Focus</h3>
                                <p className="text-gray-600 font-medium">We speak business, not just tech. Every solution is designed to drive your business forward.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={900}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <Settings size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Custom Solutions</h3>
                                <p className="text-gray-600 font-medium">Tailored solutions designed specifically for your unique business requirements and goals.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={1000}>
                            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-6">
                                    <Star size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Continuous Learning</h3>
                                <p className="text-gray-600 font-medium">Our team stays current with the latest technologies to provide cutting-edge solutions.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
                            What We <span className="text-teal-600">Do</span>?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                            We transform businesses through innovative technology solutions, helping you navigate the digital landscape with confidence and achieve sustainable growth
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <AnimatedSection key={index} delay={index * 150}>
                                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full flex flex-col overflow-hidden">
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={service.image} 
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    
                                                                        {/* Content Section */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed font-medium">{service.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 font-heading">
                                About <span className="text-teal-600">Salsha Technologies</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p className="font-medium">
                                    At Salsha Technologies, we are redefining the way businesses manage finance and technology. 
                                    Founded on 1st August 2025, our vision is to empower enterprises with innovative NBFC solutions, 
                                    intelligent cloud services, and next-generation digital transformation strategies.
                                </p>
                                <p className="font-medium">
                                    We bring together deep expertise in financial services and enterprise IT solutions to deliver value 
                                    that is secure, scalable, and future-ready. Whether it's enabling businesses with smart lending 
                                    and NBFC operations, or driving growth through cloud adoption, data analytics, and managed services, 
                                    we help organizations achieve sustainable success.
                                </p>
                                <p className="font-medium">
                                    Our core values are built on trust, innovation, and resilience. We aim to be the partner of choice 
                                    for businesses seeking not just solutions, but long-term strategic advantage.
                                </p>
                                <p className="font-medium">
                                    With a team passionate about finance, technology, and transformation, we are committed to bridging 
                                    the gap between infrastructure and intelligence, helping enterprises thrive in an increasingly digital economy.
                                </p>
                                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-teal-600 font-heading">15+</div>
                                        <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-500 font-heading">100%</div>
                                        <div className="text-sm text-gray-500 font-medium">Success Rate</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-teal-600 font-heading">24/7</div>
                                        <div className="text-sm text-gray-500 font-medium">Support</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={300}>
                            <div className="relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Salsha Technologies Office" 
                                    className="w-full h-96 object-cover rounded-3xl shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>



            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
                            Meet Our <span className="text-teal-600">Leadership</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Experienced professionals dedicated to your success
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <AnimatedSection key={index} delay={index * 150}>
                                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="text-6xl mb-4">{member.image}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{member.name}</h3>
                                    <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm font-medium">{member.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
                            Our <span className="text-teal-600">Achievements</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Recognized for excellence in technology solutions
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <AnimatedSection key={index} delay={index * 100}>
                                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                                    <div className="text-teal-600 mb-4 flex justify-center">
                                        {achievement.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{achievement.title}</h3>
                                    <p className="text-gray-600 text-sm font-medium">{achievement.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Preview Section */}
            {/* <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
                            Latest <span className="text-teal-600">Insights</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Stay updated with the latest trends and best practices in technology
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <AnimatedSection key={index} delay={index * 150}>
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="mb-4">
                                        <span className="px-3 py-1 bg-teal-100 text-teal-600 text-sm rounded-full font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 font-medium italic">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span className="font-medium">{post.date}</span>
                                        <span className="font-medium">{post.readTime}</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="text-center mt-12">
                        <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            View All Articles
                            <ArrowRight className="inline ml-2" size={20} />
                        </button>
                    </AnimatedSection>
                </div>
            </section> */}

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
                            What Our <span className="text-teal-600">Clients Say</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium">Real feedback from real businesses</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <AnimatedSection key={index} delay={index * 200}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="text-yellow-500 fill-current" size={20} />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-6 italic font-medium">"{testimonial.text}"</p>
                                    <div>
                                        <div className="font-semibold text-gray-900 font-heading">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500 font-medium">{testimonial.company}</div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-teal-600 to-orange-500 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto font-medium">
                            Join hundreds of businesses that have already accelerated their growth with our technology solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
                                Get Started Today
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 inline-flex items-center">
                                Schedule a Demo
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
