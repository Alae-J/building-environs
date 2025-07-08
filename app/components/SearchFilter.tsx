"use client";
import React from 'react';

interface SearchFilterProps {
  searchTerm: string;
  selectedCategories: string[];
  onSearchTermChange: (term: string) => void;
  onCategoryToggle: (category: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  selectedCategories,
  onSearchTermChange,
  onCategoryToggle,
}) => {
  const isUncategorizedSelected = selectedCategories.includes('uncategorized');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <form onSubmit={handleSubmit}>
          {/* Keywords Input */}
          <div className="flex items-end gap-6 mb-4">
            <div className="flex-1 relative">
              <input
                placeholder="Enter Keyword"
                className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-gray-900 text-base placeholder-gray-400"
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
              />
              <label className="absolute -top-2 left-3 px-1 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                KEYWORDS
              </label>
            </div>

            <div className="flex-shrink-0">
              <button
                style={{ backgroundColor: '#1F1F1F' }}
                className="px-16 py-4 text-white font-medium rounded-md cursor-pointer text-base"
              >
                Search
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer ${
                isUncategorizedSelected
                  ? 'bg-black text-white border-black'
                  : 'bg-gray-200 text-gray-600 border-gray-300'
              }`}
              onClick={() => onCategoryToggle('uncategorized')}
            >
              <input
                className="sr-only"
                type="checkbox"
                checked={isUncategorizedSelected}
                readOnly
              />
              <span className="text-sm font-medium">Uncategorized</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchFilter;
