import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  containerWidth = 'xl',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white to-gray-100',
  };

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      <Container maxWidth={containerWidth}>
        {children}
      </Container>
    </section>
  );
}
