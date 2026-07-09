import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { colors, typography } from '@/lib/design-tokens';

export default function BlogPage() {
  return (
    <main style={{ background: colors.bgDark }}>
      <Navigation />

      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 52px',
          marginTop: '70px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            maxWidth: '1320px',
          }}
        >
          <h1
            style={{
              fontFamily: typography.display,
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 700,
              color: colors.textLight,
              marginBottom: '24px',
            }}
          >
            المدوّنة
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: colors.textLightSecondary50,
              lineHeight: 2,
            }}
          >
            قريباً: مقالات متعمقة عن مرونة الأعمال والقيادة والتحول الرقمي
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
