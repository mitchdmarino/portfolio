export default function Footer() {
  return (
    <footer
      className="border-t text-center py-6 text-sm"
      style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
    >
      <p>Mitchell Marino &copy; {new Date().getFullYear()} &mdash; Built with Next.js</p>
    </footer>
  )
}
