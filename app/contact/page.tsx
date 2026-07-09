'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { colors, typography } from '@/lib/design-tokens';

export default function ContactPage() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  return (
    <main style={{ background: colors.bgLight }}>
      <Navigation />

      <section
        style={{
          padding: '120px 52px 160px',
          marginTop: '70px',
          color: colors.textDark,
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontFamily: typography.display,
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 700,
              color: colors.textDark,
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            تواصل معنا
          </h1>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {[
              { label: 'الاسم', name: 'name', type: 'text' },
              { label: 'البريد الإلكتروني', name: 'email', type: 'email' },
              { label: 'الموضوع', name: 'subject', type: 'text' },
            ].map((field) => (
              <div key={field.name}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: colors.textDark,
                    marginBottom: '8px',
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: `1px solid ${focusedField === field.name ? colors.accent : colors.bgLightAlt}`,
                    background: colors.bgLight,
                    color: colors.textDark,
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: colors.textDark,
                  marginBottom: '8px',
                }}
              >
                الرسالة
              </label>
              <textarea
                name="message"
                rows={6}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: `1px solid ${focusedField === 'message' ? colors.accent : colors.bgLightAlt}`,
                  background: colors.bgLight,
                  color: colors.textDark,
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '12px 28px',
                borderRadius: '6px',
                border: 'none',
                background: hoveredButton ? colors.accentHover : colors.accent,
                color: colors.bgLight,
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background 0.2s',
                marginTop: '24px',
              }}
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
