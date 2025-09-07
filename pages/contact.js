// Save as: pages/contact.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact ClotheDonations.com | Get in Touch</title>
        <meta name="description" content="Contact ClotheDonations.com for questions, suggestions, or partnership opportunities. We're here to help make your donation experience better." />
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
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                We'd love to hear from you
              </p>
              <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Have questions about donating? Need help finding a location? Want to suggest 
                a new charity partner? We're here to help make your donation experience better.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Contact Information */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-xl text-gray-600">
                  We typically respond to all inquiries within 24-48 hours
                </p>
              </div>

              <div className="flex justify-center">
                <div className="bg-blue-50 rounded-2xl p-8 text-center max-w-md">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                  <a 
                    href="mailto:hello@clothedonations.com"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    hello@clothedonations.com
                  </a>
                  <p className="text-gray-600 mt-3">
                    The best way to reach our team for any questions or feedback
                  </p>
                </div>
              </div>
            </section>

            {/* What We Can Help With */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Can Help</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">General Questions</h3>
                  <p className="text-gray-700 text-sm">
                    Questions about how to use our platform or find donation centers
                  </p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Location Updates</h3>
                  <p className="text-gray-700 text-sm">
                    Report incorrect information or suggest new donation locations
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Partnerships</h3>
                  <p className="text-gray-700 text-sm">
                    Charity organizations interested in being featured on our platform
                  </p>
                </div>

                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Suggestions</h3>
                  <p className="text-gray-700 text-sm">
                    Ideas for improving our platform or adding new features
                  </p>
                </div>

                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Issues</h3>
                  <p className="text-gray-700 text-sm">
                    Report bugs, broken links, or problems with the website
                  </p>
                </div>

                <div className="text-center p-6 bg-indigo-50 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Media Inquiries</h3>
                  <p className="text-gray-700 text-sm">
                    Press, interview requests, or research collaboration opportunities
                  </p>
                </div>
              </div>
            </section>

            {/* Response Times */}
            <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Expect</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24-48hrs</div>
                  <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700 text-sm">We aim to respond to all emails within 1-2 business days</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <h3 className="font-bold text-gray-900 mb-2">We Respond</h3>
                  <p className="text-gray-700 text-sm">Every email gets a personal response from our team</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Free</div>
                  <h3 className="font-bold text-gray-900 mb-2">Always Free</h3>
                  <p className="text-gray-700 text-sm">Our service and support are completely free to use</p>
                </div>
              </div>
            </section>

            {/* Frequently Asked Questions Preview */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Answers</h2>
              <p className="text-gray-600 text-center mb-8">
                Common questions we receive - your question might already be answered here
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-gray-900 mb-2">How do I find donation centers near me?</h3>
                  <p className="text-gray-700">
                    Use our homepage to select your state, then browse locations by city or company. 
                    You can also use our <Link href="/map" className="text-blue-600 hover:text-blue-800">interactive map</Link> to find nearby centers.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="font-bold text-gray-900 mb-2">What items can I donate?</h3>
                  <p className="text-gray-700">
                    Each organization has different guidelines. Check our <Link href="/guidelines" className="text-blue-600 hover:text-blue-800">donation guidelines</Link> page 
                    for detailed information about what to donate and how to prepare your items.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-bold text-gray-900 mb-2">Is this service really free?</h3>
                  <p className="text-gray-700">
                    Yes! ClotheDonations.com is completely free to use. We're supported by the positive impact 
                    we create in communities, not by charging fees.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-bold text-gray-900 mb-2">How do I report incorrect information?</h3>
                  <p className="text-gray-700">
                    Email us with the specific location and incorrect details. We update our database regularly 
                    and appreciate when users help us maintain accurate information.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-blue-100 mb-6">
                Don't wait to make a difference in your community
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Find Donation Centers
                </Link>
                
                <a
                  href="mailto:hello@clothedonations.com"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
                >
                  Send Us an Email
                </a>
              </div>
            </section>

          </div>
        </main>

        <Footer allLocations={[]} states={[]} />
      </div>
    </>
  );
}