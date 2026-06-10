import logo from '@/assets/logo.png';

type LogoProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'watermark';
};

const sizeClasses = {
  sm: 'h-12 md:h-14',
  md: 'h-16 md:h-[4.5rem]',
  lg: 'h-[4.5rem] md:h-20',
  watermark: 'h-auto w-[min(92vw,720px)]',
};

export default function Logo({ className = '', size = 'sm' }: LogoProps) {
  return (
    <a href="#" className={`inline-flex shrink-0 items-center ${className}`} aria-label="Flavio AI home">
      <img
        src={logo}
        alt="Flavio AI"
        className={`${sizeClasses[size]} w-auto min-w-[140px] max-w-[320px] object-contain object-left md:max-w-[380px]`}
      />
    </a>
  );
}
