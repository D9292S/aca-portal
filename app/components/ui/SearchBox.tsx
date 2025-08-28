'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaTimes, FaMicrophone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  type: 'page' | 'faculty' | 'course' | 'news' | 'department';
  url: string;
  description?: string;
}

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onResultSelect?: (result: SearchResult) => void;
  suggestions?: SearchResult[];
  className?: string;
  showVoiceSearch?: boolean;
  autoComplete?: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Search KNIT website...',
  onSearch,
  onResultSelect,
  suggestions = [],
  className = '',
  showVoiceSearch = false,
  autoComplete = true,
}) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isListening, setIsListening] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query && autoComplete) {
      const filtered = suggestions.filter(
        (suggestion) =>
          suggestion.title.toLowerCase().includes(query.toLowerCase()) ||
          suggestion.description?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 8)); // Limit to 8 results
    } else {
      setFilteredSuggestions([]);
    }
  }, [query, suggestions, autoComplete]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    
    if (value.trim()) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isExpanded || filteredSuggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleResultSelect(filteredSuggestions[selectedIndex]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsExpanded(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query);
      setIsExpanded(false);
    }
  };

  const handleResultSelect = (result: SearchResult) => {
    setQuery(result.title);
    setIsExpanded(false);
    onResultSelect?.(result);
  };

  const clearQuery = () => {
    setQuery('');
    setIsExpanded(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const startVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognition.start();
    }
  };

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'faculty': return '👨‍🏫';
      case 'course': return '📚';
      case 'news': return '📰';
      case 'department': return '🏢';
      default: return '📄';
    }
  };

  const getTypeBadge = (type: SearchResult['type']) => {
    const badges = {
      page: 'bg-blue-100 text-blue-800',
      faculty: 'bg-green-100 text-green-800',
      course: 'bg-purple-100 text-purple-800',
      news: 'bg-orange-100 text-orange-800',
      department: 'bg-indigo-100 text-indigo-800',
    };
    return badges[type];
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaSearch size={16} />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsExpanded(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all duration-200"
        />
        
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
          {query && (
            <button
              onClick={clearQuery}
              className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              aria-label="Clear search"
            >
              <FaTimes size={12} />
            </button>
          )}
          
          {showVoiceSearch && (
            <button
              onClick={startVoiceSearch}
              className={`p-1.5 transition-colors rounded-full ${
                isListening 
                  ? 'text-red-500 bg-red-50 animate-pulse' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Voice search"
            >
              <FaMicrophone size={12} />
            </button>
          )}
          
          <button
            onClick={handleSearch}
            className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Search
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && filteredSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
          >
            <div className="max-h-96 overflow-y-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleResultSelect(suggestion)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                    index === selectedIndex ? 'bg-red-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-lg flex-shrink-0 mt-0.5">
                      {getTypeIcon(suggestion.type)}
                    </span>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900 truncate">
                          {suggestion.title}
                        </h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getTypeBadge(suggestion.type)}`}>
                          {suggestion.type}
                        </span>
                      </div>
                      {suggestion.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {suggestion.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBox;
