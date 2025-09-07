// Save as: components/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStatesDropdownOpen, setIsStatesDropdownOpen] = useState(false);

  const states = [
    { name: 'Alabama', slug: 'alabama' },
    { name: 'Alaska', slug: 'alaska' },
    { name: 'Arizona', slug: 'arizona' },
    { name: 'Arkansas', slug: 'arkansas' },
    { name: 'California', slug: 'california' },
    { name: 'Colorado', slug: 'colorado' },
    { name: 'Connecticut', slug: 'connecticut' },
    { name: 'Delaware', slug: 'delaware' },
    { name: 'Florida', slug: 'florida' },
    { name: 'Georgia', slug: 'georgia' },
    { name: 'Hawaii', slug: 'hawaii' },
    { name: 'Idaho', slug: 'idaho' },
    { name: 'Illinois', slug: 'illinois' },
    { name: 'Indiana', slug: 'indiana' },
    { name: 'Iowa', slug: 'iowa' },
    { name: 'Kansas', slug: 'kansas' },
    { name: 'Kentucky', slug: 'kentucky' },
    { name: 'Louisiana', slug: 'louisiana' },
    { name: 'Maine', slug: 'maine' },
    { name: 'Maryland', slug: 'maryland' },
    { name: 'Massachusetts', slug: 'massachusetts' },
    { name: 'Michigan', slug: 'michigan' },
    { name: 'Minnesota', slug: 'minnesota' },
    { name: 'Mississippi', slug: 'mississippi' },
    { name: 'Missouri', slug: 'missouri' },
    { name: 'Montana', slug: 'montana' },
    { name: 'Nebraska', slug: 'nebraska' },
    { name: 'Nevada', slug: 'nevada' },
    { name: 'New Hampshire', slug: 'new-hampshire' },
    { name: 'New Jersey', slug: 'new-jersey' },
    { name: 'New Mexico', slug: 'new-mexico' },
    { name: 'New York', slug: 'new-york' },
    { name: 'North Carolina', slug: 'north-carolina' },
    { name: 'North Dakota', slug: 'north-dakota' },
    { name: 'Ohio', slug: 'ohio' },
    { name: 'Oklahoma', slug: 'oklahoma' },
    { name: 'Oregon', slug: 'oregon' },
    { name: 'Pennsylvania', slug: 'pennsylvania' },
    { name: 'Rhode Island', slug: 'rhode-island' },
    { name: 'South Carolina', slug: 'south-carolina' },
    { name: 'South Dakota', slug: 'south-dakota' },
    { name: 'Tennessee', slug: 'tennessee' },
    { name: 'Texas', slug: 'texas' },
    { name: 'Utah', slug: 'utah' },
    { name: 'Vermont', slug: 'vermont' },
    { name: 'Virginia', slug: 'virginia' },
    { name: 'Washington', slug: 'washington' },
    { name: 'West Virginia', slug: 'west-virginia' },
    { name: 'Wisconsin', slug: 'wisconsin' },
    { name: 'Wyoming', slug: 'wyoming' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-2xl md:text-3xl font-bold hover:text-blue-100 transition-colors">
              ClotheDonations.com
            </Link>
            <p className="text-blue-100 mt-1 text-sm md:text-base">
              Find donation centers near you
            </p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-blue-100 hover:text-white transition-colors">
              Home
            </Link>
            
            {/* States Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsStatesDropdownOpen(!isStatesDropdownOpen)}
                className="text-blue-100 hover:text-white transition-colors flex items-center"
                aria-label="Select a state"
              >
                States
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isStatesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-64 overflow-y-auto">
                  {states.map(state => (
                    <Link
                      key={state.slug}
                      href={`/${state.slug}/`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                      onClick={() => setIsStatesDropdownOpen(false)}
                    >
                      {state.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/map" className="text-blue-100 hover:text-white transition-colors">
              Map
            </Link>
            <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/guidelines" className="text-blue-100 hover:text-white transition-colors">
              Guidelines
            </Link>
            <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-blue-500">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block py-2 text-blue-100 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile States Menu */}
              <div>
                <button
                  onClick={() => setIsStatesDropdownOpen(!isStatesDropdownOpen)}
                  className="w-full text-left py-2 text-blue-100 hover:text-white transition-colors flex items-center justify-between"
                >
                  States
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {isStatesDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-1 max-h-40 overflow-y-auto">
                    {states.map(state => (
                      <Link
                        key={state.slug}
                        href={`/${state.slug}/`}
                        className="block py-1 text-sm text-blue-200 hover:text-white transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsStatesDropdownOpen(false);
                        }}
                      >
                        {state.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                href="/map" 
                className="block py-2 text-blue-100 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Map
              </Link>
              <Link 
                href="/about" 
                className="block py-2 text-blue-100 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/guidelines" 
                className="block py-2 text-blue-100 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Guidelines
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-blue-100 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;