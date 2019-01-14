import Layout from '../components/layout'
import Link from 'next/link'

const SideNav = (props) => (
  <nav className="sidenav-container">
    <Link href="/">
      <img src="/static/q-dot-logo.png" alt="q logo" />
    </Link>
    <Link href="/unified">
      <a>Unified</a>
    </Link>
    <Link href="/financial-sciences">
      <a>Financial Sciences</a>
    </Link>
    <style jsx>{`
      .sidenav-container {
        background-color: #F25652;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 185px;
        padding: 40px;
      }
      img {
        margin-bottom: 50px;
        max-width: 50px;
      }
      a {
        color: #F1F0E2;
        margin-bottom: 15px;
      }
    `}</style>
  </nav>
)

export default SideNav
