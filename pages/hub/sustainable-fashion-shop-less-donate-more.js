// Save as: pages/hub/sustainable-fashion-shop-less-donate-more.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SustainableFashionPost() {
  const post = {
    title: 'Sustainable Fashion: How to Shop Less and Donate More',
    author: 'Kelly P',
    date: '2024-11-25',
    readTime: '5 min read',
    category: 'Environment',
    excerpt: 'Fashion is fun and expressive, but keeping up with trends often leads to over-consumption. Learn the "one in, one out" rule and how to embrace sustainable fashion.'
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
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
                  <span className="text-gray-400">/</span>
                  <Link href="/hub" className="text-blue-600 hover:text-blue-800">Hub</Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-600">{post.title}</span>
                </div>
              </nav>

              <div className="flex items-center mb-6">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
                  {post.category}
                </span>
                <span className="text-gray-600 text-sm">{post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

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
                Fashion is fun and expressive, but keeping up with trends often leads to over-consumption and a closet full of clothes we hardly wear. Thankfully, sustainable fashion offers an alternative that lets you enjoy style while reducing waste, shopping less, and making room for giving back to the community. One simple strategy to embrace is the "one in, one out" rule, which can help you keep your wardrobe manageable and encourage regular clothing donations. Let's explore how to reduce consumption, shop more consciously, and adopt a more sustainable approach to fashion.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Be Mindful About What You Buy</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the easiest ways to start shopping less is to become more mindful about what you bring into your wardrobe. It's tempting to grab trendy items or fall into impulse buys, but taking a moment to pause can save you money, space, and contribute to sustainability. Before buying a new piece, ask yourself:
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions to Ask Before Shopping:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Do I really need this?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Will I wear it regularly, or is it a one-time thing?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Does this fit my personal style and wardrobe?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Can I pair it with multiple items I already own?</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                By taking the time to reflect on these questions, you can avoid fast-fashion traps and make smarter, longer-lasting purchases. Focusing on quality over quantity is a great way to keep your wardrobe timeless while supporting more ethical, sustainable brands.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Adopt the "One In, One Out" Strategy</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The "one in, one out" rule is a simple yet effective way to prevent over-accumulating clothes. For every new item you buy, commit to donating one piece you no longer wear. This not only keeps your closet from overflowing but also encourages you to be more selective when shopping. Knowing that a purchase means parting with something forces you to focus on items that truly bring value to your wardrobe.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How the "One In, One Out" Rule Works:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">1</span>
                    <div>
                      <p className="font-medium text-gray-900">Shop with intention</p>
                      <p className="text-gray-700 text-sm">Before buying anything new, identify what you'll donate to make room for it.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">2</span>
                    <div>
                      <p className="font-medium text-gray-900">Maintain balance</p>
                      <p className="text-gray-700 text-sm">Your closet size stays manageable while continuously refreshing your wardrobe.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">3</span>
                    <div>
                      <p className="font-medium text-gray-900">Give back regularly</p>
                      <p className="text-gray-700 text-sm">Each purchase becomes an opportunity to help someone else in your community.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Regularly cleaning out your closet for donations can help you reduce clutter and give back to the community. Donation centers, shelters, and thrift stores are always in need of gently-used clothes, and your donations can make a huge difference for people in need. Whether it's a winter coat for someone facing the cold or professional attire for someone preparing for a job interview, your old clothes can have a second life and create positive change.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Shop Consciously</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                When you do need to buy new clothes, prioritize sustainable, ethical brands. Look for companies that use eco-friendly materials, avoid harmful dyes, and pay fair wages to workers. Shopping from brands that are transparent about their manufacturing processes allows you to support businesses that are part of the solution, not the problem.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Another way to shop consciously is to buy second-hand. Thrift stores, online marketplaces, and consignment shops are fantastic places to find stylish, affordable, and unique pieces without contributing to new production. By purchasing second-hand, you reduce demand for new clothing, extend the lifespan of existing garments, and keep items out of landfills.
              </p>

              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conscious Shopping Tips:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Research brands:</strong> Look for companies with transparent sustainability practices and ethical labor standards.</li>
                  <li><strong>Choose quality materials:</strong> Natural fibers like organic cotton, linen, and wool tend to be more sustainable and durable.</li>
                  <li><strong>Shop second-hand first:</strong> Check thrift stores and consignment shops before buying new items.</li>
                  <li><strong>Support local businesses:</strong> Local boutiques and vintage shops often carry unique, sustainable options.</li>
                  <li><strong>Read reviews:</strong> Research the longevity and quality of items before purchasing.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Build a Versatile Wardrobe</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the secrets to shopping less is building a versatile wardrobe that works together seamlessly. Invest in timeless, high-quality pieces that can be mixed and matched for multiple outfits. Think staple items like a great pair of jeans, a classic blazer, or a neutral-toned sweater that never goes out of style. A versatile wardrobe means fewer items but more ways to style them, reducing the urge to constantly shop for new things.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wardrobe Essentials to Invest In:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Basics:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Well-fitting jeans</li>
                      <li>• Classic white button-down</li>
                      <li>• Little black dress</li>
                      <li>• Versatile blazer</li>
                      <li>• Quality t-shirts in neutral colors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outerwear & Accessories:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Classic trench coat</li>
                      <li>• Warm winter coat</li>
                      <li>• Comfortable walking shoes</li>
                      <li>• One versatile handbag</li>
                      <li>• Simple jewelry pieces</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                When building a versatile wardrobe, focus on pieces that can transition from day to night, work to weekend, and season to season. Neutral colors like black, white, navy, gray, and beige are excellent foundation colors that pair well with everything. Once you have your basics, you can add a few statement pieces or trend items to keep your style fresh without overhauling your entire wardrobe.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Final Thoughts</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Sustainable fashion isn't about giving up style; it's about making smarter, more conscious choices that benefit both you and the planet. By being mindful of what you buy, adopting the "one in, one out" rule, and shopping from sustainable sources, you can enjoy a fashionable, eco-friendly wardrobe while making regular clothing donations that support your community.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                It's a simple shift that makes a world of difference! Every conscious choice you make - whether it's buying less, choosing quality over quantity, or donating regularly - contributes to a more sustainable fashion industry and a healthier planet for everyone.
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
                  <Link href="/hub/upcycling-vs-donating" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Upcycling vs. Donating: Which is Right for You?</h4>
                    <p className="text-gray-600 text-sm">Explore the benefits of both approaches to decide which fits your lifestyle...</p>
                  </Link>
                  <Link href="/hub/from-closet-to-cause" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">From Closet to Cause: How Donating Clothes Helps You and the Earth</h4>
                    <p className="text-gray-600 text-sm">Discover the powerful environmental and community impact of clothing donations...</p>
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