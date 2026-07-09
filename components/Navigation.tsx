'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { colors, animations } from '@/lib/design-tokens';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 100,
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 52px',
    justifyContent: 'space-between',
    background: isScrolled ? 'rgba(5, 5, 5, 0.92)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
    borderBottom: isScrolled ? `1px solid ${colors.borderLight}` : '1px solid transparent',
    transition: `background ${animations.scrollTransition}, backdrop-filter ${animations.scrollTransition}, border-color ${animations.scrollTransition}`,
  };

  return (
    <nav style={navStyle}>
      <Link href="/">
        <img
          src="/assets/miras-logo-light.png"
          alt="مِراس"
          style={{
            height: '26px',
            width: 'auto',
            display: 'block',
          }}
        />
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
        <NavLink href="#episodes">حلقات</NavLink>
        <NavLink href="#guests">ضيوف</NavLink>
        <NavLink href="/blog">المدوّنة</NavLink>
        <NavLink href="/guest">كن ضيفاً</NavLink>
        <NavLink href="#about">عن البودكاست</NavLink>
        <NavLink href="/contact">تواصل معنا</NavLink>
        <button
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#F7F7F5',
            background: colors.accent,
            padding: '9px 22px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: `background ${animations.buttonTransition}, box-shadow ${animations.buttonTransition}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = colors.accentHover;
            e.currentTarget.style.boxShadow = `0 4px 24px ${colors.accentGlow}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = colors.accent;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          استمع الآن
        </button>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle: React.CSSProperties = {
    fontSize: '14px',
    color: isHovered ? '#F7F7F5' : 'rgba(247, 247, 245, 0.5)',
    transition: `color ${animations.linkTransition}`,
  };

  return (
    <Link
      href={href}
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
}
