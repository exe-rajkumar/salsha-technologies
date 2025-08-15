import React from 'react';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Globe, Award, ArrowRight, CheckCircle, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const CareersPage = () => {
    const jobOpenings = [
        {
            title: "Senior Full Stack Developer",
            location: "Delhi, India",
            type: "Full-time",
            salary: "₹12-18 LPA",
            department: "Engineering",
            experience: "3-5 years",
            description: "We're looking for a passionate Full Stack Developer to join our team and help build scalable web applications.",
            skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
            postedDate: "Dec 20, 2024"
        },
        {
            title: "Cloud Solutions Architect",
            location: "Remote",
            type: "Full-time",
            salary: "₹15-25 LPA",
            department: "Cloud Services",
            experience: "5-8 years",
            description: "Lead cloud architecture design and implementation for enterprise clients.",
            skills: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
            postedDate: "Dec 18, 2024"
        },
        {
            title: "Cybersecurity Analyst",
            location: "Delhi, India",
            type: "Full-time",
            salary: "₹8-12 LPA",
            department: "Security",
            experience: "2-4 years",
            description: "Protect our clients' digital assets with advanced security monitoring and threat detection.",
            skills: ["SIEM", "Penetration Testing", "Compliance", "Incident Response"],
            postedDate: "Dec 15, 2024"
        },
        {
            title: "DevOps Engineer",
            location: "Hybrid",
            type: "Full-time",
            salary: "₹10-16 LPA",
            department: "Operations",
            experience: "3-6 years",
            description: "Streamline our development and deployment processes with modern DevOps practices.",
            skills: ["CI/CD", "Docker", "Kubernetes", "Jenkins", "Git"],
            postedDate: "Dec 12, 2024"
        },
        {
            title: "UI/UX Designer",
            location: "Delhi, India",
            type: "Full-time",
            salary: "₹6-10 LPA",
            department: "Design",
            experience: "2-4 years",
            description: "Create beautiful and intuitive user experiences for our digital products.",
            skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
            postedDate: "Dec 10, 2024"
        },
        {
            title: "Sales Executive",
            location: "Delhi, India",
            type: "Full-time",
            salary: "₹5-8 LPA + Commission",
            department: "Sales",
            experience: "1-3 years",
            description: "Drive business growth by building relationships with potential clients.",
            skills: ["B2B Sales", "CRM", "Presentation Skills", "Negotiation"],
            postedDate: "Dec 8, 2024"
        }
    ];

    const benefits = [
        {
            icon: <Heart size={32} />,
            title: "Health & Wellness",
            description: "Comprehensive health insurance and wellness programs for IT professionals"
        },
        {
            icon: <Zap size={32} />,
            title: "Learning & Growth",
            description: "Continuous learning with latest tech certifications and training programs"
        },
        {
            icon: <Globe size={32} />,
            title: "Flexible Work",
            description: "Remote work options and flexible hours for better work-life balance"
        },
        {
            icon: <Award size={32} />,
            title: "Performance Rewards",
            description: "Performance bonuses and recognition for technical excellence"
        },
        {
            icon: <Users size={32} />,
            title: "Tech Community",
            description: "Collaborative environment with regular tech meetups and hackathons"
        },
        {
            icon: <Clock size={32} />,
            title: "Work-Life Balance",
            description: "Generous leave policies and flexible scheduling for developers"
        }
    ];

    const values = [
        {
            title: "Innovation First",
            description: "We constantly push boundaries and embrace cutting-edge technologies"
        },
        {
            title: "Technical Excellence",
            description: "Our success is measured by the quality of our technical solutions"
        },
        {
            title: "Team Collaboration",
            description: "Great software happens when developers work together"
        },
        {
            title: "Continuous Learning",
            description: "We invest in our team's technical growth and skill development"
        }
    ];

    const handleApplyNow = (jobTitle) => {
        const subject = `Application for ${jobTitle} position`;
        const body = `Dear HR Team,\n\nI am interested in applying for the ${jobTitle} position at Salsha Technologies.\n\nPlease find my application attached.\n\nBest regards,\n[Your Name]`;
        window.open(`mailto:hr@salshatechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    };

    const handleContactHR = () => {
        window.open('mailto:hr@salshatechnologies.com?subject=Career Inquiry');
    };

    const handleOpenApplication = () => {
        const subject = 'Open Application - Salsha Technologies';
        const body = `Dear HR Team,\n\nI am submitting an open application for potential opportunities at Salsha Technologies.\n\nPlease find my resume and cover letter attached.\n\nBest regards,\n[Your Name]`;
        window.open(`mailto:hr@salshatechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    };

    const handleViewAllPositions = () => {
        // Scroll to job openings section
        document.getElementById('job-openings').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="pt-12 sm:pt-14">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-orange-500 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">
                            Join Our
                            <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                                Tech Team
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto font-medium">
                            Build innovative solutions with cutting-edge technology. We're looking for passionate developers, 
                            architects, and tech professionals who want to shape the future of digital transformation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                                <Users size={16} className="mr-2" />
                                <span>50+ Tech Professionals</span>
                            </div>
                            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                                <Globe size={16} className="mr-2" />
                                <span>Remote & Hybrid</span>
                            </div>
                            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                                <Award size={16} className="mr-2" />
                                <span>Latest Tech Stack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <AnimatedSection>
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">Our Tech Values</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                These core values guide our technical decisions and shape our engineering culture.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold mb-3 text-teal-600 font-heading">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Benefits Section */}
            <AnimatedSection>
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">Why Work With Our Tech Team</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We believe in taking care of our tech professionals with comprehensive benefits and a great work environment.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="text-center p-8 bg-gradient-to-br from-teal-50 to-orange-50 rounded-xl border border-teal-100">
                                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800 font-heading">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Job Openings */}
            <AnimatedSection>
                <section id="job-openings" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">Open Tech Positions</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Explore our current job openings and find the perfect role for your technical career growth.
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {jobOpenings.map((job, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-gray-800 font-heading">{job.title}</h3>
                                            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <MapPin size={14} className="mr-1" />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock size={14} className="mr-1" />
                                                    {job.type}
                                                </div>
                                                <div className="flex items-center">
                                                    <DollarSign size={14} className="mr-1" />
                                                    {job.salary}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full font-medium">
                                            {job.department}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-4">{job.description}</p>
                                    
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-500 mb-2">Experience: {job.experience}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500">Posted: {job.postedDate}</span>
                                        <button 
                                            onClick={() => handleApplyNow(job.title)}
                                            className="flex items-center text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors"
                                        >
                                            Apply Now
                                            <ArrowRight size={16} className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-6">
                                Don't see a position that matches your technical skills? We're always looking for talented developers and tech professionals!
                            </p>
                            <button 
                                onClick={handleOpenApplication}
                                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Send Open Application
                                <ArrowRight className="inline ml-2" size={20} />
                            </button>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
                <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
                            Ready to Join Our Tech Team?
                        </h2>
                        <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
                            Take the first step towards an exciting career in technology with Salsha Technologies. 
                            We can't wait to meet you!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={handleViewAllPositions}
                                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                View All Positions
                                <ArrowRight className="inline ml-2" size={20} />
                            </button>
                            <button 
                                onClick={handleContactHR}
                                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300"
                            >
                                Contact HR Team
                            </button>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default CareersPage;
