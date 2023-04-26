import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/mainfont.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hongdakyung.vercel.app/" />
        <meta property="og:title" content="홍다경 포트폴리오" />
        <meta property="og:image" content="/images/mainPhoto.jpeg" />
        <meta
          property="og:description"
          content="한번 더 보고싶은 개발자 홍다경입니다."
        />
        <meta property="og:site_name" content="홍다경 포트폴리오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
