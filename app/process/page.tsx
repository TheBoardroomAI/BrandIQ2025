import { Navigation, Footer, Section, Heading, Text } from '@/components';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  color: string;
}

export default function ProcessPage() {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discover',
      subtitle: 'Research & Insights',
      description: 'We identify your authentic, desired, and differentiated attributes through comprehensive qualitative and quantitative research activities.',
      activities: [
        'Stakeholder interviews and focus groups',
        'Competitive landscape analysis',
        'Brand perception surveys',
        'Market opportunity assessment',
        'Audience segmentation research',
      ],
      color: 'brandiq-green',
    },
    {
      number: '02',
      title: 'Innovate',
      subtitle: 'Strategy & Planning',
      description: 'Data-driven recommendations are transformed into strategic frameworks that deliver measurable impact and differentiation.',
      activities: [
        'Brand messaging platform development',
        'Positioning strategy creation',
        'Campaign concept development',
        'Content strategy & planning',
        'Success metrics definition',
      ],
      color: 'brandiq-purple',
    },
    {
      number: '03',
      title: 'Deliver',
      subtitle: 'Execution & Launch',
      description: 'Collaborative development, rigorous testing, and strategic launch of creative concepts that bring your brand to life.',
      activities: [
        'Creative asset production',
        'Website and digital platform development',
        'Video and multimedia creation',
        'Print and collateral design',
        'Multi-channel campaign launch',
      ],
      color: 'brandiq-blue',
    },
    {
      number: '04',
      title: 'Support',
      subtitle: 'Partnership & Growth',
      description: 'We act as your long-term partner—whether supporting ongoing execution or providing tools for your team to succeed independently.',
      activities: [
        'Campaign performance tracking',
        'Ongoing optimization and refinement',
        'Brand stewardship and governance',
        'Team training and enablement',
        'Continuous improvement consulting',
      ],
      color: 'brandiq-orange',
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
              Our Process
            </Heading>
            <Text variant="lead" color="muted">
              A proven methodology that transforms research insights into compelling brand experiences. 
              We don't accept the status quo—we challenge it to uncover what makes you truly distinctive.
            </Text>
          </div>
        </Section>

        {/* Process Steps */}
        <Section background="white" padding="xl">
          <div className="max-w-6xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step Number & Title */}
                <div className="md:w-1/3">
                  <div className={`text-${step.color} text-6xl font-bold mb-4 opacity-20`}>
                    {step.number}
                  </div>
                  <Heading level={2} color="default" className="mb-2">
                    {step.title}
                  </Heading>
                  <div className={`text-xl font-semibold text-${step.color} mb-4`}>
                    {step.subtitle}
                  </div>
                  <Text variant="body" color="muted">
                    {step.description}
                  </Text>
                </div>

                {/* Activities */}
                <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-brandiq-gray">Key Activities:</h4>
                  <ul className="space-y-3">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`text-${step.color} mr-3 mt-1 text-xl`}>✓</span>
                        <Text variant="body" color="default">
                          {activity}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Why Our Process Works */}
        <Section background="gray" padding="xl">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} color="green" className="text-center mb-12">
              Why Our Process Works
            </Heading>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-3 text-brandiq-gray">Research-Driven</h3>
                <Text variant="body" color="muted">
                  Every decision is backed by data. We don't rely on assumptions—we uncover 
                  genuine insights that reveal what truly resonates with your audiences.
                </Text>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="font-bold text-xl mb-3 text-brandiq-gray">Collaborative</h3>
                <Text variant="body" color="muted">
                  Your team's expertise is invaluable. We work alongside you—not just for you—
                  ensuring the final product reflects your institution's authentic voice.
                </Text>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-bold text-xl mb-3 text-brandiq-gray">Results-Focused</h3>
                <Text variant="body" color="muted">
                  Beautiful creative is just the beginning. We measure success through 
                  enrollment growth, engagement metrics, and bottom-line ROI.
                </Text>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="font-bold text-xl mb-3 text-brandiq-gray">Iterative</h3>
                <Text variant="body" color="muted">
                  Markets evolve, and so should your brand. Our ongoing support ensures 
                  your marketing stays relevant and effective over time.
                </Text>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section background="white" padding="lg">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Let's Start the Conversation
            </Heading>
            <Text variant="body" color="muted" className="mb-8">
              Ready to discover what makes your institution truly distinctive?
            </Text>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brandiq-green hover:bg-green-600 rounded-md transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Our Process | Brand IQ Creative',
  description: 'Discover, Innovate, Deliver, Support. Our proven 4-stage methodology transforms research insights into compelling brand experiences for higher education.',
};
