import Link from "next/link"

const Work = (props) => (
  <div>
    <Link href={props.pageUrl}>
      <a>
        <img src={props.photo} alt={`${props.company} snapshot`} />
        {props.company}
      </a>
    </Link>
    <style jsx>{`
      div {
        margin-top: 3em;
      }
      img {
        max-width: 100%;
      }
      a {
        color: #F25652;
        font-weight: bold;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Work
