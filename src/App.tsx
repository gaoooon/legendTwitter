import { useEffect, useState } from "react";
import Router from "@/router";
import { ResetCSS, GlobalStyle } from "@/styles";
import { LoadingPage } from "@/pages";
import { auth } from "@/firebase/config";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ResetCSS />
      {isLoading ? <LoadingPage /> : <Router />}
    </ThemeProvider>
  );
};

export default App;
