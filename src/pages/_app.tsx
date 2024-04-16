import type { AppProps } from "next/app";

import "modern-css-reset/dist/reset.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
