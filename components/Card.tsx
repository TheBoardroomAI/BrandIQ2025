import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'service' | 'case-study' | 'client';
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  href,
  icon,
  variant = 'service',
  className = '',
}: CardProps) {
  const content = (
    <div className={`group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}>
      {/* Image Section */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        {/* Icon (for service cards) */}
        {icon && (
          <div className="mb-4 text-brandiq-green">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className={`font-bold mb-2 group-hover:text-brandiq-green transition-colors ${
          variant === 'case-study' ? 'text-2xl' : 'text-xl'
        }`}>
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        {/* Learn More Arrow (for case studies) */}
        {variant === 'case-study' && href && (
          <div className="mt-4 flex items-center text-brandiq-purple group-hover:text-brandiq-green transition-colors">
            <span className="font-medium mr-2">Learn More</span>
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

// Client Logo Card (simplified grid item)
export function ClientCard({ image, name }: { image: string; name: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
      <Image
        src={image}
        alt={name}
        width={150}
        height={80}
        className="object-contain grayscale hover:grayscale-0 transition-all"
      />
    </div>
  );
}
