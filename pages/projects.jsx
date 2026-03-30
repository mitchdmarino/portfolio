import Head from 'next/head'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { featuredProject, projects, inProgressProjects } from '../utils/projectsData'

function SkillTag({ label, olive }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded border"
      style={{
        backgroundColor: 'var(--bg)',
        color: olive ? 'var(--accent-olive)' : 'var(--text-secondary)',
        borderColor: 'var(--border)',
      }}
    >
      {label}
    </span>
  )
}

function FeaturedCard({ project }) {
  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--accent-blue)', borderWidth: '1px' }}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--accent-olive)' }}
            >
              Workplace Project
            </span>
            <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
          </div>
          <span
            className="text-xs font-medium px-3 py-1 rounded border shrink-0"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            {project.context} &middot; {project.period}
          </span>
        </div>

        {/* Case study sections */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: 'var(--accent-blue)' }}
            >
              Problem
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.problem}
            </p>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: 'var(--accent-blue)' }}
            >
              What I Built
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.built}
            </p>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: 'var(--accent-blue)' }}
            >
              Outcome
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.skills.map((s) => (
            <SkillTag key={s} label={s} olive />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div
      className="rounded-lg border flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      {/* Image */}
      {project.image && (
        <div className="relative w-full h-44 overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.skills.map((s) => (
            <SkillTag key={s} label={s} />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <FiGithub size={14} /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: 'var(--accent-blue)' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function InProgressCard({ project }) {
  return (
    <div
      className="rounded-lg border flex flex-col p-5"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      {/* Badge + title */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: 'var(--bg)', color: 'var(--accent-olive)', border: '1px solid var(--accent-olive)' }}
        >
          In Progress
        </span>
      </div>
      <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.skills.map((s) => (
          <SkillTag key={s} label={s} />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Mitchell Marino</title>
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent-olive)' }}
        >
          Work
        </p>
        <h1 className="text-4xl font-bold text-white mb-16">Projects</h1>

        {/* Featured case study */}
        <div className="mb-12">
          <FeaturedCard project={featuredProject} />
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* In Progress */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-6">In Progress</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {inProgressProjects.map((p) => (
              <InProgressCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
