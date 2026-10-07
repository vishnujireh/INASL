import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar, MapPin } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';
import { UserMenu } from './UserMenu';
import { DASHBOARD_PATH, withNext } from '../lib/nav';
import logo from '../../public/inasl-logo.png'

/** Site header. Section links scroll on the landing page; auth buttons reflect the session. */
export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const currentPage = pathname === '/' ? 'home' : pathname.replace(/^\//, '');
  // "Register" opens the login page (new users create an account from there). Afterwards they land on
  // My INASL and choose conference registration or abstract submission.
  const onOpenRegister = () => navigate(withNext('/login', DASHBOARD_PATH));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentPage !== 'home') return;

      // Active section detector
      const sections = [
        'home',
        'committee',
        'faculty',
        'program',
        'registration',
        'abstract',
        'submit-abstract', // the inline submission form belongs to the Abstract menu item
        'sponsors',
        'venue',
        'downloads',
      ];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId === 'submit-abstract' ? 'abstract' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');

    if (currentPage !== 'home') {
      navigate(`/?section=${targetId}`);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 150);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Organizing Committee', href: '#committee', id: 'committee' },
    { name: 'Faculty', href: '#faculty', id: 'faculty' },
    { name: 'Program', href: '#program', id: 'program' },
    { name: 'Registration', href: '#registration', id: 'registration' },
    { name: 'Abstract', href: '#abstract', id: 'abstract' },
    { name: 'Sponsors', href: '#sponsors', id: 'sponsors' },
    { name: 'Venue', href: '#venue', id: 'venue' },
    { name: 'Downloads', href: '#downloads', id: 'downloads' },
  ];

  return (
    <header
      id="main-header"
      className={`landing fixed top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-[0_6px_24px_-12px_rgba(43,20,23,0.25)]' : 'border-b border-line'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 md:h-24 lg:px-8">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex shrink-0 items-center" id="brand-logo">
          <img src={logo} alt="INASL 2027" className="h-14 w-auto md:h-[76px]" />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Sections" className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => {
            const isActive = currentPage === 'home' && activeSection === link.id; // no section is "current" on other pages
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative px-2.5 py-2 text-[15px] font-medium transition-colors ${
                  isActive ? 'text-wine' : 'text-ink/75 hover:text-wine'
                }`}
              >
                {link.name}
                <span
                  aria-hidden
                  className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-saffron transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}

          <div className="ml-4">
            {user ? (
              <UserMenu />
            ) : (
              <button
                onClick={onOpenRegister}
                className="rounded-full bg-saffron px-5 py-2.5 text-[15px] font-semibold text-ink transition-colors hover:bg-saffron-dark hover:text-white cursor-pointer"
                id="header-register-btn"
              >
                Register
              </button>
            )}
          </div>
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex items-center gap-2 xl:hidden">
          {user ? (
            <UserMenu compact />
          ) : (
            <button
              onClick={onOpenRegister}
              className="rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-saffron-dark hover:text-white cursor-pointer"
            >
              Register
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="rounded-full p-2 text-ink hover:text-wine cursor-pointer"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="max-h-[80vh] overflow-y-auto border-t border-line bg-white shadow-xl xl:hidden">
          <div className="flex flex-col px-4 py-4 sm:px-6">
            <div className="mb-3 flex flex-wrap gap-x-5 gap-y-1 rounded-xl bg-sand px-4 py-3 text-sm text-stone">
              <span className="inline-flex items-center gap-1.5 font-semibold text-wine">
                <Calendar className="h-4 w-4" /> 5–8 August 2027
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> Novotel Jaipur Convention Centre
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = currentPage === 'home' && activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between border-b border-line px-1 py-3 text-base ${
                    isActive ? 'font-semibold text-wine' : 'text-ink hover:text-wine'
                  }`}
                >
                  {link.name}
                  {isActive && <span aria-hidden className="h-2 w-2 rounded-full bg-saffron" />}
                </a>
              );
            })}

            {!user && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="mt-5 w-full rounded-full bg-saffron py-3 text-base font-semibold text-ink transition-colors hover:bg-saffron-dark hover:text-white"
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
