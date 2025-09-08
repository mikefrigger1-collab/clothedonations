// Save as: pages/hub/from-closet-to-cause.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function FromClosetToCausePost() {
  const post = {
    title: 'From Closet to Cause: How Donating Clothes Helps You and the Earth',
    author: 'Kelly P',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Environment',
    excerpt: 'Decluttering isn\'t just about freeing up space – it\'s an opportunity to make a real difference for the planet and people in need.'
  };

  return (
    <>
      <Head>
        <title>{post.title} | ClotheDonations Hub</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Article Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
                  <span className="text-gray-400">/</span>
                  <Link href="/hub" className="text-blue-600 hover:text-blue-800">Hub</Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-600">{post.title}</span>
                </div>
              </nav>

              {/* Article Meta */}
              <div className="flex items-center mb-6">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
                  {post.category}
                </span>
                <span className="text-gray-600 text-sm">{post.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">KP</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-gray-600 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Have you ever looked at your overflowing closet and thought, "I really need to do something about this?" Maybe that shirt from three seasons ago doesn't quite fit, or those jeans haven't seen the light of day in months. The good news is, decluttering isn't just about freeing up space – it's an opportunity to make a real difference for the planet and people in need! Donating your clothes is one of the simplest, most impactful ways to reduce waste and contribute to your community. It's a win-win for you and the Earth. Let's dive into why donating clothes is so powerful and how it can change lives, including your own!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Textile Waste: A Growing Problem</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Did you know that the average American throws away about 81 pounds of clothing each year? That's right! Tons of textiles end up in landfills, with the U.S. alone generating around 11 million tons of textile waste annually. Many of these clothes could be reused, recycled, or repurposed, but instead, they contribute to a massive environmental issue.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                When clothes decompose in landfills, they produce methane – a potent greenhouse gas that contributes to climate change. Plus, synthetic fabrics like polyester take hundreds of years to break down, meaning they stick around for far too long. By donating your unwanted clothes instead of tossing them out, you can cut down on this waste and keep these fabrics out of landfills. Imagine the impact we could make if everyone committed to donating more often!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Declutter and Feel Good</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Decluttering your wardrobe is an act of self-care, too. Let's be honest – clutter can be overwhelming! There's something incredibly refreshing about going through your clothes, making decisions about what you no longer need, and letting go. Once you're done, you're left with a more organized space and only the items you truly love and wear.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                But there's more to it than just creating physical space. There's emotional satisfaction in knowing your clothes can have a second life. Maybe that jacket you haven't worn in years will keep someone warm this winter, or those shoes you no longer need will help someone walk into a job interview with confidence. When you donate your clothes, you're not just clearing out clutter, you're creating opportunities for others.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">It's a Simple Way to Reduce Your Carbon Footprint</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We're all looking for ways to live more sustainably, right? Well, clothing donation is one of the easiest ways to do just that. The fashion industry is a huge contributor to carbon emissions, not to mention water pollution and waste. In fact, it's estimated that the industry accounts for about 10% of global carbon emissions. Yikes!
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                When you donate your clothes, you're extending the lifespan of those items. Instead of being part of the fast fashion cycle, where clothes are often worn just a few times before being discarded, you're giving your clothes the chance to be worn and loved by someone else. This reduces the demand for new clothing production, which in turn lowers the environmental impact.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Plus, many thrift stores and donation centers will resell donated clothes to fund community programs, which is a great way to support local efforts while reducing waste. So, your old clothes are not only keeping someone stylish, but they're also helping to lower the fashion industry's environmental footprint. Talk about making a difference!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">It Supports Your Local Community</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Let's not forget about the direct impact on your community. When you donate clothes, you're contributing to the well-being of people in your local area. Many donation centers partner with nonprofits that provide clothes to families in need, shelters, and disaster relief efforts. Your donation could be the reason someone stays warm in the winter or feels confident in a new job.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Thrift stores, which rely heavily on donations, often fund community programs like job training, housing assistance, and food services. By donating, you're helping to keep these programs alive and thriving. It's one of those small acts that ripple out in ways you might not even realize. You're not just cleaning out your closet – you're uplifting your entire community.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Save Money and Shop More Consciously</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Donating clothes can also be a money-saver. How? Many donation centers offer tax deductions for the items you donate. Be sure to ask for a receipt when you drop off your clothes, and you can potentially get a nice little break when tax season rolls around. Plus, decluttering helps you take stock of what you actually have, so you're less likely to buy duplicates or unnecessary items in the future.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                This process of mindful donation and decluttering often leads to more conscious shopping habits. When you realize how much you've donated, it might make you think twice before buying that fast-fashion piece you'll wear once and forget about. Instead, you might start investing in quality pieces you truly love and will wear for years to come.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Get Started with Clothing Donation</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Ready to give your closet a refresh and make a difference at the same time? Here's how to get started:
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Started Steps:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span><strong>Sort through your clothes:</strong> Go through your wardrobe and create piles for what to keep, donate, and recycle. If you haven't worn something in a year or it doesn't fit anymore, it's time to let it go.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span><strong>Research local donation spots:</strong> Many nonprofits, shelters, and thrift stores accept clothing donations. Some organizations even offer free pick-up services. Check our map to find a donation location near you.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span><strong>Prepare your clothes:</strong> Make sure the items you're donating are clean and in good condition. Fold them neatly and pack them in bags or boxes. It helps the donation centers sort and distribute them more easily.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span><strong>Drop off and feel good:</strong> Once you've made your donation, pat yourself on the back! You've just done something awesome for yourself, your community, and the planet.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Final Thoughts</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Donating clothes is more than just a decluttering task—it's a way to live more sustainably and give back to your community. By donating, you're reducing waste, extending the life of your clothes, and supporting people in need. It's one of those small actions that, when multiplied, can make a massive impact.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                So next time you're staring at that overstuffed closet, remember: clearing it out is a win for you, your neighbors, and the planet. Let's all roll up our sleeves and donate!
              </p>

              {/* Author Bio */}
              <div className="bg-blue-50 rounded-xl p-6 mt-12">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-semibold text-lg">KP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kelly P</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Kelly is your go-to guide for all things community-focused and eco-friendly. With a fun, conversational style, she loves breaking down big ideas into easy, relatable tips. Whether she's talking about donating clothes, reducing waste, or giving back to the community, Kelly's all about making a positive impact while keeping things light and engaging. She's all about action and loves inspiring others to roll up their sleeves and make a difference!
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/hub/sustainable-fashion-shop-less-donate-more" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Fashion: How to Shop Less and Donate More</h4>
                    <p className="text-gray-600 text-sm">Learn the "one in, one out" rule and how to embrace sustainable fashion...</p>
                  </Link>
                  <Link href="/hub/textile-waste-dark-side" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">What Happens When You Don't Donate: The Dark Side of Textile Waste</h4>
                    <p className="text-gray-600 text-sm">Discover the shocking statistics about textile waste and environmental impact...</p>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}