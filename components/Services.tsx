'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { siteContent } from '@/data/content';

export default function Services() {
  const { services } = siteContent;
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % services.tabs.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + services.tabs.length) % services.tabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = services.tabs.length - 1;
    }

    if (nextIndex !== index) {
      setActiveTab(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const currentTab = services.tabs[activeTab];

  return (
    <section className="sec" id="services" aria-labelledby="services-heading">
      <div className="w">
        <div className="hd">
          <h2 id="services-heading">{services.heading}</h2>
          <p>{services.subheading}</p>
        </div>

        <div className="sv">
          {/* Tabs List */}
          <div role="tablist" aria-label="Services List" id="tl">
            {services.tabs.map((tab, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  id={`tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                >
                  <span>
                    0{idx + 1}&nbsp;&nbsp;{tab.tabLabel}
                  </span>
                  <span aria-hidden="true">›</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div
            className="card pn"
            id={`panel-${currentTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentTab.id}`}
          >
            <h3 style={{ fontSize: '1.5rem' }}>{currentTab.title}</h3>
            <p>{currentTab.description}</p>
            <ul>
              {currentTab.features.map((feature, fIdx) => (
                <li key={fIdx}>{feature}</li>
              ))}
            </ul>
            <a className="btn" href={currentTab.ctaHref}>
              {currentTab.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
