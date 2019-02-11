import DashLayout from '../../components/abv-rpg/abvrpg-dash'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <DashLayout>
    <h1>Welcome back, Q!</h1>
    <ul>
      {props.beers.map(({beer}) => (
        <li key={beer.bid}>
          <img src={beer.beer_label} alt={beer.beer_name} />
          <a>{beer.beer_name}</a>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1 {
        margin: 40px auto;
        text-align: center;
      }
      ul {
        list-style-type: none;
        margin-left: 0;
        padding-left: 0;
      }
      li {
        background: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 4px;
        display: inline-block;
        height: 250px;
        margin: 0 20px 40px 0px;
        padding: 20px;
        text-align: center;
        vertical-align: top;
        width: 250px;
      }
      @media (max-width: 620px) {
        li {
          margin-right: 0;
        }
      }
      li:nth-child(2n) {
        margin-right: 0;
      }
      li:last-of-type {
        margin-right: 0;
      }
      li img {
        margin-bottom: 15px;
        max-width: 150px;
      }
      li a {
        display: block;
      }
    `}</style>
  </DashLayout>
)

Index.getInitialProps = async function(context) {
  const res = await fetch(`https://api.untappd.com/v4/user/checkins/quandangle?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)

  const data = await res.json()

  return {
    beers: data.response.checkins.items
  }
}

export default Index
