import "./StatBlock.scss"

const StatBlock = (props) => (
  <div className="stat-block">
    <ul>
      {props.beerlist.map((beer) => (
        <li key={beer.beer.bid}>
          <img src={beer.beer.beer_label} alt={beer.beer_name} />
          <a>{beer.beer.beer_name}</a>
        </li>
      ))}
      <li>{props.abv}</li>
    </ul>
  </div>
)

export default StatBlock
