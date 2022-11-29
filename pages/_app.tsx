import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return <AnimatePresence mode="wait" initial={false}>
    <Component key={router.pathname} {...pageProps} />
  </AnimatePresence>
}

export default MyApp
