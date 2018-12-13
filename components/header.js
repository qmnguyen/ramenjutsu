import Link from 'next/link'

const logoStyle = {
  marginRight: 20,
  maxWidth: 50
}

const Header = () => (
  <div>
    <Link href="/">
      <img style={ logoStyle } src="/static/q-dot-logo.png" alt="q logo" />
    </Link>
  </div>
)

export default Header
