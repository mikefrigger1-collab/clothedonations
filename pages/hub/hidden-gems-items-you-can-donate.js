// Save as: pages/hub/hidden-gems-items-you-can-donate.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HiddenGemsPost() {
  const post = {
    title: 'Hidden Gems: Items You Didn\'t Know You Could Donate',
    author: 'Kelly P',
    date: '2024-12-05',
    readTime: '5 min read',
    category: 'Donation Tips',
    excerpt: 'Your closet holds a treasure trove of items beyond just shirts and pants. From shoes to linens, discover surprising items that donation centers happily accept.'
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
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
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
                When you think about donating clothes, what comes to mind? Likely, you're imagining shirts, pants, and maybe a few jackets. But guess what? Your closet holds a treasure trove of items that you might not realize are perfect for donation! In fact, many donation centers happily accept a wide range of things beyond the usual clothing. From shoes and accessories to linens and even oddball items like belts and bags, there's so much more you can donate to help others and reduce waste. These hidden gems could make a bigger difference than you think!
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Ready to go treasure hunting in your own closet? Let's dive into some surprising items you can donate and how they can make a meaningful impact on both your community and the environment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Shoes: Stepping Up for a Good Cause</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We all have that one pair of shoes (or maybe a few) sitting at the back of the closet, barely worn but just not your style anymore. Instead of letting them collect dust, why not donate them? Shoes are often in high demand at donation centers and shelters, especially in good condition. From sneakers to boots and sandals, almost every type of shoe can be donated.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Donating shoes is especially impactful because a quality pair can be expensive, and many people in need may not have the means to purchase them. Shelters and organizations that help people experiencing homelessness often request sturdy shoes that can be worn throughout the year. Plus, shoes donated to thrift stores often fly off the shelves, generating funds for important community programs. So, those almost-new sneakers you wore a couple of times to the gym? They could be someone's everyday go-to.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Accessories: More Than Just a Fashion Statement</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Think scarves, belts, hats, gloves, and even handbags. These accessories are another category of items that donation centers will happily take off your hands. It's easy to forget about the non-clothing items tucked away in our drawers or hanging on hooks, but these pieces are essential for many people.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Take scarves, for example – perfect for donating in colder months, especially to organizations that distribute winter wear to those in need. Belts and handbags are useful additions to job training programs, where individuals are outfitted for interviews or new careers. Accessories not only help complete an outfit but can also boost confidence, especially for someone preparing to step into a job interview or a new role. That old belt you never wear or the purse you've outgrown could give someone else the opportunity to walk into their future with style and confidence.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Linens and Bedding: A Warm, Cozy Gift</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Got extra towels, sheets, or blankets that are still in good shape? These are highly requested donations, especially by shelters and organizations that provide housing assistance. Bedding and linens are essentials for anyone setting up a home, but they're often overlooked as potential donation items. Whether it's a gently-used set of sheets, extra pillowcases, or that big, cozy comforter you haven't used in years, these donations can provide comfort and warmth to someone in need.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Animal shelters are another great place to donate old linens and towels. They're used to line animal beds and cages, giving pets in shelters a softer, cozier space to rest while they wait for their forever homes. So, even your old towels could serve a purpose beyond what you might have imagined!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kids' Items: Toys, Clothes, and Baby Gear</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                If your little ones have outgrown their clothes, toys, or baby gear, these items can be a godsend for families in need. Kids grow so fast, and many families may not have the resources to keep up with their children's ever-changing sizes and needs. Donation centers, especially those focused on supporting families, are always looking for gently-used kids' clothing, shoes, and accessories.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                But it doesn't stop at clothes. Baby items like blankets, cribs, strollers, and toys are also in high demand. By donating these items, you can help ease the financial burden on another family while giving your once-loved items a second life. Plus, toys and books can spark joy for kids who might not have access to these kinds of things otherwise. Imagine the happiness a child might feel receiving a toy that your little one once adored!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Jewelry: Small Items, Big Impact</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Jewelry might not be the first thing that comes to mind when you think of donating, but it's another hidden gem hiding in your drawer. Even costume jewelry can be a hot item at thrift stores, with all proceeds going to support various causes. Necklaces, bracelets, rings, and earrings can add a touch of sparkle to someone's day – whether it's a casual piece of everyday wear or something more elegant.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                For people participating in job training programs or those getting back on their feet, a little jewelry can help them feel more polished and confident. It's a simple way to accessorize an outfit for a special occasion, a job interview, or just everyday life.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Outerwear and Cold-Weather Gear: Coats, Gloves, and More</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Outerwear is a huge need, especially in colder climates or during winter months. Coats, gloves, hats, and other cold-weather gear can make a world of difference for people without reliable access to warm clothing. Winter can be brutal, especially for those who don't have a stable living situation, and your unused outerwear could help keep someone safe and warm.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Even if you have a few extra pairs of gloves or hats hanging around, donate them! They're lightweight, easy to donate, and can be life-saving for people in need of warmth. Every bit helps, and even the smallest pieces can make a big difference in someone's day-to-day life.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bags and Backpacks: Carrying More Than Just Your Stuff</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Got old backpacks, duffel bags, or tote bags sitting around? These items are often in high demand at shelters and donation centers. Backpacks are especially valuable for people who are homeless or on the move, as they provide an easy way to carry belongings. Bags can also be helpful for students who might need extra supplies or for individuals starting new jobs and needing something practical to carry with them.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Bags might seem like a small thing to donate, but for someone who needs them, they're invaluable. Whether it's a backpack for a student or a duffel bag for someone staying in a shelter, your donation can help provide a little more security and convenience to someone in need.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Final Thoughts: Unlock the Potential in Your Closet</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Donating is about more than just clearing space in your closet – it's about giving new life to items you no longer need and making a real difference in someone else's life. While we tend to think of donating clothes as just shirts and pants, your closet is full of hidden gems that can help others in ways you might not expect.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                From shoes to linens, accessories to bags, and kids' items to cold-weather gear, every donation counts. So, the next time you're decluttering, think beyond just the basics. Those small, forgotten items in your closet could be exactly what someone else is looking for, and by donating them, you're contributing to a healthier planet and a stronger community. Time to unlock the hidden gems in your wardrobe and give back!
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
                  <Link href="/hub/closet-cleanse-how-to-decide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Closet Cleanse: How to Decide What Clothes to Donate</h4>
                    <p className="text-gray-600 text-sm">Learn how to decide what clothes to donate with our fun and guilt-free guide...</p>
                  </Link>
                  <Link href="/hub/2024-donation-trends" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">2024 Donation Trends: What Items Are Most Needed</h4>
                    <p className="text-gray-600 text-sm">Discover what donation centers and charities are really looking for this year...</p>
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