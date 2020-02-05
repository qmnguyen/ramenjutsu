import Link from "next/link";

import Layout from "../components/Layout";

const Index = (props) => {

  return (
    <Layout>
      <br />
      <Link href="/">
        <a>Login with your Untappd account</a>
      </Link>
    </Layout>
  )
}

export default Index;
