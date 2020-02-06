import Layout from "../components/Layout";

const DashboardView = (props) => (
  <Layout>
    <div>
      <p>Hi User!</p>
      <p>Your avatar here</p>
      <div className="stat-block">
        <ul>
          {props.beers.map(({beer}) => (
            <li key={beer.bid}>
              <img src={beer.beer_label} alt={beer.beer_name} />
              <a>{beer.beer_name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="upgrade-block">
        <div>Check-in</div>
      </div>
      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          list-style-type: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          align-content: center;
          background: #ffffff;
          border: 1px solid #dddddd;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          height: 250px;
          justify-content: center;
          margin: 0 0 40px;
          padding: 20px;
          text-align: center;
          width: 250px;
        }
        li img {
          margin: 0 auto 15px;
          max-width: 150px;
        }
        li a {
          color: black;
          display: block;
          line-height: 1.25;
        }
      `}</style>
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
