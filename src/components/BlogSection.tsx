import React from 'react';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/content';
import { BlogPost } from '../types';
import { AnimatedH1 } from './common/AnimatedText';
import { useGsapTilt } from '../hooks/useGsapMagnetic';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onExploreMore: () => void;
}

const BlogCard: React.FC<{
  post: BlogPost;
  index: number;
  onSelect: () => void;
}> = ({ post, index, onSelect }) => {
  const cardTiltRef = useGsapTilt<HTMLElement>();

  return (
    <motion.article
      ref={cardTiltRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      onClick={onSelect}
      className="group bg-white rounded-[24px] overflow-hidden border border-[#EBEBEF] hover:border-[#D1D5DB] transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#0C0C0D] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
          {post.category}
        </span>
      </div>

      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[12px] text-[#71717A] mb-3">
            <Clock size={13} />
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h3 className="text-[20px] font-semibold text-[#0C0C0D] tracking-tight group-hover:text-[#5271ff] transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>

          <p className="mt-3 text-[14px] text-[#52525B] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-[#F0F0F2] flex items-center justify-between">
          <span className="text-[13px] font-medium text-[#71717A] group-hover:text-[#0C0C0D] transition-colors">
            By {post.author}
          </span>
          <span className="w-8 h-8 rounded-full bg-[#F4F4F5] group-hover:bg-gradient-to-r group-hover:from-[#5271ff] group-hover:to-[#ff3131] group-hover:text-white text-[#0C0C0D] flex items-center justify-center transition-all duration-200 shadow-xs">
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost, onExploreMore }) => {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-2 sm:pt-3 pb-24 sm:pb-32 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0C0C0D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0C0C0D] inline-block" />
              <span>Perspectives</span>
            </div>
            <AnimatedH1
              as="h2"
              text="Ideas &"
              highlight="insight"
            />
            <p className="text-[17px] sm:text-[18px] text-[#52525B] leading-relaxed">
              Practical, no-nonsense thinking on strategy, growth, and the tough decisions that truly shape a business.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onExploreMore}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#DCDCE0] hover:border-[#0C0C0D] bg-white text-[#0C0C0D] transition-colors duration-200 self-start lg:self-end hover:shadow-xs cursor-pointer"
          >
            <span className="text-[14px] font-medium">Explore More</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              onSelect={() => onSelectPost(post)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};