import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { colors, typography } from '@/lib/design-tokens';

export default function TermsPage() {
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
            maxWidth: '900px',
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
            }}
          >
            الشروط والأحكام
          </h1>

          <div
            style={{
              fontSize: '16px',
              lineHeight: 2,
              color: colors.textDarkSecondary,
            }}
          >
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: colors.textDark,
                marginBottom: '16px',
                marginTop: '32px',
              }}
            >
              استخدام الخدمة
            </h2>
            <p style={{ marginBottom: '16px' }}>
              باستخدام موقع مِراس، فإنك توافق على الامتثال لهذه الشروط والأحكام والقوانين المعمول بها.
            </p>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: colors.textDark,
                marginBottom: '16px',
                marginTop: '32px',
              }}
            >
              حقوق الملكية الفكرية
            </h2>
            <p style={{ marginBottom: '16px' }}>
              جميع المحتوى على الموقع، بما في ذلك النصوص والصور والفيديو والصوت، محمي بحقوق الملكية الفكرية.
            </p>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: colors.textDark,
                marginBottom: '16px',
                marginTop: '32px',
              }}
            >
              التنصل من المسؤولية
            </h2>
            <p style={{ marginBottom: '16px' }}>
              يتم توفير هذا الموقع "كما هو" بدون أي ضمانات صريحة أو ضمنية. لا نتحمل مسؤولية عن أي أضرار ناجمة عن استخدام الموقع.
            </p>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: colors.textDark,
                marginBottom: '16px',
                marginTop: '32px',
              }}
            >
              الاتصال
            </h2>
            <p>
              إذا كان لديك أي استفسارات حول الشروط والأحكام، يرجى التواصل معنا عبر صفحة الاتصال.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
