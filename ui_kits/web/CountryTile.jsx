function CountryTile({ country, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--bg-elevated)",
        border: `1px solid ${hover ? "var(--border-default)" : "var(--border-soft)"}`,
        borderRadius: "var(--radius-md)",
        padding: "22px 22px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        cursor: "pointer",
        boxShadow: hover ? "var(--shadow-2)" : "var(--shadow-1)",
        transition: "box-shadow var(--dur-base) var(--ease-drift), border-color var(--dur-base)",
        fontFamily: "inherit",
      }}
    >
      <span style={{ fontSize: 30, lineHeight: 1 }}>{country.flag}</span>
      <span style={{ fontFamily: "var(--font-fa)", fontSize: 18, fontWeight: 600, color: "var(--fg-1)" }}>
        {country.fa}
      </span>
    </button>
  );
}
Object.assign(window, { CountryTile });
