import { useEffect, useState } from "react";
import Router from "@/router";
import { ResetCSS, GlobalStyle } from "@/styles";
import { LoadingPage } from "@/pages";
import { auth } from "@/firebase/config";

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ResetCSS />
      {isLoading ? <LoadingPage /> : <Router />}
    </>
  );
};

export default App;
