import Card from './Card';
import { Heading } from './Typography';
import Button from './Button';

interface CaseStudy {
  title: string;
  institution: string;
  image: string;
  href: string;
}

export default function FeaturedCaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      title: 'THIS IS TODAY\'S LIBERAL ARTS',
      institution: 'UNC Asheville',
      image: '/images/postcards-hero-image.jpg',
      href: '/gallery#case-study-1',
    },
    {
      title: 'BEYOND THE BOTTOM LINE',
      institution: 'Duquesne University - Palumbo Donahue School of Business',
      image: '/images/brick-chisel-thumbnail.png',
      href: '/gallery#case-study-2',
    },
    {
      title: 'THE HAWKEYE WAY',
      institution: 'University of Iowa',
      image: '/images/baseball-hero-image.jpg',
      href: '/gallery#case-study-3',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level={2} className="mb-4">
            OUR WORK
          </Heading>
          <p className="text-xl text-brandiq-gray">
            Distinctive Brands and Targeted Marketing Solutions for Higher Education
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              title={study.title}
              description={study.institution}
              image={study.image}
              href={study.href}
              variant="case-study"
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button href="/gallery" variant="secondary" size="lg">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
