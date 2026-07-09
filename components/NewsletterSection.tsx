'use client';

import { useState } from 'react';
import { colors, typography } from '@/lib/design-tokens';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section
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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Content */}
        <div>
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
            البقاء على اطلاع
          </span>
          <h2
            style={{
              fontFamily: typography.display,
              fontSize: 'clamp(26px, 3vw, 46px)',
              fontWeight: 700,
              color: colors.textDark,
              marginBottom: '24px',
            }}
          >
            انضم إلى نشرتنا البريدية
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 2,
              color: colors.textDarkSecondary,
              marginBottom: '40px',
            }}
          >
            احصل على أحدث الحلقات والمقالات والأفكار الحصرية مباشرة في بريدك الإلكتروني.
          </p>

          {/* Form */}
          <form onSubmit={handleSubscribe} style={{ marginBottom: '24px' }}>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  background: colors.bgLightAlt,
                  color: colors.textDark,
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'background 0.2s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = colors.bgLightAltSecond;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = colors.bgLightAlt;
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px 28px',
                  borderRadius: '6px',
                  border: 'none',
                  background: colors.accent,
                  color: colors.bgLight,
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.accentHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.accent;
                }}
              >
                اشترك
              </button>
            </div>

            {subscribed && (
              <p
                style={{
                  fontSize: '14px',
                  color: colors.accent,
                  fontWeight: 500,
                }}
              >
                ✓ شكراً على اشتراكك!
              </p>
            )}
          </form>

          {/* Reassurances */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'لا سبام أبداً',
              'سهل الإلغاء في أي وقت',
              'نحن نحترم خصوصيتك',
            ].map((text, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '13px',
                  color: colors.textDarkSecondary,
                }}
              >
                <span
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: colors.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.bgLight,
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            aspectRatio: '1/1',
          }}
        >
          <img
            src="/assets/img/Miras09.jpg"
            alt="Newsletter"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </section>
  );
}
