"use client";

import { useState, type CSSProperties } from "react";
import { LessonCard } from "./lesson-card";

const COPY = {
  h1: "Master",
  h2: "any skill,",
  h3: "faster",
  premise:
    "You don't lack time. You lack a plan, a coach, and a reason to show up tomorrow.",
  ctaLabel: "Build my plan",
  headlineSize: 132,
};

const P = {
  paper: "#f4f1ea",
  paperAlt: "#ffffff",
  ink: "#0f0f0f",
  inkSoft: "#0f0f0fa0",
  inkFaint: "#0f0f0f52",
  rule: "#0f0f0f24",
  indigo: "#3d3df5",
  lime: "#c8ff5e",
  cream: "#ede7d8",
};

const FONTS = {
  serif: 'var(--font-instrument-serif), "Times New Roman", serif',
  sans: 'var(--font-inter), -apple-system, system-ui, sans-serif',
  mono: 'var(--font-jetbrains-mono), ui-monospace, monospace',
};

const linkStyle: CSSProperties = {
  color: P.ink,
  textDecoration: "none",
  cursor: "pointer",
};

const btnInk: CSSProperties = {
  background: P.ink,
  color: P.paper,
  fontFamily: FONTS.sans,
  fontSize: 13,
  fontWeight: 500,
  padding: "9px 16px",
  border: "none",
  cursor: "pointer",
  borderRadius: 0,
};

const btnLime: CSSProperties = {
  background: P.lime,
  color: P.ink,
  fontFamily: FONTS.sans,
  fontSize: 14,
  fontWeight: 600,
  padding: "14px 24px",
  border: `1.5px solid ${P.ink}`,
  cursor: "pointer",
  borderRadius: 0,
  boxShadow: `4px 4px 0 ${P.ink}`,
  transition: "transform .12s, box-shadow .12s",
};

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect
        x="1"
        y="1"
        width="26"
        height="26"
        stroke={P.ink}
        strokeWidth={1.4}
      />
      <path
        d="M8 18 L14 8 L20 18"
        stroke={P.ink}
        strokeWidth={1.4}
        fill="none"
      />
      <rect x="12" y="12" width="4" height="4" fill={P.indigo} />
    </svg>
  );
}

function Nav() {
  return (
    <nav
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        padding: "20px 32px",
        borderBottom: `1px solid ${P.ink}`,
        background: P.paper,
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Mark />
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          SkillMaxxing<span style={{ color: P.indigo }}>/</span>
          <span style={{ color: P.inkFaint }}>v2.0</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 20,
          fontFamily: FONTS.mono,
          fontSize: 12,
          color: P.ink,
          justifyContent: "center",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        <a href="#method" style={linkStyle}>
          [01] method
        </a>
        <a href="#session" style={linkStyle}>
          [02] session
        </a>
        <a href="#skills" style={linkStyle}>
          [03] skills
        </a>
        <a href="#pricing" style={linkStyle}>
          [04] pricing
        </a>
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <a style={{ ...linkStyle, fontSize: 12 }}>SIGN IN</a>
        <button style={btnInk}>{COPY.ctaLabel} →</button>
      </div>
    </nav>
  );
}

function HeroOrnament() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 80,
        height: 80,
        background: P.indigo,
        borderRadius: "50%",
        alignSelf: "center",
      }}
    />
  );
}

