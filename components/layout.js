import Header from './header'

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <style jsx>{`
      div {
        margin: 0 auto;
        max-width: 800px;
        padding: 50px;
      }
    `}</style>
  </div>
)

export default Layout
