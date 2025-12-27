"use client";

import Image from "next/image";
import { useState } from "react";
import type { Testimonial } from "@/types/content";

interface Props {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialsSection({
  testimonials,
  title = "What Athletes Say",
  subtitle = "Hear from athletes who have transformed their performance with CORE ATHLETE.",
}: Props) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full mb-4">
          <span className="text-sm font-bold uppercase tracking-wider text-lime-400">
            Testimonials
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-slate-600">{subtitle}</p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.slice(0, 3).map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>

      {/* Show More Button */}
      {testimonials.length > 3 && (
        <div className="text-center mt-12">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-500 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Testimonials
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

function TestimonialCard(testimonial: Testimonial) {
  const {
    name,
    role,
    sport,
    quote,
    image,
    rating,
    videoId,
    videoThumbnail,
    videoDuration,
    videoTitle,
  } = testimonial;

  // If it's a YouTube video testimonial, render video card
  if (videoId) {
    return <YouTubeTestimonialCard {...testimonial} />;
  }

  // Otherwise render traditional text testimonial
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
      {/* Rating Stars */}
      {rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-lime-400" : "text-slate-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Quote */}
      <p className="text-slate-700 mb-6 leading-relaxed">&quot;{quote}&quot;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        )}
        <div>
          <div className="font-bold text-slate-900">{name}</div>
          {role && <div className="text-sm text-slate-600">{role}</div>}
          {sport && <div className="text-sm text-lime-600">{sport}</div>}
        </div>
      </div>
    </div>
  );
}

function YouTubeTestimonialCard({
  videoId,
  videoThumbnail,
  videoDuration,
  videoTitle,
  name,
  sport,
  image,
}: Testimonial) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate YouTube thumbnail URL (default to maxresdefault, fallback to hqdefault)
  const thumbnailUrl =
    videoThumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
      {/* Video Thumbnail */}
      <div
        className="relative aspect-video bg-slate-900 overflow-hidden"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            {/* Thumbnail Image */}
            <Image
              src={thumbnailUrl}
              alt={videoTitle || `${name} testimonial`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Duration Badge */}
            {videoDuration && (
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                {videoDuration}
              </div>
            )}

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          // Embedded YouTube Player
          <iframe
            className="absolute inset-0 w-full h-full"
            src={videoUrl}
            title={videoTitle || `${name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Video Info */}
      <div className="p-4">
        {/* Video Title */}
        <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-lime-600 transition-colors">
          {videoTitle || `${name}'s Testimonial`}
        </h3>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          {image && (
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
          )}
          <div className="min-w-0">
            <div className="font-semibold text-sm text-slate-900 truncate">
              {name}
            </div>
            {sport && (
              <div className="text-xs text-slate-600 truncate">{sport}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
