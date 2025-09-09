// Save as: pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home({ states, companies, totalLocations, allLocations }) {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (e) => {
    const stateSlug = e.target.value;
    if (stateSlug) {
      window.location.href = `/${stateSlug}/`;
    }
  };

const featuredCompanies = [
  { 
    name: 'Goodwill', 
    logo: 'goodwill.jpg', 
    description: 'Goodwill sells your donations in their thrift stores to fund job training, employment services, and community programs for people facing barriers to employment.' 
  },
  { 
    name: 'Salvation Army', 
    logo: 'salvation-army.jpg', 
    description: 'The Salvation Army uses funds from their Family Stores to operate adult rehabilitation centers, providing a lifeline for those struggling with addiction and other hardships.' 
  },
  { 
    name: 'USAgain', 
    logo: 'usagain.jpg', 
    description: 'USAgain is a textile recycling company that collects clothes and shoes in bins to keep them out of landfills and reduce environmental waste.' 
  },
  { 
    name: 'Savers', 
    logo: 'savers.jpg', 
    description: 'As a for-profit thrift store, Savers partners with local nonprofits, providing them with reliable funding by purchasing donated goods and selling them to the public.' 
  },
  { 
    name: 'Disabled American Veterans', 
    logo: 'disabled-american-veterans.jpg', 
    description: 'DAV uses your donations to support veterans and their families with essential services like healthcare assistance, financial aid, and job placement programs.' 
  },
  { 
    name: 'Greendrop', 
    logo: 'greendrop.jpg', 
    description: 'GreenDrop collects donations on behalf of various charities, including the American Red Cross, and then sells the items to fund their partners’ charitable missions.' 
  }
];

  return (
    <>
      <Head>
        <title>Find Clothing Donation Centers Near You | 10,000+ Locations</title>
        <meta name="description" content="Discover clothing donation bins, thrift stores & charity drop-off locations near you. Search 10,000+ verified donation centers across all 50 states. Help your community today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

   <Header />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <header className="relative text-gray-800 overflow-hidden">
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Find Clothing Donation Centers
                <span className="block text-blue-800">Near You</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Discover {totalLocations.toLocaleString()}+ verified donation locations across all 50 states.
                Turn your unused clothes into community impact.
              </p>

              {/* State Dropdown Selector */}
              <div className="mt-8 mb-8 md:mt-12 md:mb-16">
                <label htmlFor="state-selector" className="sr-only">Select your state</label>
                <div className="relative w-full max-w-md mx-auto">
                  <select
                    id="state-selector"
                    value={selectedState}
                    onChange={handleStateChange}
                    className="block w-full px-5 py-4 text-xl text-gray-800 bg-white border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select your state to get started...</option>
                    {states.map(state => (
                      <option key={state.slug} value={state.slug}>
                        {state.name} ({state.locations.length.toLocaleString()})
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-blue-800">{totalLocations.toLocaleString()}+</div>
                  <div className="text-gray-700">Donation Locations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-blue-800">50</div>
                  <div className="text-gray-700">States Covered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-blue-800">{companies.length}+</div>
                  <div className="text-gray-700">Charity Partners</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-1 left-0 right-0">
            <svg viewBox="0 0 1200 120" className="w-full h-12 text-blue-50">
              <path fill="currentColor" d="M0,120 C120,100 240,80 360,90 C480,100 600,120 720,110 C840,100 960,80 1080,90 C1140,95 1180,102 1200,105 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
        </header>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Making clothing donation simple, fast, and impactful for everyone</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Largest Database</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access the most comprehensive collection of donation locations with {totalLocations.toLocaleString()}+ verified centers.
                  From urban centers to rural communities, find options everywhere.
                </p>
              </div>

              <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Find nearby donation centers in seconds, not hours. Our optimized search delivers
                  instant results with addresses, hours, and contact information.
                </p>
              </div>

              <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Super Simple</h3>
                <p className="text-gray-600 leading-relaxed">
                  No complicated forms or confusing interfaces. Select your state, find locations,
                  and start making a difference in your community today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Charities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted Charity Partners</h2>
              <p className="text-xl text-gray-600">Working with America's most respected charitable organizations</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCompanies.map(company => (
                <div key={company.name} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-50 transition-colors">
                      <Image
                        src={`/logos/${company.logo}`}
                        alt={`${company.name} logo`}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{company.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{company.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g fill="#3b82f6" fillOpacity="0.4">
                  <circle cx="10" cy="10" r="2"/>
                  <circle cx="30" cy="10" r="2"/>
                  <circle cx="50" cy="10" r="2"/>
                  <circle cx="10" cy="30" r="2"/>
                  <circle cx="30" cy="30" r="2"/>
                  <circle cx="50" cy="30" r="2"/>
                  <circle cx="10" cy="50" r="2"/>
                  <circle cx="30" cy="50" r="2"/>
                  <circle cx="50" cy="50" r="2"/>
                </g>
              </g>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Making Donation Simple & Impactful
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We believe that giving back to your community should be effortless and meaningful.
                  Here's how we're changing the way people donate clothes across America.
                </p>
              </div>

              {/* Main Content Cards */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {/* Our Mission Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Our Mission</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    We connect generous donors with trusted charities, making it effortless to find donation
                    centers and create positive community impact. Every donation helps reduce waste while
                    supporting those in need.
                  </p>
                </div>

                {/* Why It Matters Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Why It Matters</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Your clothing donations support job training, disaster relief, veteran services, and
                    countless other vital programs. Together, we're building stronger communities and a
                    more sustainable future.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer allLocations={allLocations || []} states={states} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');

  const dataPath = path.join(process.cwd(), 'data', 'locations.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  return {
    props: {
      states: data.states.sort((a, b) => a.name.localeCompare(b.name)),
      companies: data.companies,
      totalLocations: data.totalLocations,
      allLocations: data.states.flatMap(state => state.locations || [])
    }
  };
}