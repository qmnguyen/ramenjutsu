import Layout from '../components/layout'
import SideNav from '../components/side-nav'

const Fisci = () => (
  <Layout>
    <SideNav/>
    <div className="exp-container">
      <h1>Financial Sciences</h1>
      <p className="tenure">2009–2012</p>
      <p className="blurb">This was the start of my professional digital career designing enterprise software. Wrestling with large tables stuffed with financial datasets was a regular day. Also, redesigning the company website and maintaining it became a thing.</p>
    </div>
    <style jsx>{`
      h1 {
        font-family: 'Raleway', sans-serif;
        line-height: 1;
        margin-top: 55px;
        margin-bottom: 10px;
      }
      .exp-container {
        background-color: #F1F0E2;
        align-self: stretch;
        padding: 30px 60px 80px 100px;
      }
      .tenure {
        color: #F25652;
        margin-top: 2px;
        margin-bottom: 40px;
      }
      .blurb {
        line-height: 1.5;
      }
    `}
    </style>
  </Layout>
)

export default Fisci
