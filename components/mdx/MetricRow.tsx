interface Metric {
  label: string;
  before: string;
  after: string;
}

interface MetricRowProps {
  metrics: Metric[];
}

export function MetricRow({ metrics }: MetricRowProps) {
  return (
    <div
      className="grid gap-px my-8 rounded-lg overflow-hidden border border-[var(--border)]"
      style={{
        gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
        backgroundColor: "var(--border)",
      }}
    >
      {metrics.map((m) => (
        <div
          key={m.label}
          className="px-5 py-6 text-center"
          style={{ backgroundColor: "var(--surface)" }}
        >
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: "var(--text-3)" }}
          >
            {m.label}
          </p>
          <div className="flex items-center justify-center gap-2">
            <span
              className="text-xl font-semibold tabular-nums"
              style={{ color: "var(--text-3)", textDecoration: "line-through" }}
            >
              {m.before}
            </span>
            <span style={{ color: "var(--text-3)", fontSize: "0.75rem" }}>→</span>
            <span
              className="text-2xl font-bold tabular-nums"
              style={{ color: "var(--accent)" }}
            >
              {m.after}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Inline single metric for use in MDX */
export function Metric({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  return <MetricRow metrics={[{ label, before, after }]} />;
}
