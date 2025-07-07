import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <span className="text-blue-400">Hana</span> Mohamed
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Full Stack Developer passionate about creating user-friendly, high-performance web applications using modern technologies.
              </p>
              <div className="flex items-center space-x-2 text-slate-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" fill="currentColor" />
                <span>and</span>
                <Code size={16} className="text-blue-400" />
                <span>and lots of</span>
                <Coffee size={16} className="text-amber-500" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">Get In Touch</h4>
              <div className="space-y-2 text-slate-300">
                <p>Ready to start your next project?</p>
                <a
                  href="mailto:hanafouad787@yahoo.com"
                  className="block text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  hanafouad787@yahoo.com
                </a>
                <a
                  href="tel:01007187949"
                  className="block text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  01007187949
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                © {currentYear} Hana Mohamed Fouad. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/Hanamohamed3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hana-mohamed-1234972a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  LinkedIn
                </a>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;