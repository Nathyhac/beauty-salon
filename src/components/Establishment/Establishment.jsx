import React from 'react';

const PlanityProPartner = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="text-center">
            <h1 className="text-lg font-medium tracking-widest text-gray-800">
              P L A N I T Y <sup className="ml-1 text-xs">PRO</sup>
            </h1>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Become a Planity Pro partner</h2>
            <p className="text-lg text-gray-700">
              Be visible to <span className="font-medium">10 million users</span> per month.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2 px-4 md:px-10">
            <div className="flex items-center gap-2">
              <svg 
                className="h-5 w-5 text-gray-700" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-gray-700">No commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg 
                className="h-5 w-5 text-gray-700" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-gray-700">Commission-free</span>
            </div>
          </div>

          {/* Selection cards */}
          <div className="mt-8 space-y-4">
            <a href="#" className="block">
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-6 transition-all hover:border-gray-300 hover:shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <svg 
                      className="h-6 w-6 text-gray-600" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                      <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                      <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">I am the manager of an establishment</h3>
                    <p className="text-gray-600">Hairdressing, beauty, barber, well-being...</p>
                  </div>
                </div>
                <svg 
                  className="h-5 w-5 text-gray-400" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>

            <a href="#" className="block">
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-6 transition-all hover:border-gray-300 hover:shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <svg 
                      className="h-6 w-6 text-gray-600" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">I am not a professional</h3>
                    <p className="text-gray-600">I would like to make a beauty appointment</p>
                  </div>
                </div>
                <svg 
                  className="h-5 w-5 text-gray-400" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanityProPartner;