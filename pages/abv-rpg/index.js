import DashLayout from '../../components/abv-rpg/abvrpg-dash'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const authlink = "https://untappd.com/oauth/authenticate/"

const Index = (props) => (
  <DashLayout>
    <h1>Welcome back, Q!</h1>
    <Link href={{ pathname: `${authlink}`, query: { client_id: `${process.env.CLIENT_ID}`, response_type: "code", redirect_url: "https://ramenjutsu.com/abvrpgcallback" } }}>
      <a className="login-link">Login</a>
    </Link>
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
        margin: 40px auto 20px;
        text-align: center;
      }
      .login-link {
        display: block;
        margin-bottom: 40px;
        text-decoration: none;
        text-transform: uppercase;
      }
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
        display: block;
        line-height: 1.25;
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
