import Layout from '../components/layout'
import Link from 'next/link'

const SideNav = (props) => (
  <nav className="sidenav-container">
    <Link href="/">
      <img src="/static/q-dot-logo.png" alt="q logo" />
    </Link>
    <div></div>
    <div className="nav-items">
      <p className="nav-section-title">Work<span></span></p>
      <Link href="/unified">
        <a>Unified</a>
      </Link>
      <Link href="/financial-sciences">
        <a>Financial Sciences</a>
      </Link>
      <p className="nav-section-title">Play<span></span></p>
    </div>
    <style jsx>{`
      .sidenav-container {
        background-color: #F25652;
        max-width: 90px;
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
        color: #F1F0E2;
        display: block;
        line-height: 1.2;
        margin-bottom: 15px;
      }
      .nav-section-title {
        color: #444444;
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
