'use client';

import { useState } from 'react';
import { siteContent } from '@/data/content';

export default function Reviews() {
  const { reviews } = siteContent;
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);

  return (
    <section className="sec alt" id="reviews" aria-labelledby="reviews-heading">
      <div className="w">
        <div className="hd">
          <h2 id="reviews-heading">{reviews.heading}</h2>
          <p>{reviews.subheading}</p>
        </div>

        {/* Row 1: Vimeo Video Facade + Sandeep Das Featured Testimonial */}
        <div className="rv">
          <div>
            {isVideoLoaded ? (
              <div className="vid" style={{ background: '#000' }}>
                <iframe
                  src={`https://player.vimeo.com/video/${reviews.video.vimeoId}?autoplay=1`}
                  title="Lisa Warren Client Review Video"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <button
                type="button"
                className="vid"
                onClick={() => setIsVideoLoaded(true)}
                aria-label="Play video review by Lisa Warren"
              >
                <span>
                  <span className="play">
                    <i aria-hidden="true" />
                  </span>
                  Watch client review
                </span>
              </button>
            )}

            <p className="cap">
              <b>{reviews.video.captionName}</b> {reviews.video.captionRole}
            </p>

            {/* Collapsible Transcript Placeholder requested by client */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="button"
                className="transcript-toggle"
                onClick={() => setIsTranscriptOpen((prev) => !prev)}
                aria-expanded={isTranscriptOpen}
              >
                {isTranscriptOpen ? 'Hide transcript' : 'Read transcript'}
              </button>
              {isTranscriptOpen && (
                <div className="transcript-box">
                  <p>{reviews.video.transcriptPlaceholder}</p>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="st" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p className="q">{reviews.featuredReview.quote}</p>
            <p className="nm">
              <b>{reviews.featuredReview.author}</b>
              {reviews.featuredReview.role}
            </p>
          </div>
        </div>

        {/* Row 2: 3 Equal-height Testimonial Cards */}
        <div className="g3">
          {reviews.cardReviews.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="st" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>{item.quote}</p>
              <p className="nm">
                <b>{item.author}</b>
                {item.role}
              </p>
            </div>
          ))}
        </div>

        {/* Reviews Action Buttons */}
        <p
          className="c"
          style={{
            marginTop: '32px',
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            className="btn"
            href={reviews.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {reviews.ctaPrimary.label}
          </a>
          <a
            className="btn w2"
            href={reviews.ctaSecondary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {reviews.ctaSecondary.label}
          </a>
        </p>
      </div>
    </section>
  );
}
