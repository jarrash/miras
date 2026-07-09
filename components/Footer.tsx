'use client';

import { colors } from '@/lib/design-tokens';
import { HoverLink } from './HoverLink';

export function Footer() {
  return (
    <footer
      style={{
        background: colors.bgDark,
        borderTop: `1px solid ${colors.borderLight}`,
        padding: '80px 52px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 2fr 1fr',
          gap: '80px',
          marginBottom: '60px',
        }}
      >
        {/* Logo Column */}
        <div>
          <img
            src="/assets/miras-logo-light.png"
            alt="مِراس"
            style={{
              height: '32px',
              width: 'auto',
              marginBottom: '20px',
            }}
          />
          <p
            style={{
              fontSize: '12px',
              color: colors.textLightSecondary50,
              lineHeight: 1.8,
            }}
          >
            بودكاست عن مرونة الأعمال والقيادة في عالم سريع التغير
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: colors.textLight,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '.1em',
              fontFamily: '"IBM Plex Mono", monospace',
            }}
          >
            روابط سريعة
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {[
              { label: 'الحلقات', href: '#episodes' },
              { label: 'الضيوف', href: '#guests' },
              { label: 'المدوّنة', href: '/blog' },
              { label: 'كن ضيفاً', href: '/guest' },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: '12px' }}>
                <HoverLink
                  href={link.href}
                  baseColor={colors.textLightSecondary50}
                  hoverColor={colors.textLight}
                  style={{
                    fontSize: '14px',
                  }}
                >
                  {link.label}
                </HoverLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: colors.textLight,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '.1em',
              fontFamily: '"IBM Plex Mono", monospace',
            }}
          >
            القانوني
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {[
              { label: 'سياسة الخصوصية', href: '/privacy' },
              { label: 'إدارة الموافقات', href: '/consent' },
              { label: 'الشروط والأحكام', href: '/terms' },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: '12px' }}>
                <HoverLink
                  href={link.href}
                  baseColor={colors.textLightSecondary50}
                  hoverColor={colors.textLight}
                  style={{
                    fontSize: '14px',
                  }}
                >
                  {link.label}
                </HoverLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: colors.textLight,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '.1em',
              fontFamily: '"IBM Plex Mono", monospace',
            }}
          >
            تابعنا
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '16px' }}>
            {[
              { label: 'Spotify', href: '#' },
              { label: 'Apple', href: '#' },
              { label: 'YouTube', href: '#' },
              { label: 'LinkedIn', href: '#' },
            ].map((link) => (
              <li key={link.href}>
                <HoverLink
                  href={link.href}
                  baseColor={colors.textLightSecondary50}
                  hoverColor={colors.textLight}
                  style={{
                    fontSize: '12px',
                  }}
                >
                  {link.label}
                </HoverLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: `1px solid ${colors.borderLight}`,
          paddingTop: '40px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            color: colors.textLightSecondary50,
          }}
        >
          © 2024 مِراس - بودكاست مرونة الأعمال. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
