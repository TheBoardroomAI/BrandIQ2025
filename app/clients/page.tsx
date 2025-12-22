import { Navigation, Footer, Section, Heading, Text } from '@/components';

interface ClientCategory {
  category: string;
  clients: string[];
}

export default function ClientsPage() {
  const clientCategories: ClientCategory[] = [
    {
      category: 'Public Colleges & Universities',
      clients: [
        'University of Pittsburgh',
        'Penn State University',
        'Temple University',
        'West Virginia University',
        'University of Iowa',
        'Ohio University',
        'Kent State University',
        'Rutgers University',
        'University of Delaware',
        'University of North Carolina at Asheville',
        'Clarion University',
        'Indiana University of Pennsylvania',
        'Slippery Rock University',
        'California University of Pennsylvania',
        'Edinboro University',
        'Lock Haven University',
        'Mansfield University',
        'Millersville University',
        'Shippensburg University',
        'West Chester University',
        'Colorado School of Mines',
        'University of Maryland',
        'Towson University',
        'Frostburg State University',
        'Salisbury University',
        'Bowie State University',
        'Coppin State University',
        'University of Baltimore',
        'University of Arkansas',
        'Arkansas State University',
        'University of Central Arkansas',
        'University of Tennessee',
        'East Tennessee State University',
        'Middle Tennessee State University',
        'Tennessee Technological University',
        'Austin Peay State University',
        'Marshall University',
        'Concord University',
      ],
    },
    {
      category: 'Private Colleges & Universities',
      clients: [
        'Carnegie Mellon University',
        'Duquesne University',
        'University of Scranton',
        'Saint Joseph\'s University',
        'La Salle University',
        'Drexel University',
        'Grove City College',
        'Westminster College',
        'Washington & Jefferson College',
        'Allegheny College',
        'Chatham University',
        'Point Park University',
        'Carlow University',
        'Robert Morris University',
        'Seton Hill University',
        'Waynesburg University',
        'Geneva College',
        'Thiel College',
        'Susquehanna University',
        'Juniata College',
        'Lycoming College',
        'Misericordia University',
        'King\'s College',
        'Wilkes University',
        'Marywood University',
        'University of the Sciences',
        'Philadelphia University',
        'Cabrini University',
        'Chestnut Hill College',
        'Holy Family University',
        'Neumann University',
        'Rosemont College',
        'Immaculata University',
        'Moravian College',
        'Muhlenberg College',
        'Lafayette College',
        'Lehigh University',
        'Elizabethtown College',
        'Messiah College',
        'Lebanon Valley College',
      ],
    },
    {
      category: 'Independent Schools',
      clients: [
        'Shadyside Academy',
        'Winchester Thurston School',
        'Ellis School',
        'Sewickley Academy',
        'Shady Side Academy',
        'Pittsburgh Central Catholic High School',
        'Oakland Catholic High School',
        'Seton-LaSalle Catholic High School',
        'Eden Christian Academy',
      ],
    },
    {
      category: 'Online & Technical Institutions',
      clients: [
        'Penn Foster',
        'Kaplan University',
        'Art Institute of Pittsburgh',
        'Triangle Tech',
        'Pittsburgh Technical College',
        'Bidwell Training Center',
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
              Our Clients
            </Heading>
            <Text variant="lead" color="muted">
              Trusted by 100+ higher education institutions nationwide—from public research universities 
              to private liberal arts colleges, independent schools, and online learning platforms.
            </Text>
          </div>
        </Section>

        {/* Client Categories */}
        <Section background="white" padding="xl">
          <div className="max-w-6xl mx-auto space-y-16">
            {clientCategories.map((category, index) => (
              <div key={index}>
                {/* Category Header */}
                <div className="mb-8">
                  <Heading level={2} color="green" className="mb-2">
                    {category.category}
                  </Heading>
                  <div className="h-1 w-20 bg-brandiq-green" />
                  <Text variant="body" color="muted" className="mt-4">
                    {category.clients.length} institutions
                  </Text>
                </div>

                {/* Client Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.clients.map((client, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start">
                        <span className="text-brandiq-green mr-3 mt-1">✓</span>
                        <Text variant="body" color="default" className="font-medium">
                          {client}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Stats Summary */}
        <Section background="gray" padding="xl">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-12">
              Partnership by the Numbers
            </Heading>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-brandiq-green mb-2">100+</div>
                <Text variant="small" color="muted">Total Clients</Text>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brandiq-purple mb-2">38</div>
                <Text variant="small" color="muted">Public Universities</Text>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brandiq-blue mb-2">40</div>
                <Text variant="small" color="muted">Private Colleges</Text>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brandiq-orange mb-2">20+</div>
                <Text variant="small" color="muted">Years Experience</Text>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section background="white" padding="lg">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Join Our Partner Network
            </Heading>
            <Text variant="body" color="muted" className="mb-8">
              Ready to see your institution on this list? Let's discuss how we can help you achieve your goals.
            </Text>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brandiq-green hover:bg-green-600 rounded-md transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Our Clients | Brand IQ Creative',
  description: 'Trusted by 100+ higher education institutions including public universities, private colleges, independent schools, and online learning platforms nationwide.',
};
