const ABVRPGCallback = (props) => (
  <ul>
    {props.beers.map(({beer}) => (
      <li key={beer.bid}>
        <img src={beer.beer_label} alt={beer.beer_name} />
        <a>{beer.beer_name}</a>
      </li>
    ))}
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
        display: block;
        line-height: 1.25;
      }
    `}</style>
  </ul>
)

// props.url.asPath contains the code sent back from Untappd API
// redirecturl/?code=CODE

ABVRPGCallback.getInitialProps = async function(context) {
  const res = await fetch(`https://api.untappd.com/v4/user/checkins?access_token=${process.env.ACCESS_TOKEN}`)

  const data = await res.json()

  return {
    beers: data.response.checkins.items
  }
}

export default ABVRPGCallback
