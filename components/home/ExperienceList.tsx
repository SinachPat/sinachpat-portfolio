import { FadeIn } from "@/components/ui/FadeIn";

interface Experience {
  company: string;
  role: string;
  type?: string;
  start: string;
  end: string;
  current: boolean;
  location?: string;
}

const EXPERIENCE: Experience[] = [
  {
    company: "Meetwith",
    role: "Product & Design Lead",
    type: "Full-time",
    start: "Nov 2022",
    end: "Present",
    current: true,
    location: "Remote",
  },
  {
    company: "Laasify HQ",
    role: "Product Designer",
    type: "Full-time",
    start: "Jan 2025",
    end: "Present",
    current: true,
    location: "Lagos · Remote",
  },
  {
    company: "Stackles",
    role: "Product Entrepreneur",
    start: "Apr 2023",
    end: "Mar 2024",
    current: false,
  },
  {
    company: "Stanrute",
    role: "Product & Design Lead",
    type: "Full-time",
    start: "Jun 2021",
    end: "Jan 2024",
    current: false,
  },
  {
    company: "Repute",
    role: "Product Manager, Frontend",
    type: "Contract",
    start: "Oct 2022",
    end: "Mar 2023",
    current: false,
    location: "Remote",
  },
  {
    company: "Sonr",
    role: "Product Designer",
    type: "Contract",
    start: "Apr 2022",
    end: "Oct 2022",
    current: false,
    location: "Brooklyn, NY",
  },
  {
    company: "Moniways",
    role: "Senior Designer, Product & Brand",
    start: "Apr 2022",
    end: "Aug 2022",
    current: false,
  },
  {
    company: "African Blockchain Centre",
    role: "Product Designer",
    type: "Volunteer",
    start: "Jan 2022",
    end: "Mar 2023",
    current: false,
    location: "Lagos",
  },
  {
    company: "LearnWeb3DAO",
    role: "UI Designer",
    type: "Seasonal",
    start: "Feb 2022",
    end: "May 2022",
    current: false,
  },
  {
    company: "Creatorh",
    role: "Product Design Lead",
    type: "Contract",
    start: "Jun 2021",
    end: "Oct 2021",
    current: false,
  },
  {
    company: "Ona Services",
    role: "Product Designer",
    start: "Jan 2021",
    end: "Jul 2021",
    current: false,
    location: "Abuja, Nigeria",
  },
  {
    company: "Codemarks",
    role: "Product Designer",
    start: "Jan 2020",
    end: "Feb 2020",
    current: false,
  },
  {
    company: "HNG Internship",
    role: "Product Design Intern",
    type: "Internship",
    start: "Jun 2019",
    end: "Sep 2019",
    current: false,
    location: "Remote",
  },
  {
    company: "Innovation Growth Hub",
    role: "Visual Designer",
    start: "Mar 2018",
    end: "Dec 2018",
    current: false,
  },
];

export function ExperienceList() {
  return (
    <section className="container-page pb-24">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8 border-t border-[var(--border)] pt-10">
        <p
          className="text-xs font-medium uppercase tracking-widest py-3"
          style={{ color: "var(--text-3)" }}
        >
          Experience
        </p>
      </div>

      {/* Rows */}
      <div>
        {EXPERIENCE.map((item, i) => (
          <FadeIn key={`${item.company}-${item.start}`} delay={i * 40}>
            <div
              className="group flex items-start sm:items-center gap-4 sm:gap-6 py-4 border-b border-[var(--border)] transition-colors duration-150"
              style={{
                borderTopColor: i === 0 ? "var(--border)" : "transparent",
              }}
            >
              {/* Live indicator / year */}
              <div className="shrink-0 w-16 flex items-center gap-2 pt-0.5 sm:pt-0">
                {item.current ? (
                  <span className="flex items-center gap-1.5">
                    {/* Pulsing dot for active roles */}
                    <span className="relative flex h-1.5 w-1.5">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-1.5 w-1.5"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      Now
                    </span>
                  </span>
                ) : (
                  <span
                    className="text-xs tabular-nums"
                    style={{ color: "var(--text-3)" }}
                  >
                    {item.start.split(" ")[1]}
                  </span>
                )}
              </div>

              {/* Company + Role */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-1)" }}
                  >
                    {item.company}
                  </span>
                  <span style={{ color: "var(--text-3)", fontSize: "4px" }}>●</span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-2)" }}
                  >
                    {item.role}
                  </span>
                  {item.type && (
                    <>
                      <span style={{ color: "var(--text-3)", fontSize: "4px" }}>●</span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-3)" }}
                      >
                        {item.type}
                      </span>
                    </>
                  )}
                </div>
                {item.location && (
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--text-3)" }}
                  >
                    {item.location}
                  </p>
                )}
              </div>

              {/* Date range */}
              <div className="hidden sm:block shrink-0 text-right">
                <span
                  className="text-xs tabular-nums"
                  style={{ color: "var(--text-3)" }}
                >
                  {item.start} – {item.end}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
