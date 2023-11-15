import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;800&family=Open+Sans:wght@500&family=Roboto:wght@100&family=Source+Code+Pro:wght@200;500;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;800&family=Open+Sans:wght@500&family=Roboto+Mono:wght@200&family=Roboto:wght@100&family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Sometype+Mono:wght@600&display=swap" rel="stylesheet"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
