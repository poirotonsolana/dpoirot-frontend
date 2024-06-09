import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>
                    Poirot
                </title>
                <link rel="icon" href="/logo.png" type="image/png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}