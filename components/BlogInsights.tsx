import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function BlogInsights() {
  const { blog } = siteContent;

  return (
    <section className="sec blog" id="blog" aria-labelledby="blog-heading">
      <div className="w">
        <div className="hd">
          <h2 id="blog-heading">{blog.heading}</h2>
        </div>

        <div className="g3">
          {blog.posts.map((post, idx) => (
            <div className="card" key={idx}>
              <Image
                src={post.image}
                alt={post.alt}
                width={post.width}
                height={post.height}
                loading="lazy"
                style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
              />
              <div>
                <span>{post.tag}</span>
                <h3>
                  <a
                    href={post.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </a>
                </h3>
                <p>
                  {post.author} · {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
