import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div>
            <h2 className="text-xl font-medium tracking-widest mb-6">W A Q T I</h2>
            <div className="flex space-x-2">
              <a href="#" className="bg-white p-2 rounded-md">
                <svg className="h-5 w-5 text-[#1a1a1a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#" className="bg-white p-2 rounded-md">
                <svg className="h-5 w-5 text-[#1a1a1a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* About Waqti */}
          <div>
            <h3 className="text-lg font-medium mb-4">About Waqti</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Add your establishment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Waqti Belgium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Waqti Germany</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Policy to combat illegal content</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie management</a></li>
            </ul>
          </div>

          {/* Find your service */}
          <div>
            <h3 className="text-lg font-medium mb-4">Find your service</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hairdresser</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beauty Institute</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Barber</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manicure and pedicure</a></li>
           
            </ul>
          </div>

          {/* Frequently searched */}
          <div>
            <h3 className="text-lg font-medium mb-4">Frequently searched</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hairdresser Paris</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hairdresser Bordeaux</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hairdresser Lyon</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hairdresser Toulouse</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-500 text-sm">Copyright © 2025 Waqti</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;