import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <link rel="manifest" href="/manifest.json" />

          {/* <!-- Must --> */}
          <meta charSet="utf-8" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <meta name="description" content="Dexter Profile" />

          <meta name="theme-color" content={"#EC6C06"} />

          {/* <!-- Android  --> */}
          <meta name="theme-color" content="red" />
          <meta name="mobile-web-app-capable" content="yes" />

          {/* <!-- iOS --> */}
          <meta name="apple-mobile-web-app-title" content="Application Title" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          {/* <!-- Windows  --> */}
          <meta name="msapplication-navbutton-color" content="red" />
          <meta name="msapplication-TileColor" content="red" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="msapplication-config" content="browserconfig.xml" />

          {/* <!-- Pinned Sites  --> */}
          <meta name="application-name" content="Application Name" />
          <meta name="msapplication-tooltip" content="Tooltip Text" />
          <meta name="msapplication-starturl" content="/" />

          {/* <!-- Tap highlighting  --> */}
          <meta name="msapplication-tap-highlight" content="no" />

          {/* <!-- UC Mobile Browser  --> */}
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />

          {/* <!-- Disable night mode for this page  --> */}
          <meta name="nightmode" content="enable/disable" />

          {/* <!-- Layout mode --> */}
          <meta name="layoutmode" content="fitscreen/standard" />

          {/* <!-- imagemode - show image even in text only mode  --> */}
          <meta name="imagemode" content="force" />

          {/* <!-- Orientation  --> */}
          <meta name="screen-orientation" content="portrait" />

          <link rel="icon" sizes="512x512" href="/images/icon-512x512.png" />
          <link rel="icon" sizes="384x384" href="/images/icon-384x384.png" />
          <link rel="icon" sizes="256x256" href="/images/icon-256x256.png" />
          <link rel="icon" sizes="192x192" href="/images/icon-192x192.png" />

          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/images/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="/images/icon-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="/images/icon-256x256.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/images/icon-192x192.png"
          />

          <link
            rel="mask-icon"
            href="/images/logo/favicon.svg"
            color={"#EC6C06"}
          />
          <link rel="shortcut icon" href="/images/logo/favicon.ico" />

          <script async src="https://polyfill.io/v3/polyfill.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
