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
        <a className="block">Financial Sciences</a>
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
      @media(max-width: 495px) {
        .sidenav-container {
          flex: none;
          max-width: 100%;
          overflow: auto;
        }
        .nav-items > * {
          display: inline-block;
        }
        .nav-items > p:last-of-type,
        .nav-items > :last-child {
          margin: 0;
        }
        .nav-items .block:before {
          content: "";
          background-color: #F1F0E2;
          display: inline-block;
          height: 15px;
          margin: 0 8px;
          width: 3px;
        }
      }
      img {
        margin-bottom: 50px;
        max-width: 50px;
      }
      @media(max-width: 495px) {
        img {
          margin-bottom: 0;
        }
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
