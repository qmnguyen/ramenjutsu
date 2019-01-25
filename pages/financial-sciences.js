import Layout from '../components/layout'
import SideNav from '../components/side-nav'

const Fisci = () => (
  <Layout>
    <SideNav />
    <div className="exp-container">
      <h1>Financial Sciences</h1>
      <p className="tenure">2009–2012</p>
      <p className="blurb">This was the start of my professional digital career designing enterprise software. Wrestling with large tables stuffed with financial datasets was a regular day. Also, redesigning the company website and maintaining it became a thing.</p>
    </div>
    <style jsx>{`
      h1 {
        font-family: 'Raleway', sans-serif;
        line-height: 1;
        margin-top: 0;
        margin-bottom: 10px;
      }
      .exp-container {
        align-self: stretch;
        overflow: auto;
        padding: 80px 60px 80px 100px;
      }
      @media(max-width: 495px) {
        .exp-container { padding-left: 40px; }
      }
      .tenure {
        color: #F1F0E2;
        font-weight: bold;
        letter-spacing: 1px;
        margin-top: 2px;
        margin-bottom: 40px;
        text-transform: uppercase;
      }
      .blurb {
        line-height: 1.5;
        max-width: 38em;
      }
    `}
    </style>
  </Layout>
)

export default Fisci
