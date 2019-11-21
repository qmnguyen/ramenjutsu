import Layout from '../components/layout'
import SideNav from '../components/side-nav'
import Work from '../components/work'

const Unified = () => (
  <Layout>
    <SideNav />
    <div className="exp-container">
      <h1>Unified</h1>
      <p className="tenure">2012–present</p>
      <p className="blurb">Over the years, I obsessed over enterprise software intricacies like button placement, table design, tooltips, modals, and graphs. However, when the need arose, my attention could realign to decks, one sheets, and other sales collateral. This was all part of my general responsibility, until projects like designing lead-generation tools or billboard animations popped up—then it required a bit more knuckle-cracking to get down to business.</p>
      <div className="work-type">
        <h2>Application</h2>
        <Work
          company="Unified"
          photo="/static/section-2.png"
          rotation="3"
        />
        <Work
          company="Unified"
          newwidth="600"
          photo="/static/data-config-dialog.png"
          rotation="-1"
        />
        <Work
          company="Unified"
          newwidth="600"
          photo="/static/data-config-bulk-date.png"
          rotation="1"
        />
        <Work
          company="Unified"
          photo="/static/newsopinitiative-1a.png"
          rotation="-5"
        />
      </div>
      <div className="work-type">
        <h2>Website</h2>
        <Work
          company="Unified"
          photo="/static/adscore.gif"
          rotation="2"
        />
        <Work
          company="Unified"
          newwidth="500"
          photo="/static/FB-Ad-Monitor_Performance-Cards.jpg"
          rotation="-3"
        />
        <Work
          company="Unified"
          newwidth="700"
          photo="/static/adscore-flow.png"
          rotation="4"
        />
        <Work
          company="Unified"
          newwidth="390"
          photo="/static/adscore-error.png"
          rotation="9"
        />
        <Work
          company="Unified"
          photo="/static/Dark_social_packet_LP.png"
          rotation="-7"
        />
        <Work
          company="Unified"
          photo="/static/case-study-lp.gif"
          rotation="-2"
        />
      </div>
      <div className="work-type">
        <h2>Print</h2>
        <Work
          company="Unified"
          photo="/static/mapthegraph-tshirt-black.png"
          rotation="-4"
        />
        <Work
          company="Unified"
          photo="/static/smbg-q1-2016.png"
          rotation="2"
        />
        <Work
          company="Unified"
          photo="/static/infographic.png"
          rotation="4"
        />
      </div>
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
        margin-bottom: 40px;
        max-width: 38em;
      }
      .work-type h2 {
        margin-top: 40px;
      }
    `}
    </style>
  </Layout>
)

export default Unified
