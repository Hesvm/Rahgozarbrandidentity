function TopNav({ currentRoute, onNavigate, onSignIn }) {
  const links = [
    { id: "wiki",        label: "ویکی‌کشور" },
    { id: "roadmap",     label: "نقشه‌راه" },
    { id: "communities", label: "کامیونیتی‌ها" },
    { id: "quiz",        label: "آزمون" },
  ];
  const isHome = currentRoute === "home" || currentRoute.startsWith("country");
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 48px",
      background: "rgba(250, 248, 244, 0.85)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-soft)",
    }}>
      {/* Brand — RTL means logo sits at the right of the bar */}
      <button
        onClick={() => onNavigate("home")}
        style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "transparent", border: 0, cursor: "pointer", padding: 0,
        }}
      >
        <img src="../../assets/logo-mark.png" width="32" height="32" alt="" />
        <span style={{ fontFamily: "var(--font-fa)", fontSize: 22, fontWeight: 700, color: "var(--fg-1)" }}>
          رهگذر
        </span>
      </button>

      <nav style={{ display: "flex", gap: 32 }}>
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => onNavigate(l.id)}
            style={{
              fontFamily: "var(--font-fa)",
              fontSize: 15,
              fontWeight: (currentRoute === l.id || (l.id === "wiki" && isHome)) ? 600 : 400,
              color: (currentRoute === l.id || (l.id === "wiki" && isHome)) ? "var(--fg-1)" : "var(--fg-2)",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              padding: "6px 0",
            }}
          >
            {l.label}
          </button>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          aria-label="search"
          style={{
            width: 38, height: 38, display: "grid", placeItems: "center",
            borderRadius: "var(--radius-pill)", background: "transparent", border: 0,
            color: "var(--fg-2)", cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <IconSearch size={20} />
        </button>
        <Button onClick={onSignIn} variant="primary" size="sm" style={{ borderRadius: "var(--radius-md)" }}>
          ورود
        </Button>
      </div>
    </header>
  );
}

Object.assign(window, { TopNav });
