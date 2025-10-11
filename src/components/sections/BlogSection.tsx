"use client";

import { useState } from 'react';
import BlogPostCard from '../BlogPostCard';
import { motion, AnimatePresence } from 'framer-motion';

type PostPreview = { slug: string; date: string; title: string; };

type BlogSectionProps = {
  allPosts: PostPreview[];
};

export default function BlogSection({ allPosts }: BlogSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visiblePosts = isExpanded ? allPosts : allPosts.slice(0, 3);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold">From the Blog</h2>
        <motion.div 
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {visiblePosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {allPosts.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={toggleExpansion}
              className="font-semibold text-[--color-accent-teal] hover:underline"
            >
              {isExpanded ? 'Show Less' : 'Show More Posts'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}