import Head from 'next/head'

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>quan</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#f25652" />
      <meta name="msapplication-TileColor" content="#f1f0e2" />
      <meta name="theme-color" content="#f1f0e2" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="It's a playfolio from Quan Nguyen, a ramen-obsessed, watch-addicted, craft beer-sipping, NYC-based, digital designer!" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:200,400,800|IBM+Plex+Mono:200,400,400i,700" />
    </Head>
    {props.children}
    <style jsx global>{`
      html {
        height: 100%;
        padding: 0;
        width: 100%;
      }
      body {
        background: #DDBD85;
        color: #293E49;
        font-size: 20px;
        font-family: 'IBM Plex Mono', monospace;
        height: 100%;
        line-height: 1.4;
        margin: 0;
        padding: 0;
      }
      #__next {
        height: 100%;
        width: 100%;
      }
      h1 { font-family: 'Raleway', sans-serif; }
      a {
        color: #F25652;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        text-decoration: none;
      }
      ::selection {
        background-color: #DDBD85;
        color: #F1F0E2;
      }
    `}</style>
    <style jsx>{`
      .container {
        background: url(/static/bg-texture.png) 0 0 no-repeat;
        background-size: cover;
        display: flex;
        min-height: 100%;
      }
      @media(max-width: 595px) {
        .container {
          display: block;
          flex: none;
        }
      }
    `}</style>
  </div>
)

export default Layout
