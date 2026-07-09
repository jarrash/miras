import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { colors, typography } from '@/lib/design-tokens';

export default function PrivacyPage() {
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
            سياسة الخصوصية
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
              مقدمة
            </h2>
            <p style={{ marginBottom: '16px' }}>
              في مِراس، نأخذ خصوصيتك على محمل الجد. تصف هذه السياسة كيفية نجمع ونستخدم ونحمي بيانات الشخصية.
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
              البيانات التي نجمعها
            </h2>
            <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>بريدك الإلكتروني عند الاشتراك في النشرة</li>
              <li style={{ marginBottom: '8px' }}>معلومات الاتصال عند ملء نماذج التواصل</li>
              <li style={{ marginBottom: '8px' }}>بيانات الاستخدام مثل التصفح والتفاعلات</li>
            </ul>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: colors.textDark,
                marginBottom: '16px',
                marginTop: '32px',
              }}
            >
              كيف نستخدم بيانات
            </h2>
            <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>لإرسال النشرة البريدية والتحديثات</li>
              <li style={{ marginBottom: '8px' }}>للرد على استفسارات العملاء</li>
              <li style={{ marginBottom: '8px' }}>لتحسين الخدمات والمحتوى</li>
            </ul>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: colors.textDark,
                marginBottom: '16px',
                marginTop: '32px',
              }}
            >
              تواصل معنا
            </h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر صفحة الاتصال.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
