// Save as: pages/about.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const stats = [
    { number: '10,350+', label: 'Verified Locations', description: 'Donation centers across all 50 states' },
    { number: '29+', label: 'Charity Partners', description: 'Trusted organizations nationwide' },
    { number: '50', label: 'States Covered', description: 'Complete nationwide coverage' },
    { number: '2021', label: 'Founded', description: 'Years of dedicated service' }
  ];

  const values = [
    {
      title: 'Accessibility',
      description: 'Making donation simple and accessible for everyone, regardless of location or technical expertise.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    },
    {
      title: 'Trust',
      description: 'Providing verified, up-to-date information about legitimate charitable organizations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: 'Impact',
      description: 'Maximizing the positive impact of every donation through education and better connections.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      )
    },
    {
      title: 'Sustainability',
      description: 'Supporting environmental responsibility by keeping textiles out of landfills.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'ClotheDonations.com Launched',
      description: 'Started with a simple mission: make clothing donation easier for everyone across America.'
    },
    {
      year: '2022',
      title: 'Expanded Partnership Network',
      description: 'Added partnerships with major national charities including Goodwill, Salvation Army, and regional organizations.'
    },
    {
      year: '2023',
      title: 'Reached 10,000+ Locations',
      description: 'Achieved comprehensive coverage with verified donation centers in all 50 states.'
    },
    {
      year: '2024',
      title: 'Enhanced User Experience',
      description: 'Launched interactive map features and mobile-optimized design for better accessibility.'
    }
  ];

  return (
    <>
      <Head>
        <title>About ClotheDonations.com | Our Mission to Make Donation Simple</title>
        <meta name="description" content="Learn about ClotheDonations.com's mission to connect generous donors with trusted charities. Discover our story, values, and commitment to making clothing donation accessible nationwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <header className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About ClotheDonations.com
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Connecting generous hearts with communities in need
              </p>
              <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Since 2021, we've been dedicated to making clothing donation simple, accessible, 
                and impactful for everyone. Our platform connects millions of potential donors 
                with verified charitable organizations across all 50 states.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* Mission Statement */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  To make clothing donation effortless and meaningful by connecting generous individuals 
                  with trusted charitable organizations, while promoting sustainability and community support 
                  across America.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Exist</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Every year, Americans throw away millions of pounds of clothing that could benefit 
                    families in need. At the same time, charitable organizations struggle to communicate 
                    their specific needs and locations to potential donors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We bridge this gap by providing a comprehensive, easy-to-use platform that helps 
                    people find nearby donation opportunities while ensuring their contributions reach 
                    legitimate, impactful organizations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-block p-8 bg-blue-50 rounded-full">
                    <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-600 font-medium">Building bridges between generosity and need</p>
                </div>
              </div>
            </section>

            {/* Statistics */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact by the Numbers</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Values */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <div className="text-blue-600">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Story Timeline */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Content */}
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How We Work */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Make a Difference</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Verify Organizations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We thoroughly vet all charitable organizations on our platform to ensure they are 
                    legitimate, registered nonprofits with established donation programs.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Maintain Accurate Data</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our team continuously updates location information, operating hours, and donation 
                    guidelines to ensure users have the most current and accurate information.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Educate Donors</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We provide comprehensive guidelines on donation best practices, helping ensure 
                    contributions are valuable and appropriate for their intended recipients.
                  </p>
                </div>
              </div>
            </section>

            {/* Community Impact */}
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Impact</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Supporting Local Communities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Job Creation</h4>
                        <p className="text-gray-700">Donations fund job training programs and create employment opportunities in local communities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Family Support</h4>
                        <p className="text-gray-700">Affordable clothing helps families stretch their budgets and invest in other essential needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Environmental Protection</h4>
                        <p className="text-gray-700">Every donated item prevents textile waste and reduces the environmental impact of fast fashion.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Real Impact Stories</h4>
                  <blockquote className="text-gray-700 italic mb-4">
                    "Thanks to clothing donations, our job training program helped over 2,000 people 
                    find employment last year. Professional attire donations were especially crucial 
                    for interview preparation."
                  </blockquote>
                  <cite className="text-sm text-gray-600">— Local Goodwill Director</cite>
                  
                  <blockquote className="text-gray-700 italic mb-4 mt-6">
                    "Having access to affordable, quality clothing for my kids has been a blessing. 
                    It allows me to save money for their education and other important needs."
                  </blockquote>
                  <cite className="text-sm text-gray-600">— Single Parent, Community Member</cite>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Whether you're looking to donate items or learn more about supporting your community, 
                we're here to help you make a meaningful impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Start Donating Today
                </Link>
                
                <Link
                  href="/guidelines"
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Learn Best Practices
                </Link>
              </div>
              
              <div className="mt-8 p-4 bg-blue-500/30 rounded-lg">
                <p className="text-blue-100">
                  <strong>Contact Us:</strong> Have questions or suggestions? We'd love to hear from you at hello@clothedonations.com
                </p>
              </div>
            </section>

          </div>
        </main>

        <Footer allLocations={[]} states={[]} />
      </div>
    </>
  );
}