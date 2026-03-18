import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Osinachi Patrick — product designer, engineer and builder.",
};

interface Role {
  company: string;
  role: string;
  type?: string;
  start: string;
  end: string;
  current: boolean;
  location?: string;
  description: string;
  skills?: string[];
}

const ROLES: Role[] = [
  {
    company: "Meetwith",
    role: "Product & Design Lead",
    type: "Full-time",
    start: "Nov 2022",
    end: "Present",
    current: true,
    location: "Remote",
    description:
      "Leading all product and design decisions at Meetwith, a scheduling and calendar platform. Responsible for the full product lifecycle — from discovery and research, through design and prototyping, to shipping and measuring outcomes. Drove the Unified Calendar feature that merged Google, Outlook, and Meetwith events into a single timeline, increasing feature usage from 22% to 61%. Own the design system, define product strategy alongside the CEO, and work directly with engineers on every major release.",
    skills: ["Product Strategy", "UX Design", "Figma", "User Research", "Design Systems"],
  },
  {
    company: "Laasify HQ",
    role: "Product Designer",
    type: "Full-time",
    start: "Jan 2025",
    end: "Present",
    current: true,
    location: "Lagos · Remote",
    description:
      "Designing core product experiences for Laasify, a logistics and shipment management platform. Focused on functional design — building interfaces that make complex logistics workflows feel simple for businesses. Work closely with engineers to ensure design intent survives the handoff, and contribute to design support across multiple product surfaces.",
    skills: ["Product Design", "Functional Design", "Figma"],
  },
  {
    company: "Stackles",
    role: "Product Entrepreneur",
    start: "Apr 2023",
    end: "Mar 2024",
    current: false,
    description:
      "Founded and built Stackles independently, taking the product from zero to launch. Handled every dimension of the product — strategy, design, engineering, and growth. This experience sharpened a systems-level understanding of what it takes to build and ship a product without a team, and reinforced the importance of ruthless prioritisation in a resource-constrained environment.",
    skills: ["0→1", "Product Strategy", "Entrepreneurship"],
  },
  {
    company: "Stanrute",
    role: "Product & Design Lead",
    type: "Full-time",
    start: "Jun 2021",
    end: "Jan 2024",
    current: false,
    description:
      "Served as the primary product and design decision-maker across Stanrute's product portfolio. Collaborated with leadership to define key product metrics and success criteria. Established a rigorous design-to-engineering handoff process that reduced miscommunication and rework. Monitored product performance through each stage — from closed beta and early adoption through to product-market fit validation.",
    skills: ["Product Management", "UX Design", "Design Handoff", "Analytics"],
  },
  {
    company: "Repute",
    role: "Product Manager, Frontend",
    type: "Contract",
    start: "Oct 2022",
    end: "Mar 2023",
    current: false,
    location: "Remote",
    description:
      "Managed frontend product delivery for Repute, a reputation management platform for businesses and high-profile individuals. Led a cross-functional team to ship a working MVP in 7 weeks — within budget and scope. Owned stakeholder communication, sprint planning, and execution budgeting. Ran usability testing sessions alongside UX designers to collect feedback for iteration. Created a culture of calm collaboration between designers and engineers that eliminated process chaos.",
    skills: ["Product Management", "Stakeholder Management", "SaaS", "B2B"],
  },
  {
    company: "Sonr",
    role: "Product Designer",
    type: "Contract",
    start: "Apr 2022",
    end: "Oct 2022",
    current: false,
    location: "Brooklyn, New York",
    description:
      "Led the Sonr Learn team as both product manager and designer. Sonr Learn was a community education program built to explain the Sonr decentralised ecosystem to a global developer audience. Produced learning content, graphical explainers, and demo applications spanning Finance, Gaming, Education, Healthcare, and Business — going far beyond documentation to show the technology in real-world contexts.",
    skills: ["Product Design", "Product Management", "Community", "Web3"],
  },
  {
    company: "Moniways",
    role: "Senior Designer, Product & Brand",
    start: "Apr 2022",
    end: "Aug 2022",
    current: false,
    description:
      "Led design at Moniways, a digital financial services company. Shipped interfaces across Payment, Savings, Investment, and Agency Banking products. Balanced brand identity work with functional product design — ensuring consistency across surfaces while meeting tight engineering timelines.",
    skills: ["Product Design", "Brand Design", "Fintech"],
  },
  {
    company: "African Blockchain Centre for Developers",
    role: "Product Designer",
    type: "Volunteer",
    start: "Jan 2022",
    end: "Mar 2023",
    current: false,
    location: "Lagos, Nigeria",
    description:
      "Core team volunteer role contributing design and creative work to one of West Africa's leading blockchain developer communities. Designed visual assets, event materials, and community-facing collateral that helped grow the community's presence.",
    skills: ["Brand Design", "Product Design"],
  },
  {
    company: "LearnWeb3DAO",
    role: "UI Designer",
    type: "Seasonal",
    start: "Feb 2022",
    end: "May 2022",
    current: false,
    description:
      "Community volunteer contributor to LearnWeb3DAO, one of the largest Web3 developer education communities. Worked on UI components that improved the learning platform experience for thousands of developers entering the Web3 space.",
    skills: ["UI Design"],
  },
  {
    company: "Creatorh",
    role: "Product Design Lead",
    type: "Contract",
    start: "Jun 2021",
    end: "Oct 2021",
    current: false,
    description:
      "Led product design for Creatorh's initial MVP alongside a fellow designer. Worked under tight timelines to deliver a market-ready product, balancing speed with design quality. Established the visual language and core UX patterns that the engineering team built from.",
    skills: ["Product Design", "Leadership", "MVP"],
  },
  {
    company: "Ona Services",
    role: "Product Designer",
    start: "Jan 2021",
    end: "Jul 2021",
    current: false,
    location: "Abuja, Nigeria",
    description:
      "Worked across product design and product management at Ona Services. Contributed to research, interface design, and cross-functional product execution — gaining early exposure to the full product development cycle in a structured team environment.",
    skills: ["Product Design", "Product Management", "UX"],
  },
  {
    company: "Codemarks",
    role: "Product Designer",
    start: "Jan 2020",
    end: "Feb 2020",
    current: false,
    description:
      "Designed product interfaces for Codemarks and built the company's first internal design system — establishing reusable components and visual standards that gave the team a shared design language to work from.",
    skills: ["Product Design", "Design Systems"],
  },
  {
    company: "HNG Internship",
    role: "Product Design Intern",
    type: "Internship",
    start: "Jun 2019",
    end: "Sep 2019",
    current: false,
    location: "Remote",
    description:
      "One of the most formative early experiences — HNG is a competitive, high-pressure remote internship where only a fraction of applicants make it through. Worked in cross-functional teams on internal product projects, conducted UI reviews and redesigns, collaborated with developers on design implementation, and completed a dedicated UX copywriting workstream.",
    skills: ["Product Design", "UI Design", "UX Copywriting"],
  },
  {
    company: "Innovation Growth Hub",
    role: "Visual Designer",
    start: "Mar 2018",
    end: "Dec 2018",
    current: false,
    description:
      "First design role. Worked alongside the lead designer to ensure the design team stayed on top of deliverables with no backlog. Developed foundational skills in visual communication, speed, and working within a collaborative creative team.",
    skills: ["Visual Design"],
  },
];

