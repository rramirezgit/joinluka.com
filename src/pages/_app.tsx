import "@/styles/globals.css";
import ThemeLuka from "@/theme";
import type { AppProps } from "next/app";
import "@fontsource/open-sans/variable.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeLuka>
      <Component {...pageProps} />
    </ThemeLuka>
  );
}
