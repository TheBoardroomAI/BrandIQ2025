import { Text } from './Typography';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  color = 'brandiq-green' 
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className={`text-4xl mb-4 text-${color}`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3 text-brandiq-gray">
        {title}
      </h3>
      <Text variant="body" color="muted">
        {description}
      </Text>
    </div>
  );
}
