import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: (e?: React.MouseEvent) => void;
  label?: string;
  className?: string;
  variant?: 'default' | 'glass' | 'ghost' | 'outline';
}

const BackButton: React.FC<BackButtonProps> = ({ 
  onClick, 
  label = "Back", 
  className = "",
  variant = 'default'
}) => {
  
  const baseStyles = "group flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all active:scale-95 w-fit";
  
  const variants = {
    default: "bg-white text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg shadow-blue-600/5 hover:shadow-blue-600/20 border border-blue-100/50",
    glass: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20",
    ghost: "bg-transparent text-slate-500 hover:text-blue-600 pl-0 hover:bg-slate-100/50",
    outline: "bg-transparent border border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;
