import { ReactNode } from 'react';
import { Logo } from '../logo/index.js';
import styles from './styles.module.scss';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContact {
  icon: string;
  text: string;
}

export interface FooterProps {
  logo?: ReactNode;
  logoVariant?: 'header' | 'footer';
  logoSize?: 'small' | 'medium' | 'large';
  logoAlt?: string;
  logoHref?: string;
  description?: string;
  quickLinks?: FooterLink[];
  contactInfo?: FooterContact[];
  copyright?: string;
  children?: ReactNode;
  className?: string;
}

export const Footer = ({
  logo,
  logoVariant = 'footer',
  logoSize = 'medium',
  logoAlt = 'T8 Pro',
  logoHref,
  description,
  quickLinks,
  contactInfo,
  copyright = '© 2025 T8 Pro. All rights reserved.',
  children,
  className,
}: FooterProps) => {
  const footerClasses = [styles.footer, className].filter(Boolean).join(' ');

  return (
    <footer className={footerClasses}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            {logo ? (
              logo
            ) : (
              <Logo
                variant={logoVariant}
                size={logoSize}
                alt={logoAlt}
                src={logoHref}
              />
            )}
            {description && <p className={styles.description}>{description}</p>}
          </div>

          {quickLinks && quickLinks.length > 0 && (
            <div className={styles.links}>
              <h3 className={styles.title}>Quick Links</h3>
              <ul className={styles.linkList}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {contactInfo && contactInfo.length > 0 && (
            <div className={styles.contact}>
              <h3 className={styles.title}>Contact</h3>
              <ul className={styles.contactList}>
                {contactInfo.map((item, index) => (
                  <li key={index} className={styles.contactItem}>
                    <i className={item.icon} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {children}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};
