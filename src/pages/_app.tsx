import { AppProps } from "next/app";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}