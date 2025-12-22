import { Navigation, Footer, Section, Heading, Text, Card } from '@/components';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  results?: string[];
}

export default function GalleryPage() {
  const caseStudies: CaseStudy[] = [
    {
      id: 'unc-asheville',
      title: 'THIS IS TODAY\'S LIBERAL ARTS',
      client: 'UNC Asheville',
      category: 'Brand Campaign',
      description: 'A bold repositioning campaign that redefined liberal arts education for the modern era, showcasing UNC Asheville\'s innovative approach to interdisciplinary learning.',
      image: '/images/case-studies/unc-asheville-hero.jpg',
      results: [
        '23% increase in application inquiries',
        '18% growth in website engagement',
        '31% boost in social media reach',
      ],
    },
    {
      id: 'duquesne',
      title: 'BEYOND THE BOTTOM LINE',
      client: 'Duquesne University - Palumbo Donahue School of Business',
      category: 'Strategic Messaging',
      description: 'A comprehensive brand messaging platform emphasizing ethical business education and values-driven leadership in the modern marketplace.',
      image: '/images/case-studies/duquesne-hero.jpg',
      results: [
        '42% increase in graduate program applications',
        'Ranked in top 20 regional business schools',
        '89% employer satisfaction rating',
      ],
    },
    {
      id: 'iowa',
      title: 'THE HAWKEYE WAY',
      client: 'University of Iowa',
      category: 'Athletic Branding',
      description: 'Athletic program strategy and execution that unified brand messaging across all sports, creating a cohesive fan experience and driving engagement.',
      image: '/images/case-studies/iowa-hero.jpg',
      results: [
        '35% increase in season ticket sales',
        '52% growth in merchandise revenue',
        'Enhanced national brand recognition',
      ],
    },
    {
      id: 'colorado-mines',
      title: 'HONOR THE PAST, CELEBRATE THE FUTURE',
      client: 'Colorado School of Mines',
      category: 'Anniversary Campaign',
      description: '150th anniversary celebration campaign balancing rich heritage with forward-looking innovation in STEM education and research excellence.',
      image: '/images/case-studies/colorado-mines-hero.jpg',
      results: [
        '$45M raised in anniversary campaign',
        '28% increase in alumni engagement',
        'Record-breaking enrollment applications',
      ],
    },
    {
      id: 'clarion',
      title: 'A MARKETING FAIRY TALE',
      client: 'Clarion University',
      category: 'Enrollment Marketing',
      description: 'An integrated enrollment marketing strategy that transformed storytelling through authentic student voices and data-driven targeting.',
      image: '/images/case-studies/clarion-hero.jpg',
      results: [
        '19% increase in freshman enrollment',
        '34% improvement in yield rate',
        '27% boost in out-of-state applicants',
      ],
    },
    {
      id: 'grove-city',
      title: 'NOW, MORE THAN EVER',
      client: 'Grove City College',
      category: 'Crisis Communications',
      description: 'Strategic communications response highlighting institutional values and unwavering commitment to educational excellence during challenging times.',
      image: '/images/case-studies/grove-city-hero.jpg',
      results: [
        'Maintained 98% student retention',
        'Record fundraising during campaign period',
        'Strengthened alumni relationships',
      ],
    },
  ];

  const clients = [
    'University of Pittsburgh',
    'Penn State University',
    'Temple University',
    'Drexel University',
    'Carnegie Mellon University',
    'West Virginia University',
    'Ohio University',
    'Kent State University',
    'Rutgers University',
    'University of Delaware',
    'University of Scranton',
    'Saint Joseph\'s University',
    'La Salle University',
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center max-w-4xl mx-auto">
            <Heading level={1} className="mb-6">
              Our Work
            </Heading>
            <Text variant="lead" color="muted">
              Distinctive Brands and Targeted Marketing Solutions for Higher Education
            </Text>
          </div>
        </Section>

        {/* Case Studies Grid */}
        <Section background="white" padding="xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="group">
                <Card
                  title={study.title}
                  description={study.client}
                  image={study.image}
                  href={`#${study.id}`}
                  variant="case-study"
                />
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm font-semibold text-brandiq-purple mb-2">
                    {study.category}
                  </div>
                  <Text variant="small" color="muted">
                    {study.description}
                  </Text>
                  {study.results && (
                    <div className="mt-4 space-y-2">
                      <div className="text-xs font-bold text-brandiq-gray uppercase">Key Results:</div>
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-600">
                          <span className="text-brandiq-green mr-2">✓</span>
                          {result}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Client Logos Section */}
        <Section background="gray" padding="xl">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Trusted by 100+ Higher Education Institutions
            </Heading>
            <Text variant="body" color="muted">
              Public universities, private colleges, independent schools, and online institutions across the nation.
            </Text>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center"
              >
                <Text variant="small" color="default" className="font-semibold">
                  {client}
                </Text>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Text variant="body" color="muted">
              + 90 more higher education partners nationwide
            </Text>
          </div>
        </Section>

        {/* Call to Action */}
        <Section background="white" padding="lg">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Ready to Create Your Success Story?
            </Heading>
            <Text variant="body" color="muted" className="mb-8">
              Let's discuss how we can help your institution achieve its marketing goals.
            </Text>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brandiq-green hover:bg-green-600 rounded-md transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Our Work | Brand IQ Creative',
  description: 'Case studies and portfolio showcasing distinctive brands and targeted marketing solutions for 100+ higher education institutions nationwide.',
};
