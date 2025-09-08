export default function ClothingDonationExposedPost() {
  const post = {
    title: 'Clothing Donation Exposed: What These Charities Really Do With Your Donations',
    author: 'Kelly P',
    date: '2024-11-18',
    readTime: '8 min read',
    category: 'Community Impact',
    excerpt: 'What if the reality behind your good intentions isn\'t as straightforward as it seems? Explore the darker side of clothing donations.'
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
              Donating your gently used clothes to charity seems like a win-win situation. You clear out your closet, help those in need, and contribute to a good cause. But what if the reality behind your good intentions isn't as straightforward as it seems? What if some of the clothes you donate never reach those in need or aren't used in the way charities promise? Unfortunately, the journey of your clothing donations can sometimes take a detour, and in certain cases, charities have been found to mishandle donations for their own benefit.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Misleading Transparency of Charities</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              When you donate clothes to charities like Goodwill, The Salvation Army, or other well-known organizations, you probably assume that your items will be used to clothe people in need. However, that's not always the case. Many large charities operate under a resale business model where the bulk of donated items end up on the sales floors of thrift stores.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              A troubling issue with some of these larger organizations is their lack of transparency regarding where the money from sales goes. For example, Goodwill has been criticized for paying its executives exorbitant salaries while some of their workers with disabilities are paid less than minimum wage, due to legal loopholes in labor laws.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Clothing Donations Used for Profit, Not Charity</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Another disturbing reality is that many charities don't use the majority of donated clothing to help those in need at all. Instead, they treat these items as inventory to generate revenue. This issue becomes even murkier when organizations sell the clothes to third-party wholesalers, who then resell them overseas for profit.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              For example, The Salvation Army has been involved in the international secondhand clothing trade for decades. Clothes that don't sell locally are often shipped in bulk to countries like Kenya, Ghana, and Uganda. While this might seem like a noble cause, it has negative economic consequences. These massive inflows of cheap secondhand clothing have devastated local textile industries in Africa, leading to job losses and a weakened economy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Ensure Your Donations Make a Difference</h2>
            
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Steps to Donate Effectively:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Research the Charity:</strong> Look for organizations that are transparent about how they use donations</li>
                <li><strong>Donate Locally:</strong> Local shelters and community organizations often distribute clothes directly to those who need them</li>
                <li><strong>Organize Clothing Swaps:</strong> Keep your clothes within the community through friend and family exchanges</li>
                <li><strong>Repurpose or Recycle:</strong> Consider upcycling worn items or finding textile recycling programs</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Final Thoughts</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Donating clothes is a wonderful way to give back, but it's essential to be informed about where your donations are going and how they're being used. While many charities operate with integrity, some have been found to mishandle donations for their own benefit. By doing a bit of research and donating thoughtfully, you can ensure your contributions truly make a difference for those in need.
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
