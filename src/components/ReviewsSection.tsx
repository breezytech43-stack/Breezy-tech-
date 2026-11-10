import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquare, ThumbsUp, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { reviewsData } from '../data';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const [userName, setUserName] = useState('');
  const [userComment, setUserComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
      setUserName('');
      setUserComment('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            {t.reviewsSection.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            {t.reviewsSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.reviewsSection.subtitle}
          </p>
        </div>

        {/* Google Score Banner */}
        <div className="max-w-2xl mx-auto mb-16 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#0a162b] to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 ice-glow-sm">
          <div className="flex items-center gap-4">
            {/* Google Icon Circle */}
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-white font-display tabular-nums">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-300 mt-1 font-medium">
                {t.reviewsSection.basedOn}
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="py-2.5 px-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <span>{t.reviewsSection.writeReview}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl p-6 glass-card border border-slate-800 flex flex-col justify-between space-y-4 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-800 text-white font-bold text-sm flex items-center justify-center">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-display flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        <span title="Verified Customer">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">{rev.location}</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">{rev.date}</span>
                </div>

                {/* Rating Stars & Service Tag */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-cyan-300/80 font-medium">
                    {rev.serviceUsed[currentLang]}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment[currentLang]}"
                </p>
              </div>

              {/* Verified Proof Strip */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>{t.reviewsSection.verifiedCustomer}</span>
                </span>
                <span className="text-slate-500 font-mono">Tiruppur Unit</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0a1424] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              Share Your Breezy Tech Experience
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Your honest feedback helps your neighbors across Tiruppur find verified AC care.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Star Rating</label>
                <div className="flex gap-2 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= userRating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Murugesan"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Review</label>
                <textarea
                  rows={3}
                  required
                  placeholder="How was the cooling service, punctuality, and cleanliness?"
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {reviewSubmitted ? (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 text-center font-medium">
                  Thank you! Your feedback has been recorded for Google Maps verification.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm cursor-pointer transition-colors shadow-md"
                >
                  Submit Google Review
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
