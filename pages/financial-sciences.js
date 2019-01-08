import Layout from '../components/layout'

const Fisci = () => (
  <Layout>
    <h1>Financial Sciences</h1>
    <p className="tenure">2009–2012</p>
    <p className="blurb">This was the start of my professional digital career designing enterprise software. Wrestling with large tables stuffed with financial datasets was a regular day. Also, redesigning the company website and maintaining it became a thing.</p>
    <style jsx>{`
      h1 {
        margin-top: 55px;
        margin-bottom: 0;
      }
      .tenure {
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
