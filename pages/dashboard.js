import Layout from "../components/Layout";
import StatBlock from "../components/StatBlock";
import GetAccessToken from "./abvrpgcallback";

import fetch from "isomorphic-unfetch";

const DashboardView = (props) => (
  <Layout>
    <div>
      <p>Hi User!</p>
      <p>Your avatar here</p>
      <StatBlock beerlist={props.beers} />
      <div className="upgrade-block">
        <div>
          <span>The token:</span>
          <GetAccessToken />
        </div>
        <style jsx>{`
          padding-top: 20px;
          padding-bottom: 100px;
        `}</style>
      </div>
    </div>
  </Layout>
);

DashboardView.getInitialProps = async () => {
  const res = await fetch(`https://api.untappd.com/v4/user/checkins?access_token=A727F8E64985BD0506340CEA18BEE021383E8027`);

  const data = await res.json();

  // { console.log(data.response.checkins.items) }
  return {
    beers: data.response.checkins.items
  }
}

export default DashboardView;
