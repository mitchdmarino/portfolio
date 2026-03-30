import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href) => router.pathname === href

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex flex-col leading-tight">
          <span className="text-base font-bold text-white">Mitchell Marino</span>
          <span className="text-xs font-medium" style={{ color: 'var(--accent-blue)' }}>
            BA &amp; Full Stack Developer
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors pb-0.5"
              style={{
                color: isActive(link.href) ? 'var(--accent-blue)' : 'var(--text-secondary)',
                borderBottom: isActive(link.href) ? '2px solid var(--accent-blue)' : '2px solid transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Mitchell_Marino_Resume_BA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded border transition-all"
            style={{
              color: 'var(--accent-blue)',
              borderColor: 'var(--accent-blue)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-blue)'
              e.currentTarget.style.color = 'var(--bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--accent-blue)'
            }}
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-1"
                style={{ color: isActive(link.href) ? 'var(--accent-blue)' : 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Mitchell_Marino_Resume_BA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium py-1"
              style={{ color: 'var(--accent-blue)' }}
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
