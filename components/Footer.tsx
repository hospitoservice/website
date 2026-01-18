
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center text-primary">
              <span className="material-icons-round text-xs">health_and_safety</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              HOSPITO<span className="text-primary">NET</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <p className="text-xs">
            © 2026 HOSPITONET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
