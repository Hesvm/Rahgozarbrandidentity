function SignInModal({ onClose }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(15, 26, 24, 0.32)",
        display: "grid", placeItems: "center",
        padding: 24,
        animation: "rgFadeIn var(--dur-base) var(--ease-drift)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg-elevated)",
          borderRadius: "var(--radius-xl)",
          padding: 40,
          width: "100%",
          maxWidth: 440,
          boxShadow: "var(--shadow-4)",
          position: "relative",
          animation: "rgRise var(--dur-slow) var(--ease-rise)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="close"
          style={{
            position: "absolute", top: 14, insetInlineEnd: 14,
            width: 36, height: 36,
            display: "grid", placeItems: "center",
            background: "transparent", border: 0, cursor: "pointer",
            color: "var(--fg-3)", borderRadius: "var(--radius-pill)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-muted)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <IconClose size={18} />
        </button>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginBottom: 28 }}>
          <img src="../../assets/logo-mark.png" width="48" height="48" alt="" />
          <h2 style={{ fontFamily: "var(--font-fa)", fontSize: 24, fontWeight: 700, color: "var(--fg-1)", margin: 0 }}>
            خوش آمدید
          </h2>
          <p style={{ fontFamily: "var(--font-fa)", fontSize: 14, color: "var(--fg-3)", margin: 0 }}>
            با ایمیل خود وارد رهگذر شوید
          </p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); onClose(); }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          <Field
            label="ایمیل"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            label="رمز عبور"
            type="password"
            placeholder="حداقل ۸ کاراکتر"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            style={{ width: "100%", justifyContent: "center", borderRadius: "var(--radius-md)", marginTop: 6 }}
          >
            ادامه
          </Button>
        </form>

        <p style={{
          fontFamily: "var(--font-fa)", fontSize: 13, color: "var(--fg-4)",
          textAlign: "center", marginTop: 20, marginBottom: 0,
        }}>
          حساب ندارید؟ <a href="#" style={{ color: "var(--teal-600)", textDecoration: "none", fontWeight: 500 }}>ثبت‌نام رایگان</a>
        </p>
      </div>
    </div>
  );
}
Object.assign(window, { SignInModal });
