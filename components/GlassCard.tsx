
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glow = false }) => {
  return (
    <div 
      className={`
        glass-card p-6 relative overflow-hidden
        ${glow ? 'shadow-[var(--glow-subtle)] hover:shadow-[var(--glow-hover)]' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {children}
    </div>
  );
};
