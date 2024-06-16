import { Layout } from '@/components'
import { AppProps } from 'next/app'

import '../styles/css-reset.css'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
