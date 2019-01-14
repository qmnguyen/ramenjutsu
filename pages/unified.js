import Layout from '../components/layout'
import SideNav from '../components/side-nav'

const Unified = () => (
  <Layout>
    <SideNav />
    <div className="exp-container">
      <h1>Unified</h1>
      <p className="tenure">2012–present</p>
      <p className="blurb">From the beginning, I obsessed over enterprise software intricacies like button placement, table design, tooltips, modals, and graphs. However, when the need arose, my attention was realigned to decks, one sheets, and other sales collateral. This was part of my general responsibility, until projects like designing lead-generation tools or billboard animations popped up—then it required a bit more knuckle-cracking to get down to business.</p>
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
        max-width: 38em;
      }
    `}
    </style>
  </Layout>
)

export default Unified
