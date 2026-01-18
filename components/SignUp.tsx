
import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for signing up! Our team will contact you soon.');
    setFormData({ name: '', email: '', mobile: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <span className="material-icons-round text-[300px] text-white">how_to_reg</span>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 p-8 md:p-16 lg:p-24 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">Ready to transform your healthcare facility?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Join the growing network of providers using HOSPITONET to deliver exceptional patient experiences. Sign up for early access and a personalized demo.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="user" />
                ))}
              </div>
              <p className="text-sm">Trusted by <span className="text-primary font-bold">500+</span> institutions</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Join the Ecosystem</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@hospital.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Mobile Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.mobile}
                  onChange={e => setFormData({...formData, mobile: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 "
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all active:scale-95"
              >
                Connect
              </button>
            </div>
            {/*<p className="mt-4 text-center text-xs text-slate-400">*/}
            {/*  By signing up, you agree to our Terms of Service.*/}
            {/*</p>*/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
