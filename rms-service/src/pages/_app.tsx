import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()


  if (router.pathname == "/login" || router.pathname =="/start") {
    return (
      <Component {...pageProps} />
    )
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
