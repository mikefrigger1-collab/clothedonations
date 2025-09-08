export default function ClothingDonationEtiquettePost() {
  const post = {
    title: 'Clothing Donation Etiquette: What to Do Before You Drop Off',
    author: 'Kelly P',
    date: '2024-11-20',
    readTime: '4 min read',
    category: 'Donation Tips',
    excerpt: 'Properly preparing your clothes for donation ensures they\'re clean, usable, and ready to benefit someone in need.'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Donating clothes is a wonderful way to give back to the community and reduce waste, but it's important to remember that donation centers and charities can only accept items that are in good condition. Properly preparing your clothes for donation ensures that they're clean, usable, and ready to benefit someone in need. A little effort before you drop off your items can make all the difference in whether your clothes end up helping others or being discarded.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Clean Your Clothes First</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              One of the most important things you can do before donating clothes is to ensure they're clean. It may seem like common sense, but donation centers often receive clothing that's stained, dirty, or unwashed, which makes it harder to reuse or resell. Remember that someone else will be wearing your clothes, and they deserve to receive items in good, clean condition.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cleaning Checklist:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Wash everything before you donate, making sure to remove stains and odors</li>
                <li>• Check for any damage, such as broken zippers, missing buttons, or tears</li>
                <li>• Dry your items thoroughly to prevent any mildew or mold from forming</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Fold and Sort for Easy Processing</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Donation centers often receive a high volume of items, so taking the time to fold and sort your clothes can greatly help the staff and volunteers who process donations. Folded clothes are easier to handle, inspect, and distribute. It also ensures that the items are presented well, whether they're headed for a thrift store or directly to someone in need.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Check What's Acceptable to Donate</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Before you head to a donation center, check the organization's guidelines on what they can and cannot accept. Different charities and thrift stores have varying needs and restrictions, and donating items they don't accept can be more of a burden than a help.
            </p>

            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What NOT to Donate:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Heavily damaged or stained clothes</li>
                <li>• Used underwear or socks (unless specifically requested)</li>
                <li>• Items missing essential parts like zippers or buttons</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Don't Dump Unusable Items</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              It's important to remember that donation centers are not dumping grounds for unusable goods. Many organizations struggle with the cost of disposing of unsellable items. If you have clothes that are too worn, consider recycling them instead of donating. Many cities offer textile recycling programs where these items can be turned into new products like insulation, rags, or padding.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Final Thoughts</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Clothing donation is a powerful way to help those in need, but it's essential to be thoughtful about how you prepare your items. Clean, fold, and sort your clothes, and make sure they are in good condition before donating. By following these simple donation etiquette tips, you'll ensure that your items make the greatest possible impact and help those who need them most.
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
  );
}