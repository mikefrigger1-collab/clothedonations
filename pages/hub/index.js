// Save as: pages/hub/index.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BlogHub() {
  const blogPosts = [
    {
      slug: 'textile-waste-dark-side',
      title: 'What Happens When You Don\'t Donate: The Dark Side of Textile Waste',
      excerpt: 'Every year, millions of tons of clothing are discarded, piling up in landfills and contributing to environmental degradation. Discover the shocking statistics and learn how you can make a difference.',
      author: 'Kelly P',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Environment',
      featured: true
    },
    {
      slug: 'closet-cleanse-how-to-decide',
      title: 'Closet Cleanse: How to Decide What Clothes to Donate',
      excerpt: 'If your wardrobe is overflowing, it\'s time for a refresh! Learn how to decide what clothes to donate with our fun and guilt-free closet cleanse guide.',
      author: 'Kelly P',
      date: '2024-12-10',
      readTime: '7 min read',
      category: 'Donation Tips'
    },
    {
      slug: 'from-closet-to-cause',
      title: 'From Closet to Cause: How Donating Clothes Helps You and the Earth',
      excerpt: 'Decluttering isn\'t just about freeing up space – it\'s an opportunity to make a real difference for the planet and people in need. Discover the powerful impact of clothing donations.',
      author: 'Kelly P',
      date: '2024-12-08',
      readTime: '6 min read',
      category: 'Environment'
    },
    {
      slug: 'hidden-gems-items-you-can-donate',
      title: 'Hidden Gems: Items You Didn\'t Know You Could Donate',
      excerpt: 'Your closet holds a treasure trove of items beyond just shirts and pants. From shoes to linens, discover surprising items that donation centers happily accept.',
      author: 'Kelly P',
      date: '2024-12-05',
      readTime: '5 min read',
      category: 'Donation Tips'
    },
    {
      slug: 'inspiring-stories-lives-changed',
      title: 'Inspiring Stories of Lives Changed by Clothing Donations',
      excerpt: 'Real-life stories from people who have benefitted from clothing donations show just how powerful these small acts of kindness can be. Discover the incredible journey your donated clothes take.',
      author: 'Kelly P',
      date: '2024-12-02',
      readTime: '9 min read',
      category: 'Success Stories'
    },
    {
      slug: '2024-donation-trends',
      title: '2024 Donation Trends: What Items Are Most Needed at Charities Right Now?',
      excerpt: 'Before you load up those donation bags, let\'s talk about what donation centers and charities are really looking for this year. Some items are in much higher demand than others.',
      author: 'Kelly P',
      date: '2024-11-28',
      readTime: '6 min read',
      category: 'Donation Tips'
    },
    {
      slug: 'sustainable-fashion-shop-less-donate-more',
      title: 'Sustainable Fashion: How to Shop Less and Donate More',
      excerpt: 'Fashion is fun and expressive, but keeping up with trends often leads to over-consumption. Learn the "one in, one out" rule and how to embrace sustainable fashion.',
      author: 'Kelly P',
      date: '2024-11-25',
      readTime: '5 min read',
      category: 'Environment'
    },
    {
      slug: 'upcycling-vs-donating',
      title: 'Upcycling vs. Donating: Which is Right for You?',
      excerpt: 'Should you transform your old clothes or donate them? Explore the benefits of upcycling and donating to decide which sustainable approach fits your lifestyle.',
      author: 'Kelly P',
      date: '2024-11-22',
      readTime: '6 min read',
      category: 'Environment'
    },
    {
      slug: 'clothing-donation-etiquette',
      title: 'Clothing Donation Etiquette: What to Do Before You Drop Off',
      excerpt: 'Properly preparing your clothes for donation ensures they\'re clean, usable, and ready to benefit someone in need. Learn the essential donation etiquette tips.',
      author: 'Kelly P',
      date: '2024-11-20',
      readTime: '4 min read',
      category: 'Donation Tips'
    },
    {
      slug: 'clothing-donation-exposed',
      title: 'Clothing Donation Exposed: What These Charities Really Do With Your Donations',
      excerpt: 'What if the reality behind your good intentions isn\'t as straightforward as it seems? Explore the darker side of clothing donations and learn how to donate more effectively.',
      author: 'Kelly P',
      date: '2024-11-18',
      readTime: '8 min read',
      category: 'Community Impact'
    }
  ];

  const categories = [
    { name: 'Environment', count: blogPosts.filter(post => post.category === 'Environment').length },
    { name: 'Donation Tips', count: blogPosts.filter(post => post.category === 'Donation Tips').length },
    { name: 'Success Stories', count: blogPosts.filter(post => post.category === 'Success Stories').length },
    { name: 'Community Impact', count: blogPosts.filter(post => post.category === 'Community Impact').length }
  ];

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Head>
        <title>ClotheDonations Hub | Insights on Sustainable Giving & Community Impact</title>
        <meta name="description" content="Explore our collection of articles about clothing donation, environmental impact, community stories, and sustainable living practices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <header className="bg-gradient-to-br from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ClotheDonations Hub
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Insights on sustainable giving, community impact, and making a difference
              </p>
              <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Discover stories, tips, and research about clothing donation, environmental sustainability, 
                and the positive impact your contributions make in communities across America.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">

            {/* Featured Article */}
            {featuredPost && (
              <section className="mb-16">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-slate-700 to-blue-800 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          Featured
                        </span>
                        <span className="text-gray-500 text-sm ml-4">{featuredPost.readTime}</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-semibold text-sm">
                              {featuredPost.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{featuredPost.author}</p>
                            <p className="text-sm text-gray-600">{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}</p>
                          </div>
                        </div>
                        
                        <Link
                          href={`/hub/${featuredPost.slug}`}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Read Article
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <div className="grid lg:grid-cols-4 gap-8">
              
              {/* Articles Grid */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {regularPosts.map(post => (
                    <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-slate-700 to-blue-800 rounded-t-xl flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-xs ml-2">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                              <span className="text-white font-semibold text-xs">
                                {post.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{post.author}</p>
                              <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                            </div>
                          </div>
                          
                          <Link
                            href={`/hub/${post.slug}`}
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.name} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700">{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest tips on sustainable giving and community impact delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Subscribe
                    </button>
                  </div>
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