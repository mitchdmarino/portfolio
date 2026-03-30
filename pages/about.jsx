import Head from 'next/head'

const skillCategories = [
  {
    label: 'Languages & Frameworks',
    skills: ['JavaScript', 'Python', 'HTML/CSS', 'SQL', 'Ruby', 'React', 'Node.js', 'Express', 'C++'],
  },
  {
    label: 'Platforms & Tools',
    skills: ['Click Portal (Huron)', '.NET', 'IIS', 'REST APIs', 'Git', 'Bitbucket', 'Jira', 'Figma'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'CI/CD Pipelines'],
  },
  {
    label: 'BA & Documentation',
    skills: [
      'Requirements Elicitation',
      'Functional Specs',
      'Process Flows',
      'Stakeholder Validation',
      'Change Control',
      'End-user Documentation',
    ],
  },
  {
    label: 'Methodologies',
    skills: ['Agile/SCRUM', 'OOP'],
  },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About | Mitchell Marino</title>
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent-olive)' }}
        >
          About
        </p>
        <h1 className="text-4xl font-bold text-white mb-16">Who I Am</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="flex flex-col gap-5">
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m a Business Analyst and Full Stack Developer based in Los Angeles with 3+ years
              of experience translating complex stakeholder needs into functional specifications and
              working software.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Currently at USC&apos;s Research Technology Services, I partner with compliance directors
              and committee administrators across multiple regulatory committees — conducting
              requirements discovery sessions, configuring and scripting Click Portal (Huron), and
              managing end-to-end delivery from stakeholder sign-off through deployment.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              My background is a little unusual: I started in molecular biology at UCLA, pivoted into
              software engineering, and built a career operating at the intersection of both —
              technical enough to implement the solution, and business-aware enough to make sure
              it&apos;s the right one.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Outside of work, you&apos;ll find me hiking, surfing, snowboarding, gaming, or working
              out.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-7">
            <h2 className="text-lg font-semibold text-white">Skills</h2>
            {skillCategories.map(({ label, skills }) => (
              <div key={label}>
                <h3
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: 'var(--accent-olive)' }}
                >
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded border"
                      style={{
                        backgroundColor: 'var(--surface)',
                        color: 'var(--text-secondary)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
