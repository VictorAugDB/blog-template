import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@600;700&family=Mulish:ital,wght@0,400;0,600;0,700;1,400&family=Roboto&family=Sonsie+One&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}