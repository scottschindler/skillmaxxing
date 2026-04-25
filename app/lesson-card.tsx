"use client";

import { useEffect, useState, type CSSProperties } from "react";

type ConceptStep = {
  kind: "concept";
  label: string;
  title: string;
  body: string;
  diagram: "circuit";
};
type QuizStep = {
  kind: "quiz";
  label: string;
  title: string;
  options: string[];
  correct: number;
};
type BuildStep = {
  kind: "build";
  label: string;
  title: string;
  body: string;
  diagram: "breadboard";
};
type ThinkingStep = { kind: "thinking"; label: string; body: string };
type ReflectStep = { kind: "reflect"; label: string; title: string; body: string };
type Step = ThinkingStep | ConceptStep | QuizStep | BuildStep | ReflectStep;

const LESSON_STEPS: Step[] = [
  {
    kind: "thinking",
    label: "AI · planning your path",
    body: 'Building a 14-day plan for "Hardware prototyping"…',
  },
  {
    kind: "concept",
    label: "Day 03 · Concept",
    title: "Voltage, current & the water analogy",
    body: "Think of a circuit as a closed loop of water. Voltage is pressure, current is flow rate, resistance is the pipe's width.",
    diagram: "circuit",
  },
  {
    kind: "quiz",
    label: "Day 03 · Check",
    title: "If you halve the resistance, current will…",
    options: ["Halve", "Stay the same", "Double", "Quadruple"],
    correct: 2,
  },
  {
    kind: "build",
    label: "Day 03 · Build",
    title: "Wire an LED with the right resistor",
    body: "Drag the 220Ω resistor between the 5V rail and the LED anode.",
    diagram: "breadboard",
  },
  {
    kind: "reflect",
    label: "Day 03 · Reflect",
    title: "You shipped today.",
    body: "+45 XP · 3-day streak · Tomorrow: soldering basics",
  },
];

const PALETTE = {
  card: "#ffffff",
  text: "#1a1a1a",
  muted: "rgba(0,0,0,0.12)",
  sub: "rgba(0,0,0,0.55)",
  accent: "#3d3df5",
  accent2: "#c8ff5e",
  hairline: "rgba(0,0,0,0.12)",
  chipBg: "#1a1a1a",
  chipText: "#c8ff5e",
};

const HEADER_FONT =
  'var(--font-instrument-serif), "Times New Roman", serif';
const BODY_FONT =
  'var(--font-inter), -apple-system, system-ui, sans-serif';

function CircuitDiagram() {
  return (
    <svg viewBox="0 0 220 90" width="100%" style={{ display: "block" }}>
      <g fill="none" stroke="#1a1814" strokeWidth={1.4} strokeLinecap="round">
        <rect x="6" y="20" width="208" height="50" rx="4" opacity={0.15} />
        <line x1="30" y1="38" x2="30" y2="52" strokeWidth={2.4} />
        <line x1="36" y1="32" x2="36" y2="58" />
        <path d="M30,38 L30,20 L190,20 L190,38" />
        <path d="M36,52 L36,70 L190,70 L190,52" />
        <path d="M150,38 l6,-5 l8,10 l8,-10 l8,10 l8,-10 l6,5" />
        <circle cx="190" cy="45" r="7" />
        <path
          d="M186,42 L194,48 M194,42 L186,48"
          strokeWidth={0.8}
          opacity={0.5}
        />
        <path d="M196,38 l4,-3 M198,42 l4,-3" strokeWidth={1} />
      </g>
    </svg>
  );
}

function BreadboardDiagram() {
  return (
    <svg viewBox="0 0 220 90" width="100%" style={{ display: "block" }}>
      <rect
        x="6"
        y="10"
        width="208"
        height="70"
        rx={6}
        fill="none"
        stroke="#1a1814"
        strokeWidth={1}
        opacity={0.25}
      />
      {Array.from({ length: 18 }).map((_, c) =>
        Array.from({ length: 5 }).map((_, r) => (
          <circle
            key={`${c}-${r}`}
            cx={18 + c * 11}
            cy={20 + r * 12}
            r={1.2}
            fill="#1a1814"
            opacity={0.35}
          />
        ))
      )}
      <rect x="62" y="36" width="44" height="8" rx={2} fill={PALETTE.accent2} />
      <line x1="58" y1="40" x2="62" y2="40" stroke="#1a1814" strokeWidth={1.5} />
      <line
        x1="106"
        y1="40"
        x2="120"
        y2="40"
        stroke="#1a1814"
        strokeWidth={1.5}
      />
      <circle
        cx="140"
        cy="40"
        r={5}
        fill={PALETTE.accent2}
        stroke="#1a1814"
        strokeWidth={1}
      />
      <circle cx="140" cy="40" r={2} fill="#fff" opacity={0.7} />
    </svg>
  );
}

