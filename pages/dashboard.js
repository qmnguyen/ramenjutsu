import Layout from "../components/Layout"

const DashboardView = (props) => (
  <Layout>
    <div>
      <p>Hi User!</p>
      <p>Your avatar here</p>
      <div className="stat-block">
        <ul>
          <li>Stat 1: <span>123</span></li>
          <li>Stat 1: <span>123</span></li>
          <li>Stat 1: <span>123</span></li>
          <li>Stat 1: <span>123</span></li>
        </ul>
      </div>
      <div className="upgrade-block">
        <div>Check-in</div>
      </div>
    </div>
  </Layout>
);

export default DashboardView;
