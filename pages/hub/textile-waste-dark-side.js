// Save as: pages/hub/textile-waste-dark-side.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TextileWasteBlogPost() {
  const post = {
    title: 'What Happens When You Don\'t Donate: The Dark Side of Textile Waste',
    author: 'Kelly P',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Environment',
    excerpt: 'Every year, millions of tons of clothing are discarded, piling up in landfills and contributing to environmental degradation. Discover the shocking statistics and learn how you can make a difference.'
  };

  return (
    <>
      <Head>
        <title>{post.title} | ClotheDonations Hub</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
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
                  <span className="text-gray-400">›</span>
                  <Link href="/hub" className="text-blue-600 hover:text-blue-800">Hub</Link>
                  <span className="text-gray-400">›</span>
                  <span className="text-gray-600">Article</span>
                </div>
              </nav>

              {/* Article Meta */}
              <div className="flex items-center mb-6">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-sm text-gray-600">{post.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Author & Date */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-600">
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
            <div className="grid lg:grid-cols-4 gap-8">
              
              {/* Main Content */}
              <article className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                <div className="prose prose-lg max-w-none">
                  
                  <p className="lead text-xl text-gray-700 mb-8">
                    The fashion industry is often seen as a way for people to express their individuality, creativity, and culture. But there's an unseen cost that comes with every new shirt, pair of jeans, or dress you buy—and that cost is textile waste.
                  </p>

                  <p>
                    Every year, millions of tons of clothing are discarded, piling up in landfills, contributing to environmental degradation, and creating problems that extend far beyond what we might imagine when we simply toss out that old sweater.
                  </p>

                  <p>
                    The reality is, what happens when we don't donate our unwanted clothes is a growing environmental crisis that affects everyone. In this piece, we'll explore the dark side of textile waste, provide shocking statistics about how much clothing ends up in landfills, and discuss how you can minimize your impact by making regular donations.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Shocking Scope of Textile Waste</h2>
                  
                  <p>
                    Let's start with the numbers. Globally, about <strong>92 million tons</strong> of textile waste is produced every year. In the U.S. alone, it's estimated that about 85% of all discarded textiles end up in landfills, despite the fact that nearly all of them could be reused, recycled, or repurposed in some way. That's over <strong>11 million tons</strong> of textile waste in the U.S. alone – every year.
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Shocking Fact</h3>
                    <p className="text-red-700">
                      That's like throwing away the weight of about 70,000 Boeing 747 airplanes full of clothes annually. If you laid out those clothes end-to-end, they would circle the Earth multiple times.
                    </p>
                  </div>

                  <p>
                    And it's not just landfills that are overwhelmed by textile waste. A significant portion of clothing, particularly items made from synthetic materials like polyester, gets incinerated, releasing toxic chemicals and greenhouse gases into the air. These chemicals and emissions contribute to climate change, air pollution, and a variety of health issues for communities near these incineration sites.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Long Clothes Linger in Landfills</h2>
                  
                  <p>
                    One of the most devastating aspects of textile waste is how long it takes for fabrics to decompose. Cotton, for example, might seem like a natural fiber that would break down quickly, but in a landfill, it can take over 5 months to decompose. And that's on the lower end of the spectrum.
                  </p>

                  <p>
                    Synthetic fibers, such as polyester and nylon, are even worse. These materials are essentially forms of plastic, and they can take up to <strong>200 years</strong> to decompose. While they slowly break down, they release microplastics and toxic chemicals into the soil and water systems, which can harm wildlife and pollute drinking water sources.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Environmental Impact of Fast Fashion</h2>
                  
                  <p>
                    The rise of fast fashion – the rapid production of cheap, trendy clothing – has exacerbated the textile waste problem. Fast fashion encourages consumers to buy more clothes at lower prices, but these garments are often made from low-quality materials that wear out quickly.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Fast Fashion by the Numbers</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-blue-700">Carbon Emissions</p>
                        <p className="text-blue-600">10% of global emissions from fashion industry</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-700">Water Usage</p>
                        <p className="text-blue-600">2,700 liters per cotton t-shirt</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-700">Annual Waste</p>
                        <p className="text-blue-600">81 pounds per American</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-700">Water Consumption</p>
                        <p className="text-blue-600">2nd largest consumer globally</p>
                      </div>
                    </div>
                  </div>

                  <p>
                    As a result, people are more likely to discard these items after just a few wears. It's estimated that the average American throws away around 81 pounds of clothes each year, with much of this waste coming from fast fashion.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Happens When You Don't Donate</h2>
                  
                  <p>
                    When we choose to discard clothes instead of donating or recycling them, the consequences are far-reaching. Not only do our clothes contribute to overflowing landfills, but they also waste the resources used to make them in the first place. The water, energy, and labor that went into producing those garments are effectively wasted when the items are thrown away prematurely.
                  </p>

                  <p>
                    Moreover, textile waste doesn't just harm the environment – it also represents a missed opportunity to help others. Many people, both in the U.S. and abroad, lack access to adequate clothing. By donating clothes instead of tossing them out, you're giving someone else the chance to benefit from items you no longer need.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How You Can Make a Difference: Actionable Steps</h2>
                  
                  <p>
                    The good news is that reducing your impact on textile waste doesn't have to be complicated. Here are some easy, actionable steps you can take to ensure that your old clothes don't end up in a landfill:
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Start Donating Regularly</h3>
                  <p>
                    The easiest and most effective way to combat textile waste is to donate your gently-used clothes. Many people think of donation as something to do during spring cleaning, but making it a regular habit can have a much larger impact.
                  </p>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
                    <h4 className="font-semibold text-green-800 mb-2">Pro Tip</h4>
                    <p className="text-green-700">
                      Consider doing a wardrobe check every season, pulling out items you no longer wear, and setting them aside for donation. You'll feel lighter, and your clothes can go to someone who really needs them.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Organize a Clothing Swap</h3>
                  <p>
                    If you have friends, family, or coworkers who are also interested in reducing their textile waste, organizing a clothing swap can be a fun and sustainable way to give clothes a second life.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Repurpose and Upcycle</h3>
                  <p>
                    Not all clothes are in good enough condition to donate, but that doesn't mean they have to end up in the trash. Get creative and find ways to repurpose old clothes into something new.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Recycle When Possible</h3>
                  <p>
                    If your clothes are beyond repair or not suitable for donation, look for textile recycling programs in your area. Many cities and organizations now offer textile recycling services.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Buy Less, Choose Better</h3>
                  <p>
                    Reducing textile waste starts with mindful consumption. Rather than constantly buying new clothes, focus on building a timeless, versatile wardrobe that prioritizes quality over quantity.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Making Donation a Habit</h2>
                  
                  <p>
                    One of the most effective ways to ensure your clothes don't contribute to textile waste is to build the habit of donating. Instead of waiting until you have a massive pile of clothes to go through, make it part of your routine.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Take Action Today</h3>
                    <p className="text-blue-700 mb-4">
                      Ready to start making a difference? Find donation centers near you and make your first contribution to reducing textile waste.
                    </p>
                    <Link
                      href="/"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Find Donation Centers
                    </Link>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Final Thoughts</h2>
                  
                  <p>
                    The dark side of textile waste is a serious issue, but it's one we all have the power to address. By choosing not to donate, we contribute to a cycle of waste that harms the environment, depletes natural resources, and perpetuates a culture of overconsumption.
                  </p>

                  <p>
                    However, with small, intentional changes, we can make a big impact. Donating clothes regularly, repurposing old items, and recycling textiles are all ways to combat the environmental and social consequences of textile waste. Every piece of clothing you donate is one less item in a landfill and one more resource for someone in need. By embracing these actions, we can all help reduce the waste and environmental burden caused by discarded textiles.
                  </p>

                  {/* Author Bio */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold text-lg">KP</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Kelly P</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Kelly is your go-to guide for all things community-focused and eco-friendly. With a fun, conversational style, she loves breaking down big ideas into easy, relatable tips. Whether she's talking about donating clothes, reducing waste, or giving back to the community, Kelly's all about making a positive impact while keeping things light and engaging. She's all about action and loves inspiring others to roll up their sleeves and make a difference!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <BlogSidebar 
                currentPost={post}
                showTableOfContents={true}
                tableOfContents={tableOfContents}
                relatedArticles={relatedArticles}
              />
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/hub"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Back to Hub
                </Link>
                
                <div className="text-sm text-gray-600">
                  More articles coming soon
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer allLocations={[]} states={[]} />
      </div>
    </>
  );
}