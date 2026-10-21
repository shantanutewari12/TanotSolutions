import { siteContent } from '@/data/content';

export default function Reviews() {
  const { reviews } = siteContent;

  return (
    <section className="sec alt reviews-sec" id="reviews" aria-labelledby="reviews-heading">
      <div className="w">
        <div className="hd reviews-hd">
          <h2 id="reviews-heading">{reviews.heading}</h2>
          <p>{reviews.subheading}</p>
        </div>

        {/* Row 1: Direct Vimeo Video with Play Button + Sandeep Das Featured Testimonial */}
        <div className="rv">
          <div>
            <div className="vid" style={{ background: '#000' }}>
              <iframe
                src={`https://player.vimeo.com/video/${reviews.video.vimeoId}?title=0&byline=0&portrait=0`}
                title="Lisa Warren Client Review Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <p className="cap">
              <b>{reviews.video.captionName}</b> {reviews.video.captionRole}
            </p>
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
