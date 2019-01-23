import DashLayout from '../../components/abv-rpg/abvrpg-dash'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <DashLayout>
    <h1>Welcome back, Q!</h1>
    <ul>
    {/* {props.beers.map(({beer}) => (
      <li key={beer.bid}>
        <img src={beer.beer_label} alt={beer.beer_name} />
        <a>{beer.beer_name}</a>
      </li>
    ))} */}
    </ul>
    <style jsx>{`
      ul {
        list-style-type: none;
        margin-left: 0;
        padding-left: 0;
      }
      li {
        margin-bottom: 40px;
        width: 300px;
      }
      li img { max-width: 100%; }
      li a { display: block; }
    `}</style>
  </DashLayout>
)

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.untappd.com/v4/user/checkins/USERNAME?client_id=ID&client_secret=SECRET')
//
//   const data = await res.json()
//
//   return {
//     beers: data.response.checkins.items
//   }
// }

export default Index
