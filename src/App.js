import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Laptop,
  ShieldCheck,
  Cloud,
  Server,
  Code,
  Users,
  Mail,
  Phone,
  MapPin,
  Database,
  HardDrive,
  Lightbulb,
  TrendingUp,
  GitBranch,
  LayoutDashboard,
  Rocket,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

// --- HomePage Component ---
const HomePage = ({ navigateTo }) => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-8 md:py-16 overflow-hidden flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 md:px-16 lg:px-32 flex flex-col items-center justify-center min-h-[220px] relative z-10">
          {/* Text Content */}
          <div className="w-full max-w-2xl text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up font-sans">
              Solution-Driven IT for Ambitious Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl animate-fade-in-up delay-200">
              Salsha Technologies helps NBFCs and startups thrive in the cloud
              era. We specialize in cloud management, application migration, and
              building secure, scalable digital foundations for the next
              generation of financial services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
              <a
                href="#services"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 px-8 bg-white text-indigo-700 hover:bg-gray-100 hover:text-indigo-800 shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Solutions
              </a>
            </div>
          </div>
          {/* Vector Illustration */}
        </div>
        {/* Abstract background shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500 opacity-20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

      {/* Why Choose Us (Comprehensive IT Solutions) */}
      <section
        id="why-choose-us"
        className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-secondary/10"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 md:px-16 lg:px-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-4 font-sans">
            Why Choose Salsha?
          </h2>
          <p className="text-lg md:text-xl text-center text-secondary mb-12 font-medium max-w-2xl mx-auto">
            We blend deep technical expertise with a client-first mindset,
            delivering secure, innovative, and scalable IT solutions for
            ambitious businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Expertise & Experience */}
            <div
              className="rounded-2xl bg-white shadow-xl border border-primary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Lightbulb size={40} className="text-primary" />
              </span>
              <h3 className="text-xl font-bold text-primary mb-2 font-sans">
                Expertise & Experience
              </h3>
              <p className="text-gray-700">
                Years of industry experience and a team of certified
                professionals dedicated to your success.
              </p>
            </div>
            {/* Client-Centric Approach */}
            <div
              className="rounded-2xl bg-white shadow-xl border border-primary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Users size={40} className="text-secondary" />
              </span>
              <h3 className="text-xl font-bold text-secondary mb-2 font-sans">
                Client-Centric Approach
              </h3>
              <p className="text-gray-700">
                We prioritize your business goals, offering tailored solutions
                and exceptional customer service.
              </p>
            </div>
            {/* Reliability & Security */}
            <div
              className="rounded-2xl bg-white shadow-xl border border-primary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <ShieldCheck size={40} className="text-primary" />
              </span>
              <h3 className="text-xl font-bold text-primary mb-2 font-sans">
                Reliability & Security
              </h3>
              <p className="text-gray-700">
                Delivering robust, secure, and highly available IT environments
                you can depend on.
              </p>
            </div>
            {/* Innovation & Technology */}
            <div
              className="rounded-2xl bg-white shadow-xl border border-secondary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Code size={40} className="text-secondary" />
              </span>
              <h3 className="text-xl font-bold text-secondary mb-2 font-sans">
                Innovation & Technology
              </h3>
              <p className="text-gray-700">
                Staying ahead with the latest technologies to provide
                cutting-edge and future-proof solutions.
              </p>
            </div>
            {/* End-to-End Solutions */}
            <div
              className="rounded-2xl bg-white shadow-xl border border-primary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Cloud size={40} className="text-primary" />
              </span>
              <h3 className="text-xl font-bold text-primary mb-2 font-sans">
                End-to-End Solutions
              </h3>
              <p className="text-gray-700">
                From strategy to implementation and ongoing support, we cover
                all your IT needs.
              </p>
            </div>
            {/* 24/7 Support */}
            <div
              className="rounded-2xl bg-white shadow-xl border border-secondary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Phone size={40} className="text-secondary" />
              </span>
              <h3 className="text-xl font-bold text-secondary mb-2 font-sans">
                24/7 Support
              </h3>
              <p className="text-gray-700">
                Dedicated support team available around the clock to address any
                IT challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-16 md:py-24 bg-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 md:px-16 lg:px-32">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 font-sans">
            About Salsha Technologies .
          </h2>

          {/* Company Story */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div
              className="lg:w-1/2 text-center lg:text-left"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">
                Our Story
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2018, Salsha Technologies began as a small team of
                passionate IT professionals who recognized that businesses were
                struggling with complex technology challenges. What started as a
                local IT support company has grown into a comprehensive
                technology partner serving over 200+ businesses across the
                region.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have helped organizations ranging from
                10-person startups to 500+ employee enterprises optimize their
                technology infrastructure, enhance security, and drive digital
                transformation initiatives that deliver measurable business
                value.
              </p>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&w=900&q=80"
                alt="Our Team Collaborating"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/E0E7FF/257C74?text=Our+Team";
                }}
              />
            </div>
          </div>

          {/* Mission & Approach */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
            <div
              className="lg:w-1/2 text-center lg:text-left"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">
                Our Mission & Approach
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                We believe technology should work for your business, not against
                it. Our mission is to simplify complex IT challenges and provide
                solutions that actually solve real business problems. We don't
                just fix computers – we help you leverage technology to achieve
                your business goals.
              </p>
              <p className="text-lg text-gray-600">
                Our approach is simple: we listen, we understand your unique
                challenges, and we deliver practical solutions that fit your
                budget and timeline. We're not here to sell you the latest
                buzzwords – we're here to make your technology work better.
              </p>
            </div>
            <div className="lg:w-1/2" data-aos="fade-right">
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=900&q=80"
                alt="Team Working on Technology Solutions"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/D1FAE5/D9793A?text=Technology";
                }}
              />
            </div>
          </div>

          {/* Team & Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 font-sans">
                Expert Team
              </h4>
              <p className="text-gray-600">
                Our team of 25+ certified professionals brings 15+ years of
                combined experience across enterprise IT, cybersecurity, and
                cloud solutions.
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 font-sans">
                Certified & Secure
              </h4>
              <p className="text-gray-600">
                Microsoft Gold Partner, AWS Advanced Consulting Partner, and SOC
                2 Type II certified for enterprise-grade security and
                compliance.
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 font-sans">
                Proven Results
              </h4>
              <p className="text-gray-600">
                98% client retention rate, 15-minute average response time, and
                99.9% uptime guarantee across all managed services.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gray-50 rounded-xl p-8" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center font-sans">
              What Sets Us Apart
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 font-sans">
                    Transparent Pricing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    No hidden fees, no surprise charges. Clear, predictable
                    pricing for all our services.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 font-sans">
                    Local Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Based in your community, we understand local business
                    challenges and provide personalized service.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 font-sans">
                    Proactive Approach
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We prevent problems before they happen with 24/7 monitoring
                    and predictive maintenance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 font-sans">
                    Business Focus
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We speak business, not just tech. Every solution is designed
                    to drive your business forward.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 font-sans">
                    Scalable Solutions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Technology that grows with your business, from startup to
                    enterprise scale.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 font-sans">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our team stays current with the latest technologies to
                    provide cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// --- ServicesPage Component ---
const ServicesPage = () => {
  return (
    <>
      {/* Services Banner */}
      <section
        className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 md:py-32 overflow-hidden flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 md:px-16 lg:px-32 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up font-sans text-center">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl animate-fade-in-up delay-200 text-center">
            Discover how Salsha Technologies empowers NBFCs and startups with
            cloud management, application migration, and digital
            transformation solutions tailored for modern business needs.
          </p>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500 opacity-20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

      {/* Services Intro */}
      {/* Removed duplicate Our Services header and intro */}

      {/* Modern Service Cards */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Managed IT Services */}
          <div className="group rounded-3xl bg-gradient-to-br from-indigo-100 to-white shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-indigo-100">
            <Laptop
              size={48}
              className="text-indigo-600 mb-4 group-hover:rotate-6 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Managed IT Services
            </h3>
            <p className="text-gray-600 mb-4">
              We keep your tech running smoothly, so you can focus on your
              business. Fast support, friendly advice, and no geek-speak.
            </p>
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
              For Startups
            </span>
          </div>
          {/* Cybersecurity Solutions */}
          <div className="group rounded-3xl bg-gradient-to-br from-purple-100 to-white shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-purple-100">
            <ShieldCheck
              size={48}
              className="text-purple-600 mb-4 group-hover:rotate-6 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Cybersecurity
            </h3>
            <p className="text-gray-600 mb-4">
              Protect your data and reputation with security that just works—no
              stress, no scary surprises.
            </p>
            <span className="inline-block bg-purple-50 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
              Peace of Mind
            </span>
          </div>
          {/* Cloud Solutions */}
          <div className="group rounded-3xl bg-gradient-to-br from-blue-100 to-white shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-blue-100">
            <Cloud
              size={48}
              className="text-blue-600 mb-4 group-hover:rotate-6 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Cloud Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Move to the cloud with confidence. We make it easy, affordable,
              and tailored to your needs.
            </p>
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
              Flexible & Scalable
            </span>
          </div>
          {/* Software & Web Development */}
          <div className="group rounded-3xl bg-gradient-to-br from-pink-100 to-white shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-pink-100">
            <Code
              size={48}
              className="text-pink-600 mb-4 group-hover:rotate-6 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Web & App Development
            </h3>
            <p className="text-gray-600 mb-4">
              Get a website or app that looks great and works perfectly—built
              for your goals, not just for show.
            </p>
            <span className="inline-block bg-pink-50 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">
              Custom-Built
            </span>
          </div>
          {/* Data & Analytics */}
          <div className="group rounded-3xl bg-gradient-to-br from-green-100 to-white shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-100">
            <TrendingUp
              size={48}
              className="text-green-600 mb-4 group-hover:rotate-6 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Data & Analytics
            </h3>
            <p className="text-gray-600 mb-4">
              Turn your data into decisions. We help you see the big picture and
              act on it—no spreadsheets required.
            </p>
            <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
              Insightful
            </span>
          </div>
          {/* IT Consulting */}
          <div className="group rounded-3xl bg-gradient-to-br from-yellow-100 to-white shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-yellow-100">
            <Lightbulb
              size={48}
              className="text-yellow-500 mb-4 group-hover:rotate-6 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              IT Consulting
            </h3>
            <p className="text-gray-600 mb-4">
              Not sure what you need? We’ll guide you with honest, practical
              advice—no upselling, just solutions.
            </p>
            <span className="inline-block bg-yellow-50 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
              Personalized
            </span>
          </div>
        </div>
      </section>

      {/* AWS Cloud Services */}
      <section
        id="aws-cloud"
        className="py-16 md:py-24 bg-primary/10"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 md:px-16 lg:px-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            AWS Cloud Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <Cloud size={60} className="text-orange-500 mb-6" />{" "}
              {/* Using Cloud icon for AWS */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                EC2 & Compute
              </h3>
              <p className="text-gray-600">
                Scalable virtual servers (EC2), serverless functions (Lambda),
                and container services for flexible compute power.
              </p>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <HardDrive size={60} className="text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                S3 & Storage
              </h3>
              <p className="text-gray-600">
                Highly durable and scalable object storage (S3), block storage
                (EBS), and archival solutions.
              </p>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Database size={60} className="text-green-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                RDS & Databases
              </h3>
              <p className="text-gray-600">
                Managed relational databases (RDS), NoSQL databases (DynamoDB),
                and data warehousing (Redshift).
              </p>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ShieldCheck size={60} className="text-red-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Security & Compliance
              </h3>
              <p className="text-gray-600">
                Robust security services, identity and access management, and
                compliance solutions on AWS.
              </p>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Cloud size={60} className="text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Networking & Content Delivery
              </h3>
              <p className="text-gray-600">
                Virtual Private Cloud (VPC), Direct Connect, and Content
                Delivery Network (CloudFront) for optimized performance.
              </p>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Lightbulb size={60} className="text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                DevOps & Management
              </h3>
              <p className="text-gray-600">
                Tools for continuous integration/delivery, monitoring, and
                automation of your AWS environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Solutions */}
      <section id="erp" className="py-16 md:py-24 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center gap-12">
          <div
            className="lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ERP Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Streamline your business operations with our comprehensive
              Enterprise Resource Planning (ERP) solutions. We help you
              integrate critical business functions such as finance, HR,
              manufacturing, supply chain, and customer relationship management
              into a single, unified system.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our ERP services include consultation, implementation,
              customization, and ongoing support, ensuring a seamless transition
              and maximum ROI for your business. Gain real-time insights,
              improve efficiency, and make data-driven decisions with our expert
              guidance.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
              <li>Financial Management & Accounting</li>
              <li>Supply Chain & Inventory Management</li>
              <li>Human Resources & Payroll</li>
              <li>Manufacturing & Production Planning</li>
              <li>Customer Relationship Management (CRM)</li>
            </ul>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <img
              src="https://placehold.co/600x400/D1FAE5/065F46?text=ERP+Solutions"
              alt="ERP Solutions"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/D1FAE5/065F46?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </section>

      {/* DBA (Database Administration) */}
      <section
        id="dba"
        className="py-16 md:py-24 bg-gray-100"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Database Administration (DBA)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left" data-aos="fade-right">
              <Database
                size={80}
                className="text-indigo-600 mx-auto md:mx-0 mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Expert Database Management
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Ensure the optimal performance, security, and availability of
                your critical data with our professional Database Administration
                services. Our certified DBAs specialize in various database
                systems, including MySQL, PostgreSQL, SQL Server, Oracle, and
                NoSQL databases.
              </p>
              <p className="text-lg text-gray-600">
                From routine maintenance and performance tuning to complex
                migrations and disaster recovery, we provide comprehensive
                support to keep your databases running efficiently and securely.
              </p>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-8"
              data-aos="fade-left"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Our DBA Services Include:
              </h4>
              <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
                <li>Database Installation & Configuration</li>
                <li>Performance Tuning & Optimization</li>
                <li>Backup & Recovery Strategies</li>
                <li>Security & Patch Management</li>
                <li>Monitoring & Alerting</li>
                <li>Database Migration & Upgrades</li>
                <li>Troubleshooting & Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure */}
      <section
        id="cloud-infra"
        className="py-16 md:py-24 bg-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Cloud Infrastructure Design & Management
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2" data-aos="fade-left">
              <img
                src="https://placehold.co/600x400/E0F2FE/0B69FF?text=Cloud+Infrastructure"
                alt="Cloud Infrastructure"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/E0F2FE/0B69FF?text=Image+Not+Found";
                }}
              />
            </div>
            <div
              className="lg:order-1 text-center lg:text-left"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Build a Resilient & Scalable Cloud Environment
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Our experts design, implement, and manage robust cloud
                infrastructures tailored to your business needs. Whether you're
                looking for public, private, or hybrid cloud solutions, we
                ensure your infrastructure is secure, scalable, and
                cost-efficient.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We leverage leading cloud platforms like AWS, Azure, and Google
                Cloud to build highly available and fault-tolerant systems that
                support your applications and data with unparalleled
                reliability.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
                <li>Cloud Strategy & Consulting</li>
                <li>Infrastructure as Code (IaC)</li>
                <li>Cloud Migration & Modernization</li>
                <li>Cost Optimization & Governance</li>
                <li>Disaster Recovery & Business Continuity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// --- ContactPage Component ---
