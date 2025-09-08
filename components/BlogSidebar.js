// Save as: components/BlogSidebar.js
import Link from 'next/link';

const BlogSidebar = ({ 
  currentPost = null, 
  showTableOfContents = false,
  tableOfContents = [],
  relatedArticles = []
}) => {
  return (
    <aside className="lg:col-span-1 space-y-6">
      
      {/* Table of Contents - only show if requested */}
      {showTableOfContents && tableOfContents.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-6">
          <h3 className="font-bold text-gray-900 mb-4">In This Article</h3>
          <nav className="space-y-2 text-sm">
            {tableOfContents.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="block text-blue-600 hover:text-blue-800"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Share Article - only show on individual post pages */}
      {currentPost && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Share This Article</h3>
          <div className="space-y-3">
            <button 
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Share on Facebook
            </button>
            <button 
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(currentPost.title)}`, '_blank')}
              className="w-full bg-sky-500 text-white py-2 px-4 rounded text-sm hover:bg-sky-600 transition-colors"
            >
              Share on Twitter
            </button>
            <button 
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="w-full bg-blue-700 text-white py-2 px-4 rounded text-sm hover:bg-blue-800 transition-colors"
            >
              Share on LinkedIn
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded text-sm hover:bg-gray-200 transition-colors"
            >
              Copy Link
            </button>
          </div>
        </div>
      )}

      {/* Related Articles */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
        <div className="space-y-4 text-sm">
          {relatedArticles.length > 0 ? (
            relatedArticles.map((article, index) => (
              <div key={index} className={`${index !== relatedArticles.length - 1 ? 'border-b border-gray-100 pb-3' : ''}`}>
                <Link href={article.href} className="block hover:text-blue-600">
                  <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                  <p className="text-gray-600 text-xs">{article.date || 'Coming soon'}</p>
                </Link>
              </div>
            ))
          ) : (
            // Default related articles when none provided
            <>
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-medium text-gray-900 mb-1">The Complete Guide to Clothing Donation</h4>
                <p className="text-gray-600 text-xs">Coming soon</p>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-medium text-gray-900 mb-1">5 Signs It's Time to Declutter Your Closet</h4>
                <p className="text-gray-600 text-xs">Coming soon</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">How Your Donations Impact Local Communities</h4>
                <p className="text-gray-600 text-xs">Coming soon</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Newsletter Signup - only show on hub main page */}
      {!currentPost && (
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 text-white">
          <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
          <p className="text-blue-100 mb-4 text-sm">
            Get the latest insights on sustainable giving and community impact delivered to your inbox.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="w-full bg-white text-blue-600 py-2 rounded font-medium text-sm hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white">
        <h3 className="font-bold mb-3">Ready to Make a Difference?</h3>
        <p className="text-green-100 mb-4 text-sm">
          Find donation centers near you and start reducing textile waste today.
        </p>
        <Link
          href="/"
          className="block w-full bg-white text-green-600 py-2 px-4 rounded text-center font-medium text-sm hover:bg-green-50 transition-colors"
        >
          Find Donation Centers
        </Link>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
        <div className="space-y-3">
          <Link href="/" className="block text-blue-600 hover:text-blue-800 text-sm">
            Find Donation Centers
          </Link>
          <Link href="/guidelines" className="block text-blue-600 hover:text-blue-800 text-sm">
            Donation Guidelines
          </Link>
          <Link href="/about" className="block text-blue-600 hover:text-blue-800 text-sm">
            About Us
          </Link>
          <Link href="/contact" className="block text-blue-600 hover:text-blue-800 text-sm">
            Contact
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;