function CountryPage({ countryId, onBack }) {
  const country = window.RG_COUNTRIES.find((c) => c.id === countryId);
  const detail = window.RG_COUNTRY_DETAIL[countryId];
  const sectionsRef = React.useRef({});
  const [activeId, setActiveId] = React.useState(detail?.sections[0]?.id || null);

  const scrollTo = (id) => {
    const el = sectionsRef.current[id];
    if (el) {
      el.parentElement.scrollTo({ top: el.offsetTop - 24, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (!country) return null;

  return (
    <main style={{ maxWidth: 1240, margin: "0 auto", padding: "48px min(7vw, 80px) 80px" }}>
      {/* Country header */}
      <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 36 }}>
        <span style={{ fontSize: 56, lineHeight: 1 }}>{country.flag}</span>
        <div>
          <h1 style={{
            fontFamily: "var(--font-fa)",
            fontSize: 52,
            fontWeight: 700,
            color: "var(--fg-1)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: 0,
          }}>
            {country.fa}
          </h1>
          <div style={{
            fontFamily: "var(--font-en)",
            fontSize: 15,
            color: "var(--teal-600)",
            marginTop: 6,
          }}>
            {country.en}
          </div>
        </div>
      </div>

      {/* Section nav — chips */}
      {detail && (
        <div style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 56,
          paddingBottom: 8,
        }}>
          {detail.sections.map((s) => (
            <Chip key={s.id} active={activeId === s.id} onClick={() => scrollTo(s.id)}>
              {s.label}
            </Chip>
          ))}
        </div>
      )}

      {/* Sections */}
      {detail ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {detail.sections.map((s) => (
            <section
              key={s.id}
              ref={(el) => (sectionsRef.current[s.id] = el)}
              onMouseEnter={() => setActiveId(s.id)}
            >
              <h2 style={{
                fontFamily: "var(--font-fa)",
                fontSize: 28,
                fontWeight: 700,
                color: "var(--fg-1)",
                margin: "0 0 18px",
              }}>
                {s.label}
              </h2>
              <div style={{
                background: "var(--fog-50)",
                border: "1px solid var(--border-soft)",
                borderRadius: "var(--radius-lg)",
                padding: "26px 30px",
                color: "var(--fg-2)",
                fontFamily: "var(--font-fa)",
                fontSize: 16,
                lineHeight: 2,
              }}>
                <BoldifyPersian text={s.body} />
              </div>
            </section>
          ))}
        </div>
      ) : (
        <EmptyCountry name={country.fa} />
      )}

      <button
        onClick={onBack}
        style={{
          marginTop: 80,
          background: "transparent", border: 0, cursor: "pointer",
          color: "var(--fg-3)", fontFamily: "var(--font-fa)", fontSize: 15,
          display: "inline-flex", alignItems: "center", gap: 8,
        }}
      >
        <IconArrowR size={16} />
        بازگشت به فهرست کشورها
      </button>
    </main>
  );
}

// Renders *bold* markers as <strong> on graphite-900
function BoldifyPersian({ text }) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1
          ? <strong key={i} style={{ color: "var(--fg-1)", fontWeight: 700 }}>{p}</strong>
          : <React.Fragment key={i}>{p}</React.Fragment>
      )}
    </>
  );
}

function EmptyCountry({ name }) {
  return (
    <div style={{
      padding: "80px 24px",
      textAlign: "center",
      background: "var(--bg-elevated)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-xl)",
      maxWidth: 640,
      margin: "0 auto",
    }}>
      <img src="../../assets/logo-mark.png" width="56" height="56" alt="" style={{ opacity: 0.85, marginBottom: 18 }} />
      <h3 style={{ fontFamily: "var(--font-fa)", fontSize: 22, fontWeight: 600, color: "var(--fg-1)", margin: "0 0 8px" }}>
        راهنمای {name} در راه است
      </h3>
      <p style={{ fontFamily: "var(--font-fa)", fontSize: 16, color: "var(--fg-3)", lineHeight: 2, margin: 0 }}>
        تیم تحریریه در حال آماده‌سازی محتواست. به‌زودی این صفحه با اطلاعات کامل به‌روزرسانی می‌شود.
      </p>
    </div>
  );
}

Object.assign(window, { CountryPage });
