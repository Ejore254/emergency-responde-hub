"use client";

import {
  Phone,
  AlertCircle,
  MapPin,
  Users,
  Clock,
  Shield,
  Heart,
  Zap,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showShareModal, setShowShareModal] = useState(false);
  const [ongoingCall, setOngoingCall] = useState<string | null>(null);
  const [callNotes, setCallNotes] = useState("");
  const [callDuration, setCallDuration] = useState(0);

  // Call timer effect
  useEffect(() => {
    if (!ongoingCall) return;

    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed++;
      setCallDuration(elapsed);
    }, 1000);

    return () => clearInterval(timer);
  }, [ongoingCall]);

  const emergencyServices = [
    {
      id: "ambulance",
      title: "Ambulance (Medical)",
      description: "Call for medical assistance",
      icon: Heart,
      color: "bg-red-50",
      textColor: "text-red-600",
      buttonColor: "bg-red-500 hover:bg-red-600",
      number: "+254 20 2245000",
    },
    {
      id: "fire",
      title: "Fire Brigade",
      description: "Report fire or rescue needed",
      icon: Zap,
      color: "bg-orange-50",
      textColor: "text-orange-600",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      number: "+254 20 2222222",
    },
    {
      id: "police",
      title: "Police Emergency",
      description: "Report crime or safety threat",
      icon: Shield,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      number: "+254 20 2222222",
    },
    {
      id: "location",
      title: "Share Location",
      description: "Send your location to contacts",
      icon: MapPin,
      color: "bg-green-50",
      textColor: "text-green-600",
      buttonColor: "bg-green-500 hover:bg-green-600",
      number: "Share",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get help in seconds with our streamlined emergency system",
    },
    {
      icon: AlertCircle,
      title: "Real-time Alerts",
      description: "Receive instant updates and emergency notifications",
    },
    {
      icon: Users,
      title: "Emergency Contacts",
      description: "Manage and quickly reach your trusted emergency contacts",
    },
    {
      icon: MapPin,
      title: "Location Sharing",
      description: "Share your location with responders and emergency contacts",
    },
  ];

  const handleEmergencyCall = (serviceId: string) => {
    setActiveService(serviceId);
    setOngoingCall(serviceId);
    setCallNotes("");
    setCallDuration(0);
  };

  const handleEndCall = () => {
    setOngoingCall(null);
    setCallNotes("");
    setCallDuration(0);
    setActiveService(null);
  };

  const formatCallDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail.trim()) {
      setIsSignedIn(true);
      setShowSignIn(false);
      // Show success message
      alert(`Welcome! Signed in as ${userEmail}`);
    }
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserEmail("");
  };

  const handleShareLocation = () => {
    setOngoingCall("location");
    setCallNotes("");
    setCallDuration(0);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCallNotes(
            `Location shared: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
          );
        },
        (error) => {
          setCallNotes(
            "Location access denied. Please enable location permissions.",
          );
        },
      );
    }
  };

  const handleSetUpContacts = () => {
    if (!isSignedIn) {
      setShowSignIn(true);
      alert("Please sign in to manage your emergency contacts");
      return;
    }
    alert("Contact management panel opened. (Feature in development)");
  };

  const handleGetStarted = () => {
    if (!isSignedIn) {
      setShowSignIn(true);
    } else {
      alert("Getting started with SafeAlert! Check out the features below.");
    }
  };

  const handleDownloadApp = (platform: string) => {
    alert(
      `Redirecting to download SafeAlert for ${platform}...\n\n(In production, this would link to the app store)`,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emergency-blue to-emergency-blue-dark rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">SafeAlert</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Services
            </a>
            <a
              href="#resources"
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Resources
            </a>
            <a
              href="#contacts"
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Contacts
            </a>
            {isSignedIn ? (
              <div className="flex items-center gap-4">
                <span className="text-slate-600 text-sm">{userEmail}</span>
                <button
                  onClick={handleSignOut}
                  className="btn-secondary py-2 px-4"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSignIn(true)}
                className="btn-primary"
              >
                Sign In
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-emergency py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-slate-900">
              Emergency Help at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Fast, reliable access to emergency services and support. Get help
              when you need it most with just a tap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254202222222"
                className="btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2 no-underline"
              >
                <Phone className="w-6 h-6" />
                Call Emergency (999)
              </a>
              <button
                onClick={handleGetStarted}
                className="btn-secondary text-lg py-4 px-8"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-slate-900">
            Emergency Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`card-modern p-6 cursor-pointer transition-all duration-300 ${
                    activeService === service.id
                      ? "ring-2 ring-emergency-blue scale-105"
                      : ""
                  }`}
                >
                  <div
                    className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${service.textColor}`} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-1">
                    {service.description}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mb-4">
                    {service.number}
                  </p>
                  {service.id !== "location" ? (
                    <button
                      onClick={() => handleEmergencyCall(service.id)}
                      className={`block w-full ${service.buttonColor} text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center`}
                    >
                      {ongoingCall === service.id ? "Calling..." : "Call Now"}
                    </button>
                  ) : (
                    <button
                      onClick={handleShareLocation}
                      className={`w-full ${service.buttonColor} text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200`}
                    >
                      {ongoingCall === service.id ? "Sharing..." : "Share Now"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-slate-900">Why Choose SafeAlert</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Designed with your safety in mind, providing reliable emergency
              support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emergency-blue text-white rounded-lg mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-slate-900">Manage Emergency Contacts</h2>
              <p className="text-lg text-slate-600 mb-6">
                Keep your trusted contacts updated and instantly reachable when
                you need them. Set up your emergency network in seconds.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Add up to 10 emergency contacts",
                  "One-tap calling and messaging",
                  "Auto-share location with contacts",
                  "24/7 availability",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emergency-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={handleSetUpContacts} className="btn-primary">
                Set Up Contacts Now
              </button>
            </div>
            <div className="bg-gradient-to-br from-emergency-blue-light to-slate-50 rounded-2xl p-8 card-modern border-0">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-emergency-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Jane Njoki</p>
                    <p className="text-sm text-slate-600">+254 712 345 678</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-emergency-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Dr. Kariuki</p>
                    <p className="text-sm text-slate-600">+254 722 456 789</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-emergency-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">David Omondi</p>
                    <p className="text-sm text-slate-600">+254 733 567 890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-emergency-blue to-emergency-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Always Ready for Emergencies</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get peace of mind knowing help is always just one tap away. Download
            SafeAlert today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleDownloadApp("iOS")}
              className="bg-white text-emergency-blue px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Download iOS
            </button>
            <button
              onClick={() => handleDownloadApp("Android")}
              className="bg-white text-emergency-blue px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Download Android
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emergency-blue rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold">SafeAlert</span>
              </div>
              <p className="text-sm">
                Your trusted emergency response partner.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Emergency Call
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Location Share
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Manager
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-sm text-slate-400">
              © 2024 SafeAlert. All rights reserved. In case of emergency in
              Kenya, always call 999 or +254 20 2222222. SafeAlert is a
              complementary service.
            </p>
          </div>
        </div>
      </footer>

      {/* Active Call Interface */}
      {ongoingCall && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Call Header */}
            <div className="bg-gradient-to-r from-emergency-red to-orange-600 px-6 py-8 text-white">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-white animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Emergency Call Active
                </h2>
                <p className="text-white/90 mb-4">
                  {emergencyServices.find((s) => s.id === ongoingCall)?.title}
                </p>
                <div className="text-4xl font-mono font-bold">
                  {formatCallDuration(callDuration)}
                </div>
              </div>
            </div>

            {/* Call Details */}
            <div className="p-6 space-y-4">
              {/* Emergency Number */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-xs uppercase tracking-wide text-slate-600 font-semibold mb-2">
                  Emergency Number
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {emergencyServices.find((s) => s.id === ongoingCall)?.number}
                </p>
              </div>

              {/* Call Notes Textbox */}
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate-600 font-semibold mb-2">
                  Call Information
                </label>
                <textarea
                  value={callNotes}
                  onChange={(e) => setCallNotes(e.target.value)}
                  placeholder="Add notes about the emergency (optional)..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emergency-red focus:border-transparent outline-none resize-none"
                  rows={4}
                />
              </div>

              {/* Call Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-green-700 font-medium">
                    Call Connected & Recording
                  </p>
                </div>
              </div>

              {/* End Call Button */}
              <button
                onClick={handleEndCall}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                End Call
              </button>

              {/* Info Text */}
              <p className="text-xs text-slate-600 text-center">
                Stay on the line. Help is being sent to your location.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-slate-600 mb-6">
              Sign in to access SafeAlert features
            </p>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emergency-blue focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emergency-blue focus:border-transparent outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emergency-blue text-white py-2 px-4 rounded-lg font-semibold hover:bg-emergency-blue-dark transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <button className="text-emergency-blue font-semibold hover:underline">
                  Create one
                </button>
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={() => {
                  setUserEmail("demo@safealert.ke");
                  setTimeout(() => {
                    setIsSignedIn(true);
                    setShowSignIn(false);
                    alert("Demo account signed in!");
                  }, 100);
                }}
                className="w-full border-2 border-slate-300 text-slate-700 py-2 px-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                Try Demo Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
