import Head from 'next/head'

const DashLayout = (props) => (
  <div className="container">
    <Head>
      <title>ABV-RPG</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#f25652" />
      <meta name="msapplication-TileColor" content="#f1f0e2" />
      <meta name="theme-color" content="#f1f0e2" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="The ABV-RPG, check-in your beers and level up!" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:200,400,400i,700" />
    </Head>
    {props.children}
    <style jsx global>{`
      body {
        background: #f4f4f4;
      }
      h1 {
        font-family: 'Raleway', sans-serif;
      }
      a {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 22px;
        font-weight: 200;
      }
      .container {
        margin: 0 auto;
        max-width: 800px;
      }
    `}</style>
  </div>
)

export default DashLayout
