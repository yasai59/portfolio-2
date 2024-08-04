import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const languages = ["en", "es", "ca", "ja"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      changeLanguage(languages[index]);
      index = (index + 1) % languages.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {t("hello")} {t("world")}
    </>
  );
}

export default App;
