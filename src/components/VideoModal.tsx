import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { PARTNERS_SECTION } from '../data/content';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onBookCall,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl bg-[#0C0C0D] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff3131] animate-pulse shadow-[0_0_8px_rgba(255,49,49,0.8)]" />
            <span className="text-sm font-medium text-white">
              {PARTNERS_SECTION.videoTitle}
            </span>
            <span className="text-xs text-white/50 font-mono">
              ({PARTNERS_SECTION.videoDuration})
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          {/* Simulated High-Res Video Presentation Backdrop */}
          <img
            src={PARTNERS_SECTION.videoThumbnail}
            alt="Engagement overview video"
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isPlaying ? 'scale-105 filter brightness-90' : 'filter brightness-75'
            }`}
          />

          {/* Overlay Graphics */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Center Play/Pause button when hovered or paused */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {!isPlaying && (
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131] text-white flex items-center justify-center shadow-2xl animate-in zoom-in-95">
                <Play size={28} fill="white" className="ml-1" />
              </div>
            )}
          </div>

          {/* Chapter Stamp */}
          <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-white/90">
            Chapter 02: The 90-Day Executive Integration
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
            {/* Progress Scrubber */}
            <div
              className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer relative overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPct = Math.round((clickX / rect.width) * 100);
                setProgress(newPct);
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-[#5271ff] to-[#ff3131] rounded-full relative"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#5271ff] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  onClick={() => setProgress(0)}
                  className="hover:text-[#5271ff] transition-colors cursor-pointer"
                  title="Replay"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#5271ff] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <span className="font-mono text-white/60">
                  01:18 / 03:25
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onBookCall();
                  }}
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131] text-white hover:opacity-90 font-medium text-xs transition-opacity cursor-pointer shadow-md"
                >
                  Schedule briefing
                </button>
                <button className="hover:text-[#ff3131] transition-colors">
                  <Maximize size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Notes / Key Highlights */}
        <div className="p-6 bg-[#141416] grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/5">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#5271ff]">01. Scoping with Partners</div>
            <div className="text-[13px] text-white/70">Immediate diagnosis of core commercial and operational constraints.</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#ff3131]">02. 3-Week Rapid Sprint</div>
            <div className="text-[13px] text-white/70">Empirical market modeling and consensus building with board leaders.</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#5271ff]">03. Active Execution Hold</div>
            <div className="text-[13px] text-white/70">Staying accountable through delivery, not abandoning at slide handoff.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
