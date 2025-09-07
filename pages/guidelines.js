// Save as: pages/guidelines.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GuidelinesPage() {
  const charityComparison = [
    {
      name: 'Goodwill',
      clothing: 'Yes',
      shoes: 'Yes',
      household: 'Books, DVDs, small appliances',
      electronics: 'Computers, phones',
      furniture: 'No',
      textiles: 'Clean items only'
    },
    {
      name: 'Salvation Army',
      clothing: 'Yes',
      shoes: 'Yes',
      household: 'Kitchen items, linens, toys',
      electronics: 'Small electronics',
      furniture: 'Yes',
      textiles: 'All clean textiles'
    },
    {
      name: 'USAgain',
      clothing: 'Any condition',
      shoes: 'Any condition',
      household: 'No',
      electronics: 'No',
      furniture: 'No',
      textiles: 'Any condition'
    },
    {
      name: 'Savers',
      clothing: 'Yes',
      shoes: 'Yes',
      household: 'Books, media',
      electronics: 'No',
      furniture: 'No',
      textiles: 'Clean items only'
    }
  ];

  return (
    <>
      <Head>
        <title>Clothing Donation Guidelines | How to Donate Responsibly</title>
        <meta name="description" content="Complete guide to clothing donations. Learn what to donate, how to prepare items, tax benefits, and organization-specific guidelines for maximum impact." />
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
                Clothing Donation Guidelines
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Everything you need to know to make your donations count
              </p>
              <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Make the biggest impact with your charitable giving by following these proven guidelines. 
                Your thoughtful donations help create jobs, support families, and protect the environment.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* General Principles */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">General Donation Principles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
                  <p className="text-gray-700">Donate items you'd be comfortable giving to a friend. Clean, gently used items make the biggest difference.</p>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Seasonal Timing</h3>
                  <p className="text-gray-700">Donate seasonal items just before they're needed. Winter coats in fall, summer clothes in spring.</p>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Over Volume</h3>
                  <p className="text-gray-700">One quality item is better than ten poor ones. Focus on donations that truly help recipients.</p>
                </div>
              </div>
            </section>

            {/* What to Donate */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Donate</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Clothing Items
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Shirts & Tops:</strong> T-shirts, dress shirts, blouses, sweaters, hoodies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Bottoms:</strong> Jeans, dress pants, shorts, skirts, leggings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Outerwear:</strong> Coats, jackets, blazers, vests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Dresses:</strong> Casual, work, formal, and special occasion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Professional Wear:</strong> Suits, dress shoes, ties, work uniforms</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Accessories & More
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Shoes:</strong> Sneakers, dress shoes, boots, sandals (clean, good soles)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Accessories:</strong> Belts, purses, handbags, jewelry, watches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Textiles:</strong> Clean blankets, sheets, towels, curtains</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Winter Gear:</strong> Gloves, hats, scarves, winter coats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Children's Items:</strong> Kids' clothes, backpacks, lunch boxes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What NOT to Donate */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What NOT to Donate</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-red-800">Items That Cannot Be Accepted</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-red-700">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Damaged, stained, or torn clothing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Underwear, bras, and socks (hygiene reasons)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Shoes with worn-out soles or holes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Items with strong odors or pet hair</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Car seats, cribs, or recalled safety items</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Mattresses and pillows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Hazardous materials or chemicals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Broken electronics or appliances</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Preparation Tips */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Prepare Your Donations</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Before You Donate</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Wash or dry clean all clothing items</li>
                      <li>• Check pockets for personal items</li>
                      <li>• Mend minor repairs (loose buttons, small tears)</li>
                      <li>• Remove lint and pet hair</li>
                      <li>• Ensure items are completely dry</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Sorting & Organization</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Group similar items together</li>
                      <li>• Separate clothing by season</li>
                      <li>• Keep shoes in pairs</li>
                      <li>• Bundle accessories in clear bags</li>
                      <li>• Remove hangers unless requested</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Packaging</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Use sturdy bags or boxes</li>
                      <li>• Don't overfill containers</li>
                      <li>• Protect delicate items</li>
                      <li>• Label fragile items clearly</li>
                      <li>• Keep items dry during transport</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery Tips</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Check donation center hours</li>
                      <li>• Bring items during business hours</li>
                      <li>• Ask for a donation receipt</li>
                      <li>• Be patient during busy periods</li>
                      <li>• Consider calling ahead for large donations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Organization Comparison */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Organization-Specific Guidelines</h2>
              <p className="text-gray-600 mb-8">Different charities have different needs and capabilities. Here's what each major organization typically accepts:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Organization</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Clothing</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Shoes</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Household</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Electronics</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Textiles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {charityComparison.map((org, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}>
                        <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">{org.name}</td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">{org.clothing}</td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">{org.shoes}</td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">{org.household}</td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">{org.electronics}</td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">{org.textiles}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Guidelines may vary by location. Always check with individual donation centers for their specific requirements and current needs.
                </p>
              </div>
            </section>
  
       {/* Tax Benefits */}
<section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Benefits & Record Keeping</h2>
  
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Your Receipt</h3>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Always ask for a donation receipt when dropping off items</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Ensure the receipt includes the organization's name and date</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Keep receipts organized by tax year</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>You determine the fair market value of your donations</span>
        </li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Valuation Guidelines</h3>
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Typical Values:</h4>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• Shirt/Blouse: $3-12</li>
          <li>• Pants/Skirt: $4-15</li>
          <li>• Dress: $5-20</li>
          <li>• Suit: $15-60</li>
          <li>• Coat: $8-25</li>
          <li>• Shoes: $3-25</li>
        </ul>
      </div>
      <p className="text-sm text-gray-600">
        Values based on thrift store prices for items in good condition. 
        Consult IRS Publication 561 or a tax professional for detailed guidance.
      </p>
    </div>
  </div>
</section>

{/* Environmental Impact */}
<section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Impact</h2>
  
  <div className="grid md:grid-cols-3 gap-6 mb-8">
    <div className="text-center">
      <div className="text-4xl font-bold text-green-600 mb-2">84 lbs</div>
      <p className="text-gray-700">Average clothing thrown away per person annually</p>
    </div>
    <div className="text-center">
      <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
      <p className="text-gray-700">Of textiles can be recycled or reused</p>
    </div>
    <div className="text-center">
      <div className="text-4xl font-bold text-green-600 mb-2">2,700</div>
      <p className="text-gray-700">Liters of water saved per donated t-shirt</p>
    </div>
  </div>
  
  <div className="bg-white rounded-xl p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-4">How Your Donations Help the Planet</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <ul className="space-y-3">
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span className="text-gray-700">Reduces textile waste in landfills</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span className="text-gray-700">Saves water used in clothing production</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span className="text-gray-700">Reduces demand for new clothing manufacturing</span>
        </li>
      </ul>
      <ul className="space-y-3">
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span className="text-gray-700">Lowers carbon emissions from transportation</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span className="text-gray-700">Supports circular economy principles</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span className="text-gray-700">Prevents harmful chemicals from entering soil</span>
        </li>
      </ul>
    </div>
  </div>
</section>
            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Now that you know how to donate responsibly, find a donation center near you and start making an impact in your community.
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
                  Find Donation Centers
                </Link>
                
                <Link
                  href="/map"
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
                  </svg>
                  View Interactive Map
                </Link>
              </div>
              
              <div className="mt-8 p-4 bg-blue-500/30 rounded-lg">
                <p className="text-blue-100">
                  <strong>Quick Tip:</strong> Start small with a few quality items. Every donation makes a difference in someone's life.
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