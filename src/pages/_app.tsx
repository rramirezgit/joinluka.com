import "@/styles/globals.css";
import ThemeLuka from "@/theme";
import type { AppProps } from "next/app";
import "@fontsource/open-sans/variable.css";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeLuka>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeLuka>
  );
}
