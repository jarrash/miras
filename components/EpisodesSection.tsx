'use client';

import { useState } from 'react';
import { colors, typography, episodes, topics } from '@/lib/design-tokens';

export function EpisodesSection() {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  const filteredEpisodes =
    selectedTopic === 'all'
      ? episodes
      : episodes.filter((ep) => ep.topic === selectedTopic);

  return (
    <section
      id="episodes"
      style={{
        background: colors.bgLight,
        padding: '160px 52px',
        color: colors.textDark,
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            marginBottom: '60px',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 600,
              color: colors.accent,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '.15em',
              fontFamily: typography.mono,
            }}
          >
            الحلقات
          </span>
          <h2
            style={{
              fontFamily: typography.display,
              fontSize: 'clamp(26px, 3vw, 46px)',
              fontWeight: 700,
              color: colors.textDark,
              marginBottom: '40px',
            }}
          >
            أحدث الحلقات
          </h2>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <FilterPill
              label="الكل"
              active={selectedTopic === 'all'}
              onClick={() => setSelectedTopic('all')}
            />
            {[
              { label: 'إدارة الأزمات', key: 'crisis' },
              { label: 'التحول الرقمي', key: 'digital' },
              { label: 'القيادة', key: 'leadership' },
              { label: 'استمرارية الأعمال', key: 'continuity' },
            ].map((filter) => (
              <FilterPill
                key={filter.key}
                label={filter.label}
                active={selectedTopic === filter.key}
                onClick={() => setSelectedTopic(filter.key)}
              />
            ))}
          </div>
        </div>

        {/* Episodes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredEpisodes.map((episode) => (
            <div
              key={episode.id}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  aspectRatio: '16/9',
                }}
              >
                <img
                  src={episode.image}
                  alt={episode.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: colors.accent,
                    textTransform: 'uppercase',
                    letterSpacing: '.1em',
                    fontFamily: typography.mono,
                  }}
                >
                  EP {episode.number} · {episode.duration}
                </span>
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: colors.textDark,
                  marginBottom: '8px',
                  lineHeight: 1.4,
                }}
              >
                {episode.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: colors.textDarkSecondary,
                  marginBottom: '4px',
                }}
              >
                {episode.guest}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: colors.textDarkSecondary,
                }}
              >
                {episode.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 20px',
        borderRadius: '100px',
        border: 'none',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        background: active ? colors.accent : colors.bgLightAlt,
        color: active ? colors.bgLight : colors.textDark,
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = colors.bgLightAltSecond;
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = colors.bgLightAlt;
        }
      }}
    >
      {label}
    </button>
  );
}
