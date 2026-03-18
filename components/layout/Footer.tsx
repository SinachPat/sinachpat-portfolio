export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="container-page py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          © {year} Designed and Built by Osinachi Patrick
        </p>

        <nav className="flex items-center gap-5">
          <a
            href="mailto:sinachpat@gmail.com"
            className="text-xs transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
            data-cursor="pointer"
          >
            Email
          </a>
          <a
            href="https://twitter.com/0xsinachpat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
            data-cursor="pointer"
          >
            X(Twitter)
          </a>
          <a
            href="https://www.linkedin.com/in/osinachi-patrick/"
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
