import Head from 'next/head'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitchell Marino | Business Analyst &amp; Full Stack Developer</title>
      </Head>

      <section
        style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--accent-olive)' }}
            >
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Mitchell Marino
            </h1>

            {/* Title */}
            <h2
              className="text-xl sm:text-2xl font-medium mb-6"
              style={{ color: 'var(--accent-blue)' }}
            >
              Business Analyst &amp; Full Stack Developer
            </h2>

            {/* Tagline */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              I turn complex requirements into solutions that actually get used — working at the
              intersection of stakeholder needs and technical implementation in Los Angeles, CA.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-medium text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent-blue)', color: 'var(--bg)' }}
              >
                View Experience <FiArrowRight size={15} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-medium text-sm border transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-blue)'
                  e.currentTarget.style.color = 'var(--accent-blue)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-primary)'
                }}
              >
                View Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/mitchdmarino"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mitchellmarino"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:mitchdmarino@gmail.com"
                aria-label="Email"
                className="transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
