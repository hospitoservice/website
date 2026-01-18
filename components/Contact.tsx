
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center">
        <div className="w-full max-w-2xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="font-display text-4xl font-bold mb-8">Let's build a healthier future together</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Have questions about our integration process or pricing models? Our dedicated support team is available 24/7 to assist your medical facility.
          </p>
          
          <div className="space-y-8 max-w-64 mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-icons-round">location_on</span>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-lg">Our Office</h4>
                <p className="text-slate-400">Varthur Bangalore<br />Karnataka, 560087</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-icons-round">email</span>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-lg">Email Us</h4>
                <p className="text-slate-400">contact@hospitonet.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-icons-round">call</span>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-lg">Call Us</h4>
                <p className="text-slate-400">+91-9798047291<br />Mon-Fri 8am to 8pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto bg-slate-800/50 p-8 md:p-12 rounded-[2rem] border border-slate-700 flex flex-col justify-center items-center text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl">
            <span className="material-icons-round text-5xl">connect_without_contact</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
          <p className="text-slate-400 mb-10 max-w-sm">
            Stay updated with the latest in healthcare technology and HOSPITONET releases.
          </p>
          
          <div className="flex gap-6 justify-center">
            <a href="https://www.instagram.com/hospitonet" className="w-14 h-14 bg-white/5 hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-300 group">
               <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/hospitonet/" className="w-14 h-14 bg-white/5 hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-300 group">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://wa.me/919798047291" className="w-14 h-14 bg-white/5 hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-300 group">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M.057 23.689l1.514-5.526c-1.002-1.735-1.531-3.712-1.531-5.733 0-6.303 5.126-11.43 11.427-11.43 3.056 0 5.928 1.189 8.086 3.348s3.347 5.03 3.347 8.083c0 6.304-5.128 11.431-11.43 11.431-1.933 0-3.834-.492-5.517-1.424l-5.896 1.545zm6.415-3.056c1.551.919 3.231 1.403 4.956 1.403 5.414 0 9.825-4.411 9.825-9.825 0-2.624-1.022-5.09-2.877-6.946s-4.323-2.878-6.948-2.878c-5.415 0-9.825 4.411-9.825 9.826 0 1.838.513 3.635 1.482 5.2l-.963 3.513 3.6-.944.25.15zm9.837-5.508c-.267-.134-1.58-.779-1.825-.869-.245-.089-.423-.134-.599.134-.176.267-.681.869-.835 1.047-.154.178-.309.2-.575.067-.267-.134-1.127-.415-2.147-1.326-.793-.707-1.328-1.581-1.484-1.848-.156-.267-.017-.411.117-.544.121-.119.267-.312.4-.467.134-.156.178-.267.267-.445.089-.178.045-.334-.022-.467-.067-.134-.599-1.447-.821-1.983-.217-.521-.437-.449-.599-.457-.154-.007-.334-.009-.513-.009s-.467.067-.713.334c-.245.267-.935.914-.935 2.228 0 1.314.957 2.583 1.09 2.761s1.883 2.876 4.562 4.032c.638.275 1.135.439 1.524.562.64.203 1.22.174 1.679.106.512-.076 1.58-.646 1.803-1.27.223-.623.223-1.158.156-1.27-.067-.111-.245-.178-.512-.312z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
