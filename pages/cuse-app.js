import Layout from '../components/layout'
import SideNav from '../components/side-nav'

const CuseApp = () => (
  <Layout>
    <SideNav />
    <div className="exp-container">
      <p className="blurb">Just a little interest project for my favorite college team, Syracuse University.</p>
      <img src="/static/tyus-mobile.png" alt="cuse app mobile mock" />
      <img src="/static/tyus-desktop.png" alt="cuse app desktop mock" />
    </div>
    <style jsx>{`
      .exp-container {
        align-self: stretch;
        overflow: auto;
        padding: 80px 60px 80px 100px;
      }
      .blurb {
        line-height: 1.5;
        margin-bottom: 60px;
        max-width: 38em;
      }
      img {
        display: block;
        margin: 40px 0;
        max-width: 100%;
      }
    `}</style>
  </Layout>
)

export default CuseApp
