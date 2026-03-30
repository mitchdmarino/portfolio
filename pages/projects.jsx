import Head from 'next/head'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Mitchell Marino</title>
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent-olive)' }}
        >
          Work
        </p>
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
          This section is being updated with new projects. Check back soon.
        </p>
      </div>
    </>
  )
}
