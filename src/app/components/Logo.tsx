import { Scale } from 'lucide-react';

/**
 * Logo component
 * Displays the SPS Law Firm logo with icon and text
 * 
 * @param {Object} props - Component props
 * @param {string} props.className - Optional CSS classes for the container
 */
interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-20" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="bg-[#c4a574] p-3 rounded">
        <Scale className="w-8 h-8 text-black" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-serif text-white font-bold tracking-wider">SPS</span>
        <span className="text-xs text-[#c4a574] tracking-widest uppercase">Law Firm</span>
      </div>
    </div>
  );
}
