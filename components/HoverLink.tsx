'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HoverLinkProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  baseColor: string;
  hoverColor: string;
}

export function HoverLink({ href, children, baseColor, hoverColor, style: basestyle }: HoverLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{
        ...basestyle,
        color: isHovered ? hoverColor : baseColor,
        transition: 'color 0.2s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
}
