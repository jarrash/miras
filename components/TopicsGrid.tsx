'use client';

import { colors, typography, topics } from '@/lib/design-tokens';

export function TopicsGrid() {
  return (
    <section
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
            المواضيع
          </span>
          <h2
            style={{
              fontFamily: typography.display,
              fontSize: 'clamp(26px, 3vw, 46px)',
              fontWeight: 700,
              color: colors.textLight,
            }}
          >
            اكتشف المحاور الرئيسية
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: colors.borderDark,
            padding: '1px',
          }}
        >
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              style={{
                background: colors.bgDarkPanel,
                padding: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px',
                cursor: 'pointer',
                transition: 'background 0.2s',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0c0c16';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.bgDarkPanel;
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: 700,
                    color: colors.accentGlow,
                    marginBottom: '12px',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p
                  style={{
                    fontSize: '16px',
                    color: colors.textLight,
                    fontWeight: 500,
                  }}
                >
                  {topic.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
