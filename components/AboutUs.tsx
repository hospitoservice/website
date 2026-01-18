
import React from 'react';
import webimage from '../asset/Webimage.png';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="aspect-rectangle rounded-3xl bg-slate-100 overflow-hidden shadow-inner mx-auto">
             <img 
              src={webimage}
              alt="Medical Care" 
              className="w-full h-68 object-contain mix-blend-multiply opacity-80 shadow-inner mx-auto rounded-3xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block border border-slate-50">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <span className="material-icons-round">verified_user</span>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-900">Secure & Compliant</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">HIPAA Ready</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-left">
              Our infrastructure is built with bank-grade encryption ensuring patient privacy at every node.
            </p>
          </div>
        </div>

        <div className="text-center md:text-left w-full max-w-2xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">About HOSPITONET</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">
            A Unified Healthcare Ecosystem Built for Tomorrow
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            HOSPITONET is more than just software; it's a comprehensive digital infrastructure that bridges the gap between modern medical technology and compassionate patient care.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We integrate hospital management systems, workforce tools, and patient services into a secure, intuitive platform. Our mission is to reduce administrative burdens so healthcare professionals can focus on what truly matters: saving lives.
          </p>
          
          <div className="space-y-4 max-w-md mx-auto md:mx-0">
            {[
              "Real-time data analytics for clinical decisions",
              "Seamless interoperability across departments",
              "Patient-centric portal for easy record access"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="material-icons-round text-primary text-sm">check</span>
                </div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
