import Layout from '../components/layout'
import Work from '../components/work'

const Index = () => (
  <Layout>
    <h1>the playfolio of a designer</h1>
    <p className="intro">This a place anchored in the internet for me to show some stuff I had a chance to be involved with, as well as some experimental stuff I had a chance to dream up. For other things, go check out my <a href="https://dribbble.com/ramenjutsu">Dribbble</a> or we can chat on <a href="https://twitter.com/ramenjutsu">Twitter</a>.</p>
    <style jsx>{`
      h1 {
        font-size: 2.4em;
        margin-bottom: 0;
        margin-top: 2em;
      }
      .intro {
        max-width: 32em;
      }
      .intro a {
        color: #F25652;
        font-weight: bold;
        text-decoration: none;
      }
    `}</style>
  </Layout>
)

export default Index
