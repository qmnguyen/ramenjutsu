import Head from 'next/head'
import Header from './header'

const Layout = (props) => (
  <div>
    <Head>
      <title>quan</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="It's a playfolio!" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dokdo|IBM+Plex+Mono:200,400,400i,700" />
    </Head>
    <Header />
    {props.children}
    <style jsx global>{`
      body {
        background: #DDBD85;
        color: #F1F0E2;;
        font-size: 20px;
        font-family: 'IBM Plex Mono', monospace;
        line-height: 1.4;
      }
    `}</style>
    <style jsx>{`
      div {
        margin: 0 auto;
        max-width: 800px;
        padding: 50px;
      }
    `}</style>
  </div>
)

export default Layout
