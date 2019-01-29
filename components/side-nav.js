import Layout from '../components/layout'
import Link from 'next/link'

const SideNav = (props) => (
  <nav className="sidenav-container">
    <Link href="/">
      <img src="/static/q-dot-logo.png" alt="q logo" />
    </Link>
    <div className="nav-items">
      <p className="nav-section-title">Work<span></span></p>
      <Link href="/unified">
        <a>Unified</a>
      </Link>
      <Link href="/financial-sciences">
        <a>Financial Sciences</a>
      </Link>
      <p className="nav-section-title">Play<span></span></p>
      <Link href="/cuse-app">
        <a>Cuse</a>
      </Link>
    </div>
    <style jsx>{`
      .sidenav-container {
        background-color: #293E49;
        max-width: 90px;
        overflowY: auto;
        padding: 40px;
      }
      @media(max-width: 430px) {
        .sidenav-container {
          padding: 20px;
        }
      }
      img {
        margin-bottom: 50px;
        max-width: 50px;
      }
      a {
        color: #F25652;
        display: block;
        line-height: 1.2;
        margin-bottom: 15px;
      }
      .nav-section-title {
        color: #F1F0E2;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .nav-section-title span {
        background-color: #444444;
        display: inline-block;
        height: 4px;
        margin-left: 3px;
        width: 4px;
      }
    `}</style>
  </nav>
)

export default SideNav