function Hero() {
  return (
    <section style={{ borderBottom: `1px solid ${P.ink}` }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          padding: "12px 32px",
          fontFamily: FONTS.mono,
          fontSize: 11,
          color: P.inkFaint,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          borderBottom: `1px solid ${P.rule}`,
        }}
      >
        <span style={{ gridColumn: "span 3" }}>FILE — index.html</span>
        <span style={{ gridColumn: "span 3" }}>EDITION — 2026</span>
        <span style={{ gridColumn: "span 3" }}>STATUS — shipping</span>
        <span style={{ gridColumn: "span 3", textAlign: "right" }}>
          4.9★ · 12,400 LEARNERS
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          minHeight: 640,
        }}
      >
        <div
          style={{
            gridColumn: "span 1",
            borderRight: `1px solid ${P.rule}`,
            padding: "24px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {["§01", "§02", "§03", "§04"].map((s, i) => (
            <a
              key={s}
              href={["#hero", "#method", "#session", "#skills"][i]}
              style={{
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: i === 0 ? P.ink : P.inkFaint,
                fontWeight: i === 0 ? 700 : 400,
                textDecoration: "none",
              }}
            >
              {s}
            </a>
          ))}
        </div>
        <div
          id="hero"
          style={{
            gridColumn: "span 8",
            padding: "48px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: `1px solid ${P.rule}`,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                color: P.indigo,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              §01 — A new operating system for learning
            </div>
            <h1
              style={{
                fontFamily: FONTS.serif,
                fontWeight: 400,
                fontSize: COPY.headlineSize,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              {COPY.h1}
              <br />
              {COPY.h2}
              <br />
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: 12,
                }}
              >
                <span style={{ fontStyle: "italic" }}>{COPY.h3}</span>
                <HeroOrnament />
              </span>
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            <button
              style={btnLime}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-2px,-2px)";
                e.currentTarget.style.boxShadow = `6px 6px 0 ${P.ink}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = `4px 4px 0 ${P.ink}`;
              }}
            >
              {COPY.ctaLabel} — free
            </button>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: P.inkFaint,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              30s · no credit card
            </span>
          </div>
        </div>
        <div
          style={{
            gridColumn: "span 3",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "24px 20px",
              borderBottom: `1px solid ${P.rule}`,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: P.inkFaint,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 12,
              }}
            >
              Fig. 01 — Premise
            </div>
            <p
              style={{
                fontFamily: FONTS.serif,
                fontSize: 22,
                lineHeight: 1.25,
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {COPY.premise}
            </p>
          </div>
          <div
            style={{ padding: "24px 20px", flex: 1, background: P.cream }}
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: P.inkFaint,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 12,
              }}
            >
              Fig. 02 — Promise
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: P.ink,
                margin: 0,
              }}
            >
              SkillMaxxing builds the plan, runs the sessions, checks your work,
              and adapts. Twenty minutes a day. Something real, shipped, by the
              end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Tell us the skill",
      b: "Anything from microcontrollers to mortise-and-tenon joinery.",
      tone: "paper" as const,
    },
    {
      n: "02",
      t: "AI drafts the plan",
      b: "A real curriculum: concepts, drills, builds, reflection.",
      tone: "lime" as const,
    },
    {
      n: "03",
      t: "You learn in sessions",
      b: "20 focused minutes daily. We adapt to where you stall.",
      tone: "paper" as const,
    },
    {
      n: "04",
      t: "You ship something real",
      b: "Every plan ends in a portfolio piece. Proof you learned.",
      tone: "indigo" as const,
    },
  ];
  return (
    <section id="method" style={{ borderBottom: `1px solid ${P.ink}` }}>
      <div
        style={{
          padding: "32px 32px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderBottom: `1px solid ${P.rule}`,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: P.indigo,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            §02 — The method
          </div>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 56,
              fontWeight: 400,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Four movements.
          </h2>
        </div>
        <span
          style={{ fontFamily: FONTS.mono, fontSize: 11, color: P.inkFaint }}
        >
          ── 4 / 4 ──
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {steps.map((s, i) => {
          const bg =
            s.tone === "lime"
              ? P.lime
              : s.tone === "indigo"
                ? P.indigo
                : P.paperAlt;
          const fg = s.tone === "indigo" ? P.paper : P.ink;
          return (
            <div
              key={s.n}
              style={{
                padding: "28px 24px 32px",
                background: bg,
                color: fg,
                borderRight: i === 3 ? "none" : `1px solid ${P.ink}`,
                minHeight: 240,
                display: "flex",
                flexDirection: "column",
                transition: "transform .25s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 28,
                }}
              >
                Step {s.n} — of 04
              </div>
              <h3
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: 32,
                  fontWeight: 400,
                  margin: "0 0 12px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  flex: 1,
                }}
              >
                {s.t}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  opacity: s.tone === "indigo" ? 0.85 : 0.7,
                  margin: 0,
                }}
              >
                {s.b}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function LessonShowcase() {
  return (
    <section
      id="session"
      style={{ borderBottom: `1px solid ${P.ink}`, position: "relative" }}
    >
      <div
        style={{ padding: "32px 32px 16px", borderBottom: `1px solid ${P.rule}` }}
      >
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            color: P.indigo,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          §03 — A live session
        </div>
        <h2
          style={{
            fontFamily: FONTS.serif,
            fontSize: 72,
            fontWeight: 400,
            margin: 0,
            letterSpacing: "-0.025em",
            lineHeight: 0.95,
          }}
        >
          Not videos. <span style={{ fontStyle: "italic" }}>Sessions.</span>
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          minHeight: 560,
        }}
      >
        <div
          style={{
            gridColumn: "span 5",
            padding: "40px 32px",
            borderRight: `1px solid ${P.rule}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <p
            style={{
              fontFamily: FONTS.serif,
              fontSize: 26,
              lineHeight: 1.3,
              fontWeight: 400,
              margin: 0,
              letterSpacing: "-0.005em",
            }}
          >
            Each session is short, structured, and active — the AI explains a
            concept, drills it, then puts you to work building or reasoning.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {(
              [
                ["CONCEPT", "Memorable analogies, not paragraphs"],
                ["DRILL", "Spaced retrieval the next morning"],
                ["BUILD", "Real artifacts, with feedback"],
                ["REFLECT", "60-second journal closes the day"],
              ] as const
            ).map(([k, v]) => (
              <li
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 16,
                  padding: "14px 0",
                  borderTop: `1px solid ${P.rule}`,
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                  }}
                >
                  {k}
                </span>
                <span style={{ fontSize: 15, color: P.ink }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            gridColumn: "span 7",
            position: "relative",
            background: `repeating-linear-gradient(45deg, ${P.cream}, ${P.cream} 12px, ${P.paper} 12px, ${P.paper} 24px)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 32,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 24,
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: P.inkFaint,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Fig. 03 — Session view
          </div>
          <LessonCard width={460} />
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    {
      tag: "HARDWARE",
      title: "Robotics & embedded",
      n: "14 days",
      tone: "paper" as const,
    },
    {
      tag: "AROUND·THE·HOUSE",
      title: "Fix anything",
      n: "21 days",
      tone: "lime" as const,
    },
    {
      tag: "PRODUCT",
      title: "Product thinking",
      n: "30 days",
      tone: "paper" as const,
    },
    {
      tag: "DESIGN",
      title: "Visual design",
      n: "28 days",
      tone: "paper" as const,
    },
    {
      tag: "CRAFT",
      title: "Woodworking",
      n: "40 days",
      tone: "indigo" as const,
    },
    { tag: "CRAFT", title: "Pottery", n: "35 days", tone: "paper" as const },
  ];
  return (
    <section id="skills" style={{ borderBottom: `1px solid ${P.ink}` }}>
      <div
        style={{
          padding: "32px 32px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderBottom: `1px solid ${P.rule}`,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: P.indigo,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            §04 — The catalog
          </div>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 56,
              fontWeight: 400,
              margin: 0,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            Pick something hard.{" "}
            <span style={{ fontStyle: "italic" }}>Become someone new.</span>
          </h2>
        </div>
        <span
          style={{ fontFamily: FONTS.mono, fontSize: 11, color: P.inkFaint }}
        >
          06 of 80+ shown
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {skills.map((s, i) => {
          const bg =
            s.tone === "lime"
              ? P.lime
              : s.tone === "indigo"
                ? P.indigo
                : P.paperAlt;
          const fg = s.tone === "indigo" ? P.paper : P.ink;
          return (
            <article
              key={s.title}
              style={{
                padding: "24px 24px 28px",
                background: bg,
                color: fg,
                borderRight: i % 3 === 2 ? "none" : `1px solid ${P.rule}`,
                borderBottom: i < 3 ? `1px solid ${P.rule}` : "none",
                minHeight: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
                cursor: "pointer",
                transition: "transform .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  opacity: 0.7,
                }}
              >
                <span>{s.tag}</span>
                <span>· {s.n}</span>
              </div>
              <h3
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: 36,
                  fontWeight: 400,
                  margin: 0,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                }}
              >
                {s.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ opacity: 0.6 }}>VIEW PLAN</span>
                <span>→</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Curious",
      price: "$0",
      sub: "forever",
      bullets: ["One active plan", "7-day plan length", "Core lesson formats"],
      cta: "Start free",
      tone: "paper" as const,
    },
    {
      name: "Maxxer",
      price: "$14",
      sub: "mo · billed yearly",
      bullets: [
        "Unlimited plans",
        "Unlimited length",
        "Adaptive review",
        "Build feedback",
        "Export to PDF",
      ],
      cta: "Start trial",
      tone: "lime" as const,
    },
    {
      name: "Studio",
      price: "$39",
      sub: "mo",
      bullets: [
        "Everything in Maxxer",
        "Bring-your-own curriculum",
        "1:1 expert reviews",
        "Cohort mode",
      ],
      cta: "Talk to us",
      tone: "ink" as const,
    },
  ];
  return (
    <section id="pricing" style={{ borderBottom: `1px solid ${P.ink}` }}>
      <div
        style={{
          padding: "32px 32px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderBottom: `1px solid ${P.rule}`,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: P.indigo,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            §05 — The price list
          </div>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 56,
              fontWeight: 400,
              margin: 0,
              letterSpacing: "-0.025em",
            }}
          >
            Cheaper than the books
            <br />
            <span style={{ fontStyle: "italic" }}>
              you weren&apos;t going to finish.
            </span>
          </h2>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {tiers.map((tier, i) => {
          const bg =
            tier.tone === "lime"
              ? P.lime
              : tier.tone === "ink"
                ? P.ink
                : P.paperAlt;
          const fg = tier.tone === "ink" ? P.paper : P.ink;
          const ruleColor =
            tier.tone === "ink" ? "rgba(244,241,234,0.18)" : P.rule;
          return (
            <div
              key={tier.name}
              style={{
                padding: "32px 28px",
                background: bg,
                color: fg,
                borderRight: i === 2 ? "none" : `1px solid ${P.rule}`,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                minHeight: 460,
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                }}
              >
                <span>TIER · {String(i + 1).padStart(2, "0")}</span>
                {tier.tone === "lime" && <span>★ MOST PICKED</span>}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONTS.serif,
                    fontSize: 40,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {tier.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 6,
                    marginTop: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONTS.serif,
                      fontSize: 64,
                      fontWeight: 400,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: 11,
                      opacity: 0.6,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    / {tier.sub}
                  </span>
                </div>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  flex: 1,
                  borderTop: `1px solid ${ruleColor}`,
                }}
              >
                {tier.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "24px 1fr",
                      gap: 8,
                      padding: "10px 0",
                      borderBottom: `1px solid ${ruleColor}`,
                      fontSize: 13.5,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: 11,
                        opacity: 0.5,
                      }}
                    >
                      +
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                style={{
                  ...btnInk,
                  background: tier.tone === "ink" ? P.lime : P.ink,
                  color: tier.tone === "ink" ? P.ink : P.paper,
                  padding: "12px 16px",
                  fontSize: 13,
                  marginTop: 8,
                }}
              >
                {tier.cta} →
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number>(0);
  const qs: [string, string][] = [
    [
      "Is this just ChatGPT with a wrapper?",
      "No. SkillMaxxing builds a structured curriculum, tracks where you stall, schedules retrieval drills, and reviews real artifacts (code, photos of your build, written work). The AI is the engine — but the system around it is the product.",
    ],
    [
      "How long does a plan take?",
      "Plans range from 7 days (a single concept) to 60+ days (a full discipline). Each session is 20 minutes. You set the pace; the plan flexes.",
    ],
    [
      "Can I bring my own curriculum?",
      "On Studio, yes — paste in a syllabus, a book, or your own notes and the AI will turn it into sessions.",
    ],
    [
      "What happens if I miss a day?",
      "Nothing dramatic. Your streak pauses, the plan reshuffles, and tomorrow picks up where you left off. We don't shame you.",
    ],
  ];
  return (
    <section style={{ borderBottom: `1px solid ${P.ink}` }}>
      <div
        style={{ padding: "32px 32px 16px", borderBottom: `1px solid ${P.rule}` }}
      >
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            color: P.indigo,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          §06 — Questions
        </div>
        <h2
          style={{
            fontFamily: FONTS.serif,
            fontSize: 56,
            fontWeight: 400,
            margin: 0,
            letterSpacing: "-0.025em",
          }}
        >
          Asked, answered.
        </h2>
      </div>
      <div>
        {qs.map(([q, a], i) => (
          <div
            key={q}
            style={{
              borderBottom:
                i === qs.length - 1 ? "none" : `1px solid ${P.rule}`,
            }}
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                width: "100%",
                padding: "24px 32px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "grid",
                gridTemplateColumns: "60px 1fr 40px",
                alignItems: "baseline",
                gap: 16,
                textAlign: "left",
                color: P.ink,
                fontFamily: FONTS.sans,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 12,
                  color: P.inkFaint,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: 28,
                  letterSpacing: "-0.01em",
                }}
              >
                {q}
              </span>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 18,
                  color: P.indigo,
                  textAlign: "right",
                  transform: open === i ? "rotate(45deg)" : "none",
                  transition: "transform .2s",
                  display: "inline-block",
                }}
              >
                +
              </span>
            </button>
            {open === i && (
              <div
                style={{
                  padding: "0 32px 28px",
                  display: "grid",
                  gridTemplateColumns: "60px 1fr 40px",
                  gap: 16,
                }}
              >
                <span />
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: P.inkSoft,
                    margin: 0,
                    maxWidth: 720,
                  }}
                >
                  {a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      style={{
        background: P.ink,
        color: P.paper,
        padding: "80px 32px",
        borderBottom: `1px solid ${P.ink}`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div style={{ gridColumn: "span 8" }}>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: P.lime,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            §07 — Begin
          </div>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 96,
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Pick a skill.
            <br />
            <span style={{ fontStyle: "italic", color: P.lime }}>
              Be different by Friday.
            </span>
          </h2>
        </div>
        <div
          style={{
            gridColumn: "span 4",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            alignItems: "flex-start",
          }}
        >
          <button
            style={{ ...btnLime, padding: "18px 28px", fontSize: 16 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-2px,-2px)";
              e.currentTarget.style.boxShadow = `6px 6px 0 ${P.ink}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = `4px 4px 0 ${P.ink}`;
            }}
          >
            {COPY.ctaLabel} — free
          </button>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: P.paper + "a0",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            30s · no card · cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        padding: "24px 32px",
        fontFamily: FONTS.mono,
        fontSize: 11,
        color: P.inkFaint,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      <span style={{ gridColumn: "span 4" }}>© 2026 SkillMaxxing, Inc.</span>
      <span style={{ gridColumn: "span 4", textAlign: "center" }}>
        For the perpetually curious
      </span>
      <span style={{ gridColumn: "span 4", textAlign: "right" }}>
        hello@skillmaxxing.com
      </span>
    </footer>
  );
}

export function Landing() {
  return (
    <div
      style={{
        background: P.paper,
        color: P.ink,
        fontFamily: FONTS.sans,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Nav />
      <Hero />
      <HowItWorks />
      <LessonShowcase />
      <Skills />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
