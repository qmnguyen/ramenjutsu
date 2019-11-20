import Layout from '../components/layout'
import SideNav from '../components/side-nav'
import Work from '../components/work'

const Index = () => (
  <Layout>
    <SideNav />
    <div className="main-section">
      <h1>the<br/>
      <span>playfolio</span><br/>
      of a<br/>
      designer</h1>
      <p className="intro">This is a place anchored in the internet for me to show some stuff; these are things I had a chance to be involved with, as well as some experimental stuff I had a chance to dream up. For other things, go check out my <a href="https://dribbble.com/ramenjutsu">Dribbble</a> or we can chat on <a href="https://twitter.com/ramenjutsu">Twitter</a>.</p>
    </div>
    <style jsx>{`
      h1 {
        font-family: 'Raleway', sans-serif;
        font-size: 6em;
        font-weight: 800;
        letter-spacing: 3px;
        line-height: 0.8;
        margin-bottom: 50px;
        margin-top: 20px;
        text-transform: uppercase;
      }
      @media(max-width: 950px) {
        h1 {
          font-size: 1.8em;
        }
      }
      h1 span {
        background-color: #F25652;
        color: #F1F0E2;
        padding-left: 0.1em;
        padding-right: 0.1em;
      }
      .intro {
        line-height: 1.5;
        margin-bottom: 80px;
        max-width: 35em;
      }
      .main-section {
        align-self: flex-start;
        overflow: auto;
        padding: 20px 60px 80px 100px;
      }
      @media(max-width: 748px) {
        .main-section { padding-left: 40px; }
      }
      @media(max-height: 736px) {
        .main-section { align-self: stretch; }
      }
    )
    `}</style>
  </Layout>
)

export default Index
