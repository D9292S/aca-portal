'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import Button from '../ui/Button';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'news' | 'event' | 'announcement' | 'achievement';
  date: string;
  image?: string;
  author?: string;
  tags: string[];
  url?: string;
  featured?: boolean;
}

interface EventItem {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  category: 'academic' | 'cultural' | 'technical' | 'sports' | 'workshop';
  image?: string;
  registrationUrl?: string;
  featured?: boolean;
}

interface NewsEventsProps {
  newsItems: NewsItem[];
  events: EventItem[];
  showFilter?: boolean;
  maxItems?: number;
}

const NewsEventsSection: React.FC<NewsEventsProps> = ({
  newsItems,
  events,
  showFilter = true,
  maxItems = 6
}) => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const newsCategories = ['all', 'news', 'announcement', 'achievement'];
  const eventCategories = ['all', 'academic', 'cultural', 'technical', 'sports', 'workshop'];

  const getCategoryColor = (category: string) => {
    const colors = {
      news: 'bg-blue-100 text-blue-800',
      event: 'bg-green-100 text-green-800',
      announcement: 'bg-red-100 text-red-800',
      achievement: 'bg-purple-100 text-purple-800',
      academic: 'bg-indigo-100 text-indigo-800',
      cultural: 'bg-pink-100 text-pink-800',
      technical: 'bg-gray-100 text-gray-800',
      sports: 'bg-orange-100 text-orange-800',
      workshop: 'bg-teal-100 text-teal-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredNews = newsItems
    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
    .slice(0, maxItems);

  const filteredEvents = events
    .filter(event => selectedCategory === 'all' || event.category === selectedCategory)
    .slice(0, maxItems);

  const NewsCard: React.FC<{ item: NewsItem; index: number }> = ({ item, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
        item.featured ? 'ring-2 ring-red-200' : ''
      }`}
    >
      {item.image && (
        <div className="relative h-48 bg-gray-200">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
          {item.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <FaCalendar className="mr-1" size={12} />
            {formatDate(item.date)}
          </div>
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.summary}
        </p>
        
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          {item.author && (
            <span className="text-gray-500 text-sm">By {item.author}</span>
          )}
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 font-semibold text-sm flex items-center"
            >
              Read More
              <FaExternalLinkAlt className="ml-1" size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );

  const EventCard: React.FC<{ event: EventItem; index: number }> = ({ event, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
        event.featured ? 'ring-2 ring-green-200' : ''
      }`}
    >
      {event.image && (
        <div className="relative h-48 bg-gray-200">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          {event.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <FaCalendar className="mr-1" size={12} />
            {formatDate(event.startDate)}
          </div>
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <FaClock className="mr-2" size={12} />
            {formatTime(event.startDate)}
            {event.endDate && ` - ${formatTime(event.endDate)}`}
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <FaMapMarkerAlt className="mr-2" size={12} />
            {event.location}
          </div>
        </div>
        
        {event.registrationUrl && (
          <Button
            variant="primary"
            size="sm"
            href={event.registrationUrl}
            className="w-full"
          >
            Register Now
          </Button>
        )}
      </div>
    </motion.article>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at KNIT
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => {
                setActiveTab('news');
                setSelectedCategory('all');
              }}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                activeTab === 'news'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              News
            </button>
            <button
              onClick={() => {
                setActiveTab('events');
                setSelectedCategory('all');
              }}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                activeTab === 'events'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Events
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilter && (
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <FaFilter className="text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-100"
                aria-label="Filter by category"
              >
                {(activeTab === 'news' ? newsCategories : eventCategories).map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${selectedCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeTab === 'news'
              ? filteredNews.map((item, index) => (
                  <NewsCard key={item.id} item={item} index={index} />
                ))
              : filteredEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))
            }
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            href={activeTab === 'news' ? '/news' : '/events'}
          >
            View All {activeTab === 'news' ? 'News' : 'Events'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
