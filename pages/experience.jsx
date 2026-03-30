import Head from 'next/head'
import { experience, education } from '../utils/experience'

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Mitchell Marino</title>
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent-olive)' }}
        >
          Career
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">Experience</h1>
        <p className="text-base mb-16" style={{ color: 'var(--text-secondary)' }}>
          A track record of bridging business needs and technical delivery.
        </p>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-0 w-px"
            style={{ backgroundColor: 'var(--border)' }}
          />

          <div className="flex flex-col gap-14">
            {experience.map((role, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-6 sm:-left-10 top-2 w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: 'var(--accent-blue)',
                    outline: '3px solid var(--bg)',
                    outlineOffset: '0px',
                    transform: 'translateX(-50%)',
                    left: '-1px',
                  }}
                />

                {/* Card */}
                <div
                  className="rounded-lg p-6 border"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  {/* Role header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                    <span
                      className="text-xs font-medium shrink-0"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {role.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-5" style={{ color: 'var(--accent-blue)' }}>
                    {role.company}
                    {role.department ? ` — ${role.department}` : ''} &middot; {role.location}
                  </p>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-3 mb-5">
                    {role.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: 'var(--accent-olive)' }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded border"
                        style={{
                          backgroundColor: 'var(--bg)',
                          color: 'var(--accent-olive)',
                          borderColor: 'var(--border)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent-olive)' }}
          >
            Education
          </p>
          <h2 className="text-2xl font-bold text-white mb-8">Academic Background</h2>
          <div className="flex flex-col gap-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-lg p-5 border"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="flex flex-wrap justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--accent-blue)' }}>
                      {edu.institution}
                    </p>
                    {edu.note && (
                      <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {edu.note}
                      </p>
                    )}
                  </div>
                  <span
                    className="text-xs font-medium shrink-0"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
