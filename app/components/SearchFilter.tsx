// components/SearchFilter.tsx
"use client";

import React, { useState } from 'react';

const SearchFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchTerm, selectedCategories);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, category]);
    } else {
      setSelectedCategories(prev => prev.filter(cat => cat !== category));
    }
  };

  const isUncategorizedSelected = selectedCategories.includes('uncategorized');

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* First Row - Keywords Input and Search Button */}
            <div className="flex items-end gap-6 mb-4">
              {/* Keywords Section */}
              <div className="flex-1 relative">
                <input 
                  placeholder="Enter Keyword" 
                  className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-gray-900 text-base placeholder-gray-400"
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  KEYWORDS
                </label>
              </div>

              {/* Search Button */}
              <div className="flex-shrink-0">
              <button
                style={{ backgroundColor: '#1F1F1F' }}
                className="px-16 py-4 text-white font-medium rounded-md cursor-pointer text-base"
              >
                Search
              </button>

              </div>
            </div>

            {/* Second Row - Category */}
            <div className="flex">
              <div 
                className={`inline-flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer ${
                  isUncategorizedSelected 
                    ? 'bg-black text-white border-black' 
                    : 'bg-gray-200 text-gray-600 border-gray-300'
                }`}
                onClick={() => handleCategoryChange('uncategorized', !isUncategorizedSelected)}
              >
                <input 
                  className="sr-only" 
                  type="checkbox" 
                  checked={isUncategorizedSelected}
                  onChange={(e) => handleCategoryChange('uncategorized', e.target.checked)}
                />
                <span className="text-sm font-medium">Uncategorized</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;