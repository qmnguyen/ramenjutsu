import Layout from '../components/layout'
import SideNav from '../components/side-nav'

const CuseApp = () => (
  <Layout>
    <SideNav />
    <div>
      <img src="/static/tyus-mobile.png" alt="cuse app mobile mock" />
      <img src="/static/tyus-desktop.png" alt="cuse app desktop mock" />
    </div>
    <style jsx>{`
      img {
        display: block;
        max-width: 100%;
      }
    `}</style>
  </Layout>
)

export default CuseApp
