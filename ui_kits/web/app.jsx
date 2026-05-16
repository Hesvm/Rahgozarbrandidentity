function App() {
  // simple route state: "home" | "country/<id>" | "roadmap" | "communities" | "quiz"
  const [route, setRoute] = React.useState("home");
  const [signInOpen, setSignInOpen] = React.useState(false);

  const navigate = (id) => {
    if (id === "wiki") setRoute("home");
    else setRoute(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const goCountry = (id) => {
    setRoute(`country/${id}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  let view;
  if (route === "home") {
    view = <HomePage onSelectCountry={goCountry} />;
  } else if (route.startsWith("country/")) {
    view = <CountryPage countryId={route.split("/")[1]} onBack={() => navigate("home")} />;
  } else if (route === "roadmap") {
    view = <PlaceholderPage title="نقشه‌راه مهاجرت" subtitle="یک مسیر شخصی‌شده برای انتخاب کشور، ویزا، و گام‌های بعدی. به‌زودی." />;
  } else if (route === "communities") {
    view = <PlaceholderPage title="کامیونیتی‌ها" subtitle="فضاهای امن گفت‌وگوی ایرانیان مهاجر در هر کشور." />;
  } else if (route === "quiz") {
    view = <PlaceholderPage title="آزمون شایستگی" subtitle="چند سؤال ساده تا ببینیم کدام مسیرهای مهاجرت با شرایط شما هم‌خوان است." />;
  }

  return (
    <>
      <TopNav currentRoute={route} onNavigate={navigate} onSignIn={() => setSignInOpen(true)} />
      {view}
      {signInOpen && <SignInModal onClose={() => setSignInOpen(false)} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
