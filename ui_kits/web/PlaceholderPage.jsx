function PlaceholderPage({ title, subtitle }) {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "120px min(7vw, 80px) 120px", textAlign: "center" }}>
      <img src="../../assets/logo-mark.png" width="64" height="64" alt="" style={{ opacity: 0.9, marginBottom: 24 }} />
      <h1 style={{
        fontFamily: "var(--font-fa)", fontSize: 40, fontWeight: 700,
        color: "var(--fg-1)", letterSpacing: "-0.02em", margin: "0 0 14px",
      }}>{title}</h1>
      <p style={{
        fontFamily: "var(--font-fa)", fontSize: 18, color: "var(--fg-3)",
        lineHeight: 2, margin: 0,
      }}>{subtitle}</p>
    </main>
  );
}
Object.assign(window, { PlaceholderPage });
