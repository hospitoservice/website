
import React from 'react';

const Services: React.FC = () => {
  const apps = [
    {
      title: "Hospital Management",
      desc: "Streamline administrative and clinical operations for maximum facility efficiency.",
      features: ["Appointment Management", "Inventory Management", "Patient IPD/OPD", "Blood Bank Hub"],
      icon: "apartment",
      color: "bg-blue-500",
      link : "www.hospitonet.com"
    },
    {
      title: "Medical HRMS",
      desc: "Empower your medical personnel with tools designed for high-stakes environments.",
      features: ["Smart Rostering", "Payroll Automation", "Benefits Tracking", "Leaves & Holidays"],
      icon: "badge",
      color: "bg-cyan-500",
      link : "https://hospitoservice.github.io/hrms/"
    },
    {
      title: "Patient Companion App",
      desc: "Put health control in your customers' hands with our intuitive mobile experience.",
      features: ["Easy Appointments", "Order Medicines", "Lab Test Booking", "Digital Records"],
      icon: "phonelink_ring",
      color: "bg-indigo-500",
      link : "https://hospitoservice.github.io/hospitonet/"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Our Ecosystem</span>
        <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Solutions Tailored for Healthcare</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We provide three specialized applications that work in harmony to cover every facet of the modern healthcare experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 justify-items-center">
        {apps.map((app, idx) => (
          <div key={idx} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2 w-full max-w-md mx-auto text-center flex flex-col items-center">
            <div className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transition-transform group-hover:scale-110`}>
              <span className="material-icons-round text-3xl">{app.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{app.title}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">{app.desc}</p>
            
            <ul className="space-y-4 w-full">
              {app.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600 justify-center">
                  {/*<span className="material-icons-round text-primary text-xl">check_circle</span>*/}
                  {feat}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => window.open(app.link.startsWith('http') ? app.link : `https://${app.link}`, '_blank')}
              className="mt-10 w-full max-w-xs py-3 border border-slate-200 group-hover:bg-primary group-hover:border-primary group-hover:text-white rounded-xl font-bold text-slate-700 transition-all"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
