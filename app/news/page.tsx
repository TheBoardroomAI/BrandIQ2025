import { Navigation, Footer, Section, Heading, Text } from '@/components';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export default function NewsPage() {
  const articles: Article[] = [
    {
      id: 'necs-study',
      title: 'High Schoolers Don\'t Want Your Postcards (Sorry!)',
      category: 'Research',
      date: 'November 15, 2024',
      excerpt: 'Our groundbreaking National Enrollment Communications Study (NECS) reveals surprising insights about how Gen Z prospects want to engage with higher education institutions. Spoiler: traditional mail isn\'t cutting it anymore.',
      image: '/images/postcards-hero-image.jpg',
      featured: true,
    },
    {
      id: 'personicom-partnership',
      title: 'PersoniCom & Brand IQ Creative Unveil PIVOT 2.0',
      category: 'Product Launch',
      date: 'October 8, 2024',
      excerpt: 'We\'re excited to announce the next evolution of personalized video technology for higher education. PIVOT 2.0 combines cutting-edge AI with authentic storytelling to deliver one-to-one video experiences at scale.',
      image: '/images/brick-chisel-thumbnail.png',
      featured: true,
    },
    {
      id: 'responsive-design',
      title: 'Do You Respond? The Importance of Adaptive Web Design',
      category: 'Web Design',
      date: 'September 22, 2024',
      excerpt: 'With 67% of prospective students researching colleges on mobile devices, responsive design isn\'t optional—it\'s essential. Learn how adaptive design principles can transform your enrollment marketing.',
      image: '/images/baseball-hero-image.jpg',
      featured: false,
    },
    {
      id: 'video-storytelling',
      title: 'What\'s Your Story? The Power of Video in Higher Ed',
      category: 'Video Marketing',
      date: 'August 14, 2024',
      excerpt: 'Video content generates 2.5x more engagement than static content in higher education marketing. Discover how authentic student storytelling drives enrollment decisions and brand affinity.',
      image: '/images/postcards-hero-image.jpg',
      featured: false,
    },
    {
      id: 'scranton-awards',
      title: 'University of Scranton Campaign Wins Regional Emmy',
      category: 'Awards',
      date: 'July 30, 2024',
      excerpt: 'Our "Scranton Values" video campaign for the University of Scranton earned a Regional Emmy Award for excellence in institutional marketing. See what made this campaign resonate with audiences.',
      image: '/images/brick-chisel-thumbnail.png',
      featured: false,
    },
    {
      id: 'brand-audit',
      title: 'Is Your Brand Audit Actually Useful? A Practical Guide',
      category: 'Strategy',
      date: 'June 19, 2024',
      excerpt: 'Brand audits often result in 200-page documents that gather dust. Here\'s how to conduct an audit that actually drives actionable insights and measurable improvements for your institution.',
      image: '/images/baseball-hero-image.jpg',
      featured: false,
    },
  ];

  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center max-w-4xl mx-auto">
            <Heading level={1} className="mb-6">
              News & Insights
            </Heading>
            <Text variant="lead" color="muted">
              Research findings, industry trends, and thought leadership from the Brand IQ Creative team.
            </Text>
          </div>
        </Section>

        {/* Featured Articles */}
        <Section background="white" padding="xl">
          <div className="mb-12">
            <Heading level={2} className="text-center mb-8">
              Featured Articles
            </Heading>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article) => (
                <a
                  key={article.id}
                  href={`#${article.id}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-brandiq-purple">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <Heading level={3} className="mb-3 group-hover:text-brandiq-green transition-colors">
                      {article.title}
                    </Heading>
                    <Text variant="body" color="muted">
                      {article.excerpt}
                    </Text>
                    <div className="mt-4 flex items-center text-brandiq-purple group-hover:text-brandiq-green transition-colors">
                      <span className="font-medium mr-2">Read More</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Regular Articles Grid */}
        <Section background="gray" padding="xl">
          <div className="mb-12">
            <Heading level={2} className="text-center mb-8">
              Latest Insights
            </Heading>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {regularArticles.map((article) => (
                <a
                  key={article.id}
                  href={`#${article.id}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-brandiq-blue">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <Heading level={4} className="mb-2 group-hover:text-brandiq-green transition-colors">
                      {article.title}
                    </Heading>
                    <Text variant="small" color="muted">
                      {article.excerpt}
                    </Text>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Newsletter Signup */}
        <Section background="white" padding="lg">
          <div className="max-w-2xl mx-auto text-center">
            <Heading level={2} className="mb-4">
              Stay Informed
            </Heading>
            <Text variant="body" color="muted" className="mb-8">
              Subscribe to our newsletter for the latest research, insights, and trends in higher education marketing.
            </Text>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandiq-green flex-1 max-w-md"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-brandiq-green text-white font-medium rounded-md hover:bg-green-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'News & Insights | Brand IQ Creative',
  description: 'Research findings, industry trends, and thought leadership in higher education marketing from the Brand IQ Creative team.',
};
