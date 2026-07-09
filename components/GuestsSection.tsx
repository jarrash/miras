'use client';

import { useState } from 'react';
import { colors, typography, guests } from '@/lib/design-tokens';

export function GuestsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="guests"
      style={{
        background: colors.bgDark,
        padding: '160px 52px',
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
            marginBottom: '80px',
            textAlign: 'center',
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
            الضيوف
          </span>
          <h2
            style={{
              fontFamily: typography.display,
              fontSize: 'clamp(26px, 3vw, 46px)',
              fontWeight: 700,
              color: colors.textLight,
            }}
          >
            خبراء وقادة من الميدان
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
          }}
        >
          {guests.map((guest) => (
            <div
              key={guest.id}
              style={{
                textAlign: 'center',
              }}
              onMouseEnter={() => setHoveredId(guest.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  aspectRatio: '4/5',
                }}
              >
                <img
                  src={guest.image}
                  alt={guest.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: hoveredId === guest.id ? 'grayscale(0%)' : 'grayscale(100%)',
                    transform: hoveredId === guest.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'filter 0.7s cubic-bezier(.16,1,.3,1), transform 1.1s cubic-bezier(.16,1,.3,1)',
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: colors.textLight,
                  marginBottom: '8px',
                }}
              >
                {guest.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: colors.textLightSecondary50,
                }}
              >
                {guest.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