const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };
  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-indigo-50 to-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-extrabold mb-6 text-indigo-700 font-sans">Get in Touch</h2>
          {submitted ? (
            <div className="text-green-600 text-lg font-semibold py-8 text-center">Thank you! We'll get back to you soon.</div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50" />
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-md shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all">Send Message</button>
            </form>
          )}
        </div>
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="Salsha Technologies Logo" className="h-12 w-auto max-w-[120px] object-contain" />
            <span className="text-2xl font-bold text-indigo-700 font-sans">Salsha Technologies</span>
          </div>
          <p className="text-gray-600 text-lg max-w-md">Salsha Technologies is a leading provider of IT solutions, cloud management, and digital transformation services. We empower NBFCs and ambitious businesses to thrive in the digital era with secure, scalable, and innovative technology tailored to your needs.</p>
          <div className="space-y-2 text-gray-700 text-base">
            <div className="flex items-center gap-2"><MapPin size={18} className="text-indigo-600" />C-24 S/F, DDA Colony, Shahdara, Delhi</div>
            <div className="flex items-center gap-2"><Mail size={18} className="text-indigo-600" />sales@salshatechnologies.com</div>
            <div className="flex items-center gap-2"><Phone size={18} className="text-indigo-600" />+91-9369051640</div>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Facebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Twitter size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Linkedin size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // State to manage current page

  // Initialize AOS on component mount
  useEffect(() => {
    // Dynamically load AOS CSS
    const link = document.createElement("link");
    link.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Dynamically load AOS JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.onload = () => {
      // Initialize AOS after script is loaded
      if (window.AOS) {
        window.AOS.init({
          duration: 1000, // animation duration
          once: true, // whether animation should happen only once - while scrolling down
        });
        window.AOS.refresh(); // refresh AOS when new content is loaded
      }
    };
    document.body.appendChild(script);

    // Cleanup function to remove the dynamically added elements if the component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (page, anchor = null) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close mobile menu on navigation
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor.substring(1)); // Remove '#'
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay to allow page transition
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top of new page
    }
  };

  return (
    <div className="font-sans antialiased bg-background text-foreground">
      {/* Tailwind CSS CDN - included for demonstration, typically managed by build tools */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          body {
            font-family: 'Cosmica', sans-serif;
          }
          /* Shadcn-like CSS Variables (simplified for direct CDN use) */
          :root {
            --background: 0 0% 100%; /* hsl(0 0% 100%) */
            --foreground: 222.2 84% 4.9%; /* hsl(222.2 84% 4.9%) */
            --card: 0 0% 100%; /* hsl(0 0% 100%) */
            --card-foreground: 222.2 84% 4.9%; /* hsl(222.2 84% 4.9%) */
            --popover: 0 0% 100%; /* hsl(0 0% 100%) */
            --popover-foreground: 222.2 84% 4.9%; /* hsl(222.2 84% 4.9%) */
            --primary: 222.2 47.4% 11.2%; /* hsl(222.2 47.4% 11.2%) */
            --primary-foreground: 210 20% 98%; /* hsl(210 20% 98%) */
            --secondary: 210 40% 96.1%; /* hsl(210 40% 96.1%) */
            --secondary-foreground: 222.2 47.4% 11.2%; /* hsl(222.2 47.4% 11.2%) */
            --muted: 210 40% 96.1%; /* hsl(210 40% 96.1%) */
            --muted-foreground: 215.4 16.3% 46.9%; /* hsl(215.4 16.3% 46.9%) */
            --accent: 210 40% 96.1%; /* hsl(210 40% 96.1%) */
            --accent-foreground: 222.2 47.4% 11.2%; /* hsl(222.2 47.4% 11.2%) */
            --destructive: 0 84.2% 60.2%; /* hsl(0 84.2% 60.2%) */
            --destructive-foreground: 210 20% 98%; /* hsl(210 20% 98%) */
            --border: 214.3 31.8% 91.4%; /* hsl(214.3 31.8% 91.4%) */
            --input: 214.3 31.8% 91.4%; /* hsl(214.3 31.8% 91.4%) */
            --ring: 222.2 84% 4.9%; /* hsl(222.2 84% 4.9%) */
            --radius: 0.5rem; /* Default border radius */
          }
          /* Dark mode variables (if needed, simplified) */
          .dark {
            --background: 222.2 84% 4.9%;
            --foreground: 210 20% 98%;
            /* ... other dark mode variables */
          }

          /* General Shadcn-like styles */
          .bg-background { background-color: hsl(var(--background)); }
          .text-foreground { color: hsl(var(--foreground)); }
          .bg-card { background-color: hsl(var(--card)); }
          .text-card-foreground { color: hsl(var(--card-foreground)); }
          .border-input { border-color: hsl(var(--input)); }
          .focus-visible\\:ring-ring:focus-visible { --tw-ring-color: hsl(var(--ring)); }
          .placeholder\\:text-muted-foreground::placeholder { color: hsl(var(--muted-foreground)); }
          .rounded-md { border-radius: var(--radius); }
          .rounded-lg { border-radius: calc(var(--radius) + 2px); } /* Slightly larger for cards */
          .rounded-full { border-radius: 9999px; }

          /* Custom primary color for buttons to match original indigo-600 */
          .bg-indigo-600 { background-color: #4f46e5; }
          .hover\\:bg-indigo-700:hover { background-color: #4338ca; }
          .focus-visible\\:ring-indigo-500:focus-visible { --tw-ring-color: #6366f1; }
        `}
      </style>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-16 lg:px-32 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center space-x-2 group min-h-0"
              style={{ minHeight: 0 }}
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
              }}
            >
              {/* Logo from public directory */}
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="Salsha Technologies Logo"
                  className="h-10 w-auto max-w-[160px] object-contain"
                />
              </span>
              {/* <span className="flex flex-col leading-tight text-left">
                <span className="text-lg font-regular bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:to-purple-700 transition-all duration-300" style={{lineHeight: '1.1'}}>
                  SALSHA
                </span>
                <span className="text-lg font-regular tracking-widest bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:to-purple-700 transition-all duration-300 uppercase" style={{lineHeight: '1.1'}}>
                  TECHNOLOGIES
                </span>
              </span> */}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 bg-white/80 rounded-full px-2 py-1">
              <a
                href="#home"
                className={`relative px-5 py-2 rounded-full font-semibold transition-all duration-200 flex items-center gap-1
                  ${
                    currentPage === "home"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-700"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("home");
                }}
              >
                Home
                {currentPage === "home" && (
                  <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-6 h-1 bg-white/80 rounded-full"></span>
                )}
              </a>
              <a
                href="#services"
                className={`relative px-5 py-2 rounded-full font-semibold transition-all duration-200 flex items-center gap-1
                  ${
                    currentPage === "services"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-700"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("services");
                }}
              >
                Services
                {currentPage === "services" && (
                  <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-6 h-1 bg-white/80 rounded-full"></span>
                )}
              </a>
              {/* Square gradient border wrapper for Get in Touch button */}
              <div className="ml-2 inline-block p-[2px] bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-200">
                <a
                  href="#contact"
                  className="block px-6 py-2 font-semibold bg-white text-indigo-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ borderRadius: 0 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage("contact");
                  }}
                >
                  Get in Touch
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-2 pt-4">
                <a
                  href="#home"
                  className={`flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-200
                    ${
                      currentPage === "home"
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("home");
                  }}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Home
                </a>
                <a
                  href="#services"
                  className={`flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-200
                    ${
                      currentPage === "services"
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("services");
                  }}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Services
                </a>
                {/* Square gradient border wrapper for mobile Get in Touch button */}
                <div className="w-full p-[2px] bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-200 mt-2">
                  <a
                    href="#contact"
                    className="block w-full px-6 py-3 font-semibold bg-white text-indigo-700 text-center transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    style={{ borderRadius: 0 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage("contact");
                    }}
                  >
                    Get in Touch
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Conditional Page Rendering */}
      {currentPage === "home" && <HomePage navigateTo={navigateTo} />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "contact" && <ContactPage />}

      {/* Footer (remains consistent across pages) */}
      <footer className="bg-[#1f1f1f] text-white py-12">
        <div className="container mx-auto px-6 md:px-14 lg:px-25 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Company Info */}
          <div className="flex flex-col mb-4 md:mb-0 md:mr-8 min-w-[220px] max-w-xs text-left">
            <img
              src="/logo.svg"
              alt="Salsha Technologies Logo"
              className="h-10 w-auto max-w-[160px] object-contain mb-2"
            />
            <p className="text-gray-300 text-base">
              Salsha Technologies is a leading provider of IT solutions, cloud
              management, and digital transformation services. We empower NBFCs
              and ambitious businesses to thrive in the digital era with secure,
              scalable, and innovative technology tailored to your needs.
            </p>
          </div>

          {/* Our Services (Specific) */}
          <div className="flex-1 ml-10">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li>
                <a
                  href="#aws-cloud"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("services", "#aws-cloud");
                  }}
                >
                  AWS Cloud Services
                </a>
              </li>
              <li>
                <a
                  href="#erp"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("services", "#erp");
                  }}
                >
                  ERP Solutions
                </a>
              </li>
              <li>
                <a
                  href="#dba"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("services", "#dba");
                  }}
                >
                  DBA Services
                </a>
              </li>
              <li>
                <a
                  href="#cloud-infra"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("services", "#cloud-infra");
                  }}
                >
                  Cloud Infrastructure
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-2">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-base text-gray-300 leading-1">
              <li className="text-gray-400">C-24 S/F, DDA Colony, Shahdara, Delhi</li>
              <li className="text-gray-400">sales@salshatechnologies.com</li>
              <li className="text-gray-400">+91-9369051640</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1 ml-10">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-base text-gray-300">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-16 lg:px-30 mt-4 pt-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Salsha Technologies. All Rights
            Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
