'use client';

import { colors, typography } from '@/lib/design-tokens';

export function Hero() {

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: colors.bgDark,
        padding: '120px 52px 80px',
      }}
    >
      {/* Background Image & Overlays */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <img
          src="/assets/img/miras-hero-bg2.jpg"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '58% 42%',
            animation: 'heroDrift 26s ease-in-out infinite alternate',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 70% 60% at 50% 46%, rgba(5,5,5,.74) 0%, rgba(5,5,5,.4) 45%, rgba(5,5,5,.66) 100%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, rgba(5,5,5,.6) 0%, transparent 24%, transparent 62%, rgba(5,5,5,.96) 100%)`,
          }}
        />
      </div>

      {/* Animated Glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '8%',
            width: '680px',
            height: '680px',
            background: `radial-gradient(ellipse at center, ${colors.accentGlowAlt} 0%, transparent 70%)`,
            animation: 'glow1 13s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '10%',
            width: '520px',
            height: '520px',
            background: 'radial-gradient(ellipse at center, rgba(143,168,255,.5) 0%, transparent 70%)',
            animation: 'glow2 17s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Kicker Chip */}
        <div
          style={{
            marginBottom: '36px',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '7px 20px',
              border: `1px solid rgba(255,255,255,.1)`,
              borderRadius: '100px',
              fontSize: '12px',
              color: 'rgba(247,247,245,.45)',
              letterSpacing: '.08em',
              fontFamily: typography.mono,
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: colors.accent,
                flexShrink: 0,
                display: 'inline-block',
              }}
            />
            بودكاست مرونة الأعمال
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            marginBottom: '28px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="/assets/miras-logo-light.png"
            alt="مِراس"
            style={{
              width: 'clamp(280px, 38vw, 520px)',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* Divider */}
        <div
          style={{
            width: '40px',
            height: '1px',
            background: `rgba(85,120,255,.5)`,
            marginBottom: '36px',
          }}
        />

        {/* Heading */}
        <h1
          style={{
            fontFamily: typography.display,
            fontWeight: 300,
            fontSize: 'clamp(22px, 2.6vw, 40px)',
            color: 'rgba(247,247,245,.65)',
            lineHeight: 1.75,
            marginBottom: '28px',
            maxWidth: '680px',
          }}
        >
          حيث تتحول الخبرة إلى مرونة
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.3vw, 18px)',
            fontWeight: 300,
            lineHeight: 2.1,
            color: 'rgba(247,247,245,.38)',
            maxWidth: '580px',
          }}
        >
          حوارات مع القادة والخبراء وصناع القرار حول بناء المؤسسات القادرة على الصمود والتكيف والنمو في عالم سريع التغير.
        </p>
      </div>
    </section>
  );
}
