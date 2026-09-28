import React from 'react';
import { X, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  onBookCall,
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ff3131]">
            <span>{post.category}</span>
            <span>•</span>
            <span className="text-gray-400">{post.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black flex items-center justify-center cursor-pointer transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-6">
          <h1 className="text-[28px] sm:text-[36px] font-bold text-[#0C0C0D] leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-gray-500 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-1.5">
              <Calendar size={13} />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div>Author: <span className="text-black font-medium">{post.author}</span></div>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-neutral max-w-none text-[#3F3F46] text-[16px] leading-[1.75] space-y-4 whitespace-pre-line">
            <p className="text-[18px] font-medium text-[#0C0C0D] leading-relaxed">
              {post.excerpt}
            </p>
            <p>{post.content}</p>
          </div>

          {/* CTA Box inside article */}
          <div className="mt-8 p-6 rounded-2xl bg-[#F7F7F8] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[15px] font-semibold text-[#0C0C0D]">
                Facing this challenge in your business?
              </div>
              <div className="text-[13px] text-gray-500">
                Discuss practical implementation strategies directly with a Consilio partner.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="px-5 py-2.5 rounded-full bg-[#0C0C0D] text-white hover:bg-black text-xs font-medium shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Book conversation</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
