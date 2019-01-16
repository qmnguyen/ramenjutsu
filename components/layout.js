import Head from 'next/head'

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>quan</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="It's a playfolio from Quan Nguyen, a ramen-obsessed, watch-addicted, craft beer-sipping, NYC-based, digital designer!" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:200,400,800|IBM+Plex+Mono:200,400,400i,700" />
    </Head>
    {props.children}
    <style jsx global>{`
      body {
        background: #F1F0E2;
        color: #555555;
        font-size: 20px;
        font-family: 'IBM Plex Mono', monospace;
        line-height: 1.4;
        margin: 0;
        padding: 0;
      }
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
        display: flex;
        flex-direction: row;
        align-items: stretch;
        height: 100vh;
      }
    `}</style>
  </div>
)

export default Layout
