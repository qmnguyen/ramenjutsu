import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <img src="/static/q-dot-logo.png" alt="q logo" />
    </Link>
    <style jsx>{`
      img {
        margin-right: 20px;
        max-width: 50px;
      }
    `}</style>
  </div>
)

export default Header
