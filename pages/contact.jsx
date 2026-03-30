import Head from 'next/head'
import { useForm, ValidationError } from '@formspree/react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Contact() {
  const [state, handleSubmit] = useForm('xjvzvgje')

  return (
    <>
      <Head>
        <title>Contact | Mitchell Marino</title>
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent-olive)' }}
        >
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">Let&apos;s Talk</h1>
        <p className="text-base mb-16" style={{ color: 'var(--text-secondary)' }}>
          Have a role or project in mind? I&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {state.succeeded ? (
              <div
                className="rounded-lg p-8 border text-center"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <p className="text-lg font-semibold text-white mb-2">Message sent!</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  I&apos;ll get back to you within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-blue)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded text-sm outline-none"
                    style={{
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-blue)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded text-sm outline-none resize-none"
                    style={{
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-blue)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-6 py-3 rounded font-medium text-sm transition-opacity"
                  style={{
                    backgroundColor: 'var(--accent-blue)',
                    color: 'var(--bg)',
                    opacity: state.submitting ? 0.6 : 1,
                    cursor: state.submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {state.submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-6">Connect</h2>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:mitchdmarino@gmail.com"
                className="flex items-center gap-3 group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <FiMail size={18} />
                <span
                  className="text-sm transition-colors group-hover:text-white"
                >
                  mitchdmarino@gmail.com
                </span>
              </a>
              <a
                href="https://linkedin.com/in/mitchellmarino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <FiLinkedin size={18} />
                <span className="text-sm transition-colors group-hover:text-white">
                  linkedin.com/in/mitchellmarino
                </span>
              </a>
              <a
                href="https://github.com/mitchdmarino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <FiGithub size={18} />
                <span className="text-sm transition-colors group-hover:text-white">
                  github.com/mitchdmarino
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
