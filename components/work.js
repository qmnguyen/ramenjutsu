import Link from "next/link"

const Work = (props) => (
  <div>
    <img src={props.photo} alt="Unified snapshot" />
    <Link href="/unified">
      <a>{props.company}</a>
    </Link>
    <style jsx>{`
      div {
        margin-top: 3em;
      }
      img {
        max-width: 100%;
      }
    `}</style>
  </div>
)

export default Work
