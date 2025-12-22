import { Heading, Text } from './Typography';

interface ValueProp {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
}

export default function ValuePropositions() {
  const values: ValueProp[] = [
    {
      title: 'WE GIVE YOU',
      subtitle: 'CONFIDENCE.',
      description: 'Watertight solutions that can survive the scrutiny of many audiences.',
      bgColor: 'bg-brandiq-orange',
    },
    {
      title: 'WE GIVE YOU',
      subtitle: 'INNOVATION.',
      description: 'Brands and marketing tools that inspire and excite your internal stakeholders as much as your external ones.',
      bgColor: 'bg-brandiq-purple',
    },
    {
      title: 'YOU GET',
      subtitle: 'ROI.',
      description: 'Compelling creative strategies informed by research to provide measurable impact.',
      bgColor: 'bg-brandiq-blue',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col">
              {/* Colored Header Box */}
              <div className={`${value.bgColor} text-white text-center py-8 px-6 mb-6`}>
                <div className="text-xl md:text-2xl font-bold leading-tight">
                  {value.title}
                  <br />
                  {value.subtitle}
                </div>
              </div>

              {/* Description */}
              <div className="text-center px-4">
                <Text variant="body" color="default">
                  {value.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
