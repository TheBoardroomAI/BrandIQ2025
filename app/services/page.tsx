import { Navigation, Footer, Section, Heading, Text } from '@/components';

interface Service {
  category: string;
  items: string[];
  color: string;
  icon: string;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      category: 'Research',
      color: 'brandiq-green',
      icon: '🔍',
      items: [
        'Brand Awareness & Perception Surveys',
        'Focus Groups',
        'Depth Interviews',
        'Geoanalytics Studies',
        'Competitor Analysis & Environmental Scan',
        'Concept Testing Surveys',
        'Town Hall Sessions',
      ],
    },
    {
      category: 'Strategy',
      color: 'brandiq-purple',
      icon: '💡',
      items: [
        'Brand Messaging Platforms',
        'Brand Launch Campaigns',
        'Brand Marketing Plans',
        'Enrollment Management Strategy',
        'Communications Audits',
        'Development & Alumni Relations Communications Plans',
        'Athletic Program Strategy & Execution',
      ],
    },
    {
      category: 'Media',
      color: 'brandiq-blue',
      icon: '🎨',
      items: [
        'HD Video Production',
        'Motion Graphic Design',
        'Responsive Design',
        'Enterprise Websites',
        'Microsites',
        'Mobile Apps',
        'Brand Manuals',
        'Print Publications',
        'Visual Identity Programs',
        'Media Buying Plans & Advertising Services',
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center max-w-4xl mx-auto">
            <Heading level={1} className="mb-6">
              Our Services
            </Heading>
            <Text variant="lead" color="muted">
              Integrating the power of market research with the emotion of authentic storytelling 
              to drive distinctive brands and targeted marketing solutions for higher education.
            </Text>
          </div>
        </Section>

        {/* Services Grid */}
        <Section background="white" padding="xl">
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                {/* Category Header */}
                <div className={`bg-${service.color} text-white py-8 px-6 mb-6`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <Heading level={3} className="text-white">
                    {service.category}
                  </Heading>
                </div>

                {/* Service Items */}
                <ul className="space-y-4 text-left">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`text-${service.color} mr-3 mt-1`}>•</span>
                      <Text variant="body" color="default">
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Full-Service Promise */}
        <Section background="gray" padding="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} color="green" className="mb-6">
              A Full-Service Partner
            </Heading>
            <Text variant="lead" color="muted" className="mb-8">
              From initial research to final execution, Brand IQ Creative delivers integrated 
              solutions that span the entire marketing spectrum. Our multidisciplinary team brings 
              expertise in research, strategy, and creative production—ensuring every touchpoint 
              reinforces your brand's unique story.
            </Text>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-brandiq-green mb-2">20+</div>
                <Text variant="small" color="muted">Years of Experience</Text>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-brandiq-purple mb-2">100+</div>
                <Text variant="small" color="muted">Higher Ed Clients</Text>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-brandiq-blue mb-2">500+</div>
                <Text variant="small" color="muted">Projects Delivered</Text>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section background="white" padding="lg">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Ready to Get Started?
            </Heading>
            <Text variant="body" color="muted" className="mb-8">
              Let's discuss how Brand IQ Creative can help your institution stand out.
            </Text>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brandiq-green hover:bg-green-600 rounded-md transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Our Services | Brand IQ Creative',
  description: 'Research, Strategy, and Media services for higher education marketing. From brand awareness surveys to HD video production, we deliver integrated solutions.',
};
