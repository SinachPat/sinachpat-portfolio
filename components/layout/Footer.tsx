export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="container-page py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          © {year} Designed and Built by Osinachi Patrick & Claude Code
        </p>

        <nav className="flex items-center gap-5">
          <a
            href="mailto:hello@osinachi.dev"
            className="text-xs transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
            data-cursor="pointer"
          >
            Email
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
            data-cursor="pointer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
            data-cursor="pointer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
