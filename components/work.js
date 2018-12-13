import Link from "next/link"

const Work = () => (
  <div>
    <img src="https://source.unsplash.com/random/960x300" alt="Unified snapshot" />
    <Link href="/unified">
      <a>Unified</a>
    </Link>
    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
  </div>
)

export default Work