export default function ExperiencePage() {
  const currentRoles = ROLES.filter((r) => r.current);
  const pastRoles = ROLES.filter((r) => !r.current);

  return (
    <main>
      <section className="container-page pt-14 pb-24" style={{ maxWidth: "760px" }}>

        {/* Page header */}
        <FadeIn>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-5"
            style={{ color: "var(--text-3)" }}
          >
            Experience
          </p>
          <h1
            className="font-bold tracking-tight mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--text-1)",
              lineHeight: 1.1,
            }}
          >
            6+ years building at the
            <br />intersection of product,
            <br />design & engineering.
          </h1>
          <p
            className="text-base leading-relaxed mt-6"
            style={{ color: "var(--text-2)", maxWidth: "52ch" }}
          >
            I&apos;ve worked across startups, contract engagements, and my own
            ventures — from 0→1 product builds to leading design at live
            consumer products.
          </p>
          <div className="mt-8">
            <PrintButton />
          </div>
        </FadeIn>

        {/* Currently section */}
        <FadeIn delay={80}>
          <div className="mt-16 mb-2">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{ color: "var(--text-3)" }}
            >
              Currently
            </p>
            <div className="flex flex-col gap-4">
              {currentRoles.map((role) => (
                <RoleCard key={`${role.company}-${role.start}`} role={role} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Previously section */}
        <div className="mt-16">
          <FadeIn>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{ color: "var(--text-3)" }}
            >
              Previously
            </p>
          </FadeIn>
          <div className="flex flex-col">
            {pastRoles.map((role, i) => (
              <FadeIn key={`${role.company}-${role.start}`} delay={i * 35}>
                <RoleCard role={role} />
              </FadeIn>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}

/* ─── Role card ─────────────────────────────────────────────────── */

function RoleCard({ role }: { role: Role }) {
  return (
    <div
      className="py-7 border-t border-[var(--border)]"
    >
      {/* Top row: company + dates */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2.5">
          {role.current && (
            <span className="relative flex h-1.5 w-1.5 shrink-0 mt-0.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </span>
          )}
          <span
            className="text-base font-semibold"
            style={{ color: "var(--text-1)" }}
          >
            {role.company}
          </span>
          {role.current && (
            <span
              className="text-xs font-medium px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: "var(--status-live-bg)",
                color: "var(--status-live-text)",
              }}
            >
              Now
            </span>
          )}
        </div>

        <span
          className="text-xs tabular-nums shrink-0 mt-1"
          style={{ color: "var(--text-3)" }}
        >
          {role.start} – {role.end}
        </span>
      </div>

      {/* Role + meta */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
        <span className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
          {role.role}
        </span>
        {role.type && (
          <>
            <span style={{ color: "var(--text-3)", fontSize: "4px" }}>●</span>
            <span className="text-xs" style={{ color: "var(--text-3)" }}>
              {role.type}
            </span>
          </>
        )}
        {role.location && (
          <>
            <span style={{ color: "var(--text-3)", fontSize: "4px" }}>●</span>
            <span className="text-xs" style={{ color: "var(--text-3)" }}>
              {role.location}
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--text-2)", maxWidth: "62ch" }}
      >
        {role.description}
      </p>

      {/* Skills */}
      {role.skills && role.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {role.skills.map((skill) => (
            <Tag key={skill} variant="outline">
              {skill}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
}
