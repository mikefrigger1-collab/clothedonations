// Save as: components/Footer.js
import Link from 'next/link';

const Footer = ({ allLocations = [], states = [] }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ClotheDonations.com</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your comprehensive guide to clothing donation centers across America. 
              Find nearby drop-off locations, support local charities, and make a 
              positive impact in your community.
            </p>
            <p className="text-gray-400">
              Serving {allLocations.length ? allLocations.length.toLocaleString() : '10,000'}+ verified locations nationwide since 2021.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Find Locations
              </Link>
              <Link href="/map" className="block text-gray-400 hover:text-white transition-colors">
                Interactive Map
              </Link>
              <Link href="/guidelines" className="block text-gray-400 hover:text-white transition-colors">
                Donation Guidelines
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Popular States */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular States</h4>
            <div className="space-y-2">
              {states.length > 0 ? (
                states.slice(0, 5).map(state => (
                  <Link 
                    key={state.slug}
                    href={`/${state.slug}/`}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {state.name}
                  </Link>
                ))
              ) : (
                // Fallback popular states if no data
                <>
                  <Link href="/california/" className="block text-gray-400 hover:text-white transition-colors">
                    California
                  </Link>
                  <Link href="/texas/" className="block text-gray-400 hover:text-white transition-colors">
                    Texas
                  </Link>
                  <Link href="/florida/" className="block text-gray-400 hover:text-white transition-colors">
                    Florida
                  </Link>
                  <Link href="/new-york/" className="block text-gray-400 hover:text-white transition-colors">
                    New York
                  </Link>
                  <Link href="/illinois/" className="block text-gray-400 hover:text-white transition-colors">
                    Illinois
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2021 ClotheDonations.com. Making donation simple and accessible for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;