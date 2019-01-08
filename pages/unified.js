import Layout from '../components/layout'

const Unified = () => (
  <Layout>
    <h1>Unified</h1>
    <p className="tenure">2012–present</p>
    <p className="blurb">From the beginning, I obsessed over enterprise software intricacies like button placement, table design, tooltips, modals, and graphs. However, when the need arose, my attention was realigned to decks, one sheets, and other sales collateral. This was part of my general responsibility, until projects like designing lead-generation tools or billboard animations popped up—then it required a bit more knuckle-cracking to get down to business.</p>
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

export default Unified
