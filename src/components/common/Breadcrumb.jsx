import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs md:text-sm text-text-muted">
        <Link 
          to="/" 
          className="flex items-center gap-1 hover:text-secondary transition-colors"
          title="Back to Global Offset Home"
        >
          <Home className="w-3.5 h-3.5 text-primary" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-primary truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.url} 
                  className="hover:text-secondary transition-colors truncate max-w-[150px]"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
