'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function Hero() {
  const { hero } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect this form submission to Tanot Solutions' CRM / Hubspot / Webhook endpoint.
    // Example: await fetch('/api/crm/lead', { method: 'POST', body: JSON.stringify(formData) });
    setSubmitted(true);
  };

  return (
    <section className="hero sec">
      <div className="w">
        <div>
          <h1>
            <span>{hero.headingHighlight}</span>
            {hero.headingRest}
          </h1>
          <p className="lead">{hero.lead}</p>
          <div className="ctas">
            <a className="btn" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="btn w2" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <a
            href={hero.clutchBadge.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Tanot Solutions reviews on Clutch"
          >
            <Image
              className="cl"
              src={hero.clutchBadge.src}
              alt={hero.clutchBadge.alt}
              width={hero.clutchBadge.width}
              height={hero.clutchBadge.height}
              priority
            />
          </a>
        </div>

        <form className="form" id="contact" onSubmit={handleSubmit}>
          <div className="f">
            <h2 style={{ fontSize: '1.5rem' }}>{hero.form.title}</h2>
            <p style={{ marginTop: '6px', fontSize: '0.95rem' }}>{hero.form.subtitle}</p>
          </div>

          <label htmlFor="first-name">
            First name *
            <input
              id="first-name"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="last-name">
            Last name *
            <input
              id="last-name"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>

          <label className="f" htmlFor="email">
            Email *
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="f" htmlFor="website">
            Website / URL *
            <input
              id="website"
              name="website"
              type="url"
              required
              placeholder="https://"
              autoComplete="url"
              value={formData.website}
              onChange={handleChange}
            />
          </label>

          <label className="f" htmlFor="message">
            How can we help? *
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button className="btn" type="submit">
            Submit
          </button>

          {submitted && (
            <p id="ok" role="status">
              {hero.form.successMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
