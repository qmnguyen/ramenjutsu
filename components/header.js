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
    <style jsx global>{`
      body {
        background: #DDBD85;
        color: #293E49;
        font-size: 20px;
        line-height: 1.4;
      }
    `}</style>
  </div>
)

export default Header
