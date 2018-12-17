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
      div {spi
        margin-top: 3em;
      }
      img {
        max-width: 100%;
      }
    `}</style>
  </div>
)

export default Work
