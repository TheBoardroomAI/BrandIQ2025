import { Heading, Text } from './Typography';
import Button from './Button';

export default function ResearchCallout() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <Heading level={2} className="mb-4">
          BRAND IQ INSIDE MINDS
        </Heading>
        
        <Text variant="lead" className="mb-8 text-brandiq-gray">
          Who Knew?
        </Text>

        {/* Featured Research Insight */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto mb-8">
          <Heading level={3} color="green" className="mb-6">
            High schoolers don't want your postcards (sorry!)
          </Heading>
          
          <Text variant="body" color="muted" className="mb-6">
            Our groundbreaking National Enrollment Communications Study (NECS) revealed surprising insights 
            about how prospective students want to engage with higher education institutions in the digital age.
          </Text>

          <Button href="/news" variant="primary" size="md">
            Read the Full Study
          </Button>
        </div>

        {/* Additional Context */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-brandiq-green mb-2">73%</div>
            <Text variant="small" color="muted">
              prefer digital communications over traditional mail
            </Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brandiq-purple mb-2">2.5x</div>
            <Text variant="small" color="muted">
              higher engagement with personalized video content
            </Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brandiq-blue mb-2">89%</div>
            <Text variant="small" color="muted">
              want authentic student stories, not marketing speak
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
