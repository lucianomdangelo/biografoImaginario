import '../styles/globals.css'
import AppLayout from '../components/AppLayout'

import '../styles/globals.css'
import { SWRConfig } from "swr";
import fetch from "../lib/fetchJson";

function MyApp({ Component, pageProps }) {
  return <SWRConfig
    value={{
      fetcher: fetch,
      onError: (err) => {
        console.error(err);
      },
    }}
  >
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </SWRConfig>;
}

export default MyApp