import { Navigation, Footer, Section, Heading, Text } from '@/components';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function PersonalizedVideoPage() {
  const features: Feature[] = [
    {
      icon: '🎙️',
      title: 'Advanced Personalized Voice',
      description: 'Natural-sounding AI voice synthesis that pronounces names correctly and adapts tone for each recipient.',
    },
    {
      icon: '🎬',
      title: 'One-to-One Video at Scale',
      description: 'Create thousands of personalized videos automatically—each one uniquely tailored to the individual viewer.',
    },
    {
      icon: '⚡',
      title: 'On-Demand Creation',
      description: 'Generate personalized videos in real-time as prospects engage with your website or respond to campaigns.',
    },
    {
      icon: '📦',
      title: 'Batch Upload & Render',
      description: 'Upload your entire prospect database and render personalized videos for all contacts simultaneously.',
    },
    {
      icon: '🎨',
      title: 'Custom Branded Player',
      description: 'Fully customizable video player and landing pages that match your institution\'s brand identity.',
    },
    {
      icon: '🖼️',
      title: 'Personalized Thumbnails',
      description: 'Dynamic poster images and animated GIF previews personalized for each recipient to boost open rates.',
    },
    {
      icon: '🔗',
      title: 'Embed Anywhere',
      description: 'Secure embed codes allow you to play personalized videos directly on your own website.',
    },
    {
      icon: '🎭',
      title: 'Variable Video Scenes',
      description: 'Dynamically adjust video content, scenes, and messaging based on viewer attributes and behaviors.',
    },
    {
      icon: '📧',
      title: 'Email Campaign Automation',
      description: 'Integrated email delivery with personalized video links, tracking, and automated follow-up sequences.',
    },
    {
      icon: '💻',
      title: 'Fully Programmable API',
      description: 'Developer-friendly API for custom integrations with your CRM, marketing automation, or SIS platforms.',
    },
    {
      icon: '✨',
      title: 'Animated Interactivity',
      description: 'Add clickable CTAs, forms, and interactive elements within personalized videos for deeper engagement.',
    },
    {
      icon: '📱',
      title: 'Social Media Sharing',
      description: 'Enable recipients to share their personalized videos on social platforms, amplifying your reach.',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Track video views, engagement duration, click-through rates, and conversion metrics in real-time.',
    },
    {
      icon: '🔐',
      title: 'Secure Customer Portals',
      description: 'Private portals for clients to manage campaigns, view analytics, and access personalized video assets.',
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: '99.9% uptime guarantee, GDPR compliant, with encrypted data storage and SOC 2 Type II certification.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-brandiq-purple font-bold text-sm uppercase tracking-wide mb-4">
              PersoniCom + Brand IQ Creative
            </div>
            <Heading level={1} className="mb-6">
              PIVOT 2.0 Platform
            </Heading>
            <Text variant="lead" color="muted" className="mb-8">
              The next evolution in personalized video technology for higher education. 
              Deliver one-to-one video experiences at scale—authentically engaging every prospect 
              with content tailored specifically to them.
            </Text>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brandiq-purple hover:bg-purple-700 rounded-md transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </Section>

        {/* Value Proposition */}
        <Section background="white" padding="xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Heading level={2} className="mb-6">
              Why Personalized Video?
            </Heading>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-4xl font-bold text-brandiq-green mb-2">2.5x</div>
                <Text variant="body" color="muted">Higher engagement than static content</Text>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-4xl font-bold text-brandiq-purple mb-2">67%</div>
                <Text variant="body" color="muted">Increase in application completions</Text>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-4xl font-bold text-brandiq-blue mb-2">89%</div>
                <Text variant="body" color="muted">Of students prefer personalized content</Text>
              </div>
            </div>
          </div>
        </Section>

        {/* Features Grid */}
        <Section background="gray" padding="xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Platform Features
              </Heading>
              <Text variant="body" color="muted">
                Built on a robust cloud infrastructure with enterprise-grade security and reliability.
              </Text>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-3 text-brandiq-gray">{feature.title}</h3>
                  <Text variant="body" color="muted">
                    {feature.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Use Cases */}
        <Section background="white" padding="xl">
          <div className="max-w-6xl mx-auto">
            <Heading level={2} className="text-center mb-12">
              Use Cases for Higher Education
            </Heading>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-bold text-xl mb-4 text-brandiq-purple">Enrollment Marketing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brandiq-green mr-3 mt-1">✓</span>
                    <Text variant="body" color="default">
                      Personalized campus tour invitations with student names and academic interests
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brandiq-green mr-3 mt-1">✓</span>
                    <Text variant="body" color="default">
                      Acceptance letters delivered via video from the admissions director
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brandiq-green mr-3 mt-1">✓</span>
                    <Text variant="body" color="default">
                      Financial aid package explainers customized to each family's situation
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brandiq-green mr-3 mt-1">✓</span>
                    <Text variant="body" color="default">
                      Yield campaign videos highlighting programs relevant to each admitted student
                    </Text>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-brandiq-blue">Alumni & Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brandiq-green mr-3 mt-1">✓</span>
                    <Text variant="body" color="default">
                      Personalized giving campaign videos from university leadership
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brandiq-green mr-3 mt-1">✓</span>
                    <Text variant="body" color="default">
                      Reunion invitations featuring classmates and milestone anniversaries
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brandiq-green mr-3 mt-1">✓</span>
                    <Text variant="body" color="default">
                      Donor impact reports showing exactly how contributions made a difference
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brandiq-green mr-3 mt-1">✓</span>
                    <Text variant="body" color="default">
                      Volunteer recruitment videos tailored to alumni skills and geographic location
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section background="gray" padding="lg">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="mb-4">
              Ready to Transform Your Engagement?
            </Heading>
            <Text variant="body" color="muted" className="mb-8">
              See PIVOT 2.0 in action. Schedule a personalized demo and discover how 
              one-to-one video can revolutionize your enrollment and advancement efforts.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brandiq-purple hover:bg-purple-700 rounded-md transition-colors"
              >
                Schedule a Demo
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-brandiq-purple bg-white border-2 border-brandiq-purple hover:bg-purple-50 rounded-md transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Personalized Video Platform | Brand IQ Creative + PersoniCom',
  description: 'PIVOT 2.0: Next-generation personalized video technology for higher education. Create one-to-one video experiences at scale with advanced AI voice and automation.',
};