function StepDots({ count, active }: { count: number; active: number }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      {Array.from({ length: count }).map((_, idx) => (
        <span
          key={idx}
          style={{
            width: idx === active ? 22 : 6,
            height: 6,
            borderRadius: 999,
            background: idx === active ? PALETTE.accent : PALETTE.muted,
            transition: "all .35s cubic-bezier(.2,.7,.3,1)",
          }}
        />
      ))}
    </div>
  );
}

function ThinkingDots() {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center", height: 22 }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: PALETTE.accent,
            animation: `lc-bounce 1.1s ${i * 0.15}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

function PlanShimmer() {
  const rows = [
    { label: "Day 01 · What is a circuit?", pct: 100 },
    { label: "Day 02 · Multimeter basics", pct: 100 },
    { label: "Day 03 · Voltage & current", pct: 60 },
    { label: "Day 04 · Soldering", pct: 0 },
    { label: "Day 05 · Your first PCB", pct: 0 },
  ];
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: "14px 0 0",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {rows.map((r, i) => (
        <li
          key={r.label}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 8,
            alignItems: "center",
            fontSize: 12,
            color: PALETTE.sub,
            opacity: 0,
            animation: `lc-in .45s ${0.18 + i * 0.08}s cubic-bezier(.2,.7,.3,1) both`,
          }}
        >
          <span
            style={{
              position: "relative",
              height: 6,
              background: PALETTE.muted,
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: 0,
                width: `${r.pct}%`,
                background: PALETTE.accent,
                borderRadius: 999,
                transition: "width .8s cubic-bezier(.2,.7,.3,1)",
              }}
            />
          </span>
          <span
            style={{ fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}
          >
            {r.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div
      style={{
        flex: "1 1 auto",
        minWidth: 92,
        padding: "10px 12px",
        borderRadius: 10,
        border: `1px solid ${PALETTE.hairline}`,
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>
        {k}
      </div>
      <div style={{ fontSize: 11, color: PALETTE.sub, marginTop: 2 }}>{v}</div>
    </div>
  );
}

function StepBody({
  step,
  quizPick,
  setQuizPick,
}: {
  step: Step;
  quizPick: number | null;
  setQuizPick: (n: number) => void;
}) {
  return (
    <div
      key={step.kind + step.label}
      style={{ animation: "lc-in .45s cubic-bezier(.2,.7,.3,1) both" }}
    >
      {step.kind === "thinking" && (
        <div>
          <ThinkingDots />
          <p style={{ margin: "14px 0 0", color: PALETTE.sub, fontSize: 14 }}>
            {step.body}
          </p>
          <PlanShimmer />
        </div>
      )}
      {step.kind === "concept" && (
        <div>
          <h3
            style={{
              fontFamily: HEADER_FONT,
              fontSize: 26,
              lineHeight: 1.15,
              fontWeight: 400,
              margin: "6px 0 10px",
              letterSpacing: "-0.01em",
            }}
          >
            {step.title}
          </h3>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: 14,
              color: PALETTE.sub,
              lineHeight: 1.5,
            }}
          >
            {step.body}
          </p>
          <div
            style={{
              background: "rgba(26,24,20,0.03)",
              borderRadius: 10,
              padding: 12,
              color: PALETTE.text,
            }}
          >
            <CircuitDiagram />
          </div>
        </div>
      )}
      {step.kind === "quiz" && (
        <div>
          <h3
            style={{
              fontFamily: HEADER_FONT,
              fontSize: 22,
              lineHeight: 1.2,
              fontWeight: 400,
              margin: "6px 0 14px",
              letterSpacing: "-0.01em",
            }}
          >
            {step.title}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
            }}
          >
            {step.options.map((opt, idx) => {
              const picked = quizPick === idx;
              const isCorrect = idx === step.correct;
              const reveal = quizPick !== null;
              const bg =
                reveal && isCorrect
                  ? PALETTE.accent
                  : reveal && picked
                    ? "#ff6b6b"
                    : "transparent";
              const fg =
                reveal && isCorrect
                  ? "#ffffff"
                  : reveal && picked
                    ? "#fff"
                    : PALETTE.text;
              return (
                <button
                  key={opt}
                  onClick={() => setQuizPick(idx)}
                  style={{
                    fontFamily: "inherit",
                    textAlign: "left",
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: `1px solid ${reveal && isCorrect ? PALETTE.accent : PALETTE.hairline}`,
                    background: bg,
                    color: fg,
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all .25s",
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {quizPick !== null && (
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 12,
                color: PALETTE.sub,
                animation: "lc-in .3s ease both",
              }}
            >
              Yes — half resistance, double current. Ohm&apos;s law.
            </p>
          )}
        </div>
      )}
      {step.kind === "build" && (
        <div>
          <h3
            style={{
              fontFamily: HEADER_FONT,
              fontSize: 22,
              lineHeight: 1.2,
              fontWeight: 400,
              margin: "6px 0 10px",
              letterSpacing: "-0.01em",
            }}
          >
            {step.title}
          </h3>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: 13,
              color: PALETTE.sub,
              lineHeight: 1.5,
            }}
          >
            {step.body}
          </p>
          <div
            style={{
              background: "rgba(26,24,20,0.03)",
              borderRadius: 10,
              padding: 12,
            }}
          >
            <BreadboardDiagram />
          </div>
        </div>
      )}
      {step.kind === "reflect" && (
        <div>
          <h3
            style={{
              fontFamily: HEADER_FONT,
              fontSize: 30,
              lineHeight: 1.1,
              fontWeight: 400,
              margin: "6px 0 14px",
              letterSpacing: "-0.015em",
            }}
          >
            {step.title}
          </h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Stat k="+45" v="XP earned" />
            <Stat k="3d" v="Streak" />
            <Stat k="14%" v="of plan complete" />
          </div>
          <p style={{ margin: "14px 0 0", fontSize: 13, color: PALETTE.sub }}>
            Tomorrow:{" "}
            <span style={{ color: PALETTE.text }}>soldering basics</span>
          </p>
        </div>
      )}
    </div>
  );
}

const iconBtn: CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: 999,
  background: "transparent",
  color: PALETTE.text,
  border: `1px solid ${PALETTE.hairline}`,
  cursor: "pointer",
  fontSize: 16,
  lineHeight: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export function LessonCard({ width = 460 }: { width?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [quizPick, setQuizPick] = useState<number | null>(null);
  const step = LESSON_STEPS[i];

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(
      () => setI((v) => (v + 1) % LESSON_STEPS.length),
      3400
    );
    return () => clearTimeout(t);
  }, [i, paused]);

  useEffect(() => {
    setQuizPick(null);
  }, [i]);

  useEffect(() => {
    if (step.kind !== "quiz") return;
    const t = setTimeout(() => setQuizPick(step.correct), 1500);
    return () => clearTimeout(t);
  }, [i, step]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        width,
        maxWidth: "100%",
        background: PALETTE.card,
        color: PALETTE.text,
        borderRadius: 18,
        padding: "22px 22px 18px",
        boxShadow:
          "0 30px 80px -30px rgba(26,24,20,0.35), 0 0 0 1px rgba(26,24,20,0.04)",
        fontFamily: BODY_FONT,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: PALETTE.chipBg,
            color: PALETTE.chipText,
            padding: "5px 9px",
            borderRadius: 999,
            fontWeight: 600,
          }}
        >
          {step.label}
        </span>
        <span
          style={{
            fontSize: 11,
            color: PALETTE.sub,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          0{i + 1} / 0{LESSON_STEPS.length}
        </span>
      </div>

      <div style={{ minHeight: 220 }}>
        <StepBody step={step} quizPick={quizPick} setQuizPick={setQuizPick} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 14,
          paddingTop: 14,
          borderTop: `1px solid ${PALETTE.hairline}`,
        }}
      >
        <StepDots count={LESSON_STEPS.length} active={i} />
        <div style={{ display: "flex", gap: 6 }}>
          <button
            onClick={() =>
              setI((v) => (v - 1 + LESSON_STEPS.length) % LESSON_STEPS.length)
            }
            style={iconBtn}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setI((v) => (v + 1) % LESSON_STEPS.length)}
            style={iconBtn}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
