
import React from 'react';
import webimg from '../asset/WebsiteImage.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-12 pb-12 lg:pt-20 lg:pb-32 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-6">*/}
        {/*  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>*/}
        {/*  Next Generation Healthcare Ecosystem*/}
        {/*</div>*/}
        <div className="mt-16 lg:mt-24 relative mx-auto max-w-5xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100">
            <img
                // src="https://picsum.photos/seed/hospitonet-dashboard/1200/800"
                src={webimg}
                alt="HOSPITONET Platform Interface"
                className="w-full h-auto object-cover opacity-90"
            />
          </div>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Empowering Hospitals, <br />
          <span className="gradient-text">Enhancing Care</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Connecting healthcare providers, patients, and technology into one seamless, unified ecosystem designed for efficiency and compassion.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/30 transition-all transform hover:-translate-y-1">
            Explore Ecosystem
          </button>
          <button 
            onClick={() => window.open('https://www.instagram.com/reel/DTlip-YE6Ms/', '_blank')}
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 hover:border-primary rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
          >
            <span className="material-icons-round text-primary">play_circle</span>
            Watch Demo
          </button>
        </div>

      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default Hero;
