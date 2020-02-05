import Head from "next/head";
import Header from "./Header";
import NavBar from "./NavBar";
import "./Layout.scss";
import "./main.scss";

const Layout = (props) => (
  <div className="Layout">
    <Head>
      <title>ABV RPG</title>
    </Head>
    <Header />
    <div className="Content">
      {props.children}
    </div>
    <NavBar />
  </div>
);

export default Layout;
