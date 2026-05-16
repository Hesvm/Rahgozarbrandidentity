// Button — primary / outline / ghost
function Button({ variant = "primary", size = "md", children, leadingIcon, trailingIcon, style, ...rest }) {
  const base = {
    fontFamily: "var(--font-fa)",
    fontWeight: 500,
    border: "1px solid transparent",
    borderRadius: size === "lg" ? "var(--radius-lg)" : "var(--radius-pill)",
    padding: size === "lg" ? "16px 26px" : size === "sm" ? "9px 16px" : "12px 22px",
    fontSize: size === "lg" ? 18 : size === "sm" ? 14 : 16,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    lineHeight: 1,
    transition: "background var(--dur-base) var(--ease-drift), border-color var(--dur-base), box-shadow var(--dur-base)",
    userSelect: "none",
  };
  const variants = {
    primary: { background: "var(--teal-500)", color: "#FFFFFF" },
    outline: { background: "transparent", color: "var(--teal-600)", borderColor: "var(--teal-500)" },
    ghost:   { background: "transparent", color: "var(--fg-1)" },
    soft:    { background: "var(--bg-elevated)", color: "var(--fg-1)", borderColor: "var(--border-default)" },
  };
  return (
    <button
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        if (variant === "primary") e.currentTarget.style.background = "var(--teal-600)";
        if (variant === "outline") e.currentTarget.style.background = "var(--bg-brand-faint)";
        if (variant === "ghost")   e.currentTarget.style.background = "var(--bg-muted)";
        if (variant === "soft")    e.currentTarget.style.boxShadow = "var(--shadow-2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = variants[variant].background;
        e.currentTarget.style.boxShadow = "none";
      }}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}

// Text field
function Field({ label, error, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: "block" }}>
      {label && (
        <div style={{ fontSize: 13, color: "var(--fg-3)", marginBottom: 8, fontFamily: "var(--font-fa)" }}>
          {label}
        </div>
      )}
      <input
        {...rest}
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e)  => { setFocused(false); rest.onBlur?.(e); }}
        style={{
          width: "100%",
          background: "var(--bg-elevated)",
          border: `1px solid ${error ? "var(--danger)" : focused ? "var(--teal-500)" : "var(--border-default)"}`,
          borderRadius: "var(--radius-md)",
          padding: "14px 18px",
          fontFamily: "var(--font-fa)",
          fontSize: 16,
          color: "var(--fg-1)",
          outline: "none",
          boxSizing: "border-box",
          boxShadow: focused ? "var(--shadow-glow-brand)" : "none",
          transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
        }}
      />
      {error && <div style={{ marginTop: 6, fontSize: 13, color: "var(--danger)", fontFamily: "var(--font-fa)" }}>{error}</div>}
    </label>
  );
}

// Chip — used in section nav
function Chip({ active, children, ...rest }) {
  return (
    <button
      {...rest}
      style={{
        fontFamily: "var(--font-fa)",
        fontSize: 14,
        padding: "9px 16px",
        borderRadius: "var(--radius-pill)",
        background: active ? "var(--graphite-900)" : "var(--bg-elevated)",
        color: active ? "#F4F1EA" : "var(--fg-2)",
        border: `1px solid ${active ? "var(--graphite-900)" : "var(--border-default)"}`,
        cursor: "pointer",
        lineHeight: 1,
        whiteSpace: "nowrap",
        transition: "background var(--dur-base), color var(--dur-base), border-color var(--dur-base)",
      }}
    >
      {children}
    </button>
  );
}

// Badge — small inline tags
function Badge({ tone = "brand", children }) {
  const tones = {
    brand:   { bg: "var(--bg-brand-faint)", fg: "var(--teal-700)" },
    neutral: { bg: "var(--fog-100)",       fg: "var(--fg-3)" },
    warning: { bg: "#F5E8D8",              fg: "#8C5A20" },
    danger:  { bg: "#FBE9E9",              fg: "#9C4646" },
  }[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontFamily: "var(--font-en)", fontSize: 11, fontWeight: 500,
      padding: "4px 10px", borderRadius: "var(--radius-pill)",
      background: tones.bg, color: tones.fg,
    }}>{children}</span>
  );
}

Object.assign(window, { Button, Field, Chip, Badge });
