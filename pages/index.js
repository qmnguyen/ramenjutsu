import Layout from '../components/layout'
import SideNav from '../components/side-nav'
import Work from '../components/work'

const Index = () => (
  <Layout>
    <SideNav />
    <div className="main-section">
      <h1>the playfolio of a designer</h1>
      <p className="intro">This is a place anchored in the internet for me to show some stuff; these are things I had a chance to be involved with, as well as some experimental stuff I had a chance to dream up. For other things, go check out my <a href="https://dribbble.com/ramenjutsu">Dribbble</a> or we can chat on <a href="https://twitter.com/ramenjutsu">Twitter</a>.</p>
    </div>
    {/* <Work
      company="Unified"
      pageUrl="/unified"
      photo="/static/unified-01.png"
    />
    <Work
      company="Financial Sciences"
      pageUrl="/financial-sciences"
      photo="/static/fisci-01.png"
    /> */}
    <style jsx>{`
      h1 {
        font-family: 'Raleway', sans-serif;
        font-size: 4.8em;
        font-weight: 800;
        letter-spacing: 3px;
        line-height: 0.9;
        margin-bottom: 50px;
        margin-top: 0;
        text-transform: uppercase;
      }
      @media(max-width: 430px) {
        h1 {
          font-size: 1.8em;
        }
      }
      .intro {
        line-height: 1.5;
        max-width: 38em;
      }
      .main-section {
        background-color: #F1F0E2;
        align-self: stretch;
        padding: 60px 60px 80px 100px;
      }
    `}</style>
  </Layout>
)

export default Index
