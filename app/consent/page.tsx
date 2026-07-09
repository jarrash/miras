'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { colors, typography } from '@/lib/design-tokens';

export default function ConsentPage() {
  const [hoveredSave, setHoveredSave] = useState(false);
  const [hoveredReject, setHoveredReject] = useState(false);

  return (
    <main style={{ background: colors.bgDark }}>
      <Navigation />

      <section
        style={{
          padding: '120px 52px 160px',
          marginTop: '70px',
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
              color: colors.textLight,
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            إدارة الموافقات
          </h1>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              background: colors.bgDarkPanel,
              padding: '40px',
              borderRadius: '16px',
              border: `1px solid ${colors.borderLight}`,
            }}
          >
            {[
              {
                id: 'analytics',
                label: 'تحليلات الويب',
                description: 'سماح بجمع بيانات الاستخدام لتحسين الخدمة',
              },
              {
                id: 'marketing',
                label: 'رسائل تسويقية',
                description: 'تلقي رسائل حول المحتوى والعروض الجديدة',
              },
              {
                id: 'preferences',
                label: 'تخصيص المحتوى',
                description: 'السماح بتخزين تفضيلاتك لتحسين التجربة',
              },
            ].map((consent) => (
              <div key={consent.id}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                      accentColor: colors.accent,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: colors.textLight,
                      }}
                    >
                      {consent.label}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: colors.textLightSecondary50,
                        marginTop: '4px',
                      }}
                    >
                      {consent.description}
                    </div>
                  </div>
                </label>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <button
                style={{
                  flex: 1,
                  padding: '12px 28px',
                  borderRadius: '6px',
                  border: 'none',
                  background: hoveredSave ? colors.accentHover : colors.accent,
                  color: colors.bgLight,
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={() => setHoveredSave(true)}
                onMouseLeave={() => setHoveredSave(false)}
              >
                حفظ التفضيلات
              </button>
              <button
                style={{
                  flex: 1,
                  padding: '12px 28px',
                  borderRadius: '6px',
                  border: `1px solid ${colors.borderLight}`,
                  background: hoveredReject ? colors.bgDarkPanelAlt : 'transparent',
                  color: colors.textLight,
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={() => setHoveredReject(true)}
                onMouseLeave={() => setHoveredReject(false)}
              >
                رفض الكل
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
