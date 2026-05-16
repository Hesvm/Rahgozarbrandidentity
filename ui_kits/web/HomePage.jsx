function HomePage({ onSelectCountry }) {
  return (
    <main style={{
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 min(7vw, 80px)",
      // Atmospheric dawn glow on the hero only
      background: "radial-gradient(60% 50% at 50% 0%, rgba(116,204,188,0.10) 0%, transparent 65%)",
    }}>
      {/* Hero */}
      <section style={{
        textAlign: "center",
        padding: "120px 0 80px",
      }}>
        <h1 style={{
          fontFamily: "var(--font-fa)",
          fontSize: 64,
          fontWeight: 700,
          color: "var(--fg-1)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          margin: 0,
        }}>
          همراه مهاجران ایرانی
        </h1>
        <p style={{
          fontFamily: "var(--font-fa)",
          fontSize: 20,
          color: "var(--fg-3)",
          marginTop: 18,
          lineHeight: 1.85,
        }}>
          پلتفرم جامعه و ویکی برای مهاجران ایرانی
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 36 }}>
          <Button variant="primary" size="lg" style={{ borderRadius: "var(--radius-md)", padding: "16px 32px" }}>
            شروع رایگان
          </Button>
          <Button variant="outline" size="lg" style={{ borderRadius: "var(--radius-md)", padding: "16px 32px", borderWidth: 1.5 }}>
            کامیونیتی‌ها
          </Button>
        </div>
      </section>

      {/* Countries directory */}
      <section style={{ padding: "60px 0 120px" }}>
        <h2 style={{
          fontFamily: "var(--font-fa)",
          fontSize: 40,
          fontWeight: 700,
          color: "var(--fg-1)",
          letterSpacing: "-0.02em",
          margin: "0 0 36px",
        }}>
          کشورها
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 16,
        }}>
          {window.RG_COUNTRIES.map((c) => (
            <CountryTile key={c.id} country={c} onClick={() => onSelectCountry(c.id)} />
          ))}
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomePage });
