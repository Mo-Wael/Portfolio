import React from "react";
import Intro from "./Intro";
import AboutPage from "./AboutPage";

const FirstPage = () => {
  const [showIntro] = React.useState(() => {
    const seenIntro = sessionStorage.getItem("seenIntro");
    return !seenIntro; // true لو أول مرة في الجلسة
  });

  React.useEffect(() => {
    if (showIntro) {
      sessionStorage.setItem("seenIntro", "true");
    }
  }, [showIntro]);

  return (
    <>
      {showIntro ? (
        <>
          <Intro /><AboutPage />
        </>
      ) : (
        <AboutPage />
      )}
    </>
  );
};

export default FirstPage;
