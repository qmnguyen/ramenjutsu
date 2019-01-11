import Link from "next/link"

const Work = (props) => (
  <div>
    <Link href={props.pageUrl}>
      <a>
        {props.company}
        <img src={props.photo} alt={`${props.company} snapshot`} />
      </a>
    </Link>
    <style jsx>{`
      div {
        margin-bottom: 60px;
      }
      img {
        margin-top: 12px;
        max-width: 100%;
      }
      a {
        color: #F25652;
        display: block;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        position: relative;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Work
